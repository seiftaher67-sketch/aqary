import CarRentalCard from '../components/CarRentalCard';
import { availableCars } from '../carRentalData';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const brandLogos = [
  '/image/15.png',
  '/image/16.png',
  '/image/17.png',
  '/image/18.png',
  '/image/19.png',
  '/image/20.png',
  '/image/21.png',
  '/image/22.png',
];

const carCategories = [
  { id: 1, title: 'هيونداي النترا', count: '36 سيارة', image: '/image/12.png' },
  { id: 2, title: 'مرسيدس سيدان', count: '24 سيارة', image: '/image/13.png' },
  { id: 3, title: 'تويوتا كروس', count: '18 سيارة', image: '/image/14.png' },
  { id: 4, title: 'بي ام دبليو', count: '12 سيارة', image: '/image/12.png' },
  { id: 5, title: 'رينج روفر', count: '10 سيارات', image: '/image/13.png' },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </svg>
  );
}

function HeroSpecs() {
  const specs = [
    { label: 'Speed', value: '120 KM/H' },
    { label: 'Battery Range', value: '400 KM' },
    { label: 'Charging Time', value: '12.5 H' },
  ];

  return (
    <div className="absolute bottom-3 right-1/2 z-10 flex w-[78%] translate-x-1/2 items-center justify-between rounded-[18px] bg-white/85 px-4 py-3 shadow-[0_16px_38px_rgba(31,68,140,0.18)] backdrop-blur">
      {specs.map((spec, index) => (
        <div
          key={spec.label}
          className={`flex-1 text-center ${index < specs.length - 1 ? 'border-l border-[#e7edf7]' : ''}`}
        >
          <p className="text-[10px] font-semibold text-[#98a5bc]">{spec.label}</p>
          <p className="mt-1 text-xs font-extrabold text-[#24324a]">{spec.value}</p>
        </div>
      ))}
    </div>
  );
}

function CarRental() {
  const marqueeLogos = Array.from({ length: 4 }).flatMap(() => brandLogos);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar currentPage="car-rental" />
      <main className="overflow-hidden">
        <section className="border-b border-[#edf2f8] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-10 sm:py-14">
          <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="order-2 text-right lg:order-1">
              <p className="text-sm font-bold text-[#9fb7dd]">استأجر سياراتك طول</p>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.35] text-[#24324a] sm:text-[46px]">
                استأجر سياراتك طول
                <br />
                فترة رحلتك
              </h1>
              <p className="mt-4 text-sm leading-8 text-[#8c97ab]">
                احجز من بين مجموعة واسعة من السيارات المناسبة للاستخدام اليومي
                والرحلات الطويلة بأسعار واضحة وخدمة سريعة.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
                <a
                  href="#available-cars"
                  className="inline-flex items-center rounded-full bg-[#0f4fa8] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(15,79,168,0.18)] transition hover:bg-[#0c428e]"
                >
                  تصفح السيارات المتاحة
                </a>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e2f2] bg-white text-[#0f4fa8] shadow-sm transition hover:border-[#0f4fa8]"
                >
                  <SearchIcon />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full border border-[#d7e2f2] bg-white px-5 py-3 text-sm font-bold text-[#3f4d67] transition hover:border-[#0f4fa8] hover:text-[#0f4fa8]"
                >
                  البحث
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto flex max-w-[560px] items-center justify-center">
                <div className="absolute left-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#bdd4f7]" />
                <div className="absolute left-[36%] top-[13%] rounded-full bg-[#a9c4ef] px-5 py-2 text-xs font-bold text-white shadow-[0_10px_26px_rgba(93,134,201,0.28)]">
                  Luxury Car for Rent
                </div>
               
                <div className="relative w-full rounded-[34px] px-4 pt-6 pb-16">
                  <img
                    src="/image/Preview.png"
                    alt="Luxury rental car"
                    className="relative z-[1] mx-auto w-full max-w-[500px] object-contain drop-shadow-[0_32px_45px_rgba(15,23,42,0.22)]"
                  />
                  <HeroSpecs />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#edf2f8] py-6">
          <div className="marquee-container mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            {[0, 1].map((trackIndex) => (
              <div
                key={trackIndex}
                className={`marquee-track ${trackIndex === 0 ? 'marquee-track-primary' : 'marquee-track-secondary'}`}
                aria-hidden={trackIndex === 1}
              >
                {marqueeLogos.map((logo, index) => (
                  <div
                    key={`${trackIndex}-${logo}-${index}`}
                    className="marquee-item"
                  >
                    <img src={logo} alt={`brand-${index + 1}`} className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold text-[#24324a]">اختر السيارة التي تناسب احتياجاتك</h2>
              <p className="mt-2 text-sm text-[#9aa5b8]">اختر الفئة</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {carCategories.map((category) => (
                <article key={category.id} className="text-center">
                  <div className="mx-auto flex h-[74px] w-[138px] items-center justify-center">
                    <img src={category.image} alt={category.title} className="max-h-[62px] w-auto object-contain" />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold text-[#24324a]">{category.title}</h3>
                  <span className="mt-2 inline-flex rounded-full bg-[#eef5ff] px-3 py-1 text-[11px] font-bold text-[#66a0ec]">
                    {category.count}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="available-cars" className="bg-[#fbfcfe] py-14">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold text-[#24324a]">السيارات المتاحة</h2>
              <p className="mt-2 text-sm text-[#9aa5b8]">تصفح الآن</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {availableCars.map((car) => (
                <CarRentalCard key={car.id} car={car} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#bookings"
                className="inline-flex items-center rounded-full border border-[#d7e2f2] bg-white px-6 py-3 text-sm font-extrabold text-[#0f4fa8] transition hover:border-[#0f4fa8] hover:bg-[#f5f9ff]"
              >
                عرض كل السيارات المتاحة
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CarRental;
