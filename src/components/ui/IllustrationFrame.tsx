import Image from "next/image";

type IllustrationFrameProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  motion?: "hero" | "float" | "left" | "up" | "reveal";
  priority?: boolean;
  sizes?: string;
  src: string;
};

const motionClasses = {
  hero: "illustration-motion illustration-motion-hero",
  float: "illustration-motion illustration-motion-float",
  left: "illustration-motion illustration-motion-left",
  up: "illustration-motion illustration-motion-up",
  reveal: "illustration-motion illustration-motion-reveal",
};

export function IllustrationFrame({
  alt,
  className = "",
  imageClassName = "",
  motion,
  priority = false,
  sizes = "(min-width: 1024px) 52vw, (min-width: 640px) 92vw, 100vw",
  src,
}: IllustrationFrameProps) {
  const motionClass = motion ? motionClasses[motion] : "";

  return (
    <div
      className={`min-w-0 overflow-hidden rounded-medium border border-border-soft bg-card shadow-card ${motionClass} ${className}`}
    >
      <div className={motion ? "illustration-motion-inner h-full w-full" : "h-full w-full"}>
        <Image
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName}`}
          height={2160}
          preload={priority}
          sizes={sizes}
          src={src}
          width={3840}
        />
      </div>
    </div>
  );
}
