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
      className={`surface-card p-6 transition-shadow hover:shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}
