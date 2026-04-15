import { useEffect, useRef, useState } from 'react';

function CameraIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.447a1 1 0 0 0 .832-.445l.442-.663A1 1 0 0 1 10.053 4h3.894a1 1 0 0 1 .832.445l.442.663A1 1 0 0 0 16.053 6H17.5A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Z"
      />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function ChevronDownIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

function InputLabel({ children }) {
  return <label className="mb-2 block text-right text-[16px] font-medium text-[#274f94] sm:text-[18px] lg:text-[20px]">{children}</label>;
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={`h-[48px] w-full rounded-[16px] border border-[#dce3ee] bg-white px-4 text-right text-[15px] text-[#111827] shadow-[0_6px_14px_rgba(15,23,42,0.03)] outline-none placeholder:text-[#b2b8c4] focus:border-[#1560d4] sm:h-[50px] sm:text-[16px] lg:h-[54px] lg:text-[17px] ${props.className || ''}`}
    />
  );
}

function PhoneField({ phone, onPhoneChange }) {
  return (
    <div className="flex h-[48px] overflow-hidden rounded-[16px] border border-[#dce3ee] bg-white shadow-[0_6px_14px_rgba(15,23,42,0.03)] sm:h-[50px] lg:h-[54px]">
      <input
        type="tel"
        value={phone}
        onChange={(event) => onPhoneChange(event.target.value)}
        className="min-w-0 flex-1 border-0 bg-transparent px-4 text-center text-[15px] text-[#111827] outline-none sm:text-[16px] lg:text-[17px]"
      />
      <div className="flex items-center gap-2 border-r border-[#dce3ee] px-3 text-[#111827]">
        <ChevronDownIcon className="h-4 w-4" />
        <span className="text-[14px] font-medium sm:text-[15px] lg:text-[16px]">+966</span>
        <span className="rounded-[7px] bg-[#0f9f57] px-2 py-1 text-[10px] font-extrabold leading-none text-white">KSA</span>
      </div>
    </div>
  );
}

function normalizePhone(phone) {
  return phone.replace(/^\+966\s*/, '').trim();
}

function ProfileEditModal({ isOpen, user, onClose, onSave }) {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nationalId: '',
    phone: '',
    avatar: '',
  });

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      nationalId: user?.nationalId || '',
      phone: normalizePhone(user?.phone || ''),
      avatar: user?.avatar || '',
    });

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
  }, [isOpen, onClose, user]);

  if (!isOpen || !user) {
    return null;
  }

  const handleChange = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((current) => ({
        ...current,
        avatar: typeof reader.result === 'string' ? reader.result : current.avatar,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave({
      ...user,
      name: formData.name.trim(),
      email: formData.email.trim(),
      nationalId: formData.nationalId.trim(),
      phone: `+966 ${formData.phone.trim()}`,
      avatar: formData.avatar || user.avatar,
    });
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(9,22,45,0.55)] px-4 py-6" onClick={onClose}>
      <div
        className="relative w-full max-w-[920px] rounded-[28px] border-[3px] border-[#1560d4] bg-white px-5 py-6 shadow-[0_30px_90px_rgba(8,20,46,0.28)] sm:px-7 sm:py-7 lg:px-[34px] lg:py-[30px]"
        onClick={(event) => event.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className="mx-auto max-w-[760px]">
            <div className="text-center">
              <h2 className="text-[26px] font-extrabold text-[#050505] sm:text-[34px] lg:text-[40px]">تعديل الملف الشخصي</h2>
              <p className="mt-3 text-[15px] font-medium text-[#a0a0a3] sm:text-[18px] lg:text-[21px]">تحديث المعلومات الأساسية لحسابك</p>
            </div>

            <div className="mt-4 flex justify-center sm:mt-5 lg:mt-4">
              <div className="relative">
                <img
                  src={formData.avatar || user.avatar}
                  alt={formData.name || user.name}
                  className="h-[104px] w-[104px] rounded-full border-[4px] border-[#1560d4] object-cover sm:h-[124px] sm:w-[124px] lg:h-[148px] lg:w-[148px]"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-[#1560d4] text-white shadow-[0_10px_24px_rgba(21,96,212,0.3)] sm:h-10 sm:w-10 lg:h-[42px] lg:w-[42px]"
                  aria-label="تغيير الصورة الشخصية"
                >
                  <CameraIcon className="h-4 w-4" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </div>
            </div>

            <div className="mt-6 grid gap-x-[24px] gap-y-5 lg:mt-7 lg:grid-cols-2 lg:gap-y-6">
              <div>
                <InputLabel>الاسم الكامل</InputLabel>
                <TextInput type="text" value={formData.name} onChange={handleChange('name')} />
              </div>

              <div>
                <InputLabel>البريد الإلكتروني</InputLabel>
                <TextInput type="email" value={formData.email} onChange={handleChange('email')} />
              </div>

              <div>
                <InputLabel>رقم الهوية او الجواز</InputLabel>
                <TextInput type="text" value={formData.nationalId} onChange={handleChange('nationalId')} />
              </div>

              <div>
                <InputLabel>رقم هاتف الجوال</InputLabel>
                <PhoneField phone={formData.phone} onPhoneChange={(value) => setFormData((current) => ({ ...current, phone: value }))} />
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:mt-7 lg:grid-cols-2 lg:gap-x-[24px]">
              <button
                type="submit"
                className="flex h-[50px] items-center justify-center rounded-[14px] bg-[#1560d4] px-8 text-[17px] font-extrabold text-white transition hover:bg-[#114ea7] sm:h-[54px] lg:h-[56px] lg:text-[20px]"
              >
                حفظ التعديلات
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-[50px] items-center justify-center rounded-[14px] border-2 border-[#1560d4] bg-white px-8 text-[17px] font-extrabold text-[#1560d4] transition hover:bg-[#f5f9ff] sm:h-[54px] lg:h-[56px] lg:text-[20px]"
              >
                إلغاء
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileEditModal;
