import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getPropertyDetails } from '../propertyDetailsData';

const paymentTabs = [
  { id: 'card', label: 'البطاقة الائتمانية أو مدى' },
  { id: 'apple-pay', label: 'APPLE PAY' },
];

const paymentMethods = [
  { id: 'mastercard', label: 'Mastercard', image: '/image/30.png', imageAlt: 'Mastercard' },
  { id: 'visa', label: 'Visa', image: '/image/28.png', imageAlt: 'Visa' },
  { id: 'mada', label: 'Mada', image: '/image/29.png', imageAlt: 'Mada' },
];

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12.5 4.5-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3.75v2.5M17 3.75v2.5M4.75 9.25h14.5" strokeLinecap="round" />
      <rect x="4" y="5.75" width="16" height="14.25" rx="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.75v4.75l3.25 1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3.75 5.5 6v5.5c0 4.2 2.55 7.6 6.5 8.75 3.95-1.15 6.5-4.55 6.5-8.75V6z" />
      <path d="m9.25 12.25 1.85 1.85 3.65-4.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Breadcrumbs({ items }) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-end gap-2 text-[15px] font-semibold text-[#155fcb]">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span className={index === items.length - 1 ? 'text-[#111111]' : ''}>{item}</span>
          {index !== items.length - 1 ? <ChevronLeftIcon /> : null}
        </div>
      ))}
    </div>
  );
}

function TopTabs({ activeTab, onChange }) {
  return (
    <div className="flex w-full rounded-full border border-[#e3e7ee] bg-white p-2 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
      {paymentTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`flex-1 rounded-full px-5 py-4 text-center text-[16px] font-extrabold transition ${
            activeTab === tab.id ? 'bg-[#0f5cc0] text-white' : 'text-[#161616]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function MethodTabs({ selectedMethod, onChange }) {
  return (
    <div className="mt-9 grid grid-cols-3 border-b border-[#e7ebf2]">
      {paymentMethods.map((method) => {
        const active = selectedMethod === method.id;

        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onChange(method.id)}
            className={`relative flex h-[96px] items-center justify-center bg-white transition ${
              active ? 'after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#0f5cc0]' : ''
            }`}
          >
            <img src={method.image} alt={method.imageAlt} className="max-h-[40px] w-auto object-contain" />
          </button>
        );
      })}
    </div>
  );
}

function FieldLabel({ children }) {
  return <label className="mb-3 block text-right text-[18px] font-extrabold text-[#111111]">{children}</label>;
}

function PaymentField({ children, className = '' }) {
  return (
    <div
      className={`flex h-[78px] items-center rounded-[18px] border border-[#dde3ec] bg-white px-6 ${className}`}
    >
      {children}
    </div>
  );
}

function SummarySectionTitle({ children }) {
  return <h3 className="text-right text-[16px] font-extrabold text-[#111111]">{children}</h3>;
}

function PaymentPage({ propertyId }) {
  const property = getPropertyDetails(propertyId);
  const [activeTab, setActiveTab] = useState('card');
  const [selectedMethod, setSelectedMethod] = useState('mastercard');

  const selectedMethodData = paymentMethods.find((method) => method.id === selectedMethod) || paymentMethods[0];
  const breadcrumbs = ['الرئيسية', 'البحث', 'نتائج البحث', 'شقة', 'المراجعة والدفع'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="bookings" />
      <main className="pb-16 pt-12" dir="ltr">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mx-auto grid w-fit items-start gap-14 xl:grid-cols-[500px_660px]">
            <aside className="order-2 xl:order-1">
              <div className="overflow-hidden rounded-[20px] border border-[#d8dde6] bg-white shadow-[0_6px_0_rgba(0,0,0,0.08),0_16px_28px_rgba(15,23,42,0.08)]">
                <div className="relative border-b border-[#e8edf4] p-0">
                  <img src={property.gallery[0]} alt={property.title} className="h-[280px] w-full object-cover" />
                  <button
                    type="button"
                    className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white"
                  >
                    ›
                  </button>
                  <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
                    {[0, 1, 2, 3, 4].map((dot) => (
                      <span
                        key={dot}
                        className={`h-3 w-3 rounded-full ${dot === 2 ? 'bg-white' : 'bg-white/55'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="border-b border-[#e8edf4] px-6 py-6">
                  <div className="flex items-end justify-between">
                    <div className="text-right">
                      <p className="text-[19px] font-medium text-[#8f8f8f]">ريال / ليلة</p>
                      <p className="mt-3 text-[21px] text-[#696969]">
                        إجمالي ليلة واحدة <span className="font-bold text-[#1d1d1d]">{property.price}</span> ر.س
                      </p>
                    </div>
                    <div className="text-[46px] font-extrabold leading-none text-[#0f5cc0]">
                      {property.basicSpecs[1]?.[1]?.replace(' م²', '') || '320'}
                    </div>
                  </div>
                </div>

                <div className="border-b border-[#e8edf4] px-6 py-6">
                  <div className="mb-4 flex items-center justify-between">
                    <SummarySectionTitle>{property.bookingSummary.nights}</SummarySectionTitle>
                    <p className="text-right text-[16px] text-[#8d8d8d]">بإمكانك تعديل التاريخ</p>
                  </div>

                  <div className="grid grid-cols-2 overflow-hidden rounded-[20px] border-[3px] border-[#a9c8ef]">
                    <div className="border-l border-[#dde4ec] px-5 py-4 text-right">
                      <div className="mb-3 flex items-center justify-end gap-2 text-[15px] text-[#919191]">
                        <CalendarIcon />
                        <span>تاريخ الوصول</span>
                      </div>
                      <p className="text-[17px] font-extrabold text-[#151515]">{property.bookingSummary.checkIn}</p>
                    </div>
                    <div className="px-5 py-4 text-right">
                      <div className="mb-3 flex items-center justify-end gap-2 text-[15px] text-[#919191]">
                        <CalendarIcon />
                        <span>تاريخ المغادرة</span>
                      </div>
                      <p className="text-[17px] font-extrabold text-[#151515]">{property.bookingSummary.checkOut}</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[#e8edf4] px-6 py-5">
                  <div className="grid grid-cols-2">
                    <div className="border-l border-[#dde4ec] px-5 text-right">
                      <div className="mb-2 flex items-center justify-end gap-2 text-[15px] text-[#919191]">
                        <ClockIcon />
                        <span>وقت الوصول</span>
                      </div>
                      <p className="text-[18px] font-bold text-[#171717]">5:00 مساءا</p>
                    </div>
                    <div className="px-5 text-right">
                      <div className="mb-2 flex items-center justify-end gap-2 text-[15px] text-[#919191]">
                        <ClockIcon />
                        <span>وقت المغادرة</span>
                      </div>
                      <p className="text-[18px] font-bold text-[#171717]">12:00 مساءا</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[#e8edf4] px-6 py-6 text-right">
                  <p className="text-[23px] font-extrabold text-[#111111]">ستدفع الآن {property.bookingSummary.total}</p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-[19px]">
                      <span className="text-[#171717]">719 ريال</span>
                      <span className="text-[#8d8d8d]">ليلتين × 359.50 ريال</span>
                    </div>
                    <div className="flex items-center justify-between text-[19px]">
                      <span className="text-[#171717]">+79.09 ريال</span>
                      <span className="text-[#8d8d8d]">رسوم الخدمات</span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-[#e8edf4] px-6 py-6">
                  <div className="flex items-center justify-between text-[21px] font-extrabold">
                    <span>{property.bookingSummary.total}</span>
                    <span className="text-[#8d8d8d]">الإجمالي</span>
                  </div>
                </div>

                <div className="px-6 py-6">
                  <SummarySectionTitle>كود الخصم</SummarySectionTitle>
                  <div className="mt-4 flex gap-4">
                    <button
                      type="button"
                      className="min-w-[128px] rounded-[12px] bg-[#0f5cc0] px-5 py-4 text-[18px] font-extrabold text-white"
                    >
                      تطبيق
                    </button>
                    <input
                      type="text"
                      placeholder="مثال : KSA91"
                      className="h-[60px] flex-1 rounded-[12px] border border-[#d9dfe8] px-5 text-right text-[18px] text-[#151515] outline-none placeholder:text-[#9b9b9b]"
                    />
                  </div>
                </div>
              </div>
            </aside>

            <section className="order-1 xl:order-2 pt-8">
              <div className="text-right">
                <h1 className="text-[54px] font-light leading-none text-[#111111]">الدفع</h1>
              </div>

              <div className="mt-12 max-w-[660px]">
                <TopTabs activeTab={activeTab} onChange={setActiveTab} />

                {activeTab === 'card' ? (
                  <>
                    <MethodTabs selectedMethod={selectedMethod} onChange={setSelectedMethod} />

                    <div className="mt-10">
                      <FieldLabel>رقم البطاقة</FieldLabel>
                      <PaymentField className="justify-between">
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="w-full border-none bg-transparent text-right text-[19px] text-[#111111] outline-none placeholder:text-[#9a9a9a]"
                        />
                        <img
                          src={selectedMethodData.image}
                          alt={selectedMethodData.imageAlt}
                          className="ml-4 max-h-[42px] w-auto object-contain"
                        />
                      </PaymentField>
                    </div>

                    <div className="mt-10 grid gap-7 md:grid-cols-2">
                      <div>
                        <FieldLabel>CVV</FieldLabel>
                        <PaymentField>
                          <input
                            type="text"
                            placeholder="000"
                            className="w-full border-none bg-transparent text-right text-[19px] text-[#111111] outline-none placeholder:text-[#9a9a9a]"
                          />
                        </PaymentField>
                      </div>

                      <div>
                        <FieldLabel>تاريخ الانتهاء</FieldLabel>
                        <PaymentField>
                          <input
                            type="text"
                            placeholder="00 / 00"
                            className="w-full border-none bg-transparent text-right text-[19px] text-[#111111] outline-none placeholder:text-[#9a9a9a]"
                          />
                        </PaymentField>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="mt-9 rounded-[24px] border border-[#dde3ec] bg-white p-8 text-right shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center justify-between">
                      <img src="/image/30.png" alt="Apple Pay" className="h-11 w-auto object-contain" />
                      <div>
                        <h2 className="text-[28px] font-extrabold text-[#111111]">الدفع عبر Apple Pay</h2>
                        <p className="mt-3 text-[17px] leading-7 text-[#777777]">
                          سيتم تحويلك لإتمام العملية بشكل آمن بعد الضغط على زر الدفع.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="mt-11 flex h-[74px] w-full items-center justify-center gap-3 rounded-[12px] bg-[#0f5cc0] text-[23px] font-extrabold text-white"
                >
                  <ShieldCheckIcon />
                  <span>أدفع الآن</span>
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

export default PaymentPage;
