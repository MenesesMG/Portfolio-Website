import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion"; 
import Header from "./components/HeaderSection";
import About from "./components/AboutMe";
import Skills from "./components/SkillsSection";
import ProjectsSections from "./components/ProjectsSections";
import { FooterSection } from "./components/FooterSection";
import Gradient from "./assets/Gradient-Large.png";
import videoBG from './assets/PortfolioBackgroudnSmall.mp4';

export default function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (section) => {
    const sectionRefs = { about: aboutRef, skills: skillsRef, projects: projectsRef, contact: contactRef };
    const target = sectionRefs[section]?.current;

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section "${section}" not found!`);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <video src={videoBG} autoPlay loop muted playsInline className="fixed w-full h-full min-w-full min-h-full object-cover -z-10 brightness-50" />
      <div className="flex flex-col justify-between items-center relative z-10">
        <Header scrollToSection={scrollToSection} />

        <motion.div ref={aboutRef} className="z-10 md:mt-[50px] pt-[110px]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.2 }}>
          <About />
        </motion.div>
        
        <h1 className="tracking-tight absolute top-[100px] left-1/2 transform -translate-x-1/2 text-[850px] z-0 font-bold opacity-5 font-secondary whitespace-nowrap overflow-hidden max-w-full">
          MARCELO
        </h1>

        <img src={Gradient} alt="Icon" className="md:block hidden z-0 absolute top-[500px]" />
        
        <motion.div ref={skillsRef} className="z-20 md:mt-10 -mt-[100px] mb-[150px]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.2 }}>
          <Skills />
        </motion.div>

        <motion.div ref={projectsRef} className="mb-[100px]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.2 }}>
          <ProjectsSections />
        </motion.div>
        
        <motion.div ref={contactRef} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.2 }}>
          <FooterSection />
        </motion.div>
      </div>
    </div>
  );
}
