import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const values = [
  {
    id: 1,
    title: 'وضوح في العرض',
    description: 'نركز على تقديم معلومات مباشرة وصور واضحة تساعد العميل على اتخاذ القرار.',
  },
  {
    id: 2,
    title: 'خدمة سريعة',
    description: 'نتابع الطلبات والاستفسارات بسرعة لضمان تجربة سلسة من البداية حتى الإتمام.',
  },
  {
    id: 3,
    title: 'خيارات موثوقة',
    description: 'نختار الخدمات والعروض بعناية لتناسب الاستخدام السكني واليومي والعملي.',
  },
];

function AboutUs() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar currentPage="about" />
      <main>
        <section className="bg-[#fbf7ef] py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-[30px] shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
              <img src="/image/1.jpg" alt="من نحن" className="h-full w-full object-cover" />
            </div>

            <div className="text-right">
              <p className="text-sm font-bold text-[#0f4fa8]">من نحن</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                منصة تجمع بين العقارات والخدمات المرتبطة بها
              </h1>
              <p className="mt-5 text-sm leading-8 text-slate-600">
                نعمل على تقديم تجربة رقمية واضحة لعرض العقارات والخدمات المساندة مثل
                الحجز وتأجير السيارات، مع واجهة سهلة ومحتوى منظم يساعد المستخدم على
                الوصول لما يحتاجه بسرعة.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">ما الذي يميزنا</h2>
              <p className="mt-3 text-sm text-slate-500">
                نبني تجربة استخدام عملية تركز على الاحتياج الحقيقي للعميل.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.id}
                  className="rounded-[22px] bg-[#f8fbff] p-6 text-right shadow-[0_12px_30px_rgba(18,55,118,0.06)]"
                >
                  <h3 className="text-xl font-extrabold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
