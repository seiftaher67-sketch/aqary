import { useEffect, useState } from 'react';
import { heroSlides } from '../data';

function ArrowIcon({ direction = 'right', className = 'h-8 w-8' }) {
  const path = direction === 'right' ? 'M4.5 12h15m0 0-6-6m6 6-6 6' : 'M19.5 12h-15m0 0 6-6m-6 6 6 6';

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

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

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? heroSlides.length - 1 : currentIndex - 1));
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0d1b2d]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[520px] sm:h-[620px] lg:h-[680px]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,27,45,0.14)_0%,rgba(13,27,45,0.24)_35%,rgba(13,27,45,0.62)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,27,45,0.24)_0%,rgba(13,27,45,0)_35%,rgba(13,27,45,0.28)_100%)]" />
          </div>
        ))}

        <div className="absolute inset-y-0 left-0 flex items-center pl-6 sm:pl-10 lg:pl-16">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="السابق"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 sm:h-16 sm:w-16"
          >
            <ArrowIcon direction="left" className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:pr-10 lg:pr-16">
          <button
            type="button"
            onClick={showNext}
            aria-label="التالي"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 sm:h-16 sm:w-16"
          >
            <ArrowIcon direction="right" className="h-7 w-7 sm:h-8 sm:w-8" />
          </button>
        </div>

        <div className="absolute pt-40 flex items-center justify-start" >
          <div className="mx-auto flex h-full w-full max-w-[110rem] items-center justify-start px-6  sm:px-10 lg:px-6">
            <div className="mr-auto max-w-[860px] text-right text-white lg:mr-[42%]">
              <h1 className="whitespace-normal lg:whitespace-nowrap text-[60px] font-extrabold leading-[1.22]">   {heroSlides[activeIndex].title}
              </h1>
              <p className="mt-6 max-w-[860px] text-[21px] font-semibold leading-[1.8] text-white/95 sm:text-[28px] lg:text-[25px]">
                {heroSlides[activeIndex].description}
              </p>
              <a
                href="#latest-rentals"
                className="mt-9 inline-flex h-[60px] items-center gap-3 rounded-[12px] bg-[#0458c8] px-9 text-[24px] font-bold text-white transition hover:bg-[#034cb0] sm:h-[64px]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span>أبحث الان</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`slide-${slide.id}`}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all ${
                index === activeIndex ? 'h-4 w-12 bg-[#0458c8]' : 'h-4 w-4 bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
