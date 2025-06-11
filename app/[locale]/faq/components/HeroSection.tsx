import React from "react";
import Image from "next/image";

const FaqHeroSection = () => (
  <section className="w-full bg-[#CFE8EE] flex flex-col md:flex-row items-start justify-start py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 relative overflow-hidden min-h-[20vh] sm:min-h-[25vh] md:min-h-[28vh]">
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
  </section>
);

export default FaqHeroSection; 