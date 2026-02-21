import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Repo {
  content: [];
  name: string;
  html_url: string;
  homepage: string | null | undefined;
}

export default function Projects() {
  const [data, setData] = useState<Repo | null>(null);
  const containerProjectRef = useRef<HTMLDivElement>(null);
  const containerTitleAllProjects = useRef<HTMLDivElement>(null);

  const projectsToShow = [
    {
      name: "spellchecker",
      techs: "Typescript",
      description:
        "Biblioteca que corrige palavras com erros de digitação ou acentuação em tempo real. Se encontrar uma única sugestão próxima, corrige automaticamente. Caso haja múltiplas opções, exibe um card interativo para o usuário escolher. Funciona 100% offline, sem chamadas externas.",
    },
    {
      name: "apiTaskManagerGlobalParts",
      techs: "Java ○ spring boot",
      description:
        "API RESTful desenvolvida em Java com Spring Boot para gerenciamento de tarefas, com suporte a criação, atualização, listagem e exclusão de atividades. Estruturada para ser escalável, segura e fácil de integrar com front-ends modernos.",
    },
    {
      name: "taskManagerGlobalParts",
      techs: "Next.js ○ Typescript ○ Tailwind ○ Motion",
      description:
        "Front-end kanban para gerenciamento de tarefas, com suporte a criação, atualização, listagem e exclusão de atividades. Estruturada para ser escalável, segura e fácil de integrar com front-ends modernos.",
    },
    {
      name: "Climate-System",
      techs: "Next.js ○ Typescript ○ Scss",
      description:
        "Aplicação web desenvolvida para teste técnico, TypeScript e SCSS para exibir dados climáticos em tempo real. Projeto integrado com API externa de clima para exibir informações de forma dinâmica e responsiva.",
    },
    {
      name: "portfolio-2.0",
      techs: "Next.js ○ GSAP ○ Motion ○ Tailwind",
      description: `Portfólio 2.0 ${"-"} Uma evolução do meu trabalho como desenvolvedor. 
      Aqui você encontra meus projetos mais recentes e explorando tecnologias modernas. 
      Cada detalhe foi pensado para refletir minha experiência 
      e habilidades, com um design minimalista e uma navegação fluida.`,
    },
  ];

  useEffect(() => {
    try {
      const callBackAPI = async () => {
        const response = await fetch("api/apiGithub", {
          method: "GET",
        });
        const data = await response.json();
        if (!response.ok) {
          toast(`${data.message}`, {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }

        setData(data);
      };
      callBackAPI();
    } catch (error) {
      toast(`${error instanceof Error ? error.message : String(error)}`, {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, []);

  useGSAP(
    () => {
      setTimeout(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerProjectRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        });

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: containerProjectRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        });

        const projects = gsap.utils.toArray<HTMLDivElement>(".project");
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
          containerTitleAllProjects.current,
          {
            y: -50,
          },
          {
            y: 0,
            scrollTrigger: {
              trigger: containerTitleAllProjects.current,
              start: "top 80%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
        const LineProject = gsap.utils.toArray<HTMLDivElement>(".lineProject");
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
    },
    { dependencies: [data?.content] }
  );

  useLayoutEffect(() => {
    if (data) {
      ScrollTrigger.refresh();
    }
  }, [data]);
  return (
    <>
      <div id="projectsSection" className="mb-[8rem]">
        <div className="flex flex-col gap-[3rem]">
          <div
            ref={containerTitleAllProjects}
            className="flex items-center gap-4"
          >
            <Image
              src={"/iconsAnimated/build.gif"}
              alt="gif build"
              width={40}
              height={40}
              unoptimized
            />

            <span className="text-[1.2rem] font-inter text-subtitleColor">
              PROJETOS
            </span>
          </div>

          <div
            ref={containerProjectRef}
            className="flex gap-[3rem] flex-col flex-wrap"
          >
            {projectsToShow.map((project, index) => {
              const githubData = data?.content.find(
                (item: Repo) => item.name === project.name
              ) as Repo | undefined;
              if (!githubData) return null;

              return (
                <div
                  className="project flex flex-col gap-2"
                  key={`div-projects-${index}`}
                >
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <span className="text-4xl sm:text-7xl font-anton text-lightText">
                      {project.name}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={githubData.html_url}
                        target="_blank"
                        rel="URL repo"
                      >
                        <FontAwesomeIcon
                          icon={faUpRightFromSquare}
                          className="text-lightText"
                        />
                      </a>
                      {githubData.homepage ? (
                        <a
                          href={githubData.homepage}
                          target="_blank"
                          rel="URL Deploy"
                        >
                          <FontAwesomeIcon
                            icon={faLink}
                            className="text-lightText"
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <span className="text-sm font-inter text-subtitleColor">
                    {project.techs}
                  </span>

                  <span className="text-sm font-inter text-subtitleColor">
                    {project.description}
                  </span>

                  <div className="lineProject w-full h-[1px]">
                    <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
