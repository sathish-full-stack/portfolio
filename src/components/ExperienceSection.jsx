import { DATA } from "../data";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection({ sectionRef }) {
  return (
    <section id="experience" className="section" ref={sectionRef}>
      <h2 className="section-title">
        <Briefcase /> Work Experience
      </h2>
      <div id="experience-container">
        {DATA.experience.map((exp, idx) => (
          <div className="exp-card" key={idx}>
            <div className="exp-header">
              <div>
                <div className="exp-title">
                  {exp.company} — {exp.role}
                </div>
                <div className="exp-sub">
                  <Calendar size={13} />
                  {exp.period}
                </div>
              </div>
              <span className="exp-tag">{exp.type}</span>
            </div>
            <ul className="exp-list">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
