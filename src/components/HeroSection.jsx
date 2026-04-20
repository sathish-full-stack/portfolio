import { useEffect, useRef } from "react";
import { DATA } from "../data";
import * as Icons from "lucide-react";
import { LayoutGrid, Download } from "lucide-react";

const techStackPicks = [
  ...DATA.skills.frontend.items.slice(0, 3),
  ...DATA.skills.backend.items.slice(0, 3),
];

function MetaIcon({ name }) {
  const Icon = Icons[name];
  return Icon ? <Icon size={16} /> : null;
}

export default function HeroSection({ sectionRef }) {
  const badgesRef = useRef([]);

  useEffect(() => {
    badgesRef.current.forEach((el, i) => {
      if (el) {
        el.style.animation = `heroReveal .8s cubic-bezier(.16,1,.3,1) ${i * 0.1 + 0.5}s forwards`;
      }
    });
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section full-height" ref={sectionRef}>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <h1>
          <span className="shimmer-text">{DATA.personal.name}</span>
        </h1>

        <p className="hero-role">{DATA.personal.role}</p>
        <p className="hero-tagline">{DATA.personal.tagline}</p>

        <div className="hero-meta">
          {DATA.personal.meta.map((m) => (
            <div className="hero-meta-item" key={m.label}>
              <MetaIcon name={m.icon} />
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" onClick={handleContactClick}>
            <LayoutGrid size={16} /> View Projects
          </a>
          <a
            href="/resume.pdf"
            download="Sathish_P_Resume.pdf"
            className="btn btn-secondary"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="tech-stack">
          {techStackPicks.map((skill, i) => (
            <div
              className="badge"
              key={skill.name}
              ref={(el) => (badgesRef.current[i] = el)}
            >
              <i className={skill.devicon} style={{ fontSize: "1.1rem" }} />
              {skill.name}
            </div>
          ))}
        </div>

        <div
          className="hero-summary-box"
          dangerouslySetInnerHTML={{ __html: `<p>${DATA.personal.summary}</p>` }}
        />
      </div>
    </section>
  );
}
