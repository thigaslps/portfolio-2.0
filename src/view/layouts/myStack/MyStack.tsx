import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MyStack() {
  const imagesTechs = [
    { src: "/techs/next.webp", text: "Next.js" },
    { src: "/techs/js.png", text: "Javascript" },
    { src: "/techs/typescript.png", text: "Typescript" },
    { src: "/techs/reactLogo.png", text: "React" },
    { src: "/techs/node.png", text: "Node.js" },
    { src: "/techs/tailwind.png", text: "Tailwind CSS" },
    { src: "/techs/sass.png", text: "Sass" },
    { src: "/techs/gsap.png", text: "GSAP" },
    { src: "/techs/motion.svg", text: "Framer Motion" },
    { src: "/techs/mysql.png", text: "MySQL" },
    { src: "/techs/postgre.png", text: "PostgreSQL" },
    { src: "/techs/prisma.png", text: "Prisma" },
    { src: "/techs/git.png", text: "Git" },
  ];

  const containerTechsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerTitleAll = useRef<HTMLDivElement>(null);
  const containerTitle = useRef<HTMLDivElement>(null);

  interface TechItem {
    src: string;
    text: string;
  }

  useGSAP(() => {
    const section = sectionRef.current;
    const techs = section
      ? Array.from(section.querySelectorAll<HTMLElement>(".tech"))
      : [];

    if (containerTitleAll.current) {
      gsap.fromTo(
        containerTitleAll.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerTitleAll.current,
            start: "top 84%",
            once: true,
          },
        }
      );
    }

    if (containerTitle.current) {
      gsap.fromTo(
        containerTitle.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerTitle.current,
            start: "top 84%",
            once: true,
          },
        }
      );
    }

    gsap.set(techs, { autoAlpha: 0, y: 24 });

    ScrollTrigger.batch(techs, {
      start: "top 88%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: "auto",
        });
      },
    });
  }, { scope: sectionRef });

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <div ref={sectionRef} className="mb-[8rem]">
        <div className="flex flex-col gap-[3rem]">
          <div ref={containerTitleAll} className="flex items-center gap-4">
            <Image
              src={"/iconsAnimated/build.gif"}
              alt="gif build"
              width={40}
              height={40}
              unoptimized
            />

            <span className="text-[1.2rem] font-inter text-subtitleColor">
              STACK
            </span>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-[3rem] md:grid-cols-[0.8fr_1.2fr]">
            <div
              ref={containerTitle}
              className="flex min-w-0 flex-col gap-5"
            >
              <h2 className="break-words font-anton text-4xl text-lightText [overflow-wrap:anywhere] sm:text-5xl">
                Tecnologias para produtos rápidos e fáceis de evoluir
              </h2>
              <p className="break-words font-inter text-base leading-7 text-subtitleColor [overflow-wrap:anywhere]">
                A escolha da stack considera performance, SEO, integrações,
                manutenção e custo de operação. O objetivo é entregar algo que
                funcione bem no lançamento e continue simples de melhorar.
              </p>
            </div>

            <div
              ref={containerTechsRef}
              className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {imagesTechs.map((items: TechItem, index: number) => {
                return (
                  <div
                    className="tech flex min-h-[72px] min-w-0 items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] px-4"
                    key={`div-${index}`}
                  >
                    <Image
                      src={items.src}
                      alt={items.text}
                      width={50}
                      height={50}
                    />
                    <span className="min-w-0 break-words font-inter text-[1.2rem] text-subtitleColor [overflow-wrap:anywhere]">
                      {items.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
