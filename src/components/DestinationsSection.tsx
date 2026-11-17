import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Star, Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { Destination } from '../types/travel';

interface DestinationsSectionProps {
  onSelectDestination: (destination: Destination) => void;
  onBookDestination: (destinationName: string) => void;
}

const CORE_START_INDEX = 5;

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onBookDestination,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef<boolean>(true);

  const regions = ['All', 'Africa', 'Americas', 'Europe', 'Asia'];

  const filteredDestinations =
    activeRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === activeRegion);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const positionTrack = useCallback(
    (region: string, smooth: boolean) => {
      const el = scrollContainerRef.current;
      if (!el) return;

      if (region === 'All') {
        const targetCard = el.children[CORE_START_INDEX] as HTMLElement | undefined;
        if (targetCard) {
          el.scrollTo({
            left: targetCard.offsetLeft,
            behavior: smooth ? 'smooth' : 'auto',
          });
        }
      } else {
        el.scrollTo({
          left: 0,
          behavior: smooth ? 'smooth' : 'auto',
        });
      }

      requestAnimationFrame(updateScrollButtons);
    },
    [updateScrollButtons]
  );

  useEffect(() => {
    const smooth = !isInitialMount.current;
    isInitialMount.current = false;
    // Wait a frame for layout so offsetLeft reflects the newly filtered cards
    const frameId = requestAnimationFrame(() => {
      positionTrack(activeRegion, smooth);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeRegion, positionTrack]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons, { passive: true });
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [updateScrollButtons]);

  const handleScrollBy = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.children[0] as HTMLElement | undefined;
    const columnGap = parseFloat(window.getComputedStyle(el).columnGap) || 32;
    const step = firstCard ? firstCard.offsetWidth + columnGap : 460;
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <section id="destinations" className="py-16 sm:py-24 px-5 sm:px-8 bg-white border-t border-[#E5E2D8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center space-y-3.5 mb-10 max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666666] font-['Epilogue']">
            Most Loved Travel Spots by Our Happy Travelers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-['Epilogue'] leading-tight text-balance">
            Handpicked destinations that are trending around the globe
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
            Explore some of the most popular travel destinations that our clients are loving right now.
          </p>
        </motion.div>

        {/* Region Filter Segmented Controls + Left/Right Scroll Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          <div className="hidden sm:block sm:w-24" aria-hidden="true" />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  activeRegion === region
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-[#F5F4EC] text-[#555555] hover:text-black hover:bg-[#EAE8DD]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:w-24 justify-end">
            <button
              type="button"
              onClick={() => handleScrollBy('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll destinations left"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-[#E5E2D8] bg-[#FAF9F5] text-black hover:bg-black hover:text-white hover:border-black active:scale-95 cursor-pointer'
                  : 'border-[#E5E2D8]/60 bg-[#FAF9F5]/50 text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScrollBy('right')}
              disabled={!canScrollRight}
              aria-label="Scroll destinations right"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-[#E5E2D8] bg-[#FAF9F5] text-black hover:bg-black hover:text-white hover:border-black active:scale-95 cursor-pointer'
                  : 'border-[#E5E2D8]/60 bg-[#FAF9F5]/50 text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scrollable 7x2 Country Cards Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="relative grid grid-rows-2 grid-flow-col auto-cols-[85vw] sm:auto-cols-[360px] md:auto-cols-[440px] lg:auto-cols-[470px] auto-rows-fr gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2"
        >
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="h-full snap-start group rounded-3xl overflow-hidden border border-[#E5E2D8] bg-[#FAF9F5] shadow-xs hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-black/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with Region badge & Rating */}
              <div
                onClick={() => onSelectDestination(dest)}
                className="relative h-60 sm:h-72 overflow-hidden cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay Top Bar: Country and Rating */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full font-['Epilogue']">
                    {dest.country}
                  </span>
                  <span className="bg-white/90 backdrop-blur-md text-black text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{dest.rating.toFixed(1)}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3
                      onClick={() => onSelectDestination(dest)}
                      className="font-bold text-xl sm:text-2xl text-[#111111] font-['Epilogue'] hover:text-neutral-700 cursor-pointer transition-colors"
                    >
                      {dest.name}
                    </h3>
                    <span className="text-xs font-bold text-black bg-[#F5F4EC] px-2.5 py-1 rounded-full shrink-0">
                      from {dest.startingPrice}
                    </span>
                  </div>

                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  {/* Trip Details metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#555555] pt-1 border-t border-[#E5E2D8]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-800" />
                      <span>{dest.avgDuration}</span>
                    </div>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-800" />
                      <span>Best: {dest.bestTime}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="inline-flex items-center text-xs font-semibold text-black hover:text-neutral-600 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>View Full Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>

                  <button
                    onClick={() => onBookDestination(`${dest.name}, ${dest.country}`)}
                    className="px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-neutral-800 active:scale-95 transition cursor-pointer"
                  >
                    Book Trip
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
