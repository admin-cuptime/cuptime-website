'use client';

import React, { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import MySVG from '@/assets/svg/contact.svg';
const CuptimeRoadmap = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    'mobile-number': '',
    email: '',
    'company-name': '',
    message: '',
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [radioError, setRadioError] = useState<string | null>(null);

  const options = [
    'Price',
    'Franchisee',
    'Services we offer',
    'Call Back',
    'Others',
  ];

  const handleCheckboxChange = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);
    setRadioError(null);

    if (!selectedOption) {
      setRadioError('Please select an option for how we can help you.');
      setIsSubmitting(false);
      return;
    }

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
      setIsSubmitted(true);
    } catch (err: any) {
      setError(
        `Network error. Please try again. ${err?.message ? 'Details: ' + err.message : ''}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col gap-10 px-2 py-8 md:px-8 md:py-16">
        <h2 className="text-center text-3xl font-bold text-zinc-900 md:text-4xl">
          Reach Out to Cup Time
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-8 overflow-hidden md:px-36 lg:grid-cols-3">
          <div className="shadow-cuptime-gray row-span-2 rounded-lg border-2 bg-white p-3 md:rounded-4xl md:p-8 lg:col-span-2">
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
                      type="radio"
                      name="inquiry_type"
                      checked={selectedOption === option}
                      onChange={() => handleCheckboxChange(option)}
                      value={option.toLowerCase()}
                      className="accent-cuptime-red mr-2 h-4 w-4"
                      required
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                ))}
              </div>
              {radioError && <div className="text-red-600">{radioError}</div>}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-2 focus:outline-none md:py-3"
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
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-2 focus:outline-none md:py-3"
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
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-2 focus:outline-none md:py-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-2 focus:outline-none md:py-3"
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
                className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-2 focus:outline-none md:py-3"
              ></textarea>

              {success && <div className="text-green-600">{success}</div>}
              {error && <div className="text-red-600">{error}</div>}

              <div className="text-center">
                <button
                  type="submit"
                  className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 md:py-3 md:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Contact Cuptime'}
                </button>
              </div>
            </form>
          </div>
          <div className="border-cuptime-gray min-h-72 overflow-hidden rounded-4xl border-2 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15720.10632417623!2d78.09677686443828!3d9.931744173347335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf633d31d6f5%3A0x55317bec2230d715!2sCup%20Time%20-%20Delivering%20Coffee%20%26%20Tea%20in%20Madurai!5e0!3m2!1sen!2sin!4v1747494577899!5m2!1sen!2sin"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="flex flex-row gap-3">
              <div className="h-auto w-7">
                <MySVG />
              </div>
              <h3 className="mb-4 text-lg font-bold text-zinc-900 md:text-xl">
                Contact Us
              </h3>
            </div>
            <div className="space-y-2 px-4 text-sm font-medium md:px-10 md:text-base">
              <p>
                <Link
                  href="https://maps.app.goo.gl/UHChYbATqTrxVKp78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cuptime-red"
                >
                  No 35, Alagaradi 1st Street, 
                  <br />
                  (Next to Madurai Muthu Middle School)
                  <br />
                  Arappalayam, Madurai – 625016
                </Link>
              </p>
              <p>
                For franchisee Enquiry <br />
                <a
                  href="mailto:franchise@cuptime.in"
                  className="text-cuptime-red"
                >
                  franchise@cuptime.in
                </a>
              </p>
              <p>
                For order and other Enquiry <br />
                <a href="mailto:reach@cuptime.in" className="text-cuptime-red">
                  reach@cuptime.in
                </a>
              </p>
              <p>
                <Link
                  href="tel:+919169161110"
                  className="hover:text-cuptime-red"
                >
                  Tel: +91 916 916 1110
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CuptimeRoadmap;
