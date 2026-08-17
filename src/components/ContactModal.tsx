import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          className="relative w-full max-w-xl bg-[#141210] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-auto max-h-[88vh] overflow-y-auto"
        >
          <button
            id="close-contact-modal"
            onClick={onClose}
            aria-label="Close contact modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="mb-6">
            <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
              SALONÉ CONCIERGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Contact & Location
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Reach our private salon concierge for customized inquiries, bridal bookings, or appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-white text-xs font-bold mb-1">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span>Atelier Location</span>
              </div>
              <p className="text-xs text-neutral-300">
                480 Madison Avenue, 4th Floor<br />
                New York, NY 10022
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-white text-xs font-bold mb-1">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span>Atelier Hours</span>
              </div>
              <p className="text-xs text-neutral-300">
                Tue – Sat: 9:00 AM – 8:00 PM<br />
                Sun – Mon: By Private Request
              </p>
            </div>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-medium text-neutral-400 mb-1">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-neutral-400 mb-1">Email or Phone</label>
                <input
                  required
                  type="text"
                  placeholder="email@domain.com or phone"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-neutral-400 mb-1">Message or Special Inquiries</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your hair texture goals, special event date, or preferred stylist..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-contact-form"
                className="w-full py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white font-bold text-sm">Message Sent Successfully</p>
              <p className="text-neutral-400 text-xs mt-1">Our concierge team will respond within 2 business hours.</p>
              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2 rounded-full bg-white text-black text-xs font-semibold"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
