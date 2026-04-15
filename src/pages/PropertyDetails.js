import CarCard from '../components/CarCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getPropertyDetails } from '../propertyDetailsData';

function InfoCard({ title, children, className = '' }) {
  return (
    <section
      className={`rounded-[18px] border border-[#e3ebf7] bg-white p-5 shadow-[0_10px_26px_rgba(20,49,95,0.06)] ${className}`}
    >
      <h2 className="mb-4 text-[15px] font-extrabold text-[#223152]">{title}</h2>
      {children}
    </section>
  );
}

function RatingStars({ count }) {
  return (
    <div className="flex items-center gap-1 text-[13px] text-[#ffbf1a]">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}

function PropertyDetails({ propertyId }) {
  const property = getPropertyDetails(propertyId);
  const mainImage = property.gallery[0];
  const sideImages = property.gallery.slice(1, 3);
  const bottomImages = property.gallery.slice(3, 7);
  const handleConfirmBooking = () => {
    window.location.hash = `#payment/${property.id}`;
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      <Navbar currentPage="bookings" />
      <main className="pb-14 pt-7">
        <div className="mx-auto max-w-[1380px] px-5 lg:px-8">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[#8d9bb3]">
            {property.breadcrumbs.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className={index === property.breadcrumbs.length - 1 ? 'font-bold text-[#155fcb]' : ''}>
                  {item}
                </span>
                {index !== property.breadcrumbs.length - 1 ? <span>/</span> : null}
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-center justify-between gap-4">
            

            <div className="text-right">
              <div className="mb-1 flex items-center justify-start gap-3">
                 <RatingStars count={property.rating} />
                <span className="text-sm font-semibold text-[#7f8ea8]">({property.reviewCount}) تقييم</span>
               
              </div>
              <h1 className="text-[28px] font-extrabold text-[#223152]">{property.title}</h1>
              <div className="mt-2 flex items-center justify-start gap-2 text-sm text-[#6b7d99]">
                <span>{property.location}</span>
                <span className="text-[#155fcb]">⌖</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dde6f3] bg-white text-[#7f8ea8]"
              >
                ♥
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dde6f3] bg-white text-[#7f8ea8]"
              >
                ↗
              </button>
            </div>
          </div>

          <section className="mb-5 rounded-[18px] border border-[#e3ebf7] bg-white p-3 shadow-[0_10px_26px_rgba(20,49,95,0.06)]">
            <div className="grid gap-3 lg:grid-cols-[0.28fr_1fr]">
              <div className="grid gap-3">
                {sideImages.map((image, index) => (
                  <img
                    key={image + index}
                    src={image}
                    alt={property.title}
                    className="h-[156px] w-full rounded-[14px] object-cover"
                  />
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[16px]">
                <img src={mainImage} alt={property.title} className="h-[325px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#1e2a45]/80 to-transparent px-5 pb-4 pt-10 text-white">
                  <button
                    type="button"
                    className="rounded-full border border-white/50 px-4 py-2 text-xs font-bold"
                  >
                    {property.videoLabel}
                  </button>
                  <div className="text-right">
                    <p className="text-xs text-white/80">{property.type}</p>
                    <p className="text-lg font-extrabold">{property.title}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-4">
              {bottomImages.map((image, index) => (
                <div key={image + index} className="relative">
                  <img
                    src={image}
                    alt={property.title}
                    className="h-[105px] w-full rounded-[14px] object-cover"
                  />
                  {index === bottomImages.length - 1 ? (
                    <div className="absolute inset-0 flex items-center justify-center rounded-[14px] bg-[#223152]/55 text-lg font-extrabold text-white">
                      +2
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4 text-sm text-[#7a8dad]">
            <button type="button" className="font-semibold text-[#ef4444]">
              الإبلاغ عن الوحدة
            </button>
            <div className="flex items-center gap-5">
              <span>تاريخ النشر: {property.publishedAt}</span>
              <span>عدد المشاهدات: {property.views}</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="space-y-5">
              <InfoCard title="تفاصيل الحجز">
                <div className="space-y-4">
                  <div className="grid gap-3 rounded-[14px] border border-[#edf2f9] p-3 text-sm text-[#6c7c98]">
                    <div className="flex items-center justify-between">
                      <span>{property.bookingSummary.nights}</span>
                      <span className="font-semibold text-[#223152]">عدد الليالي</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{property.bookingSummary.guests}</span>
                      <span className="font-semibold text-[#223152]">عدد الضيوف</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{property.bookingSummary.checkIn}</span>
                      <span className="font-semibold text-[#223152]">تسجيل الدخول</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{property.bookingSummary.checkOut}</span>
                      <span className="font-semibold text-[#223152]">تسجيل الخروج</span>
                    </div>
                  </div>

                  <div className="rounded-[14px] border border-[#edf2f9] p-3 text-sm text-[#6c7c98]">
                    <div className="mb-3 flex items-center justify-between">
                      <span>{property.bookingSummary.cleaningFee}</span>
                      <span>رسوم التنظيف</span>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <span>{property.bookingSummary.serviceFee}</span>
                      <span>رسوم الخدمة</span>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                      <span>{property.bookingSummary.tax}</span>
                      <span>الضرائب</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#edf2f9] pt-3 text-base font-extrabold text-[#223152]">
                      <span>{property.bookingSummary.total}</span>
                      <span>الإجمالي</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    className="flex h-11 w-full items-center justify-center rounded-[10px] bg-[#155fcb] text-sm font-bold text-white"
                  >
                    تأكيد الحجز
                  </button>
                </div>
              </InfoCard>
            </aside>

            <section className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-[1.05fr_1.35fr]">
                <InfoCard title="السعر والحالة">
                  <div className="flex items-end justify-between">
                    <div className="text-left">
                      <p className="text-sm text-[#7f8ea8]">لكل ليلة</p>
                      <p className="text-[31px] font-extrabold leading-none text-[#155fcb]">
                        {property.price}
                        <span className="mr-1 text-base">{property.currency}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="mb-2 text-sm font-semibold text-[#6b7d99]">الحالة</p>
                      <span className="rounded-full bg-[#daf6df] px-4 py-1 text-xs font-bold text-[#3f9b60]">
                        {property.status}
                      </span>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard title="وصف العقار">
                  <p className="text-sm leading-8 text-[#6b7d99]">{property.description}</p>
                </InfoCard>
              </div>

              <InfoCard title="المواصفات الأساسية">
                <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
                  {property.basicSpecs.map(([label, value]) => (
                    <div key={label} className="border-b border-dashed border-[#edf2f9] pb-3">
                      <p className="text-xs text-[#8b9ab2]">{label}</p>
                      <p className="mt-1 text-sm font-bold text-[#223152]">{value}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="مرافق العقار">
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {property.propertyAmenities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-[12px] border border-[#edf2f9] px-4 py-3 text-sm text-[#60708e]"
                    >
                      <span>{item}</span>
                      <span className="text-[#155fcb]">✓</span>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </section>
          </div>

          <div className="mt-5 space-y-5">
            <InfoCard title="تفاصيل مرافق المطبخ ومرافق دورات المياه">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-[14px] bg-[#f9fbff] p-4">
                  <h3 className="mb-3 text-sm font-extrabold text-[#223152]">مرافق المطبخ</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {property.kitchenAmenities.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#60708e]">
                        <span className="text-[#155fcb]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[14px] bg-[#f9fbff] p-4">
                  <h3 className="mb-3 text-sm font-extrabold text-[#223152]">مرافق دورات المياه</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {property.bathroomAmenities.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[#60708e]">
                        <span className="text-[#155fcb]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="مميزات العقار">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {property.features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[12px] border border-[#edf2f9] px-4 py-3 text-sm text-[#60708e]"
                  >
                    <span>{item}</span>
                    <span className="text-[#155fcb]">★</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard title="تقييمات الضيوف">
              <div className="grid gap-4 lg:grid-cols-2">
                {property.guestRatings.map((guest) => (
                  <div key={guest.id} className="rounded-[14px] border border-[#edf2f9] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-left">
                        <div className="text-sm font-bold text-[#223152]">{guest.score}</div>
                        <RatingStars count={5} />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm font-bold text-[#223152]">{guest.name}</p>
                          <p className="text-xs text-[#8b9ab2]">{guest.date}</p>
                        </div>
                        <img src={guest.avatar} alt={guest.name} className="h-11 w-11 rounded-full object-cover" />
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-[#60708e]">{guest.comment}</p>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard title="الموقع والخريطة">
              <div className="relative h-[320px] overflow-hidden rounded-[16px] border border-[#edf2f9] bg-[#eef4fb]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(190,206,231,0.35)_1px,transparent_1px),linear-gradient(rgba(190,206,231,0.35)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <div className="absolute left-8 top-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7a8dad] shadow">
                  طريق الملك
                </div>
                <div className="absolute right-10 top-16 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7a8dad] shadow">
                  حي الياسمين
                </div>
                <div className="absolute bottom-10 left-1/3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7a8dad] shadow">
                  شارع العليا
                </div>
                <div className="absolute bottom-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[#155fcb] text-lg text-white shadow-[0_10px_20px_rgba(21,95,203,0.35)]">
                  ⌖
                </div>
              </div>
            </InfoCard>

            <InfoCard title="عقارات مشابهة">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {property.similarProperties.map((item) => (
                  <CarCard key={item.id} car={item} variant="booking" />
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PropertyDetails;
