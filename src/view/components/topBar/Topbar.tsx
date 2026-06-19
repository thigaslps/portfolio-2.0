import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Topbar() {
  const animationAppearScale = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
    exit: { opacity: 0, scale: 0 },
  };
  type NavLink = {
    name: string;
    link: string;
  };

  const links = [
    { name: "INÍCIO", link: "/" },
    { name: "SERVIÇOS", link: "#servicesSection" },
    { name: "PROJETOS", link: "#projectsSection" },
    { name: "EXPERIÊNCIA", link: "#experienceSection" },
  ];
  const whatsappLink =
    "https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%20Vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuFunc = () => {
    setToggleMenu((prev) => !prev);
  };

  const menuVars = {
    inital: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const exitVars = {
    initial: {
      opacity: 0,
      y: "1vh",
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const lenis = useLenis();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (toggleMenu) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      lenis?.start();
    };
  }, [toggleMenu, lenis]);

  return (
    <>
      <header>
        <nav>
          <div className="fixed left-0 top-0 z-50 w-full p-3">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-md border border-white/10 bg-primary/80 px-4 py-3 shadow-custom backdrop-blur-xl">
              <Link
                href="/"
                className="font-anton text-2xl tracking-wide text-lightText"
              >
                THIAGO<span className="text-generalText">.DEV</span>
              </Link>

              <div className="hidden items-center gap-6 md:flex">
                {links.slice(1).map((link: NavLink) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-subtitleColor transition-colors hover:text-generalText"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden h-10 items-center justify-center gap-2 rounded-md bg-generalText px-4 font-inter text-xs font-bold uppercase leading-none tracking-[0.08em] text-primary transition-colors hover:bg-[#ffbd4f] sm:inline-flex"
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt=""
                    width={18}
                    height={18}
                    className="block h-[18px] w-[18px] shrink-0 object-contain"
                  />
                  <span className="block pt-[1px]">WhatsApp</span>
                </a>
                <motion.button
                  variants={animationAppearScale}
                  initial="initial"
                  animate="animate"
                  exit={animationAppearScale.exit}
                  whileInView="whileInView"
                  transition={animationAppearScale.transition}
                  onClick={toggleMenuFunc}
                  className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 font-inter text-xs font-bold uppercase leading-none tracking-[0.12em] text-lightText transition-colors hover:border-generalText hover:text-generalText"
                  type="button"
                  aria-label="Abrir menu"
                >
                  <FontAwesomeIcon icon={faBars} className="h-3.5 w-3.5 shrink-0" />
                  <span className="block pt-[1px]">Menu</span>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              variants={menuVars}
              initial="inital"
              animate="animate"
              exit={menuVars.exit}
              className="fixed flex flex-col w-full h-screen gap-4 bg-secondary z-50 p-3 px-4 origin-top overflow-hidden"
            >
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className=""
              >
                <motion.div
                  variants={exitVars}
                  className="display flex justify-end cursor-pointer text-lightText"
                >
                  <button
                    onClick={toggleMenuFunc}
                    className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 font-inter text-xs font-bold uppercase leading-none tracking-[0.12em] text-lightText"
                    type="button"
                    aria-label="Fechar menu"
                  >
                    <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5 shrink-0" />
                    <span className="block pt-[1px]">Fechar</span>
                  </button>
                </motion.div>
              </motion.div>
              <div className="flex flex-col h-full w-full items-center justify-center">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full w-full items-center justify-center gap-6"
                >
                  {links.map((link: NavLink, index: number) => (
                    <Link
                      href={link.link}
                      key={index}
                      className="max-w-full cursor-pointer overflow-hidden break-words text-center font-inter text-3xl tracking-wide text-lightText [overflow-wrap:anywhere] sm:text-4xl sm:tracking-widest"
                    >
                      <motion.div
                        variants={linkVars}
                        onClick={toggleMenuFunc}
                        key={`link-name-${index}`}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
