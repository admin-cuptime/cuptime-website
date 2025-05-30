'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import BerriesBg from '@/assets/png/berries_1_.png';
import IcecubeBg from "@/assets/png/Group.png"
import { link } from 'fs';

const ProductBanner = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden px-0 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cuptime-red w-full items-center justify-center rounded-2xl"
      >
        <div
          className="flex flex-col shrink-0 gap-4 bg-cover bg-bottom bg-no-repeat p-4 md:p-12 lg:flex-row"
          style={{
            backgroundImage: `url(${BerriesBg.src}), url(${IcecubeBg.src})`,
            backgroundPosition: 'right center, left center',
            backgroundSize: 'auto, auto',
            backgroundRepeat: 'no-repeat, no-repeat'
          }}
        >
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.4,
            }}
            className="flex flex-col items-center justify-center gap-6 lg:w-1/2"
          >
            <div className="space-y-6">
              <h2 className="mb-2 text-center md:text-3xl font-bold text-white md:text-left text-2xl">
                Want to Partner or Franchisee with Us?
              </h2>
            </div>
          </motion.div>
          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: 0.4,
            }}
            className="flex shrink-0 lg:justify-end justify-center lg:w-1/2"
          >
            <div className="flex md:flex-row flex-col gap-4">
                <button className="rounded-lg bg-cuptime-black px-6 py-3 text-sm font-bold text-white md:text-base">
                  <Link href="/franchise">Join as Franchisee</Link>
                </button>
                <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-zinc-900 md:text-base">
                  <Link href="/contact-us">Order for Your Business</Link>
                </button>
              </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductBanner;
