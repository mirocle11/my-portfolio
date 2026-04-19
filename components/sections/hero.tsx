"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { profile } from "@/lib/data";

const stats = [
  { value: "5+", label: "years shipping" },
  { value: "6", label: "projects" },
  { value: "3", label: "client regions" },
  { value: "6", label: "languages used" },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  const nameWords = profile.name.split(" ");

  return (
    <section
      id="index"
      ref={wrapRef}
      className="relative min-h-[96vh] flex items-center overflow-hidden pt-28 pb-12"
    >
      {/* Grid pattern */}
      <div aria-hidden className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Cursor spotlight */}
      <div aria-hidden className="cursor-spotlight hidden md:block" />

      {/* Rust glow bottom-right */}
      <div
        aria-hidden
        className="ambient-glow absolute -bottom-[20%] -right-[10%] h-[70vh] w-[70vw] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 35%, transparent) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Teal depth top-left */}
      <div
        aria-hidden
        className="absolute -top-[15%] -left-[10%] h-[60vh] w-[55vw] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--bg-elev) 100%, transparent) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm md:text-base text-comment flex items-center"
        >
          <span>// software developer</span>
          <span aria-hidden className="caret" />
        </motion.div>

        <h1
          className="mt-6 font-sans font-medium tracking-tight text-fg"
          style={{
            fontSize: "clamp(3rem, 9.5vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
          aria-label={profile.name}
        >
          {nameWords.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.25em] overflow-hidden pb-[0.08em]">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.18 + wi * 0.12,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-accent-hi"
          >
            .
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-7 max-w-2xl text-xl md:text-2xl text-muted leading-[1.55]"
        >
          Five-plus years building web, desktop, and mobile software for teams in{" "}
          <span className="text-fg">New Zealand</span>,{" "}
          <span className="text-fg">Sweden</span>, and the{" "}
          <span className="text-fg">United States</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
        >
          <a
            href="#work"
            className="group link-underline link-accent font-mono text-[15px] text-fg inline-flex items-center gap-2"
          >
            <span aria-hidden className="text-accent-hi transition-transform group-hover:translate-x-0.5">
              ▸
            </span>
            view work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-[15px] text-muted hover:text-fg transition-colors"
          >
            resume.pdf <span aria-hidden>↗</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline font-mono text-[15px] text-muted hover:text-fg transition-colors"
          >
            {profile.email}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 border-t border-rule pt-8 max-w-3xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 + i * 0.08 }}
              className="flex flex-col gap-1"
            >
              <dt className="font-mono text-xs text-muted uppercase tracking-wider">
                {s.label}
              </dt>
              <dd className="font-sans text-3xl md:text-4xl font-medium text-fg tabular-nums">
                {s.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex items-center gap-3 font-mono text-[13px] text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-hi opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-hi" />
          </span>
          <span className="text-fg">available</span>
          <span className="text-subtle">·</span>
          <span>{profile.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
