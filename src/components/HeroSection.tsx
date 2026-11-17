import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney }) => {
  // Define words for line 1 and line 2 so layout stays responsive without breaking words
  const line1Words = ['Explore', 'The', 'World'];
  const line2Words = ['With', 'Travelingo'];

  // Calculate cumulative character indices so the stagger flows seamlessly across each letter
  let cumulativeCount = 0;
  const line1WithIndices = line1Words.map((word) => {
    const letters = word.split('').map((char) => ({
      char,
      index: cumulativeCount++,
    }));
    return { word, letters };
  });

  const line2WithIndices = line2Words.map((word) => {
    const letters = word.split('').map((char) => ({
      char,
      index: cumulativeCount++,
    }));
    return { word, letters };
  });

  return (
    <section id="top" className="relative min-h-[580px] lg:min-h-[700px] w-full bg-[#F4F0E8] overflow-hidden">
      {/* Background Organic Wave Divider (matching screenshot curve from mid-left sweeping under family to right) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-[55%] sm:h-[60%] lg:h-[65%] object-cover preserve-3d"
          viewBox="0 0 1440 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 240C280 240 480 390 740 330C1000 270 1200 170 1440 200V480H0V240Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-8 lg:pt-14 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline, Subtitle, CTA, Social Proof */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          {/* Animated 2-Line Headline with Each Letter Falling in Smoothly in Flow */}
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-black tracking-[-0.03em] leading-[1.08] font-['Epilogue'] select-none">
              {/* Line 1: Explore The World */}
              <span className="block">
                {line1WithIndices.map(({ word, letters }, wIdx) => (
                  <span key={`l1-w-${wIdx}`} className="inline-block whitespace-nowrap mr-3 sm:mr-4">
                    {letters.map(({ char, index }) => (
                      <motion.span
                        key={`l1-c-${index}`}
                        initial={{ opacity: 0, y: -26, filter: 'blur(3px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                          duration: 0.65,
                          delay: 0.1 + index * 0.032,
                          ease: 'easeOut',
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>

              {/* Line 2: With Travelingo */}
              <span className="block mt-1 sm:mt-2">
                {line2WithIndices.map(({ word, letters }, wIdx) => (
                  <span key={`l2-w-${wIdx}`} className="inline-block whitespace-nowrap mr-3 sm:mr-4">
                    {letters.map(({ char, index }) => (
                      <motion.span
                        key={`l2-c-${index}`}
                        initial={{ opacity: 0, y: -26, filter: 'blur(3px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                          duration: 0.65,
                          delay: 0.1 + index * 0.032,
                          ease: 'easeOut',
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="text-[#555555] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl"
          >
            Embark on the adventure of a lifetime with our personalized travel packages tailored to your needs and dreams.
          </motion.p>

          {/* Black CTA Button (matching screenshot rectangular button with slight rounding) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.82, ease: 'easeOut' }}
          >
            <button
              onClick={onStartJourney}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm sm:text-base font-bold rounded-sm shadow-md hover:bg-neutral-800 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Start Your Journey
            </button>
          </motion.div>

          {/* Customer Rating / Social Proof Row (3 Avatars + 5 Solid Black Stars + 38,456 Happy Customers.) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: 'easeOut' }}
            className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* 3 Circular Avatars Stack */}
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white overflow-hidden bg-neutral-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white overflow-hidden bg-neutral-300">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-white overflow-hidden bg-neutral-300">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Stars and Count */}
            <div className="flex flex-col items-start space-y-0.5">
              <div className="flex text-black space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <span className="text-sm font-semibold text-black tracking-tight">
                38,456 Happy Customers.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Family with Suitcases Cutout with Ground Contact Shadow */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]"
          >
            {/* Cutout Family Image */}
            <img
              src="/images/hero-family.png"
              alt="Happy family travelers with colorful suitcases"
              className="w-full h-auto object-contain relative z-10"
              loading="eager"
            />
            {/* Soft Floor Contact Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-7 bg-black/15 blur-lg rounded-full z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
