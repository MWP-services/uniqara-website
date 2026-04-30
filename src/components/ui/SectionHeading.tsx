import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  className?: string;
  headingLevel?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeading({
  title,
  eyebrow,
  intro,
  className = "",
  headingLevel = "h2",
  children,
}: SectionHeadingProps) {
  const Heading = headingLevel;
  const titleClass =
    headingLevel === "h1" ? "text-display" : "text-heading text-3xl";

  return (
    <div className={`content-measure ${className}`}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <Heading className={titleClass}>{title}</Heading>
      {intro ? <p className="text-body mt-4">{intro}</p> : null}
      {children}
    </div>
  );
}
