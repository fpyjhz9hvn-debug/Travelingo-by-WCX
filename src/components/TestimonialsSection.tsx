import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#FAF9F5] border-t border-[#E5E2D8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-12 sm:mb-16 max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666666] font-['Epilogue']">
            What Our Travelers Are Saying About Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-['Epilogue'] leading-tight text-balance">
            Reviews and feedback from real Travelingo clients
          </h2>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="bg-white rounded-3xl border border-[#E5E2D8] p-8 sm:p-12 shadow-[0_12px_36px_rgba(0,0,0,0.04)] mb-12 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Star Rating */}
              <div className="flex text-amber-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full border border-[#E5E2D8] flex items-center justify-center text-black hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-neutral-400 px-1">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-[#E5E2D8] flex items-center justify-center text-black hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-lg md:text-xl font-medium text-[#111111] leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Author Meta */}
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm font-['Epilogue'] shadow-xs">
                {current.avatarInitials}
              </div>
              <div className="text-left">
                <div className="font-bold text-base text-black font-['Epilogue']">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-[#666666]">
                  {current.trip}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Reviews Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                currentIndex === idx
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-neutral-800 border-[#E5E2D8] hover:border-black/30'
              }`}
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      currentIndex === idx ? 'fill-amber-400 text-amber-400' : 'fill-amber-500 text-amber-500'
                    }`}
                  />
                ))}
              </div>
              <p
                className={`text-xs line-clamp-2 leading-relaxed mb-3 ${
                  currentIndex === idx ? 'text-neutral-200' : 'text-neutral-600'
                }`}
              >
                "{t.quote}"
              </p>
              <div className="font-bold text-xs font-['Epilogue']">
                {t.author}
              </div>
              <div
                className={`text-[11px] truncate ${
                  currentIndex === idx ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {t.trip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
