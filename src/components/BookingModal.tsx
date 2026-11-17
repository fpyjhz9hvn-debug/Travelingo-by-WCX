import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Users, MapPin, Sparkles, Send } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { BookingFormData } from '../types/travel';

interface BookingModalProps {
  isOpen: boolean;
  initialDestination?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialDestination = '',
  onClose,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    destination: initialDestination || 'Marrakech, Morocco',
    fullName: '',
    email: '',
    phone: '',
    travelDates: 'Spring / Summer 2025',
    travelersCount: 2,
    travelStyle: 'Balanced Explorer',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `TL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overscroll-contain"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-[#E5E2D8] shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto overscroll-contain no-scrollbar relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF9F5] border border-[#E5E2D8] flex items-center justify-center text-black hover:bg-neutral-200 transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#666666] font-['Epilogue'] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Bespoke Trip Planning</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Epilogue']">
                Plan Your Next Adventure
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Tell us your travel vision. Our destination curators will craft a tailored proposal within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Destination Selection */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                  Select Target Destination
                </label>
                <div className="relative">
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition"
                    required
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={`${d.name}, ${d.country}`}>
                        {d.name}, {d.country} (from {d.startingPrice})
                      </option>
                    ))}
                    <option value="Custom / Undecided Destination">Other / Custom Multi-Country Trip</option>
                  </select>
                </div>
              </div>

              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-4 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-4 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              {/* Phone & Travel Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-4 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                    Target Timeframe
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. September 2025 (10 days)"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-4 py-2.5 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition"
                  />
                </div>
              </div>

              {/* Number of Travelers & Travel Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, '5+'].map((count) => (
                      <button
                        type="button"
                        key={String(count)}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            travelersCount: typeof count === 'number' ? count : 5,
                          })
                        }
                        className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition cursor-pointer ${
                          (count === '5+' && formData.travelersCount >= 5) ||
                          formData.travelersCount === count
                            ? 'bg-black text-white border-black'
                            : 'bg-[#FAF9F5] text-neutral-700 border-[#E5E2D8] hover:border-black/40'
                        }`}
                      >
                        {count} {typeof count === 'number' ? (count === 1 ? 'Guest' : 'Guests') : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                    Preferred Style
                  </label>
                  <select
                    value={formData.travelStyle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        travelStyle: e.target.value as BookingFormData['travelStyle'],
                      })
                    }
                    className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black transition"
                  >
                    <option value="Balanced Explorer">Balanced Explorer (Boutique & Heritage)</option>
                    <option value="Luxury Bespoke">Luxury Bespoke (5-Star & Private Guides)</option>
                    <option value="Active Adventure">Active Adventure (Hiking & Water)</option>
                    <option value="Culture & Food">Culture & Food (Culinary Deep-Dive)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5 font-['Epilogue']">
                  Special Notes or Wishes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Honeymoon celebration, dietary requirements, preference for balcony view..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#FAF9F5] border border-[#E5E2D8] rounded-xl px-4 py-2.5 text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-black transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 active:scale-95 transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Itinerary</span>
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  No commitment required. 100% complimentary initial proposal.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 sm:p-12 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-black text-white rounded-2xl mx-auto flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#666666]">
                Itinerary Request Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Epilogue']">
                Your Adventure Awaits, {formData.fullName || 'Explorer'}!
              </h3>
              <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                We have assigned your trip request to one of our senior destination planners for{' '}
                <strong className="text-black">{formData.destination}</strong>.
              </p>
            </div>

            <div className="bg-[#FAF9F5] border border-[#E5E2D8] rounded-2xl p-5 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#E5E2D8] pb-2">
                <span className="text-neutral-500">Booking Reference:</span>
                <span className="font-mono font-bold text-black">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#E5E2D8] pb-2">
                <span className="text-neutral-500">Guests & Style:</span>
                <span className="font-medium text-black">
                  {formData.travelersCount} Guests · {formData.travelStyle}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact Email:</span>
                <span className="font-medium text-black">{formData.email}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              A comprehensive preview proposal will be sent to your inbox within 24 hours.
            </p>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-black text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
