'use client';

import React, { useState,useEffect } from 'react';
import heroleft from "@/assets/png/hero-art-left.png";


const ProductsHero = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
          setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint in Tailwind
        };
    
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

     const backgroundImages = isLargeScreen
    ? `url(${heroleft.src})`
    : `url(${heroleft.src})`;

  

  const backgroundRepeat = isLargeScreen ? 'no-repeat, no-repeat' : 'no-repeat';

  const backgroundSize = isLargeScreen ? 'contain' : 'contain';
  return (
    <section className="bg-cuptime-pistha w-full h-auto">
      <div
        className="relative w-full flex-1 md:px-16 px-8"
      >
        <section className="relative -ml-0 py-16 text-center">
          {/* Products Hero Item */}
          <div className="justify-center flex basis-full pl-0">
            <div
              className="flex flex-col px-4 md:px-10 justify-start items-start"
              style={{
                backgroundImage: backgroundImages,
                backgroundRepeat: backgroundRepeat,
                // backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                height: '350px'
              }}
            >
              <div className="flex h-full flex-col  gap-4">
                <div className="flex w-full flex-col gap-4 md:gap-6 items-center justify-center">
                  <div className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl">
                    Authentic South Indian Flavors,<br />Delivered Fresh
                  </div>
                  <div className="text-base md:text-lg">
                    Experience a curated menu of traditional beverages and healthy snacks — rooted in Madurai’s culture, crafted <br /> without preservatives, and served hot to your workplace.
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row justify-center">
                    <button className="bg-cuptime-black rounded-lg px-4 py-2 text-sm font-semibold text-white md:px-6 w-40 md:py-3 md:text-base">
                      View Menu
                    </button>
                    <button className="from-cuptime-orange to-cuptime-red rounded-lg bg-gradient-to-tr px-4 py-2 text-sm w-40 font-semibold text-white md:py-3 md:text-base">
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
