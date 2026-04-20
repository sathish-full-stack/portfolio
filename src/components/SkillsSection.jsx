import { DATA } from "../data";
import { Code2 } from "lucide-react";

export default function SkillsSection({ sectionRef }) {
  return (
    <section id="skills" className="section" ref={sectionRef}>
      <h2 className="section-title">
        <Code2 /> Technical Expertise
      </h2>
      <div className="skills-wrapper">
        {Object.entries(DATA.skills).map(([key, cat]) => (
          <div className="skill-category" key={key}>
            <div className="skill-cat-header">
              <span className="skill-cat-label">{cat.label}</span>
              <span className="skill-cat-count">{cat.items.length} tools</span>
            </div>
            <div className="skill-cards-grid">
              {cat.items.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-card-icon">
                    <i className={skill.devicon} />
                  </div>
                  <div className="skill-card-info">
                    <div className="skill-card-name">{skill.name}</div>
                    <div className="skill-card-note">{skill.note}</div>
                    {skill.version && (
                      <div className="skill-card-version">{skill.version}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
