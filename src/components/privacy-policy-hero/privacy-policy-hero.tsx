'use client';

import React, { useState, useEffect } from 'react';
// import heroleft from '@/assets/png/hero-art-left.png';
// import Bag from "@/assets/png/Bagbg.png";
import BagPrinter from "@/assets/png/bag&printer-bg.png"

const PrivacypolicyHero = () => {
    
  return (
    <section className="bg-cuptime-pistha h-[70vh] w-full">
      <div
        className="flex flex-col shrink-0 gap-4 bg-cover bg-bottom bg-no-repeat p-4 md:p-12 lg:flex-row"
        style={{
          backgroundImage: `url(${BagPrinter.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      >
        <section className="relative -ml-0items-center py-16 text-center">
          {/* Products Hero Item */}
          <div className="flex basis-full justify-center pl-0">
            <div className="flex flex-col items-start justify-start px-4 md:px-10">
              <div className="flex h-full flex-col gap-4">
                <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-6">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Privacy Policies
                  </div>
                  <div className="text-base md:text-lg md:px-42">
                    At Cuptime, we’re committed to protecting your personal data and ensuring transparency in how we
                    collect, use, and safeguard your information. Whether you’re ordering your favorite brew or applying for a 
                    career, your trust matters. Explore our privacy policy to learn more about how we keep your data safe,
                    secure, and never shared without consent.
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

export default PrivacypolicyHero;
