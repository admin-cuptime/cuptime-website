'use client';

import React from 'react';
import CuptimeLogoWhite from '@/assets/svg/cuptime-logo-white.svg';
import { images } from '@/assets/png/images';
import { Pointer } from '@/components/magicui/pointer';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const GetAppSection = () => {
  return (
    <section className="bg-cuptime-black h-full w-full">
      <div className="flex h-full flex-col items-start justify-between gap-6 px-4 pt-10 md:flex-row md:items-center md:gap-2 md:px-16">
        <div className="flex h-full flex-col gap-12">
          <div className="flex flex-col gap-3">
            <CuptimeLogoWhite className="h-auto w-20" />
            <div className="text-3xl font-bold text-white md:text-5xl">
              Get the CupTime App Now
            </div>
            <div className="text-sm text-white md:text-base">
              For the best offers and best serves to your Employee
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400 md:flex-row md:gap-4 md:text-base">
            <div className="flex items-center gap-1">
              <Check className="text-emerald-400" strokeWidth={4} />
              <div>Browse our full menu</div>
            </div>
            <div className="flex items-center gap-1">
              <Check className="text-emerald-400" strokeWidth={4} />
              <div>Schedule regular orders</div>
            </div>
            <div className="flex items-center gap-1">
              <Check className="text-emerald-400" strokeWidth={4} />
              <div>Get special offers and updates</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={images.getAppImages.getAppSplash.src}
            className="h-auto w-full"
            alt="get-app-splash"
          />
        </div>
      </div>
    </section>
  );
};

export default GetAppSection;
