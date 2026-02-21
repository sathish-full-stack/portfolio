const DATA = {
    personal: {
        name: "Sathish P",
        role: "Full Stack Developer",
        tagline: "Building scalable SaaS platforms and real-time applications with clean architecture, performance-driven design, and reliable engineering practices.",
        summary: "Full-Stack Software Developer with <strong>3+ years of experience</strong> developing <strong>scalable enterprise and SaaS applications</strong> across <strong>healthcare, workforce management, and education domains</strong>. Experienced in building <strong>end-to-end solutions</strong> using <strong>Angular, Vue/Nuxt, React, NestJS, and FastAPI</strong>, with strong expertise in <strong>real-time communication using WebSockets</strong>, <strong>multi-tenant architecture</strong>, and <strong>cloud integrations with AWS</strong>. Focused on writing <strong>maintainable code</strong>, <strong>optimizing performance</strong>, and delivering <strong>production-ready systems</strong>.",
        email: "sathish2001p@gmail.com",
        linkedin: "www.linkedin.com/in/sathish-a15128255",
        location: "Tamil Nadu, India",
        available: true,
        meta: [
            { icon: "map-pin", label: "Tamil Nadu, India" },
            { icon: "calendar", label: "3+ Years Experience" },
            { icon: "building-2", label: "Finstein · Full Time" },
            { icon: "graduation-cap", label: "B.E. ECE · 2023" }
        ]
    },
    skills: {
        frontend: {
            label: "Frontend",
            bentoClass: "large",
            devIcon: "monitor",
            items: [
                { name: "Angular", devicon: "devicon-angular-plain colored", version: "v17+", note: "Enterprise SPA development" },
                { name: "Vue 3", devicon: "devicon-vuejs-plain colored", version: "v3.4", note: "Composition API, Pinia" },
                { name: "Nuxt 3", devicon: "devicon-nuxtjs-plain colored", version: "v3.x", note: "SSR & SSG" },
                { name: "React", devicon: "devicon-react-original colored", version: "v18", note: "Functional components + hooks" },
                { name: "TypeScript", devicon: "devicon-typescript-plain colored", version: "5.x", note: "Strict-mode development" },
                { name: "TailwindCSS", devicon: "devicon-tailwindcss-plain colored", version: "v3", note: "Utility-first styling" }
            ]
        },
        backend: {
            label: "Backend",
            bentoClass: "wide",
            items: [
                { name: "Node.js", devicon: "devicon-nodejs-plain colored", version: "v20 LTS", note: "Runtime environment" },
                { name: "NestJS", devicon: "devicon-nestjs-plain colored", version: "v10", note: "Modular architecture" },
                { name: "FastAPI", devicon: "devicon-fastapi-plain colored", version: "0.109+", note: "Async Python APIs" },
                { name: "WebSockets", devicon: "devicon-socketio-original", version: "v4", note: "Real-time bidirectional" },
                { name: "Microservices", devicon: "devicon-apachekafka-original", version: "–", note: "Distributed system design" }
            ]
        },
        database: {
            label: "Database",
            bentoClass: "",
            items: [
                { name: "PostgreSQL", devicon: "devicon-postgresql-plain colored", version: "v15", note: "Primary RDBMS" },
                { name: "MySQL", devicon: "devicon-mysql-plain colored", version: "v8", note: "HR & payroll workloads" },
                { name: "TypeORM", devicon: "devicon-typescript-plain colored", version: "v0.3", note: "ORM + migrations" }
            ]
        },
        cloud: {
            label: "Cloud & DevOps",
            bentoClass: "",
            items: [
                { name: "AWS", devicon: "devicon-amazonwebservices-plain-wordmark colored", version: "–", note: "Cognito, S3, SES, SMS" },
                { name: "Docker", devicon: "devicon-docker-plain colored", version: "v24", note: "Containerised deployment" },
                { name: "Linux", devicon: "devicon-linux-plain", version: "Ubuntu", note: "Production environment" },
                { name: "Git", devicon: "devicon-git-plain colored", version: "–", note: "GitHub & GitLab" }
            ]
        },
        automation: {
            label: "Automation & QA",
            bentoClass: "",
            items: [
                { name: "WebdriverIO", devicon: "devicon-webcomponents-plain", version: "v8", note: "E2E browser automation" },
                { name: "Appium", devicon: "devicon-android-plain colored", version: "v2", note: "Mobile automation" },
                { name: "Mocha", devicon: "devicon-mocha-plain colored", version: "v10", note: "Test runner" }
            ]
        }
    },
    experience: [
        {
            company: "Finstein",
            role: "Full Stack Developer",
            period: "July 2023 – Present",
            type: "Full Time",
            highlights: [
                "Architected scalable SaaS platforms used in production environments across healthcare, HR, and education domains.",
                "Built real-time workflows using FastAPI WebSockets and Socket.IO for live clinical data acquisition.",
                "Implemented secure RBAC authentication systems with Keycloak and AWS Cognito.",
                "Optimised MySQL and PostgreSQL queries reducing average response time by ~40%.",
                "Designed multi-tenant SaaS architecture ensuring strict data isolation across tenants.",
                "Integrated AWS S3, SES, and SMS services for storage and transactional notifications.",
                "Containerised microservices with Docker for repeatable, environment-agnostic deployments.",
                "Automated functional test coverage using WebdriverIO and Appium across web and mobile."
            ]
        }
    ],
    projects: [
        {
            title: "Attendance & Workforce Management Platform",
            icon: "👥",
            type: "Enterprise · Attendance · Payroll",
            overview: "Enterprise platform for automated attendance using Face Recognition, QR Scan, GPS Geo-fencing, and Biometrics with payroll, leave, and regularization workflows.",
            stack: ["Angular", "NestJS", "MySQL", "TypeORM"],
            tasks: [
                "Developed the complete Regularization Module (frontend + backend).",
                "Designed APIs for attendance correction and approval workflows.",
                "Optimized backend queries to handle peak usage efficiently.",
                "Ensured accurate payroll-related attendance processing."
            ]
        },
        {
            title: "Medical Real-Time Diagnostic Web Application",
            icon: "🏥",
            type: "Healthcare · Real-Time · SaaS",
            overview: "Real-time medical diagnostic system for secure acquisition, validation, and preview of clinical data with compliance-driven workflows.",
            stack: ["Nuxt 3", "Vue 3", "FastAPI", "PostgreSQL", "WebSockets", "Keycloak", "Docker"],
            tasks: [
                "Built real-time workflows using FastAPI and WebSockets.",
                "Implemented secure RBAC authentication using Keycloak.",
                "Optimized PostgreSQL queries for low-latency performance.",
                "Containerized services using Docker for scalable deployment."
            ]
        },
        {
            title: "Multi-Tenant SaaS Collaboration Platform",
            icon: "🔗",
            type: "Healthcare · SaaS · Microservices",
            overview: "Healthcare SaaS platform enabling secure tenant-based collaboration and operational workflow management.",
            stack: ["React.js", "Vite", "NestJS", "Redis", "Socket.IO", "TypeORM", "Docker", "AWS"],
            tasks: [
                "Developed multi-tenant architecture ensuring secure tenant isolation.",
                "Implemented real-time collaboration features.",
                "Integrated Redis caching for performance improvement.",
                "Configured AWS services including Cognito authentication and S3 storage."
            ]
        },
        {
            title: "Learning Management Application",
            icon: "🎓",
            type: "EdTech · Full Stack",
            overview: "Online coaching platform offering live/recorded classes, mock tests, and personalized study tracking.",
            stack: ["React.js", "Node.js", "MySQL", "TypeORM"],
            tasks: [
                "Built responsive frontend across mobile, tablet, and desktop.",
                "Integrated backend APIs for course management and authentication.",
                "Implemented UI for learning workflows and progress tracking."
            ]
        },
        {
            title: "Mobile & Web Application Automation Testing",
            icon: "🧪",
            type: "QA · Automation · Testing",
            overview: "Automation framework to validate UI and functional workflows across mobile and web applications.",
            stack: ["WebdriverIO", "Appium", "Android Studio"],
            tasks: [
                "Developed reusable automated test scripts for full application coverage.",
                "Implemented cross-device and cross-browser testing workflows.",
                "Reduced manual testing effort through automation."
            ]
        }
    ],
    expertise: [
        {
            icon: "clock",
            name: "Real-Time Application Development",
            desc: "Implemented WebSocket-based workflows for live medical data updates and collaborative systems."
        },
        {
            icon: "layers",
            name: "SaaS & Multi-Module Architecture",
            desc: "Developed scalable SaaS platforms with modular design and tenant-aware data handling."
        },
        {
            icon: "shield-check",
            name: "Authentication & Access Control",
            desc: "Integrated secure authentication using Keycloak, AWS Cognito, and role-based access control."
        },
        {
            icon: "fast-forward",
            name: "API & Database Optimisation",
            desc: "Improved API performance through query tuning, indexing, and efficient ORM usage."
        },
        {
            icon: "cloud-lightning",
            name: "AWS Cloud Integration",
            desc: "Worked with S3 storage, Cognito authentication, and SES/SMS services in production workflows."
        },
        {
            icon: "container",
            name: "Containerised Deployment",
            desc: "Used Docker to standardise environments and support scalable service deployment."
        },
        {
            icon: "test-tube-2",
            name: "Automation & Quality Engineering",
            desc: "Built end-to-end automation using WebdriverIO and Appium for mobile and web applications."
        },
        {
            icon: "database",
            name: "Relational Database Engineering",
            desc: "Designed and optimized MySQL/PostgreSQL schemas with ERD-based data modeling."
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    renderHero();
    renderSkills();
    renderExperience();
    renderProjects();
    renderExpertise();
    renderContact();
    initTheme();
    initInteractivity();
    lucide.createIcons();
});

function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];

    const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    };

    class Dot {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            this.vx = (Math.random() - .5) * .45;
            this.vy = (Math.random() - .5) * .45;
            this.r = Math.random() * 1.5 + .5;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > W) this.vx *= -1;
            if (this.y < 0 || this.y > H) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(59,130,246,.45)";
            ctx.fill();
        }
    }

    function connect() {
        const count = particles.length;
        const maxDistSq = 140 * 140;

        for (let i = 0; i < count; i++) {
            const p1 = particles[i];
            for (let j = i + 1; j < count; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < maxDistSq) {
                    const dist = Math.sqrt(distSq);
                    ctx.strokeStyle = `rgba(59,130,246,${.12 * (1 - dist / 140)})`;
                    ctx.lineWidth = .8;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    function loop() {
        ctx.clearRect(0, 0, W, H);
        for (const p of particles) { p.update(); p.draw(); }
        connect();
        requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    resize();
    for (let i = 0; i < 75; i++) particles.push(new Dot());
    loop();
}

function renderHero() {
    const p = DATA.personal;
    document.getElementById("hero-name").innerHTML = `<span class="shimmer-text">${p.name}</span>`;
    document.getElementById("hero-role").textContent = p.role;
    document.getElementById("hero-tagline").textContent = p.tagline;

    const metaEl = document.getElementById("hero-meta");
    for (const m of p.meta) {
        const div = document.createElement("div");
        div.className = "hero-meta-item";
        div.innerHTML = `<i data-lucide="${m.icon}" size="16"></i><span>${m.label}</span>`;
        metaEl.appendChild(div);
    }

    document.getElementById("hero-summary-box").innerHTML = `<p>${p.summary}</p>`;

    const badgeContainer = document.getElementById("tech-stack-badges");
    const picks = [
        ...DATA.skills.frontend.items.slice(0, 3),
        ...DATA.skills.backend.items.slice(0, 3)
    ];
    picks.forEach((skill, i) => {
        const b = document.createElement("div");
        b.className = "badge";
        b.style.opacity = "0";
        b.style.animation = `heroReveal .8s cubic-bezier(.16,1,.3,1) ${i * .1 + .5}s forwards`;
        b.innerHTML = `<i class="${skill.devicon}" style="font-size:1.1rem"></i> ${skill.name}`;
        badgeContainer.appendChild(b);
    });

    const downloadBtn = document.getElementById("download-resume-btn");
    downloadBtn.href = "resume.pdf";
    downloadBtn.setAttribute("download", "Sathish_P_Resume.pdf");
}

function renderSkills() {
    const container = document.getElementById("skills-container");
    container.className = "skills-wrapper";

    for (const [, cat] of Object.entries(DATA.skills)) {
        const section = document.createElement("div");
        section.className = "skill-category";

        const header = document.createElement("div");
        header.className = "skill-cat-header";
        header.innerHTML = `
            <span class="skill-cat-label">${cat.label}</span>
            <span class="skill-cat-count">${cat.items.length} tools</span>
        `;
        section.appendChild(header);

        const grid = document.createElement("div");
        grid.className = "skill-cards-grid";

        for (const skill of cat.items) {
            const el = document.createElement("div");
            el.className = "skill-card";
            el.innerHTML = `
                <div class="skill-card-icon"><i class="${skill.devicon}"></i></div>
                <div class="skill-card-info">
                    <div class="skill-card-name">${skill.name}</div>
                    <div class="skill-card-note">${skill.note}</div>
                    ${skill.version ? `<div class="skill-card-version">${skill.version}</div>` : ""}
                </div>
            `;
            grid.appendChild(el);
        }

        section.appendChild(grid);
        container.appendChild(section);
    }
}

function renderExperience() {
    const container = document.getElementById("experience-container");
    for (const exp of DATA.experience) {
        const div = document.createElement("div");
        div.className = "exp-card";
        div.innerHTML = `
            <div class="exp-header">
                <div>
                    <div class="exp-title">${exp.company} — ${exp.role}</div>
                    <div class="exp-sub">
                        <i data-lucide="calendar" size="13"></i>${exp.period}
                    </div>
                </div>
                <span class="exp-tag">${exp.type}</span>
            </div>
            <ul class="exp-list">
                ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>
        `;
        container.appendChild(div);
    }
}

function renderProjects() {
    const container = document.getElementById("projects-container");

    for (const proj of DATA.projects) {
        const flipCard = document.createElement("div");
        flipCard.className = "flip-card";

        const inner = document.createElement("div");
        inner.className = "flip-inner";

        const front = document.createElement("div");
        front.className = "flip-front";
        front.innerHTML = `
            <div class="flip-emoji">${proj.icon}</div>
            <div class="flip-title">${proj.title}</div>
            <p class="flip-tagline">${proj.overview.split('.')[0]}.</p>
            <div class="flip-stack-preview">
                ${proj.stack.slice(0, 3).map(s => `<span class="small-badge">${s}</span>`).join("")}
            </div>
        `;

        const back = document.createElement("div");
        back.className = "flip-back";
        back.innerHTML = `
            <div class="flip-back-header">
                <span class="flip-back-emoji">${proj.icon}</span>
                <div>
                    <div class="flip-back-title">${proj.title}</div>
                    <div class="flip-back-type">${proj.type}</div>
                </div>
            </div>
            <p class="flip-back-desc">${proj.overview}</p>
            <div class="flip-back-stack">
                ${proj.stack.map(s => `<span class="small-badge">${s}</span>`).join("")}
            </div>
            <ul class="flip-back-tasks">
                ${proj.tasks.map(t => `<li>${t}</li>`).join("")}
            </ul>
        `;

        inner.appendChild(front);
        inner.appendChild(back);
        flipCard.appendChild(inner);
        container.appendChild(flipCard);
    }
}

function renderExpertise() {
    const container = document.getElementById("expertise-container");
    container.className = "expertise-bento";

    for (const item of DATA.expertise) {
        const div = document.createElement("div");
        div.className = "exp-item-card";
        div.innerHTML = `
            <i data-lucide="${item.icon}" size="40"></i>
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
        `;
        container.appendChild(div);
    }
}

function renderContact() {
    const p = DATA.personal;
    const panel = document.getElementById("contact-info-panel");
    const pills = [
        { icon: "mail", href: `mailto:${p.email}`, label: "Email", val: p.email },
        { icon: "linkedin", href: `https://${p.linkedin}`, label: "LinkedIn", val: p.linkedin },
        { icon: "map-pin", href: null, label: "Location", val: p.location }
    ];
    for (const pill of pills) {
        const el = document.createElement(pill.href ? "a" : "div");
        el.className = "contact-pill";
        if (pill.href) el.href = pill.href, el.target = "_blank";
        el.innerHTML = `
            <i data-lucide="${pill.icon}"></i>
            <div class="contact-pill-info">
                <strong>${pill.label}</strong>
                ${pill.href ? '' : `<span>${pill.val}</span>`}
            </div>
        `;
        panel.appendChild(el);
    }

    const blurb = document.createElement("div");
    blurb.className = "contact-blurb";
    blurb.style.cssText = "padding:2rem;margin-top:.5rem;line-height:1.8;color:var(--text-2);font-size:.9rem";
    blurb.innerHTML = `<strong style="color:var(--text);display:block;margin-bottom:.75rem;font-size:1.1rem">
                        Open to Opportunities
                        </strong>
                        Currently open to full-time roles and engineering opportunities in enterprise SaaS platforms, real-time applications, and scalable web systems. 
                        Prefer remote or hybrid work arrangements from <strong>Tamil Nadu, India</strong>.`
    panel.appendChild(blurb);

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("sender-name").value.trim();
        const email = document.getElementById("sender-email").value.trim();
        const subject = document.getElementById("msg-subject").value.trim();
        const message = document.getElementById("msg-body").value.trim();

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            `Hi Sathish,

            You have received a new message from your portfolio website.

            Name: ${name}
            Email: ${email}

            Message:
            ${message}

            Regards,
            ${name}`
        );

        const mailtoURL = `mailto:sathish2001p@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        window.location.href = mailtoURL;
    });

}

function initTheme() {
    const btn = document.getElementById("theme-toggle");
    const sun = document.getElementById("theme-icon-sun");
    const moon = document.getElementById("theme-icon-moon");
    const html = document.documentElement;

    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);

    btn.addEventListener("click", () => {
        setTheme(html.dataset.theme === "dark" ? "light" : "dark");
    });

    function setTheme(t) {
        html.dataset.theme = t;
        localStorage.setItem("theme", t);
        if (t === "dark") {
            sun.style.display = "block";
            moon.style.display = "none";
        } else {
            sun.style.display = "none";
            moon.style.display = "block";
        }
    }
}

function initInteractivity() {
    const glow = document.getElementById("glow-effect");
    const ring = document.getElementById("cursor-ring");
    const navLinks = document.querySelectorAll("nav a, .mobile-menu a");

    const styleTag = document.createElement("style");
    styleTag.textContent = `
        @keyframes heroReveal {
            from { opacity:0; transform:translateY(16px); }
            to   { opacity:1; transform:translateY(0); }
        }
    `;
    document.head.appendChild(styleTag);

    let flipFronts = document.querySelectorAll(".flip-front");
    let magneticEls = document.querySelectorAll(".magnetic");

    let mouseX = 0, mouseY = 0;
    let ticking = false;

    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!ticking) {
            requestAnimationFrame(updatePositions);
            ticking = true;
        }
    });

    function updatePositions() {
        glow.style.left = `${mouseX}px`;
        glow.style.top = `${mouseY}px`;
        glow.style.opacity = mouseY < window.innerHeight * 1.2 ? "1" : "0.3";

        ring.style.left = `${mouseX}px`;
        ring.style.top = `${mouseY}px`;
        ring.style.opacity = "1";

        const el = document.elementFromPoint(mouseX, mouseY);
        const isInteractive = el && el.closest("a, button, .flip-card, .skill-chip, input, textarea, label");
        ring.classList.toggle("over-link", !!isInteractive);

        flipFronts.forEach(card => {
            const r = card.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const dx = mouseX - cx, dy = mouseY - cy;
            if (Math.abs(dx) < r.width / 2 && Math.abs(dy) < r.height / 2) {
                card.style.transform = `rotateX(${(dy / r.height) * -12}deg) rotateY(${(dx / r.width) * 12}deg)`;
            } else {
                card.style.transform = "";
            }
        });

        magneticEls.forEach(el => {
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const dx = mouseX - cx, dy = mouseY - cy;
            if (Math.abs(dx) < r.width / 2 && Math.abs(dy) < r.height / 2) {
                el.style.transform = `translate(${dx * .35}px, ${dy * .35}px)`;
            } else {
                el.style.transform = "";
            }
        });
        ticking = false;
    }

    const io = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                const id = entry.target.id;
                navLinks.forEach(a => {
                    a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
                });
            }
        }
    }, { threshold: 0.12 });

    document.querySelectorAll(".section").forEach(s => io.observe(s));

    const navToggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const hamOpen = document.getElementById("ham-icon-open");
    const hamClose = document.getElementById("ham-icon-close");

    function closeMobileMenu() {
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        navToggle.setAttribute("aria-expanded", "false");
        hamOpen.style.display = "block";
        hamClose.style.display = "none";
    }

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("open");
            mobileMenu.setAttribute("aria-hidden", String(!isOpen));
            navToggle.setAttribute("aria-expanded", String(isOpen));
            hamOpen.style.display = isOpen ? "none" : "block";
            hamClose.style.display = isOpen ? "block" : "none";
        });
        mobileMenu.querySelectorAll("a").forEach(a =>
            a.addEventListener("click", closeMobileMenu)
        );
    }

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", e => {
            const target = document.querySelector(a.getAttribute("href"));
            if (target) {
                e.preventDefault();
                closeMobileMenu();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}
