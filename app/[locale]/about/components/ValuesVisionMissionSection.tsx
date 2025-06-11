"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const ValuesVisionMissionSection = () => {
  const t = useTranslations('about.valuesVisionMission');
  
  const cards = [
    {
      key: "ourValues",
      color: "bg-[#FFC13B]",
      logo: "/images/Logo/Naga Balm__Brandmark_White.png",
    },
    {
      key: "vision",
      color: "bg-[#F9461C]",
      logo: "/images/Logo/Naga Balm__Brandmark_White.png",
    },
    {
      key: "mission",
      color: "bg-[#1EC6E6]",
      logo: "/images/Logo/Naga Balm__Brandmark_White.png",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 bg-white px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full max-w-5xl justify-center items-stretch mb-6 sm:mb-8">
        {cards.map((card, idx) => (
          <div key={idx} className={`flex-1 card p-6 sm:p-8 flex flex-col items-center text-center text-white shadow-lg rounded-lg ${card.color}`}>
            <Image src={card.logo} alt={t(`${card.key}.title`)} width={48} height={48} className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" unoptimized />
            <div className="font-extrabold text-lg sm:text-xl md:text-2xl mb-2">{t(`${card.key}.title`)}</div>
            <div className="text-sm sm:text-base font-medium mb-2">{t(`${card.key}.description`)}</div>
          </div>
        ))}
      </div>
      <hr className="w-full max-w-4xl border-t-2 border-gray-200 my-6 sm:my-8" />
    </section>
  );
};

export default ValuesVisionMissionSection; 