function RatingStars({ count }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </>
  );
}

function HomeCarCard({ car }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e8edf5] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
      <div className="relative">
        <img src={car.image} alt={car.title} className="h-[190px] w-full object-cover" />
        <div className="absolute inset-x-0 top-3 flex items-center justify-between px-3">
          <span className="rounded-full bg-[#b6f5d2] px-3 py-1 text-[11px] font-bold text-[#1b7e49]">
            {car.status}
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-600 shadow">
            {car.tag}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-4 text-right">
        <div>
          <div className="mb-2 flex justify-end gap-1 text-[#f6c33b]">
            <RatingStars count={car.rating} />
          </div>
          <h3 className="text-[15px] font-extrabold text-slate-800">{car.title}</h3>
          <p className="mt-1 text-xs text-slate-500">{car.location}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-50 px-3 py-2 text-center text-[11px] text-slate-600">
          <div>
            <p className="font-bold text-slate-800">{car.beds}</p>
            <p>غرف</p>
          </div>
          <div>
            <p className="font-bold text-slate-800">{car.baths}</p>
            <p>حمام</p>
          </div>
          <div>
            <p className="font-bold text-slate-800">{car.area}</p>
            <p>م²</p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-3">
          <a
            href={`#property/${car.id}`}
            className="rounded-md bg-[#0f4fa8] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0b418c]"
          >
            اعرف المزيد
          </a>
          <div>
            <p className="text-[11px] text-slate-400">يبدأ من</p>
            <p className="text-lg font-extrabold text-[#0f4fa8]">{car.price} ج.م</p>
          </div>
        </div>
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
            <RatingStars count={car.rating} />
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
