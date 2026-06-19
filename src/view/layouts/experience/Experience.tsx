import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerExperienceRef = useRef<HTMLDivElement>(null);
  const containerTitleAllExperience = useRef<HTMLDivElement>(null);

  const experienceToShow = [
    {
      name: "Simplex Analytics",
      ocupation: "Desenvolvedor FullStack | SEO",
      time: "Fev 2026 - presente",
      highlights: "Desenvolvimento web, melhorias técnicas de SEO e suporte a produtos digitais orientados por dados.",
    },
    {
      name: "ForeLegal",
      ocupation: "Desenvolvedor FullStack",
      time: "Out 2024 - presente",
      highlights: "Construção de interfaces, APIs e funcionalidades para produto jurídico com foco em consistência e evolução.",
    },
    {
      name: "X Software House",
      ocupation: "Desenvolvedor FullStack",
      time: "Ago 2024 - Nov 2024",
      highlights: "Participação em projetos sob demanda, integração entre front-end e back-end e entregas com prazo definido.",
    },
  ];

  useGSAP(() => {
    const section = sectionRef.current;
    const experiences = section
      ? Array.from(section.querySelectorAll<HTMLDivElement>(".experience"))
      : [];
    const lines = section
      ? Array.from(section.querySelectorAll<HTMLDivElement>(".lineExperience"))
      : [];

    if (containerTitleAllExperience.current) {
      gsap.fromTo(
        containerTitleAllExperience.current,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerTitleAllExperience.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }

    gsap.set(experiences, { autoAlpha: 0, y: 28 });
    gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

    ScrollTrigger.batch(experiences, {
      start: "top 86%",
      once: true,
      onEnter: (batch) => {
        const batchLines = batch
          .map((experience) =>
            experience.querySelector<HTMLDivElement>(".lineExperience")
          )
          .filter((line): line is HTMLDivElement => Boolean(line));

        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          overwrite: "auto",
        });

        gsap.to(batchLines, {
          scaleX: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.18,
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
      <div id="experienceSection" ref={sectionRef}>
        <div className="flex flex-col gap-[3rem]">
          <div
            ref={containerTitleAllExperience}
            className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
          >
            <div className="flex min-w-0 flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={"/iconsAnimated/build.gif"}
                  alt="gif build"
                  width={40}
                  height={40}
                  unoptimized
                />

                <span className="text-[1.2rem] font-inter text-subtitleColor">
                  EXPERIÊNCIA
                </span>
              </div>
              <h2 className="break-words font-anton text-5xl leading-none text-lightText [overflow-wrap:anywhere] sm:text-6xl">
                Vivência em produto, software house e performance
              </h2>
            </div>
            <p className="break-words font-inter text-base leading-7 text-subtitleColor [overflow-wrap:anywhere]">
              Já atuei em contextos diferentes, do desenvolvimento de features
              ao cuidado com SEO técnico. Isso ajuda a enxergar o projeto além
              da tela: performance, manutenção e objetivo comercial entram no
              escopo desde o início.
            </p>
          </div>

          <div
            ref={containerExperienceRef}
            className="grid min-w-0 grid-cols-1 gap-5"
          >
            {experienceToShow.map((item, index: number) => {
              return (
                <article
                  className="experience grid min-w-0 grid-cols-1 gap-5 rounded-md border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[0.7fr_1.3fr]"
                  key={`div-experience-${index}`}
                >
                  <div className="flex min-w-0 flex-col gap-2">
                    <span className="text-sm font-inter text-generalText">
                      {item.time}
                    </span>

                    <span className="break-words text-2xl font-anton text-lightText [overflow-wrap:anywhere]">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col gap-4">
                    <h3 className="break-words font-anton text-4xl leading-none text-lightText [overflow-wrap:anywhere] sm:text-5xl">
                      {item.ocupation}
                    </h3>

                    <p className="break-words font-inter text-sm leading-6 text-subtitleColor [overflow-wrap:anywhere]">
                      {item.highlights}
                    </p>

                    <div className="lineExperience w-full h-[1px]">
                      <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
