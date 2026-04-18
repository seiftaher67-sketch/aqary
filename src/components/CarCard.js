import { useState } from 'react';

function StarIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.48 3.499a.562.562 0 0 1 1.039 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.386a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.98 20.52a.562.562 0 0 1-.84-.61l1.285-5.386a.563.563 0 0 0-.182-.557L3.039 10.36a.562.562 0 0 1 .321-1.01l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.11Z" />
    </svg>
  );
}

function HeartIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21.435 6.582-.714-.714a5.373 5.373 0 0 0-7.601 0L12 6.989l-1.12-1.12a5.373 5.373 0 0 0-7.601 7.6l.714.714L12 22.07l8.007-7.886.714-.714a5.373 5.373 0 0 0 0-7.601Z"
      />
    </svg>
  );
}

function MapPinIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s6-5.686 6-11a6 6 0 1 0-12 0c0 5.314 6 11 6 11Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
    </svg>
  );
}

function ArrowLeftIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

function ChevronLeftIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.25 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 18 6-6-6-6" />
    </svg>
  );
}

function RulerIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 7.5h15a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15V9a1.5 1.5 0 0 1 1.5-1.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5v3m3-3v1.5m3-1.5v3m3-3v1.5m-9 6v-1.5m3 1.5v-3m3 3v-1.5m3 1.5v-3" />
    </svg>
  );
}

function BedIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 18.75v-7.125A1.125 1.125 0 0 1 4.875 10.5h14.25a1.125 1.125 0 0 1 1.125 1.125v7.125M3.75 15.75h16.5M6.75 10.5V9.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V10.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18.75v2.25m13.5-2.25v2.25" />
    </svg>
  );
}

function BathIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 10.5V7.875A2.625 2.625 0 0 1 10.125 5.25h1.125A2.625 2.625 0 0 1 13.875 7.875V9"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 7.5h1.875a.75.75 0 0 1 .75.75V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5v1.125A4.875 4.875 0 0 1 15.375 18H8.625A4.875 4.875 0 0 1 3.75 13.125V12Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18v.75m13.5-.75v.75M2.25 12h19.5" />
    </svg>
  );
}

function RatingStars({ count }) {
  return (
    <div className="flex items-center gap-1 text-[#ffbf00]">
      {Array.from({ length: count }).map((_, index) => (
        <StarIcon key={index} className="h-7 w-7" />
      ))}
    </div>
  );
}

function TopBadge({ children, tone = 'light' }) {
  const toneClassName =
    tone === 'green'
      ? 'bg-[#d9ffe9] text-[#22c55e]'
      : 'bg-white/95 text-[#1f2937]';

  return (
    <span className={`inline-flex h-10 items-center rounded-full px-6 text-[16px] font-bold ${toneClassName}`}>
      {children}
    </span>
  );
}

function CarouselButton({ direction = 'prev', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-black/35 text-white transition hover:bg-black/45"
      aria-label={direction === 'prev' ? 'الصورة السابقة' : 'الصورة التالية'}
    >
      {direction === 'prev' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}

function MetaItem({ icon, label, value, bordered = true }) {
  return (
    <div className={`flex items-center gap-1.5 text-[13px] text-[#5d6673] ${bordered ? 'pl-4 border-l border-[#cfd4db]' : ''}`}>
      <span className="text-[#4f6278]">{icon}</span>
      <span className="whitespace-nowrap font-bold text-[#2f3845]">{label}:</span>
      <span className="text-[15px] font-bold text-[#20262d]">{value}</span>
    </div>
  );
}

function HomeCarCard({ car }) {
  const images = Array.isArray(car.images) && car.images.length > 0 ? car.images : [car.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const currentImage = images[activeImageIndex] || car.image;
  const propertyType = car.propertyType || car.tag;
  const furnishingLabel = car.furnishing || 'مفروش بالكامل';
  const areaLabel = car.areaLabel || 'المساحة';
  const bathsLabel = car.bathsLabel || 'الحمامات';
  const roomsLabel = car.roomsLabel || 'عدد الغرف';

  const showPrevious = () => {
    setActiveImageIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  };

  const showNext = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <article className="overflow-hidden rounded-[32px] border border-[#dfe3ea] bg-white shadow-[0_5px_0_rgba(0,0,0,0.14),0_16px_32px_rgba(15,23,42,0.08)]">
      <div className="p-3 pb-0">
        <div className="relative overflow-hidden rounded-[28px]">
          <img src={currentImage} alt={car.title} className="h-[330px] w-full object-cover" />
          <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
            <button
              type="button"
              onClick={() => setIsFavorite((current) => !current)}
              className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm transition hover:bg-white/40 ${
                isFavorite ? 'bg-white/55 text-[#ef4444]' : 'bg-white/30 text-white'
              }`}
              aria-label="إضافة إلى المفضلة"
            >
              <HeartIcon className="h-6 w-6" />
            </button>
            <div className="flex flex-wrap items-center gap-3">
              <TopBadge>{furnishingLabel}</TopBadge>
              <TopBadge tone="green">{car.status}</TopBadge>
            </div>
          </div>

          <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 items-center justify-between">
            <CarouselButton direction="next" onClick={showNext} />
            <CarouselButton direction="prev" onClick={showPrevious} />
          </div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
            {Array.from({ length: Math.max(images.length, 5) }).map((_, index) => {
              const isActive = index === activeImageIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index % images.length)}
                  className={`rounded-full transition ${isActive ? 'h-3.5 w-3.5 bg-white' : 'h-2.5 w-2.5 bg-white/65'}`}
                  aria-label={`عرض الصورة ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4 px-4 pb-5 pt-5 text-right sm:px-5">
        <div className="flex items-center justify-between gap-4">
           <span className="text-[20px] font-semibold text-[#929292]">{propertyType}</span>
      
          <div className="flex items-center gap-2">
            <span className="text-[20px] font-semibold text-[#151515]">5.0</span>
            <RatingStars count={car.rating} />
          </div>
          </div>

        <div className="space-y-2.5">
          <h3 className="text-[24px] font-extrabold leading-tight text-[#111111]">{car.title}</h3>
          <div className="flex items-center justify-start gap-2 text-[#9b9b9b]">
            <MapPinIcon className="h-7 w-7 flex-shrink-0" />
            <p className="text-[19px] leading-relaxed">{car.location}</p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3">
           <div className="text-[29px] font-medium text-[#0458c8]">
            ريال {car.price}
          </div>
          <div className="text-[23px] text-[#8e8e8e]">/ شهريا</div>
         
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <MetaItem icon={<BedIcon />} label={roomsLabel} value={car.beds} />
          <MetaItem icon={<BathIcon />} label={bathsLabel} value={car.baths} />
          <MetaItem icon={<RulerIcon />} label={areaLabel} value={car.area} bordered={false} />
        </div>

        <a
          href={`#property/${car.id}`}
          className="flex h-[62px] w-full items-center justify-between rounded-[14px] bg-[#0458c8] px-7 text-[21px] font-extrabold text-white transition hover:bg-[#034cb0]"
        >
           <span className="flex-1 text-start">أعرف تفاصيل</span>
           <ArrowLeftIcon className="h-7 w-7 flex-shrink-0" />
         
        </a>
      </div>
    </article>
  );
}

function BookingMetaItem({ label, value }) {
  return (
    <div className="flex items-center gap-1 text-[11px] text-[#7a8dad]">
      <span className="font-bold text-[#9aa9c1]">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function BookingCarCard({ car }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#dfe8f5] bg-white shadow-[0_12px_30px_rgba(18,55,118,0.08)]">
      <div className="relative p-2 pb-0">
        <img
          src={car.image}
          alt={car.title}
          className="h-[188px] w-full rounded-[14px] object-cover"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-[#d6f7dd] px-3 py-1 text-[10px] font-bold text-[#43a567]">
            {car.status}
          </span>
          <span className="rounded-full bg-[#eef4fb] px-3 py-1 text-[10px] font-bold text-[#667792]">
            {car.tag}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 text-right">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#1c2c4e]">{car.score}</span>
          <div className="flex items-center gap-1 text-[13px] text-[#ffbf1a]">
            {Array.from({ length: car.rating }).map((_, index) => (
              <StarIcon key={index} className="h-4 w-4" />
            ))}
          </div>
        </div>

        <h3 className="text-[15px] font-extrabold text-[#2b3654]">{car.title}</h3>
        <p className="mt-1 text-xs text-[#7f8ea8]">{car.location}</p>

        <div className="mt-3 flex items-end justify-between border-b border-[#edf2f9] pb-3">
          <div className="text-left">
            <p className="text-[11px] text-[#93a2ba]">{car.period}</p>
            <p className="text-[28px] font-extrabold leading-none text-[#155fcb]">
              {car.price}
              <span className="mr-1 text-sm font-bold text-[#155fcb]">{car.priceSuffix}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#93a2ba]">الأسعار تبدأ من</p>
            <p className="text-xs text-[#93a2ba]">يشمل رسوم الخدمة</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <BookingMetaItem label="م²" value={car.area} />
          <BookingMetaItem label="غرف" value={car.beds} />
          <BookingMetaItem label="حمام" value={car.baths} />
        </div>

        <a
          href={`#property/${car.id}`}
          className="mt-4 flex h-10 w-full items-center justify-center rounded-[10px] bg-[#155fcb] text-sm font-bold text-white transition hover:bg-[#114ea7]"
        >
          {car.buttonLabel || 'عرض التفاصيل'}
        </a>
      </div>
    </article>
  );
}

function CarCard({ car, variant = 'default' }) {
  if (variant === 'booking') {
    return <BookingCarCard car={car} />;
  }

  return <HomeCarCard car={car} />;
}

export default CarCard;
