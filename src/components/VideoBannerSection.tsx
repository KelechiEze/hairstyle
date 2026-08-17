import React from 'react';

export const VideoBannerSection: React.FC = () => {
  return (
    <section 
      id="video-banner-section" 
      className="relative w-full bg-black overflow-hidden select-none"
    >
      {/* Full width video container without any borders or curves */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[600px] lg:h-[720px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center rounded-none"
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2560&q=85"
        >
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Ambient subtle vignette to match editorial lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none rounded-none" />
      </div>
    </section>
  );
};
