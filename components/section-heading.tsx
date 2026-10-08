interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div id={id} className="pt-24 md:pt-32">
      <h2 className="text-[2rem] md:text-[2.6rem] font-semibold tracking-[-0.025em] leading-[1.1] text-fg">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
