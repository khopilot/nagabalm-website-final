import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();
  
  return (
    <footer className="bg-white w-full pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 md:pb-8 relative overflow-hidden">
      {/* Top border responsive width */}
      <div className="w-full flex justify-center">
        <div className="border-t border-gray-200 w-full max-w-7xl"></div>
      </div>
      {/* Background Fire Logo - half visible on the right side */}
      <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end overflow-hidden pointer-events-none opacity-30 sm:opacity-40 md:opacity-50">
        <Image 
          src="/images/Logo/Naga Balm__Brandmark_Fire.png"
          alt="Naga Balm Fire Background"
          width={600}
          height={600}
          className="object-contain h-full translate-x-1/2 w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px]"
          style={{objectPosition: 'right center'}}
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6 md:gap-8 relative z-10 mt-3 sm:mt-4">
        {/* Logo and description - wider left column */}
        <div className="flex flex-col items-start w-full lg:max-w-md lg:flex-[1.5] text-center sm:text-left">
          <Image 
            src="/images/Logo/Naga Balm_Primary_Logomark_Primary.png" 
            alt="Naga Balm Logo" 
            width={150} 
            height={80} 
            className="mb-2 sm:mb-3 w-24 sm:w-28 md:w-32 lg:w-[150px] h-auto mx-auto sm:mx-0" 
          />
          <p className="text-xs sm:text-sm md:text-base mb-2 text-gray-600 leading-relaxed max-w-md">
            {t('footer.description')}
          </p>
          <div className="text-xs sm:text-sm font-bold text-gray-800 mb-4 sm:mb-0">{t('footer.madeInCambodia')}</div>
        </div>
        {/* Navigation and info - responsive columns */}
        <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* LEFT COLUMN: Company + Products */}
          <div className="space-y-4 sm:space-y-6">
            {/* COMPANY */}
            <div>
              <div className="font-bold mb-2 text-gray-800 text-sm sm:text-base">{t('footer.company')}</div>
              <ul className="text-xs sm:text-sm md:text-base space-y-1 text-gray-600">
                <li><Link href="/" className="hover:text-[#F9461C] transition-colors">{t('navigation.home')}</Link></li>
                <li><Link href="/products" className="hover:text-[#F9461C] transition-colors">{t('navigation.products')}</Link></li>
                <li><Link href="/about" className="hover:text-[#F9461C] transition-colors">{t('navigation.about')}</Link></li>
                <li><Link href="/faq" className="hover:text-[#F9461C] transition-colors">{t('navigation.faq')}</Link></li>
                <li><Link href="/contact" className="hover:text-[#F9461C] transition-colors">{t('navigation.contact')}</Link></li>
                <li><Link href="/where-to-find" className="hover:text-[#F9461C] transition-colors">{t('navigation.whereToFind')}</Link></li>
              </ul>
            </div>
            {/* PRODUCTS */}
            <div>
              <div className="font-bold mb-2 text-gray-800 text-sm sm:text-base">{t('footer.products')}</div>
              <ul className="text-xs sm:text-sm md:text-base space-y-1">
                <li>
                  <Link 
                    href="/products/ingredients" 
                    className="text-[#F9461C] font-bold hover:text-[#d13a17] transition-colors"
                  >
                    {t('footer.ingredients')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* RIGHT COLUMN: Contact + Location */}
          <div className="space-y-4 sm:space-y-6">
            {/* CONTACT */}
            <div>
              <div className="font-bold mb-2 text-gray-800 text-sm sm:text-base">{t('footer.contactUs')}</div>
              <div className="text-xs sm:text-sm md:text-base space-y-2 sm:space-y-3 text-gray-600">
                <div>
                  <div className="font-semibold mb-0.5">{t('footer.email')}</div>
                  <a href="mailto:info@thenagabalm.com" className="text-[#F9461C] hover:text-[#d13a17] transition-colors break-all">
                  info@thenagabalm.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-0.5">{t('footer.phone')}</div>
                  <a href="tel:+85512269359" className="text-[#F9461C] hover:text-[#d13a17] transition-colors">
                    +855 12 269 359
                  </a>
                </div>
              </div>
              <div className="font-bold mt-3 sm:mt-4 mb-2 text-gray-800 text-sm sm:text-base">{t('footer.followUs')}</div>
              <div className="flex gap-2 sm:gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.facebook.com/nagabalmkh/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook" 
                  className="text-[#F9461C] hover:text-[#d13a17] transition-colors duration-200 p-1 bg-gray-50 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.1,3.3,9.1,5.47V7.46H5.5v3.4h3.6V22.5h5.4V10.86h3.47l.44-3.4"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/nagabalm?igsh=dWhhYW1sd3M4d2Iy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram" 
                  className="text-[#F9461C] hover:text-[#d13a17] transition-colors duration-200 p-1 bg-gray-50 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.2c3.2,0,3.6,0,4.8.1c3.3.1,4.8,1.7,4.9,4.9c.1,1.2.1,1.6.1,4.8s0,3.6-.1,4.8c-.1,3.2-1.7,4.8-4.9,4.9c-1.2.1-1.6.1-4.8.1s-3.6,0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9c-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-3.2,1.7-4.8,4.9-4.9c1.2-.1,1.6-.1,4.8-.1M12,0C8.7,0,8.3,0,7.1.1c-4.4.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12s0,3.7.1,4.9c.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-.1c4.4-.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0Zm0,5.8A6.2,6.2,0,1,0,18.2,12,6.2,6.2,0,0,0,12,5.8Zm0,10.2A4,4,0,1,1,16,12,4,4,0,0,1,12,16Zm6.4-10.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,18.4,5.5Z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/nagabalm" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram" 
                  className="text-[#F9461C] hover:text-[#d13a17] transition-colors duration-200 p-1 bg-gray-50 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* LOCATION */}
            <div>
              <div className="font-bold mb-2 text-gray-800 text-sm sm:text-base">{t('footer.visitUs')}</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {t('footer.address')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4 sm:mt-6 border-t border-gray-100 pt-2 sm:pt-3 relative z-10 px-4 sm:px-6 lg:px-8">
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer; 