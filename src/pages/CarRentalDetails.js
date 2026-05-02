import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getCarDetails, getSimilarCars } from '../carRentalData';

function Icon({ children, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      {children}
    </svg>
  );
}

function StarRating({ size = 'text-[34px]' }) {
  return (
    <div className="flex items-center gap-2 text-[#ffc400]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={`${size} leading-none`}>★</span>
      ))}
    </div>
  );
}

function SectionTitle({ children, className = '' }) {
  return <h2 className={`text-[30px] font-extrabold text-[#111111] ${className}`}>{children}</h2>;
}

function GalleryImage({ src, className = '', overlay }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-[16px] bg-[#d8d8d8] ${className}`}>
      <img src={src} alt="" className="h-full w-full object-cover" />
      {overlay}
    </div>
  );
}

function SpecItem({ label, value, icon }) {
  return (
    <div className="flex items-center justify-end gap-3 text-[22px]">
      <span className="font-semibold text-[#222222]">{value}</span>
      <span className="text-[#8c8c8c]">: {label}</span>
      <span className="text-[#075bbf]">{icon}</span>
    </div>
  );
}

function FeatureItem({ children }) {
  return (
    <div className="flex items-center justify-end gap-4 text-[25px] leading-relaxed text-[#222222]">
      <span>{children}</span>
      <span className="text-[31px] font-bold text-[#2bbf5b]">✓</span>
    </div>
  );
}

function BookingBox({ bookingPlan, setBookingPlan, onBookNow }) {
  return (
    <aside className="rounded-[18px] border border-[#dddddd] bg-white shadow-[0_5px_0_rgba(0,0,0,0.18)]">
      <div className="p-7">
        <div className="mb-8 grid grid-cols-3 rounded-full border border-[#e7e7e7] bg-[#fbfbfb] p-2 text-center text-[21px]">
          {[
            ['daily', 'يومي'],
            ['monthly', 'شهري'],
            ['yearly', 'سنوي'],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setBookingPlan(key)}
              className={`rounded-full py-4 font-bold ${bookingPlan === key ? 'bg-[#075bbf] text-white' : 'text-[#111111]'}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mb-8 text-left">
          <span className="text-[19px] text-[#8f8f8f]">ريال / ليله</span>
          <span className="mx-3 text-[36px] font-extrabold text-[#075bbf]">320</span>
        </div>

        <div className="mb-6 flex items-center justify-between text-[18px]">
          <span className="text-[#222222]">355.20 ر.س</span>
          <span className="text-[#8f8f8f]">إجمالي ليلة واحدة</span>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5] px-7 py-5">
        <div className="mb-4 flex items-center justify-between text-[17px]">
          <span className="text-[#a0a0a0]">بإمكانك تعديل التاريخ</span>
          <span className="font-bold text-[#222222]">ليلتين</span>
        </div>
        <div className="grid grid-cols-2 overflow-hidden rounded-[18px] border-[3px] border-[#9fc2ed] text-center">
          {['تاريخ الاستلام', 'تاريخ التسليم'].map((label) => (
            <div key={label} className="border-l border-[#dedede] px-3 py-4 last:border-l-0">
              <div className="mb-2 flex items-center justify-center gap-2 text-[15px] text-[#a0a0a0]">
                <span>{label}</span>
                <Icon className="h-4 w-4"><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /></Icon>
              </div>
              <p className="text-[18px] font-bold text-[#111111]">الأربعاء، 29 أكتوبر</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-[#e5e5e5] px-7 py-5 text-center">
        {['وقت الوصول', 'وقت المغادرة'].map((label, index) => (
          <div key={label} className="border-l border-[#dedede] last:border-l-0">
            <div className="mb-2 flex items-center justify-center gap-2 text-[15px] text-[#a0a0a0]">
              <span>{label}</span>
              <Icon className="h-4 w-4"><path d="M12 7v5l3 2" /><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></Icon>
            </div>
            <p className="text-[18px] font-bold text-[#111111]">{index === 0 ? '5:00 مساءا' : '12:00 مساءا'}</p>
          </div>
        ))}
      </div>

      {['موقع الاستلام', 'موقع التسليم'].map((label) => (
        <div key={label} className="border-t border-[#e5e5e5] px-7 py-6">
          <p className="mb-5 text-right text-[20px] font-bold text-[#111111]">{label}</p>
          <div className="flex h-[76px] items-center justify-between rounded-full border border-[#eeeeee] bg-[#fbfbfb] px-8 text-[20px] text-[#c9c9c9]">
            <span>ادخل عنوان</span>
            <Icon className="h-6 w-6"><path d="M12 21s6-5.7 6-11A6 6 0 1 0 6 10c0 5.3 6 11 6 11Z" /><path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></Icon>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between border-t border-[#e5e5e5] px-7 py-5 text-[19px]">
        <span className="font-bold text-[#075bbf]">+150 ر.س يوميا</span>
        <label className="flex items-center gap-4 font-bold text-[#111111]">
          <span>أحتاج سائق خاص</span>
          <input type="checkbox" defaultChecked className="h-6 w-6 accent-[#075bbf]" />
        </label>
      </div>

      <div className="border-t border-[#e5e5e5] p-7">
        <button
          type="button"
          onClick={onBookNow}
          className="mb-7 flex h-[64px] w-full items-center justify-center rounded-[8px] bg-[#075bbf] text-[22px] font-bold text-white"
        >
          احجز السيارة الآن
        </button>
        <p className="mb-6 text-center text-[22px] font-bold text-[#111111]">ستدفع الآن 1.100 ريال</p>
        <div className="space-y-4 text-[20px]">
          <div className="flex items-center justify-between">
            <span>719 ريال</span>
            <span className="text-[#8d8d8d]">ليلتين × 359.50 ريال</span>
          </div>
          <div className="flex items-center justify-between">
            <span>+ 300 ريال</span>
            <span className="text-[#8d8d8d]">ليلتين × رسوم السائق الخاص</span>
          </div>
          <div className="flex items-center justify-between">
            <span>+ 79.09 ريال</span>
            <span className="text-[#8d8d8d]">رسوم الخدمات</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#e5e5e5] px-7 py-6 text-[25px] font-bold">
        <span>1.100 ريال</span>
        <span className="text-[#8d8d8d]">الإجمالي</span>
      </div>
    </aside>
  );
}

function ReviewCard({ name, date, avatar, comment }) {
  return (
    <article className="rounded-[22px] border border-[#e7e7e7] bg-[#fbfcfe] p-8">
      <div className="mb-8 flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <img src={avatar} alt={name} className="h-[96px] w-[96px] rounded-full object-cover" />
          <div className="text-right">
            <h3 className="text-[29px] font-bold text-[#111111]">{name}</h3>
            <p className="mt-2 text-[19px] text-[#111111]">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StarRating size="text-[31px]" />
          <span className="text-[25px] font-medium text-[#111111]">4.9</span>
        </div>
      </div>
      <p className="text-right text-[25px] leading-[2] text-[#8c8c8c]">{comment}</p>
    </article>
  );
}

function SimilarCarCard({ car, image, status }) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-[#dddddd] bg-white shadow-[0_5px_0_rgba(0,0,0,0.14)]">
      <div className="relative h-[260px] overflow-hidden rounded-b-[18px] bg-[#eeeeee]">
        <img src={image || car.image} alt={car.name} className="h-full w-full object-cover" />
        <span className={`absolute right-5 top-5 rounded-full px-8 py-3 text-[16px] font-bold ${status === 'booked' ? 'bg-[#ffdce0] text-[#ef4444]' : 'bg-[#d9ffe9] text-[#22c55e]'}`}>
          {status === 'booked' ? 'محجوزة' : 'متاحة الآن'}
        </span>
        <button className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/50 text-white" type="button">
          <Icon><path d="m21.4 6.6-.7-.7a5.37 5.37 0 0 0-7.6 0L12 7l-1.1-1.1a5.37 5.37 0 0 0-7.6 7.6L12 22l8.7-8.5a5.37 5.37 0 0 0 .7-6.9Z" /></Icon>
        </button>
      </div>
      <div className="space-y-4 p-6 text-right">
        <div className="flex items-center justify-between">
          <span className="text-[18px] text-[#929292]">{status === 'family' ? 'السيارات العائلية' : 'السيارات الاقتصادية'}</span>
          <div className="flex items-center gap-2">
            <StarRating size="text-[25px]" />
            <span className="text-[18px]">5.0</span>
          </div>
        </div>
        <h3 className="text-[24px] font-extrabold">{car.name.includes('2021') ? 'تويوتا إينوفا 2021' : 'تويوتا كورولا 2022'}</h3>
        <p className="text-left text-[31px] font-medium text-[#075bbf]">{car.price} ريال <span className="text-[19px] text-[#8f8f8f]">/ يوميا</span></p>
        <div className="flex items-center justify-between gap-2 text-[18px] text-[#5f6b78]">
          <span>أوتوماتيك</span>
          <span className="h-6 w-px bg-[#aaaaaa]" />
          <span>بنزين</span>
          <span className="h-6 w-px bg-[#aaaaaa]" />
          <span>5 ركاب</span>
        </div>
        <a href={`#car/${car.id}`} className="flex h-[58px] items-center justify-between rounded-[8px] bg-[#075bbf] px-7 text-[21px] font-bold text-white">
          <span>←</span>
          <span>أعرف لتفاصيل</span>
        </a>
      </div>
    </article>
  );
}

function CarRentalDetails({ carId }) {
  const car = getCarDetails(carId);
  const similarCars = getSimilarCars(car.similarCars);
  const [bookingPlan, setBookingPlan] = useState('daily');
  const gallery = ['/image/12.png', '/image/12.png', '/image/12.png', '/image/12.png', '/image/13.png', '/image/12.png', '/image/12.png'];
  const handleBookNow = () => {
    window.location.hash = `#payment/${car.id}`;
  };

  const basicSpecs = [
    ['الموديل', '2022 - Toyota Corolla', <Icon><path d="M4 15h16l-2-6H6l-2 6Z" /><path d="M6 15v3M18 15v3M7 18h.01M17 18h.01" /></Icon>],
    ['نوع الوقود', 'بنزين', <Icon><path d="M5 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" /><path d="M5 10h10M15 7h2l2 2v8a2 2 0 0 0 4 0v-4" /></Icon>],
    ['عدد الركاب', '5 ركاب', <Icon><path d="M16 19a4 4 0 0 0-8 0" /><path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M22 19a3 3 0 0 0-5-2.2M2 19a3 3 0 0 1 5-2.2" /></Icon>],
    ['ناقل الحركة', 'أوتوماتيك', <Icon><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></Icon>],
    ['رقم المرجع', 'CAR-20478', <Icon><path d="M20 10 12 21 4 10l8-7 8 7Z" /></Icon>],
  ];

  const technicalSpecs = [
    ['السرعة القصوى', '220 كم / ساعة', <Icon><path d="M4 15a8 8 0 1 1 16 0" /><path d="m12 12 4-4" /><path d="M12 15h.01" /></Icon>],
    ['نوع الوقود', 'بنزين 95', <Icon><path d="M5 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" /><path d="M5 10h10M15 7h2l2 2v8a2 2 0 0 0 4 0v-4" /></Icon>],
    ['توفير الوقود', '12 كم لكل 1 لتر', <Icon><path d="M5 20V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" /><path d="M18 7v10" /></Icon>],
    ['الصيانة', 'دورية / تمت مؤخراً', <Icon><path d="m14.7 6.3 3-3 3 3-3 3-3-3Z" /><path d="M3 21l7.5-7.5M14 14l7 7M3 3l6 6" /></Icon>],
    ['حجم الخزان', '40 لتر', <Icon><path d="M6 20h12l-1-12H7L6 20Z" /><path d="M9 8V5h6v3" /></Icon>],
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar currentPage="car-rental" />
      <main className="pb-28 pt-7">
        <div className="mx-auto max-w-[1650px] px-8">
          <div className="mb-20 flex items-center justify-between">
            <nav className="flex items-center gap-5 text-[20px] text-[#075bbf]">
              <span>تأجير السيارات</span><span className="text-[#111111]">‹</span>
              <span>البحث</span><span className="text-[#111111]">‹</span>
              <span>نتائج البحث</span><span className="text-[#111111]">‹</span>
              <span className="text-[#111111]">تفاصيل السيارة</span>
            </nav>
            <div className="flex items-center gap-16 text-[#075bbf]">
              <Icon className="h-9 w-9"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /></Icon>
              <Icon className="h-8 w-8"><path d="M15.5 8.5 8.5 12l7 3.5" /><circle cx="18" cy="7" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="17" r="2.5" /></Icon>
            </div>
          </div>

          <header className="mb-10 text-right">
            <div className="mb-12 flex items-center gap-5">
              <StarRating />
              <span className="text-[28px] font-medium text-[#111111]">5.0</span>
              <span className="text-[18px] font-bold text-[#8c8c8c]">(50 تقييم)</span>
            </div>
            <p className="mb-12 text-[30px] font-extrabold text-[#075bbf]">السيارات الاقتصادية</p>
            <h1 className="text-[54px] font-extrabold leading-tight text-[#080808]">تويوتا كورولا 2022</h1>
          </header>

          <section className="mb-8">
            <div className="grid gap-7 lg:grid-cols-[1.95fr_0.95fr]">
              <GalleryImage
                src={gallery[0]}
                className="h-[610px]"
                overlay={
                  <div className="absolute bottom-7 left-7 flex gap-5">
                    <button className="flex h-[62px] items-center gap-4 rounded-[14px] bg-black/55 px-8 text-[22px] font-bold text-white" type="button">
                      عرض الصور
                      <Icon><path d="M4 5h16v14H4z" /><path d="m4 16 5-5 4 4 2-2 5 5" /></Icon>
                    </button>
                    <button className="flex h-[62px] items-center gap-4 rounded-[14px] bg-black/70 px-8 text-[22px] font-bold text-white" type="button">
                      عرض الفيديو
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">▶</span>
                    </button>
                  </div>
                }
              />
              <div className="grid gap-7">
                <GalleryImage src={gallery[1]} className="h-[292px]" />
                <GalleryImage src={gallery[2]} className="h-[292px]" />
              </div>
            </div>
            <div className="mt-7 grid gap-8 md:grid-cols-4">
              {gallery.slice(3, 7).map((image, index) => (
                <GalleryImage
                  key={image + index}
                  src={image}
                  className="h-[205px]"
                  overlay={index === 0 ? <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-[30px] font-extrabold text-white">+ 10 صور</div> : null}
                />
              ))}
            </div>
          </section>

          <div className="mb-14 flex items-center justify-between text-[20px]">
            <button className="flex items-center gap-3 text-[#ff2d2d]" type="button">
              الإبلاغ عن الوحدة
              <Icon className="h-5 w-5"><path d="M12 8v5M12 17h.01" /><path d="M10.3 3h3.4L21 10.3v3.4L13.7 21h-3.4L3 13.7v-3.4L10.3 3Z" /></Icon>
            </button>
            <div className="flex items-center gap-7 text-[#111111]">
              <span>نشرت بتاريخ: 14/10/2025</span>
              <span className="font-extrabold">1,619 المشاهدات</span>
              <Icon className="h-5 w-5"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></Icon>
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_590px]">
            <section className="text-right">
              <div className="mb-14 flex items-center justify-between">
                <div className="rounded-full bg-[#dffbe8] px-8 py-4 text-[24px] font-bold text-[#2bc956]">متاحة ✓</div>
                <div className="text-left">
                  <span className="align-baseline text-[31px] text-[#8d8d8d]">شهريا</span>
                  <span className="mx-3 text-[50px] font-extrabold text-[#075bbf]">6,000 ريال /</span>
                </div>
              </div>

              <SectionTitle className="mb-8">وصف السيارة</SectionTitle>
              <p className="mb-16 text-[24px] leading-[2] text-[#969696]">
                تمتاز تويوتا كورولا 2022 بأنها واحدة من أكثر السيارات طلباً في فئة السيارات الاقتصادية، فهي
                تجمع بين الراحة، الأمان، وقلة استهلاك الوقود، مما يجعلها مثالية للرحلات العائلية أو التنقل
                اليومي داخل المدينة.
                <button className="mr-3 font-bold text-[#075bbf] underline" type="button">اقرأ المزيد</button>
              </p>

              <SectionTitle className="mb-10">المواصفات الأساسية</SectionTitle>
              <div className="mb-18 grid gap-x-16 gap-y-9 md:grid-cols-2">
                {basicSpecs.map(([label, value, icon]) => <SpecItem key={label} label={label} value={value} icon={icon} />)}
              </div>

              <SectionTitle className="mb-10 mt-20">المواصفات التقنية</SectionTitle>
              <div className="mb-28 grid gap-x-16 gap-y-9 md:grid-cols-2">
                {technicalSpecs.map(([label, value, icon]) => <SpecItem key={label} label={label} value={value} icon={icon} />)}
              </div>
            </section>

            <BookingBox bookingPlan={bookingPlan} setBookingPlan={setBookingPlan} onBookNow={handleBookNow} />
          </div>

          <section className="mt-14 text-right">
            <SectionTitle className="mb-14">مميزات السيارة</SectionTitle>
            <div className="grid gap-x-24 gap-y-7 md:grid-cols-2">
              <FeatureItem>استهلاك وقود منخفض يوفر عليك تكلفة يومية.</FeatureItem>
              <FeatureItem>تصميم داخلي مريح ومكيف هواء عالي الكفاءة.</FeatureItem>
              <FeatureItem>نظام أمان متكامل مع وسائد هوائية وفرامل ABS.</FeatureItem>
              <FeatureItem>مساحة واسعة للركاب والشنطة الخلفية.</FeatureItem>
              <FeatureItem>قيادة سلسة وممتعة داخل المدينة وعلى الطرق السريعة.</FeatureItem>
            </div>
          </section>

          <section className="mt-24">
            <SectionTitle className="mb-9">آراء العملاء</SectionTitle>
            <div className="mb-8 flex gap-8 text-[#075bbf]" dir="ltr">
              <button className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#075bbf] text-[34px]" type="button">›</button>
              <button className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#dddddd] text-[34px] text-[#d0d0d0]" type="button">‹</button>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <ReviewCard name="مشاري العتيبي" date="الاثنين، 27 أكتوبر" avatar="/image/32.jpg" comment="السيارة حالتها ممتازة وموفرة للوقود، أنصح فيها" />
              <ReviewCard name="عبدالعزيز الشهري" date="الأحد، 12 أكتوبر" avatar="/image/31.png" comment="تجربة ممتازة خصوصاً سرعة التسليم." />
            </div>
          </section>

          <section className="mt-24">
            <SectionTitle className="mb-10">السيارات المشابهة</SectionTitle>
            <div className="grid gap-8 lg:grid-cols-3">
              {similarCars.map((item, index) => (
                <SimilarCarCard
                  key={item.id}
                  car={item}
                  image={['/image/14.png', '/image/13.png', '/image/12.png'][index]}
                  status={index === 1 ? 'booked' : index === 0 ? 'family' : 'available'}
                />
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
