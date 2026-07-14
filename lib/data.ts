export type NavItem = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  company: string;
  employment: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export type Project = {
  name: string;
  tagline: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  live?: { label: string; href: string };
  repo?: { label: string; href: string };
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Achievement = {
  title: string;
  context: string;
  scope: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export type LanguageSkill = {
  language: string;
  level: string;
  note?: string;
};

export const profile = {
  name: "Muhamad Reza Muktasib",
  shortName: "Reza Muktasib",
  roles: ["Fullstack Engineer", "Software Engineer"],
  headline: "I build calm, reliable systems behind ambitious products.",
  location: "Jakarta, Indonesia",
  email: "reza.muktasib@gmail.com",
  website: "https://mrezamuktasib.my.id",
  linkedin: "https://www.linkedin.com/in/mrezamuktasib",
  github: "https://github.com/mrezamuktasib",
  resume: "/muhamad-reza-muktasib-resume.pdf",
  summary:
    "Backend-focused Full Stack Engineer building scalable web applications, APIs, and distributed systems with Node.js, TypeScript, Java, and Laravel across modern cloud infrastructure. I design secure backend services, microservice architectures, and real-time WebSocket/WebRTC systems for warehouse, healthcare, and online assessment platforms.",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "5+", label: "Years shipping software" },
  { value: "24+", label: "Warehouses at enterprise scale" },
  { value: "4.1K+", label: "Daily active users served" },
  { value: "10+", label: "Fullstack projects delivered" },
];

export const aboutParagraphs = [
  "I am a backend-focused engineer who cares as much about how a system feels to operate as how it performs under load. My work lives where reliability meets calm: warehouse platforms syncing tens of thousands of transactions a month, healthcare APIs that cannot afford to stumble, and real-time proctoring streams that must stay honest.",
  "I studied Informatics Engineering at Politeknik Elektronika Negeri Surabaya, graduating with a 3.94 GPA, and spent an exchange year at Hanyang University in South Korea as an IISMA awardee. Along the way I learned that the best architectures are quiet ones, hexagonal, event-driven, and easy for the next person to reason about.",
  "Today I design secure backend services and integrations across ERP, SAP, payments, and insurance ecosystems, and I still enjoy crafting the frontend that makes all of it feel effortless.",
];

export const aboutFacts = [
  { label: "Based in", value: "Jakarta, Indonesia" },
  { label: "Focus", value: "Backend, Systems, Real-time" },
  { label: "Education", value: "PENS - Informatics (3.94 GPA)" },
  { label: "Exchange", value: "Hanyang University, South Korea" },
];

export const experiences: Experience[] = [
  {
    role: "Backend Engineer",
    company: "PT. Paragon Technology and Innovation",
    employment: "Contract - via PT Sobat Kreasi Nusantara",
    period: "Aug 2025 - Present",
    location: "Jakarta, Indonesia",
    summary:
      "Developing and scaling an enterprise Warehouse Management System integrated with ERP and SAP ecosystems.",
    achievements: [
      "Implemented Batch Management across 24+ active warehouses, improving inventory traceability and operational consistency.",
      "Built backend services and integration modules for real-time synchronization of warehouse operations, logistics workflows, and product batch data.",
      "Supported high-volume operations handling tens of thousands of monthly transactions with a focus on reliability and scalability.",
      "Collaborated with frontend and cross-functional teams to deliver production-grade features in Agile environments.",
    ],
    stack: ["Node.js", "TypeScript", "SAP", "ERP", "PostgreSQL"],
  },
  {
    role: "Fullstack Engineer",
    company: "PT. Sobat Kreasi Nusantara (SOBATBISNIS)",
    employment: "Contract",
    period: "Aug 2025 - Present",
    location: "South Jakarta (Sudirman), Indonesia",
    summary:
      "Delivering enterprise web applications across backend services, API integrations, and frontend features.",
    achievements: [
      "Built scalable backend systems using Java and microservice REST APIs for healthcare, insurance, and internal business platforms.",
      "Contributed to Biomedilab healthcare systems by optimizing API performance and improving database efficiency.",
      "Implemented secure service integrations for Sompo Insurance and the Midtrans payment gateway.",
      "Worked across diverse client requirements, ensuring high-quality, maintainable fullstack solutions.",
    ],
    stack: ["Java", "Spring", "Microservices", "REST API", "Midtrans"],
  },
  {
    role: "Fullstack Developer",
    company: "Exzam.id",
    employment: "Full-time",
    period: "Jun 2024 - Dec 2025",
    location: "Surabaya, Indonesia",
    summary:
      "Developed a multi-tenant online examination platform for schools and universities.",
    achievements: [
      "Built frontend features in React and backend services in Laravel for authentication, exam workflows, and subscription management.",
      "Designed reusable UI components to accelerate feature development and improve interface consistency.",
      "Optimized API performance and database queries to improve reliability and concurrent user handling.",
      "Integrated automated proctoring and the Midtrans payment gateway for secure exam monitoring and subscriptions.",
    ],
    stack: ["React", "Laravel", "MySQL", "Midtrans"],
  },
  {
    role: "Backend Engineer & DevOps",
    company: "Mufko App",
    employment: "Remote",
    period: "Feb 2025 - Aug 2025",
    location: "South Korea",
    summary:
      "Maintained backend services for a production application serving 4,100+ daily active users.",
    achievements: [
      "Optimized API response times and database performance to improve reliability and scalability.",
      "Managed AWS infrastructure, deployment workflows, and Docker-based environments for continuous delivery.",
      "Monitored backend services to ensure consistent uptime and production stability.",
    ],
    stack: ["Laravel", "AWS", "Docker", "CI/CD"],
  },
  {
    role: "Freelance Web Developer",
    company: "Cipta Kode",
    employment: "Freelance",
    period: "Dec 2022 - Present",
    location: "Surabaya, Indonesia",
    summary:
      "Delivered 10+ fullstack web projects across a range of business domains.",
    achievements: [
      "Built responsive frontend interfaces and scalable backend APIs tailored to client requirements.",
      "Worked directly with clients to translate business needs into production-ready applications and automation.",
    ],
    stack: ["React", "Laravel", "Python", "Cloud"],
  },
  {
    role: "Intern Web Developer",
    company: "PT. Digital Solusi Master",
    employment: "Internship",
    period: "Dec 2023 - Feb 2024",
    location: "Sidoarjo, Indonesia",
    summary:
      "Maintained and enhanced Diakademik, an educational platform used by 2,000+ students and staff.",
    achievements: [
      "Converted Figma designs into responsive interfaces using Tailwind CSS and modern web technologies.",
      "Refactored legacy codebases to improve maintainability, performance, and development efficiency.",
    ],
    stack: ["Tailwind CSS", "PHP", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    name: "Procspy",
    tagline: "Open-source automated proctoring",
    period: "Jun 2024 - Present",
    description:
      "An open-source proctoring platform that upholds academic integrity during online assessments through real-time monitoring, built on a scalable hexagonal architecture.",
    highlights: [
      "Tested to handle 30 concurrent users with only 20% CPU usage on a dual-core machine.",
      "Led the design and open-sourcing of the WebRTC component, delivered as a Chrome Extension.",
      "Built the media server on WebSockets and Mediasoup for efficient real-time streaming.",
      "Designed a custom socket protocol connecting the extension to the Next.js dashboard.",
    ],
    tech: ["TypeScript", "Express", "MongoDB", "WebRTC", "Mediasoup", "Next.js"],
    live: { label: "Documentation", href: "https://docs.procspy.link" },
    accent: "#4f89d4",
  },
  {
    name: "Exzam.id",
    tagline: "Multi-tenant online exam platform",
    period: "Jun 2024 - Present",
    description:
      "A multi-tenancy online examination platform for institutions, pairing a custom internal component library with a resilient Laravel backend.",
    highlights: [
      "Built a custom internal UI component library that reduced development time by 40%.",
      "Managed multi-tenant exam workflows, authentication, and subscription logic in Laravel.",
      "Integrated Procspy as the automated proctoring engine for secure monitoring.",
      "Achieved stable performance for up to 120 concurrent users with optimized queries.",
    ],
    tech: ["React", "Laravel", "MySQL", "Midtrans", "Multi-tenancy"],
    live: { label: "Visit exzam.id", href: "https://exzam.id" },
    accent: "#ffe27a",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "PHP", "Golang"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Laravel",
      "Spring",
      "GraphQL",
      "WebSockets",
      "Microservices",
      "REST API",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Angular"],
  },
  {
    title: "Infrastructure & DevOps",
    items: ["AWS", "GCP", "Docker", "CI/CD", "Nginx", "Apache"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    title: "Architecture & Practices",
    items: [
      "API Design",
      "System Design",
      "Hexagonal Architecture",
      "Event-Driven Architecture",
      "Agile / Scrum",
      "Secure Development",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "IISMA Awardee 2024",
    context: "Hanyang University, South Korea",
    scope: "National",
  },
  {
    title: "Silver Medal - IYSAA",
    context: "WSEEC 2023",
    scope: "International",
  },
  {
    title: "1st Place - Business Plan Competition",
    context: "Fasilkomfest 2023, UPN Jawa Timur",
    scope: "National",
  },
  {
    title: "2nd Place - IE FAIR 17th",
    context: "Institut Teknologi Sepuluh Nopember",
    scope: "National",
  },
  {
    title: "3rd Place - UI/UX Competition",
    context: "Fasilkomfest 2023, UPN Jawa Timur",
    scope: "National",
  },
  {
    title: "3rd Place - Cerdas Cermat Kebangsaan",
    context: "SMA Awards, Jawa Pos",
    scope: "Regional",
  },
];

export const certifications: Certification[] = [
  { title: "Next.js (JS/TS) Course", issuer: "Udemy", year: "2025" },
  { title: "Golang Course", issuer: "Udemy", year: "2025" },
  { title: "Docker & Kubernetes", issuer: "Udemy", year: "2025" },
  { title: "Junior Web Developer Certification", issuer: "BNSP", year: "2023" },
  { title: "JavaScript Fundamental", issuer: "Dicoding", year: "2023" },
  { title: "SQL Fundamental", issuer: "Dicoding", year: "2023" },
  { title: "Project Management", issuer: "Dicoding", year: "2023" },
  { title: "Programming Basic with C", issuer: "Dicoding", year: "2023" },
];

export const languages: LanguageSkill[] = [
  { language: "Indonesian", level: "Native" },
  { language: "English", level: "Advanced", note: "TOEIC 840" },
  { language: "Korean", level: "Basic", note: "Survival" },
];
