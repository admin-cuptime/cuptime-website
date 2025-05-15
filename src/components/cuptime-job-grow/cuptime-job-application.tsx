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

const CuptimeJobApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section>
      <div className="flex flex-col gap-10 px-2 md:px-8">
        <div className="flex flex-col justify-center gap-4 p-4 md:p-12 lg:flex-row lg:items-center">
          {/* summary section */}
          <div className="space-y-2 text-sm font-medium md:space-y-4 md:text-base lg:w-1/3">
            <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
              Join the CupTime team
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
              reach@cuptime.in
            </div>
            <div className="flex flex-row gap-3 py-2 text-black">
              <div className="h-auto w-7">
                <MySVGmobile />
              </div>
              Tel: +91 916 9161110
            </div>
          </div>

          {/* Application Section */}
          <div className="row-span-2 rounded-lg border-2 bg-white p-7 drop-shadow-2xl md:rounded-4xl lg:col-span-2 lg:w-1/2 lg:px-7">
            <h3 className="text-cuptime-red mb-6 py-3 text-lg font-bold md:py-4 lg:text-2xl">
              Work. Grow. Brew. – With Cuptime
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 text-sm md:text-base"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none md:text-lg"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none md:text-lg"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none md:text-lg"
                />
                {/* <input
                  type="text"
                  placeholder="Position"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                /> */}
                <Select>
                  <SelectTrigger className="focus:border-cuptime-red border-cuptime-gray text-cuptime-zinc w-full rounded-md border-2 px-4 py-5.5 text-sm focus:outline-none md:py-6.5 md:text-lg">
                    <SelectValue placeholder="Position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Positions</SelectLabel>
                      <SelectItem value="Delivery Person">
                        Delivery Person
                      </SelectItem>
                      <SelectItem value="Office Admin">Office Admin</SelectItem>
                      <SelectItem value="Supervisor">Supervisor</SelectItem>
                      <SelectItem value="Driver">Driver</SelectItem>
                      <SelectItem value="Digital Marketing">
                        Digital Marketing
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Select>
                  <SelectTrigger className="focus:border-cuptime-red border-cuptime-gray text-cuptime-zinc w-full rounded-md border-2 px-4 py-5.5 text-sm focus:outline-none md:py-6.5 md:text-lg">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Our Locations</SelectLabel>
                      <SelectItem value="Madurai">Madurai</SelectItem>
                      <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                      <SelectItem value="Trichy">Trichy</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <input
                  type="text"
                  placeholder="Working Location"
                  className="border-cuptime-gray focus:border-cuptime-red w-full rounded-md border-2 px-4 py-3 focus:outline-none"
                /> */}
                <div className="relative">
                  <IconCloudUpload className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    placeholder="Upload Your Resume"
                    className="border-cuptime-gray text-cuptime-zinc focus:border-cuptime-red w-full rounded-md border-2 border-dashed px-4 py-3 pl-10 text-center focus:outline-none md:text-lg"
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-3 text-sm font-semibold text-white md:px-8 md:py-3 md:text-base">
                  Submit
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
