import { useMemo, useState } from 'react';
import CarRentalCard from '../components/CarRentalCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getCarDetails, getSimilarCars } from '../carRentalData';

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#ffbf1a]">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="m12 20.2-1.2-1.1C5.7 14.4 2.5 11.5 2.5 7.9A4.4 4.4 0 0 1 7 3.5c1.7 0 3.4.8 4.5 2.2A5.9 5.9 0 0 1 16 3.5a4.4 4.4 0 0 1 4.5 4.4c0 3.6-3.2 6.5-8.3 11.2L12 20.2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15.5 8.5 8.5 12l7 3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3.5v3M17 3.5v3M4 8h16M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 12.5 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechIcon({ type }) {
  if (type === 'engine') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.5 9.5h12v7h-12zM16.5 11H19l1.5 2v3.5H19" strokeLinejoin="round" />
        <path d="M7 9.5V7h2.5v2.5M11.5 9.5V6.5H14v3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'bolt') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 5 13h5l-1 9 8-11h-5z" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'gauge') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 16a7 7 0 1 1 14 0" />
        <path d="m12 12 3.5-3.5" strokeLinecap="round" />
        <path d="M12 16h.01" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'drive') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="7" cy="16" r="2.5" />
        <circle cx="17" cy="16" r="2.5" />
        <path d="M4.5 16V9.5h12l3 3V16M7 7.5h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'speed') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 15a8 8 0 1 1 16 0" />
        <path d="m12 12 4-4" strokeLinecap="round" />
        <path d="M12 15h.01" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 13.5A6 6 0 0 1 18 12a4 4 0 1 1-4 6H9a3 3 0 0 1-3-4.5Z" strokeLinejoin="round" />
      <path d="M10 18 8.5 20M14 18l1.5 2" strokeLinecap="round" />
    </svg>
  );
}

function BookingField({ label, placeholder, icon, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] font-bold text-[#1f3152]">{label}</span>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="h-[42px] w-full rounded-[10px] border border-[#e4ebf6] bg-white px-11 text-[12px] text-[#5f7091] outline-none transition focus:border-[#155fcb]"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86a0c8]">{icon}</span>
      </div>
    </label>
  );
}

function CarRentalDetails({ carId }) {
  const car = getCarDetails(carId);
  const similarCars = useMemo(() => getSimilarCars(car.similarCars), [car.similarCars]);
  const [bookingPlan, setBookingPlan] = useState('monthly');
  const activePlan = car.bookingPlans[bookingPlan];
  const galleryTop = car.gallery.slice(0, 3);
  const galleryBottom = car.gallery.slice(2, 6);

  return (
    <div className="min-h-screen bg-[#f7f9fc]" dir="rtl">
      <Navbar currentPage="car-rental" />
      <main className="pb-14 pt-7">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-[#98a5bb]">
            {car.breadcrumbs.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className={index === car.breadcrumbs.length - 1 ? 'font-bold text-[#155fcb]' : ''}>{item}</span>
                {index !== car.breadcrumbs.length - 1 ? <span>/</span> : null}
              </div>
            ))}
          </div>

          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-2 text-[#6f82a1]">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce5f2] bg-white transition hover:border-[#155fcb] hover:text-[#155fcb]"
              >
                <ShareIcon />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce5f2] bg-white transition hover:border-[#155fcb] hover:text-[#155fcb]"
              >
                <HeartIcon />
              </button>
            </div>

            <div className="text-right">
              <div className="mb-2 flex items-center justify-end gap-2 text-[13px] text-[#7d8ea8]">
                <span>({car.reviewCount}) تقييم</span>
                <StarRating count={car.rating} />
              </div>
              <p className="text-[12px] font-bold text-[#155fcb]">{car.category}</p>
              <h1 className="mt-1 text-[33px] font-extrabold text-[#233250]">{car.title}</h1>
            </div>
          </div>

          <section className="rounded-[18px] border border-[#e5ebf6] bg-white p-3 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
            <div className="grid gap-3 lg:grid-cols-[0.27fr_1fr]">
              <div className="grid gap-3">
                {galleryTop.slice(0, 2).map((image, index) => (
                  <div key={image + index} className="flex h-[124px] items-center justify-center rounded-[14px] bg-[#f4f7fb] p-3">
                    <img src={image} alt={car.title} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>

              <div className="relative flex h-[252px] items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#4a4b51_0%,#2c2f37_100%)] p-5">
                <img src={galleryTop[2]} alt={car.title} className="h-full w-full object-contain" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold text-white">
                  10 صور
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-4">
              {galleryBottom.map((image, index) => (
                <div key={image + index} className="flex h-[92px] items-center justify-center rounded-[14px] bg-[#f4f7fb] p-2">
                  <img src={image} alt={car.title} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          </section>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[13px] text-[#7f8ea8]">
            <div className="flex items-center gap-5">
              <span>عدد المشاهدات {car.views}</span>
              <span>تاريخ النشر {car.publishedAt}</span>
            </div>
            <button type="button" className="font-bold text-[#ef4444]">
              {car.reportText}
            </button>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section className="space-y-5">
              <div className="rounded-[18px] border border-[#e5ebf6] bg-white p-5 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="text-right">
                    <p className="text-[13px] font-bold text-[#1f3152]">وصف السيارة</p>
                    <p className="mt-3 max-w-[560px] text-[13px] leading-8 text-[#7c8ca6]">{car.description}</p>
                  </div>
                  <div className="min-w-[190px] text-left">
                    <div className="flex items-center justify-end gap-3">
                      <span
                        className={`rounded-full px-4 py-1 text-[12px] font-bold ${
                          car.status === 'متاحة' ? 'bg-[#dbf8e3] text-[#16a34a]' : 'bg-[#ffe7e7] text-[#ef4444]'
                        }`}
                      >
                        {car.status}
                      </span>
                      <span className="text-[12px] font-bold text-[#7f8ea8]">الحالة</span>
                    </div>
                    <div className="mt-5 flex items-end justify-end gap-1 text-[#155fcb]">
                      <span className="text-[34px] font-extrabold leading-none">{car.price}</span>
                      <span className="pb-1 text-[14px] font-bold">ريال /</span>
                      <span className="pb-1 text-[12px] text-[#7f8ea8]">{car.priceUnit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-[#e5ebf6] bg-white p-5 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
                <h2 className="text-[15px] font-extrabold text-[#1f3152]">المواصفات الأساسية</h2>
                <div className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
                  {car.basicSpecs.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-dashed border-[#edf2f8] pb-3">
                      <span className="text-[13px] font-bold text-[#1f3152]">{value}</span>
                      <span className="text-[12px] text-[#8d9bb2]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] border border-[#e5ebf6] bg-white p-5 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
                <h2 className="text-[15px] font-extrabold text-[#1f3152]">المواصفات التقنية</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {car.technicalSpecs.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-[12px] border border-[#edf2f8] bg-[#fbfcff] px-4 py-3"
                    >
                      <div className="text-right">
                        <p className="text-[12px] text-[#8d9bb2]">{item.label}</p>
                        <p className="mt-1 text-[13px] font-bold text-[#1f3152]">{item.value}</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5ff] text-[#155fcb]">
                        <TechIcon type={item.icon} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-5">
              <div className="rounded-[18px] border border-[#e5ebf6] bg-white p-4 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
                <div className="grid grid-cols-3 gap-2 rounded-[12px] bg-[#f4f7fb] p-1">
                  {[
                    ['daily', 'يومي'],
                    ['monthly', 'شهري'],
                    ['yearly', 'سنوي'],
                  ].map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setBookingPlan(key)}
                      className={`rounded-[10px] px-3 py-2 text-[12px] font-bold transition ${
                        bookingPlan === key ? 'bg-[#155fcb] text-white shadow-sm' : 'text-[#6f7f99]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 rounded-[14px] border border-[#edf2f8] p-4">
                  <div className="flex items-end justify-between">
                    <div className="text-left text-[#155fcb]">
                      <span className="text-[28px] font-extrabold leading-none">{activePlan.price}</span>
                      <span className="mr-1 text-[13px] font-bold">ريال / {activePlan.unit}</span>
                    </div>
                    <span className="text-[12px] font-bold text-[#7f8ea8]">السعر</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-[#edf2f8] pt-3">
                    <span className="text-[13px] font-bold text-[#1f3152]">{activePlan.total}</span>
                    <span className="text-[12px] text-[#7f8ea8]">{activePlan.totalLabel}</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
                    <BookingField label="تاريخ الاستلام" placeholder="اختر التاريخ" icon={<CalendarIcon />} type="date" />
                    <BookingField label="تاريخ التسليم" placeholder="اختر التاريخ" icon={<CalendarIcon />} type="date" />
                  </div>

                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
                    <BookingField label="وقت الوصول" placeholder="حدد الوقت" icon={<ClockIcon />} type="time" />
                    <BookingField label="وقت المغادرة" placeholder="حدد الوقت" icon={<ClockIcon />} type="time" />
                  </div>

                  <BookingField label="موقع الاستلام" placeholder="اختر موقع الاستلام" icon={<LocationIcon />} />
                  <BookingField label="موقع التسليم" placeholder="اختر موقع التسليم" icon={<LocationIcon />} />
                </div>

                <label className="mt-4 flex items-center justify-between rounded-[12px] border border-[#edf2f8] bg-[#fbfcff] px-4 py-3">
                  <input type="checkbox" className="h-4 w-4 accent-[#155fcb]" />
                  <span className="text-[12px] font-bold text-[#1f3152]">أحتاج سائق خاص</span>
                </label>

                <div className="mt-4 rounded-[14px] border border-[#edf2f8] p-4">
                  <div className="mb-2 flex items-center justify-between text-[12px] text-[#7f8ea8]">
                    <span>2,000 ريال</span>
                    <span>رسوم الحجز</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between text-[12px] text-[#7f8ea8]">
                    <span>300 ريال</span>
                    <span>رسوم إضافية</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#edf2f8] pt-3 text-[14px] font-extrabold text-[#1f3152]">
                    <span>8,300 ريال</span>
                    <span>إجمالي الدفع</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 flex h-11 w-full items-center justify-center rounded-[10px] bg-[#155fcb] text-[13px] font-extrabold text-white transition hover:bg-[#104fae]"
                >
                  احجز السيارة الآن
                </button>
              </div>
            </aside>
          </div>

          <section className="mt-5 rounded-[18px] border border-[#e5ebf6] bg-white p-5 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
            <h2 className="text-[16px] font-extrabold text-[#1f3152]">مميزات السيارة</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {car.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-between rounded-[12px] border border-[#edf2f8] px-4 py-3 text-[13px] text-[#627491]"
                >
                  <span>{feature}</span>
                  <span className="text-[#16a34a]">
                    <CheckIcon />
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-5 rounded-[18px] border border-[#e5ebf6] bg-white p-5 shadow-[0_12px_30px_rgba(17,39,88,0.06)]">
            <h2 className="text-[16px] font-extrabold text-[#1f3152]">آراء العملاء</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {car.reviews.map((review) => (
                <article key={review.id} className="rounded-[14px] border border-[#edf2f8] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-left">
                      <div className="text-[12px] font-bold text-[#1f3152]">{review.score}</div>
                      <StarRating count={5} />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[13px] font-bold text-[#1f3152]">{review.name}</p>
                        <p className="text-[11px] text-[#8d9bb2]">{review.role}</p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0ff] text-[13px] font-extrabold text-[#155fcb]">
                        {review.name.slice(0, 1)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[13px] leading-7 text-[#627491]">{review.comment}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <div className="mb-5 text-right">
              <h2 className="text-[16px] font-extrabold text-[#1f3152]">سيارات مشابهة</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {similarCars.map((item) => (
                <CarRentalCard key={item.id} car={item} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CarRentalDetails;
