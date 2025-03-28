import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const refTitle = useRef<HTMLDivElement>(null);
  const refLine = useRef<HTMLDivElement>(null);
  const refTitleDescription = useRef<HTMLDivElement>(null);
  const refSubtitleDescription = useRef<HTMLDivElement>(null);
  const refPhoto = useRef<HTMLDivElement>(null);
  const refBelt = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setTimeout(() => {
      gsap.fromTo(
        refTitle.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: refTitle.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refLine.current,
        {
          scaleX: 0,
          transformOrigin: "center",
        },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: refLine.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refPhoto.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: refPhoto.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refTitleDescription.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: refTitleDescription.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        refSubtitleDescription.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: refSubtitleDescription.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.to(refBelt.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
          scrub: true,
        },
        x: "-100px",
      });

      requestAnimationFrame(animation);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  const firstText = useRef<HTMLSpanElement>(null);
  const secondText = useRef<HTMLSpanElement>(null);
  let xPercent = 0;
  let direction = -1;

  const animation = () => {
    if (xPercent <= -117.5) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -117.5;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    xPercent += 0.15 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <>
      <div id="aboutSection" className="flex mb-[8rem] flex-col gap-6">
        <div className="w-full relative overflow-hidden">
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
              className="relative flex gap-4 whitespace-nowrap"
            >
              <span
                ref={firstText}
                className="m-0 text-white text-8xl font-lora inline-block"
              >
                Codifique. Crie. Evolua.
              </span>

              <span
                ref={secondText}
                className="m-0 text-white absolute left-[1216px] text-8xl font-lora inline-block"
              >
                Codifique. Crie. Evolua.
              </span>
            </div>
          </div>
        </div>
        <span
          ref={refTitle}
          className="font-inter text-subtitleColor text-sm font-normal leading-[.1] mt-[2rem]"
        >
          Conheça um pouco mais sobre mim
        </span>
        <div ref={refLine} className="w-full h-[1px]">
          <div className="w-full h-[1px] bg-GreyDarkerBgColor"></div>
        </div>
        <div className="flex flex-col items-center w-full gap-[3rem] md:flex-row lg:flex-row">
          <div ref={refPhoto} className="w-full hidden md:block">
            <Image
              src="/photo.jpg"
              width={500}
              height={500}
              alt="Foto de Thiago"
              className="rounded-2xl md:w-[400px]"
            />
          </div>

          <div className="w-[100%] flex flex-col gap-[1rem] lg:w-auto">
            <div ref={refTitleDescription} className="leading-none">
              <span className="text-middleGrayColor leading-none font-inter font-medium text-5xl md:text-3xl">
                Olá, muito prazer!
              </span>
            </div>
            <div
              ref={refSubtitleDescription}
              className="text-justify md:w-[100%]"
            >
              <span className="text-subtitleColor leading-none text-base">
                Sou Thiago, desenvolvedor Fullstack apaixonado por tecnologia.
                Gosto de criar soluções funcionais e intuitivas, equilibrando
                desempenho, escalabilidade e experiência do usuário. Sempre em
                busca de aprendizado, acredito no impacto real da tecnologia na
                vida das pessoas e nos negócios.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
