import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function Topbar() {
  const animationAppearScale = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
    exit: { opacity: 0, scale: 0 },
  };
  type Link = {
    name: string;
    link: string;
  };

  const links = [
    { name: "INÍCIO", link: "/" },
    { name: "SOBRE MIM", link: "#aboutSection" },
    { name: "PROJETOS", link: "#projectsSection" },
    { name: "EXPERIÊNCIA", link: "#experienceSection" },
  ];

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
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      lenis?.start();
    }
  }, [toggleMenu, lenis]);

  return (
    <>
      <header>
        <nav>
          <div className="fixed flex flex items-center justify-between w-full z-50 p-3">
            <div></div>

            <motion.div
              variants={animationAppearScale}
              initial="initial"
              animate="animate"
              exit={animationAppearScale.exit}
              whileInView="whileInView"
              transition={animationAppearScale.transition}
              className="flex justify-end cursor-pointer"
            >
              <p
                onClick={toggleMenuFunc}
                className="text-sm cursor-pointer text-lightText"
              >
                Menu
              </p>
            </motion.div>
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
                  <p
                    onClick={toggleMenuFunc}
                    className="text-sm cursor-pointer"
                  >
                    Fechar
                  </p>
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
                  {links.map((link: Link, index: number) => (
                    <Link
                      href={link.link}
                      key={index}
                      className="cursor-pointer text-lightText font-inter text-4xl overflow-hidden tracking-widest"
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
