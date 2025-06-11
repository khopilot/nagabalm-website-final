"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const styles = {
  faqSection: "w-full bg-[#CFE8EE] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden",
  container: "max-w-6xl mx-auto",
  content: "flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-12",
  leftColumn: "flex-1 w-full lg:w-auto",
  rightColumn: "flex-1 max-w-none lg:max-w-2xl w-full",
  faqList: "flex flex-col gap-3 sm:gap-4",
  faqItem: "border-2 border-[#F9461C] rounded-lg bg-white transition-all duration-200 shadow-sm hover:shadow-md",
  question: "w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F9461C] focus:ring-opacity-20",
  open: "bg-[#FFF6F0]",
  icon: "ml-2 sm:ml-4 text-[#F9461C] text-xl sm:text-2xl flex-shrink-0",
  answer: "px-4 sm:px-6 pb-3 sm:pb-4 text-xs sm:text-sm md:text-base text-gray-700 border-t border-[#F9461C] leading-relaxed",
  inlineLink: "text-[#F9461C] font-medium hover:underline"
};

const FAQItem = ({ 
  question, 
  answer, 
  linkText, 
  linkSuffix, 
  isOpen, 
  onToggle,
  questionIndex
}: {
  question: string;
  answer: string;
  linkText?: string | null;
  linkSuffix?: string | null;
  isOpen: boolean;
  onToggle: () => void;
  questionIndex: number;
}) => {
  // Special handling for FAQs that contain links
  const isFirstFAQ = questionIndex === 0; // "What is Naga Balm?"
  const isB2BFAQ = questionIndex === 13; // "Is Naga Balm available for B2B..."
  
  // Format the answer text to handle line breaks properly
  const formattedAnswer = answer.split('\n').map((line, index, array) => {
    if (isFirstFAQ && linkText) {
      return (
        <React.Fragment key={index}>
          {line}
          <Link href="/products" className={styles.inlineLink}>{linkText}</Link>
          {index < array.length - 1 && <br />}
        </React.Fragment>
      );
    }
    if (isB2BFAQ && linkText) {
      return (
        <React.Fragment key={index}>
          {line}
          <Link href="/contact" className={styles.inlineLink}>{linkText}</Link>
          {linkSuffix || ""}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    );
  });

  return (
    <motion.div
      className={styles.faqItem}
      initial={false}
    >
      <button
        className={`${styles.question} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
      >
        <span>{question}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formattedAnswer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqAccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');

  return (
    <section className={styles.faqSection + " relative"}>
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-white z-0" />
      <div className={styles.container + " relative z-10"}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className="flex flex-col justify-start items-start max-w-xl z-10 mt-0 text-center lg:text-left">
              <h1 className="text-[#F9461C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3">{t('hero.title')}</h1>
              <div className="text-[#F9461C] italic text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{t('hero.subtitle')}</div>
              <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
          </div>
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.faqList}>
              {Array.from({ length: 14 }, (_, i) => {
                const questionKey = `questions.${i}`;
                const question = t(`${questionKey}.question`);
                const answer = t(`${questionKey}.answer`);
                
                // Check if linkText and linkSuffix exist before trying to use them
                const linkText = t.has(`${questionKey}.linkText`) ? t(`${questionKey}.linkText`) : null;
                const linkSuffix = t.has(`${questionKey}.linkSuffix`) ? t(`${questionKey}.linkSuffix`) : null;

                return (
                  <FAQItem
                    key={i}
                    question={question}
                    answer={answer}
                    linkText={linkText}
                    linkSuffix={linkSuffix}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    questionIndex={i}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection; 