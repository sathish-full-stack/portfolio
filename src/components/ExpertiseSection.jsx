import { DATA } from "../data";
import * as Icons from "lucide-react";
import { Award } from "lucide-react";

function ExpertiseIcon({ name }) {
  const Icon = Icons[name];
  return Icon ? <Icon size={40} /> : null;
}

export default function ExpertiseSection({ sectionRef }) {
  return (
    <section id="expertise" className="section" ref={sectionRef}>
      <h2 className="section-title">
        <Award /> Core Expertise
      </h2>
      <div className="expertise-bento">
        {DATA.expertise.map((item) => (
          <div className="exp-item-card" key={item.name}>
            <ExpertiseIcon name={item.icon} />
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
