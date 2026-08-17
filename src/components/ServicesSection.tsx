import React, { useState } from 'react';
import { ArrowRight, Scissors, Sparkles, Droplets, Wind, Paintbrush, Palette, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

interface ServiceItem {
  id: string;
  number: string;
  categoryBadge: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
  tags: { name: string; icon?: React.ReactNode }[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'precision-haircut',
    number: '01',
    categoryBadge: '[ CUT & STYLE ]',
    title: 'PRECISION HAIRCUT',
    description: 'A tailored haircut precision-crafted and engineered to your unique face shape, natural hair texture, and daily lifestyle.',
    priceRange: '$55 — $120',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    tags: [
      { name: 'Consultation', icon: <Sparkles className="w-3.5 h-3.5" /> },
      { name: 'Hair Cutting', icon: <Scissors className="w-3.5 h-3.5" /> },
      { name: 'Final Touch', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: 'balayage-colour',
    number: '02',
    categoryBadge: '[ COLOUR SERVICE ]',
    title: 'BALAYAGE & COLOUR',
    description: 'Hand-painted colour blended to your skin tone for a natural, dimensional, sun-kissed finish.',
    priceRange: '$120 — $280',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
    tags: [
      { name: 'Consultation', icon: <Sparkles className="w-3.5 h-3.5" /> },
      { name: 'Colour Apply', icon: <Palette className="w-3.5 h-3.5" /> },
      { name: 'Toning', icon: <Paintbrush className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: 'keratin-treatment',
    number: '03',
    categoryBadge: '[ SMOOTHING TREATMENT ]',
    title: 'KERATIN TREATMENT',
    description: 'Banish frizz for up to three months with our professional smoothing treatment for all hair types.',
    priceRange: '$180 — $320',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    tags: [
      { name: 'Consultation', icon: <Sparkles className="w-3.5 h-3.5" /> },
      { name: 'Treatment', icon: <Droplets className="w-3.5 h-3.5" /> },
      { name: 'Blow Dry', icon: <Wind className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: 'silk-blowout',
    number: '04',
    categoryBadge: '[ BLOWOUT & FINISH ]',
    title: 'SILK BLOWOUT',
    description: 'Our most-booked treatment for glossy, frizz-free hair that stays salon-perfect all week long.',
    priceRange: '$65 — $110',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85',
    tags: [
      { name: 'Wash & Prep', icon: <Droplets className="w-3.5 h-3.5" /> },
      { name: 'Blow Dry', icon: <Wind className="w-3.5 h-3.5" /> },
      { name: 'Silk Finish', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: 'hair-extensions',
    number: '05',
    categoryBadge: '[ LENGTH & VOLUME ]',
    title: 'HAIR EXTENSIONS',
    description: 'Add instant length and volume using premium ethically sourced, colour-matched, seamlessly blended human hair.',
    priceRange: '$300 — $600',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85',
    tags: [
      { name: 'Colour Match', icon: <Palette className="w-3.5 h-3.5" /> },
      { name: 'Application', icon: <Scissors className="w-3.5 h-3.5" /> },
      { name: 'Blend & Cut', icon: <Scissors className="w-3.5 h-3.5" /> },
    ],
  },
  {
    id: 'scalp-spa',
    number: '06',
    categoryBadge: '[ SCALP & RESTORATION ]',
    title: 'SCALP SPA & REPAIR',
    description: 'Revitalizing botanical micro-steam therapy and peptide infusion to detoxify follicles and restore strength.',
    priceRange: '$95 — $160',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
    tags: [
      { name: 'Scalp Detox', icon: <Droplets className="w-3.5 h-3.5" /> },
      { name: 'Steam Spa', icon: <Wind className="w-3.5 h-3.5" /> },
      { name: 'Massage', icon: <Sparkles className="w-3.5 h-3.5" /> },
    ],
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  // Default open first item like in the video
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="services-section" 
      className="relative w-full bg-[#f4efe9] text-black pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden select-none border-t border-[#e8ded3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8f3429] font-bold text-xs sm:text-sm tracking-wider uppercase"
            >
              [ WHAT WE OFFER ]
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#381611] tracking-tight uppercase leading-none mt-2"
            >
              SERVICES
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#64504a] text-sm sm:text-base md:text-lg max-w-lg mt-4 leading-relaxed font-normal"
            >
              Six signature services, each carefully crafted to give you results that genuinely last, impress, and keep you coming back.
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
              id="services-book-now-btn"
              onClick={() => onOpenBooking()}
              className="group px-7 py-3.5 rounded-[3px] bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
            >
              <span>Book now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={service.id}
                id={`service-accordion-${service.id}`}
                layout
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="bg-white rounded-[3px] overflow-hidden border border-[#eee4d8] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleService(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none hover:bg-neutral-50/70 transition-colors"
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="text-[#8f3429] font-bold text-xs sm:text-sm tracking-wider">
                      [ {service.number} ]
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold font-heading text-[#381611] tracking-tight uppercase">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Step Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#f6f2ec] text-[#63504a] text-xs font-medium border border-[#e8ded3]"
                      >
                        {tag.icon}
                        <span>{tag.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#f2eae1] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Landscape High-Res Image with exact 3px radius and natural headspace framing */}
                        <div className="relative w-full h-[280px] sm:h-[360px] rounded-[3px] overflow-hidden bg-neutral-900 shadow-md">
                          <img
                            src={service.image}
                            alt={service.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-[center_10%] rounded-[3px] transform hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        {/* Right: Detailed Service Description & Pricing */}
                        <div className="space-y-5">
                          <span className="text-[#8f3429] font-bold text-xs sm:text-sm tracking-wider uppercase">
                            {service.categoryBadge}
                          </span>

                          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#381611] tracking-tight uppercase">
                            {service.title}
                          </h4>

                          <p className="text-[#64504a] text-sm sm:text-base leading-relaxed font-normal">
                            {service.description}
                          </p>

                          <div className="pt-2">
                            <p className="text-sm text-[#7a6761]">
                              Price range:{' '}
                              <span className="text-[#381611] font-bold text-base sm:text-lg ml-1">
                                {service.priceRange}
                              </span>
                            </p>
                          </div>

                          <div className="pt-2">
                            <button
                              id={`book-service-btn-${service.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenBooking(service.id);
                              }}
                              className="group px-7 py-3.5 rounded-[3px] bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
                            >
                              <span>Book Service</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
