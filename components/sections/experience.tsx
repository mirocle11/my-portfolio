"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          id="history"
          path="history"
          meta={`// ${experience.length} roles`}
        />

        <div className="mt-10 md:mt-14">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-4 md:gap-10 border-t border-rule py-8 md:py-12">
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-sm text-muted">
                    {role.period ? (
                      <span>{role.period}</span>
                    ) : (
                      <>
                        {role.start}
                        <span className="mx-2 text-subtle">→</span>
                        {role.end}
                      </>
                    )}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-9 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-fg">
                      {role.company}
                    </h3>
                    <p className="mt-1.5 font-mono text-sm text-muted">
                      {role.title}
                    </p>
                  </div>

                  <ul className="space-y-3 max-w-prose pt-1">
                    {role.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="relative pl-6 text-[16px] md:text-[17px] text-fg/85 leading-[1.65]"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-[0.78em] h-px w-3.5 bg-accent-hi"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}
