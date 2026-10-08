"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { profile, sections } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-colors duration-300",
        scrolled ? "backdrop-blur-md bg-bg/85 border-b border-line" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-semibold tracking-tight text-fg">
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "relative px-3 py-2 text-[15px] transition-colors",
                active === s.id ? "text-fg" : "text-muted hover:text-fg"
              )}
            >
              {s.label}
              <span
                aria-hidden
                className={cn(
                  "absolute left-3 right-3 bottom-1 h-[2px] rounded-full bg-accent origin-left transition-transform duration-300",
                  active === s.id ? "scale-x-100" : "scale-x-0"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[14px] font-medium text-fg hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={15} strokeWidth={2} aria-hidden />
            Résumé
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile section links */}
      <nav aria-label="Sections" className="md:hidden border-t border-line">
        <div className="mx-auto px-4 py-2 flex items-center gap-5 overflow-x-auto no-scrollbar">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "text-[14px] whitespace-nowrap transition-colors",
                active === s.id ? "text-accent font-medium" : "text-muted"
              )}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
