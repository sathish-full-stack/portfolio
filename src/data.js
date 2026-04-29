export const DATA = {
  personal: {
    name: "Sathish P",
    role: "Full Stack Developer",
    tagline:
      "Building scalable SaaS platforms and real-time applications with clean architecture, performance-driven design, and reliable engineering practices.",
    summary:
      'Full-Stack Software Developer with <strong>3+ years of experience</strong> developing <strong>scalable enterprise and SaaS applications</strong> across <strong>healthcare, workforce management, and education domains</strong>. Experienced in building <strong>end-to-end solutions</strong> using <strong>Angular, Vue/Nuxt, React, NestJS, and FastAPI</strong>, with strong expertise in <strong>real-time communication using WebSockets</strong>, <strong>multi-tenant architecture</strong>, and <strong>cloud integrations with AWS</strong>. Focused on writing <strong>maintainable code</strong>, <strong>optimizing performance</strong>, and delivering <strong>production-ready systems</strong>.',
    email: "sathish2001p@gmail.com",
    phone: "+91 6369130069",
    linkedin: "https://www.linkedin.com/in/sathish-p-a15128255/",
    location: "Tamil Nadu, India",
    available: true,
    meta: [
      { icon: "MapPin", label: "Tamil Nadu, India" },
      { icon: "Calendar", label: "3+ Years Experience" },
      { icon: "Building2", label: "Finstein · Full Time" },
      { icon: "GraduationCap", label: "B.E. ECE · 2023" },
    ],
  },
  skills: {
    frontend: {
      label: "Frontend",
      items: [
        { name: "Angular", devicon: "devicon-angular-plain colored", version: "v17+", note: "Enterprise SPA development" },
        { name: "Vue 3", devicon: "devicon-vuejs-plain colored", version: "v3.4", note: "Composition API, Pinia" },
        { name: "Nuxt 3", devicon: "devicon-nuxtjs-plain colored", version: "v3.x", note: "SSR & SSG" },
        { name: "React", devicon: "devicon-react-original colored", version: "v18", note: "Functional components + hooks" },
        { name: "TypeScript", devicon: "devicon-typescript-plain colored", version: "5.x", note: "Strict-mode development" },
        { name: "TailwindCSS", devicon: "devicon-tailwindcss-plain colored", version: "v3", note: "Utility-first styling" },
      ],
    },
    backend: {
      label: "Backend",
      items: [
        { name: "Node.js", devicon: "devicon-nodejs-plain colored", version: "v20 LTS", note: "Runtime environment" },
        { name: "NestJS", devicon: "devicon-nestjs-plain colored", version: "v10", note: "Modular architecture" },
        { name: "FastAPI", devicon: "devicon-fastapi-plain colored", version: "0.109+", note: "Async Python APIs" },
        { name: "WebSockets", devicon: "devicon-socketio-original", version: "v4", note: "Real-time bidirectional" },
        { name: "Microservices", devicon: "devicon-apachekafka-original", version: "–", note: "Distributed system design" },
      ],
    },
    database: {
      label: "Database",
      items: [
        { name: "PostgreSQL", devicon: "devicon-postgresql-plain colored", version: "v15", note: "Primary RDBMS" },
        { name: "MySQL", devicon: "devicon-mysql-plain colored", version: "v8", note: "HR & payroll workloads" },
        { name: "TypeORM", devicon: "devicon-typescript-plain colored", version: "v0.3", note: "ORM + migrations" },
      ],
    },
    cloud: {
      label: "Cloud & DevOps",
      items: [
        { name: "AWS", devicon: "devicon-amazonwebservices-plain-wordmark colored", version: "–", note: "Cognito, S3, SES, SMS" },
        { name: "Docker", devicon: "devicon-docker-plain colored", version: "v24", note: "Containerised deployment" },
        { name: "Linux", devicon: "devicon-linux-plain", version: "Ubuntu", note: "Production environment" },
        { name: "Git", devicon: "devicon-git-plain colored", version: "–", note: "GitHub & GitLab" },
      ],
    },
    automation: {
      label: "Automation & QA",
      items: [
        { name: "WebdriverIO", devicon: "devicon-webcomponents-plain", version: "v8", note: "E2E browser automation" },
        { name: "Appium", devicon: "devicon-android-plain colored", version: "v2", note: "Mobile automation" },
        { name: "Mocha", devicon: "devicon-mocha-plain colored", version: "v10", note: "Test runner" },
      ],
    },
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
        "Automated functional test coverage using WebdriverIO and Appium across web and mobile.",
      ],
    },
  ],
  projects: [
    {
      title: "Attendance & Workforce Management Platform",
      icon: "👥",
      type: "Enterprise · Attendance · Payroll",
      overview:
        "Enterprise platform for automated attendance using Face Recognition, QR Scan, GPS Geo-fencing, and Biometrics with payroll, leave, and regularization workflows.",
      stack: ["Angular", "NestJS", "MySQL", "TypeORM"],
      tasks: [
        "Developed the complete Regularization Module (frontend + backend).",
        "Designed APIs for attendance correction and approval workflows.",
        "Optimized backend queries to handle peak usage efficiently.",
        "Ensured accurate payroll-related attendance processing.",
      ],
    },
    {
      title: "Medical Real-Time Diagnostic Web Application",
      icon: "🏥",
      type: "Healthcare · Real-Time · SaaS",
      overview:
        "Real-time medical diagnostic system for secure acquisition, validation, and preview of clinical data with compliance-driven workflows.",
      stack: ["Nuxt 3", "Vue 3", "FastAPI", "PostgreSQL", "WebSockets", "Keycloak", "Docker"],
      tasks: [
        "Built real-time workflows using FastAPI and WebSockets.",
        "Implemented secure RBAC authentication using Keycloak.",
        "Optimized PostgreSQL queries for low-latency performance.",
        "Containerized services using Docker for scalable deployment.",
      ],
    },
    {
      title: "Multi-Tenant SaaS Collaboration Platform",
      icon: "🔗",
      type: "Healthcare · SaaS · Microservices",
      overview:
        "Healthcare SaaS platform enabling secure tenant-based collaboration and operational workflow management.",
      stack: ["React.js", "Vite", "NestJS", "Redis", "Socket.IO", "TypeORM", "Docker", "AWS"],
      tasks: [
        "Developed multi-tenant architecture ensuring secure tenant isolation.",
        "Implemented real-time collaboration features.",
        "Integrated Redis caching for performance improvement.",
        "Configured AWS services including Cognito authentication and S3 storage.",
      ],
    },
    {
      title: "Learning Management Application",
      icon: "🎓",
      type: "EdTech · Full Stack",
      overview:
        "Online coaching platform offering live/recorded classes, mock tests, and personalized study tracking.",
      stack: ["React.js", "Node.js", "MySQL", "TypeORM"],
      tasks: [
        "Built responsive frontend across mobile, tablet, and desktop.",
        "Integrated backend APIs for course management and authentication.",
        "Implemented UI for learning workflows and progress tracking.",
      ],
    },
    {
      title: "Mobile & Web Application Automation Testing",
      icon: "🧪",
      type: "QA · Automation · Testing",
      overview:
        "Automation framework to validate UI and functional workflows across mobile and web applications.",
      stack: ["WebdriverIO", "Appium", "Android Studio"],
      tasks: [
        "Developed reusable automated test scripts for full application coverage.",
        "Implemented cross-device and cross-browser testing workflows.",
        "Reduced manual testing effort through automation.",
      ],
    },
  ],
  expertise: [
    { icon: "Clock", name: "Real-Time Application Development", desc: "Implemented WebSocket-based workflows for live medical data updates and collaborative systems." },
    { icon: "Layers", name: "SaaS & Multi-Module Architecture", desc: "Developed scalable SaaS platforms with modular design and tenant-aware data handling." },
    { icon: "ShieldCheck", name: "Authentication & Access Control", desc: "Integrated secure authentication using Keycloak, AWS Cognito, and role-based access control." },
    { icon: "FastForward", name: "API & Database Optimisation", desc: "Improved API performance through query tuning, indexing, and efficient ORM usage." },
    { icon: "CloudLightning", name: "AWS Cloud Integration", desc: "Worked with S3 storage, Cognito authentication, and SES/SMS services in production workflows." },
    { icon: "Container", name: "Containerised Deployment", desc: "Used Docker to standardise environments and support scalable service deployment." },
    { icon: "TestTube2", name: "Automation & Quality Engineering", desc: "Built end-to-end automation using WebdriverIO and Appium for mobile and web applications." },
    { icon: "Database", name: "Relational Database Engineering", desc: "Designed and optimized MySQL/PostgreSQL schemas with ERD-based data modeling." },
  ],
};
