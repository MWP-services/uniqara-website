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
      className={`surface-card h-full p-5 transition-shadow hover:shadow-soft focus-within:shadow-soft sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
