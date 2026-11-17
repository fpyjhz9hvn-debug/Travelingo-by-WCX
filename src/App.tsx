/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnersTicker } from './components/PartnersTicker';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MountainBanner } from './components/MountainBanner';
import { ProcessSection } from './components/ProcessSection';
import { DestinationsSection } from './components/DestinationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DetailModal } from './components/DetailModal';
import { Destination, ServiceItem, BlogPost } from './types/travel';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDestinationForBooking, setSelectedDestinationForBooking] = useState('');
  
  // Detail modal state
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailModalType, setDetailModalType] = useState<'destination' | 'service' | 'blog' | null>(null);
  const [detailModalData, setDetailModalData] = useState<Destination | ServiceItem | BlogPost | null>(null);

  const isAnyModalOpen = bookingOpen || detailModalOpen;

  useEffect(() => {
    if (!isAnyModalOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const prevBodyOverscroll = document.body.style.overscrollBehavior;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPaddingRight;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
      document.body.style.overscrollBehavior = prevBodyOverscroll;
    };
  }, [isAnyModalOpen]);

  const handleOpenBooking = (destinationName = '') => {
    setSelectedDestinationForBooking(destinationName);
    setBookingOpen(true);
  };

  const handleOpenDestinationDetail = (destination: Destination) => {
    setDetailModalType('destination');
    setDetailModalData(destination);
    setDetailModalOpen(true);
  };

  const handleOpenServiceDetail = (service: ServiceItem) => {
    setDetailModalType('service');
    setDetailModalData(service);
    setDetailModalOpen(true);
  };

  const handleOpenBlogPost = (post: BlogPost) => {
    setDetailModalType('blog');
    setDetailModalData(post);
    setDetailModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F8] text-[#1B1C1C] flex flex-col font-['Atkinson_Hyperlegible_Next',_'Plus_Jakarta_Sans',_sans-serif]">
      {/* Top Navigation Bar with exact reference layout */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Redesigned Hero Section with 2-column layout, organic wave, and load animation */}
        <HeroSection onStartJourney={() => handleOpenBooking()} />

        {/* 2. Trusted By Partners Ticker */}
        <PartnersTicker />

        {/* 3. Who We Are (About Us) Section */}
        <AboutSection onLearnMore={() => {
          const el = document.getElementById('services');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 4. Travel Services Section */}
        <ServicesSection
          onSelectService={handleOpenServiceDetail}
          onExploreAll={() => handleOpenBooking()}
        />

        {/* 5. Mountain Scenic Banner */}
        <MountainBanner onBookNow={() => handleOpenBooking()} />

        {/* 6. Step-by-Step Booking Process */}
        <ProcessSection />

        {/* 7. Trending Destinations Grid with One-by-One Scroll Animation */}
        <DestinationsSection
          onSelectDestination={handleOpenDestinationDetail}
          onBookDestination={(name) => handleOpenBooking(name)}
        />

        {/* 8. Traveler Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 9. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 10. Editorial Travel Blog Stories */}
        <BlogSection
          onSelectPost={handleOpenBlogPost}
          onViewAll={() => {
            const el = document.getElementById('blog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Trip Planner / Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        initialDestination={selectedDestinationForBooking}
        onClose={() => setBookingOpen(false)}
      />

      {/* Content Breakdown Detail Modal */}
      <DetailModal
        isOpen={detailModalOpen}
        type={detailModalType}
        data={detailModalData}
        onClose={() => setDetailModalOpen(false)}
        onBookNow={(title) => handleOpenBooking(title)}
      />

      {/* Floating Scroll-To-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-30 w-11 h-11 bg-black/90 text-white rounded-full shadow-lg hover:bg-black transition-all flex items-center justify-center active:scale-95 cursor-pointer backdrop-blur-sm"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
