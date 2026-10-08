import { getLogo, monogram } from "@/lib/logos";
import { cn } from "@/lib/utils";

interface ToolLogoProps {
  name: string;
  size?: number;
  className?: string;
}

/** Brand logo for a tool, or a teal monogram when no public logo exists. */
export function ToolLogo({ name, size = 20, className }: ToolLogoProps) {
  const logo = getLogo(name);

  if (!logo) {
    return (
      <span
        aria-hidden
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-[4px] bg-accent-soft font-semibold text-accent",
          className
        )}
        style={{ width: size, height: size, fontSize: size * 0.42 }}
      >
        {monogram(name)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static SVGs; next/image adds nothing here
    <img
      src={logo.src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={cn("shrink-0", logo.invertInDark && "dark:invert", className)}
    />
  );
}

interface ToolChipProps {
  name: string;
  size?: number;
}

/** Logo + visible name, used wherever a stack is listed. */
export function ToolChip({ name, size = 18 }: ToolChipProps) {
  return (
    <span className="inline-flex items-center gap-2 text-[15px] text-fg">
      <ToolLogo name={name} size={size} />
      {name}
    </span>
  );
}
