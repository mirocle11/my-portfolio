// Brand logos vendored in /public/logos.
// Sources: devicon (MIT) and simple-icons (CC0). Tools without a public logo
// fall back to a monogram in <ToolLogo />.

interface Logo {
  src: string;
  /** Single-colour black marks that need inverting on the dark theme. */
  invertInDark?: boolean;
}

const logo = (file: string, invertInDark = false): Logo => ({
  src: `/logos/${file}.svg`,
  invertInDark,
});

const logos: Record<string, Logo> = {
  Java: logo("java"),
  "Java SE": logo("java"),
  "C#": logo("csharp"),
  "C# .NET": logo("csharp"),
  JavaScript: logo("javascript"),
  TypeScript: logo("typescript"),
  PHP: logo("php"),
  Dart: logo("dart"),
  HTML: logo("html5"),
  CSS: logo("css3"),
  React: logo("react"),
  "Vue JS": logo("vuejs"),
  Angular: logo("angular"),
  Flutter: logo("flutter"),
  Laravel: logo("laravel"),
  "PHP Laravel": logo("laravel"),
  ".NET Framework": logo("dotnetcore"),
  "Web API": logo("dotnetcore"),
  "Node JS": logo("nodejs"),
  GraphQL: logo("graphql"),
  MySQL: logo("mysql"),
  PostgreSQL: logo("postgresql"),
  "SQL Server": logo("microsoftsqlserver"),
  Supabase: logo("supabase"),
  Docker: logo("docker"),
  Git: logo("git"),
  WordPress: logo("wordpress"),
  "VS Code": logo("vscode"),
  Tailwind: logo("tailwindcss"),
  Cursor: logo("cursor", true),
  "Claude Code": logo("claude"),
  TanStack: logo("tanstack"),
  "shadcn/ui": logo("shadcnui", true),
};

export function getLogo(name: string): Logo | undefined {
  return logos[name];
}

export function monogram(name: string): string {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2);
}
