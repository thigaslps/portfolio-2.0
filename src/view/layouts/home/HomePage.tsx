"use client";

import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const whatsappLink =
    "https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%20Vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";
  const emailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=thiagolpssouza@gmail.com&su=Quero%20desenvolver%20um%20site%20ou%20sistema&body=Oi%20Thiago%2C%20vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.15,
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <>
      <div
        id="homeSection"
        ref={rootRef}
        className="relative flex min-h-screen w-full items-center overflow-hidden bg-primary pt-32 pb-14 sm:pt-36 sm:pb-16"
      >
        <Image
          src="/profile-photo.png"
          alt="Thiago, desenvolvedor fullstack"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 md:opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1A1A1A_0%,rgba(26,26,26,.94)_42%,rgba(26,26,26,.64)_76%,rgba(26,26,26,.86)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,#1A1A1A_0%,rgba(26,26,26,0)_100%)]" />

        <div className="container relative z-10">
          <div className="flex max-w-4xl flex-col gap-6">
            <div id="title" className="hero-reveal flex flex-col gap-4">
              <span className="w-fit max-w-full break-words rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center font-inter text-xs font-semibold uppercase tracking-[0.14em] text-generalText backdrop-blur [overflow-wrap:anywhere] sm:tracking-[0.25em]">
                Desenvolvimento web sob medida
              </span>
              <h1 className="max-w-4xl break-words font-anton text-5xl leading-[.94] text-lightText [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl xl:text-8xl">
                Sites e sistemas que transformam visitantes em clientes.
              </h1>
            </div>

            <div
              id="description"
              className="hero-reveal max-w-2xl"
            >
              <p className="break-words font-inter text-base leading-7 text-middleGrayColor [overflow-wrap:anywhere] sm:text-lg">
                Eu crio páginas, plataformas e integrações com foco em
                performance, clareza e conversão. Você sai com uma presença
                digital pronta para vender, captar leads e sustentar o crescimento
                do negócio.
              </p>
            </div>

            <div className="hero-reveal flex justify-start">
              <div
                className="flex w-full flex-col gap-5 sm:w-auto sm:flex-row sm:items-center"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-generalText px-4 text-center font-anton text-lg tracking-wide text-primary shadow-[0_14px_35px_rgba(245,166,35,.28)] transition-colors hover:bg-[#ffbd4f] sm:px-5 sm:tracking-widest"
                  >
                    <Image
                      src="/icons/whatsapp.png"
                      alt=""
                      width={22}
                      height={22}
                    />
                    PEDIR ORÇAMENTO
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={emailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 text-center font-inter text-sm font-semibold uppercase tracking-[0.12em] text-lightText backdrop-blur transition-colors hover:border-generalText hover:text-generalText sm:px-5 sm:tracking-[0.18em]"
                  >
                    Enviar briefing
                  </motion.a>
                </div>
                <div className="flex items-center gap-4 sm:pl-1">
                  <a
                    href="https://github.com/thigaslps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/10 p-2 transition-colors hover:border-generalText"
                    aria-label="GitHub de Thiago"
                  >
                    <Image
                      src="/icons/github.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/10 p-2 transition-colors hover:border-generalText"
                    aria-label="WhatsApp de Thiago"
                  >
                    <Image
                      src="/icons/whatsapp.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thigaslps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/10 p-2 transition-colors hover:border-generalText"
                    aria-label="LinkedIn de Thiago"
                  >
                    <Image
                      src="/icons/linkedin.png"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-reveal grid max-w-3xl grid-cols-1 border-y border-white/10 py-5 sm:grid-cols-3">
              <div className="py-3 sm:pr-6">
                <strong className="block font-anton text-3xl text-lightText">
                  2+ anos
                </strong>
                <span className="font-inter text-sm text-subtitleColor">
                  criando produtos web reais
                </span>
              </div>
              <div className="border-white/10 py-3 sm:border-x sm:px-6">
                <strong className="block font-anton text-3xl text-lightText">
                  Fullstack
                </strong>
                <span className="font-inter text-sm text-subtitleColor">
                  interface, API, banco e deploy
                </span>
              </div>
              <div className="py-3 sm:pl-6">
                <strong className="block font-anton text-3xl text-lightText">
                  SEO + UX
                </strong>
                <span className="font-inter text-sm text-subtitleColor">
                  páginas pensadas para contato
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
