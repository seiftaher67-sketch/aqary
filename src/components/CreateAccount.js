import { useState } from 'react';
import AuthLayout from './AuthLayout';

function UserIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EnvelopeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 8.67v8.58A2.25 2.25 0 0 0 3.75 19.5h16.5a2.25 2.25 0 0 0 2.25-2.25V8.67l-8.69 5.216a3.75 3.75 0 0 1-3.86 0L1.5 8.67Z" />
      <path d="M22.5 6.908v-.158A2.25 2.25 0 0 0 20.25 4.5H3.75A2.25 2.25 0 0 0 1.5 6.75v.158l9.21 5.526a2.25 2.25 0 0 0 2.58 0l9.21-5.526Z" />
    </svg>
  );
}

function LockClosedIcon({ className = 'h-5 w-5' }) {
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

function IdentificationIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25ZM7.5 7.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H7.5Zm0 3.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 3.75a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Zm8.25.75a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1.5-5.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FieldLabel({ children }) {
  return <label className="mb-3 block text-[16px] font-extrabold text-[#111827]">{children}</label>;
}

function InputShell({ icon, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="flex h-14 items-center rounded-[16px] border border-[#d6e2f7] bg-white px-4 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
      <span className="ml-3 text-xl text-[#b7bac1]">{icon}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-full w-full border-0 bg-transparent text-right text-base text-[#111827] outline-none placeholder:text-[#a1a1aa]"
      />
    </div>
  );
}

function CreateAccount({ isOpen, onClose, onOpenLogin }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    identity: '',
  });
  const [agreed, setAgreed] = useState(true);

  const handleChange = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <AuthLayout isOpen={isOpen} onClose={onClose} formScrollable>
      <button
        type="button"
        onClick={onOpenLogin}
        className="inline-flex items-center gap-3 text-[21px] font-extrabold text-[#111827]"
      >
        <span className="text-[32px] leading-none">›</span>
        <span>الرجوع</span>
      </button>

      <h2 className="mt-10 text-[30px] font-extrabold leading-[1.4] text-[#111827] sm:text-[38px]">
        مرحبا بك فى <span className="font-black">Homezy</span>
      </h2>
      <p className="mt-3 text-[20px] leading-[1.8] text-[#9a9aa0]">قم بإدخال البيانات لإنشاء حساب</p>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel>الاسم الأول</FieldLabel>
          <InputShell
            icon={<UserIcon className="h-5 w-5 text-[#b7bac1]" />}
            value={formData.firstName}
            onChange={(event) => handleChange('firstName', event.target.value)}
            placeholder="ادخل الاسم الأول"
          />
        </div>

        <div>
          <FieldLabel>الاسم العائلة</FieldLabel>
          <InputShell
            icon={<UserIcon className="h-5 w-5 text-[#b7bac1]" />}
            value={formData.lastName}
            onChange={(event) => handleChange('lastName', event.target.value)}
            placeholder="ادخل اسم العائلة"
          />
        </div>
      </div>

      <div className="mt-5">
        <FieldLabel>البريد الإلكتروني</FieldLabel>
        <InputShell
          icon={<EnvelopeIcon className="h-5 w-5 text-[#b7bac1]" />}
          type="email"
          value={formData.email}
          onChange={(event) => handleChange('email', event.target.value)}
          placeholder="ادخل البريد الالكتروني"
        />
      </div>

      <div className="mt-5">
        <FieldLabel>كلمة المرور</FieldLabel>
        <InputShell
          icon={<LockClosedIcon className="h-5 w-5 text-[#b7bac1]" />}
          type="password"
          value={formData.password}
          onChange={(event) => handleChange('password', event.target.value)}
          placeholder="أدخل كلمة المرور"
        />
      </div>

      <div className="mt-5">
        <FieldLabel>تأكيد كلمة المرور</FieldLabel>
        <InputShell
          icon={<LockClosedIcon className="h-5 w-5 text-[#b7bac1]" />}
          type="password"
          value={formData.confirmPassword}
          onChange={(event) => handleChange('confirmPassword', event.target.value)}
          placeholder="أدخل كلمة المرور"
        />
      </div>

      <div className="mt-5">
        <FieldLabel>رقم الهوية / الجواز</FieldLabel>
        <InputShell
          icon={<IdentificationIcon className="h-5 w-5 text-[#b7bac1]" />}
          value={formData.identity}
          onChange={(event) => handleChange('identity', event.target.value)}
          placeholder="أدخل رقم الهوية او الجواز"
        />
      </div>

      <label className="mt-7 flex cursor-pointer items-center justify-end gap-3 text-[18px] leading-[1.8] text-[#111827]">
        <input type="checkbox" checked={agreed} onChange={() => setAgreed((current) => !current)} className="h-6 w-6 accent-[#1560d4]" />
        <span>
          أوافق على <span className="text-[#1560d4] underline">سياسة الخصوصية</span> و{' '}
          <span className="text-[#1560d4] underline">شروط الاستخدام</span>
        </span>
      </label>

      <button
        type="button"
        className="mt-8 flex h-16 w-full items-center justify-center rounded-[18px] border-2 border-[#1560d4] text-[20px] font-extrabold text-[#1560d4] transition hover:bg-[#1560d4] hover:text-white"
      >
        إنشاء حساب
      </button>
    </AuthLayout>
  );
}

export default CreateAccount;
