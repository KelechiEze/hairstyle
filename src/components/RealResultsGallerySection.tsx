import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { motion } from 'motion/react';

interface RealResultsGallerySectionProps {
  onOpenBooking: () => void;
}

// 6 High-Definition Editorial & Real Client Result Portrait Links
const GALLERY_ITEMS = [
  {
    id: 'res-1',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85',
    alt: 'Real client sleek styling and glowing skin',
    caption: 'Precision Cut & Gloss',
  },
  {
    id: 'res-2',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85',
    alt: 'Natural dimensional brunette highlights',
    caption: 'Sun-Kissed Balayage',
  },
  {
    id: 'res-3',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=85',
    alt: 'Sculpted sleek ponytail with gold clip',
    caption: 'Silk Sculpted Finish',
  },
  {
    id: 'res-4',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
    alt: 'Editorial voluminous waves and golden glow',
    caption: 'Keratin & Volumizing',
  },
  {
    id: 'res-5',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85',
    alt: 'Natural radiant curls and texture repair',
    caption: 'Scalp Detox & Texture',
  },
  {
    id: 'res-6',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85',
    alt: 'Sleek luxury blowout finish',
    caption: 'Silk Blowout',
  },
];

export const RealResultsGallerySection: React.FC<RealResultsGallerySectionProps> = ({ onOpenBooking }) => {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section 
      id="real-results-gallery-section" 
      className="relative w-full bg-[#f4efe9] text-black pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden select-none border-t border-[#e8ded3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 mb-12 sm:mb-16">
        {/* Header with [ REAL RESULTS ], GALLERY, Subtext, and Book now button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8f3429] font-bold text-xs sm:text-sm tracking-wider uppercase"
            >
              [ REAL RESULTS ]
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#381611] tracking-tight uppercase leading-none mt-2"
            >
              GALLERY
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#64504a] text-sm sm:text-base md:text-lg max-w-xl mt-4 leading-relaxed font-normal"
            >
              Real results from real clients — every image in this gallery is unedited and completely unfiltered always.
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
              id="gallery-book-now-btn"
              onClick={onOpenBooking}
              className="group px-7 py-3.5 rounded-none bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
            >
              <span>Book now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Gallery (Zero border radius, joined images) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 28,
              ease: 'linear',
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              id={`marquee-item-${idx}`}
              onClick={onOpenBooking}
              className="group relative w-[280px] sm:w-[340px] md:w-[400px] h-[400px] sm:h-[480px] md:h-[540px] flex-shrink-0 overflow-hidden bg-neutral-900 cursor-pointer rounded-none border-r border-[#e8ded3]/40"
            >
              {/* Portrait Image with Sharp Edges */}
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-700 rounded-none select-none"
              />

              {/* Hover Overlay with Centered White Camera Icon */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 rounded-none">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Camera className="w-6 h-6 text-white stroke-[2.2]" />
                </div>
                <span className="text-white text-xs font-semibold tracking-wider uppercase drop-shadow-md">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
