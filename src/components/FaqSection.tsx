import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FAQS } from '../data/travelData';

export const FaqSection: React.FC = () => {
  // First item open by default as in reference
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-5 sm:px-8 bg-white border-t border-[#E5E2D8]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666666] font-['Epilogue']">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-['Epilogue'] leading-tight text-balance">
            Get clarity before booking your next adventure
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Find answers to common questions regarding bookings, itineraries, and on-trip concierge services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="bg-[#FAF9F5] border border-[#E5E2D8] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#111111] font-['Epilogue']">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white border border-[#E5E2D8] flex items-center justify-center text-black shrink-0 transition-transform">
                    {isOpen ? (
                      <X className="w-4 h-4 text-black" />
                    ) : (
                      <Plus className="w-4 h-4 text-black" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E5E2D8]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
