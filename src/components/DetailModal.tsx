import React, { useEffect } from 'react';
import { X, CheckCircle, Clock, Calendar, Star, MapPin, ArrowRight } from 'lucide-react';
import { Destination, ServiceItem, BlogPost } from '../types/travel';

interface DetailModalProps {
  isOpen: boolean;
  type: 'destination' | 'service' | 'blog' | null;
  data: Destination | ServiceItem | BlogPost | null;
  onClose: () => void;
  onBookNow: (destinationOrServiceTitle: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  type,
  data,
  onClose,
  onBookNow,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overscroll-contain"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-[#E5E2D8] shadow-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto overscroll-contain relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E2D8] flex items-center justify-center text-black hover:bg-neutral-200 transition cursor-pointer shadow-xs"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Destination View */}
        {type === 'destination' && (
          <div>
            {(() => {
              const dest = data as Destination;
              return (
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6 text-white">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                        {dest.country} · {dest.region}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-['Epilogue'] mt-1">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-600 bg-[#FAF9F5] p-3 rounded-2xl border border-[#E5E2D8]">
                      <span className="flex items-center gap-1 text-black">
                        <Clock className="w-3.5 h-3.5" /> Duration: {dest.avgDuration}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-black">
                        <Calendar className="w-3.5 h-3.5" /> Best Season: {dest.bestTime}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-black">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {dest.rating.toFixed(1)} / 5.0
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-black uppercase tracking-wider font-['Epilogue'] mb-2">
                        Expedition Overview
                      </h4>
                      <p className="text-sm text-[#4C4546] leading-relaxed">
                        {dest.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-black uppercase tracking-wider font-['Epilogue'] mb-3">
                        Curated Highlights & Inclusions
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {dest.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-neutral-800">
                            <CheckCircle className="w-4 h-4 text-black shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E5E2D8] flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] text-[#666666]">Starting Price</div>
                        <div className="text-xl font-bold text-black font-['Epilogue']">
                          {dest.startingPrice} <span className="text-xs font-normal text-neutral-500">/ person</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onBookNow(`${dest.name}, ${dest.country}`);
                        }}
                        className="px-6 py-3 bg-black text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition cursor-pointer"
                      >
                        Book This Journey
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Service View */}
        {type === 'service' && (
          <div>
            {(() => {
              const s = data as ServiceItem;
              return (
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#666666] font-['Epilogue']">
                      Travelingo Specialized Service
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Epilogue'] mt-1">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#4C4546] leading-relaxed">
                    {s.details}
                  </p>

                  <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#E5E2D8] space-y-3">
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider font-['Epilogue']">
                      What Is Included
                    </h4>
                    <div className="space-y-2">
                      {s.included.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-800">
                          <CheckCircle className="w-4 h-4 text-black shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 text-xs font-semibold text-neutral-700 hover:text-black cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onBookNow(s.title);
                      }}
                      className="px-6 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition cursor-pointer"
                    >
                      Inquire About This Service
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Blog View */}
        {type === 'blog' && (
          <div>
            {(() => {
              const post = data as BlogPost;
              return (
                <div>
                  <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="flex items-center gap-2 text-xs text-[#666666]">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Epilogue'] leading-tight">
                      {post.title}
                    </h3>

                    <div className="space-y-3.5 text-sm text-[#4C4546] leading-relaxed border-t border-[#E5E2D8] pt-4">
                      {post.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#E5E2D8] flex items-center justify-between">
                      <span className="text-xs text-neutral-500">
                        Curated by Travelingo Editorial
                      </span>
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition cursor-pointer"
                      >
                        Close Article
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};
