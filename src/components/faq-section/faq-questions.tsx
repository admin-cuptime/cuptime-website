'use client';

import TeaCup from '@/assets/svg/cuptime-faq.svg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fetchFaqData } from '@/app/api/faq';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQsection = () => {
  const deliveries = [
    {
      title: 'FAQ – Your Questions, Answered',
      description:
        ' We know you care about quality, timing, and service. Here are answers to some of the most common questions our customers ask.',
    },
  ];

  const [faqData, setFaqData] = useState<{ title: string; content: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFaq = async () => {
      setLoading(true);
      const data = await fetchFaqData();
      if (Array.isArray(data)) setFaqData(data);
      setLoading(false);
    };
    getFaq();
  }, []);

  const Loader = () => (
    <div className="flex flex-col gap-4 py-2">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-full rounded-lg border border-gray-200 bg-gray-200 animate-pulse"
          style={{
            minHeight: '56px',
            padding: '1rem 1.25rem',
            animationDelay: `${i * 0.1}s`,
          }}
        >
          <div className="h-5 w-2/3 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex h-full items-start justify-center overflow-hidden bg-white px-4 md:px-16">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between md:px-16">
        {/* Left Content Section */}
        <div className="relative flex flex-col justify-start gap-6 lg:w-1/2">
          {deliveries.map((faqsec, index) => (
            <motion.div key={index} className="items-start gap-4">
              <div className="flex-shrink-0 w-35 h-auto lg:mb-6 mb-4">
                <TeaCup className="w-35 h-auto" />
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
          {loading ? (
            <Loader />
          ) : (
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base text-zinc-900 font-bold md:text-lg">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 md:text-base">
                    {faq.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
