import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Sparkles, Scissors, Droplets, Heart } from 'lucide-react';

const SILK_BLOWOUT_IMAGE_URL = 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceToBook: (serviceId: string) => void;
}

const DETAILED_SERVICES = [
  {
    id: 'silk-blowout',
    name: 'Silk Blowout',
    badge: 'Most-Booked',
    price: 'Starting from $65',
    duration: '45 mins',
    image: SILK_BLOWOUT_IMAGE_URL,
    description: 'Our signature ultra-sleek, weightless thermal blowout infused with botanical heat-activated silk proteins for mirror-like shine and natural movement.',
  },
  {
    id: 'precision-cut',
    name: 'Precision Texture Cut & Sculpt',
    badge: 'Bespoke',
    price: '$85 – $120',
    duration: '60 mins',
    image: null,
    description: 'Dry or wet precision carving tailored to enhance bone structure, curl/wave pattern, and effortless daily low-maintenance styling.',
  },
  {
    id: 'dimensional-balayage',
    name: 'Dimensional Hand-Painted Balayage',
    badge: 'Artistry',
    price: '$195 – $280',
    duration: '120 mins',
    image: null,
    description: 'Seamless sun-kissed blending and custom tone calibration using ammonia-free gloss formulation for healthy, vibrant hair longevity.',
  },
  {
    id: 'scalp-revival',
    name: 'Botanical Scalp Detox Spa',
    badge: 'Holistic',
    price: '$90',
    duration: '50 mins',
    image: null,
    description: 'Exfoliating micro-circulation massage, steam infusion, and peptide-rich nutrient mask to revitalize follicle strength and hair density.',
  },
];

export const ServicesModal: React.FC<ServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceToBook,
}) => {
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

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#141210] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-auto max-h-[88vh] overflow-y-auto"
        >
          {/* Close */}
          <button
            id="close-services-modal"
            onClick={onClose}
            aria-label="Close services modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
              #05 PREMIUM HAIR SALON
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Explore Services
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Every appointment includes a personalized texture and lifestyle consultation.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-4">
            {DETAILED_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    {srv.image && (
                      <img
                        src={srv.image}
                        alt={srv.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover border border-white/10"
                      />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white font-heading">
                          {srv.name}
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-semibold text-neutral-300">
                          {srv.badge}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400">{srv.duration}</p>
                    </div>
                  </div>
                  <div className="text-right sm:self-start">
                    <span className="text-sm sm:text-base font-extrabold text-white">
                      {srv.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {srv.description}
                </p>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectServiceToBook(srv.id);
                    }}
                    className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-neutral-200 transition-all"
                  >
                    <span>Book this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
