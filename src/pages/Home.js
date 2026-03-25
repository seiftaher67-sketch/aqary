import CategoryCard from '../components/CategoryCard';
import CarCard from '../components/CarCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import {
  bestSellingRentals,
  cityCategories,
  latestRentals,
  whyChooseUsItems,
} from '../data';

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-extrabold text-slate-900 sm:text-[30px]">{title}</h2>
      <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function Home() {
  return (
    <div id="home" className="min-h-screen bg-white" dir="rtl">
      <Navbar currentPage="home" />
      <main className="overflow-hidden">
        <Hero />

        <section id="latest-rentals" className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="أحدث الإيجارات المعروضة"
              subtitle="تصفح أحدث الوحدات المضافة بتفاصيل واضحة وأسعار استرشادية"
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {latestRentals.map((rental) => (
                <CarCard key={rental.id} car={rental} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="#bookings"
                className="inline-flex rounded-md bg-[#0f4fa8] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b418c]"
              >
                عرض كل العقارات
              </a>
            </div>
          </div>
        </section>

        <section id="cities" className="bg-[#fbfbfd] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="دور الإيجارات المميزة في الأحياء المناسبة"
              subtitle="اختر المدينة المناسبة لك وابدأ تصفح أفضل الفرص المتاحة"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cityCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        <section id="best-selling" className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="تصفح الإيجارات الأكثر مبيعًا في مدينة نصر"
              subtitle="مجموعة مختارة من أكثر الوحدات طلبًا في المناطق الحيوية"
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {bestSellingRentals.map((rental) => (
                <CarCard key={rental.id} car={rental} />
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-[#fcfcff] py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="order-2 text-right lg:order-1">
              <p className="text-sm font-bold text-[#0f4fa8]">لماذا نحن؟</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900">
                نوفر أفضل العقارات لاختيارك المثالي
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate-500">
                نهتم بتقديم تجربة عرض عقاري واضحة وسهلة مع محتوى منظم يساعدك على المقارنة
                واختيار الوحدة المناسبة بسرعة.
              </p>

              <div className="mt-8 space-y-5">
                {whyChooseUsItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8f1ff] text-lg text-[#0f4fa8]">
                      ✦
                    </div>
                    <div className="text-right">
                      <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto h-[360px] max-w-[520px]">
                <div className="absolute left-0 top-8 h-[210px] w-[65%] overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                  <img src="/image/2.jpg" alt="interior" className="h-full w-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 h-[280px] w-[72%] overflow-hidden rounded-[32px] border-[6px] border-white shadow-[0_24px_55px_rgba(15,23,42,0.18)]">
                  <img src="/image/1.jpg" alt="building" className="h-full w-full object-cover" />
                </div>
                <div className="absolute right-10 top-0 rounded-2xl bg-[#e9c998] px-5 py-3 text-sm font-bold text-[#3b2a10] shadow-lg">
                  الأفضل للمستأجرين
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
