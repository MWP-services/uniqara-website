import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "white" | "surface";
};

export function Section({
  children,
  className = "",
  id,
  variant = "white",
}: SectionProps) {
  const variantClass = variant === "surface" ? "bg-surface" : "bg-background";

  return (
    <section id={id} className={`section-shell ${variantClass} ${className}`}>
      {children}
    </section>
  );
}
