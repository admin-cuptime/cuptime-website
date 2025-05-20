'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Franchisebg from '@/assets/png/franchise.png';
import deliveryImage from '@/assets/png/trust-delivery-time.png';
// import { Link } from 'lucide-react';

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
          <div className="flex w-full flex-col gap-4 text-center md:gap-8 md:text-left">
            <motion.div
              className="text-3xl font-bold text-zinc-900 md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
              }}
            >
              Partner with Us – Serve {``} Tradition, Brew Success
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-base md:text-lg"
            >
              Become a part of the CupTime family. Bring authentic South Indian
              beverages to your community with a proven business model rooted in
              tradition and trust.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                delay: 0.4,
              }}
              className="flex flex-col items-center gap-2 sm:flex-row"
            >
              <Link
                href="/contact-us"
                className="from-cuptime-orange to-cuptime-red hover:opacity-80 transition-all cursor-pointer rounded-lg bg-gradient-to-tr px-4 py-2 text-sm font-semibold text-white md:py-3 md:text-base"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.6,
            }}
            className="w-full"
          >
            <div className="image-section flex items-center justify-between">
              <img
                src={deliveryImage.src}
                alt="Delivery Team"
                className="h-auto w-full rounded-lg brightness-70"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;
