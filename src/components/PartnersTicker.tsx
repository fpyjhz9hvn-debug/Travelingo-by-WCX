import React from 'react';
import { Plane, Compass, Globe, Star, ShieldCheck, MapPin } from 'lucide-react';

export const PartnersTicker: React.FC = () => {
  const partners = [
    { name: 'TRIPADVISOR', icon: Star },
    { name: 'EXPEDIA', icon: Plane },
    { name: 'BOOKING.COM', icon: Globe },
    { name: 'AIRBNB', icon: Compass },
    { name: 'NATIONAL GEOGRAPHIC EXPEDITIONS', icon: ShieldCheck },
    { name: 'CONDÉ NAST TRAVELER', icon: MapPin },
  ];

  return (
    <section className="py-7 border-y border-[#E5E2D8] bg-[#F5F4EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#666666] font-['Epilogue']">
          Trusted By Leading Travel Pioneers & Global Partners
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and right fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F4EC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F4EC] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex space-x-12 sm:space-x-16 items-center text-[#555555] font-bold text-xs sm:text-sm tracking-widest font-['Epilogue']">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <span key={`p1-${idx}`} className="flex items-center gap-2 hover:text-black transition-colors shrink-0">
                <Icon className="w-4 h-4 text-neutral-500" />
                <span>{partner.name}</span>
              </span>
            );
          })}
          {/* Duplicate set for seamless continuous loop */}
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <span key={`p2-${idx}`} className="flex items-center gap-2 hover:text-black transition-colors shrink-0">
                <Icon className="w-4 h-4 text-neutral-500" />
                <span>{partner.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
