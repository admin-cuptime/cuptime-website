'use client';

import React, { useState } from 'react';
import MySVGmobile from '@/assets/svg/call-ringing-02.svg';
import MySVGlocation from '@/assets/svg/location-09.svg';
import MySVGweb from '@/assets/svg/web-protection.svg';
import { IconCloudUpload } from '@tabler/icons-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

const APPSCRIPT_URL = "https://script.google.com/macros/s/AKfycbzaATDfXTLxbKoDBRMe20ZeS8bt1VIf_iCMn1AyEDRvKIX_lM25472bLKsKLwN33cOR/exec";

const CuptimeJobApplication = ({
  selectedJob,
  setSelectedJob,
  jobPositions,
}: {
  selectedJob?: string;
  setSelectedJob: (job: string) => void;
  jobPositions: string[];
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add state for form fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    'phone-number': '',
    position: '',
  });
  const [error, setError] = useState<string | null>(null);

  // Update form state on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.name === 'phone-number') {
      const value = e.target.value.replace(/\D/g, '').slice(0, 13);
      setForm({ ...form, [e.target.name]: value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Update position when select changes
  const handlePositionChange = (value: string) => {
    setSelectedJob(value);
    setForm({ ...form, position: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await fetch(APPSCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          ...form,
          position: form.position || selectedJob || '',
        }),
      });
      setIsSubmitted(true);
      setForm({
        name: '',
        email: '',
        'phone-number': '',
        position: '',
      });
    } catch (err: any) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col gap-10 px-2 md:px-8">
        <div className="flex flex-col justify-center gap-4 p-4 md:p-12 lg:flex-row lg:items-center">
          {/* summary section */}
          <div className="space-y-2 text-sm font-medium md:space-y-4 md:text-base lg:w-1/3">
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
              Join the Cup Time team
            </h2>
            <p>
              We're always on the lookout for energetic, passionate individuals
              who are ready to help us brew better every day. Whether you're a
              tech expert, customer service pro, or love delivering smiles (and
              tea!), we'd love to hear from you. Submit your details below and
              let's start something fresh together.
            </p>
            <div className="flex flex-row gap-3 py-2 text-black">
              <div className="h-auto w-7">
                <MySVGlocation />
              </div>
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
            </div>
            <div className="flex flex-row gap-3 py-2 text-black">
              <div className="h-auto w-7">
                <MySVGweb />
              </div>
              <Link href="mailto:reach@cuptime.in" className='hover:text-cuptime-red'>reach@cuptime.in</Link>
            </div>
            <div className="flex flex-row gap-3 py-2 text-black">
              <div className="h-auto w-7">
                <MySVGmobile />
              </div>
              <Link href="tel:+919169161110" className='hover:text-cuptime-red'>Tel: +91 916 916 1110</Link>
            </div>
          </div>

          {/* Application Section */}
          <div className="row-span-2 rounded-lg border-2 bg-white p-7 drop-shadow-2xl md:rounded-4xl lg:col-span-2 lg:w-1/2 lg:px-7">
            <h3 className="text-cuptime-red mb-6 py-3 text-lg font-bold md:py-4 lg:text-2xl">
              Work. Grow. Brew. – With Cup Time
            </h3>
            {isSubmitted ? (
              <div className="text-green-600 text-center mb-4">
                Thank you! Your application has been submitted.
              </div>
            ) : null}
            {error && (
              <div className="text-red-600 text-center mb-4">
                {error}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="space-y-8 text-sm md:text-base"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none md:text-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  value={form.email}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none md:text-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="phone-number"
                  placeholder="Phone number"
                  value={form['phone-number']}
                  onChange={handleChange}
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none md:text-lg"
                  required
                  inputMode="numeric"
                  pattern="\d{0,12}"
                  maxLength={12}
                />
                <Select
                  value={form.position || selectedJob}
                  onValueChange={handlePositionChange}
                >
                  <SelectTrigger className="focus:border-cuptime-red border-cuptime-gray text-cuptime-zinc w-full rounded-md border-2 px-4 py-5.5 text-sm focus:outline-none md:py-6.5 md:text-lg">
                    <SelectValue placeholder="Position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Positions</SelectLabel>
                      {jobPositions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-center">
                <button
                  className="from-cuptime-orange to-cuptime-red hover:opacity-80 cursor-pointer transition-all rounded-lg bg-gradient-to-tr px-4 py-3 text-sm font-semibold text-white md:px-8 md:py-3 md:text-base"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CuptimeJobApplication;
