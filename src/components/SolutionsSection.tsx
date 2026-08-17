import React from 'react';
import { ArrowRight, CloudLightning, Scissors, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface SolutionsSectionProps {
  onOpenBooking: () => void;
}

const SOLUTIONS_DATA = [
  {
    number: '01',
    title: 'FRIZZY HAIR',
    description: 'Hair that constantly looks dry, puffy, and impossible to control.',
    icon: (
      <svg className="w-10 h-10 text-[#8f3429]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.5 2 6 4.5 6 7.5c0 1.2.4 2.3 1.1 3.2C5.3 11.5 4 13.6 4 16.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-1.8-.7-3.4-1.9-4.6.6-.9 1-2 1-3.4C16.1 4.5 13.6 2 12 2zm1.8 14.5c0 2-1.6 3.7-3.6 3.7s-3.6-1.7-3.6-3.7c0-1.7 1.2-3.2 2.8-3.6.5-.1.8-.6.8-1.1v-.8c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3v.8c0 .5.4 1 .8 1.1 1.6.4 2.8 1.9 2.8 3.6z" />
        <path d="M14.5 5.5c-1-.7-2.5-.7-3.5 0-.4.3-.9.1-1.2-.3-.3-.4-.1-.9.3-1.2 1.8-1.2 4.2-1.2 6 0 .4.3.5.8.2 1.2-.3.4-.8.5-1.2.3z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'DAMAGED HAIR',
    description: 'Hair that feels weak, brittle, and looks completely dull always.',
    icon: (
      <svg className="w-10 h-10 text-[#8f3429]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM11 19l-1.5-4h2.5l-1-4 4 5h-2.5l1 3H11z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'THINNING HAIR',
    description: 'Hair that lacks volume and looks painfully flat and limp.',
    icon: (
      <svg className="w-10 h-10 text-[#8f3429]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="7" height="18" rx="1.5" fill="currentColor" stroke="none" />
        <line x1="9" y1="6" x2="13" y2="6" stroke="currentColor" strokeWidth="2.5" />
        <line x1="9" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="2.5" />
        <line x1="9" y1="14" x2="13" y2="14" stroke="currentColor" strokeWidth="2.5" />
        <line x1="9" y1="18" x2="13" y2="18" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="17.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M19.5 16.5L22 4" stroke="currentColor" strokeWidth="2" />
        <path d="M15.5 16.5L13 9" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="solutions-section" 
      className="relative w-full bg-[#f4efe9] text-black pt-20 sm:pt-24 pb-20 sm:pb-28 overflow-hidden select-none border-t border-[#e8ded3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Header with Title on Left, Subtext below, and Book now button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#381611] tracking-tight uppercase leading-none"
            >
              SOLUTIONS
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#64504a] text-sm sm:text-base md:text-lg max-w-lg mt-4 leading-relaxed font-normal"
            >
              Real hair problems deserve real solutions — not temporary fixes, but lasting results that transform how you feel.
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
              id="solutions-book-now-btn"
              onClick={onOpenBooking}
              className="group px-7 py-3.5 rounded-none bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
            >
              <span>Book now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* 3 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS_DATA.map((card, idx) => (
            <motion.div
              key={card.number}
              id={`solution-card-${card.number}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              onClick={onOpenBooking}
              className="group relative bg-white rounded-none p-8 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eee4d8] cursor-pointer"
            >
              {/* Top row: Faint Large Number on Left, Terracotta Icon on Right */}
              <div className="flex items-start justify-between">
                <span className="text-5xl sm:text-6xl font-extrabold font-heading text-[#e7ded4] select-none tracking-tight group-hover:text-[#ded2c6] transition-colors">
                  {card.number}
                </span>
                <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
              </div>

              {/* Bottom row: Title and Description */}
              <div className="mt-10">
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#381611] tracking-tight uppercase group-hover:text-[#8f3429] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#6c5953] text-sm sm:text-base mt-2.5 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
