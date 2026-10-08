import { useEffect, useState, useRef } from "react";

// Replace these imports with your actual filenames
import img1 from "../assets/gallery-left.jpg";
import img2 from "../assets/gallery-center.png";
import img3 from "../assets/gallery-right.jpg";

const images = [img1, img2, img3];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const len = images.length;

  const goPrev = () => setIndex((s) => (s - 1 + len) % len);
  const goNext = () => setIndex((s) => (s + 1) % len);

  // Auto-rotate logic (Pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [len, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  // Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      goNext(); // Swipe Left
    }
    if (touchStartX.current - touchEndX.current < -50) {
      goPrev(); // Swipe Right
    }
  };

  return (
    <section className="bg-black text-white py-10 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 animate-fade-in-up">
        View Gallery
      </h2>

      <div
        className="relative mx-auto w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[500px]"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => {
          const prevIndex = (index - 1 + len) % len;
          const nextIndex = (index + 1) % len;

          let zIndex = "z-0";
          let opacity = "opacity-0";
          let extraClasses = "pointer-events-none";
          let positionClass = "";

          if (i === index) {
            // CENTER IMAGE
            positionClass = "gallery-center";
            zIndex = "z-30";
            opacity = "opacity-100";
            extraClasses = "w-[70%] sm:w-[60%] md:w-[50%] h-full border-4 border-white shadow-2xl";
          } else if (i === prevIndex) {
            // LEFT IMAGE - Using CSS classes for responsive transforms
            positionClass = "gallery-prev";
            zIndex = "z-20";
            opacity = "opacity-40 hover:opacity-70 cursor-pointer";
            extraClasses = "w-[70%] sm:w-[60%] md:w-[50%] h-full grayscale hover:grayscale-0 transition-all";
          } else if (i === nextIndex) {
            // RIGHT IMAGE - Using CSS classes for responsive transforms
            positionClass = "gallery-next";
            zIndex = "z-20";
            opacity = "opacity-40 hover:opacity-70 cursor-pointer";
            extraClasses = "w-[70%] sm:w-[60%] md:w-[50%] h-full grayscale hover:grayscale-0 transition-all";
          }

          return (
            <div
              key={i}
              onClick={() => {
                if (i === prevIndex) goPrev();
                if (i === nextIndex) goNext();
              }}
              className={`absolute left-0 right-0 mx-auto top-0 transition-all duration-500 ease-out flex items-center justify-center rounded-lg overflow-hidden bg-gray-900 ${positionClass} ${zIndex} ${opacity} ${extraClasses}`}
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              {/* Dark overlay for side images */}
              {i !== index && <div className="absolute inset-0 bg-black/20" />}
            </div>
          );
        })}

        {/* CONTROLS (Hidden on very small screens to save space, relies on swipe) */}
        <button
          onClick={goPrev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all z-40 border border-white/20"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          onClick={goNext}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all z-40 border border-white/20"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Pagination Dots (Optional Visual Indicator) */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === index ? "bg-white w-6" : "bg-white/30 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
