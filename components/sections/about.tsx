"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const paragraphs = [
  "Five years building web, desktop, and mobile software. Clients have ranged from a construction firm in New Zealand to DSV's transport operations in Sweden to a YouTube creator group in the US — different industries, same job: understand the problem, write what solves it, keep it maintainable.",
  "I work across the stack in Java, C# .NET, TypeScript with Vue or React, Laravel, and Flutter, and try to pick the boring tool that fits the job.",
];

export function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading id="notes" path="notes" meta="// working principles" />

        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <div className="font-mono text-[14px] md:text-[15px] text-comment leading-[1.9] max-w-[28ch]">
                <div>{"/**"}</div>
                <div>{" * Understand the"}</div>
                <div>{" * problem."}</div>
                <div>{" *"}</div>
                <div>{" * Write what"}</div>
                <div>{" * solves it."}</div>
                <div>{" *"}</div>
                <div>{" * Keep it"}</div>
                <div>{" * maintainable."}</div>
                <div>{" */"}</div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-7 max-w-[64ch]">
            {paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg md:text-xl leading-[1.7] text-fg/90">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
