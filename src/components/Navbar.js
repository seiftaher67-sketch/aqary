import { useState } from 'react';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import { clearStoredUser, getStoredUser } from '../utils/auth';

const navigationItems = [
  { id: 'home', label: 'الرئيسية', href: '#home', page: 'home' },
  { id: 'bookings', label: 'الحجوزات', href: '#bookings', page: 'bookings' },
  { id: 'car-rental', label: 'تأجير سيارات', href: '#car-rental', page: 'car-rental' },
  { id: 'about', label: 'من نحن', href: '#about', page: 'about' },
  { id: 'contact', label: 'تواصل معنا', href: '#contact-us', page: 'contact' },
];

function Navbar({ currentPage = 'home' }) {
  const [authView, setAuthView] = useState(null);
  const user = getStoredUser();

  const handleCloseAuth = () => {
    setAuthView(null);
  };

  const handleLoginSuccess = () => {
    window.location.hash = '#profile/bookings';
  };

  const handleLogout = () => {
    clearStoredUser();
    setAuthView(null);
    window.location.hash = '#home';
  };

  return (
    <>
      <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <div className="bg-[#17315f] text-white">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-2 text-[11px] sm:px-6 lg:px-8">
            <div className="hidden items-center gap-3 md:flex">
              <span className="rounded-full bg-white/15 px-2 py-1">English</span>
              <span>السبت - الخميس 9:00 ص إلى 6:00 م</span>
            </div>
            <div className="flex items-center gap-4">
              <span>aqary@gmail.com</span>
              <span>+966 55 123 4567</span>
            </div>
          </div>
        </div>

        <div className="border-b border-[#edf2f9] bg-white">
          <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <img src="/image/logo.png" alt="Aqary" className="h-12 w-auto object-contain" />
            </div>

            <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
              {navigationItems.map((item) => {
                const isActive = currentPage === item.page;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`transition hover:text-[#155fcb] ${
                      isActive ? 'text-[#155fcb] underline decoration-2 underline-offset-[12px]' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <a
                    href="#profile/bookings"
                    className="rounded-md border border-[#d9e4f6] px-4 py-2 text-sm font-bold text-[#155fcb] transition hover:bg-[#eff5ff]"
                  >
                    حسابي
                  </a>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-md bg-[#155fcb] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#114ea7]"
                  >
                    تسجيل الخروج
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setAuthView('login')}
                  className="rounded-md bg-[#155fcb] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#114ea7]"
                >
                  تسجيل الدخول
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <Login
        isOpen={authView === 'login'}
        onClose={handleCloseAuth}
        onOpenCreateAccount={() => setAuthView('create-account')}
        onOpenForgotPassword={() => setAuthView('forgot-password')}
        onLoginSuccess={handleLoginSuccess}
      />

      <CreateAccount
        isOpen={authView === 'create-account'}
        onClose={handleCloseAuth}
        onOpenLogin={() => setAuthView('login')}
      />

      <ForgotPassword
        isOpen={authView === 'forgot-password'}
        onClose={handleCloseAuth}
        onBackToLogin={() => setAuthView('login')}
      />
    </>
  );
}

export default Navbar;
