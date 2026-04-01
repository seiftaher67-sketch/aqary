import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const contactDetails = [
  {
    id: 1,
    title: 'الدعم الفني والهاتف',
    value: '+966 500 000 000',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M6.8 3.5h2.6c.5 0 .9.3 1 .8l.9 4c.1.4-.1.9-.5 1.1l-1.7 1.1a14.7 14.7 0 0 0 4.4 4.4l1.1-1.7c.2-.4.7-.6 1.1-.5l4 .9c.5.1.8.5.8 1v2.6c0 .6-.4 1.1-1 1.2-.8.1-1.5.2-2.3.2C10 21 3 14 3 5.8c0-.8.1-1.5.2-2.3.1-.6.6-1 1.2-1Z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'واتساب أو SMS',
    value: '+966 500 000 000',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M7 18.5 4.8 20l.8-2.8A7.5 7.5 0 1 1 19.5 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.8 10.5h6.4M8.8 13.5h4.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'البريد الإلكتروني',
    value: 'support@company.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
        <path d="m6.5 8 5.5 4 5.5-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'العنوان',
    value: 'المملكة العربية السعودية - الرياض - فرعنا / الحي الجديد',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'رقم السجل',
    value: '3108945670003',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z" />
        <path d="M8 8.5h8M8 12h8M8 15.5h5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ContactUs() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar currentPage="contact" />

      <main id="contact-us" className="overflow-hidden bg-white">
        <section className="px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-[1280px]">
            <h1 className="text-center text-[34px] font-extrabold text-[#1464d2]">تواصل معنا</h1>

            <div className="mt-12 rounded-[26px] border border-[#eef2f8] bg-white px-5 py-7 shadow-[0_20px_60px_rgba(17,39,88,0.07)] sm:px-7 lg:px-10 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
                <div className="order-2 lg:order-1">
                  <div className="text-right">
                    <h2 className="text-[34px] font-extrabold text-[#1464d2]">أرسل لنا رسالة</h2>
                    <p className="mt-4 max-w-[720px] text-[15px] leading-[2.05] text-[#8c97aa]">
                      لديك أي سؤال أو استفسار بخصوص الحجز أو ترغب في توضيح المشكلة أو استخدام المنصة؟ فريقنا جاهز
                      للإجابة عليك في أقرب وقت وبأفضل دعم ممكن.
                    </p>
                  </div>

                  <form className="mt-9 text-right">
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-3 block text-[14px] font-extrabold text-[#2c5aa0]">الاسم الأول</span>
                        <input
                          type="text"
                          placeholder="ادخل الاسم الأول"
                          className="h-[52px] w-full rounded-[14px] border border-[#edf1f8] bg-[#fbfcfe] px-4 text-[14px] text-slate-700 outline-none transition focus:border-[#1464d2] focus:bg-white"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-3 block text-[14px] font-extrabold text-[#2c5aa0]">الاسم العائلة</span>
                        <input
                          type="text"
                          placeholder="ادخل اسم العائلة"
                          className="h-[52px] w-full rounded-[14px] border border-[#edf1f8] bg-[#fbfcfe] px-4 text-[14px] text-slate-700 outline-none transition focus:border-[#1464d2] focus:bg-white"
                        />
                      </label>
                    </div>

                    <div className="mt-5">
                      <label className="block">
                        <span className="mb-3 block text-[14px] font-extrabold text-[#2c5aa0]">رقم الهاتف الجوال</span>
                        <div className="relative">
                          <select className="h-[52px] w-full appearance-none rounded-[14px] border border-[#edf1f8] bg-[#fbfcfe] px-4 text-[14px] text-slate-700 outline-none transition focus:border-[#1464d2] focus:bg-white">
                            <option>+966 رقم الجوال</option>
                            <option>+20 رقم الجوال</option>
                            <option>+971 رقم الجوال</option>
                          </select>
                          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1464d2]">▾</span>
                        </div>
                      </label>
                    </div>

                    <div className="mt-5">
                      <label className="block">
                        <span className="mb-3 block text-[14px] font-extrabold text-[#2c5aa0]">البريد الإلكتروني</span>
                        <input
                          type="email"
                          placeholder="ادخل البريد الإلكتروني"
                          className="h-[52px] w-full rounded-[14px] border border-[#edf1f8] bg-[#fbfcfe] px-4 text-[14px] text-slate-700 outline-none transition focus:border-[#1464d2] focus:bg-white"
                        />
                      </label>
                    </div>

                    <div className="mt-5">
                      <label className="block">
                        <span className="mb-3 block text-[14px] font-extrabold text-[#2c5aa0]">موضوع الرسالة</span>
                        <input
                          type="text"
                          placeholder="ادخل موضوع الرسالة"
                          className="h-[52px] w-full rounded-[14px] border border-[#edf1f8] bg-[#fbfcfe] px-4 text-[14px] text-slate-700 outline-none transition focus:border-[#1464d2] focus:bg-white"
                        />
                      </label>
                    </div>

                    <div className="mt-5">
                      <label className="block">
                        <span className="mb-3 block text-[14px] font-extrabold text-[#2c5aa0]">نص الرسالة</span>
                        <textarea
                          rows="6"
                          placeholder="ادخل نص الرسالة"
                          className="w-full rounded-[14px] border border-[#edf1f8] bg-[#fbfcfe] px-4 py-4 text-[14px] text-slate-700 outline-none transition focus:border-[#1464d2] focus:bg-white"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 inline-flex min-w-[124px] items-center justify-center rounded-[7px] bg-[#1464d2] px-5 py-2.5 text-[13px] font-extrabold text-white transition hover:bg-[#0f56bb]"
                    >
                      إرسال الرسالة
                    </button>
                  </form>
                </div>

                <aside className="order-1 lg:order-2 lg:pt-[122px]">
                  <div className="rounded-[20px] bg-[#2372d9] p-5 text-white shadow-[0_25px_40px_rgba(35,114,217,0.25)]">
                    <h3 className="text-center text-[24px] font-extrabold">نحن دائما هنا لخدمتك</h3>

                    <div className="mt-5 space-y-4">
                      {contactDetails.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 rounded-[12px] bg-white/16 px-4 py-3 text-right backdrop-blur-sm"
                        >
                          <div className="flex min-w-0 flex-1 flex-col">
                            <span className="text-[12px] font-bold text-white/95">{item.title}</span>
                            <span className="mt-1 text-[12px] leading-6 text-white/80">{item.value}</span>
                          </div>
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                            {item.icon}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactUs;
