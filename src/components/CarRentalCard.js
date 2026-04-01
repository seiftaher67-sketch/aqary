function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75v-7.5m7.5 10.5v-13.5m7.5 10.5v-7.5M3 15.75h3m6 3h3m6-3h-3M3 8.25h3m6-3h3m6 3h-3"
      />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h5.25A2.25 2.25 0 0 1 13.5 6.75v12.75H3.75V6.75Zm9.75 2.25h2.25l2.25 2.25v6a2.25 2.25 0 0 0 4.5 0V12l-1.5-1.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25h3.75" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.75a3.75 3.75 0 0 0-7.5 0m7.5 0v.75H10.5v-.75m7.5 0a3.75 3.75 0 0 1 3.75-3.75h.75m-12 3.75a3.75 3.75 0 0 0-7.5 0v.75h7.5v-.75Zm0 0a3.75 3.75 0 0 1 3.75-3.75h.75M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 1.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CarRentalCard({ car }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#e5ebf6] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
      <div className="relative border-b border-[#edf2f9] bg-[#f7f9fc] px-3 pt-3">
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
            car.badgeColor === 'green'
              ? 'bg-[#dff9ea] text-[#16a34a]'
              : 'bg-[#ffe4e6] text-[#ef4444]'
          }`}
        >
          {car.badge}
        </span>
        <div className="flex h-[180px] items-center justify-center rounded-[14px] bg-[#f5f7fb]">
          <img src={car.image} alt={car.name} className="max-h-[150px] w-auto object-contain" />
        </div>
      </div>

      <div className="px-4 py-4 text-right">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="font-semibold text-[#8b97ad]">{car.category}</span>
          <div className="flex items-center gap-1 text-[#fbbf24]">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
        </div>

        <h3 className="mt-2 text-sm font-extrabold text-[#24324a]">{car.name}</h3>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="flex items-end gap-1 text-[#1c56c4]">
            <span className="text-[25px] font-extrabold leading-none">{car.price}</span>
            <span className="pb-0.5 text-sm font-bold">ريال /</span>
            <span className="pb-0.5 text-xs text-[#8b97ad]">يوميا</span>
          </div>
          <span className="text-[11px] font-semibold text-[#8b97ad]">{car.year}</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#edf2f9] pt-4 text-[11px] font-semibold text-[#6f7d95]">
          <div className="flex items-center justify-center gap-1.5">
            <GearIcon />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <FuelIcon />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <UsersIcon />
            <span>{car.passengers}</span>
          </div>
        </div>

        <a
          href={`#car/${car.id}`}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#0f4fa8] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0c428e]"
        >
          <ArrowLeftIcon />
          <span>اعرف التفاصيل</span>
        </a>
      </div>
    </article>
  );
}

export default CarRentalCard;
