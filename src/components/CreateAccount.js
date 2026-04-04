import { useState } from 'react';
import AuthLayout from './AuthLayout';

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
            icon="👤"
            value={formData.firstName}
            onChange={(event) => handleChange('firstName', event.target.value)}
            placeholder="فيصل"
          />
        </div>

        <div>
          <FieldLabel>الاسم العائلة</FieldLabel>
          <InputShell
            icon="👤"
            value={formData.lastName}
            onChange={(event) => handleChange('lastName', event.target.value)}
            placeholder="الحربي"
          />
        </div>
      </div>

      <div className="mt-5">
        <FieldLabel>البريد الإلكتروني</FieldLabel>
        <InputShell
          icon="✉"
          type="email"
          value={formData.email}
          onChange={(event) => handleChange('email', event.target.value)}
          placeholder="faisal.alharbi@example.com"
        />
      </div>

      <div className="mt-5">
        <FieldLabel>كلمة المرور</FieldLabel>
        <InputShell
          icon="🔒"
          type="password"
          value={formData.password}
          onChange={(event) => handleChange('password', event.target.value)}
          placeholder="أدخل كلمة المرور"
        />
      </div>

      <div className="mt-5">
        <FieldLabel>تأكيد كلمة المرور</FieldLabel>
        <InputShell
          icon="🔒"
          type="password"
          value={formData.confirmPassword}
          onChange={(event) => handleChange('confirmPassword', event.target.value)}
          placeholder="أدخل كلمة المرور"
        />
      </div>

      <div className="mt-5">
        <FieldLabel>رقم الهوية / الجواز</FieldLabel>
        <InputShell
          icon="🪪"
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
