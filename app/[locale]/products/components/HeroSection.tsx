"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { products as allProducts } from "../products";

const ProductsHeroSection = () => {
  const router = useRouter();
  const t = useTranslations();

  // Get preview products for each category
  const activeProducts = allProducts.filter((p: any) => p.useCase.type.includes("active")).slice(0, 3);
  const everydayProducts = allProducts.filter((p: any) => p.useCase.type.includes("everyday")).slice(0, 3);

  return (
    <section className="w-full min-h-[100vh] bg-gradient-to-br from-[#C6E6F2] via-[#E0F4FF] to-[#F0F9FF] flex flex-col items-center relative overflow-hidden">
      {/* Enhanced Cloud decorations with better responsive sizing */}
      {/* Top-left cloud */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px] z-10 opacity-80">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud left"
          fill
          className="object-contain w-full h-full"
          priority
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 192px, (max-width: 1280px) 256px, 320px"
        />
      </div>

      {/* Top-right cloud (mirrored) */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px] z-10 opacity-80">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Decorative cloud right"
          fill
          className="object-contain w-full h-full transform scale-x-[-1]"
          priority
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 192px, (max-width: 1280px) 256px, 320px"
        />
      </div>

      {/* Bottom floating clouds */}
      <div className="absolute bottom-10 left-10 w-16 sm:w-20 md:w-24 lg:w-32 h-[40px] sm:h-[50px] md:h-[60px] lg:h-[80px] z-10 opacity-40">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Bottom cloud left"
          fill
          className="object-contain w-full h-full"
          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 128px"
        />
      </div>

      <div className="absolute bottom-20 right-16 w-12 sm:w-16 md:w-20 lg:w-24 h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] z-10 opacity-30 transform scale-x-[-1]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Bottom cloud right"
          fill
          className="object-contain w-full h-full"
          sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-16 relative z-20">
        
        {/* Hero Title with improved responsive typography */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-[#F9461C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 whitespace-pre-line drop-shadow-sm">
            {t('products.heroTitle')}
          </h1>
          <p className="text-[#2C5F7A] text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted solutions designed for every lifestyle and wellness need.
          </p>
        </div>

        {/* Enhanced Cards Container with responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          
          {/* Active Lifestyles Card - Enhanced */}
          <div className="group relative bg-gradient-to-br from-[#F9461C] to-[#e63946] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            {/* Card Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-6 sm:p-8 md:p-10 text-white min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col">
              
              {/* Text Content */}
              <div className="flex-1 pr-4 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32 relative z-10">
                <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight">
                  {t('products.activeLifestyles.title')}
                </h3>
                <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 whitespace-pre-line font-medium leading-relaxed">
                  {t('products.activeLifestyles.subtitle')}
                </p>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 whitespace-pre-line leading-relaxed">
                  {t('products.activeLifestyles.description')}
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative z-20 flex justify-start">
                <button
                  onClick={() => router.push('/products/preview/active')}
                  className="bg-white text-[#F9461C] font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg 
                    shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 
                    flex items-center gap-2 group-hover:bg-[#FFE6B0] border-2 border-transparent hover:border-white/20"
                >
                  <span>{t('products.activeLifestyles.viewProducts')}</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>

              {/* Character Image - Improved positioning */}
              <div className="absolute right-[-20px] sm:right-[-10px] md:right-[0px] bottom-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] z-0">
                <Image
                  src="/images/History of CoCo Khmer 3/ActiveLifeStyle@4x.png"
                  alt="Active Lifestyle"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, (max-width: 1280px) 260px, 300px"
                />
              </div>
            </div>
          </div>

          {/* Everyday Relief Card - Enhanced */}
          <div className="group relative bg-gradient-to-br from-[#00B388] to-[#059669] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            {/* Card Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-6 sm:p-8 md:p-10 text-white min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col">
              
              {/* Text Content */}
              <div className="flex-1 pr-4 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32 relative z-10">
                <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight">
                  {t('products.everydayRelief.title')}
                </h3>
                <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 whitespace-pre-line font-medium leading-relaxed">
                  {t('products.everydayRelief.subtitle')}
                </p>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 whitespace-pre-line leading-relaxed">
                  {t('products.everydayRelief.description')}
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative z-20 flex justify-start">
                <button
                  onClick={() => router.push('/products/preview/everyday')}
                  className="bg-white text-[#00B388] font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg 
                    shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 
                    flex items-center gap-2 group-hover:bg-[#FFE6B0] border-2 border-transparent hover:border-white/20"
                >
                  <span>{t('products.everydayRelief.viewProducts')}</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>

              {/* Character Image - Improved positioning */}
              <div className="absolute right-[-20px] sm:right-[-10px] md:right-[0px] bottom-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] z-0">
                <Image
                  src="/images/History of CoCo Khmer 3/DailyLifeStyle@4x.png"
                  alt="Daily Lifestyle"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, (max-width: 1280px) 260px, 300px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Enhancement: Floating Action Indicator */}
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
          <div className="animate-bounce text-[#2C5F7A] opacity-60">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <span className="text-2xl">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHeroSection; 