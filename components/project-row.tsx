"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { Project } from "@/lib/data";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  const num = String(index + 1).padStart(2, "0");
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.04 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      tabIndex={0}
      className="group relative border-t border-rule transition-colors hover:bg-bg-elev/40 focus-within:bg-bg-elev/40"
    >
      {/* Left accent rail, grows on hover */}
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-hi origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hover ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      />

      <div className="grid grid-cols-12 gap-3 md:gap-6 items-start py-6 md:py-7 px-4 md:px-6">
        <div className="col-span-2 md:col-span-1 font-mono text-sm text-subtle pt-1">
          {num}
        </div>

        <div className="col-span-10 md:col-span-5">
          <motion.h3
            className="text-xl md:text-2xl font-medium tracking-tight text-fg inline-flex items-baseline gap-2"
            animate={{ x: hover ? 6 : 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="link-underline link-accent">{project.title}</span>
            <motion.span
              aria-hidden
              className="text-accent-hi text-lg"
              animate={{ opacity: hover ? 1 : 0, x: hover ? 0 : -4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.h3>
          <p className="mt-2 text-[15px] md:text-base text-muted leading-relaxed max-w-prose">
            {project.description}
          </p>
          <p className="mt-2 font-mono text-[12px] text-comment">
            // {project.kind.toLowerCase()}
          </p>
          <p className="mt-1 font-mono text-[12px] text-muted">
            // {project.context}
          </p>
        </div>

        <div className="col-span-4 md:col-span-1 font-mono text-sm text-fg pt-1.5">
          /{project.country}
        </div>

        <div className="col-span-8 md:col-span-2 font-mono text-sm text-muted pt-1.5">
          {project.year}
        </div>

        <div className="col-span-12 md:col-span-3 pt-1.5">
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-sm text-fg/85"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
