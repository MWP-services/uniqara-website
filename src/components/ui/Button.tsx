import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonIcon =
  | "arrow"
  | "check"
  | "heart"
  | "home"
  | "info"
  | "location"
  | "mail"
  | "route"
  | "shield"
  | "spark"
  | "steps"
  | "user";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  icon?: ButtonIcon;
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
    "primary-button bg-brand-green text-white shadow-card hover:bg-brand-green-deep active:bg-brand-green-deep",
  secondary:
    "secondary-button border border-border-soft bg-card/75 text-foreground shadow-card backdrop-blur hover:border-brand-green hover:bg-brand-green-soft active:bg-accent-yellow-soft",
  ghost:
    "text-foreground hover:bg-brand-green-soft hover:text-brand-green-deep active:bg-accent-yellow-soft",
};

function Icon({
  name,
  className = "",
}: {
  name: ButtonIcon;
  className?: string;
}) {
  const common = {
    "aria-hidden": true,
    className: `h-4 w-4 shrink-0 ${className}`,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 8.6c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.7 4.7 0 0 1 12 5a4.7 4.7 0 0 1 8.8 3.6Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m4 11 8-7 8 7" />
          <path d="M6 10v9h12v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 10v6" />
          <path d="M12 7h.01" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <path d="M5 18c4 0 4-12 8-12s4 12 8 12" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="13" cy="6" r="2" />
          <circle cx="21" cy="18" r="2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v5" />
          <path d="M12 16v5" />
          <path d="M3 12h5" />
          <path d="M16 12h5" />
          <path d="m6 6 3 3" />
          <path d="m15 15 3 3" />
          <path d="m18 6-3 3" />
          <path d="m9 15-3 3" />
        </svg>
      );
    case "steps":
      return (
        <svg {...common}>
          <path d="M5 7h5" />
          <path d="M14 7h5" />
          <path d="M5 12h14" />
          <path d="M5 17h9" />
          <circle cx="3" cy="7" r=".5" />
          <circle cx="3" cy="12" r=".5" />
          <circle cx="3" cy="17" r=".5" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20c1.4-3.2 4-5 7-5s5.6 1.8 7 5" />
        </svg>
      );
    case "arrow":
    default:
      return (
        <svg {...common}>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
  }
}

function textFromChildren(children: ReactNode) {
  return typeof children === "string" ? children.toLowerCase() : "";
}

function iconForButton({
  children,
  href,
  type,
}: {
  children: ReactNode;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}): ButtonIcon {
  const text = textFromChildren(children);
  const target = `${text} ${href ?? ""}`.toLowerCase();

  if (type === "submit" || target.includes("contact") || target.includes("aanmeld")) {
    return "mail";
  }
  if (target.includes("wie zijn") || target.includes("voor wie") || target.includes("kind") || target.includes("jongeren") || target.includes("ouders")) {
    return "user";
  }
  if (target.includes("werkwijze") || target.includes("stap") || target.includes("intake")) {
    return "steps";
  }
  if (target.includes("locatie") || target.includes("route")) {
    return "location";
  }
  if (target.includes("praktische") || target.includes("informatie") || target.includes("tarieven") || target.includes("wachttijd") || target.includes("faq")) {
    return "info";
  }
  if (target.includes("privacy")) {
    return "shield";
  }
  if (target.includes("home") || href === "/") {
    return "home";
  }
  if (target.includes("hulp") || target.includes("aanbod") || target.includes("therapie") || target.includes("begeleiding")) {
    return "heart";
  }
  return "arrow";
}

export function Button({
  children,
  className = "",
  icon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-pill px-5 py-3 text-center text-sm font-semibold leading-snug transition-[background-color,border-color,box-shadow,color,transform] hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-focus-ring/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 aria-[current=page]:ring-2 aria-[current=page]:ring-focus-ring/40 ${variantClasses[variant]} ${className}`;

  if ("href" in props) {
    const { href, ...linkProps } = props as ButtonAsLinkProps;
    const resolvedIcon = icon ?? iconForButton({ children, href });

    return (
      <Link href={href} className={classes} {...linkProps}>
        <Icon name={resolvedIcon} />
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  const resolvedIcon =
    icon ?? iconForButton({ children, type: buttonProps.type });

  return (
    <button className={classes} {...buttonProps}>
      <Icon name={resolvedIcon} />
      {children}
    </button>
  );
}
