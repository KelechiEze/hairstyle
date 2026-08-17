import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Clock, Check, ArrowRight } from 'lucide-react';

const SILK_BLOWOUT_IMAGE_URL = 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85';

interface SilkBlowoutDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const SilkBlowoutDetailModal: React.FC<SilkBlowoutDetailModalProps> = ({
  isOpen,
  onClose,
  onBookNow,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-[#141210] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-auto max-h-[88vh] overflow-y-auto"
        >
          <button
            id="close-silk-modal"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Hero Treatment Image */}
          <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/10">
            <img
              src={SILK_BLOWOUT_IMAGE_URL}
              alt="Silk Blowout Hair Texture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3.5 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white">
                Most-Booked Treatment
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Silk Blowout
            </h3>
            <span className="text-xl font-extrabold text-white">From $65</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4 pb-4 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-300" />
              45 Minutes
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Mirror Gloss Finish
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
            The signature SALONIX Silk Blowout transforms all natural hair textures with zero chemical damage. Powered by botanical heat-activated silk amino acids and ceramic ion sealing for exceptional silkiness, bouncy movement, and humidity resistance that lasts for days.
          </p>

          <div className="space-y-2 mb-6 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Includes bespoke purifying scalp wash & hydration mask</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Protective heat barrier seal tailored to your strand porosity</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Finished with dry oil mist for luminous weightless bounce</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookNow();
            }}
            id="book-silk-blowout-btn"
            className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Book Silk Blowout ($65)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
