function CarCard({ car }) {
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
            {Array.from({ length: car.rating }).map((_, index) => (
              <span key={index}>★</span>
            ))}
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
          <button className="rounded-md bg-[#0f4fa8] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0b418c]">
            اعرف المزيد
          </button>
          <div>
            <p className="text-[11px] text-slate-400">يبدأ من</p>
            <p className="text-lg font-extrabold text-[#0f4fa8]">{car.price} ج.م</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
