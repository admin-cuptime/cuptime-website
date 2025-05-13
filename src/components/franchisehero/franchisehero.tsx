'use client';

import React from 'react';
import Franchisebg from '@/assets/png/franchise.png';
import deliveryImage from '@/assets/png/trust-delivery-time.png';

const FranchiseHero = () => {
  return (
    <section className="bg-cuptime-light h-[calc(100vh-4rem)] w-full">
      <div
        className="relative flex h-full w-full flex-col items-center justify-center bg-cover bg-no-repeat px-4 md:px-10"
        style={{
          backgroundImage: `url(${Franchisebg.src})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4 md:gap-8 text-center md:text-left">
            <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
              Partner with Us – Serve {``} Tradition, Brew Success
            </div>
            <div className="text-base md:text-lg">
              Become a part of the CupTime family. Bring authentic South Indian
              beverages to your community with a proven business model rooted in
              tradition and trust.
            </div>

            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <button className="bg-cuptime-black w-50 rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                Apply Now
              </button>
              <button className="from-cuptime-orange to-cuptime-red w-50 rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:w-60 md:py-3 md:text-base">
                Download Franchise Kit
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="image-section flex items-center justify-between">
              <img
                src={deliveryImage.src}
                alt="Delivery Team"
                className="h-auto w-full rounded-lg brightness-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;
