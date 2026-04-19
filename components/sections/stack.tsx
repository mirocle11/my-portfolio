"use client";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/lib/data";

export function Stack() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          id="tools"
          path="tools"
          meta={`// ${skills.length} groups`}
        />

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={(i % 2) * 0.08}>
              <div className="grid grid-cols-12 gap-4 border-t border-rule pt-5">
                <div className="col-span-12 md:col-span-4">
                  <div className="font-mono text-[13px] md:text-sm text-muted">
                    {group.label.toLowerCase()}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="font-mono text-[14px] md:text-[15px] leading-[1.95] text-fg">
                    {group.items.map((item, j) => (
                      <span key={item}>
                        {item}
                        {j < group.items.length - 1 && (
                          <span className="text-subtle">, </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
