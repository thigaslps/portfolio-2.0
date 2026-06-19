import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const refTitle = useRef<HTMLDivElement>(null);
  const refLine = useRef<HTMLDivElement>(null);
  const refTitleDescription = useRef<HTMLDivElement>(null);
  const refSubtitleDescription = useRef<HTMLDivElement>(null);
  const refPhoto = useRef<HTMLDivElement>(null);
  const refBelt = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (refTitle.current) {
      gsap.fromTo(
        refTitle.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refTitle.current,
            start: "top 84%",
            once: true,
          },
        }
      );
    }

    if (refLine.current) {
      gsap.fromTo(
        refLine.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: refLine.current,
            start: "top 86%",
            once: true,
          },
        }
      );
    }

    if (refPhoto.current) {
      gsap.fromTo(
        refPhoto.current,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refPhoto.current,
            start: "top 84%",
            once: true,
          },
        }
      );
    }

    const descriptionTargets = [
      refTitleDescription.current,
      refSubtitleDescription.current,
    ].filter((target): target is HTMLDivElement => Boolean(target));

    if (descriptionTargets.length > 0 && refTitleDescription.current) {
      gsap.fromTo(
        descriptionTargets,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: refTitleDescription.current,
            start: "top 84%",
            once: true,
          },
        }
      );
    }

    if (refBelt.current) {
      gsap.to(refBelt.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    }
  }, { scope: sectionRef });

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div
        id="aboutSection"
        ref={sectionRef}
        className="flex mb-[8rem] flex-col gap-6 pt-20 sm:pt-28"
      >
        <div className="w-full relative overflow-hidden py-8 sm:py-12">
          <div
            className="w-full"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%), " +
                "linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%), " +
                "linear-gradient(to left, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
          >
            <div
              ref={refBelt}
              className="flex w-max whitespace-nowrap will-change-transform"
            >
              {[0, 1].map((item) => (
                <span
                  key={item}
                  className="shrink-0 pr-16 font-lora text-6xl text-white/90 sm:text-7xl lg:text-8xl"
                >
                  Planeje. Desenvolva. Lance. Venda.
                </span>
              ))}
            </div>
          </div>
        </div>
        <span
          ref={refTitle}
          className="font-inter text-generalText text-sm font-semibold uppercase tracking-[0.24em] mt-[2rem]"
        >
          Por trás da entrega
        </span>
        <div ref={refLine} className="w-full h-[1px]">
          <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
        </div>
        <div className="grid w-full min-w-0 grid-cols-1 gap-[3rem] md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div ref={refPhoto} className="min-w-0 w-full">
            <Image
              src="/profile-photo.png"
              width={500}
              height={500}
              alt="Foto de Thiago"
              className="aspect-[4/5] w-full rounded-md border border-white/10 object-cover shadow-custom md:max-w-[420px]"
            />
          </div>

          <div className="flex w-full min-w-0 flex-col gap-6 lg:w-auto">
            <div ref={refTitleDescription} className="min-w-0 leading-none">
              <h2 className="break-words font-anton text-5xl leading-none text-middleGrayColor [overflow-wrap:anywhere] sm:text-6xl">
                Desenvolvimento com visão de negócio.
              </h2>
            </div>
            <div
              ref={refSubtitleDescription}
              className="flex min-w-0 flex-col gap-6 md:w-full"
            >
              <p className="break-words text-base leading-7 text-subtitleColor [overflow-wrap:anywhere]">
                Sou Thiago, desenvolvedor fullstack. Entro no projeto para
                conectar design, tecnologia e objetivo comercial: captar leads,
                apresentar seu serviço com clareza e criar sistemas que não
                travem quando a operação crescer.
              </p>

              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="min-w-0 border-l border-generalText pl-4">
                  <strong className="block font-anton text-3xl text-lightText">
                    Clareza
                  </strong>
                  <span className="font-inter text-sm text-subtitleColor">
                    escopo e próximos passos definidos
                  </span>
                </div>
                <div className="min-w-0 border-l border-generalText pl-4">
                  <strong className="block font-anton text-3xl text-lightText">
                    Velocidade
                  </strong>
                  <span className="font-inter text-sm text-subtitleColor">
                    páginas leves e responsivas
                  </span>
                </div>
                <div className="min-w-0 border-l border-generalText pl-4">
                  <strong className="block font-anton text-3xl text-lightText">
                    Evolução
                  </strong>
                  <span className="font-inter text-sm text-subtitleColor">
                    base pronta para novas features
                  </span>
                </div>
              </div>

              <a
                href="#projectsSection"
                className="inline-flex min-h-12 w-fit items-center justify-center rounded-md border border-white/20 px-5 font-inter text-sm font-bold uppercase tracking-[0.18em] text-lightText transition-colors hover:border-generalText hover:text-generalText"
              >
                Ver trabalhos recentes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
