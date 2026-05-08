type VideoFrameProps = {
  className?: string;
  motion?: "hero";
  poster?: string;
  src: string;
};

const motionClasses = {
  hero: "illustration-motion illustration-motion-hero",
};

export function VideoFrame({
  className = "",
  motion,
  poster,
  src,
}: VideoFrameProps) {
  const motionClass = motion ? motionClasses[motion] : "";

  return (
    <div
      className={`overflow-hidden rounded-medium border border-border-soft bg-card shadow-card ${motionClass} ${className}`}
    >
      <div className={motion ? "illustration-motion-inner h-full w-full" : "h-full w-full"}>
        <video
          aria-hidden="true"
          autoPlay
          className="block h-full w-full rounded-[inherit] object-contain p-2 sm:p-3"
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
