import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section>
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <SectionHeading
          id="experience"
          title="Experience"
          description="Seven years of full-time and freelance work, newest first."
        />

        <ol className="mt-12 relative">
          {experience.map((role) => (
            <li key={role.company} className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-3 pb-2 md:pb-0 md:pt-0.5 text-[15px] text-muted tabular-nums">
                {role.start} – {role.end}
              </div>

              {/* Timeline rail */}
              <div className="relative col-span-12 md:col-span-9 border-l border-line pl-7 pb-12">
                <span
                  aria-hidden
                  className="absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg"
                />
                <h3 className="text-[1.35rem] font-semibold tracking-tight text-fg">
                  {role.title}
                </h3>
                <p className="mt-0.5 text-[16px] text-accent font-medium">{role.company}</p>
                <ul className="mt-4 space-y-2.5 max-w-[64ch] list-disc pl-5 marker:text-accent">
                  {role.bullets.map((b) => (
                    <li key={b} className="text-[16px] leading-relaxed text-fg/85">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
