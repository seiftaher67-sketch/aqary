import { useEffect } from 'react';

function AuthPromoPanel() {
  return (
    <div className="order-2 hidden bg-[#f5f8fc] p-5 sm:p-8 lg:order-1 lg:block lg:p-10">
      <div className="flex h-full items-center">
        <div className="relative w-full overflow-hidden rounded-[26px] bg-white shadow-[0_16px_40px_rgba(20,49,95,0.08)]">
          <img
            src="/image/27.jpg"
            alt="تجربة الإيجار الاستثنائية"
            className="h-[470px] w-full object-cover"
          />

          <div className="absolute right-7 top-0">
            <div className="max-w-[210px] rounded-b-[54px] bg-[rgba(30,82,166,0.68)] px-5 py-6 text-right text-white backdrop-blur-[2px]">
              <p className="text-[22px] font-extrabold leading-[1.7] text-[#ffbf33]">
                تجربة الإيجار
                <br />
                الاستثنائية
              </p>
              <p className="mt-2 text-[17px] font-bold leading-8">مع كل حجز</p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-start p-7">
            <button
              type="button"
              className="rounded-full bg-[#ffbf33] px-8 py-3 text-sm font-extrabold text-[#1d2333] shadow-[0_12px_24px_rgba(255,191,51,0.35)] transition hover:bg-[#f2b52e]"
            >
              احجز الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthLayout({ isOpen, onClose, children, formScrollable = false }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#09162d]/70 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative grid h-[720px] w-full max-w-[1150px] overflow-hidden rounded-[34px] bg-white shadow-[0_28px_80px_rgba(8,20,46,0.35)] lg:grid-cols-[1.08fr_0.92fr]"
        dir="rtl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="إغلاق"
          onClick={onClose}
          className="absolute left-6 top-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8c8ca] text-4xl leading-none text-white transition hover:bg-[#b7b7ba]"
        >
          <span className="-mt-1">×</span>
        </button>

        <AuthPromoPanel />

        <div className="order-1 flex min-h-0 flex-col bg-white lg:order-2">
          <div
            className={`min-h-0 flex-1 px-6 py-8 sm:px-9 lg:px-12 lg:py-12 ${
              formScrollable ? 'overflow-y-auto' : 'flex items-center'
            }`}
          >
            <div className="w-full text-right">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
