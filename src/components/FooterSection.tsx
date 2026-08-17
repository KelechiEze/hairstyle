import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface FooterSectionProps {
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="salone-footer" 
      className="relative w-full bg-[#2d0e0a] text-white pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        
        {/* Top 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Contact CTA (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Brand Emblem */}
            <div 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white font-extrabold font-heading text-xl sm:text-2xl tracking-wider cursor-pointer select-none"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-current stroke-[2.2]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>SALONÉ<span className="text-xs font-normal">®</span></span>
            </div>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              A premium hair salon built on craft, trust, & genuine results for every single client always.
            </p>

            <div>
              <button
                id="footer-contact-salone-btn"
                onClick={onOpenContact}
                className="px-6 py-3 bg-white hover:bg-[#f6f2ec] active:scale-95 text-[#2d0e0a] font-medium text-xs sm:text-sm flex items-center gap-2 rounded-none transition-all shadow-md group"
              >
                <span>Contact Saloné</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: QUICK LINKS (Col Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-neutral-200 tracking-wider uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="#hero-section" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#solutions-section" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#solutions-section" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#why-us-section" className="hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#real-results-gallery-section" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Stylists
                </a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">
                  Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: OTHER PAGES (Col Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-neutral-200 tracking-wider uppercase">
              OTHER PAGES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors text-left">
                  About us
                </button>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Service index
                </a>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-white transition-colors text-left">
                  Contact us
                </button>
              </li>
              <li>
                <span className="text-neutral-400 cursor-default">404 error</span>
              </li>
            </ul>
          </div>

          {/* Column 4: INFO LINKS (Col Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-neutral-200 tracking-wider uppercase">
              INFO LINKS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d97c72] flex-shrink-0" />
                <a href="mailto:testing@gmail.com" className="hover:text-white transition-colors">
                  testing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d97c72] flex-shrink-0" />
                <a href="tel:+12345678900" className="hover:text-white transition-colors">
                  +123 456 789 00
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#d97c72] flex-shrink-0" />
                <span>Albany, New York</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Giant Brand Display: Massive SALONÉ® Branding */}
        <div className="pt-12 sm:pt-16 flex items-center justify-center overflow-hidden">
          <div className="w-full flex items-center justify-between text-white select-none">
            {/* Left Geometric Logo */}
            <svg 
              viewBox="0 0 100 100" 
              fill="none" 
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 stroke-white stroke-[9] flex-shrink-0 mr-4 sm:mr-8"
            >
              <polygon points="50 8 92 50 50 92 8 50" />
              <polygon points="50 28 72 50 50 72 28 50" />
            </svg>

            {/* Massive Heading */}
            <h1 className="text-[14vw] sm:text-[15vw] font-black font-heading tracking-tight leading-none text-white whitespace-nowrap">
              SALONÉ<span className="text-[6vw] font-bold align-top ml-2">®</span>
            </h1>
          </div>
        </div>

      </div>
    </footer>
  );
};
