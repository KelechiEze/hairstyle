import React, { useState } from 'react';
import { ArrowRight, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqSectionProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'how-to-book',
    question: 'HOW DO I BOOK?',
    answer: 'Simply visit our booking page online, choose your service, pick a time that suits you, and confirm.',
  },
  {
    id: 'free-consultation',
    question: 'IS CONSULTATION REALLY FREE ALWAYS?',
    answer: 'Yes, our preliminary consultations are 100% complimentary with no obligations attached so we can assess your hair goals accurately.',
  },
  {
    id: 'need-changes',
    question: 'WHAT HAPPENS IF I NEED CHANGES?',
    answer: 'We provide a 7-day perfection guarantee. If anything needs adjusting, we welcome you back at zero additional cost.',
  },
  {
    id: 'appointment-length',
    question: 'HOW LONG DO APPOINTMENTS TAKE?',
    answer: 'Standard haircuts take 45–60 minutes, while full color or smoothing treatments typically range between 2 to 3 hours.',
  },
  {
    id: 'photo-reference',
    question: 'CAN I BRING A PHOTO FOR REFERENCE?',
    answer: 'Absolutely! Photos are the best starting point for our stylists to understand your vision and customize it to your unique features.',
  },
  {
    id: 'walk-ins',
    question: 'DO YOU TAKE WALK-INS?',
    answer: 'While we prioritize pre-booked reservations, walk-ins are warmly accommodated whenever a chair is available.',
  },
  {
    id: 'products-used',
    question: 'WHAT PRODUCTS DO YOU USE EXACTLY?',
    answer: 'We exclusively formulate with sulfate-free, botanical, organic-certified, and premium professional salon lines.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, onOpenContact }) => {
  const [openId, setOpenId] = useState<string | null>('how-to-book');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq-section" 
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
              [ COMMON QUESTIONS ]
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#381611] tracking-tight uppercase leading-none mt-2"
            >
              CLARITY
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#64504a] text-sm sm:text-base md:text-lg max-w-lg mt-4 leading-relaxed font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing in elit. Sed do eiusmod tempor incididunt ut labore dolore
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
              id="faq-book-now-btn"
              onClick={onOpenBooking}
              className="group px-7 py-3.5 rounded-none bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
            >
              <span>Book now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* 2-Column Grid: Left Feature Image & Right FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Sharp Image Card with Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative w-full overflow-hidden bg-neutral-900 shadow-md border border-[#e8ded3] flex flex-col justify-between p-6 rounded-none group"
          >
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/elx4feq6c8zxd0liujqrxdmn6q.png"
              alt="Editorial hair model in burgundy suit"
              referrerPolicy="no-referrer"
              className="w-full h-auto min-h-[440px] sm:min-h-[520px] object-cover object-center rounded-none transform group-hover:scale-102 transition-transform duration-700"
            />

            {/* Bottom Contact Us Button with Sharp Edges */}
            <div className="mt-4 w-full">
              <button
                id="faq-contact-us-btn"
                onClick={onOpenContact}
                className="w-full py-3.5 bg-white hover:bg-[#f6f2ec] active:scale-[0.99] text-[#381611] font-semibold text-sm flex items-center justify-center gap-2 border border-[#e8ded3] rounded-none transition-all shadow-sm group/btn"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: 7 FAQ Accordion Items */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  layout
                  className="bg-white rounded-none border border-[#eee4d8] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left select-none hover:bg-neutral-50/70 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-extrabold font-heading text-[#381611] tracking-tight uppercase">
                      {item.question}
                    </span>

                    <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#8f3429] text-white">
                      {isOpen ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 pt-1">
                          <p className="text-[#64504a] text-sm sm:text-base leading-relaxed font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
