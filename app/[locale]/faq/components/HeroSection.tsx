import React from "react";
import Image from "next/image";

const FaqHeroSection = () => (
  <section className="w-full bg-[#CFE8EE] flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh]">
    {/* Cloud decorations */}
    {/* Top-left cloud */}
    <div className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[130px] xl:h-[160px] z-10 opacity-70">
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
    <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[130px] xl:h-[160px] z-10 opacity-70">
      <Image
        src="/images/png/cloud-balm.avif"
        alt="Decorative cloud right"
        fill
        className="object-contain w-full h-full transform scale-x-[-1]"
        priority
        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 256px, 320px"
      />
    </div>

    {/* Main Content Container - Only Logo */}
    <div className="w-full max-w-5xl mx-auto text-center relative z-20">
      
      {/* Logo Section */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] xl:w-[600px] h-[84px] sm:h-[108px] md:h-[132px] lg:h-[156px] xl:h-[180px] transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/Logo/Logo-Landscape-Compact@4x.png"
              alt="Naga Balm Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 440px, (max-width: 1280px) 520px, 600px"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom floating clouds for subtle depth */}
    <div className="absolute bottom-10 left-16 w-20 sm:w-24 md:w-28 h-[40px] sm:h-[50px] md:h-[60px] z-10 opacity-30">
      <Image
        src="/images/png/cloud-balm.avif"
        alt="Bottom cloud left"
        fill
        className="object-contain w-full h-full"
        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
      />
    </div>

    <div className="absolute bottom-16 right-20 w-16 sm:w-20 md:w-24 h-[35px] sm:h-[45px] md:h-[55px] z-10 opacity-25 transform scale-x-[-1]">
      <Image
        src="/images/png/cloud-balm.avif"
        alt="Bottom cloud right"
        fill
        className="object-contain w-full h-full"
        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
      />
    </div>
  </section>
);

export default FaqHeroSection; 