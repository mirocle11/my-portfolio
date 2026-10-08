"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { countryNames, type Project } from "@/lib/data";
import { ToolChip } from "@/components/tool-logo";
import { cn } from "@/lib/utils";

const ease = [0.2, 0.8, 0.2, 1] as const;

export function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group w-full text-left grid grid-cols-12 gap-x-6 gap-y-3 py-7 cursor-pointer"
      >
        <div className="col-span-12 md:col-span-7">
          <h3 className="flex items-center gap-3 text-[1.35rem] md:text-[1.5rem] font-semibold tracking-tight text-fg">
            <span className="group-hover:text-accent transition-colors">{project.title}</span>
            <Plus
              size={20}
              strokeWidth={2}
              aria-hidden
              className={cn(
                "shrink-0 text-accent transition-transform duration-300",
                open && "rotate-45"
              )}
            />
          </h3>
          <p className="mt-2 max-w-[60ch] text-[16px] leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <dl className="col-span-12 md:col-span-5 grid grid-cols-2 gap-x-6 gap-y-1 text-[15px] md:pt-1.5">
          <dt className="sr-only">Client region</dt>
          <dd className="text-fg">{countryNames[project.country]}</dd>
          <dt className="sr-only">Years</dt>
          <dd className="text-muted tabular-nums md:text-right">{project.year}</dd>
          <dt className="sr-only">Context</dt>
          <dd className="col-span-2 text-muted">{project.context}</dd>
        </dl>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-x-6 gap-y-6 pb-9">
              <div className="col-span-12 md:col-span-7">
                <h4 className="text-[15px] font-semibold text-fg">What I built</h4>
                <ul className="mt-3 space-y-2.5 max-w-[60ch]">
                  {project.highlights.map((h) => (
                    <li key={h} className="relative pl-5 text-[16px] leading-relaxed text-fg/90">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-accent"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h4 className="text-[15px] font-semibold text-fg">Stack</h4>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                  {project.stack.map((t) => (
                    <li key={t}>
                      <ToolChip name={t} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
