import React from 'react';
import { PROCESS_STEPS } from '../data/travelData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-[#FAF9F5] border-t border-[#E5E2D8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-12 sm:mb-16 max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666666] font-['Epilogue']">
            How We Make Your Travel Dreams Come True
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-['Epilogue'] leading-tight text-balance">
            Our simple step-by-step process for booking perfect trips
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
            From planning to booking, our simple steps ensure your dream trip is just a few clicks away.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-7 bg-white rounded-2xl border border-[#E5E2D8] shadow-xs flex flex-col items-center text-center hover:border-black/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-base font-['Epilogue'] mb-4 shadow-xs">
                {step.number}
              </div>

              <h3 className="font-bold text-base sm:text-lg text-[#111111] mb-2 font-['Epilogue']">
                {step.title}
              </h3>

              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
