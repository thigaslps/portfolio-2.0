"use client";
import Topbar from "@/view/components/topBar/Topbar";
import HomePage from "@/view/layouts/home/HomePage";
import { motion } from "framer-motion";
import ParticlesComponent from "@/view/components/particles/Particles";
import About from "@/view/layouts/about/About";
import Services from "@/view/layouts/services/Services";
import MyStack from "@/view/layouts/myStack/MyStack";
import Projects from "@/view/layouts/projects/Projects";
import Experience from "@/view/layouts/experience/Experience";
import Footer from "@/view/layouts/footer/Footer";
import LenisWrapper from "@/view/components/LenisWrapper/LenisWrapper";

export default function Home() {
  return (
    <LenisWrapper>
      <Topbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <ParticlesComponent />
      </motion.div>

      <section className="relative min-h-[88vh] bg-primary introducing">
        <div className="flex min-h-[88vh] flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full"
          >
            <HomePage />
          </motion.div>
        </div>
      </section>

      <section className="h-auto bg-primary services">
        <div className="flex h-full flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Services />
          </motion.div>
        </div>
      </section>

      <section className="h-auto bg-primary about">
        <div className="flex h-full flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <About />
          </motion.div>
        </div>
      </section>

      <section className="h-auto bg-primary stack">
        <div className="flex flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <MyStack />
          </motion.div>
        </div>
      </section>

      <section className="h-auto bg-primary proj">
        <div className="flex h-full flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Projects />
          </motion.div>
        </div>
      </section>

      <section className="h-auto bg-primary exp-footer">
        <div className="flex h-full flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Experience />
          </motion.div>
        </div>
      </section>

      <section className="h-auto bg-primary exp-footer">
        <div className="flex h-full flex-col container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Footer />
          </motion.div>
        </div>
      </section>
    </LenisWrapper>
  );
}
