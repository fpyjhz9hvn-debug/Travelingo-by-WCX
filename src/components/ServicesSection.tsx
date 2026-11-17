import React from 'react';
import { Map, Building2, Plane, ShieldCheck, Compass, Headphones, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/travelData';
import { ServiceItem } from '../types/travel';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onExploreAll: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Map,
  Building2,
  Plane,
  ShieldCheck,
  Compass,
  Headphones,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onExploreAll }) => {
  return (
    <section id="services" className="py-16 sm:py-24 px-5 sm:px-8 bg-white border-t border-[#E5E2D8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-12 sm:mb-16 max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666666] font-['Epilogue']">
            Our Travel Services Tailored to Every Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-['Epilogue'] leading-tight text-balance">
            Everything you need for seamless travel planning and booking
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
            Whether you're looking for a luxury getaway or a budget-friendly trip, we provide services that suit every traveler.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Compass;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group p-7 bg-[#FAF9F5] rounded-2xl border border-[#E5E2D8] text-left hover:border-black/30 hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 mb-5 rounded-xl bg-white border border-[#E5E2D8] flex items-center justify-center text-black shadow-xs group-hover:scale-105 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="font-bold text-lg text-[#111111] mb-2 font-['Epilogue']">
                    {service.title}
                  </h3>

                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-black font-['Epilogue'] group-hover:translate-x-1 transition-transform">
                  <span>View Details & Inclusions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#222222] active:scale-95 transition shadow-sm cursor-pointer"
          >
            <span>Explore All Travel Services</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
