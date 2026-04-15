import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const mainTerms = [
  'الأسعار تشمل تكلفة الغرفة لليلة الواحدة.',
  'يخضع تسجيل الوصول والمغادرة لسياسة العقار أو الفندق والمواسم.',
  'تسجيل الوصول: بعد الساعة 5:00 مساءً.',
  'تسجيل المغادرة: قبل الساعة 12:00 ظهراً.',
  'تسجيل المغادرة المتأخر يعتمد على مدى توفر الغرف وقد تُطبق رسوم إضافية.',
  'في حالة الإلغاء أو التعديل، يتم تطبيق سياسة الإلغاء الخاصة بكل منشأة وفقًا لشروط الدفع المحددة في خطاب التأكيد.',
  'تبدأ حجوزات المجموعات قبل 7 أيام على الأقل من تاريخ الوصول، وذلك لتنسيق الأسعار المعلنة.',
  'قد يتم تطبيق رسوم إضافية عند طلب تعديل الحجز أو تجزئته.',
  'يجب إتمام عملية السداد بالكامل قبل الموعد النهائي المحدد لتفادي إلغاء الحجز.',
  'قد تتضمن الفواتير المجمعة كامل المبلغ النهائي والرسوم (ضريبة القيمة المضافة + رسوم البلدية) بالإضافة إلى أي رسوم المعاملات البنكية.',
  'تم قبول بطاقات فيزا، ماستر كارد ومدى للدفع.',
];

const cancelTerms = [
  'في حال الإلغاء قبل الموعد النهائي المحدد، لن يتم فرض أي رسوم.',
  'في حال الإلغاء بعد الموعد المحدد، تُحتسب تكلفة الإقامة بالكامل.',
];

const refundTerms = [
  'في حال طلب الاسترجاع المالي، يتحمل العميل رسوم المعاملات البنكية ذهاباً وإياباً إن وجدت.',
  'قد تستغرق عملية الاسترجاع حتى 45 يوماً حسب البنك المصدر لبطاقة الائتمان.',
];

const multipleBookingsTerms = [
  'قد تظهر الحجوزات المتعددة كعمليات دفع منفصلة في كشف حساب حامل البطاقة.',
  'بعد إتمام الدفع يتم إرسال إشعار تأكيد الحجز إلى البريد الإلكتروني للعميل خلال 48 ساعة من استلام المبلغ.',
];

function BulletsSection({ title, items }) {
  return (
    <section>
      <h2 className="text-[29px] font-extrabold text-[#155fcb]">{title}</h2>
      <ul className="mt-5 space-y-2 text-right text-[15px] leading-8 text-[#3f4f68]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="pt-1 text-[#3f4f68]">•</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white text-right">
      <Navbar />
      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[980px]">
          <div className="space-y-12">
            <BulletsSection title="الشروط والأحكام" items={mainTerms} />
            <BulletsSection title="سياسة الإلغاء (للأفراد)" items={cancelTerms} />
            <BulletsSection title="سياسة الاسترجاع" items={refundTerms} />
            <BulletsSection title="الحجوزات المتعددة" items={multipleBookingsTerms} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfUse;
