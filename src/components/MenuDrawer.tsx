import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Instagram, Phone, MapPin, Sparkles } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenServices: () => void;
  onOpenContact: () => void;
  onOpenSilkBlowout: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenServices,
  onOpenContact,
  onOpenSilkBlowout,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Slide-in Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#110f0e] border-l border-white/10 p-8 sm:p-10 flex flex-col justify-between z-10 text-white shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-xl tracking-wider font-heading">
                SALONIX<span className="text-xs text-neutral-400 font-normal">®</span>
              </span>
            </div>
            <button
              id="close-menu-drawer"
              onClick={onClose}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 my-auto py-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              #05 PREMIUM HAIR SALON
            </span>

            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenServices();
                }}
                className="text-2xl sm:text-3xl font-heading font-bold text-left text-neutral-200 hover:text-white flex items-center justify-between group transition-colors"
              >
                <span>Services & Treatments</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenSilkBlowout();
                }}
                className="text-2xl sm:text-3xl font-heading font-bold text-left text-neutral-200 hover:text-white flex items-center justify-between group transition-colors"
              >
                <span>Silk Blowout ($65)</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="text-2xl sm:text-3xl font-heading font-bold text-left text-neutral-200 hover:text-white flex items-center justify-between group transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="text-2xl sm:text-3xl font-heading font-bold text-left text-neutral-200 hover:text-white flex items-center justify-between group transition-colors"
              >
                <span>Contact & Atelier</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </nav>
          </div>

          {/* Bottom info */}
          <div className="pt-6 border-t border-white/10 space-y-4 text-xs text-neutral-400">
            <div className="flex items-center justify-between">
              <span>Atelier: Madison Ave, New York</span>
              <span className="text-white font-medium">Tue – Sat</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
            >
              <span>Reserve Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
