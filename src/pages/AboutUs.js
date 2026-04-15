import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const stats = [
  { id: 1, value: '+ 2000', label: 'عقار', sublabel: 'مؤجر' },
  { id: 2, value: '+ 10 ألف', label: 'مستخدم' },
  { id: 3, value: '+ 800', label: 'طلبات موثوق' },
  { id: 4, value: '5', label: 'سنوات خبرة' },
];

const coreValues = [
  {
    id: 1,
    title: 'شفافية ووضوح',
    description:
      'نحرص على تقديم تفاصيل دقيقة وواضحة تساعد المستخدم على فهم الخيارات المتاحة واتخاذ قراره بثقة.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
        <path d="M7.5 9.5h9M7.5 13h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'سرعة ومرونة',
    description:
      'نوفر تجربة مرنة تتيح التنقل السريع بين العقارات والخدمات، مع خطوات واضحة تقلل الوقت وتزيد الكفاءة.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 5 13h5l-1 9 8-11h-5z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'راحة المستخدم',
    description:
      'نصمم رحلة استخدام بسيطة ومنظمة تجعل الوصول إلى المعلومات والخدمات العقارية أسهل في جميع التفاصيل.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
        <path d="M6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16h-6.2L7 19v-3H6.5A2.5 2.5 0 0 1 4 13.5v-7A2.5 2.5 0 0 1 6.5 4Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function AboutUs() {
  const messageSectionRef = useRef(null);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    const section = messageSectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMessageVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="about" />

      <main id="about" className="overflow-hidden">
        <section className="bg-white pb-12 pt-10 sm:pt-12">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 border-b border-[#e9edf5] pb-12 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
              <div className="order-1 lg:order-2">
                <img
                  src="/image/Group 46.png"
                  alt="فريق العمل"
                  className="mx-auto w-full max-w-[430px] object-contain lg:mr-auto lg:ml-0"
                />
              </div>

              <div className="order-2 text-right lg:order-1">
                <h1 className="text-[26px] font-extrabold text-[#1464d2] sm:text-[30px]">من نحن</h1>
                <p className="mt-5 max-w-[560px] text-[14px] leading-[2.15] text-[#4e5f78]">
                  نقدم خدمات متخصصة في جميع العقارات السكنية والتجارية ضمن منصتنا الرقمية. نسعى لتوفير تجربة
                  بحث وعرض موثوقة وآمنة مع سهولة الاستخدام للجميع، حيث نوفر مجموعة متنوعة من الخيارات والخدمات
                  التي تلبي احتياجات العملاء وتمنحهم تجربة سلسة في الوصول إلى ما يبحثون عنه.
                </p>

                <div className="mt-8 grid max-w-[420px] grid-cols-2 gap-x-10 gap-y-7 sm:mr-auto">
                  {stats.map((stat) => (
                    <div key={stat.id} className="text-right">
                      <div className="text-[26px] font-extrabold leading-none text-[#1464d2]">{stat.value}</div>
                      <div className="mt-2 text-[20px] font-extrabold leading-none text-[#1464d2]">{stat.label}</div>
                      {stat.sublabel ? (
                        <div className="mt-2 text-[15px] font-semibold text-[#4e5f78]">{stat.sublabel}</div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={messageSectionRef} className="bg-white py-10">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 border-b border-[#e9edf5] pb-12 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <img
                  src="/image/Group 48.png"
                  alt="مجموعة عقارات"
                  className="w-full rounded-[28px] object-contain"
                />
              </div>

              <div className="space-y-5">
                <article
                  className={`rounded-[20px] border border-[#edf2fa] bg-white px-6 py-7 text-right shadow-[0_14px_35px_rgba(17,39,88,0.05)] transition-all duration-700 ${
                    isMessageVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
                  }`}
                >
                  <h2 className="text-[27px] font-extrabold text-[#1464d2]">رسالتنا</h2>
                  <p className="mt-3 text-[14px] leading-[2.05] text-[#4e5f78]">
                    نسعى لتطوير آلية عرض العقار أو حجزه بطرق حديثة ومبتكرة تواكب رضا المستخدم وتلبي تطلعاته
                    بطريقة موثوقة وسريعة.
                  </p>
                </article>

                <article
                  className={`rounded-[20px] border border-[#edf2fa] bg-white px-6 py-7 text-right shadow-[0_14px_35px_rgba(17,39,88,0.05)] transition-all delay-200 duration-700 ${
                    isMessageVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
                  }`}
                >
                  <h2 className="text-[27px] font-extrabold text-[#1464d2]">رؤيتنا</h2>
                  <p className="mt-3 text-[14px] leading-[2.05] text-[#4e5f78]">
                    أن تكون المنصة العقارية الرائدة لتقديم استشارات وحلول عقارية متكاملة بواجهة واضحة وتجربة
                    فعالة تلائم احتياجات العملاء.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold text-[#1464d2]">قيمنا الأساسية</h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[14px] leading-8 text-[#8a94a6]">
                نلتزم في رؤيتنا المستمرة بتطوير أعمالنا بما يتوافق مع حلول عقارية حديثة ترضي عملاءنا وتدعم
                التجربة التي نسعى لتقديمها.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {coreValues.map((value) => (
                <article
                  key={value.id}
                  className="rounded-[22px] border border-[#e8edf6] bg-white px-6 pb-8 pt-7 text-center shadow-[0_16px_38px_rgba(17,39,88,0.06)]"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#1464d2] text-white shadow-[0_12px_20px_rgba(20,100,210,0.22)]">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 text-[21px] font-extrabold text-[#1e2b44]">{value.title}</h3>
                  <p className="mt-4 text-[14px] leading-[2.05] text-[#7a879b]">{value.description}</p>
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
