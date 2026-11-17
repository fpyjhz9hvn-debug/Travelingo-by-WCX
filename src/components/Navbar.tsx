import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#services' },
    { label: 'Gallery', href: '#destinations' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F3EFE6]/95 backdrop-blur-md border-b border-[#E2DDD3] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-[#F4F0E8]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-4 flex items-center justify-between gap-6">
        {/* Left: Brand Logo wordmark in classic display serif matching reference */}
        <a
          href="#top"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black font-['Playfair_Display',_Georgia,_serif] tracking-[-0.03em] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          TRAVELINGO
        </a>

        {/* Center: Black Pill Navigation Bar with Active White Pill Button (as shown in reference image) */}
        <nav className="hidden md:flex items-center bg-black text-white p-1.5 rounded-md shadow-sm">
          {navItems.map((item) => {
            const isActive = item.label === 'Home';
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs sm:text-sm font-semibold transition-all px-4 py-1.5 rounded-sm whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-black shadow-xs font-bold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Black Button "Book Your Next Adventure" */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-5 sm:px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-bold tracking-tight rounded-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Your Next Adventure
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900 rounded-lg hover:bg-neutral-200/60 active:scale-95 transition cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#E5E2D8] px-6 py-6 shadow-xl transition-all animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-neutral-900">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 last:border-0 hover:text-black transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-neutral-400 text-xs">→</span>
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-black text-white text-sm font-bold rounded-sm text-center hover:bg-neutral-800 transition"
              >
                Book Your Next Adventure
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
