import React from "react";

interface LogoCarouselProps {
  slides: React.ReactNode[];
  speed?: number; // seconds for one full loop
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ slides, speed = 20 }) => {
  return (
    <div
      className="w-70 md:w-150 overflow-hidden group"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* list rendered twice so the loop is seamless */}
        {[...slides, ...slides].map((slide, i) => (
          <div
            key={i}
            className="shrink-0 px-5 md:px-8 flex items-center justify-center"
            aria-hidden={i >= slides.length}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
