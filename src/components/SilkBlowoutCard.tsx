import React from 'react';
import { Plus } from 'lucide-react';

const SILK_BLOWOUT_IMAGE_URL = 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80';

interface SilkBlowoutCardProps {
  onClick: () => void;
}

export const SilkBlowoutCard: React.FC<SilkBlowoutCardProps> = ({ onClick }) => {
  return (
    <div
      id="silk-blowout-featured-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      className="group relative flex items-center gap-3.5 sm:gap-4 p-2.5 sm:p-3 pr-5 sm:pr-6 rounded-2xl bg-[#141210]/80 backdrop-blur-xl border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-white/5 active:scale-[0.98] select-none"
    >
      {/* Thumbnail image */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-900 border border-white/10">
        <img
          src={SILK_BLOWOUT_IMAGE_URL}
          alt="Silk Blowout treatment preview"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info text */}
      <div className="flex flex-col justify-center">
        <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider font-heading uppercase group-hover:text-amber-200/90 transition-colors">
          SILK BLOWOUT
        </h4>
        <p className="text-neutral-400 text-[11px] sm:text-xs font-normal mt-0.5">
          Most-booked treatment
        </p>
        <p className="text-neutral-300 text-[11px] sm:text-xs font-medium mt-0.5 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
          Starting from $65 <span className="text-neutral-400">→</span>
        </p>
      </div>

      {/* Plus Icon at Top Right */}
      <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/10 transition-all">
        <Plus className="w-3 h-3" />
      </div>
    </div>
  );
};
