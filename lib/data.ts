export type Country = "NZ" | "SE" | "US" | "PH";

export interface Project {
  title: string;
  year: string;
  country: Country;
  kind: string;
  context: string;
  description: string;
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

export const profile = {
  name: "Miro Bayawa",
  role: "Software Developer",
  location: "Sibulan, Negros Oriental — PH",
  availability: "Available for new work",
  email: "miro.bayawa@gmail.com",
  phone: "09984766108",
  github: "https://github.com/mirocle11",
  githubHandle: "mirocle11",
  linkedin: "https://linkedin.com/in/miro-bayawa-7441b5138",
  linkedinHandle: "in/miro-bayawa",
  tagline: [
    "Software",
    "developer",
    "shipping for",
    "teams in",
    "/NZ /SE /US.",
  ] as const,
  about: [
    "Five-plus years building web, desktop, and mobile software for small teams that need it to actually ship.",
    "Clients have ranged from a construction firm in New Zealand to a logistics operation at DSV Sweden to a YouTube creator group in the United States — different industries, same job: understand the problem, write what solves it, keep it maintainable.",
    "Comfortable across the stack — Java, C# .NET, TypeScript with Vue or React, Laravel, Flutter — but I try to pick the boring tool that matches the team.",
  ],
};

export const projects: Project[] = [
  {
    title: "GraphiQS",
    year: "2019–2021",
    country: "NZ",
    kind: "Construction measurement & materials calculation",
    context: "via Ultimate Builders Support Systems",
    description:
      "Desktop application for a New Zealand construction firm — loads PDF plans, handles scaling calibration, and computes materials/inventory from measured areas and lines.",
    stack: ["Java", "Java SE", "JavaFX", "CSS", "SQL"],
  },
  {
    title: "Construction Plan Editor",
    year: "2020–2021",
    country: "NZ",
    kind: "Web-based annotation tool",
    context: "via Ultimate Builders Support Systems",
    description:
      "Browser-based measurement and annotation tool for construction plans — complementary to GraphiQS, built for teams who needed access without installing a desktop app.",
    stack: ["Java", "CSS"],
  },
  {
    title: "Secure Messaging App",
    year: "2021–2023",
    country: "SE",
    kind: "Enterprise messaging platform",
    context: "via Miller Development Solutions",
    description:
      "Skype-like messaging platform for a Swedish client. Contributed to the Vue/TypeScript client and GraphQL integration around real-time messaging flows.",
    stack: ["Vue JS", "TypeScript", "GraphQL"],
  },
  {
    title: "DSV Logistics System",
    year: "2022–Present",
    country: "SE",
    kind: "Warehouse & transport operations",
    context: "via Miller Development Solutions",
    description:
      "Customized desktop and mobile apps for DSV Sweden's transport operations — built, shipped, and still maintaining. Covers warehouse workflows end-to-end.",
    stack: ["C# .NET", "Angular", "SQL"],
  },
  {
    title: "Minecraft MOD",
    year: "2023",
    country: "US",
    kind: "Custom Java mod for a YouTube content org",
    context: "part-time / freelance",
    description:
      "Bespoke Minecraft modification built for a US-based content creation organization — gameplay systems and mechanics tailored to their series.",
    stack: ["Java", "MinecraftForge"],
  },
  {
    title: "Payroll System",
    year: "2025–2026",
    country: "NZ",
    kind: "All-in-one payroll platform (NDA)",
    context: "part-time / freelance",
    description:
      "Large payroll platform inside a New Zealand accounting/bookkeeping product — dashboard, employees, timesheets, leave management, pay runs, settings, and a tax settings area for law changes. Containerized and typed end-to-end.",
    stack: ["React", "TanStack", "Tailwind", "shadcn/ui", "PHP", "Laravel", "Docker"],
  },
];

export const experience: Role[] = [
  {
    company: "Miller Development Solutions",
    title: "Software Developer",
    start: "Jun 2021",
    end: "Present",
    bullets: [
      "Contributed to a Secure Messaging Application (Skype-like) for a Swedish client using Vue JS and GraphQL.",
      "Delivered and continue to maintain a warehouse logistics system (desktop + mobile) for DSV Sweden using C# .NET.",
      "Collaborated with international clients to deliver custom software solutions across web, desktop, and mobile.",
    ],
  },
  {
    company: "Ultimate Builders Support Systems Inc.",
    title: "Software Developer",
    start: "Jul 2019",
    end: "Jun 2021",
    bullets: [
      "Developed GraphiQS, a graphics measurement application enabling accurate PDF scaling and materials calculation for a New Zealand construction company.",
      "Built Plan Editor App, a web-based measurement and annotation tool for construction plans.",
      "Maintained full-stack software for construction and building support systems using Java and SQL.",
    ],
  },
  {
    company: "Aestus Software Solutions",
    title: "Software Developer Intern",
    start: "Oct 2018",
    end: "Jan 2019",
    bullets: [
      "Three-month internship focused on software development fundamentals.",
      "Hands-on experience in professional software development workflows.",
    ],
  },
  {
    company: "Independent",
    title: "Part-time / Freelance",
    period: "ongoing",
    bullets: [
      "Custom software and product work for clients alongside full-time roles — see Minecraft MOD and Payroll System in ~/work.",
      "Smaller engagements on the side: WordPress builds and redesigns, marketing landing pages, and small personal/portfolio sites.",
    ],
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
    items: ["OOP", "RESTful APIs", "UI/UX Design", "Agile"],
  },
];

export const sections = [
  { id: "index", number: "01", label: "Index" },
  { id: "notes", number: "02", label: "Notes" },
  { id: "work", number: "03", label: "Work" },
  { id: "tools", number: "04", label: "Tools" },
  { id: "history", number: "05", label: "History" },
  { id: "contact", number: "06", label: "Contact" },
] as const;
