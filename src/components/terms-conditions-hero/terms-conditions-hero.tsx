'use client';

import React from 'react';
import BagPrinter from "@/assets/png/bag&printer-bg.png"

const TermsConditionsHero = () => {
    
  return (
    <section className="bg-cuptime-pistha h-full lg:h-[50vh] w-full">
      <div
        className="flex flex-col shrink-0 gap-4 bg-cover bg-bottom bg-no-repeat p-4 md:p-12"
        style={{
          backgroundImage: `url(${BagPrinter.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      >
        <section className="relative items-center py-16 text-center justify-center">
          {/* Terms And Conditions Hero Item */}
          <div className="flex basis-full justify-center pl-0">
            <div className="flex text-center px-4 md:px-10 items-center justify-center">
              <div className="flex h-full gap-4">
                <div className="flex w-full items-center justify-center gap-4 md:gap-6">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Terms & Conditions
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

export default TermsConditionsHero;
