'use client';

import Image from 'next/image';
import ceoImage from '@/assets/png/cuptime-ceo.png';
import CuptimeLogo from '@/assets/svg/cuptime-logo-white.svg';
import { motion } from 'framer-motion';

const CeoCard = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden px-3 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-cuptime-shadow items-center justify-center rounded-2xl bg-gradient-to-tr"
      >
        <div className="flex flex-col justify-between gap-4 p-4 md:p-12 lg:flex-row">
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
            className="flex flex-col items-center lg:w-1/2"
          >
            <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
              <CuptimeLogo className="h-40 w-40" />
              <h2 className="text-center text-3xl font-bold text-white md:text-left md:text-4xl">
                Guided by Purpose, Driven by <br /> Passion
              </h2>
              <p className="text-base text-zinc-300 md:py-3 md:text-lg">
                At CupTime, we believe leadership is about vision and values.
                Our founders and core team lead with the purpose of making
                authentic, traditional beverages accessible — all while creating
                sustainable local opportunities.
              </p>
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
            className="flex w-full shrink-0 justify-center lg:w-1/3"
          >
            <div className="relative">
              <img
                src={ceoImage.src}
                alt="CEO Image"
                className="h-auto w-full rounded-3xl md:w-[350px]"
              />
              <div className="rounded-b-3 absolute bottom-0 left-0 w-full p-3">
                <div className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-white/40 p-3 text-center">
                  <h3 className="text-cuptime-red text-sm font-bold italic md:text-xl">
                    Prabaharan Venugopal
                  </h3>
                  <p className="text-sm font-bold text-zinc-700 md:text-lg">
                    CEO Of Cuptime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* images card */}
        <div className="grid grid-cols-1 items-center justify-items-center gap-3 rounded-lg p-6 px-10 md:grid-cols-2 md:p-16 lg:grid-cols-3">
          <div className="relative flex w-fit justify-center">
            <img
              src={ceoImage.src}
              alt="CEO Image"
              className="h-auto w-full rounded-3xl md:w-[300px]"
            />
            <div className="rounded-b-3 absolute bottom-0 left-0 w-full p-3">
              <div className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-white/40 p-3 text-center">
                <h3 className="text-cuptime-red text-sm font-bold italic md:text-xl">
                  Prabaharan Venugopal
                </h3>
                <p className="text-sm font-bold text-zinc-700 md:text-lg">
                  CEO Of Cuptime
                </p>
              </div>
            </div>
          </div>

          
          <div className="relative flex w-fit justify-center">
            <img
              src={ceoImage.src}
              alt="CEO Image"
              className="h-auto w-full rounded-3xl md:w-[300px]"
            />
            <div className="rounded-b-3 absolute bottom-0 left-0 w-full p-3">
              <div className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-white/40 p-3 text-center">
                <h3 className="text-cuptime-red text-sm font-bold italic md:text-xl">
                  Prabaharan Venugopal
                </h3>
                <p className="text-sm font-bold text-zinc-700 md:text-lg">
                  CEO Of Cuptime
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex w-fit justify-center">
            <img
              src={ceoImage.src}
              alt="CEO Image"
              className="h-auto w-full rounded-3xl md:w-[300px]"
            />
            <div className="rounded-b-3 absolute bottom-0 left-0 w-full p-3">
              <div className="absolute bottom-0 left-0 w-full rounded-b-3xl bg-white/40 p-3 text-center">
                <h3 className="text-cuptime-red text-sm font-bold italic md:text-xl">
                  Prabaharan Venugopal
                </h3>
                <p className="text-sm font-bold text-zinc-700 md:text-lg">
                  CEO Of Cuptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CeoCard;
