import Image from "next/image";

export type PracticePhotoProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
  src: string;
};

export function PracticePhoto({
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
  src,
}: PracticePhotoProps) {
  return (
    <figure
      className={`min-w-0 overflow-hidden rounded-medium border border-border-soft bg-card shadow-card ${className}`}
    >
      <Image
        alt={alt}
        className={`h-full w-full object-cover ${imageClassName}`}
        height={1440}
        loading={priority ? "eager" : undefined}
        preload={priority}
        sizes={sizes}
        src={src}
        width={1920}
      />
    </figure>
  );
}
