'use client';

import React, { useState,useEffect } from 'react';
// import heroleft from "@/assets/png/hero-art-right.png";
// import heroright from "@/assets/png/hero-art-left.png"
import Franchisebg from "@/assets/png/franchise.png"
import Image from 'next/image';
import deliveryImage from '@/assets/png/trust-delivery-time.png';

const FranchiseHero = () => {

  return (
    <section className="bg-cuptime-light w-full">
      <div
        className="relative w-full flex-1 px-4 bg-no-repeat bg-cover justify-end "
        style={{ backgroundImage: `url(${Franchisebg.src})`, backgroundSize: "full full" }}
      >
        <section className="relative -ml-0 py-16">
          {/* Franchise Hero Item */}
          <div className="flex basis-full pl-0">
            <div
              className="flex flex-col px-4 md:px-10"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 md:w-1/2 md:gap-6">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Partner with Us – Serve {``} Tradition, Brew Success
                  </div>
                  <div className="text-base md:text-lg">
                    Become a part of the CupTime family. Bring authentic South Indian 
                    beverages to your community with a proven business model rooted 
                    in tradition and trust.
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row items-center">
                    <button className="bg-cuptime-black rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 w-50 md:text-base">
                      Apply Now
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold w-50 md:w-60 text-white md:py-3 md:text-base">
                      Download Franchise Kit
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="image-section flex items-center justify-between">
                    <Image
                      src={deliveryImage}
                      alt="Delivery Team"
                      className="rounded-lg"
                    />
                  </div>
                </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FranchiseHero;
