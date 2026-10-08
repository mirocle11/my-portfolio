import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <section>
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <SectionHeading id="about" title="About" />

        <div className="mt-10 grid grid-cols-12 gap-y-10 md:gap-x-12">
          <div className="col-span-12 md:col-span-8 space-y-6 max-w-[64ch]">
            {profile.about.map((para) => (
              <p key={para} className="text-[18px] md:text-[19px] leading-[1.65] text-fg/90">
                {para}
              </p>
            ))}
          </div>

          <aside className="col-span-12 md:col-span-4">
            <Image
              src="/miro.jpg"
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={320}
              sizes="(min-width: 768px) 320px, 100vw"
              className="w-full max-w-[320px] aspect-square rounded-[10px] object-cover border border-line"
            />
            <h3 className="mt-8 text-[16px] font-semibold text-fg">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="mt-3">
                <p className="text-[16px] leading-snug text-fg">{e.degree}</p>
                <p className="mt-1 text-[15px] text-muted">
                  {e.school}, {e.location}
                </p>
                <p className="mt-0.5 text-[15px] text-muted tabular-nums">
                  {e.start} – {e.end}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
