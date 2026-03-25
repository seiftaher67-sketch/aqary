import { navLinks } from '../data';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="bg-[#0f4fa8] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[11px] sm:px-6 lg:px-8">
          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full bg-white/15 px-2 py-1">English</span>
            <span>السبت - الخميس 9:00 ص إلى 6:00 م</span>
          </div>
          <div className="flex items-center gap-4">
            <span>info@aqary.com</span>
            <span>+20 101 234 5678</span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/image/logo.png" alt="Aqary" className="h-12 w-auto object-contain" />
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="transition hover:text-[#0f4fa8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-md bg-[#0f4fa8] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0b418c]"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
