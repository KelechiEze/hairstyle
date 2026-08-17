import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSlideshow } from './components/HeroSlideshow';
import { SilkBlowoutCard } from './components/SilkBlowoutCard';
import { ShowcaseGallerySection } from './components/ShowcaseGallerySection';
import { SolutionsSection } from './components/SolutionsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { VideoBannerSection } from './components/VideoBannerSection';
import { RealResultsGallerySection } from './components/RealResultsGallerySection';
import { FaqSection } from './components/FaqSection';
import { BookingFormSection } from './components/BookingFormSection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { ServicesModal } from './components/ServicesModal';
import { ContactModal } from './components/ContactModal';
import { SilkBlowoutDetailModal } from './components/SilkBlowoutDetailModal';
import { MenuDrawer } from './components/MenuDrawer';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSilkBlowoutOpen, setIsSilkBlowoutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBookingWithService = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0b0a09] text-white flex flex-col overflow-x-hidden select-none">
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBookingWithService()}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* SECTION 1: HERO SECTION */}
      <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Dynamic Cycling Hero Background */}
        <HeroSlideshow currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

        {/* Main Hero Center-Left Content Area */}
        <main className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 pt-28 pb-28 sm:pb-24 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Badge: #05 PREMIUM HAIR SALON */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-neutral-300">
              <span className="font-extrabold text-white">#05</span>
              <span className="text-white/80">PREMIUM HAIR SALON</span>
            </div>

            {/* Main Huge Display Heading: SALONIX */}
            <h1
              id="hero-main-title"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold font-heading text-white tracking-tight uppercase leading-[0.95] drop-shadow-2xl"
            >
              SALONIX
            </h1>

            {/* Paragraph Description */}
            <p className="text-neutral-200/90 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed">
              Premium hair artistry tailored entirely to your texture, lifestyle, face shape, and the exact look you have always wanted.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary Action: Explore Services */}
              <button
                id="hero-explore-services-btn"
                onClick={() => setIsServicesOpen(true)}
                className="group px-6 sm:px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm flex items-center gap-2.5 hover:bg-neutral-200 active:scale-95 transition-all shadow-xl hover:shadow-white/10"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Action: Contact */}
              <button
                id="hero-contact-btn"
                onClick={() => setIsContactOpen(true)}
                className="group px-6 sm:px-7 py-3.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 hover:border-white/50 text-white font-medium text-xs sm:text-sm flex items-center gap-2.5 hover:bg-white/10 active:scale-95 transition-all"
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </main>

        {/* Hero Bottom Bar Area */}
        <div className="relative z-30 px-6 sm:px-10 md:px-14 pb-6 md:pb-8 flex items-end justify-between gap-4">
          {/* Bottom-Left: Silk Blowout Featured Card */}
          <SilkBlowoutCard onClick={() => setIsSilkBlowoutOpen(true)} />
        </div>
      </div>

      {/* SECTION 2: SHOWCASE GALLERY SECTION (Directly below hero, joined seamlessly) */}
      <ShowcaseGallerySection onOpenBooking={() => handleOpenBookingWithService()} />

      {/* SECTION 3: SOLUTIONS SECTION */}
      <SolutionsSection onOpenBooking={() => handleOpenBookingWithService()} />

      {/* SECTION 4: SERVICES SECTION (Interactive Animated Accordion) */}
      <ServicesSection onOpenBooking={(serviceId) => handleOpenBookingWithService(serviceId)} />

      {/* SECTION 5: WHY US? BENTO GRID SECTION (Benefits) */}
      <WhyUsSection onOpenBooking={() => handleOpenBookingWithService()} />

      {/* SECTION 6: FULL-WIDTH AUTOPLAY VIDEO BANNER SECTION */}
      <VideoBannerSection />

      {/* SECTION 7: REAL RESULTS INFINITE ROLLING GALLERY (Zero border-radius, hover camera icon) */}
      <RealResultsGallerySection onOpenBooking={() => handleOpenBookingWithService()} />

      {/* SECTION 8: CLARITY FAQ SECTION (Common Questions) */}
      <FaqSection 
        onOpenBooking={() => handleOpenBookingWithService()} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* SECTION 9: BOOKING & CONTACT FORM SECTION */}
      <BookingFormSection onOpenContact={() => setIsContactOpen(true)} />

      {/* SECTION 10: LUXURY SALONIX FOOTER */}
      <FooterSection 
        onOpenContact={() => setIsContactOpen(true)}
        onOpenBooking={() => handleOpenBookingWithService()}
      />

      {/* Modals and Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedServiceForBooking(undefined);
        }}
        initialService={selectedServiceForBooking}
      />

      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onSelectServiceToBook={(serviceId) => handleOpenBookingWithService(serviceId)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <SilkBlowoutDetailModal
        isOpen={isSilkBlowoutOpen}
        onClose={() => setIsSilkBlowoutOpen(false)}
        onBookNow={() => handleOpenBookingWithService('silk-blowout')}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenBooking={() => handleOpenBookingWithService()}
        onOpenServices={() => setIsServicesOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenSilkBlowout={() => setIsSilkBlowoutOpen(true)}
      />
    </div>
  );
}

