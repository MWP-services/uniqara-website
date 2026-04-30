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
    "bg-brand-green text-white shadow-card hover:bg-brand-green-deep",
  secondary:
    "border border-border-soft bg-white text-brand-green hover:bg-surface",
  ghost:
    "text-brand-green hover:bg-brand-green-soft hover:text-brand-green-deep",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-pill px-5 py-3 text-sm font-semibold transition ${variantClasses[variant]} ${className}`;

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
