import { useState, useCallback } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ theme, onToggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header id="site-header">
      <nav className="nav-inner">
        <div className="logo">SATHISH</div>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
                onClick={(e) => scrollTo(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <a
            href="https://www.linkedin.com/in/sathish-a15128255/"
            target="_blank"
            rel="noreferrer"
            className="theme-btn"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          <button
            id="theme-toggle"
            className="theme-btn"
            aria-label="Toggle Theme"
            title="Switch Theme"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            id="nav-toggle"
            className="hamburger-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <ul className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => scrollTo(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
