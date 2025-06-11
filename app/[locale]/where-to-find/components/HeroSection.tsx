"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const WhereToFindHeroSection = () => {
  const t = useTranslations('whereToFind.hero');

  return (
    <section className="w-full bg-[#FFE6B0] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh]">
      {/* Cloud decorations */}
      {/* Top-left cloud */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-56 xl:w-72 h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud left"
          fill
          className="object-contain w-full h-full"
          priority
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 224px, 288px"
        />
      </div>

      {/* Top-right cloud (mirrored) */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-56 xl:w-72 h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud right"
          fill
          className="object-contain w-full h-full transform scale-x-[-1]"
          priority
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 224px, 288px"
        />
      </div>

      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 z-10 text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <h1 className="text-[#F9461C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2">
          {t('title')}
        </h1>
        <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
          {t('description')}
        </p>
      </div>
    </section>
  );
};

export default WhereToFindHeroSection; 