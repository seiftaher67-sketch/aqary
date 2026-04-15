import CarCard from '../components/CarCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const bookingCards = [
  {
    id: 101,
    image: '/image/1.jpg',
    tag: 'شقق فندقية',
    status: 'مميز',
    title: 'شقة فندقية',
    location: 'حي الياسمين',
    rating: 5,
    score: '5.0',
    area: '92.86 م²',
    beds: 5,
    baths: 4,
    guests: 10,
    price: '22,000',
    priceSuffix: '/ ريال',
    period: '/ يومياً',
    buttonLabel: 'اطلب الاستفسار',
  },
  {
    id: 102,
    image: '/image/2.jpg',
    tag: 'شقق فندقية',
    status: 'مميز',
    title: 'شقة فندقية',
    location: 'حي الياسمين',
    rating: 5,
    score: '5.0',
    area: '92.86 م²',
    beds: 5,
    baths: 4,
    guests: 10,
    price: '22,000',
    priceSuffix: '/ ريال',
    period: '/ يومياً',
    buttonLabel: 'اطلب الاستفسار',
  },
  {
    id: 103,
    image: '/image/3.jpg',
    tag: 'شقق فندقية',
    status: 'مميز',
    title: 'شقة فندقية',
    location: 'حي الياسمين',
    rating: 5,
    score: '5.0',
    area: '92.86 م²',
    beds: 5,
    baths: 4,
    guests: 10,
    price: '22,000',
    priceSuffix: '/ ريال',
    period: '/ يومياً',
    buttonLabel: 'اطلب الاستفسار',
  },
  {
    id: 104,
    image: '/image/1.jpg',
    tag: 'شقق فندقية',
    status: 'مميز',
    title: 'شقة فندقية',
    location: 'حي الياسمين',
    rating: 5,
    score: '5.0',
    area: '92.86 م²',
    beds: 5,
    baths: 4,
    guests: 10,
    price: '22,000',
    priceSuffix: '/ ريال',
    period: '/ يومياً',
    buttonLabel: 'اطلب الاستفسار',
  },
  {
    id: 105,
    image: '/image/2.jpg',
    tag: 'شقق فندقية',
    status: 'مميز',
    title: 'شقة فندقية',
    location: 'حي الياسمين',
    rating: 5,
    score: '5.0',
    area: '92.86 م²',
    beds: 5,
    baths: 4,
    guests: 10,
    price: '22,000',
    priceSuffix: '/ ريال',
    period: '/ يومياً',
    buttonLabel: 'اطلب الاستفسار',
  },
  {
    id: 106,
    image: '/image/3.jpg',
    tag: 'شقق فندقية',
    status: 'مميز',
    title: 'شقة فندقية',
    location: 'حي الياسمين',
    rating: 5,
    score: '5.0',
    area: '92.86 م²',
    beds: 5,
    baths: 4,
    guests: 10,
    price: '22,000',
    priceSuffix: '/ ريال',
    period: '/ يومياً',
    buttonLabel: 'اطلب الاستفسار',
  },
];

const ratingOptions = [
  { value: '4.5 - 5.0', stars: 5 },
  { value: '4.0 - 4.5', stars: 4 },
  { value: '3.5 - 4.0', stars: 3 },
  { value: '3.0 - 3.5', stars: 2 },
];

const propertyTypes = ['شقة', 'فيلا', 'مكتب', 'شاليه', 'دوبلكس', 'جناح'];
const roomOptions = ['5', '4', '3', '2', '1'];
const bathOptions = ['5', '4', '3', '2', '1'];
const amenities = ['حديقة', 'نادي رياضي', 'جاكوزي', 'مواقف سيارات', 'حضانة أطفال'];

function SectionCard({ title, children, defaultOpen = true }) {
  return (
    <div className="border-b border-[#edf2f9] px-4 py-4 last:border-b-0">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[#233255]">
        <span>{title}</span>
        <span className="text-[#7a8dad]">{defaultOpen ? '▾' : '▸'}</span>
      </div>
      {children}
    </div>
  );
}

function CheckRow({ label }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 text-sm text-[#5f6f8f]">
      <span>{label}</span>
      <input type="checkbox" className="h-4 w-4 rounded border-[#d5dfef] text-[#155fcb]" />
    </label>
  );
}

function NumberChip({ label, active = false }) {
  return (
    <button
      type="button"
      className={`flex h-8 min-w-8 items-center justify-center rounded-md border text-sm font-semibold ${
        active
          ? 'border-[#155fcb] bg-[#eff5ff] text-[#155fcb]'
          : 'border-[#d8e1ef] bg-white text-[#7a8dad]'
      }`}
    >
      {label}
    </button>
  );
}

function Bookings() {
  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      <Navbar currentPage="bookings" />
      <main className="pb-14 pt-8">
        <div className="mx-auto max-w-[1380px] px-5 lg:px-8">
          <div className="mb-5 grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="flex h-11 items-center justify-between rounded-[12px] border border-[#e5ebf5] bg-white px-4 text-sm text-[#7a8dad] shadow-[0_8px_22px_rgba(18,55,118,0.05)]">
              <span>ابحث هنا</span>
              <span className="text-[#155fcb]">⌕</span>
            </div>
            <div className="flex h-11 items-center rounded-[12px] border border-[#e5ebf5] bg-white px-4 text-sm text-[#b2bfd5] shadow-[0_8px_22px_rgba(18,55,118,0.05)]">
              اختر المدينة أو الحي أو العنوان...
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="overflow-hidden rounded-[16px] border border-[#e2eaf5] bg-white shadow-[0_10px_30px_rgba(18,55,118,0.06)]">
              <div className="flex items-center justify-between border-b border-[#edf2f9] px-4 py-4">
                <button type="button" className="text-sm font-semibold text-[#155fcb]">
                  (1) إعادة تعيين
                </button>
                <h2 className="text-sm font-extrabold text-[#223152]">تصفية حسب</h2>
              </div>

              <SectionCard title="ميزانية الإيجار">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#7d8ca8]">
                    <span>100 ريال</span>
                    <span>3,500 ريال</span>
                  </div>
                  <div className="relative h-6">
                    <div className="absolute left-0 right-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#d8e1ef]" />
                    <div className="absolute left-[14%] right-[20%] top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-[#155fcb]" />
                    <span className="absolute left-[14%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-[#155fcb] bg-white" />
                    <span className="absolute right-[20%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-[#155fcb] bg-white" />
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="التقييمات">
                <div className="space-y-3">
                  {ratingOptions.map((item) => (
                    <label
                      key={item.value}
                      className="flex cursor-pointer items-center justify-between gap-3 text-sm text-[#5f6f8f]"
                    >
                      <div className="flex items-center gap-2 text-[#ffbf1a]">
                        <span className="text-[#5f6f8f]">{item.value}</span>
                        {Array.from({ length: item.stars }).map((_, index) => (
                          <span key={index}>★</span>
                        ))}
                      </div>
                      <input type="checkbox" className="h-4 w-4 rounded border-[#d5dfef] text-[#155fcb]" />
                    </label>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="نوع العقار">
                <div className="space-y-3">
                  {propertyTypes.map((type) => (
                    <CheckRow key={type} label={type} />
                  ))}
                  <button type="button" className="text-sm font-semibold text-[#155fcb]">
                    إظهار الكل 9
                  </button>
                </div>
              </SectionCard>

              <SectionCard title="عدد الغرف">
                <div className="flex flex-wrap gap-2">
                  {roomOptions.map((option, index) => (
                    <NumberChip key={option} label={option} active={index === 0 || index === 4} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="الحمامات">
                <div className="flex flex-wrap gap-2">
                  {bathOptions.map((option, index) => (
                    <NumberChip key={option} label={option} active={index === 0 || index === 4} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="وسائل الراحة">
                <div className="space-y-3">
                  {amenities.map((item) => (
                    <CheckRow key={item} label={item} />
                  ))}
                  <button type="button" className="text-sm font-semibold text-[#155fcb]">
                    إظهار الكل 14
                  </button>
                </div>
              </SectionCard>
            </aside>

            <section>
              <div className="grid gap-5 md:grid-cols-2">
                {bookingCards.map((card) => (
                  <CarCard key={card.id} car={card} variant="booking" />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-[#8e9db7]">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#d9e2f0] bg-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="flex h-8 min-w-8 items-center justify-center rounded-md border border-[#155fcb] bg-[#155fcb] px-3 text-white"
                >
                  1
                </button>
                <button
                  type="button"
                  className="flex h-8 min-w-8 items-center justify-center rounded-md border border-[#d9e2f0] bg-white px-3"
                >
                  2
                </button>
                <button
                  type="button"
                  className="flex h-8 min-w-8 items-center justify-center rounded-md border border-[#d9e2f0] bg-white px-3"
                >
                  3
                </button>
                <span className="px-1">…</span>
                <button
                  type="button"
                  className="flex h-8 min-w-8 items-center justify-center rounded-md border border-[#d9e2f0] bg-white px-3"
                >
                  71
                </button>
                <button
                  type="button"
                  className="flex h-8 min-w-8 items-center justify-center rounded-md border border-[#d9e2f0] bg-white px-3"
                >
                  72
                </button>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#d9e2f0] bg-white"
                >
                  ›
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Bookings;
