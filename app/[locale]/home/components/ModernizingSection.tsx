import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const ModernizingSection = () => {
  const t = useTranslations('modernizing');
  const locale = useLocale();

  return (
    <section className="w-full bg-[#FFE6B0] py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Cloud elements */}
      <div className="absolute left-0 top-0 w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Cloud Decoration Left"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, (max-width: 1024px) 240px, 300px"
        />
      </div>
      <div className="absolute right-0 top-0 w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] transform scale-x-[-1] z-10">
        <Image
          src="/images/png/cloud-balm.avif"
          alt="Cloud Decoration Right"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, (max-width: 1024px) 240px, 300px"
        />
      </div>

      {/* Center content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-20">
        <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] mb-4 sm:mb-5 md:mb-6 relative">
          <Image
            src="/images/Logo/Naga Balm__Brandmark_Fire.png"
            alt="Naga Balm Logo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50px, (max-width: 768px) 60px, (max-width: 1024px) 70px, 80px"
            priority
          />
        </div>
        
        <h2 className={`text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight sm:leading-relaxed px-2 sm:px-4 ${locale === 'km' ? 'font-hanuman text-[#FF4500]' : ''}`}>
          {locale === 'en' ? (
            <>
              <span className="text-[#FF4500]">WE ARE MODERNIZING THE TIME-HONORED REMEDY OF </span>
              <span className="text-[#00B4D8]">THE PRENG KOLA</span>
              <span className="text-[#FF4500]">, PRESERVING ITS RICH </span>
              <span className="text-[#00B4D8]">CAMBODIAN HERITAGE</span>
              <br className="hidden sm:block" />
              <span className="text-[#FF4500]"> WHILE EVOLVING IT FOR THE </span>
              <span className="text-[#00B4D8]">21ST CENTURY.</span>
            </>
          ) : (
            <span className="text-[#FF4500]">{t('message')}</span>
          )}
        </h2>
      </div>
    </section>
  );
};

export default ModernizingSection; 