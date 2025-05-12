'use client';

import React, { useState, useEffect } from 'react';
import heroleft from '@/assets/png/hero-art-left.png';

const ProductsHero = () => {
  return (
    <section className="bg-cuptime-pistha h-[70vh] w-full">
      <div
        className="relative w-full flex-1 px-8 md:px-16 bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${heroleft.src})` }}
      >
        <section className="relative -ml-0 py-16 text-center">
          {/* Products Hero Item */}
          <div className="flex basis-full justify-center pl-0">
            <div className="flex flex-col items-start justify-start px-4 md:px-10">
              <div className="flex h-full flex-col gap-4">
                <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-6">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Authentic South Indian Flavors,
                    <br />
                    Delivered Fresh
                  </div>
                  <div className="text-base md:text-lg">
                    Experience a curated menu of traditional beverages and
                    healthy snacks — rooted in Madurai’s culture, crafted <br />{' '}
                    without preservatives, and served hot to your workplace.
                  </div>

                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button className="bg-cuptime-black w-40 rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                      View Menu
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red w-40 rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:py-3 md:text-base">
                      Order Now
                    </button>
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

export default ProductsHero;
