import { useState } from 'react';
import AuthLayout from './AuthLayout';

function EnvelopeIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 8.67v8.58A2.25 2.25 0 0 0 3.75 19.5h16.5a2.25 2.25 0 0 0 2.25-2.25V8.67l-8.69 5.216a3.75 3.75 0 0 1-3.86 0L1.5 8.67Z" />
      <path d="M22.5 6.908v-.158A2.25 2.25 0 0 0 20.25 4.5H3.75A2.25 2.25 0 0 0 1.5 6.75v.158l9.21 5.526a2.25 2.25 0 0 0 2.58 0l9.21-5.526Z" />
    </svg>
  );
}

function LockClosedIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25V9A2.25 2.25 0 0 0 4.5 11.25v8.25A2.25 2.25 0 0 0 6.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-8.25A2.25 2.25 0 0 0 17.25 9V6.75A5.25 5.25 0 0 0 12 1.5Zm-3 7.5V6.75a3 3 0 1 1 6 0V9H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Login({ isOpen, onClose, onOpenCreateAccount, onOpenForgotPassword }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <AuthLayout isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-[38px] font-extrabold leading-[1.4] text-[#111827] sm:text-[44px]">مرحباً بعودتك!</h2>
        <p className="mt-7 text-[22px] leading-[1.9] text-[#8f8f94]">
          سجل دخولك للوصول إلى حسابك واستمتع بتجربة الإيجار المميزة.
        </p>

        <div className="mt-14">
          <label className="mb-4 block text-[18px] font-extrabold text-[#111827]">البريد الإلكتروني</label>
          <div className="flex h-14 items-center rounded-[18px] border border-[#e4e7ef] bg-white px-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <EnvelopeIcon className="ml-3 h-6 w-6 text-[#b6bac3]" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="أدخل بريدك الإلكتروني"
              className="h-full w-full border-0 bg-transparent text-right text-base text-[#1f2937] outline-none placeholder:text-[#a1a1aa]"
            />
          </div>
        </div>

        <div className="mt-10">
          <label className="mb-4 block text-[18px] font-extrabold text-[#111827]">كلمة المرور</label>
          <div className="flex h-14 items-center rounded-[18px] border border-[#e4e7ef] bg-white px-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <LockClosedIcon className="ml-3 h-7 w-7 text-[#b6bac3]" />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="أدخل كلمة المرور الخاصة بك"
              className="h-full w-full border-0 bg-transparent text-right text-base text-[#1f2937] outline-none placeholder:text-[#a1a1aa]"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-3 text-[17px] text-[#111827]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe((current) => !current)}
              className="h-6 w-6 accent-[#1560d4]"
            />
            <span>تذكرني</span>
          </label>

          <button
            type="button"
            onClick={onOpenForgotPassword}
            className="text-[17px] font-semibold text-[#1560d4] underline"
          >
            هل نسيت كلمة المرور؟
          </button>
        </div>

        <button
          type="button"
          className="mt-10 flex h-16 w-full items-center justify-center rounded-[18px] border-2 border-[#1560d4] text-[20px] font-extrabold text-[#1560d4] transition hover:bg-[#1560d4] hover:text-white"
        >
          تسجيل الدخول
        </button>

        <p className="mt-8 text-[18px] leading-8 text-[#8f8f94]">
          ليس لديك حساب؟{' '}
          <button type="button" onClick={onOpenCreateAccount} className="font-extrabold text-[#1560d4] underline">
            إنشاء حساب
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
