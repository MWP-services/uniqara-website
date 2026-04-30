import Image from "next/image";

type LogoPlaceholderProps = {
  className?: string;
  priority?: boolean;
};

export function LogoPlaceholder({
  className = "",
  priority = false,
}: LogoPlaceholderProps) {
  return (
    <Image
      src="/placeholders/logo-placeholder.svg"
      alt="LOGO PLACEHOLDER - UNIQARA"
      width={320}
      height={96}
      priority={priority}
      className={`h-auto w-40 sm:w-48 ${className}`}
    />
  );
}
