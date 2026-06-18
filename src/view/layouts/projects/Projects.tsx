import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface GithubRepo {
  name: string;
  html_url: string;
  homepage: string | null | undefined;
}

interface GithubResponse {
  content: GithubRepo[];
}

export default function Projects() {
  const [data, setData] = useState<GithubResponse | null>(null);
  const containerProjectRef = useRef<HTMLDivElement>(null);
  const containerTitleAllProjects = useRef<HTMLDivElement>(null);

  const projectsToShow = [
    {
      name: "spellchecker",
      techs: "Typescript",
      result: "Biblioteca offline para melhorar formulários e reduzir erros.",
      description:
        "Correção de digitação e acentuação em tempo real, com sugestão automática ou card interativo quando há múltiplas opções. Funciona sem chamadas externas.",
    },
    {
      name: "apiTaskManagerGlobalParts",
      techs: "Java ○ spring boot",
      result: "Back-end escalável para operação de tarefas.",
      description:
        "API RESTful em Java com Spring Boot para criação, atualização, listagem e exclusão de atividades, preparada para integração com front-ends modernos.",
    },
    {
      name: "taskManagerGlobalParts",
      techs: "Next.js ○ Typescript ○ Tailwind ○ Motion",
      result: "Interface kanban para acompanhar rotinas com clareza.",
      description:
        "Front-end para gerenciamento de tarefas com layout responsivo, estados claros e fluxo visual para acompanhar atividades em andamento.",
    },
    {
      name: "Climate-System",
      techs: "Next.js ○ Typescript ○ Scss",
      result: "Consumo de API externa com experiência rápida e responsiva.",
      description:
        "Aplicação web em TypeScript e SCSS para exibir dados climáticos em tempo real de forma dinâmica, organizada e fácil de consultar.",
    },
    {
      name: "portfolio-2.0",
      techs: "Next.js ○ GSAP ○ Motion ○ Tailwind",
      result: "Presença digital com navegação fluida e foco comercial.",
      description:
        "Site pessoal construído com animações, performance e seções orientadas para apresentar serviços, projetos e caminhos de contato.",
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
                  PROJETOS
                </span>
              </div>
              <h2 className="font-anton text-5xl leading-none text-lightText sm:text-6xl">
                Entregas recentes e o tipo de problema que resolvem
              </h2>
            </div>
            <p className="font-inter text-base leading-7 text-subtitleColor">
              Estes projetos mostram domínio do ciclo completo: interface,
              integrações, regras de negócio, banco de dados e publicação. A
              mesma base técnica pode virar uma landing page, um painel interno
              ou uma plataforma para sua empresa.
            </p>
          </div>

          <div
            ref={containerProjectRef}
            className="grid gap-5"
          >
            {projectsToShow.map((project, index) => {
              const githubData = data?.content.find(
                (item: GithubRepo) => item.name === project.name
              );
              const repoUrl =
                githubData?.html_url ??
                `https://github.com/thigaslps/${project.name}`;
              const deployUrl = githubData?.homepage;

              return (
                <article
                  className="project grid gap-5 rounded-md border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-generalText/70 md:grid-cols-[0.95fr_1.35fr]"
                  key={`div-projects-${index}`}
                >
                  <div className="flex flex-col gap-4">
                    <span className="font-inter text-xs font-bold uppercase tracking-[0.22em] text-generalText">
                      Case {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="break-words text-4xl font-anton leading-none text-lightText sm:text-5xl">
                        {project.name}
                      </h3>
                      <div className="flex shrink-0 gap-3">
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir repositório ${project.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lightText transition-colors hover:border-generalText hover:text-generalText"
                      >
                        <FontAwesomeIcon
                          icon={faUpRightFromSquare}
                        />
                      </a>
                      {deployUrl ? (
                        <a
                          href={deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir deploy ${project.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lightText transition-colors hover:border-generalText hover:text-generalText"
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      ) : null}
                      </div>
                    </div>
                    <span className="text-sm font-inter text-subtitleColor">
                      {project.techs}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-3">
                      <strong className="font-inter text-lg text-middleGrayColor">
                        {project.result}
                      </strong>
                      <p className="text-sm font-inter leading-6 text-subtitleColor">
                        {project.description}
                      </p>
                    </div>

                    <div className="lineProject w-full h-[1px]">
                      <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col items-start justify-between gap-5 rounded-md bg-generalText p-6 text-primary sm:flex-row sm:items-center">
            <div>
              <span className="font-inter text-xs font-bold uppercase tracking-[0.22em]">
                Quer algo parecido para sua empresa?
              </span>
              <p className="mt-2 font-anton text-3xl leading-none">
                Vamos transformar sua ideia em uma entrega publicável.
              </p>
            </div>
            <a
              href="https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%20Vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-primary px-5 font-inter text-sm font-bold uppercase tracking-[0.18em] text-lightText transition-colors hover:bg-[#2A2A2A]"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
