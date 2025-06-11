"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Selected community photos to display in the grid
const communityImages = [
  "/images/Our Community/DSC06940.jpg",
  "/images/Our Community/DSC06989.jpg",
  "/images/Our Community/DSC07244.jpg",
  "/images/Our Community/480448459_622762500697590_1060124915683718360_n.jpg",
  "/images/Our Community/476885815_619117524395421_1165404816787667151_n.jpg",
  "/images/about-grid/419002545_348958694744640_5701280740609446071_n.jpg",
  "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg",
  "/images/Our Community/476321528_616791734628000_6020345715193527512_n.jpg",
  "/images/Our Community/462737742_8478493322234886_202929487404207175_n.jpg",
  "/images/Our Community/459147107_505390699101438_6388652628537632214_n.jpg",
  "/images/Our Community/459192999_505390715768103_7809267072028969117_n.jpg",
  "/images/Our Community/482193038_950912473882227_4785217563978755392_n.jpg",
];

const CommunitySection = () => {
  const t = useTranslations('about.community');
  
  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 bg-white px-4 sm:px-6">
      <h2 className="text-[#F9461C] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-center">{t('title')}</h2>
      <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 text-center max-w-2xl">
        {t('subtitle')}
      </p>
      
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {communityImages.map((img, idx) => {
            // La première image est grande en haut à gauche
            if (idx === 0) {
              return (
                <div
                  key={idx}
                  className={"col-span-2 row-span-2 overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-xl aspect-square"}
                >
                  <Image
                    src={img}
                    alt={`Naga Balm Community ${idx + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              );
            }
            // La dernière image est grande en bas à droite (col 5/6, row 2/3)
            if (idx === communityImages.length - 1) {
              return (
                <div
                  key={idx}
                  className={"col-span-2 row-span-2 col-start-5 row-start-2 overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-xl aspect-square"}
                >
                  <Image
                    src={img}
                    alt={`Naga Balm Community ${idx + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              );
            }
            // Les autres images sont normales
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md group transition-all duration-300 hover:shadow-xl aspect-square"
              >
                <Image
                  src={img}
                  alt={`Naga Balm Community ${idx + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 