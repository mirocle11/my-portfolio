import { SectionHeading } from "@/components/section-heading";
import { ToolChip } from "@/components/tool-logo";
import { skills } from "@/lib/data";

export function Toolkit() {
  const groups = skills.filter((g) => g.label !== "Concepts");
  const concepts = skills.find((g) => g.label === "Concepts");

  return (
    <section>
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <SectionHeading
          id="toolkit"
          title="Toolkit"
          description="What I reach for day to day, from modern frontends to the legacy .NET and Java systems I keep running."
        />

        <div className="mt-10 rounded-[10px] border border-line bg-surface divide-y divide-line">
          {groups.map((group) => (
            <div key={group.label} className="grid grid-cols-12 gap-x-6 gap-y-4 px-5 md:px-7 py-6">
              <h3 className="col-span-12 md:col-span-3 text-[16px] font-semibold text-fg md:pt-0.5">
                {group.label}
              </h3>
              <ul className="col-span-12 md:col-span-9 flex flex-wrap gap-x-7 gap-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <ToolChip name={item} size={22} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {concepts && (
          <p className="mt-6 max-w-[70ch] text-[16px] leading-relaxed text-muted">
            Grounded in {concepts.items.slice(0, -1).join(", ")}, and{" "}
            {concepts.items.at(-1)}.
          </p>
        )}
      </div>
    </section>
  );
}
