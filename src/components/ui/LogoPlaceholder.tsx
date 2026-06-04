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
  header: "h-14 w-14 sm:h-16 sm:w-16 lg:h-24 lg:w-24",
  sm: "h-12 w-12 sm:h-14 sm:w-14",
  md: "h-14 w-14 sm:h-20 sm:w-20",
  lg: "h-24 w-24 sm:h-32 sm:w-32",
};

export function LogoPlaceholder({
  className = "",
  priority = false,
  placeholderKey = "LOGO_PRIMARY",
  size = "md",
}: LogoPlaceholderProps) {
  return (
    <Image
      src="/placeholders/logo.png"
      alt={placeholderKey === "LOGO_PRIMARY" ? site.name : `${site.name} logo`}
      width={1254}
      height={1254}
      priority={priority}
      className={`object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
