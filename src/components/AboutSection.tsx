import React from 'react';
import { ArrowRight, CheckCircle2, HeartHandshake, Compass, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const highlights = [
    'Handpicked boutique & luxury stays with VIP perks',
    'Dedicated personal travel designer assigned to every journey',
    '24/7 on-call concierge assistance throughout your travels',
    'Flexible booking guarantees with zero hidden surcharges',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#FAF9F5] border-t border-[#E5E2D8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-[#666666] uppercase font-['Epilogue']">
              <span>Who We Are & Why We Love Travel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] font-['Epilogue'] leading-tight text-balance">
              Passionate planners helping travelers explore the world their way
            </h2>

            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              At Travelingo, we are dedicated to making your travel dreams come true with tailored itineraries, exceptional personal service, and unforgettable global experiences.
            </p>

            <div className="space-y-3 pt-1">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1B1C1C] font-medium leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#222222] active:scale-95 transition shadow-sm cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#666666] font-medium">
                <Compass className="w-4 h-4 text-black" />
                <span>150+ Global Destinations</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Feature Image with Badges */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-[#E5E2D8] bg-white group">
                <img
                  src="/images/about-travelers.png"
                  alt="Happy travelers taking a selfie together amidst scenic green nature"
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-2 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#E5E2D8] p-4 sm:p-5 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F4EC] flex items-center justify-center text-black">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-black font-['Epilogue']">99.4%</div>
                    <div className="text-xs text-[#666666]">Client Delight Score</div>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-black text-white px-4 py-2.5 rounded-2xl shadow-lg items-center gap-2 text-xs font-semibold font-['Epilogue']">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>12+ Years Curation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
