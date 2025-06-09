import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();
  
  return (
    <footer className="bg-white w-full pt-12 pb-10 relative overflow-hidden">
      {/* Top border responsive width */}
      <div className="w-full flex justify-center">
        <div className="border-t border-gray-200 w-full max-w-7xl"></div>
      </div>
      {/* Background Fire Logo - responsive positioning */}
      <div className="absolute right-0 top-0 h-full w-1/3 sm:w-1/2 lg:w-1/3 xl:w-1/2 flex items-center justify-end overflow-hidden pointer-events-none">
        <Image 
          src="/images/Logo/Naga Balm__Brandmark_Fire.png"
          alt="Naga Balm Fire Background"
          width={600}
          height={600}
          className="object-contain h-full translate-x-1/4 opacity-70 w-80 sm:w-96 lg:w-[500px] xl:w-[600px]"
          style={{objectPosition: 'right top'}}
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 relative z-10 mt-4">
        {/* Logo and description - wider left column */}
        <div className="flex flex-col items-start w-full md:max-w-md md:flex-[1.5]">
          <Image 
            src="/images/Logo/Naga Balm_Primary_Logomark_Primary.png" 
            alt="Naga Balm Logo" 
            width={150} 
            height={80} 
            className="mb-4 w-32 sm:w-36 lg:w-[150px] h-auto" 
          />
          <p className="text-sm sm:text-base mb-3 text-gray-600 leading-relaxed">
            {t('footer.description')}
          </p>
          <div className="text-xs sm:text-sm font-bold">{t('footer.madeInCambodia')}</div>
        </div>
        {/* Navigation and info - responsive columns */}
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* LEFT COLUMN: Company + Products */}
          <div className="space-y-6 sm:space-y-8">
            {/* COMPANY */}
            <div>
              <div className="font-bold mb-3 text-gray-800 text-sm sm:text-base">{t('footer.company')}</div>
              <ul className="text-sm sm:text-base space-y-1.5 text-gray-600">
                <li><Link href="/" className="hover:text-[#F9461C]">{t('navigation.home')}</Link></li>
                <li><Link href="/products" className="hover:text-[#F9461C]">{t('navigation.products')}</Link></li>
                <li><Link href="/about" className="hover:text-[#F9461C]">{t('navigation.about')}</Link></li>
                <li><Link href="/faq" className="hover:text-[#F9461C]">{t('navigation.faq')}</Link></li>
                <li><Link href="/contact" className="hover:text-[#F9461C]">{t('navigation.contact')}</Link></li>
                <li><Link href="/where-to-find" className="hover:text-[#F9461C]">{t('navigation.whereToFind')}</Link></li>
              </ul>
            </div>
            {/* PRODUCTS */}
            <div>
              <div className="font-bold mb-3 text-gray-800 text-sm sm:text-base">{t('footer.products')}</div>
              <ul className="text-sm sm:text-base space-y-1.5">
                <li>
                  <Link 
                    href="/products/ingredients" 
                    className="text-[#F9461C] font-bold hover:text-[#d13a17]"
                  >
                    {t('footer.ingredients')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* RIGHT COLUMN: Contact + Location */}
          <div className="space-y-6 sm:space-y-8">
            {/* CONTACT */}
            <div>
              <div className="font-bold mb-3 text-gray-800 text-sm sm:text-base">{t('footer.contactUs')}</div>
              <div className="text-sm sm:text-base space-y-4 text-gray-600">
                <div>
                  <div className="font-semibold mb-1">{t('footer.email')}</div>
                  <a href="mailto:info@thenagabalm.com" className="text-[#F9461C] hover:text-[#d13a17]">
                  info@thenagabalm.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1">{t('footer.phone')}</div>
                  <a href="tel:+85512269359" className="text-[#F9461C] hover:text-[#d13a17]">
                    +855 12 269 359
                  </a>
                </div>
              </div>
              <div className="font-bold mt-6 mb-3 text-gray-800 text-sm sm:text-base">{t('footer.followUs')}</div>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="https://www.facebook.com/nagabalmkh/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook" 
                  className="text-[#F9461C] hover:text-[#d13a17]"
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
                  className="text-[#F9461C] hover:text-[#d13a17]"
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
                  className="text-[#F9461C] hover:text-[#d13a17]"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* LOCATION */}
            <div>
              <div className="font-bold mb-3 text-gray-800 text-sm sm:text-base">{t('footer.visitUs')}</div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {t('footer.address')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10 border-t border-gray-100 pt-4 relative z-10 px-4 sm:px-6 lg:px-8">
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer; 