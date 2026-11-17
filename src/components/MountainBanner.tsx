import React from 'react';
import { ArrowRight, Mountain } from 'lucide-react';

interface MountainBannerProps {
  onBookNow: () => void;
}

export const MountainBanner: React.FC<MountainBannerProps> = ({ onBookNow }) => {
  return (
    <section className="py-8 px-4 sm:px-8 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl text-white text-center py-16 sm:py-24 px-6 sm:px-12 border border-white/10">
          {/* Background Photography with Dark Contrast Scrim */}
          <img
            src="/images/banner-mountains.png"
            alt="Backpacker gazing across alpine mountains and misty valleys"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.48]"
            loading="lazy"
          />

          {/* Content Lockup */}
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-neutral-300 font-['Epilogue']">
              <Mountain className="w-4 h-4 text-white" />
              <span>Let Us Take You There</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Epilogue'] tracking-tight leading-tight text-white text-balance">
              Ready for Your Next Adventure?
            </h2>

            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-normal">
              Join the thousands of happy travelers who have booked their dream vacations with us. Customized itineraries, 24/7 care, zero stress.
            </p>

            <div className="pt-3">
              <button
                onClick={onBookNow}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-xs sm:text-sm font-bold rounded-full shadow-lg hover:bg-neutral-100 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Book Your Trip Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
