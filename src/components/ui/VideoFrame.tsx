type VideoFrameProps = {
  className?: string;
  motion?: "hero";
  plain?: boolean;
  poster?: string;
  src: string;
};

const motionClasses = {
  hero: "illustration-motion illustration-motion-hero",
};

export function VideoFrame({
  className = "",
  motion,
  plain = false,
  poster,
  src,
}: VideoFrameProps) {
  const motionClass = motion ? motionClasses[motion] : "";
  const frameClass = plain
    ? `overflow-visible bg-transparent ${motionClass} ${className}`
    : `overflow-hidden rounded-medium border border-border-soft bg-card shadow-card ${motionClass} ${className}`;
  const videoClass = plain
    ? "block h-full w-full object-contain"
    : "block h-full w-full rounded-[inherit] object-contain p-2 sm:p-3";

  return (
    <div className={frameClass}>
      <div className={motion ? "illustration-motion-inner h-full w-full" : "h-full w-full"}>
        <video
          aria-hidden="true"
          autoPlay
          className={videoClass}
          loop
          muted
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
