"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const AboutHeroSection = () => {
  const t = useTranslations('about.hero');
  
  return (
    <section className="w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] bg-[#FFE6B0] flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Cloud decorations */}
      {/* Top-left cloud */}
      <div className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[130px] xl:h-[160px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud left"
          fill
          className="object-contain w-full h-full"
          priority
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 256px, 320px"
        />
      </div>

      {/* Top-right cloud (mirrored) */}
      <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[130px] xl:h-[160px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud right"
          fill
          className="object-contain w-full h-full transform scale-x-[-1]"
          priority
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 256px, 320px"
        />
      </div>
      
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full relative z-10">
        
        {/* Left side content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pr-8 xl:pr-12 text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="w-full max-w-2xl">
            <h1 className="text-[#F9461C] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight whitespace-pre-line">
              {t('title')}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t('description')}
            </p>
            <Link href="#our-story">
              <button className="bg-[#F9461C] hover:bg-[#d13a17] text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg md:text-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                {t('continueToStory')}
              </button>
            </Link>
          </div>
        </div>
        
        {/* Right side with the main logo */}
        <div className="flex-1 flex justify-center items-center relative order-1 lg:order-2 w-full lg:pl-4 xl:pl-8">
          <div className="relative w-full flex justify-center">
            {/* Main logo (the fire naga) */}
            <Image 
              src="/images/Logo/NagaInFiredefr.png" 
              alt="Naga In Fire Logo" 
              width={900} 
              height={900} 
              className="object-contain w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] drop-shadow-lg"
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, (max-width: 1536px) 700px, 800px"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutHeroSection; 