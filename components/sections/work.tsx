import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { projects } from "@/lib/data";

export function Work() {
  return (
    <section>
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <SectionHeading
          id="work"
          title="Selected work"
          description="Most of this is client work under NDA, so product names are withheld and the code isn't public. Open a project to see what I built and with what."
        />

        <div className="mt-10">
          {projects.map((p) => (
            <ProjectRow key={p.title} project={p} />
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
