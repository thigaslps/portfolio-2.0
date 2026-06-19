import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
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
      const section = sectionRef.current;
      const title = containerTitleAllProjects.current;
      const projects = section
        ? Array.from(section.querySelectorAll<HTMLDivElement>(".project"))
        : [];
      const lines = section
        ? Array.from(section.querySelectorAll<HTMLDivElement>(".lineProject"))
        : [];

      if (title) {
        gsap.fromTo(
          title,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      gsap.set(projects, { autoAlpha: 0, y: 28 });
      gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

      ScrollTrigger.batch(projects, {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          const batchLines = batch
            .map((project) => project.querySelector<HTMLDivElement>(".lineProject"))
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
    },
    { scope: sectionRef }
  );

  useLayoutEffect(() => {
    if (data) {
      ScrollTrigger.refresh();
    }
  }, [data]);
  return (
    <>
      <div id="projectsSection" ref={sectionRef} className="mb-[8rem]">
        <div className="flex flex-col gap-[3rem]">
          <div
            ref={containerTitleAllProjects}
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
                  PROJETOS
                </span>
              </div>
              <h2 className="break-words font-anton text-5xl leading-none text-lightText [overflow-wrap:anywhere] sm:text-6xl">
                Entregas recentes e o tipo de problema que resolvem
              </h2>
            </div>
            <p className="break-words font-inter text-base leading-7 text-subtitleColor [overflow-wrap:anywhere]">
              Estes projetos mostram domínio do ciclo completo: interface,
              integrações, regras de negócio, banco de dados e publicação. A
              mesma base técnica pode virar uma landing page, um painel interno
              ou uma plataforma para sua empresa.
            </p>
          </div>

          <div
            ref={containerProjectRef}
            className="grid min-w-0 grid-cols-1 gap-5"
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
                  className="project grid min-w-0 grid-cols-1 gap-5 overflow-hidden rounded-md border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-generalText/70 sm:p-5 md:grid-cols-[0.95fr_1.35fr]"
                  key={`div-projects-${index}`}
                >
                  <div className="flex min-w-0 flex-col gap-4">
                    <span className="w-fit max-w-full font-inter text-xs font-bold uppercase tracking-[0.18em] text-generalText sm:tracking-[0.22em]">
                      Case {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <h3 className="min-w-0 max-w-full break-words font-anton text-[2rem] leading-none text-lightText [overflow-wrap:anywhere] sm:text-5xl">
                        {project.name}
                      </h3>
                      <div className="flex shrink-0 gap-3 self-start">
                        <a
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir repositório ${project.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lightText transition-colors hover:border-generalText hover:text-generalText"
                        >
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
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
                    <span className="min-w-0 break-words font-inter text-sm text-subtitleColor [overflow-wrap:anywhere]">
                      {project.techs}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col justify-between gap-5">
                    <div className="flex min-w-0 flex-col gap-3">
                      <strong className="min-w-0 break-words font-inter text-lg text-middleGrayColor [overflow-wrap:anywhere]">
                        {project.result}
                      </strong>
                      <p className="min-w-0 break-words font-inter text-sm leading-6 text-subtitleColor [overflow-wrap:anywhere]">
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

          <div className="flex min-w-0 flex-col items-start justify-between gap-5 rounded-md bg-generalText p-5 text-primary sm:flex-row sm:items-center sm:p-6">
            <div className="min-w-0">
              <span className="block max-w-full break-words font-inter text-xs font-bold uppercase tracking-[0.16em] [overflow-wrap:anywhere] sm:tracking-[0.22em]">
                Quer algo parecido para sua empresa?
              </span>
              <p className="mt-2 break-words font-anton text-3xl leading-none [overflow-wrap:anywhere]">
                Vamos transformar sua ideia em uma entrega publicável.
              </p>
            </div>
            <a
              href="https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%20Vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-md bg-primary px-4 text-center font-inter text-sm font-bold uppercase tracking-[0.12em] text-lightText transition-colors hover:bg-[#2A2A2A] sm:w-auto sm:px-5 sm:tracking-[0.18em]"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
