import React from "react";
import Image from "next/image";

const FaqHeroSection = () => (
  <section className="w-full bg-[#CFE8EE] flex flex-col md:flex-row items-start justify-start py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 relative overflow-hidden min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh]">
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
  </section>
);

export default FaqHeroSection; 