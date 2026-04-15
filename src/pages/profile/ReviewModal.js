import { useEffect, useState } from 'react';

function StarIcon({ filled = false, className = 'h-12 w-12' }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.386a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0l-4.725 2.886a.562.562 0 0 1-.84-.61l1.285-5.387a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.11Z"
      />
    </svg>
  );
}

function ReviewFormModal({ isOpen, booking, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setRating(0);
    setComment('');

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

  if (!isOpen || !booking) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!rating) {
      return;
    }

    onSubmit({
      bookingId: booking.id,
      rating,
      comment: comment.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-[rgba(17,24,39,0.6)] px-4 py-6" onClick={onClose}>
      <div
        className="w-full max-w-[900px] rounded-[28px] border-[3px] border-[#1560d4] bg-white px-6 py-8 shadow-[0_30px_90px_rgba(8,20,46,0.28)] sm:px-8 lg:px-[36px] lg:py-[40px]"
        onClick={(event) => event.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <div className="mx-auto max-w-[740px]">
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold text-[#111111] sm:text-[36px] lg:text-[44px]">اترك تقييمك</h2>
              <p className="mt-4 text-[16px] font-medium text-[#a1a1aa] sm:text-[21px] lg:text-[26px]">
                نقدّر وقتك، شاركنا رأيك لتساعدنا في تحسين تجربتك القادمة.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 lg:mt-10 lg:gap-5">
              {Array.from({ length: 5 }).map((_, index) => {
                const value = index + 1;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`transition ${rating >= value ? 'scale-105 text-[#f4c542]' : 'text-[#cfcfd3] hover:text-[#bfc0c6]'}`}
                    aria-label={`تقييم ${value} من 5`}
                  >
                    <StarIcon filled={rating >= value} className="h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] lg:h-[56px] lg:w-[56px]" />
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-center text-[18px] font-medium text-[#9c9ca3] sm:text-[23px] lg:text-[30px]">
              ما مدى رضاك عن تجربتك معنا؟
            </p>

            <div className="mt-7 lg:mt-8">
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="اكتب رأيك أو ملاحظاتك حول تجربتك"
                className="h-[165px] w-full resize-none rounded-[20px] border border-[#dde3ee] bg-white px-5 py-4 text-right text-[16px] text-[#111827] outline-none placeholder:text-[#adadb4] shadow-[0_8px_18px_rgba(15,23,42,0.03)] focus:border-[#1560d4] sm:h-[185px] lg:h-[210px] lg:text-[18px]"
              />
            </div>

            <div className="mt-7 grid gap-4 lg:mt-8 lg:grid-cols-2 lg:gap-x-[32px]">
              <button
                type="submit"
                disabled={!rating}
                className="flex h-[54px] items-center justify-center rounded-[14px] bg-[#1560d4] px-8 text-[18px] font-extrabold text-white transition hover:bg-[#114ea7] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[60px] lg:h-[62px] lg:text-[22px]"
              >
                إرسال التقييم
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex h-[54px] items-center justify-center rounded-[14px] border-2 border-[#1560d4] bg-white px-8 text-[18px] font-extrabold text-[#1560d4] transition hover:bg-[#f5f9ff] sm:h-[60px] lg:h-[62px] lg:text-[22px]"
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

function ReviewThankYouModal({ isOpen, onClose }) {
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
    <div className="fixed inset-0 z-[140] flex items-center justify-center bg-[rgba(17,24,39,0.6)] px-4 py-6" onClick={onClose}>
      <div
        className="w-full max-w-[900px] rounded-[28px] bg-[radial-gradient(circle_at_top,_#e8f1ff_0%,_#ffffff_48%,_#ffffff_100%)] px-6 py-8 shadow-[0_24px_50px_rgba(0,0,0,0.22)] sm:px-8 lg:px-[36px] lg:py-[40px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto max-w-[740px] text-center">
          <img src="/image/31.png" alt="شكرا لتقييمك" className="mx-auto h-[92px] w-[92px] object-contain sm:h-[116px] sm:w-[116px] lg:h-[140px] lg:w-[140px]" />

          <h2 className="mt-7 text-[28px] font-extrabold text-[#1560d4] sm:text-[36px] lg:text-[44px]">شكرًا لتقييمك!</h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-[1.9] text-[#3b3b41] sm:text-[20px] lg:text-[24px]">
            نقدّر وقتك ومشاركتك لرأيك معنا في Homezy. ملاحظاتك تساعدنا على تحسين خدماتنا وتقديم تجربة إيجار أفضل لك دائمًا.
          </p>

          <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.9] text-[#4a4a51] sm:text-[20px] lg:text-[24px]">
            شكرًا لثقتك بنا، ونتطلع لخدمتك مرة أخرى قريبًا!
          </p>
        </div>
      </div>
    </div>
  );
}

export { ReviewFormModal, ReviewThankYouModal };
