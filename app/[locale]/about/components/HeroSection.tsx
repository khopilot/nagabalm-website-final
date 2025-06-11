"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const AboutHeroSection = () => {
  const t = useTranslations('about.hero');
  
  return (
    <section className="w-full min-h-[65vh] sm:min-h-[60vh] lg:min-h-[45vh] bg-[#FFE6B0] flex flex-col lg:flex-row items-center justify-between pt-4 pb-3 relative overflow-hidden">
      {/* Cloud decorations */}
      {/* Top-left cloud */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-56 xl:w-72 h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud left"
          fill
          className="object-contain w-full h-full"
          priority
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
        />
      </div>
      
      {/* Left side content */}
      <div className="flex-1 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-16 z-10 mt-4 lg:ml-[10%] w-full lg:w-auto">
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="text-[#F9461C] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 whitespace-pre-line">{t('title')}</h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
            {t('description')}
          </p>
          <Link href="#our-story">
            <button className="bg-[#F9461C] hover:bg-[#d13a17] text-white font-bold py-2.5 sm:py-3 px-6 sm:px-10 rounded-full text-base sm:text-lg transition-colors">
              {t('continueToStory')}
            </button>
          </Link>
        </div>
      </div>
      
      {/* Right side with the main logo */}
      <div className="flex-1 flex justify-center items-end relative z-10 px-4 sm:px-8 w-full lg:w-auto">
        <div className="relative w-full flex justify-center lg:-ml-[20%]">
          {/* Main logo (the fire naga) */}
          <Image 
            src="/images/Logo/NagaInFiredefr.png" 
            alt="Naga In Fire Logo" 
            width={900} 
            height={900} 
            className="object-contain w-96 h-96 sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] xl:w-[900px] xl:h-[900px] lg:translate-y-[30%] lg:-translate-x-[20px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 