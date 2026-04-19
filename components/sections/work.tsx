"use client";

import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          id="work"
          path="work"
          meta={`// ${projects.length} entries`}
        />

        <div className="mt-10 md:mt-16">
          {/* Column header, md+ */}
          <div className="hidden md:grid grid-cols-12 gap-6 px-6 pb-4 font-mono text-xs text-subtle tracking-[0.18em] uppercase">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Project</div>
            <div className="col-span-1">Region</div>
            <div className="col-span-2">Year</div>
            <div className="col-span-3">Stack</div>
          </div>

          <div>
            {projects.map((p, i) => (
              <ProjectRow key={p.title} project={p} index={i} />
            ))}
            <div className="border-t border-rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
