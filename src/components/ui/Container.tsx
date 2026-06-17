import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const widthClass = size === "narrow" ? "max-w-4xl" : "max-w-6xl";

  return (
    <div className={`mx-auto box-border w-full ${widthClass} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
