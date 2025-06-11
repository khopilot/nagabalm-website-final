"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const DiscoverSolutionSection = () => {
  const router = useRouter();
  const t = useTranslations('faq.discoverSolution');

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${category}`);
  };

  return (
    <section className="w-full bg-[#D6F2F2] flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6">
      <h2 className="text-[#F9461C] text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10 leading-tight">
        {t('title').split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 w-full max-w-7xl justify-center items-stretch">
        {/* Active Lifestyles Card */}
        <div className="bg-[#F9461C] card p-4 sm:p-6 text-white w-full max-w-2xl flex flex-row items-center relative h-64 sm:h-56 overflow-visible rounded-xl">
          <div className="flex-1 pr-24 sm:pr-32 pl-2 sm:pl-4">
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-2 sm:mb-3 leading-tight">
              {t('activeLifestyles.title')}<br />
            </h3>
            <p className="text-lg sm:text-xl mb-2 sm:mb-3 leading-snug">
              {t('activeLifestyles.subtitle').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90 leading-relaxed">
              {t('activeLifestyles.description').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-10 z-10">
              <button 
                onClick={() => handleCategoryClick('active')}
                className="bg-[#FFE6B0] text-[#F9461C] font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-full text-base sm:text-lg flex items-center gap-2 hover:bg-[#ffd580] transition-colors"
              >
                {t('activeLifestyles.viewProducts')}
              </button>
            </div>
          </div>
          <div className="absolute right-[-10px] bottom-0 top-auto">
            <Image 
              src="/images/History of CoCo Khmer 3/ActiveLifeStyle@4x.png"
              alt="Active Lifestyle"
              width={280}
              height={280}
              className="object-contain sm:w-[300px] sm:h-[300px]"
            />
          </div>
        </div>
        {/* Everyday Relief Card */}
        <div className="bg-[#00B388] card p-4 sm:p-6 text-white w-full max-w-2xl flex flex-row items-center relative h-64 sm:h-56 overflow-visible rounded-xl">
          <div className="flex-1 pr-24 sm:pr-32 pl-2 sm:pl-4">
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-2 sm:mb-3 leading-tight">
              {t('everydayRelief.title')}<br />
            </h3>
            <p className="text-lg sm:text-xl mb-2 sm:mb-3 leading-snug">
              {t('everydayRelief.subtitle').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90 leading-relaxed">
              {t('everydayRelief.description').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-10 z-10">
              <button 
                onClick={() => handleCategoryClick('everyday')}
                className="bg-[#CFE8EE] text-[#F9461C] font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-full text-base sm:text-lg flex items-center gap-2 hover:bg-[#ffd580] transition-colors"
              >
                {t('everydayRelief.viewProducts')}
              </button>
            </div>
          </div>
          <div className="absolute right-[-10px] bottom-0 top-auto">
            <Image 
              src="/images/History of CoCo Khmer 3/DailyLifeStyle@4x.png"
              alt="Daily Lifestyle"
              width={280}
              height={280}
              className="object-contain sm:w-[300px] sm:h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSolutionSection; 