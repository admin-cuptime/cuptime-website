'use client';

import React from 'react';
import { images } from '@/assets/png/images';
import PlayStore from '@/assets/svg/playstore.svg';
import AppStore from '@/assets/svg/apple-logo.svg';
import { motion } from 'framer-motion';
import { handleAppRedirect } from '@/utils/helper';
import { handlePlaystoreRedirect } from '@/utils/ios-helper';

const CuptimeMobileHero = () => {
  return (
    <section className="h-full lg:h-[calc(100vh-4rem)] w-full bg-zinc-100 py-6 lg:py-0">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-cover bg-no-repeat px-4 md:px-10">
        <div className="flex h-full flex-col items-center justify-center gap-4 md:flex-row">
          <motion.div 
            className="flex w-full flex-col gap-2 text-center md:gap-5 md:text-left lg:w-[60%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your Daily Cup, Just a Tap Away
            </motion.div>
            <motion.div 
              className="text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Filter coffee, tea & snacks—customized and delivered on time.
            </motion.div>
            <motion.div 
              className="flex flex-col items-center gap-2 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <button className="flex w-52 cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-zinc-300 bg-white px-6 py-2 transition-all duration-300 hover:bg-zinc-300 md:w-fit"
              onClick={handleAppRedirect}
              >
                <PlayStore className="h-8 w-8" />
                <div className="flex flex-col leading-none">
                  <span className="text-[8px] font-semibold">GET IT ON</span>
                  <span className="text-base leading-none font-semibold">
                    Google Play
                  </span>
                </div>
              </button>
              <button className="flex w-52 cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-zinc-300 bg-white px-6 py-2 transition-all duration-300 hover:bg-zinc-300 md:w-fit"
              onClick={handlePlaystoreRedirect}
              >
                <AppStore className="h-8 w-8" />
                <div className="flex flex-col leading-none">
                  <span className="text-[8px]">GET IT ON</span>
                  <span className="text-base leading-none font-semibold">
                    App Store
                  </span>
                </div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="image-section"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              damping: 12, 
              stiffness: 100, 
              delay: 0.3
            }}
          >
            <img
              src={images.cuptimeMobileSection.cuptimeMobileSplash.src}
              alt="Delivery Team"
              className="h-auto w-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CuptimeMobileHero;
