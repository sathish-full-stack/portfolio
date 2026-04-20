import { useRef, useEffect } from "react";
import { DATA } from "../data";
import { Folders } from "lucide-react";

function FlipCard({ proj }) {
  const frontRef = useRef(null);

  useEffect(() => {
    const front = frontRef.current;
    if (!front) return;

    const handleMove = (e) => {
      const source = e.touches ? e.touches[0] : e;
      const mouseX = source.clientX;
      const mouseY = source.clientY;
      const r = front.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = mouseX - cx;
      const dy = mouseY - cy;
      if (Math.abs(dx) < r.width / 2 && Math.abs(dy) < r.height / 2) {
        front.style.transform = `rotateX(${(dy / r.height) * -12}deg) rotateY(${(dx / r.width) * 12}deg)`;
      } else {
        front.style.transform = "";
      }
    };

    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-front" ref={frontRef}>
          <div className="flip-emoji">{proj.icon}</div>
          <div className="flip-title">{proj.title}</div>
          <p className="flip-tagline">{proj.overview.split(".")[0]}.</p>
          <div className="flip-stack-preview">
            {proj.stack.slice(0, 3).map((s) => (
              <span className="small-badge" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="flip-back">
          <div className="flip-back-header">
            <span className="flip-back-emoji">{proj.icon}</span>
            <div>
              <div className="flip-back-title">{proj.title}</div>
              <div className="flip-back-type">{proj.type}</div>
            </div>
          </div>
          <p className="flip-back-desc">{proj.overview}</p>
          <div className="flip-back-stack">
            {proj.stack.map((s) => (
              <span className="small-badge" key={s}>{s}</span>
            ))}
          </div>
          <ul className="flip-back-tasks">
            {proj.tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ sectionRef }) {
  return (
    <section id="projects" className="section" ref={sectionRef}>
      <h2 className="section-title">
        <Folders /> Featured Projects
      </h2>
      <div className="project-showcase">
        {DATA.projects.map((proj) => (
          <FlipCard key={proj.title} proj={proj} />
        ))}
      </div>
    </section>
  );
}
