function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.1" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6.8 3.5h2.6c.5 0 .9.3 1 .8l.9 4c.1.4-.1.9-.5 1.1l-1.7 1.1a14.7 14.7 0 0 0 4.4 4.4l1.1-1.7c.2-.4.7-.6 1.1-.5l4 .9c.5.1.8.5.8 1v2.6c0 .6-.4 1.1-1 1.2-.8.1-1.5.2-2.3.2C10 21 3 14 3 5.8c0-.8.1-1.5.2-2.3.1-.6.6-1 1.2-1Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
      <path d="m6.5 8 5.5 4 5.5-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const quickLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'المشاريع', href: '#bookings' },
  { label: 'تواصل معنا', href: '#contact-us' },
  { label: 'من نحن', href: '#about' },
];

const supportLinks = [
  { label: 'شروط الاستخدام', href: '#terms' },
  { label: 'سياسة الخصوصية', href: '#privacy' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
];

const contactItems = [
  {
    label: 'المملكة العربية السعودية - الرياض شارع العليا - حي الملك فهد',
    icon: <LocationIcon />,
    dir: 'rtl',
  },
  {
    label: '+966 500 000 000',
    icon: <PhoneIcon />,
    dir: 'ltr',
  },
  {
    label: 'support@company.com',
    icon: <MailIcon />,
    dir: 'ltr',
  },
];

function Footer() {
  return (
    <footer id="contact" className="bg-[#1f315f] text-white">
      <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="text-right">
            <img src="/image/logo.png" alt="KeyDar" className="mr-0 ml-auto h-16 w-auto object-contain" />
            <p className="mt-5 mr-0 ml-auto max-w-[300px] text-[13px] leading-8 text-white/80">
              متخصصون في توفير حلول عقارية متكاملة لكل الراغبين في البحث والاستثمار والوصول إلى فرص موثوقة
              ومتنوعة.
            </p>
            <div className="mt-6 flex flex-row-reverse justify-end gap-3">
              <img src="/image/Frame 429.png" alt="facebook" className="h-8 w-8 rounded-full" />
              <img src="/image/Frame 430.png" alt="whatsapp" className="h-8 w-8 rounded-full" />
              <img src="/image/Frame 431.png" alt="twitter" className="h-8 w-8 rounded-full" />
              <img src="/image/Frame 432.png" alt="instagram" className="h-8 w-8 rounded-full" />
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-[14px] font-extrabold">روابط سريعة</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h3 className="text-[14px] font-extrabold">الدعم والسياسات</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/80">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <h3 className="text-[14px] font-extrabold">العنوان ووسائل التواصل</h3>
            <ul className="mt-4 flex flex-col items-end space-y-4 text-[13px] text-white/80">
              {contactItems.map((item) => (
                <li key={item.label} className="flex w-full items-start justify-end gap-3 text-right">
                  <span className="mt-1 text-white/85">{item.icon}</span>
                  <span
                    dir={item.dir}
                    className={`max-w-[260px] text-right leading-7 ${item.dir === 'ltr' ? 'w-full text-right' : ''} ${
                      item.label.includes('@') ? 'underline underline-offset-2' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-5 text-center text-[11px] text-white/65 sm:flex-row-reverse sm:justify-end sm:text-right">
           <p className="text-right">حقوق النشر © 2025-2026 كي دار. جميع الحقوق محفوظة</p>
           <img src="/image/Frame 433.png" alt="badge" className="h-9 w-9 object-contain" />
        
        </div>

      </div>
    </footer>
  );
}

export default Footer;
