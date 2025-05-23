import React from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const CraftedCareSection = () => {
  const t = useTranslations();
  
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/Images for NB/nature-landscape-with-vegetation-flora.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-white text-4xl sm:text-5xl font-extrabold text-center mb-8 drop-shadow-lg whitespace-pre-line">
          {t('products.craftedCare.title')}
        </h2>
        <Link href="/products/ingredients">
          <button className="bg-[#F9461C] hover:bg-[#d13a17] text-white font-bold py-3 px-10 rounded-full text-lg transition-colors flex items-center gap-2">
            {t('products.craftedCare.seeIngredients')} <span className="ml-2">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CraftedCareSection;