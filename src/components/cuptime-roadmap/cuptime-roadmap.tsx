'use client';

import React, { useState } from 'react';
// import Image from 'next/image';
import MySVG from '@/assets/svg/contact.svg';
const CuptimeRoadmap = () => {
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
    <section>
      <div className="px-4 md:px-8 flex flex-col gap-10">
        <h2 className="text-center text-3xl font-bold text-zinc-900 md:text-4xl">
          Reach Out to CupTime
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-8 overflow-hidden px-4 md:px-36 lg:grid-cols-3">
          {/* Left Section - Contact Form (01) - Spans full height */}
          <div className="row-span-2 rounded-4xl border-2 bg-white p-6 shadow-cuptime-gray md:p-8 lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold text-zinc-900 lg:text-2xl">
              How can we help you?
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      // type="radio"
                      type="checkbox"
                      name="inquiry_type"
                      checked={selectedOption === option}
                      onChange={() => handleCheckboxChange(option)}
                      value={option.toLowerCase()}
                      className="mr-2 h-4 w-4 accent-cuptime-red"
                    />
                    <span className="text-zinc-700">{option}</span>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border-2 border-cuptime-gray px-4 py-2 focus:border-cuptime-red focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-md border-2 border-cuptime-gray px-4 py-2 focus:border-cuptime-red focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-md border-2 border-cuptime-gray px-4 py-2 focus:border-cuptime-red focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border-2 border-cuptime-gray px-4 py-2 focus:border-cuptime-red focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-md border-2 border-cuptime-gray px-4 py-2 focus:border-cuptime-red focus:outline-none"
              ></textarea>

              <div className="text-center">
                <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:py-3 md:text-base">
                  Contact to Cuptime
                </button>
              </div>
            </form>
          </div>

          {/* Right Top Section - Map (02) */}
          <div className="min-h-72 overflow-hidden rounded-4xl bg-white border-cuptime-gray border-2">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0695495558813!2d78.13461807490607!3d9.925402190171927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5d869694bad%3A0x63fa87c371d093b3!2sCuptime!5e0!3m2!1sen!2sin!4v1701834058825!5m2!1sen!2sin"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Right Bottom Section - Address (03) */}
          {/* <div className="bg-white p-6 rounded-lg shadow-sm"> */}
          <div>
            <div className="flex flex-row gap-3">
              <div className="h-auto w-7">
                <MySVG />
              </div>
              <h3 className="mb-4 text-xl font-bold text-zinc-900">
                Contact Us
              </h3>
            </div>
            <div className="space-y-2 px-10 text-zinc-700">
              <p>
                No 35, Alagaradi 1st Street, 
                <br />
                (Next to Madurai Muthu Middle School)
                <br />
                Arappalayam, Madurai – 625016
              </p>
              <p>reach@cuptime.in</p>
              <p>Tel: +91 916 9161110</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CuptimeRoadmap;