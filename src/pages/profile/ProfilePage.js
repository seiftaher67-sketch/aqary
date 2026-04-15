import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { clearStoredUser, getStoredUser, storeUser } from '../../utils/auth';
import ProfileEditModal from './ProfileEditModal';
import { ReviewFormModal, ReviewThankYouModal } from './ReviewModal';
import {
  bookingFilters,
  favoriteProperties,
  paymentRecords,
  profileBookings,
  profileMenuItems,
  settingsRows,
} from './profileData';

function UserCircleIcon({ className = 'h-5 w-5' }) {
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

function PencilSquareIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L9.91 16.803a4.5 4.5 0 0 1-1.897 1.13l-2.685.805a.75.75 0 0 1-.932-.932l.805-2.685a4.5 4.5 0 0 1 1.13-1.897L16.862 3.487Z" />
      <path d="M18 14.25a.75.75 0 0 1 .75.75v3A2.25 2.25 0 0 1 16.5 20.25h-10.5A2.25 2.25 0 0 1 3.75 18V7.5A2.25 2.25 0 0 1 6 5.25h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

function CameraIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9 4.5a1.5 1.5 0 0 0-1.248.668L6.951 6.375H5.25A2.25 2.25 0 0 0 3 8.625v8.25a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 16.875v-8.25a2.25 2.25 0 0 0-2.25-2.25h-1.701l-.8-1.207A1.5 1.5 0 0 0 15 4.5H9Z" />
      <path d="M12 9a3.375 3.375 0 1 0 0 6.75A3.375 3.375 0 0 0 12 9Z" />
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

function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h2.154a2.25 2.25 0 0 1 2.193 1.75l.407 1.83a2.25 2.25 0 0 1-.96 2.388l-1.286.858a12.042 12.042 0 0 0 5.916 5.916l.858-1.286a2.25 2.25 0 0 1 2.388-.96l1.83.407a2.25 2.25 0 0 1 1.75 2.193V19.5a2.25 2.25 0 0 1-2.25 2.25h-.75C9.066 21.75 2.25 14.934 2.25 6.75V6a2.25 2.25 0 0 1 2.25-2.25Z" />
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

function MapPinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M11.54 22.351a.75.75 0 0 0 .92 0C17.19 18.569 21 13.89 21 9a9 9 0 1 0-18 0c0 4.89 3.81 9.569 8.54 13.351ZM12 12.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CalendarDaysIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M6.75 2.25A.75.75 0 0 1 7.5 3v.75h9V3a.75.75 0 0 1 1.5 0v.75h.75A2.25 2.25 0 0 1 21 6v12.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V6a2.25 2.25 0 0 1 2.25-2.25H6V3a.75.75 0 0 1 .75-.75Zm-2.25 7.5v9a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-9h-15Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BookmarkSquareIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v14.643c0 .822.936 1.294 1.598.806L12 16.214l5.902 4.485a.75.75 0 0 0 1.598-.806V5.25A2.25 2.25 0 0 0 17.25 3H6.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Cog6ToothIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M11.49 3.17a.75.75 0 0 1 1.02 0l.58.527a1.5 1.5 0 0 0 1.393.31l.764-.208a.75.75 0 0 1 .9.45l.31.75a1.5 1.5 0 0 0 1.112.91l.8.145a.75.75 0 0 1 .62.81l-.072.807a1.5 1.5 0 0 0 .487 1.34l.596.55a.75.75 0 0 1 0 1.018l-.596.55a1.5 1.5 0 0 0-.487 1.34l.072.807a.75.75 0 0 1-.62.81l-.8.145a1.5 1.5 0 0 0-1.112.91l-.31.75a.75.75 0 0 1-.9.45l-.764-.208a1.5 1.5 0 0 0-1.393.31l-.58.527a.75.75 0 0 1-1.02 0l-.58-.527a1.5 1.5 0 0 0-1.393-.31l-.764.208a.75.75 0 0 1-.9-.45l-.31-.75a1.5 1.5 0 0 0-1.112-.91l-.8-.145a.75.75 0 0 1-.62-.81l.072-.807a1.5 1.5 0 0 0-.487-1.34l-.596-.55a.75.75 0 0 1 0-1.018l.596-.55a1.5 1.5 0 0 0 .487-1.34l-.072-.807a.75.75 0 0 1 .62-.81l.8-.145a1.5 1.5 0 0 0 1.112-.91l.31-.75a.75.75 0 0 1 .9-.45l.764.208a1.5 1.5 0 0 0 1.393-.31l.58-.527ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowLeftOnRectangleIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M7.5 3.75A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h6A2.25 2.25 0 0 0 15.75 18V15a.75.75 0 0 0-1.5 0v3a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0V6A2.25 2.25 0 0 0 13.5 3.75h-6Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M21 12a.75.75 0 0 0-.75-.75h-9.19l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h9.19A.75.75 0 0 0 21 12Z"
        clipRule="evenodd"
      />
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

function BellIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M5.25 9a6.75 6.75 0 1 1 13.5 0v3.879c0 1.126.448 2.205 1.245 3.002l.33.33a.75.75 0 0 1-.53 1.28H4.205a.75.75 0 0 1-.53-1.28l.33-.33A4.243 4.243 0 0 0 5.25 12.88V9ZM9 18.75a3 3 0 1 0 6 0H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MoonIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 0 1 .162.819 8.25 8.25 0 0 0 11.772 10.62.75.75 0 0 1 1.006.985A9.75 9.75 0 1 1 8.543 1.057a.75.75 0 0 1 .985.661Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronLeftIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M15.78 5.47a.75.75 0 0 1 0 1.06L10.31 12l5.47 5.47a.75.75 0 0 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BuildingOffice2Icon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M3.75 2.25A2.25 2.25 0 0 0 1.5 4.5v15A2.25 2.25 0 0 0 3.75 21.75H9V16.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v5.25h5.25a2.25 2.25 0 0 0 2.25-2.25V8.56a2.25 2.25 0 0 0-.659-1.591l-4.81-4.81A2.25 2.25 0 0 0 15.44 1.5H3.75Zm3.75 4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm6-7.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HeartIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.522 3 7.432 3c1.849 0 3.49.936 4.568 2.36C13.078 3.936 14.719 3 16.568 3 19.478 3 21.75 5.322 21.75 8.25c0 3.924-2.438 7.11-4.739 9.257a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.218l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  );
}

function ReceiptPercentIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M7.5 3.75A2.25 2.25 0 0 0 5.25 6v12.75a.75.75 0 0 0 1.28.53l1.72-1.72 1.72 1.72a.75.75 0 0 0 1.06 0l1.72-1.72 1.72 1.72a.75.75 0 0 0 1.28-.53V6A2.25 2.25 0 0 0 15 3.75H7.5Zm6 3.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 .75-.75Zm-3 6a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0v-.008a.75.75 0 0 1 .75-.75Zm2.03-5.47a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.627 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HomeModernIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M2.25 10.5 12 3l9.75 7.5v9A1.5 1.5 0 0 1 20.25 21h-4.5a.75.75 0 0 1-.75-.75V15a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 15v5.25a.75.75 0 0 1-.75.75h-4.5a1.5 1.5 0 0 1-1.5-1.5v-9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ForwardIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M12.97 4.97a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 1 1-1.06-1.06l4.97-4.97H4.25a.75.75 0 0 1 0-1.5h13.69l-4.97-4.97a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const menuIcons = {
  bookings: BookmarkSquareIcon,
  favorites: HeartIcon,
  payments: ReceiptPercentIcon,
  settings: Cog6ToothIcon,
};

const statusStyles = {
  جاري: { badge: 'bg-[#dcfce7] text-[#1d7f45]', button: 'bg-[#155fcb] text-white hover:bg-[#114ea7]', label: 'إلغاء الحجز' },
  مكتمل: { badge: 'bg-[#e8f1ff] text-[#155fcb]', button: 'bg-[#f59e0b] text-white hover:bg-[#d88a05]', label: 'اترك تقييمًا' },
  ملغي: { badge: 'bg-[#ffe4e6] text-[#d14343]', button: 'bg-[#1f315f] text-white hover:bg-[#162548]', label: 'إعادة الحجز' },
};

function getSectionFromHash() {
  if (typeof window === 'undefined') {
    return 'bookings';
  }

  const hash = window.location.hash || '#profile/bookings';
  const section = hash.replace('#profile/', '');
  return profileMenuItems.some((item) => item.id === section) ? section : 'bookings';
}

function InfoField({ icon, label, value }) {
  return (
    <div className="min-w-0 text-right">
      <p className="mb-4 text-[18px] font-medium text-[#9c9c9c]">{label}</p>
      <div className="flex items-center justify-end gap-3 text-[#155fcb]">
        {icon}
        <p className="truncate text-[18px] font-extrabold text-[#111827]">{value}</p>
      </div>
    </div>
  );
}

function SidebarItem({ item, currentSection }) {
  const Icon = menuIcons[item.id];
  const isActive = currentSection === item.id;

  return (
    <a
      href={`#profile/${item.id}`}
      className={`flex items-center justify-between border-b border-[#edf2f9] px-5 py-6 text-right transition last:border-b-0 ${
        isActive ? 'bg-[#f7fbff] text-[#155fcb]' : 'bg-white text-[#202938] hover:bg-[#f8fbff]'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-[15px] font-bold">{item.label}</span>
    </a>
  );
}

function BookingCard({ booking, onOpenReview }) {
  const styles = statusStyles[booking.bookingStatus];
  const canReview = styles.label === 'اترك تقييمًا';

  return (
    <article className="overflow-hidden rounded-[24px] border border-[#dfe8f5] bg-white shadow-[0_14px_30px_rgba(18,55,118,0.08)]">
      <div className="relative p-3 pb-0">
        <img src={booking.image} alt={booking.title} className="h-[190px] w-full rounded-[18px] object-cover" />
        <div className="absolute inset-x-6 top-5 flex items-center justify-between">
          <span className="rounded-full bg-[#d6f7dd] px-3 py-1 text-[10px] font-bold text-[#2f9a55]">{booking.availability}</span>
          <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#5f708d] shadow-sm">{booking.furnishing}</span>
        </div>
      </div>

      <div className="space-y-4 p-4 text-right">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[#eef4fb] px-3 py-1 text-[11px] font-bold text-[#155fcb]">{booking.period}</span>
          <span className="text-[12px] font-semibold text-[#7a8dad]">{booking.category}</span>
        </div>

        <div>
          <h3 className="text-[18px] font-extrabold text-[#223152]">{booking.title}</h3>
          <p className="mt-1 text-sm text-[#7f8ea8]">{booking.location}</p>
        </div>

        <div className="rounded-[18px] bg-[#f7faff] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${styles.badge}`}>{booking.bookingStatus}</span>
            <span className="text-[12px] font-semibold text-[#8da0bc]">حالة الحجز</span>
          </div>

          <div className="space-y-3 text-[13px] text-[#5b6f92]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#155fcb]">
                <BookmarkSquareIcon className="h-4 w-4" />
                <span className="font-bold">{booking.bookingNumber}</span>
              </div>
              <span>رقم الحجز</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#155fcb]">
                <CalendarDaysIcon className="h-4 w-4" />
                <span className="font-bold">{booking.bookingDate}</span>
              </div>
              <span>تاريخ الحجز</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3 border-t border-[#edf2f9] pt-4">
          <button
            type="button"
            onClick={() => {
              if (canReview && onOpenReview) {
                onOpenReview(booking);
              }
            }}
            className={`rounded-[12px] px-4 py-3 text-sm font-bold transition ${styles.button}`}
          >
            {styles.label}
          </button>
          <div className="text-right">
            <p className="text-[12px] text-[#91a1bc]">الإجمالي</p>
            <p className="text-[24px] font-extrabold leading-none text-[#155fcb]">
              {booking.total}
              <span className="mr-1 text-sm font-bold">ريال</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function FavoriteCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-[#dfe8f5] bg-white shadow-[0_14px_30px_rgba(18,55,118,0.08)]">
      <div className="relative p-3 pb-0">
        <img src={item.image} alt={item.title} className="h-[190px] w-full rounded-[18px] object-cover" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#155fcb] shadow-sm"
          >
            <HeartIcon className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#d6f7dd] px-3 py-1 text-[10px] font-bold text-[#2f9a55]">{item.status}</span>
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#5f708d] shadow-sm">{item.type}</span>
          </div>
        </div>
      </div>

      <div className="p-4 text-right">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold text-[#8da0bc]">{item.subtitle}</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: item.stars }).map((_, index) => (
              <StarIcon key={index} className="h-4 w-4 text-[#fbbf24]" />
            ))}
            <span className="ml-1 text-[12px] font-bold text-[#4b5f82]">{item.rating}</span>
          </div>
        </div>

        <h3 className="mt-2 text-[18px] font-extrabold text-[#223152]">{item.title}</h3>
        <p className="mt-1 text-sm text-[#7f8ea8]">{item.location}</p>

        <div className="mt-4 flex items-end justify-between border-b border-[#edf2f9] pb-4">
          <div className="text-right">
            <p className="text-[11px] text-[#93a2ba]">{item.period}</p>
            <p className="text-[28px] font-extrabold leading-none text-[#155fcb]">
              {item.price}
              <span className="mr-1 text-sm font-bold text-[#155fcb]">ريال</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#93a2ba]">السعر يبدأ من</p>
            <p className="text-xs text-[#93a2ba]">يشمل رسوم الخدمة</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-[#7a8dad]">
          <div className="flex items-center gap-1">
            <HomeModernIcon className="h-4 w-4 text-[#155fcb]" />
            <span>{item.bedrooms} غرف</span>
          </div>
          <div className="flex items-center gap-1">
            <BookmarkSquareIcon className="h-4 w-4 text-[#155fcb]" />
            <span>{item.bathrooms} حمامات</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-4 w-4 text-[#155fcb]" />
            <span>{item.area} المساحة</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 flex h-10 w-full items-center justify-between rounded-[10px] bg-[#155fcb] px-4 text-sm font-bold text-white transition hover:bg-[#114ea7]"
        >
          <ForwardIcon className="h-4 w-4" />
          <span>اعرف التفاصيل</span>
        </button>
      </div>
    </article>
  );
}

function PaymentsSection() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#dfe8f5] bg-white shadow-[0_14px_30px_rgba(18,55,118,0.06)]">
      <div className="hidden grid-cols-[0.9fr_1.4fr_1.1fr_1fr_1fr_0.9fr_1fr] gap-4 border-b border-[#edf2f9] bg-[#f9fbff] px-6 py-5 text-right text-[13px] font-bold text-[#6d7f9d] md:grid">
        <div>الإيصال</div>
        <div>الحالة</div>
        <div>المبلغ</div>
        <div>طريقة الدفع</div>
        <div>تاريخ الدفع</div>
        <div>اسم العقار</div>
        <div>رقم العملية</div>
      </div>

      <div>
        {paymentRecords.map((payment) => (
          <div
            key={`${payment.id}-${payment.title}`}
            className="border-b border-[#edf2f9] px-5 py-4 last:border-b-0"
          >
            <div className="hidden grid-cols-[0.9fr_1.4fr_1.1fr_1fr_1fr_0.9fr_1fr] items-center gap-4 md:grid">
              <button type="button" className="text-right text-[13px] font-semibold text-[#2b77db] hover:underline">
                {payment.invoiceLabel}
              </button>

              <div className="flex justify-end">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
                    payment.status === 'ناجحة'
                      ? 'bg-[#dcfce7] text-[#1d7f45]'
                      : 'bg-[#ffe4e6] text-[#d14343]'
                  }`}
                >
                  <span className="ml-1 h-2 w-2 rounded-full bg-current" />
                  {payment.status}
                </span>
              </div>

              <div className="text-right text-[13px] font-semibold text-[#3b4f73]">{payment.amount} ريال</div>

              <div className="flex justify-end">
                <img src={payment.methodImage} alt={payment.methodAlt} className="h-7 w-auto object-contain" />
              </div>

              <div className="text-right text-[13px] font-semibold text-[#3b4f73]">{payment.date}</div>
              <div className="text-right text-[13px] font-semibold text-[#3b4f73]">{payment.title}</div>
              <div className="text-right text-[13px] font-semibold text-[#3b4f73]">{payment.id}</div>
            </div>

            <div className="space-y-3 text-right md:hidden">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8da0bc]">رقم العملية</span>
                <span className="font-bold text-[#223152]">{payment.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8da0bc]">اسم العقار</span>
                <span className="font-bold text-[#223152]">{payment.title}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8da0bc]">تاريخ الدفع</span>
                <span className="font-bold text-[#223152]">{payment.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8da0bc]">طريقة الدفع</span>
                <img src={payment.methodImage} alt={payment.methodAlt} className="h-7 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8da0bc]">المبلغ</span>
                <span className="font-bold text-[#223152]">{payment.amount} ريال</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8da0bc]">الحالة</span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
                    payment.status === 'ناجحة'
                      ? 'bg-[#dcfce7] text-[#1d7f45]'
                      : 'bg-[#ffe4e6] text-[#d14343]'
                  }`}
                >
                  <span className="ml-1 h-2 w-2 rounded-full bg-current" />
                  {payment.status}
                </span>
              </div>
              <button type="button" className="text-[13px] font-semibold text-[#2b77db] hover:underline">
                {payment.invoiceLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsSection() {
  const rowIcons = {
    password: LockClosedIcon,
    notifications: BellIcon,
    dark_mode: MoonIcon,
  };

  return (
    <div className="space-y-4">
      {settingsRows.map((row) => {
        const Icon = rowIcons[row.id];

        return (
          <div
            key={row.id}
            className="flex items-center justify-between rounded-[18px] border border-[#e6edf8] bg-white px-4 py-5 shadow-[0_8px_20px_rgba(18,55,118,0.06)]"
          >
            {row.type === 'action' ? (
              <button type="button" className="text-[#2b77db]">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
            ) : (
              <button
                type="button"
                className="relative h-7 w-12 rounded-full bg-[#d9d9d9] transition"
              >
                <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm" />
              </button>
            )}

            <div className="flex items-center gap-3 text-right">
              <span className="text-[16px] font-bold text-[#223152]">{row.label}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#eef4ff] text-[#155fcb]">
                <Icon className="h-5 w-5" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-5 text-right">
      <h2 className="text-[24px] font-extrabold text-[#223152]">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-[#7f8ea8]">{description}</p>
    </div>
  );
}

function ProfilePage() {
  const [user, setUser] = useState(() => getStoredUser());
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBookingForReview, setSelectedBookingForReview] = useState(null);
  const [isReviewThankYouOpen, setIsReviewThankYouOpen] = useState(false);
  const currentSection = getSectionFromHash();

  if (!user) {
    return null;
  }

  const handleSaveProfile = (updatedUser) => {
    storeUser(updatedUser);
    setUser(updatedUser);
    setIsEditModalOpen(false);
  };

  const handleOpenReview = (booking) => {
    setSelectedBookingForReview(booking);
  };

  const handleCloseReview = () => {
    setSelectedBookingForReview(null);
  };

  const handleSubmitReview = () => {
    setSelectedBookingForReview(null);
    setIsReviewThankYouOpen(true);
  };

  const renderContent = () => {
    if (currentSection === 'favorites') {
      return (
        <>
          <SectionHeader title="المفضلة" description="الوحدات التي قمت بحفظها للرجوع إليها لاحقًا ومقارنتها بسهولة." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {favoriteProperties.map((item) => <FavoriteCard key={item.id} item={item} />)}
          </div>
        </>
      );
    }

    if (currentSection === 'payments') {
      return (
        <>
          <SectionHeader title="سجل المدفوعات" description="استعرض آخر عمليات الدفع والاسترداد والحالات المالية المرتبطة بحجوزاتك." />
          <PaymentsSection />
        </>
      );
    }

    if (currentSection === 'settings') {
      return (
        <>
          <SectionHeader title="الإعدادات" description="" />
          <SettingsSection />
        </>
      );
    }

    return (
      <>
        <SectionHeader title="الحجوزات" description="كل حجوزاتك الحالية والسابقة مع حالة كل حجز والإجراء المناسب له." />
        <div className="mb-5 flex flex-wrap items-center justify-end gap-2">
          {bookingFilters.map((filter, index) => (
            <button key={filter.id} type="button" className={`rounded-full px-5 py-2 text-sm font-bold transition ${index === 0 ? 'bg-[#155fcb] text-white shadow-[0_10px_18px_rgba(21,95,203,0.22)]' : 'bg-white text-[#5c6f8f] shadow-[0_8px_22px_rgba(18,55,118,0.05)]'}`}>
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {profileBookings.map((booking) => <BookingCard key={booking.id} booking={booking} onOpenReview={handleOpenReview} />)}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f8fd]" >
      <Navbar currentPage="profile" />
      <main className="pb-16 pt-8" dir="ltr">
        <div className="mx-auto max-w-[1380px] px-5 lg:px-8">
          <section className="mb-6 rounded-[30px] bg-white px-5 py-6 shadow-[0_14px_40px_rgba(18,55,118,0.06)] lg:px-7">
            <div className="mb-10 flex flex-col-reverse gap-5 lg:flex-row lg:items-center lg:justify-between">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(true)}
                className="flex h-[62px] items-center justify-center gap-3 self-start rounded-[12px] bg-[#155fcb] px-7 text-[16px] font-extrabold text-white transition hover:bg-[#114ea7]"
              >
                <PencilSquareIcon className="h-6 w-6" />
                <span>تعديل الملف الشخصي</span>
              </button>

              <div className="flex items-center justify-end gap-3 text-right">
                <UserCircleIcon className="h-8 w-8 text-[#155fcb]" />
                <h1 className="text-[28px] font-extrabold text-[#111827] lg:text-[32px]">بيانات المستخدم</h1>
              </div>
            </div>

            <div className="flex flex-col items-end gap-8 lg:flex-row-reverse lg:items-center lg:justify-end lg:gap-10">
              <div className="flex flex-col items-end gap-6 lg:flex-row-reverse lg:items-center">
                <div className="relative flex-shrink-0">
                  <img src={user.avatar} alt={user.name} className="h-[170px] w-[170px] rounded-full border-[4px] border-[#1560d4] object-cover" />
                  <span className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-full border-[4px] border-white bg-[#155fcb] text-white">
                    <CameraIcon className="h-5 w-5" />
                  </span>
                </div>

                <div className="min-w-[220px]">
                  <InfoField icon={<UserCircleIcon className="h-5 w-5" />} label="الاسم الكامل" value={user.name} />
                </div>
              </div>

              <div className="grid w-full justify-items-end gap-x-10 gap-y-8 text-right sm:grid-cols-2 xl:grid-cols-3 lg:flex-1">
                <InfoField icon={<EnvelopeIcon className="h-5 w-5" />} label="البريد الإلكتروني" value={user.email} />
                <InfoField icon={<PhoneIcon className="h-5 w-5" />} label="رقم الجوال" value={user.phone} />
                <InfoField icon={<IdentificationIcon className="h-5 w-5" />} label="رقم الهوية" value={user.nationalId} />
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-start">

            <aside className="w-full lg:w-[300px] lg:flex-shrink-0">
              <div className="overflow-hidden rounded-[28px] border border-[#155fcb] bg-white shadow-[0_14px_30px_rgba(18,55,118,0.06)]">
                <div className="space-y-0 p-0">
                  {profileMenuItems.map((item) => <SidebarItem key={item.id} item={item} currentSection={currentSection} />)}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    clearStoredUser();
                    window.location.hash = '#home';
                  }}
                  className="flex w-full items-center justify-between border-t border-[#edf2f9] px-5 py-6 text-[#1f315f] transition hover:bg-[#f8fbff]"
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  <span className="text-[15px] font-bold">تسجيل الخروج</span>
                </button>
              </div>
            </aside>

            <section className="min-w-0 flex-1">{renderContent()}</section>
          </div>
        </div>
      </main>
      <ProfileEditModal
        isOpen={isEditModalOpen}
        user={user}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveProfile}
      />
      <ReviewFormModal
        isOpen={Boolean(selectedBookingForReview)}
        booking={selectedBookingForReview}
        onClose={handleCloseReview}
        onSubmit={handleSubmitReview}
      />
      <ReviewThankYouModal
        isOpen={isReviewThankYouOpen}
        onClose={() => setIsReviewThankYouOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default ProfilePage;
