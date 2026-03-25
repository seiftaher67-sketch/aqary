import { footerSections } from '../data';

function Footer() {
  return (
    <footer id="contact" className="bg-[#142b63] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div className="text-right">
            <img src="/image/logo.png" alt="Aqary" className="mr-auto h-14 w-auto object-contain" />
            <p className="mt-5 text-sm leading-8 text-white/80">
              منصة عقارية تساعدك في الوصول إلى أفضل الوحدات السكنية والاستثمارية مع عرض
              منظم للصور والتفاصيل الأساسية.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <img src="/image/Frame 429.png" alt="facebook" className="h-8 w-8 rounded-full" />
              <img src="/image/Frame 430.png" alt="whatsapp" className="h-8 w-8 rounded-full" />
              <img src="/image/Frame 431.png" alt="twitter" className="h-8 w-8 rounded-full" />
              <img src="/image/Frame 432.png" alt="instagram" className="h-8 w-8 rounded-full" />
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="text-right">
              <h3 className="text-sm font-extrabold">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {section.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-5 text-center text-xs text-white/70 sm:flex-row sm:text-right">
          <p>جميع الحقوق محفوظة © 2026 عقاري</p>
          <img src="/image/Frame 433.png" alt="badge" className="h-8 w-8 object-contain" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
