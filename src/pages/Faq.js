import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const faqItems = [
  {
    id: 1,
    question: 'ما نوع العقارات التي يمكنني استئجارها عبر الموقع؟',
    answer: 'يمكنك استئجار شقق، فلل، بالإضافة إلى حجز فنادق وشقق فندقية في مختلف مدن المملكة.',
  },
  {
    id: 2,
    question: 'كيف يمكنني حجز العقار أو الفندق؟',
    answer:
      'كل ما عليك هو اختيار العقار أو الفندق المناسب، تحديد تاريخ الوصول والمغادرة، ثم تأكيد الحجز والدفع الإلكتروني بشكل آمن عبر الموقع.',
  },
  {
    id: 3,
    question: 'ما هي طرق الدفع المتاحة؟',
    answer: 'نقبل بطاقات فيزا، ماستر كارد، ومدى، كما يمكن الدفع بالريال السعودي، وجميع المعاملات آمنة ومشفرة.',
  },
  {
    id: 4,
    question: 'هل يمكنني تعديل أو إلغاء الحجز؟',
    answer:
      'نعم، يمكنك طلب تعديل أو إلغاء الحجز قبل الموعد المحدد في سياسة الإلغاء الخاصة بالحجز، وقد تُطبق رسوم في حال تم الإلغاء بعد الموعد المسموح.',
  },
  {
    id: 5,
    question: 'ما هي مواعيد تسجيل الوصول والمغادرة؟',
    answer: 'يبدأ تسجيل الوصول بعد الساعة 4:00 مساءً، ويتم تسجيل المغادرة قبل الساعة 12:00 مساءً، إلا إذا تم الاتفاق على غير ذلك.',
  },
  {
    id: 6,
    question: 'متى أتلقى تأكيد الحجز؟',
    answer: 'سيتم إرسال رسالة تأكيد الحجز إلى بريدك الإلكتروني خلال 48 ساعة من إتمام عملية الدفع.',
  },
  {
    id: 7,
    question: 'كيف يمكنني التواصل مع خدمة العملاء؟',
    answer: 'يمكنك التواصل مع فريق خدمة العملاء عبر نموذج "اتصل بنا" في الموقع أو من خلال البريد الإلكتروني والدعم المباشر عبر الواتساب.',
  },
  {
    id: 8,
    question: 'هل الأسعار تشمل الضرائب والرسوم؟',
    answer: 'نعم، جميع الأسعار معروضة بالريال السعودي وتشمل ضريبة القيمة المضافة والرسوم المبينة.',
  },
  {
    id: 9,
    question: 'هل يمكن الحجز للعائلات فقط أم للأفراد أيضًا؟',
    answer: 'تزيد المواقع بالحجوزات للعائلات والأفراد، وفق السياسات كل منشأة.',
  },
];

function Faq() {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-8 text-center">
            <h1 className="text-[32px] font-extrabold text-[#155fcb]">الأسئلة الشائعة</h1>
            <p className="mt-3 text-[14px] leading-8 text-[#8b97ad]">
              كل ما تحتاج معرفته عن الحجز والإيجار والدفع عبر منصتنا
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <article
                  key={item.id}
                  className={`rounded-[18px] border bg-white px-5 py-5 shadow-[0_12px_24px_rgba(17,39,88,0.05)] transition ${
                    isOpen ? 'border-[#cfdcf2]' : 'border-[#e7edf7]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId((currentId) => (currentId === item.id ? null : item.id))}
                    className="flex w-full items-center justify-between gap-4 text-right"
                  >
                    <span className="text-[28px] leading-none text-[#2f3f5a]">{isOpen ? '+' : '−'}</span>
                    <h2 className="flex-1 text-right text-[15px] font-semibold text-[#223152]">{item.question}</h2>
                  </button>

                  {isOpen ? (
                    <div className="mt-4 border-t border-[#edf2f8] pt-4">
                      <p className="text-right text-[14px] leading-8 text-[#8b97ad]">{item.answer}</p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Faq;
