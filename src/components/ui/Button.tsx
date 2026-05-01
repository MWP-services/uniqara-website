import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white shadow-card hover:bg-brand-green-deep active:bg-brand-green-deep",
  secondary:
    "border border-border-soft bg-white text-brand-green hover:bg-surface active:bg-brand-green-soft",
  ghost:
    "text-brand-green hover:bg-brand-green-soft hover:text-brand-green-deep active:bg-brand-green-soft",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-pill px-5 py-3 text-center text-sm font-semibold leading-snug transition focus-visible:ring-4 focus-visible:ring-focus-ring/25 disabled:cursor-not-allowed disabled:opacity-60 aria-[current=page]:ring-2 aria-[current=page]:ring-focus-ring/40 ${variantClasses[variant]} ${className}`;

  if ("href" in props) {
    const { href, ...linkProps } = props as ButtonAsLinkProps;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
