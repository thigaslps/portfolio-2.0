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
    { name: "spellchecker", techs: "Typescript", description: "Biblioteca que corrige palavras com erros de digitação ou acentuação em tempo real. Se encontrar uma única sugestão próxima, corrige automaticamente. Caso haja múltiplas opções, exibe um card interativo para o usuário escolher. Funciona 100% offline, sem chamadas externas." },
    { name: "apiTaskmanage", techs: "Node.js" },
    { name: "Climate-System", techs: "Next.js ○ Typescript ○ Scss" },
    { name: "portfolio-2.0", techs: "Next.js ○ GSAP ○ Motion ○ Tailwind", description:
      `Portfólio 2.0 ${"-"} Uma evolução do meu trabalho como desenvolvedor. 
      Aqui você encontra meus projetos mais recentes e explorando tecnologias modernas. 
      Cada detalhe foi pensado para refletir minha experiência 
      e habilidades, com um design minimalista e uma navegação fluida.`},
    {
      name: "taskmanegement",
      techs: "Next.js ○ Typescript ○ Scss",
      description:
        "Banco de dados temporariamente indisponível para atualização. Projeto retornará em breve.",
    },
  ];

  useEffect(() => {
    try {
      const callBackAPI = async () => {
        const response = await fetch("api/apiGithub", {
          method: "GET",
        });

        if (!response.ok) {
          const data = await response.json();
          toast(`${data.message}`, {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }

        const data = await response.json();

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
            {data
              ? data.content
                  .filter((item: Repo) =>
                    projectsToShow.some((project) => project.name === item.name)
                  )
                  .map((item: Repo, index: number) => {
                    return (
                      <div
                        className="project flex flex-col gap-2"
                        key={`div-projects-${index}`}
                      >
                        <div className="flex gap-4 flex-col sm:flex-row">
                          <span className="text-4xl sm:text-7xl font-anton text-lightText">
                            {item.name}
                          </span>
                          <div className="flex gap-2">
                            <a
                              href={item.html_url}
                              target="_blank"
                              rel="URL repo"
                            >
                              <FontAwesomeIcon
                                icon={faUpRightFromSquare}
                                className="text-lightText"
                              />
                            </a>
                            {item.homepage ? (
                              <a
                                href={item.homepage}
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
                          {projectsToShow[index].techs}
                        </span>

                        <span className="text-sm font-inter text-subtitleColor">
                          {projectsToShow[index]?.description}
                        </span>

                        <div className="lineProject w-full h-[1px]">
                          <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
                        </div>
                      </div>
                    );
                  })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
