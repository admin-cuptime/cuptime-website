'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MySVGlocation from '@/assets/svg/location-09.svg';
import MySVGweb from '@/assets/svg/web-protection.svg';
import MySVGmobile from '@/assets/svg/call-ringing-02.svg';

const GetinTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ['Price', 'Services we offer', 'Call Back', 'Others'];

  const handleCheckboxChange = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="flex items-center justify-center overflow-hidden px-10 md:px-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cuptime-pistha w-full items-center justify-center rounded-2xl bg-gradient-to-tr"
      >
        <div className="flex flex-col justify-between gap-4 p-4 md:p-12 lg:flex-row">
          {/* Left Image Section */}
          <div className="flex flex-col gap-3 lg:w-1/2">
            <h3 className="mb-4 text-start text-lg font-bold text-zinc-900 md:text-2xl">
              Let’s Brew a Conversation
            </h3>
            <div className="space-y-3 text-sm font-medium md:space-y-5 md:text-base">
              <p>
                We’d love to hear from you — whether you’re a business looking
                to serve traditional beverages, a franchise <br />
                enthusiast, or someone who just loves great coffee.
              </p>
              <p className='flex flex-row gap-3 py-2 text-black'>
                <div className="h-auto w-7">
                <MySVGlocation />
                 </div>
                No 35, Alagaradi 1st Street, 
                <br />
                (Next to Madurai Muthu Middle School)
                <br />
                Arappalayam, Madurai – 625016
              </p>
              <p className='flex flex-row gap-3 py-2 text-black'>
                <div className='h-auto w-7'>
                    <MySVGweb />
                </div>
                reach@cuptime.in</p>
              <p className='flex flex-row gap-3 py-2 text-black'>
                <div className='h-auto w-7'>
                    <MySVGmobile/>
                </div>
                Tel: +91 916 9161110</p>
            </div>
          </div>
          {/* Right Content Section */}
          <div className="row-span-2 rounded-lg md:rounded-4xl lg:col-span-2 lg:w-3/5">
            <h3 className="mb-6 text-sm font-semibold text-zinc-900 lg:text-2xl">
              How can we help you?
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-sm md:text-base"
            >
              <div className="flex flex-wrap gap-4">
                {options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiry_type"
                      checked={selectedOption === option}
                      onChange={() => handleCheckboxChange(option)}
                      value={option.toLowerCase()}
                      className="accent-cuptime-red mr-2 h-4 w-4"
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
              ></textarea>

              <div className="text-center">
                <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-3 text-sm font-semibold text-white md:py-3 md:text-base">
                  Contact to Cuptime
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetinTouch;
