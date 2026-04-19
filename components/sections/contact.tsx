"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section className="relative pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading id="contact" path="contact" meta="// say hi" />

        <div className="mt-14 md:mt-24 grid grid-cols-12 gap-8 md:gap-10 items-end">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="font-mono text-sm text-comment mb-5">
              {"// drop a line"}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline link-accent inline-block font-sans font-medium tracking-tight text-fg leading-[1.1] break-all"
              style={{ fontSize: "clamp(2rem, 6.2vw, 4rem)" }}
            >
              {profile.email}
            </a>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 space-y-5" delay={0.1}>
            <div className="font-mono text-xs text-subtle tracking-[0.18em] uppercase">
              Elsewhere
            </div>
            <ul className="space-y-2.5 font-mono text-[15px]">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg inline-flex items-center gap-1.5"
                >
                  github/{profile.githubHandle}
                  <span aria-hidden className="text-muted">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg inline-flex items-center gap-1.5"
                >
                  linkedin/miro-bayawa
                  <span aria-hidden className="text-muted">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-fg inline-flex items-center gap-1.5"
                >
                  resume.pdf
                  <span aria-hidden className="text-muted">↓</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Footer / colophon */}
        <div className="mt-28 md:mt-40 border-t border-rule pt-6 grid grid-cols-12 gap-4 font-mono text-[13px] text-muted">
          <div className="col-span-12 md:col-span-4">
            © {new Date().getFullYear()} {profile.name}
          </div>
          <div className="hidden md:block md:col-span-4 text-center text-subtle">
            Geist · Geist Mono
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            Built with Next.js · <span className="text-accent-hi">●</span> Crafted in PH
          </div>
        </div>
      </div>
    </section>
  );
}
