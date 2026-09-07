import type { PlaceholderKey } from "@/content/placeholders";
import { site } from "@/content/site";

type LogoPlaceholderProps = {
  className?: string;
  priority?: boolean;
  placeholderKey?: Extract<PlaceholderKey, "LOGO_PRIMARY" | "LOGO_FOOTER">;
  size?: "sm" | "md" | "lg" | "header";
};

const sizeClasses = {
  header: "h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28",
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-20 w-20 sm:h-24 sm:w-24",
  lg: "h-28 w-28 sm:h-36 sm:w-36",
};

export function LogoPlaceholder({
  className = "",
  priority = false,
  placeholderKey = "LOGO_PRIMARY",
  size = "md",
}: LogoPlaceholderProps) {
  return (
    // A plain img keeps the logo reliable on static hosts without an image optimizer.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/logo-transparent.png"
      alt={placeholderKey === "LOGO_PRIMARY" ? site.name : `${site.name} logo`}
      width={1254}
      height={1254}
      loading={priority ? "eager" : "lazy"}
      className={`site-logo-image block object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
