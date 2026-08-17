import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

// Direct High-Resolution 4K Image Links for Seamless Gallery
const GALLERY_COLUMNS = [
  {
    id: 'craft',
    title: 'CRAFT',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Salon craft wet hair washing and conditioning treatment',
  },
  {
    id: 'studio',
    title: 'STUDIO',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Studio blonde hair volume styling portrait',
  },
  {
    id: 'artistry',
    title: 'ARTISTRY',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
    alt: 'High fashion hair artistry with pearl clip accessory',
  },
  {
    id: 'results',
    title: 'RESULTS',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85',
    alt: 'Pristine smooth low bun with horizontal gold clip results',
  },
];

interface ShowcaseGallerySectionProps {
  onOpenBooking: () => void;
}

export const ShowcaseGallerySection: React.FC<ShowcaseGallerySectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="showcase-gallery-section" 
      className="relative w-full bg-[#f4efe9] text-black pt-20 sm:pt-24 pb-20 sm:pb-28 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-extrabold font-heading text-black leading-[1.2] sm:leading-[1.25] tracking-tight uppercase"
          >
            MASTER STYLISTS. PREMIUM PRODUCTS.<br />
            ZERO COMPROMISE. THIS IS WHAT GREAT<br />
            HAIR ACTUALLY LOOKS LIKE.
          </motion.h2>

          {/* Book Appointment CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 sm:mt-10"
          >
            <button
              id="showcase-book-appointment-btn"
              onClick={onOpenBooking}
              className="group px-7 py-3.5 rounded-none bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/20"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* 4-Image Joined Grid (Zero gap, no border radius, sharp edges) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden shadow-2xl rounded-none"
        >
          {GALLERY_COLUMNS.map((item) => (
            <div
              key={item.id}
              id={`gallery-column-${item.id}`}
              className="group relative h-[380px] sm:h-[460px] md:h-[560px] lg:h-[620px] w-full overflow-hidden bg-neutral-900 cursor-pointer rounded-none"
              onClick={onOpenBooking}
            >
              {/* Seamless 4K Image with Sharp Edges */}
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out rounded-none"
              />

              {/* Bottom Subtle Gradient for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Bottom Center Title */}
              <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center px-4 z-10">
                <span className="text-white font-extrabold font-heading text-lg sm:text-xl md:text-2xl tracking-widest uppercase drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
