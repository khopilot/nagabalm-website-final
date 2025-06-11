"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const OurStorySection = () => {
  const t = useTranslations('about.ourStory');
  
  return (
    <section
      id="our-story"
      className="w-full bg-[#D6F2F2] flex flex-col md:flex-row items-center justify-between py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 gap-8 sm:gap-10 md:gap-12 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: "url('/images/about-grid/Mainposter.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll"
      }}
    >
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl z-10 text-center md:text-left px-2 sm:px-0 md:ml-12" style={{minHeight: '60vh'}}>
        <h2 className="text-[#F9461C] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 md:mb-6">{t('title')}</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 max-w-lg leading-relaxed whitespace-pre-line">
          {t('description')}
        </p>
      </div>
      {/* Decorative floating leaves could be added here if desired */}
    </section>
  );
};

export default OurStorySection; 