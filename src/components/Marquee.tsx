import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

const speedClasses: Record<string, string> = {
  slow: "[animation-duration:40s]",
  normal: "[animation-duration:25s]",
  fast: "[animation-duration:15s]",
};

export default function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const animClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={`overflow-hidden ${className}`}
      aria-label="Scrolling content"
    >
      <div
        className={`flex w-max ${animClass} ${speedClasses[speed]} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
