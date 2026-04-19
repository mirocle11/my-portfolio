"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function Nav() {
  const [active, setActive] = useState<string>("index");
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
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-bg/75 border-b border-rule"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 flex items-center justify-between gap-4">
        <a
          href="#index"
          className="font-mono text-[15px] font-medium text-fg tabular-nums"
          aria-label="Miro Bayawa — top of page"
        >
          mb<span className="text-accent-hi">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "relative px-3 py-1.5 font-mono text-[14px] transition-colors whitespace-nowrap",
                active === s.id ? "text-fg" : "text-muted hover:text-fg"
              )}
            >
              <span className="text-subtle">~/</span>{s.id}
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  aria-hidden
                  className="absolute left-2 right-2 bottom-0 h-[1.5px] bg-accent-hi"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline font-mono text-[13px] text-muted hover:text-fg transition-colors"
          >
            resume.pdf <span aria-hidden>↗</span>
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile path bar */}
      <div className="md:hidden border-t border-rule">
        <div className="mx-auto max-w-7xl px-5 py-2 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "font-mono text-[13px] whitespace-nowrap transition-colors",
                active === s.id ? "text-fg" : "text-muted"
              )}
            >
              <span className="text-subtle">~/</span>{s.id}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
