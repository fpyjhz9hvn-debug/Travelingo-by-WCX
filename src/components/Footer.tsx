import React from 'react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#0C0C0C] text-neutral-400 py-16 sm:py-20 px-6 sm:px-10 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Epilogue']">
              TRAVELINGO
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Crafting bespoke global journeys, handpicked accommodations, and seamless travel logistics for modern explorers worldwide.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columns 2 & 3: Evenly Spaced Menu & Services */}
          <div className="md:col-span-7 grid grid-cols-2 gap-10 sm:gap-12 md:flex md:justify-evenly md:items-start">
            {/* Menu Links */}
            <div className="text-xs">
              <h4 className="font-bold text-white mb-4 tracking-wider uppercase font-['Epilogue']">
                Menu
              </h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#top" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#destinations" className="hover:text-white transition">Destinations</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#blog" className="hover:text-white transition">Travel Blog</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="text-xs">
              <h4 className="font-bold text-white mb-4 tracking-wider uppercase font-['Epilogue']">
                Services
              </h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#services" className="hover:text-white transition">Custom Trip Planning</a></li>
                <li><a href="#services" className="hover:text-white transition">Hotel & Stay Booking</a></li>
                <li><a href="#services" className="hover:text-white transition">Flight Assistance</a></li>
                <li><a href="#services" className="hover:text-white transition">Travel Insurance</a></li>
                <li><a href="#services" className="hover:text-white transition">Guided Tours</a></li>
                <li><a href="#services" className="hover:text-white transition">24/7 Support Line</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2025 Travelingo. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenBooking}
              className="text-neutral-400 hover:text-white transition cursor-pointer"
            >
              Start Trip Inquiry
            </button>
            <span>•</span>
            <span className="text-neutral-400">Terms of Service</span>
            <span>•</span>
            <span className="text-neutral-400">Privacy Policy</span>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-neutral-900/90 border border-neutral-800 rounded-md text-[10px] text-neutral-400">
              <span>Crafted with editorial precision</span>
            </div>
            <div className="h-7 w-24 overflow-hidden flex items-center justify-center">
              <img
                src="/assets/aistudio/wcx-logo_dddfd23f.png"
                alt="WCX"
                className="w-full h-auto object-cover mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
