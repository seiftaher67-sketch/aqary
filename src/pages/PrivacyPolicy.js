import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const sections = [
  {
    title: '1. البيانات التي نجمعها',
    body: [
      'نسعى في Homezy إلى جمع البيانات التي يتم جمعها من خلال موقع Homezy الإلكتروني أو أثناء طلبك للحصول على خدماتنا، المعلومات المقدمة من المستخدم أثناء التسجيل أو التواصل أو استخدام خدمات الحجز.',
    ],
  },
  {
    title: '2. موافقة المستخدم',
    body: [
      'باستخدامك لموقع Homezy، أو أي خدمة مقدمة من قبلنا، فإنك توافق على هذه السياسة وتمنحنا الإذن بجمع واستخدام بياناتك كما هو موضح أدناه.',
    ],
  },
  {
    title: '3. البيانات التي نقوم بجمعها',
    body: [
      'قد نقوم بجمع المعلومات التالية:',
    ],
    bullets: [
      'البيانات الشخصية: مثل الاسم الثلاثي، رقم الهوية، رقم الجوال، البريد الإلكتروني، والعنوان.',
      'بيانات المستخدم على المنصة: مثل البيانات التي تكتبها عند التسجيل أو التي تدخلها عند الحجز.',
      'بيانات الدفع: لا نقوم بحفظ بيانات البطاقة البنكية داخل التطبيق، بل تتم المعالجة عبر مزود خدمة آمن ومعتمد.',
    ],
  },
  {
    title: '4. كيفية استخدام البيانات',
    body: [
      'نستخدم البيانات التي يتم جمعها للأغراض التالية:',
    ],
    bullets: [
      'تنفيذ طلبات الحجز وإتمام العمليات.',
      'تحسين تجربة المستخدم والموقع.',
      'التواصل مع المستخدمين لتقديم الدعم أو إرسال إشعارات الحجز.',
      'الامتثال للأنظمة واللوائح السعودية ذات الصلة.',
    ],
  },
  {
    title: '5. حماية البيانات',
    body: [
      'نلتزم في Homezy بحماية معلومات المستخدمين من الوصول أو الاستخدام غير المصرح به من خلال:',
    ],
    bullets: [
      'تقنيات التشفير الحديثة.',
      'استخدام بروتوكولات آمنة قوية.',
      'مراقبة أنشطة المستخدمين من خلال النظام الإلكتروني.',
    ],
  },
  {
    title: '6. مشاركة المعلومات',
    body: [
      'لن نشارك بيانات المستخدم الشخصية مع أي جهة خارجية إلا في الحالات التالية:',
    ],
    bullets: [
      'بموافقة المستخدم.',
      'عند طلبها من جهة رسمية مختصة.',
      'مع جهات حكومية رسمية عندما يكون ذلك مطلوباً لإتمام الخدمات أو الالتزام الكامل بالأنظمة.',
    ],
  },
  {
    title: '7. حقوق المستخدم',
    body: [
      'يحق للمستخدم في Homezy:',
    ],
    bullets: [
      'الوصول إلى بياناته الشخصية.',
      'طلب تعديل أو تحديث المعلومات.',
      'طلب حذف البيانات في حال عدم التزام قانوني بالاحتفاظ بها.',
      'يحق تقديم الشكاوى إلى جهة الإشراف بشكل رسمي إذا لزم ذلك أو عند وجود ما يتم إثباته.',
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <Navbar />
      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px] text-right">
          <header className="mb-10">
            <h1 className="text-[35px] font-extrabold text-[#155fcb]">سياسة الخصوصية - Homezy</h1>
            <p className="mt-4 text-[15px] leading-8 text-[#4d5f7b]">
              يقر المستخدم تصريحًا قانونيًا صريحًا بحفظ البيانات الشخصية وفقًا لنظام المعاملات المدنية في
              المملكة العربية السعودية، بما يتوافق مع نظام حماية البيانات الشخصية المعتمد.
            </p>
          </header>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[25px] font-extrabold text-[#155fcb]">{section.title}</h2>

                <div className="mt-3 space-y-3 text-[15px] leading-8 text-[#4d5f7b] text-right">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="mt-3 space-y-2 text-[15px] leading-8 text-[#4d5f7b] text-right">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start justify-start gap-2 text-right">
                        <span className="pt-1 text-[#4d5f7b]">•</span>
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
