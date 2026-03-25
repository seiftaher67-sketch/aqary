import { useEffect, useState } from 'react';
import { heroSlides } from '../data';

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[360px] sm:h-[430px] lg:h-[470px]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 text-center text-white sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold leading-tight drop-shadow sm:text-4xl lg:text-[42px]">
              {heroSlides[activeIndex].title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-white/90 sm:text-base">
              {heroSlides[activeIndex].description}
            </p>
            <a
              href="#latest-rentals"
              className="mt-6 inline-flex rounded-md bg-[#0f4fa8] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b418c]"
            >
              ابدأ البحث الآن
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`slide-${slide.id}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-7 bg-[#0f4fa8]' : 'w-2.5 bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
