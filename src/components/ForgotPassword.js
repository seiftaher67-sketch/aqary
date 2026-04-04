import { useEffect, useMemo, useRef, useState } from 'react';
import AuthLayout from './AuthLayout';

const OTP_LENGTH = 6;
const OTP_DURATION_SECONDS = 120;

function ChevronRightIcon({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
    </svg>
  );
}

function PhoneIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h2.154a2.25 2.25 0 0 1 2.193 1.75l.407 1.83a2.25 2.25 0 0 1-.96 2.388l-1.286.858a12.042 12.042 0 0 0 5.916 5.916l.858-1.286a2.25 2.25 0 0 1 2.388-.96l1.83.407a2.25 2.25 0 0 1 1.75 2.193V19.5a2.25 2.25 0 0 1-2.25 2.25h-.75C9.066 21.75 2.25 14.934 2.25 6.75V6a2.25 2.25 0 0 1 2.25-2.25Z" />
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

function EyeSlashIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18M10.477 10.489A3 3 0 0 0 13.5 13.5m3.233 3.232A10.451 10.451 0 0 1 12 18c-7.5 0-10.5-6-10.5-6a20.77 20.77 0 0 1 5.07-5.568m3.12-1.79A10.734 10.734 0 0 1 12 6c7.5 0 10.5 6 10.5 6a20.91 20.91 0 0 1-2.943 3.95"
      />
    </svg>
  );
}

function DevicePhoneMobileIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M7.5 2.25A2.25 2.25 0 0 0 5.25 4.5v15A2.25 2.25 0 0 0 7.5 21.75h9A2.25 2.25 0 0 0 18.75 19.5v-15A2.25 2.25 0 0 0 16.5 2.25h-9ZM12 18a.75.75 0 1 0 0 1.5A.75.75 0 0 0 12 18Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChatBubbleOvalLeftEllipsisIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M4.804 21.644A13.134 13.134 0 0 0 12 23.25c6.627 0 12-4.869 12-10.875S18.627 1.5 12 1.5 0 6.369 0 12.375c0 2.302.795 4.438 2.148 6.194.206.267.347.583.408.916l.332 1.814a.75.75 0 0 0 .916.599Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function formatCountdown(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function maskPhoneNumber(phoneNumber) {
  const digits = phoneNumber.replace(/\D/g, '');

  if (!digits) {
    return '+966 55 *** *** 212';
  }

  const localDigits = digits.startsWith('966') ? digits.slice(3) : digits;
  const lastThree = localDigits.slice(-3).padStart(3, '*');
  const firstTwo = localDigits.slice(0, 2).padEnd(2, '*');

  return `+966 ${firstTwo} *** *** ${lastThree}`;
}

function StepBack({ onBack }) {
  return (
    <button type="button" onClick={onBack} className="inline-flex items-center gap-3 text-[21px] font-extrabold text-[#111827]">
      <ChevronRightIcon className="h-8 w-8" />
      <span>الرجوع</span>
    </button>
  );
}

function ForgotPhoneStep({ phoneNumber, onPhoneChange, onContinue, onBack }) {
  const isDisabled = phoneNumber.trim().length < 9;

  return (
    <div>
      <StepBack onBack={onBack} />

      <h2 className="mt-10 text-[24px] font-extrabold leading-[1.4] text-[#111827] sm:text-[32px]">هل نسيت كلمة المرور؟</h2>
      <p className="mt-7 text-[20px] leading-[1.9] text-[#9a9aa0]">
        أدخل رقم جوالك أدناه وسنرسل لك رمز تحقق (OTP)
        <br />
        عبر رسالة نصية لإعادة تعيين كلمة المرور.
      </p>

      <div className="mt-12">
        <label className="mb-4 block text-[18px] font-extrabold text-[#111827]">رقم هاتفك الجوال</label>
        <div className="flex overflow-hidden rounded-[18px] border border-[#e4e7ef] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
          <div className="flex flex-1 items-center gap-3 px-5">
            <PhoneIcon className="h-6 w-6 text-[#b6bac3]" />
            <input
              type="tel"
              inputMode="numeric"
              value={phoneNumber}
              onChange={(event) => onPhoneChange(event.target.value.replace(/[^\d]/g, ''))}
              placeholder="أدخل رقم هاتف"
              className="h-14 w-full border-0 bg-transparent text-right text-base text-[#1f2937] outline-none placeholder:text-[#a1a1aa]"
            />
          </div>

          <div className="flex items-center gap-3 border-r border-[#e4e7ef] px-4 text-sm font-semibold text-[#111827]">
            <span className="text-base">▾</span>
            <span>+966</span>
            <span className="rounded-[6px] bg-[#0f8f52] px-2 py-1 text-[10px] font-bold text-white">السعودية</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onContinue}
        disabled={isDisabled}
        className="mt-10 flex h-16 w-full items-center justify-center rounded-[18px] border-2 border-[#1560d4] text-[20px] font-extrabold text-[#1560d4] transition hover:bg-[#1560d4] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#1560d4]"
      >
        متابعة
      </button>
    </div>
  );
}

function ForgotOtpStep({
  phoneNumber,
  otpValues,
  countdown,
  inputRefs,
  onBack,
  onOtpChange,
  onOtpKeyDown,
  onVerify,
}) {
  return (
    <div>
      <StepBack onBack={onBack} />

      <h2 className="mt-5 text-[24px] font-extrabold leading-[1.4] text-[#111827] sm:text-[32px]">الرجاء إدخال رمز التحقق</h2>
      <p className="mt-5 text-[22px] leading-[1.9] text-[#9a9aa0]">تم إرسال رمز التحقق إلى رقمك المسجل</p>
      <p className="mt-5 text-[30px] font-medium tracking-wide text-[#111827]">{phoneNumber}</p>

      <div className="mt-8 flex justify-between gap-3 sm:gap-4">
        {otpValues.map((digit, index) => (
          <input
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(event) => onOtpChange(index, event.target.value)}
            onKeyDown={(event) => onOtpKeyDown(index, event)}
            className="h-16 w-full rounded-[16px] border border-[#edf0f5] bg-[#fafafa] text-center text-2xl font-bold text-[#111827] outline-none transition focus:border-[#1560d4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(21,96,212,0.12)] sm:h-20"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onVerify}
        className="mt-10 flex h-16 w-full items-center justify-center rounded-[18px] border-2 border-[#1560d4] text-[20px] font-extrabold text-[#1560d4] transition hover:bg-[#1560d4] hover:text-white"
      >
        تحقق
      </button>

      <div className="mt-9 flex items-center gap-4 text-[#9a9aa0]">
        <span className="h-px flex-1 bg-[#dadde3]" />
        <p className="whitespace-nowrap text-[18px] font-semibold">
          لم تصلك الرسالة بعد؟ <span className="mx-2 text-[#111827]">({formatCountdown(countdown)})</span>
        </p>
        <span className="h-px flex-1 bg-[#dadde3]" />
      </div>

      <div className="mt-7 space-y-4">
        <button
          type="button"
          className="flex h-[74px] w-full items-center justify-center gap-4 rounded-[20px] border border-[#d9dbe1] bg-white px-6 text-[18px] font-bold text-[#c0c2c8]"
        >
          <DevicePhoneMobileIcon className="h-7 w-7 text-[#aeb1b8]" />
          <span>إعادة إرسال بواسطة الجوال</span>
        </button>

        <button
          type="button"
          className="flex h-[74px] w-full items-center justify-center gap-4 rounded-[20px] border border-[#89e1a4] bg-[#f9fffb] px-6 text-[18px] font-bold text-[#7adf99]"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-[#7adf99]" />
          <span>إرسال بواسطة الواتساب</span>
        </button>
      </div>
    </div>
  );
}

function PasswordField({ label, placeholder, value, onChange }) {
  return (
    <div className="mt-10">
      <label className="mb-4 block text-[18px] font-extrabold text-[#111827]">{label}</label>
      <div className="flex h-14 items-center rounded-[18px] border border-[#e4e7ef] bg-white px-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
        <EyeSlashIcon className="h-6 w-6 text-[#9ea3ab]" />
        <input
          type="password"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-full w-full border-0 bg-transparent px-3 text-right text-base text-[#1f2937] outline-none placeholder:text-[#a1a1aa]"
        />
        <LockClosedIcon className="h-7 w-7 text-[#b6bac3]" />
      </div>
    </div>
  );
}

function ResetPasswordStep({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  onBack,
  onSave,
}) {
  return (
    <div>
      <StepBack onBack={onBack} />

      <h2 className="mt-10 text-[24px] font-extrabold leading-[1.4] text-[#111827] sm:text-[32px]">إعادة تعيين كلمة المرور</h2>
      <p className="mt-7 text-[22px] leading-[1.9] text-[#9a9aa0]">
        أدخل كلمة مرور جديدة لحسابك ثم أكدها لتتمكن
        <br />
        من تسجيل الدخول مرة أخرى.
      </p>

      <PasswordField
        label="كلمة المرور الجديدة"
        placeholder="أدخل كلمة المرور"
        value={password}
        onChange={onPasswordChange}
      />

      <PasswordField
        label="تأكيد كلمة المرور"
        placeholder="أدخل كلمة المرور"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />

      <button
        type="button"
        onClick={onSave}
        className="mt-12 flex h-16 w-full items-center justify-center rounded-[18px] border-2 border-[#1560d4] text-[20px] font-extrabold text-[#1560d4] transition hover:bg-[#1560d4] hover:text-white"
      >
        حفظ كلمة المرور
      </button>
    </div>
  );
}

function ForgotPassword({ isOpen, onClose, onBackToLogin }) {
  const [step, setStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpValues, setOtpValues] = useState(Array(OTP_LENGTH).fill(''));
  const [countdown, setCountdown] = useState(OTP_DURATION_SECONDS);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!isOpen || step !== 'otp') {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          window.clearInterval(intervalId);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isOpen, step]);

  useEffect(() => {
    if (!isOpen || step !== 'otp') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [isOpen, step]);

  const resetState = () => {
    setStep('phone');
    setPhoneNumber('');
    setOtpValues(Array(OTP_LENGTH).fill(''));
    setCountdown(OTP_DURATION_SECONDS);
    setPassword('');
    setConfirmPassword('');
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleSavePassword = () => {
    resetState();
    onBackToLogin();
  };

  const handleBack = () => {
    if (step === 'phone') {
      resetState();
      onBackToLogin();
      return;
    }

    if (step === 'otp') {
      setStep('phone');
      setOtpValues(Array(OTP_LENGTH).fill(''));
      setCountdown(OTP_DURATION_SECONDS);
      return;
    }

    setStep('otp');
  };

  const handleOtpChange = (index, rawValue) => {
    const value = rawValue.replace(/[^\d]/g, '').slice(-1);

    setOtpValues((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowRight' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowLeft' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const maskedPhone = useMemo(() => maskPhoneNumber(phoneNumber), [phoneNumber]);

  return (
    <AuthLayout isOpen={isOpen} onClose={handleClose}>
      {step === 'phone' ? (
        <ForgotPhoneStep
          phoneNumber={phoneNumber}
          onPhoneChange={setPhoneNumber}
          onContinue={() => {
            setOtpValues(Array(OTP_LENGTH).fill(''));
            setCountdown(OTP_DURATION_SECONDS);
            setStep('otp');
          }}
          onBack={handleBack}
        />
      ) : null}

      {step === 'otp' ? (
        <ForgotOtpStep
          phoneNumber={maskedPhone}
          otpValues={otpValues}
          countdown={countdown}
          inputRefs={inputRefs}
          onBack={handleBack}
          onOtpChange={handleOtpChange}
          onOtpKeyDown={handleOtpKeyDown}
          onVerify={() => setStep('reset')}
        />
      ) : null}

      {step === 'reset' ? (
        <ResetPasswordStep
          password={password}
          confirmPassword={confirmPassword}
          onPasswordChange={(event) => setPassword(event.target.value)}
          onConfirmPasswordChange={(event) => setConfirmPassword(event.target.value)}
          onBack={handleBack}
          onSave={handleSavePassword}
        />
      ) : null}
    </AuthLayout>
  );
}

export default ForgotPassword;
