import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection?: string;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#top', sectionId: 'top' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Service', href: '#services', sectionId: 'services' },
  { label: 'Gallery', href: '#destinations', sectionId: 'destinations' },
  { label: 'Blog', href: '#blog', sectionId: 'blog' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection = 'Home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState(activeSection);
  const clickScrollTimeoutRef = useRef<number | null>(null);
  const isClickScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isClickScrollingRef.current) return;

      if (window.scrollY < 100) {
        setActiveNav('Home');
        return;
      }

      // Check sections in reverse order so the deepest visible section wins
      for (let i = NAV_ITEMS.length - 1; i >= 1; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveNav(item.label);
            return;
          }
        }
      }

      setActiveNav('Home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickScrollTimeoutRef.current !== null) {
        window.clearTimeout(clickScrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (label: string) => {
    setActiveNav(label);
    isClickScrollingRef.current = true;

    if (clickScrollTimeoutRef.current !== null) {
      window.clearTimeout(clickScrollTimeoutRef.current);
    }

    clickScrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);
  };

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
          onClick={() => handleNavClick('Home')}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black font-['Playfair_Display',_Georgia,_serif] tracking-[-0.03em] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          TRAVELINGO
        </a>

        {/* Center: Black Pill Navigation Bar with Active White Pill Button */}
        <nav className="hidden md:flex items-center bg-black text-white p-1.5 rounded-md shadow-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`text-xs sm:text-sm font-semibold transition-all duration-200 px-4 py-1.5 rounded-sm whitespace-nowrap shrink-0 ${
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
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    handleNavClick(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded-lg border-b border-neutral-100 last:border-0 transition-colors flex items-center justify-between ${
                    isActive ? 'bg-black text-white' : 'hover:text-black'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-xs ${isActive ? 'text-white/80' : 'text-neutral-400'}`}>→</span>
                </a>
              );
            })}
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
