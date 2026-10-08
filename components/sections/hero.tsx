"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fragment, useId, useState } from "react";
import { Download } from "lucide-react";
import { heroPlatforms, profile, type Platform } from "@/lib/data";
import { PlatformPanel } from "@/components/platform-panel";
import { cn } from "@/lib/utils";

const ease = [0.2, 0.8, 0.2, 1] as const;

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export function Hero() {
  const [platform, setPlatform] = useState<Platform>("web");
  const panelId = useId();

  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-8">
      <div className="mx-auto max-w-[1120px] px-4 md:px-8 grid grid-cols-12 gap-y-12 md:gap-x-12 items-start">
        <div className="col-span-12 md:col-span-7">
          <motion.div {...enter(0)} className="flex items-center gap-4">
            <Image
              src="/miro.jpg"
              alt={`Portrait of ${profile.name}`}
              width={64}
              height={64}
              priority
              className="h-16 w-16 rounded-full object-cover ring-2 ring-surface"
            />
            <p className="text-[16px] leading-snug text-muted">
              <span className="block font-semibold text-fg">{profile.name}</span>
              Full stack software developer, {profile.yearsExperience} years of experience
            </p>
          </motion.div>

          <motion.h1
            {...enter(0.08)}
            className="mt-5 max-w-[20ch] font-semibold text-fg tracking-[-0.03em] leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3.9vw, 2.9rem)" }}
          >
            I build{" "}
            {heroPlatforms.map((p, i) => (
              // Keep each phrase glued to its trailing punctuation so lines break between phrases.
              <Fragment key={p.key}>
                {i === heroPlatforms.length - 1 && "and "}
                <span className="whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => setPlatform(p.key)}
                    aria-pressed={platform === p.key}
                    aria-controls={panelId}
                    className={cn(
                      "cursor-pointer rounded-[4px] tracking-[inherit] underline decoration-[0.06em] underline-offset-[0.16em] transition-colors",
                      platform === p.key
                        ? "text-accent decoration-accent"
                        : "decoration-line hover:decoration-accent"
                    )}
                  >
                    {p.phrase}
                  </button>
                  {i < heroPlatforms.length - 1 ? "," : "."}
                </span>{" "}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            {...enter(0.18)}
            className="mt-7 max-w-[54ch] text-[18px] md:text-[19px] leading-[1.6] text-muted"
          >
            Clients in New Zealand, Sweden, and the United States rely on software I&apos;ve built for
            construction, logistics, payroll, and enterprise messaging. Select a platform to see
            the projects behind it.
          </motion.p>

          <motion.div {...enter(0.26)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[15px] font-medium text-white dark:text-bg hover:brightness-110 transition"
            >
              <Download size={16} strokeWidth={2} aria-hidden />
              Download résumé
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-[15px] font-medium text-fg"
            >
              Email me
            </a>
          </motion.div>

          <motion.p {...enter(0.34)} className="mt-10 flex items-center gap-2.5 text-[14px] text-muted">
            <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
            {profile.availability}. Based in {profile.location.replace(" — PH", ", Philippines")}.
          </motion.p>
        </div>

        <motion.div {...enter(0.3)} className="col-span-12 md:col-span-5 md:pt-10">
          <PlatformPanel platform={platform} panelId={panelId} />
        </motion.div>
      </div>
    </section>
  );
}
