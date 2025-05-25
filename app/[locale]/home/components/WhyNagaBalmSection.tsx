import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const WhyNagaBalmSection = () => {
  const t = useTranslations('whyNagaBalm');
  const locale = useLocale();

  const cards = [
    {
      key: 'petroleumFree',
      color: "bg-[#CFE8EE]",
      textColor: "text-white",
      logo: "/images/Logo/Naga Balm__Brandmark_Fire.png",
    },
    {
      key: 'wideRange',
      color: "bg-[#00B4D8]",
      textColor: "text-white",
      logo: "/images/Logo/Naga Balm__Brandmark_White.png",
    },
    {
      key: 'handcrafted',
      color: "bg-[#FF4500]",
      textColor: "text-white",
      logo: "/images/Logo/Naga Balm__Brandmark_Gambodge.png",
    },
  ];

  return (
    <section className="w-full bg-[#E0F4F9] py-12 sm:py-16 lg:py-20 flex flex-col items-center relative overflow-hidden">
      {/* Background Logo - responsive */}
      <div className="absolute right-[-15%] top-[30%] w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] opacity-50 pointer-events-none">
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Ice.png"
          alt="Background Logo"
          fill={true}
          className="object-contain opacity-50"
        />
      </div>
      <div className="w-full flex flex-col items-center relative z-10">
        <h3 className={`text-[#FF4500] text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 lg:mb-16 text-center px-4 ${locale === 'km' ? 'font-hanuman' : ''}`}>
          {t('title')}
        </h3>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-stretch w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`card p-4 sm:p-6 lg:p-8 flex-1 w-full lg:min-w-[280px] ${card.color} ${card.textColor} flex flex-col items-start relative overflow-hidden`}
            >
              <div className="absolute right-[-50%] bottom-[-10%] w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] opacity-90">
                <Image
                  src={card.logo}
                  alt="Card Logo"
                  fill={true}
                  className="object-contain opacity-90"
                />
              </div>
              <div className="relative z-10 max-w-full sm:max-w-[80%] lg:max-w-[65%]">
                <div className={`font-extrabold text-lg sm:text-xl mb-2 sm:mb-3 ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`cards.${card.key}.title`)}
                </div>
                <div className={`font-semibold text-base sm:text-lg mb-2 sm:mb-3 ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`cards.${card.key}.subtitle`)}
                </div>
                <div className={`text-sm sm:text-base leading-relaxed ${locale === 'km' ? 'font-hanuman' : ''}`}>
                  {t(`cards.${card.key}.description`)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={`/${locale}/about`}>
          <button className={`bg-[#FF4500] hover:bg-[#d13a17] text-white font-bold py-2.5 sm:py-3 px-8 sm:px-12 rounded-full text-base sm:text-lg transition-colors ${locale === 'km' ? 'font-hanuman' : ''}`}>
            {t('getToKnowUs')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyNagaBalmSection; 