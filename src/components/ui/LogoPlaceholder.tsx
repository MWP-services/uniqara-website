import Image from "next/image";
import type { PlaceholderKey } from "@/content/placeholders";
import { site } from "@/content/site";

type LogoPlaceholderProps = {
  className?: string;
  priority?: boolean;
  placeholderKey?: Extract<PlaceholderKey, "LOGO_PRIMARY" | "LOGO_FOOTER">;
  size?: "sm" | "md" | "lg" | "header";
};

const sizeClasses = {
  header: "h-[4.75rem] w-[4.75rem] sm:h-24 sm:w-24 lg:h-32 lg:w-32",
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
    <Image
      src="/assets/logo-transparent.png"
      alt={placeholderKey === "LOGO_PRIMARY" ? site.name : `${site.name} logo`}
      width={1254}
      height={1254}
      preload={priority}
      className={`site-logo-image block object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
