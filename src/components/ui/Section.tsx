import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "mint" | "yellow" | "blue" | "lilac" | "peach" | "green";
  variant?: "white" | "surface";
};

export function Section({
  children,
  className = "",
  id,
  tone,
  variant = "white",
}: SectionProps) {
  const variantClass =
    variant === "surface" ? "section-surface" : "section-white";
  const toneClass = tone ? `surface-${tone}` : "";

  return (
    <section
      id={id}
      className={`section-shell section-band ${variantClass} ${toneClass} ${className}`}
    >
      <div className="section-surface-frame">
        {children}
      </div>
    </section>
  );
}
