import React from 'react';
import { motion } from 'framer-motion';
import { privacyPolicyData } from './privacy-policy-data';

const PrivacyPolicyQuestion = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden px-0 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 bg-white p-3 drop-shadow-xl w-full items-center justify-center rounded-2xl"
      >
        <div className="flex flex-col gap-8 md:p-12">
          <div className="mb-6 space-y-6">
            <h2 className="text-sm font-bold text-zinc-900 md:text-lg">
              1. Introduction
            </h2>
            <p className="text-sm md:text-lg">
              Cup Time is committed to protecting the privacy and security of our customers'
              personal and business information. This Privacy Policy explains how we collect,
              use, and protect personal and business data.
            </p>
          </div>
          {privacyPolicyData.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-900 md:text-lg">{item.title}</h3>
              <p className="text-sm md:text-lg">{item.content}</p>
              <ul className="list-disc pl-6 space-y-2">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm md:text-base text-zinc-600">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicyQuestion;
