import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, Scissors, ShieldCheck, Heart, Home, Star } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface WhyUsSectionProps {
  onOpenBooking: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Animated Counter for 99%
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 99;
      const duration = 1600;
      const stepTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setSatisfactionCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="why-us-section"
      className="relative w-full bg-[#f4efe9] text-black pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden select-none border-t border-[#e8ded3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8f3429] font-bold text-xs sm:text-sm tracking-wider uppercase"
            >
              [ BENEFITS ]
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#381611] tracking-tight uppercase leading-none mt-2"
            >
              WHY US?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#64504a] text-sm sm:text-base md:text-lg max-w-lg mt-4 leading-relaxed font-normal"
            >
              Elevate your hair with bespoke styling, premium products, and unmatched luxury salon care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <button
              id="why-us-book-now-btn"
              onClick={onOpenBooking}
              className="group px-7 py-3.5 rounded-none bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
            >
              <span>Book now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Bento Grid Layout - Strict Zero Border Radius / Sharp Edges on All Images and Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: Tall Card (Crafted With Passion) Spanning Height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative min-h-[500px] lg:min-h-[640px] overflow-hidden bg-neutral-900 shadow-sm border border-[#e8ded3] flex flex-col justify-end p-8 sm:p-10 group cursor-pointer"
            onClick={onOpenBooking}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
              alt="Crafted with passion beauty portrait"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 rounded-none"
            />
            {/* Dark Gradient Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent rounded-none" />

            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight uppercase">
                CRAFTED WITH<br />PASSION
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm font-normal leading-relaxed max-w-xs">
                Precision, passion, & genuine expertise in every single appointment always.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Nested Bento Grid (Col Span 8) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            
            {/* ROW 1: Pure Products (Wide Card) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 border border-[#e8ded3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer"
              onClick={onOpenBooking}
            >
              <div className="space-y-4 max-w-md">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#381611] tracking-tight uppercase">
                  PURE PRODUCTS
                </h3>
                <p className="text-[#64504a] text-xs sm:text-sm leading-relaxed font-normal">
                  Only professional-grade brands trusted by top stylists worldwide for results.
                </p>

                {/* 3 Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3] rounded-none">
                    <Sparkles className="w-3.5 h-3.5 text-[#8f3429]" />
                    <span>Hydrating</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3] rounded-none">
                    <Scissors className="w-3.5 h-3.5 text-[#8f3429]" />
                    <span>Salon Grade</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3] rounded-none">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8f3429]" />
                    <span>Nourishing</span>
                  </span>
                </div>
              </div>

              {/* Luxury Salon Products Image */}
              <div className="w-full md:w-56 h-44 flex-shrink-0 relative overflow-hidden bg-[#f4efe9] border border-[#e8ded3]">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/chatgpt-image-aug-17-2026-09_33_03-am.png"
                  alt="Pure salon products"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_top] transform group-hover:scale-105 transition-transform duration-500 rounded-none"
                />
              </div>
            </motion.div>

            {/* ROW 2: Dual Split (550+ Stat & Model Portrait) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: 550+ Signature Styles */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 sm:p-8 border border-[#e8ded3] shadow-sm flex flex-col justify-between group cursor-pointer min-h-[240px]"
                onClick={onOpenBooking}
              >
                {/* 3 mini photo style swatches */}
                <div className="flex items-center -space-x-3 mb-4">
                  <div className="w-12 h-14 overflow-hidden border-2 border-white shadow-md transform -rotate-6 rounded-none bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80"
                      alt="Style 1"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <div className="w-14 h-16 overflow-hidden border-2 border-white shadow-lg z-10 rounded-none bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=200&q=80"
                      alt="Style 2"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <div className="w-12 h-14 overflow-hidden border-2 border-white shadow-md transform rotate-6 rounded-none bg-neutral-800">
                    <img
                      src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=200&q=80"
                      alt="Style 3"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[#381611] tracking-tight">
                    550+
                  </span>
                  <p className="text-[#64504a] text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    Signature styles completed by our expert team each & every month
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Model Portrait with SALONIX Logo Badge */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative overflow-hidden min-h-[240px] pt-6 sm:pt-8 bg-neutral-900 border border-[#e8ded3] shadow-sm flex flex-col justify-end p-6 group cursor-pointer"
                onClick={onOpenBooking}
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Client with styled hair portrait"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-[center_top] transform group-hover:scale-105 transition-transform duration-700 rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-none" />

                <div className="relative z-10 flex items-center gap-2 text-white font-extrabold font-heading tracking-wider text-base sm:text-lg">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current stroke-[2.2]">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>SALONÉ<span className="text-xs font-normal">®</span></span>
                </div>
              </motion.div>
            </div>

            {/* ROW 3: Care Continues (Wide Left) & 99% Satisfaction (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left: Care Continues (Col Span 7) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-7 bg-white p-6 sm:p-8 border border-[#e8ded3] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 group cursor-pointer"
                onClick={onOpenBooking}
              >
                <div className="space-y-4 max-w-xs">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#381611] tracking-tight uppercase">
                    CARE CONTINUES
                  </h3>
                  <p className="text-[#64504a] text-xs sm:text-sm leading-relaxed font-normal">
                    Your hair journey continues at home with our expert recommendations always.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3] rounded-none">
                      <Home className="w-3.5 h-3.5 text-[#8f3429]" />
                      <span>Maintain</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3] rounded-none">
                      <Heart className="w-3.5 h-3.5 text-[#8f3429]" />
                      <span>Nourish</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3] rounded-none">
                      <Star className="w-3.5 h-3.5 text-[#8f3429]" />
                      <span>Elevate</span>
                    </span>
                  </div>
                </div>

                {/* Hair Mask Jar on Pedestal */}
                <div className="w-full sm:w-44 h-36 flex-shrink-0 relative overflow-hidden bg-[#f4efe9] border border-[#e8ded3]">
                  <img
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                    alt="Saloné Hair Mask"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                </div>
              </motion.div>

              {/* Right: 99% Client Satisfaction (Col Span 5) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="md:col-span-5 bg-white p-6 sm:p-8 border border-[#e8ded3] shadow-sm flex flex-col justify-center group cursor-pointer min-h-[220px]"
                onClick={onOpenBooking}
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[#381611] tracking-tight">
                    {satisfactionCount}%
                  </span>
                  <p className="text-[#64504a] text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    Client satisfaction rate across every service we have ever offered.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
