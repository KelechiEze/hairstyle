import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface BookingFormSectionProps {
  onOpenContact: () => void;
}

const SERVICES_OPTIONS = [
  'Precision Haircut',
  'Balayage & Colour',
  'Keratin Treatment',
  'Silk Blowout',
  'Hair Extensions',
  'Scalp Spa & Repair',
];

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({ onOpenContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Precision Haircut',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Precision Haircut',
        message: '',
      });
    }, 4000);
  };

  return (
    <section 
      id="booking-section" 
      className="relative w-full bg-[#f4efe9] text-black pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden select-none border-t border-[#e8ded3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8f3429] font-bold text-xs sm:text-sm tracking-wider uppercase"
            >
              [ GET STARTED ]
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-[#381611] tracking-tight uppercase leading-none mt-2"
            >
              BOOKING
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#64504a] text-sm sm:text-base md:text-lg max-w-lg mt-4 leading-relaxed font-normal"
            >
              Book your appointment today for professional hair cutting, styling, and premium salon beauty services.
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
              id="booking-section-contact-btn"
              onClick={onOpenContact}
              className="group px-7 py-3.5 rounded-none bg-[#8f3429] hover:bg-[#7a2c22] active:scale-95 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#8f3429]/25"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* 2-Column Booking Layout: Left Form & Right Sharp Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#faf7f3] p-8 sm:p-10 border border-[#e8ded3] shadow-sm flex flex-col justify-between rounded-none"
          >
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#8f3429]/10 text-[#8f3429] flex items-center justify-center mx-auto rounded-none">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#381611] uppercase">
                  Appointment Request Received
                </h3>
                <p className="text-[#64504a] text-sm max-w-md mx-auto">
                  Thank you! Our concierge team will contact you shortly to confirm your booking time.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#381611] tracking-wide">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Michael"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#e4dcd2] focus:border-[#8f3429] focus:outline-none text-[#381611] placeholder:text-[#9e8f88] text-sm rounded-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#381611] tracking-wide">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jackson"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#e4dcd2] focus:border-[#8f3429] focus:outline-none text-[#381611] placeholder:text-[#9e8f88] text-sm rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone no */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#381611] tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="test@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#e4dcd2] focus:border-[#8f3429] focus:outline-none text-[#381611] placeholder:text-[#9e8f88] text-sm rounded-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-[#381611] tracking-wide">
                      Phone no *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+123 456 789 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#e4dcd2] focus:border-[#8f3429] focus:outline-none text-[#381611] placeholder:text-[#9e8f88] text-sm rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Select Service */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#381611] tracking-wide">
                    Select Service *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full appearance-none px-4 py-3.5 bg-white border border-[#e4dcd2] focus:border-[#8f3429] focus:outline-none text-[#381611] text-sm rounded-none pr-10 transition-colors cursor-pointer"
                    >
                      {SERVICES_OPTIONS.map((srv, sIdx) => (
                        <option key={sIdx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f3429] pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-[#381611] tracking-wide">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#e4dcd2] focus:border-[#8f3429] focus:outline-none text-[#381611] placeholder:text-[#9e8f88] text-sm rounded-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="booking-form-submit-btn"
                  className="w-full py-4 bg-[#8f3429] hover:bg-[#7a2c22] active:scale-[0.99] text-white font-medium text-sm tracking-wide uppercase rounded-none transition-all shadow-md"
                >
                  Submit Form
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Custom Provided Image (Strictly Sharp Edges) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative overflow-hidden bg-neutral-900 shadow-md border border-[#e8ded3] min-h-[480px] lg:min-h-full rounded-none"
          >
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/kjdgfsghdjksmn.png"
              alt="Editorial salon model beauty portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_top] rounded-none select-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
