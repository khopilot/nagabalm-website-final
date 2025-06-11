"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const ContactFormSection = () => {
  const tForm = useTranslations('contact.form');
  const tInfo = useTranslations('contact.info');
  const tVisit = useTranslations('contact.visit');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('/sendmail.php', { method: 'POST', body: data });
    const json = await res.json();
    if (res.ok && json.status === 'OK') {
      alert('Message envoyé !');
      form.reset();
    } else {
      alert('Erreur : ' + (json.error || 'Problème'));
    }
  };

  return (
    <section className="w-full bg-[#FFE6B0] flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-white z-0" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-7xl mx-auto items-stretch relative z-10">
        {/* Left: Form */}
        <div className="w-full flex justify-center h-full">
          <form id="contactForm" onSubmit={handleSubmit} className="w-full max-w-xl bg-[#FFF9F0] border border-[#F9461C]/40 rounded-xl shadow-md p-6 sm:p-8 lg:p-10 flex flex-col h-full gap-3 sm:gap-4">
            <div>
              <div className="font-bold text-base sm:text-lg mb-2">{tForm('title')}</div>
              <div className="text-sm mb-3 sm:mb-4">{tForm('subtitle')}</div>
              <label className="text-xs sm:text-sm font-semibold mb-1 block" htmlFor="contact-fullname">{tForm('fields.fullName')}</label>
              <input id="contact-fullname" name="name" type="text" placeholder={tForm('fields.fullName')} className="border-b border-[#00B388] bg-transparent py-2 px-1 focus:outline-none mb-3 w-full text-sm sm:text-base" />
              <label className="text-xs sm:text-sm font-semibold mb-1 block" htmlFor="contact-email">{tForm('fields.email')}</label>
              <input id="contact-email" name="email" type="email" placeholder={tForm('fields.email')} className="border-b border-[#00B388] bg-transparent py-2 px-1 focus:outline-none mb-3 w-full text-sm sm:text-base" />
              <label className="text-xs sm:text-sm font-semibold mb-1 block" htmlFor="contact-phone">{tForm('fields.phone')}</label>
              <input id="contact-phone" name="phone" type="text" placeholder={tForm('fields.phone')} className="border-b border-[#00B388] bg-transparent py-2 px-1 focus:outline-none mb-3 w-full text-sm sm:text-base" />
              <label className="text-xs sm:text-sm font-semibold mb-1 block" htmlFor="contact-subject">{tForm('fields.subject')}</label>
              <input id="contact-subject" name="subject" type="text" placeholder={tForm('fields.subject')} className="border-b border-[#00B388] bg-transparent py-2 px-1 focus:outline-none mb-3 w-full text-sm sm:text-base" />
            </div>
            <div className="mt-auto flex flex-col gap-3 sm:gap-4">
              <textarea name="message" placeholder={tForm('fields.message')} className="border-b border-[#00B388] bg-transparent py-2 px-1 focus:outline-none min-h-[60px] sm:min-h-[80px] text-sm sm:text-base" />
              <div className="flex justify-end">
                <button type="submit" className="bg-[#F9461C] hover:bg-[#d13a17] text-white font-bold py-2 sm:py-2.5 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-colors flex items-center gap-2">
                  {tForm('button')} <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Right: Contact Info + Address stacked */}
        <div className="w-full flex flex-col gap-6 sm:gap-8 items-center h-full">
          <div className="w-full max-w-xl bg-[#FFF9F0] border border-[#F9461C]/40 rounded-xl shadow-md p-6 sm:p-8 lg:p-10 flex-1 flex flex-col gap-3 sm:gap-4">
            <div className="font-bold text-base sm:text-lg mb-2">{tInfo('title')}</div>
            <div className="text-sm mb-3 sm:mb-4">{tInfo('subtitle')}</div>
            <div className="mb-4">
              <div className="font-bold text-sm mb-1">{tInfo('address.title')}</div>
              <div className="text-sm leading-relaxed">
                {tInfo('address.text').split('\\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < tInfo('address.text').split('\\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mb-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:gap-6 flex flex-col gap-3">
              <div>
                <div className="font-bold text-sm mb-1">{tInfo('email.title')}</div>
                <a href="mailto:info@thenagabalm.com" className="text-sm text-[#F9461C] hover:text-[#d13a17]">
                  info@thenagabalm.com
                </a>
              </div>
              <div>
                <div className="font-bold text-sm mb-1">{tInfo('phone.title')}</div>
                <a href="tel:+85512269359" className="text-sm text-[#F9461C] hover:text-[#d13a17]">
                  +855 12 269 359
                </a>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-sm mb-1">{tInfo('businessHours.title')}</div>
              <div className="text-sm leading-relaxed">
                {tInfo('businessHours.weekdays').split('\\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < tInfo('businessHours.weekdays').split('\\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
                <br />
                <br />
                {tInfo('businessHours.weekends').split('\\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < tInfo('businessHours.weekends').split('\\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="font-bold mt-4 mb-2 text-sm">{tInfo('followUs')}</div>
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
                aria-label="Telegram" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9461C] hover:text-[#d13a17]"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full max-w-xl bg-[#FFF9F0] border border-[#F9461C]/40 rounded-xl shadow-md p-4 sm:p-6 flex flex-col">
            <div className="font-bold text-sm mb-2">{tVisit('title')}</div>
            <div className="text-sm leading-relaxed">
              {tVisit('address').split('\\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < tVisit('address').split('\\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection; 