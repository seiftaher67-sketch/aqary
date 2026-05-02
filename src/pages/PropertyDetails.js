import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getPropertyDetails } from '../propertyDetailsData';

function Icon({ children, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      {children}
    </svg>
  );
}

function StarRating({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 text-[#ffc400] ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-[34px] leading-none">★</span>
      ))}
    </div>
  );
}

function SectionTitle({ children, className = '' }) {
  return <h2 className={`text-[28px] font-extrabold text-[#111111] ${className}`}>{children}</h2>;
}

function GalleryImage({ src, className = '', overlay }) {
  return (
    <div className={`relative overflow-hidden rounded-[16px] bg-[#edf2f7] ${className}`}>
      <img src={src} alt="" className="h-full w-full object-cover" />
      {overlay}
    </div>
  );
}

function AmenityItem({ label, icon }) {
  return (
    <div className="flex min-h-[42px] items-center justify-end gap-3 text-[21px] font-medium text-[#222222]">
      <span>{label}</span>
      <span className="text-[#075bbf]">{icon}</span>
    </div>
  );
}

function SpecItem({ label, value, icon }) {
  return (
    <div className="flex items-center justify-end gap-3 text-[21px]">
      <span className="font-semibold text-[#222222]">{value}</span>
      <span className="text-[#8b8b8b]">: {label}</span>
      <span className="text-[#075bbf]">{icon}</span>
    </div>
  );
}

function FeatureItem({ children }) {
  return (
    <div className="flex items-center justify-end gap-4 text-[23px] text-[#222222]">
      <span>{children}</span>
      <span className="text-[28px] font-bold text-[#2bbf5b]">✓</span>
    </div>
  );
}

function BookingBox({ onConfirm }) {
  return (
    <aside className="rounded-[18px] border border-[#dddddd] bg-white shadow-[0_5px_0_rgba(0,0,0,0.18)]">
      <div className="p-7">
        <div className="mb-8 grid grid-cols-3 rounded-full border border-[#e7e7e7] bg-[#fbfbfb] p-2 text-center text-[21px]">
          <button className="rounded-full bg-[#075bbf] py-4 font-bold text-white" type="button">يومي</button>
          <button className="py-4 text-[#111111]" type="button">شهري</button>
          <button className="py-4 text-[#111111]" type="button">سنوي</button>
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
          {['تاريخ الوصول', 'تاريخ المغادرة'].map((label) => (
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

      <div className="border-t border-[#e5e5e5] p-7">
        <button
          type="button"
          onClick={onConfirm}
          className="mb-6 flex h-[58px] w-full items-center justify-center rounded-[8px] bg-[#075bbf] text-[21px] font-bold text-white"
        >
          احجز
        </button>
        <p className="mb-6 text-center text-[22px] font-bold text-[#111111]">ستدفع الآن 798.09 ريال</p>
        <div className="space-y-4 text-[20px]">
          <div className="flex items-center justify-between">
            <span>719 ريال</span>
            <span className="text-[#8d8d8d]">ليلتين × 359.50 ريال</span>
          </div>
          <div className="flex items-center justify-between">
            <span>+79.09 ريال</span>
            <span className="text-[#8d8d8d]">رسوم الخدمات</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#e5e5e5] px-7 py-6 text-[24px] font-bold">
        <span>798.09 ريال</span>
        <span className="text-[#8d8d8d]">الإجمالي</span>
      </div>
    </aside>
  );
}

function ReviewCard({ guest, align = 'right' }) {
  return (
    <article className="rounded-[22px] border border-[#e7e7e7] bg-[#fbfcfe] p-8">
      <div className={`mb-7 flex items-center justify-between gap-5 ${align === 'left' ? 'flex-row-reverse' : ''}`}>
        <div className="flex items-center gap-5">
          <img src={guest.avatar} alt={guest.name} className="h-[96px] w-[96px] rounded-full object-cover" />
          <div className="text-right">
            <h3 className="text-[27px] font-bold text-[#111111]">{guest.name}</h3>
            <p className="mt-2 text-[18px] text-[#111111]">{guest.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StarRating className="[&>span]:text-[31px]" />
          <span className="text-[24px] font-medium text-[#111111]">{guest.score}</span>
        </div>
      </div>
      <p className="text-right text-[22px] leading-[2] text-[#8c8c8c]">{guest.comment}</p>
    </article>
  );
}

function SimilarCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-[#dddddd] bg-white shadow-[0_5px_0_rgba(0,0,0,0.14)]">
      <div className="relative h-[260px] overflow-hidden rounded-b-[18px]">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        <span className="absolute right-5 top-5 rounded-full bg-[#d9ffe9] px-8 py-3 text-[16px] font-bold text-[#22c55e]">متاحة الآن</span>
        <button className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/45 text-white" type="button">
          <Icon><path d="m21.4 6.6-.7-.7a5.37 5.37 0 0 0-7.6 0L12 7l-1.1-1.1a5.37 5.37 0 0 0-7.6 7.6L12 22l8.7-8.5a5.37 5.37 0 0 0 .7-6.9Z" /></Icon>
        </button>
      </div>
      <div className="space-y-4 p-6 text-right">
        <div className="flex items-center justify-between">
          <span className="text-[18px] text-[#929292]">غرفة فندقية</span>
          <div className="flex items-center gap-2">
            <StarRating className="[&>span]:text-[25px]" />
            <span className="text-[18px]">5.0</span>
          </div>
        </div>
        <h3 className="text-[24px] font-extrabold">غرفة فندقيه</h3>
        <p className="flex items-center justify-end gap-2 text-[18px] text-[#8f8f8f]">
          رويال بلازا - التجمع الخامس، القاهرة الجديدة
          <Icon className="h-6 w-6"><path d="M12 21s6-5.7 6-11A6 6 0 1 0 6 10c0 5.3 6 11 6 11Z" /><path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></Icon>
        </p>
        <p className="text-left text-[31px] font-medium text-[#075bbf]">2,520 ريال <span className="text-[19px] text-[#8f8f8f]">/ شهريا</span></p>
        <div className="flex items-center justify-between gap-2 text-[15px] text-[#4b5563]">
          <span>92.86 المساحة</span>
          <span className="h-6 w-px bg-[#aaaaaa]" />
          <span>2 الحمامات</span>
          <span className="h-6 w-px bg-[#aaaaaa]" />
          <span>2 السرير</span>
        </div>
        <a href={`#property/${item.id}`} className="flex h-[58px] items-center justify-between rounded-[8px] bg-[#075bbf] px-7 text-[21px] font-bold text-white">
          <span>←</span>
          <span>أعرف لتفاصيل</span>
        </a>
      </div>
    </article>
  );
}

function PropertyDetails({ propertyId }) {
  const property = getPropertyDetails(propertyId);
  const gallery = ['/image/2.jpg', '/image/1.jpg', '/image/3.jpg', '/image/23.png', '/image/24.png', '/image/27.jpg'];
  const handleConfirmBooking = () => {
    window.location.hash = `#payment/${property.id}`;
  };

  const basicSpecs = [
    ['المساحة', '350 متر مربع', <Icon><path d="M4 8h16v8H4z" /><path d="M7 8v3M10 8v2M13 8v3M16 8v2" /></Icon>],
    ['الدور', 'الخامس', <Icon><path d="M5 21V4h14v17" /><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" /></Icon>],
    ['المفروشات', 'مفروشة بالكامل', <Icon><path d="M4 11h16v6H4z" /><path d="M6 11V8h12v3M7 17v3M17 17v3" /></Icon>],
    ['رقم المرجع', 'V-1452', <Icon><path d="M20 10 12 21 4 10l8-7 8 7Z" /></Icon>],
    ['السرير', '2', <Icon><path d="M4 18v-7h16v7M4 15h16M7 11V8h5v3" /></Icon>],
    ['الحمامات', '2', <Icon><path d="M4 12h16v1a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-1Z" /><path d="M8 12V7a3 3 0 0 1 3-3h1" /></Icon>],
  ];

  const amenities = ['تكييف مركزي', 'وقوف سيارات', 'نظام أمان وكاميرات مراقبة', 'مصعد كهربائي', 'هاتف', 'واي فاي'];
  const kitchen = ['ثلاجة صغيرة', 'أدوات تقديم بسيطة', 'الة قهوة', 'أدوات تقديم بسيطة', 'غلاية', 'مايكرويف'];
  const bathrooms = ['دش حديث', 'مرحاض', 'سخان مياه', 'مناشف وأدوات استحمام مجانية', 'مرآة مكبرة', 'مروحة شفط', 'بانيو', 'مغسلة', 'خزائن تخزين', 'أرضيات سيراميك', 'مجفف شعر'];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar currentPage="bookings" />
      <main className="pb-28 pt-7">
        <div className="mx-auto max-w-[1600px] px-8">
          <div className="mb-20 flex items-center justify-between">
            <nav className="flex items-center gap-5 text-[19px] text-[#075bbf]">
              <span>الرئيسية</span><span className="text-[#111111]">‹</span>
              <span>البحث</span><span className="text-[#111111]">‹</span>
              <span>نتائج البحث</span><span className="text-[#111111]">‹</span>
              <span className="text-[#111111]">غرف فندقية</span>
            </nav>
            <div className="flex items-center gap-16 text-[#075bbf]">
              <Icon className="h-9 w-9"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /></Icon>
              <Icon className="h-8 w-8"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" /><path d="M16 6 12 2 8 6M12 2v14" /></Icon>
            </div>
          </div>

          <header className="mb-10 text-right">
            <div className="mb-12 flex items-center gap-5">
              <StarRating />
              <span className="text-[26px] font-medium text-[#111111]">5.0</span>
              <span className="text-[18px] font-bold text-[#8c8c8c]">(50 تقييم)</span>
            </div>
            <h1 className="mb-12 text-[48px] font-extrabold leading-tight text-[#080808]">غرفة فندقية</h1>
            <p className="flex items-center justify-start gap-4 text-[28px] font-medium text-[#075bbf]">
              <Icon className="h-9 w-9"><path d="M12 21s6-5.7 6-11A6 6 0 1 0 6 10c0 5.3 6 11 6 11Z" /><path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /></Icon>
              فندق رويال بلازا - التجمع الخامس، القاهرة الجديدة
            </p>
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
                    <button className="flex h-[62px] items-center gap-4 rounded-[14px] bg-black/55 px-8 text-[22px] font-bold text-white" type="button">
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
              {gallery.slice(2, 6).map((image, index) => (
                <GalleryImage
                  key={image + index}
                  src={image}
                  className="h-[200px]"
                  overlay={index === 0 ? <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-[30px] font-extrabold text-white">+ 10 صور</div> : null}
                />
              ))}
            </div>
          </section>

          <div className="mb-14 flex items-center justify-between text-[19px]">
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

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_540px]">
            <section className="text-right">
              <div className="mb-12 flex items-center justify-between">
                <div className="rounded-full bg-[#dffbe8] px-8 py-4 text-[22px] font-bold text-[#2bc956]">متاحة ✓</div>
                <div className="text-left">
                  <span className="align-baseline text-[29px] text-[#075bbf]">شهريا</span>
                  <span className="mx-3 text-[46px] font-extrabold text-[#075bbf]">2,520 ريال</span>
                </div>
              </div>

              <SectionTitle className="mb-7">وصف العقار</SectionTitle>
              <p className="mb-16 text-[23px] leading-[2] text-[#969696]">
                غرفة فندقية أنيقة ومفروشة بالكامل بتصميم عصري وإطلالة على المدينة، تتميز ببيئة هادئة
                ومريحة مثالية للإقامات القصيرة أو رحلات العمل في القاهرة الجديدة.
                <button className="mr-3 font-bold text-[#075bbf] underline" type="button">اقرأ المزيد</button>
              </p>

              <SectionTitle className="mb-9">المواصفات الأساسية</SectionTitle>
              <div className="mb-16 grid gap-x-12 gap-y-8 md:grid-cols-3">
                {basicSpecs.map(([label, value, icon]) => <SpecItem key={label} label={label} value={value} icon={icon} />)}
              </div>

              <SectionTitle className="mb-10">مرافق العقار</SectionTitle>
              <div className="mb-24 grid gap-x-12 gap-y-8 md:grid-cols-3">
                {amenities.map((item) => (
                  <AmenityItem key={item} label={item} icon={<Icon><path d="M4 17h16M6 17v-5a6 6 0 0 1 12 0v5M8 21h8" /></Icon>} />
                ))}
              </div>

              <SectionTitle className="mb-12">مرافق المطبخ</SectionTitle>
              <div className="mb-20 grid gap-x-14 gap-y-8 md:grid-cols-3">
                {kitchen.map((item) => <AmenityItem key={item} label={item} icon={<Icon><path d="M6 3v18M10 3v7a4 4 0 0 1-4 4M15 3h4v18h-4z" /></Icon>} />)}
              </div>

              <SectionTitle className="mb-12">مرافق دورات المياه</SectionTitle>
              <div className="mb-20 grid gap-x-12 gap-y-8 md:grid-cols-4">
                {bathrooms.map((item) => <AmenityItem key={item} label={item} icon={<Icon><path d="M4 12h16v1a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-1Z" /><path d="M8 12V7a3 3 0 0 1 3-3h1" /></Icon>} />)}
              </div>

              <SectionTitle className="mb-12">مميزات العقار</SectionTitle>
              <div className="mb-20 grid gap-x-20 gap-y-8 md:grid-cols-2">
                <FeatureItem>إطلالة مميزة على المدينة</FeatureItem>
                <FeatureItem>تصميم عصري أثاث راقي</FeatureItem>
                <FeatureItem>قريب من المولات والمطاعم والخدمات</FeatureItem>
                <FeatureItem>خدمة غرف على مدار الساعة</FeatureItem>
                <FeatureItem>نظافة يومية</FeatureItem>
                <FeatureItem>بيئة هادئة ومناسبة لرحلات العمل والإقامات القصيرة</FeatureItem>
              </div>
            </section>

            <BookingBox onConfirm={handleConfirmBooking} />
          </div>

          <section className="mt-8">
            <SectionTitle className="mb-9">تقييمات الضيوف</SectionTitle>
            <div className="mb-8 flex gap-8 text-[#075bbf]" dir="ltr">
              <button className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#075bbf] text-[34px]" type="button">›</button>
              <button className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-[#dddddd] text-[34px] text-[#d0d0d0]" type="button">‹</button>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <ReviewCard guest={{ name: 'مشاري العتيبي', date: 'الاثنين، 27 أكتوبر', score: '4.9', avatar: '/image/32.jpg', comment: 'تجربة رائعة جدا اللي يبي مكان مريح ونظيف ومرتب ومنسق بالتفاصيل الصغيرة حتى يحب، والاخ المضيف جدا كان تعاونه ممتاز الله يباركله في حلاله شكرا' }} />
              <ReviewCard guest={{ name: 'عبدالعزيز الشهري', date: 'الأحد، 12 أكتوبر', score: '4.9', avatar: '/image/31.png', comment: 'روعة روعة هو اول مرا اجيها من كثر من ان الشقة نظيفه و مريحه حسيت انها بيتي الثاني وشكرا ع تعامل المضيف في قمة الاخلاق' }} align="left" />
            </div>
          </section>

          <section className="mt-20">
            <SectionTitle className="mb-9">الموقع والخريطة</SectionTitle>
            <div className="relative h-[480px] overflow-hidden rounded-[8px] bg-[#dfeaf2]">
              <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(30deg,rgba(74,144,196,.22)_1px,transparent_1px),linear-gradient(120deg,rgba(74,144,196,.2)_1px,transparent_1px),linear-gradient(rgba(80,170,120,.24)_18px,transparent_18px)] [background-size:95px_95px,120px_120px,260px_260px]" />
              <div className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-[#8aa9bd]/55" />
              <div className="absolute left-10 top-10 grid overflow-hidden rounded bg-white shadow">
                <button className="h-12 w-12 text-[30px]" type="button">+</button>
                <button className="h-12 w-12 border-t text-[30px]" type="button">−</button>
              </div>
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#075bbf] text-white shadow-xl">
                <Icon className="h-9 w-9"><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></Icon>
              </div>
              <div className="absolute left-[46%] top-[38%] rounded bg-white px-4 py-3 text-center text-[13px] shadow">
                <p className="font-bold">غرفة فندقية</p>
                <p className="text-[#777777]">فندق رويال بلازا - التجمع الخامس</p>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <SectionTitle className="mb-10">العقارات المشابهة</SectionTitle>
            <div className="grid gap-8 lg:grid-cols-3">
              {property.similarProperties.map((item, index) => (
                <SimilarCard key={item.id} item={{ ...item, image: ['/image/1.jpg', '/image/2.jpg', '/image/3.jpg'][index] }} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PropertyDetails;
