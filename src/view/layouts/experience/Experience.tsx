import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function Experience() {
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
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerExperienceRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerExperienceRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      const projects = gsap.utils.toArray<HTMLDivElement>(".experience");
      projects.forEach((project, index) => {
        tl.from(
          project,
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          index * 0.5
        ).to(
          project,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          index * 0.5
        );
      });
      gsap.fromTo(
        containerTitleAllExperience.current,
        {
          y: -50,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: containerTitleAllExperience.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
      const LineProject = gsap.utils.toArray<HTMLDivElement>(".lineExperience");
      LineProject.forEach((line, index) => {
        tl2
          .from(
            line,
            {
              scaleX: 0,
            },
            index * 0.5
          )
          .to(
            line,
            {
              scaleX: 1,
            },
            index * 0.5
          );
      });
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <div id="experienceSection">
        <div className="flex flex-col gap-[3rem]">
          <div
            ref={containerTitleAllExperience}
            className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
          >
            <div className="flex flex-col gap-4">
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
              <h2 className="font-anton text-5xl leading-none text-lightText sm:text-6xl">
                Vivência em produto, software house e performance
              </h2>
            </div>
            <p className="font-inter text-base leading-7 text-subtitleColor">
              Já atuei em contextos diferentes, do desenvolvimento de features
              ao cuidado com SEO técnico. Isso ajuda a enxergar o projeto além
              da tela: performance, manutenção e objetivo comercial entram no
              escopo desde o início.
            </p>
          </div>

          <div
            ref={containerExperienceRef}
            className="grid gap-5"
          >
            {experienceToShow.map((item, index: number) => {
              return (
                <article
                  className="experience grid gap-5 rounded-md border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[0.7fr_1.3fr]"
                  key={`div-experience-${index}`}
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-inter text-generalText">
                      {item.time}
                    </span>

                    <span className="text-2xl font-anton text-lightText">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-4xl font-anton leading-none text-lightText sm:text-5xl">
                      {item.ocupation}
                    </h3>

                    <p className="text-sm font-inter leading-6 text-subtitleColor">
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
