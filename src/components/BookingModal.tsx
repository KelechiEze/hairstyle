import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Clock, Sparkles, User, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICES_LIST = [
  { id: 'silk-blowout', name: 'Silk Blowout & Thermal Sculpt', price: '$65', duration: '45 mins' },
  { id: 'precision-cut', name: 'Signature Precision Cut & Style', price: '$85', duration: '60 mins' },
  { id: 'dimensional-balayage', name: 'Dimensional Balayage & Gloss', price: '$195', duration: '120 mins' },
  { id: 'scalp-revival', name: 'Botanical Scalp Detox Spa', price: '$90', duration: '50 mins' },
  { id: 'couture-event', name: 'Editorial & Bridal Couture Styling', price: '$140', duration: '75 mins' },
];

const STYLISTS = [
  { id: 'elena', name: 'Elena Rostova', title: 'Master Texture Artist' },
  { id: 'marcus', name: 'Marcus Sterling', title: 'Creative Color Director' },
  { id: 'sarah', name: 'Sarah Chen', title: 'Sculpt & Cut Specialist' },
];

const TIME_SLOTS = [
  '09:30 AM', '11:00 AM', '01:15 PM', '03:00 PM', '04:45 PM', '06:30 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState(initialService || 'silk-blowout');
  const [selectedStylist, setSelectedStylist] = useState('elena');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM');
  const [selectedTime, setSelectedTime] = useState('01:15 PM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-xl bg-[#141210] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            id="close-booking-modal"
            onClick={onClose}
            aria-label="Close booking modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Reserve Appointment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Experience SALONIX
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                  Tailored hair artistry crafted specifically for your texture & personal style.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Select Hair Artistry Service
                  </label>
                  <div className="space-y-2">
                    {SERVICES_LIST.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedService === srv.id
                            ? 'bg-white/10 border-white text-white'
                            : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-neutral-300'
                        }`}
                      >
                        <div>
                          <p className="text-sm font-semibold">{srv.name}</p>
                          <p className="text-xs text-neutral-400">{srv.duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{srv.price}</span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              selectedService === srv.id
                                ? 'border-white bg-white text-black'
                                : 'border-white/30'
                            }`}
                          >
                            {selectedService === srv.id && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stylist Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Select Artist
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {STYLISTS.map((stylist) => (
                      <div
                        key={stylist.id}
                        onClick={() => setSelectedStylist(stylist.id)}
                        className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                          selectedStylist === stylist.id
                            ? 'bg-white/15 border-white text-white'
                            : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-neutral-400'
                        }`}
                      >
                        <p className="text-xs font-semibold text-white">{stylist.name}</p>
                        <p className="text-[10px] text-neutral-400 mt-0.5 truncate">{stylist.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-1 text-xs rounded-lg border font-medium transition-all ${
                          selectedTime === slot
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-400 mb-1">Your Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vanessa Laurent"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-400 mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="submit-booking-btn"
                  className="w-full mt-4 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Confirm Reservation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-extrabold font-heading text-white mb-2">
                Reservation Confirmed
              </h3>
              <p className="text-neutral-300 text-sm max-w-sm mx-auto mb-6">
                Thank you, <span className="text-white font-semibold">{clientName || 'Guest'}</span>. We have secured your appointment with our team.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2 mb-6 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Treatment:</span>
                  <span className="text-white font-semibold">
                    {SERVICES_LIST.find((s) => s.id === selectedService)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Artist:</span>
                  <span className="text-white font-semibold">
                    {STYLISTS.find((s) => s.id === selectedStylist)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Time:</span>
                  <span className="text-white font-semibold">{selectedTime}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
