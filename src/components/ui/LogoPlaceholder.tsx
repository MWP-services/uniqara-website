import Image from "next/image";
import { placeholders, type PlaceholderKey } from "@/content/placeholders";

type LogoPlaceholderProps = {
  className?: string;
  priority?: boolean;
  placeholderKey?: Extract<PlaceholderKey, "LOGO_PRIMARY" | "LOGO_FOOTER">;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "w-36",
  md: "w-40 sm:w-48",
  lg: "w-52 sm:w-64",
};

export function LogoPlaceholder({
  className = "",
  priority = false,
  placeholderKey = "LOGO_PRIMARY",
  size = "md",
}: LogoPlaceholderProps) {
  const placeholder = placeholders[placeholderKey];

  return (
    <Image
      src="/placeholders/logo-placeholder.svg"
      alt={placeholder.uiText}
      width={320}
      height={96}
      priority={priority}
      className={`h-auto ${sizeClasses[size]} ${className}`}
    />
  );
}
