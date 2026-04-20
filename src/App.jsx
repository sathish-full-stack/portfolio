import { useState, useEffect, useRef, useCallback } from "react";
import ParticleCanvas from "./components/ParticleCanvas";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ContactSection from "./components/ContactSection";
import "./index.css";

const SECTION_IDS = ["hero", "skills", "experience", "projects", "expertise", "contact"];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef({});

  // Apply theme on <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  // Intersection observer for reveal + active nav
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.12 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  const refFor = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  return (
    <>
      <ParticleCanvas />
      <CursorGlow />

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        <HeroSection sectionRef={refFor("hero")} />
        <SkillsSection sectionRef={refFor("skills")} />
        <ExperienceSection sectionRef={refFor("experience")} />
        <ProjectsSection sectionRef={refFor("projects")} />
        <ExpertiseSection sectionRef={refFor("expertise")} />
        <ContactSection sectionRef={refFor("contact")} />
      </main>

      <footer>
        <div className="footer-inner">
          <div className="logo">SATHISH</div>
          <p>Full Stack Developer · Building systems that scale and heal.</p>
          <p className="footer-copy">&copy; 2024 Sathish P. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
