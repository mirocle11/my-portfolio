"use client";

import { AnimatePresence, motion } from "motion/react";
import { countryNames, heroPlatforms, projects, type Platform } from "@/lib/data";
import { ToolLogo } from "@/components/tool-logo";

interface PlatformPanelProps {
  platform: Platform;
  panelId: string;
}

export function PlatformPanel({ platform, panelId }: PlatformPanelProps) {
  const meta = heroPlatforms.find((p) => p.key === platform)!;
  const shipped = projects.filter((p) => p.platforms.includes(platform));

  return (
    <div
      id={panelId}
      aria-live="polite"
      className="rounded-[10px] border border-line bg-surface p-6 md:p-7 min-h-[360px]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={platform}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="text-[15px] text-muted leading-relaxed">{meta.blurb}</p>

          <ul className="mt-5 divide-y divide-line">
            {shipped.map((p) => (
              <li key={p.title} className="py-4 first:pt-0 last:pb-0">
                <p className="font-semibold text-fg tracking-tight">{p.title}</p>
                <p className="mt-0.5 text-[14px] text-muted">
                  {countryNames[p.country]}, {p.year}
                </p>
                <ul className="mt-3 flex flex-wrap items-center gap-2.5" aria-label="Stack">
                  {p.stack.map((t) => (
                    <li key={t} title={t} className="flex">
                      <ToolLogo name={t} size={22} />
                      <span className="sr-only">{t}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
