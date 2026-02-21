"use client";

import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const refTitle = useRef<HTMLDivElement>(null);
  const refDescription = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    setTimeout(() => {
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          refTitle.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.3,
            y: -50,
            scrollTrigger: {
              trigger: refTitle.current,
              start: "top 20%",
              end: "top 10%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          refDescription.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.3,
            y: -50,
            scrollTrigger: {
              trigger: refDescription.current,
              start: "top 20%",
              end: "top 10%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          refBtn.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.3,
            y: -50,
            scrollTrigger: {
              trigger: refBtn.current,
              start: "top 20%",
              end: "top 10%",
              scrub: 1,
            },
          }
        );
      });

      mm.add("(max-width: 768px)", () => {
        gsap.fromTo(
          refTitle.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.3,
            y: -50,
            scrollTrigger: {
              trigger: refTitle.current,
              start: "top 10%",
              end: "top top",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          refDescription.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.3,
            y: -50,
            scrollTrigger: {
              trigger: refDescription.current,
              start: "top 20%",
              end: "top 10%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          refBtn.current,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0.3,
            y: -50,
            scrollTrigger: {
              trigger: refBtn.current,
              start: "top 20%",
              end: "top 10%",
              scrub: 1,
            },
          }
        );
      });
    }, 500);

    return () => mm.revert();
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div
        id="homeSection"
        className="flex flex-col w-full h-full gap-4 relative"
      >
        <div className="flex flex-col w-full h-full gap-4">
          <div className="flex flex-col gap-6">
            <div ref={refTitle} id="title">
              <h1 className="text-6xl lg:text-7xl relative mx-auto font-anton text-justify leading-[.95] text-generalText">
                FULLSTACK
              </h1>
              <h1 className="text-6xl lg:text-7xl relative mx-auto font-anton leading-[.95] text-lightText ml-6">
                DEVELOPER
              </h1>
            </div>

            <div
              id="description"
              ref={refDescription}
              className="w-[100%] lg:w-[80%]"
            >
              <span className="text-base font-normal font-inter mx-auto text-justify text-subtitleColor w-full leading-[.95]">
                Olá! Meu nome é{" "}
                <span className="font-medium text-lightText">Thiago</span> e sou
                um desenvolvedor fullstack. Com mais de dois anos de experiência em
                desenvolvimento web, estou sempre em busca de aprimoramento,
                explorando novas tecnologias e criando soluções inovadoras.
              </span>
            </div>
            <div className="flex justify-start items-center">
              <div
                className="flex flex-col gap-4 justify-center sm:flex-row sm:items-center"
                ref={refBtn}
              >
                <div className="">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=thiagolpssouza@gmail.com&su=Vamos iniciar um projeto&body=Oi Thiago, estou entrando em contato para...",
                        "_blank"
                      )
                    }
                    className="p-2 bg-generalText rounded radi text-primary font-anton text-xl w-[12rem] tracking-widest"
                  >
                    CONTATE-ME
                  </motion.button>
                </div>
                <div className="flex gap-4 w-[12rem] flex-wrap">
                  <a
                    href="https://github.com/thigaslps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="">
                      <Image
                        src="/icons/github.png"
                        alt="github"
                        width={30}
                        height={30}
                      />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%0AVim%20do%20seu%20Portf%C3%B3lio.%20Me%20chamo..."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <Image
                        src="/icons/whatsapp.png"
                        alt="whatsapp"
                        width={30}
                        height={30}
                      />
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thigaslps/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <Image
                        src="/icons/linkedin.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
