'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '@/assets/png/images';
import MySVGlocation from '@/assets/svg/location-09.svg';
import MySVGweb from '@/assets/svg/web-protection.svg';
import MySVGmobile from '@/assets/svg/call-ringing-02.svg';
import { FlipText } from '../magicui/flip-text';
import { TypingAnimation } from '../magicui/typing-animation';
import ContactBusinessCard from '@/components/contact-businesscard/contact-businesscard';

const GetinTouch = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    'mobile-number': '',
    email: '',
    'company-name': '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const options = [
    'Price',
    'Franchise',
    'Services we offer',
    'Call Back',
    'Others',
  ];

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxGp1oat2ce5Yh6lrnvcg6lRj8DcOYgHzGlgHErRqPWdHili0H07TkggIJArz8vJMlrRw/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
          body: JSON.stringify({
            ...form,
            reason: selectedOption || '',
          }),
        }
      );

      setSuccess(
        'Thank you! Your message has been sent. We will reach out to you soon.'
      );
      setForm({
        name: '',
        'mobile-number': '',
        email: '',
        'company-name': '',
        message: '',
      });
      setSelectedOption(null);
    } catch (err: any) {
      setError(
        `Network error. Please try again. ${err?.message ? 'Details: ' + err.message : ''}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div
        className="flex h-[200px] w-full flex-col items-center justify-center bg-cover bg-center md:h-[350px]"
        style={{
          backgroundImage: `url(${images.contact.contactBanner.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <TypingAnimation className="mb-0 text-3xl font-bold text-white md:mb-20 md:text-5xl">
          Get in Touch
        </TypingAnimation>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cuptime-pistha mx-auto -mt-0 w-full items-center justify-center rounded-2xl bg-gradient-to-tr md:-mt-20 md:w-[80%]"
      >
        <div className="flex flex-col justify-between gap-4 p-4 md:p-12 lg:flex-row">
          {/* Left Image Section */}
          <div className="flex flex-col gap-3 lg:w-1/2">
            <h3 className="mb-4 text-start text-lg font-bold text-zinc-900 md:text-2xl">
              Let’s Brew a Conversation
            </h3>
            <div className="space-y-2 text-sm font-medium md:space-y-4 md:text-base">
              <p>
                We’d love to hear from you — whether you’re a business looking
                to serve traditional beverages, a franchise <br />
                enthusiast, or someone who just loves great coffee.
              </p>
              <div className="flex flex-row gap-3 py-2 text-black">
                <div className="h-auto w-7">
                  <MySVGlocation />
                </div>
                No 35, Alagaradi 1st Street, 
                <br />
                (Next to Madurai Muthu Middle School)
                <br />
                Arappalayam, Madurai – 625016
              </div>
              <div className="flex flex-row gap-3 py-2 text-black">
                <div className="h-auto w-7">
                  <MySVGweb />
                </div>
                <Link href="mailto:reach@cuptime.in" className='hover:text-cuptime-red'>reach@cuptime.in</Link>
                <Link href="mailto:franchise@cuptime.in" className='hover:text-cuptime-red flex-col'>franchise@cuptime.in</Link>
              </div>
              <div className="flex flex-row gap-3 py-2 text-black">
                <div className="h-auto w-7">
                  <MySVGmobile />
                </div>
                <Link href="tel:+919876543210" className='hover:text-cuptime-red'>+91 98765 43210</Link>
              </div>
            </div>
          </div>
          {/* Vertical Line */}
          <div className="border-cuptime-border h-auto border-l-2 sm:hidden md:block"></div>
          {/* Right Content Section */}
          <div className="row-span-2 rounded-lg md:rounded-4xl lg:col-span-2 lg:w-3/5 lg:px-4">
            <h3 className="mb-6 text-sm font-semibold text-zinc-900 lg:text-2xl">
              How can we help you?
            </h3>
            <form
              className="space-y-6 text-sm md:text-base"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap gap-4">
                {options.map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
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
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="mobile-number"
                  placeholder="Mobile Number"
                  value={form['mobile-number']}
                  onChange={(e) => {
                    // Only allow numbers and +
                    const value = e.target.value.replace(/[^0-9+]/g, '');
                    setForm({ ...form, 'mobile-number': value });
                  }}
                  pattern="^[0-9+]*$"
                  inputMode="tel"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name"
                  value={form['company-name']}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                maxLength={250}
                className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
              ></textarea>

              {success && <div className="text-green-600">{success}</div>}
              {error && <div className="text-red-600">{error}</div>}

              <div className="text-center">
                <button
                  type="submit"
                  className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-3 text-sm font-semibold text-white md:py-3 md:text-base"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Contact to Cuptime'}
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
