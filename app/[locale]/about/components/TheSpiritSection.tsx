"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const TheSpiritSection = () => {
  const t = useTranslations('about.theSpirit');
  
  return (
    <section className="w-full bg-[#CFE8EE] flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 gap-8 sm:gap-12 md:gap-16 relative overflow-hidden min-h-[60vh]">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-16">
        <div className="flex-1 flex justify-center items-center relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[380px] order-2 md:order-1">
          <Image
            src="/images/Logo/NagaInFiredefr.png"
            alt="Naga Logo"
            width={350}
            height={350}
            className="relative z-20 object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[350px] xl:h-[350px] translate-y-[20%] sm:translate-y-[30%] md:translate-y-[40%] scale-150 sm:scale-[1.6] md:scale-[1.7] lg:scale-180"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl z-10 text-center md:text-left order-1 md:order-2">
          <h2 className="text-[#F9461C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10">{t('title')}</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6">
            {t('description1')}
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            {t('description2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheSpiritSection; 