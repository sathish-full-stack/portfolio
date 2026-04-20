import { useState } from "react";
import { DATA } from "../data";
import { Send, Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const p = DATA.personal;

const pills = [
  { icon: Mail, href: `mailto:${p.email}`, label: "Email", val: p.email },
  { icon: Phone, href: `tel:${p.phone.replace(/\s/g, "")}`, label: "Phone", val: p.phone },
  { icon: LinkedinIcon, href: p.linkedin, label: "LinkedIn", val: p.linkedin },
  { icon: MapPin, href: null, label: "Location", val: p.location },
];

export default function ContactSection({ sectionRef }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Hi Sathish,\n\nYou have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nRegards,\n${name}`
    );
    window.location.href = `mailto:sathish2001p@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <h2 className="section-title">
        <Send /> Get In Touch
      </h2>
      <div className="contact-wrapper">
        {/* Info Panel */}
        <div className="contact-info-panel">
          {pills.map((pill) => {
            const IconComp = pill.icon;
            const Tag = pill.href ? "a" : "div";
            return (
              <Tag
                key={pill.label}
                className="contact-pill"
                href={pill.href || undefined}
                target={pill.href ? "_blank" : undefined}
                rel={pill.href ? "noreferrer" : undefined}
              >
                <IconComp />
                <div className="contact-pill-info">
                  <strong>{pill.label}</strong>
                  {!pill.href && <span>{pill.val}</span>}
                </div>
              </Tag>
            );
          })}

          <div className="contact-blurb">
            <strong style={{ color: "var(--text)", display: "block", marginBottom: ".75rem", fontSize: "1.1rem" }}>
              Open to Opportunities
            </strong>
            Currently open to full-time roles and engineering opportunities in enterprise SaaS platforms, real-time
            applications, and scalable web systems. Prefer remote or hybrid work arrangements.
          </div>
        </div>

        {/* Form Panel */}
        <div className="contact-form-panel">
          <form id="contact-form" className="elite-card contact-form" onSubmit={handleSubmit}>
            <h3>
              <Mail /> Send a Message
            </h3>

            <div className="form-group">
              <label htmlFor="sender-name">Your Name</label>
              <input
                type="text"
                id="sender-name"
                name="name"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sender-email">Your Email</label>
              <input
                type="email"
                id="sender-email"
                name="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="msg-subject">Subject</label>
              <input
                type="text"
                id="msg-subject"
                name="subject"
                placeholder="Let's collaborate on..."
                required
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="msg-body">Message</label>
              <textarea
                id="msg-body"
                name="message"
                rows={5}
                placeholder="I'd love to discuss..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              <Send size={16} /> Send Message
            </button>
            <p id="form-status" />
          </form>
        </div>
      </div>
    </section>
  );
}
