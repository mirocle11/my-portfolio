import { Download } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

const links = [
  { label: "GitHub", href: profile.github, handle: profile.githubHandle },
  { label: "LinkedIn", href: profile.linkedin, handle: profile.linkedinHandle },
];

export function Contact() {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <SectionHeading
          id="contact"
          title="Let's work together"
          description="Open to full-time roles and freelance projects. Email is the fastest way to reach me."
        />

        <div className="mt-10 rounded-[10px] border border-line bg-surface p-6 md:p-10 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <a
              href={`mailto:${profile.email}`}
              className="link-underline font-semibold tracking-[-0.02em] text-fg hover:text-accent transition-colors break-all"
              style={{ fontSize: "clamp(1.6rem, 4.4vw, 2.9rem)" }}
            >
              {profile.email}
            </a>
          </div>

          <ul className="col-span-12 md:col-span-4 space-y-3 text-[16px]">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-line pb-2"
                >
                  <span className="font-medium text-fg group-hover:text-accent transition-colors">
                    {l.label}
                  </span>
                  <span className="text-muted">{l.handle}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line pb-2"
              >
                <span className="font-medium text-fg group-hover:text-accent transition-colors">
                  Résumé
                </span>
                <Download size={16} className="text-muted" aria-hidden />
              </a>
            </li>
          </ul>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row justify-between gap-2 text-[14px] text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with Next.js in Negros Oriental, Philippines.</p>
        </footer>
      </div>
    </section>
  );
}
