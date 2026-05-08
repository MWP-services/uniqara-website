import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Card({ children, className = "", id }: CardProps) {
  return (
    <div
      id={id}
      className={`surface-card h-full p-4 transition-[box-shadow,border-color] hover:border-border-strong hover:shadow-soft focus-within:border-border-strong focus-within:shadow-soft sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
