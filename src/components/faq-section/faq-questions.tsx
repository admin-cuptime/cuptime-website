'use client';

import React from 'react';
import Image from 'next/image';
import { images } from '@/assets/png/images';
import { motion } from 'framer-motion';
import teacup from '@/assets/svg/cuptime-faq.svg';
import { faqData } from './faqData';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQsection = () => {
  const deliveries = [
    {
      Icon: teacup,
      title: 'FAQ – Your Questions, Answered',
      description:
        ' We know you care about quality, timing, and service. Here are answers to some of the most common questions our customers ask.',
    },
  ];

  return (
    <section className="flex h-full items-start justify-center overflow-hidden bg-white px-4 md:px-16">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between md:px-16">
        {/* Left Content Section */}
        <div className="relative flex flex-col justify-start gap-6 lg:w-1/2">
          {deliveries.map((faqsec, index) => (
            <motion.div key={index} className="items-start gap-4">
              <div className="flex-shrink-0 w-35 h-auto lg:mb-6 mb-4">
                <faqsec.Icon/>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 lg:mb-6 mb-4">
                  {faqsec.title}
                </h3>
              </div>
              <div>
                <p className="mb-6 text-base text-gray-700 md:text-lg">
                  {faqsec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Right FAQ Section */}
        <div className="w-auto lg:w-1/2">
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className='text-base text-zinc-900 font-bold md:text-lg'>{faq.title}</AccordionTrigger>
                <AccordionContent className='text-sm text-gray-700 md:text-base'>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
