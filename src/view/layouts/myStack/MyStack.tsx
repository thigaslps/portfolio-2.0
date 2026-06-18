import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

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
  const containerTitleAll = useRef<HTMLDivElement>(null);
  const containerTitle = useRef<HTMLDivElement>(null);

  interface TechItem {
    src: string;
    text: string;
  }

  useGSAP(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerTechsRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      const techs = gsap.utils.toArray<HTMLElement>(".tech");

      techs.forEach((tech, index) => {
        tl.from(
          tech,
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          index * 0.5
        ).to(
          tech,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          index * 0.5
        );
      });

      gsap.fromTo(
        containerTitleAll.current,
        {
          y: -50,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: containerTitleAll.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        containerTitle.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerTitle.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <div className="mb-[8rem]">
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
          <div className="grid gap-[3rem] md:grid-cols-[0.8fr_1.2fr]">
            <div
              ref={containerTitle}
              className="flex flex-col gap-5"
            >
              <h2 className="text-4xl sm:text-5xl font-anton text-lightText">
                Tecnologias para produtos rápidos e fáceis de evoluir
              </h2>
              <p className="font-inter text-base leading-7 text-subtitleColor">
                A escolha da stack considera performance, SEO, integrações,
                manutenção e custo de operação. O objetivo é entregar algo que
                funcione bem no lançamento e continue simples de melhorar.
              </p>
            </div>

            <div
              ref={containerTechsRef}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {imagesTechs.map((items: TechItem, index: number) => {
                return (
                  <div
                    className="tech flex min-h-[72px] items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] px-4"
                    key={`div-${index}`}
                  >
                    <Image
                      src={items.src}
                      alt={items.text}
                      width={50}
                      height={50}
                    />
                    <span className="text-[1.2rem] font-inter text-subtitleColor">
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
