export type Country = "NZ" | "SE" | "US" | "PH";

export const countryNames: Record<Country, string> = {
  NZ: "New Zealand",
  SE: "Sweden",
  US: "United States",
  PH: "Philippines",
};

export type Platform = "web" | "desktop" | "mobile" | "game";

export interface Project {
  title: string;
  year: string;
  country: Country;
  platforms: Platform[];
  kind: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

export interface Role {
  company: string;
  title: string;
  start?: string;
  end?: string;
  period?: string;
  location?: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
}

export const profile = {
  name: "Miro Bayawa",
  role: "Full Stack Software Developer",
  location: "Sibulan, Negros Oriental — PH",
  availability: "Available for work",
  email: "miro.bayawa@gmail.com",
  phone: "09984766108",
  github: "https://github.com/mirocle11",
  githubHandle: "mirocle11",
  linkedin: "https://linkedin.com/in/miro-bayawa-7441b5138",
  linkedinHandle: "in/miro-bayawa",
  yearsExperience: 7,
  about: [
    "Seven years building web, desktop, and mobile software across construction, logistics, finance, and content creation. Clients have ranged from a construction firm in New Zealand to DSV's transport operations in Sweden to a YouTube creator group in the US — different industries, same job: understand the problem, write what solves it, keep it maintainable.",
    "I'm as comfortable inside a decade-old legacy codebase as I am on a fresh greenfield stack — Java, C# .NET, TypeScript with Vue or React, Laravel, Node.js, and Flutter — and I try to pick the boring tool that fits the job.",
    "These days I lean on AI-assisted workflows (Claude Code, Cursor) to move faster without cutting corners on review, testing, or clarity.",
  ],
};

export const projects: Project[] = [
  {
    title: "GraphiQS",
    year: "2019–2021",
    country: "NZ",
    platforms: ["desktop"],
    kind: "Construction measurement & materials calculation",
    context: "via Ultimate Builders Support Systems",
    description:
      "Desktop application for a New Zealand construction firm — loads PDF plans, calibrates scale, and turns measurements into a bill of materials.",
    highlights: [
      "Accurate PDF plan scaling and calibration for on-screen measurement of lengths and areas.",
      "Measuring, stamping, and annotation tools that feed a materials and inventory calculation.",
      "Rewrote a heavy legacy C# measurement tool into a more scalable, maintainable Java application.",
    ],
    stack: ["Java SE", "JavaFX", "CSS", "SQL"],
  },
  {
    title: "Construction Plan Editor",
    year: "2020–2021",
    country: "NZ",
    platforms: ["web"],
    kind: "Web-based measurement & annotation tool",
    context: "via Ultimate Builders Support Systems",
    description:
      "A lightweight, web-based companion to GraphiQS for teams who needed plan measurement without installing a desktop app.",
    highlights: [
      "Measure and annotate construction plans directly in the browser.",
      "Calculates required materials and exports them to CSV.",
      "Pushes measurement data into the client's existing web app through its REST API.",
    ],
    stack: ["Java", "CSS", "REST"],
  },
  {
    title: "Enterprise Secure Messenger",
    year: "2021–2023",
    country: "SE",
    platforms: ["web"],
    kind: "Real-time enterprise messaging platform",
    context: "via Miller Development Solutions · NDA",
    description:
      "A Skype-style secure messaging platform for enterprise teams. Worked on the Vue/TypeScript client and its GraphQL integration.",
    highlights: [
      "Customized and extended the shared base component library used across the client.",
      "Designed and built the announcements module end-to-end, from UI to GraphQL queries and mutations.",
    ],
    stack: ["Vue JS", "TypeScript", "GraphQL"],
  },
  {
    title: "Warehouse & Transport Logistics Suite",
    year: "2022–Present",
    country: "SE",
    platforms: ["desktop", "mobile"],
    kind: "Desktop, API & handheld logistics system",
    context: "via Miller Development Solutions · for DSV Sweden",
    description:
      "Custom warehouse and transport management system for DSV Sweden — delivered, in production, and still maintained by me.",
    highlights: [
      "Windows Forms desktop application used for day-to-day warehouse operations.",
      "Web APIs and microservices — building new services and maintaining existing ones in a legacy codebase.",
      "Handheld mobile app supporting warehouse operations.",
    ],
    stack: ["C# .NET", "WinForms", "Web API", "Angular", "SQL Server"],
  },
  {
    title: "Quest & Magic Gameplay Mod",
    year: "2023",
    country: "US",
    platforms: ["game"],
    kind: "Custom Minecraft mod for a YouTube content studio",
    context: "freelance · NDA",
    description:
      "A bespoke Minecraft mod built for a US-based YouTube content creation company, turning the game into a quest-driven experience for their series.",
    highlights: [
      "Quest-oriented progression system layered on top of vanilla gameplay.",
      "Custom magic spells and abilities that unlock as the player levels up.",
    ],
    stack: ["Java", "MinecraftForge"],
  },
  {
    title: "Payroll & Workforce Module",
    year: "2025–2026",
    country: "NZ",
    platforms: ["web"],
    kind: "Payroll module for an accounting / bookkeeping platform",
    context: "freelance · NDA",
    description:
      "The payroll module inside a New Zealand bookkeeping web app — containerized and typed end-to-end.",
    highlights: [
      "Dashboard, employee records, and time management.",
      "Leave management, audits, and pay runs.",
      "Settings, including tax configuration to keep up with legislative changes.",
    ],
    stack: ["React", "TypeScript", "TanStack", "shadcn/ui", "Tailwind", "Laravel", "Docker"],
  },
];

export const experience: Role[] = [
  {
    company: "Miller Development Solutions",
    title: "Software Developer",
    start: "Jun 2021",
    end: "Present",
    bullets: [
      "Delivered and continue to maintain a custom warehouse logistics system for DSV Sweden's transport operations — desktop, Web API, and handheld apps in C# .NET.",
      "Build new and maintain existing microservices within the legacy platform, alongside its Windows Forms clients and Web APIs.",
      "Contributed to an enterprise secure messaging app (Vue, GraphQL) — customized base components and implemented the announcements module.",
    ],
  },
  {
    company: "Freelance",
    title: "Freelance Software Developer",
    start: "Jan 2019",
    end: "Present",
    bullets: [
      "Custom software for clients across multiple countries — from landing pages and WordPress builds to financial apps and game mods.",
      "Built and shipped a quest-and-magic Minecraft mod in Java for a US YouTube content company.",
      "Developed the payroll module of a bookkeeping web app — employees, time and leave management, audits, pay runs, and settings — with React, TanStack, shadcn/ui, and Laravel.",
    ],
  },
  {
    company: "Ultimate Builders Support Systems Inc.",
    title: "Software Developer",
    start: "Jul 2019",
    end: "Jun 2021",
    bullets: [
      "Developed GraphiQS, a construction plan measurement app enabling accurate PDF scaling, stamping, and materials calculation for a New Zealand construction company.",
      "Built the Plan Editor, a web-based measurement and annotation tool that exports to CSV or posts directly to the existing web app's REST API.",
      "Rewrote a heavy C# project into a more scalable and maintainable measurement application; full-stack work in Java and SQL.",
    ],
  },
  {
    company: "Aestus Software Solutions",
    title: "Software Developer Intern",
    start: "Oct 2018",
    end: "Jan 2019",
    bullets: [
      "Three-month internship focused on software development fundamentals and professional workflows.",
      "First hands-on web development work, including an introduction to Laravel.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "AMA Computer College",
    location: "Dumaguete City",
    start: "2015",
    end: "2019",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "C#", "PHP", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Vue JS", "Angular", "Flutter", "JavaFX"],
  },
  {
    label: "Backend",
    items: ["PHP Laravel", ".NET Framework", "Node JS", "GraphQL"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    label: "Databases",
    items: ["MySQL", "SQL Server", "PostgreSQL", "Supabase"],
  },
  {
    label: "Tools",
    items: ["Docker", "Git", "WordPress", "MinecraftForge", "VS Code", "Cursor", "Claude Code"],
  },
  {
    label: "Concepts",
    items: ["OOP", "RESTful APIs", "UI/UX Design", "Agile", "AI-assisted development"],
  },
];

export const heroPlatforms: { key: Platform; phrase: string; blurb: string }[] = [
  {
    key: "web",
    phrase: "web apps",
    blurb: "Browser apps for messaging, payroll, and construction teams.",
  },
  {
    key: "desktop",
    phrase: "desktop software",
    blurb: "Desktop tools people keep open all day, from plan measurement to warehouse control.",
  },
  {
    key: "mobile",
    phrase: "mobile apps",
    blurb: "Handheld apps and the Web APIs behind them, running DSV Sweden's warehouse operations.",
  },
  {
    key: "game",
    phrase: "games",
    blurb: "Custom gameplay mods, built in Java for a US YouTube studio's series.",
  },
];

export const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "toolkit", label: "Toolkit" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;
