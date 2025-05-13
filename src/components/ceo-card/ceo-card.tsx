'use client';

import Image from 'next/image';
import ceoImage from '@/assets/png/cuptime-ceo.png';
import CuptimeLogo from '@/assets/svg/cuptime-logo-white.svg';
import { motion } from 'framer-motion';

const CeoCard = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden px-8 md:px-16">
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
            <div className="space-y-6">
              <CuptimeLogo className="h-40 w-40" />
              <h2 className="mb-2 text-center text-3xl font-bold text-white md:text-left md:text-4xl">
                Guided by Purpose, Driven by <br /> Passion
              </h2>
              <p className="py-1.5 text-base text-white md:py-3 md:text-xl">
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
            className="flex shrink-0 justify-center lg:w-1/3"
          >
            <div className="relative">
              <Image
                src={ceoImage}
                alt="CEO Image"
                className="rounded-3xl outline-3 outline-offset-2 outline-cuptime-orange"
                width={350}
                height={80}
              />
              <div className="absolute bottom-0 left-0 w-full rounded-b-3 p-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-lg p-6 md:p-16 lg:grid-cols-3">
          <div className="relative">
            <Image
              src={ceoImage}
              alt="CEO Image"
              width={350}
                height={80}
            />
            <div className="absolute bottom-0 left-0 w-auto rounded-b-3xl bg-white/40 p-3 text-center">
              <h3 className="text-cuptime-red text-sm font-bold italic md:text-xl">
                Ram
              </h3>
              <p className="text-sm font-bold text-zinc-700 md:text-lg">
                Tech Team Advisor
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src={ceoImage}
              alt="Team Member"
             width={350}
                height={80}
            />
            <div className="absolute bottom-0 left-0 w-auto rounded-b-3xl bg-white/40 p-3 text-center">
              <h3 className="text-cuptime-red text-sm font-bold italic md:text-xl">
                Prabaharan Venugopal
              </h3>
              <p className="text-sm font-bold text-zinc-700 md:text-lg">
                CEO Of Cuptime
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src={ceoImage}
              alt="Team Member"
             width={350}
                height={80}
            />
            <div className="absolute bottom-0 left-0 w-auto rounded-b-3xl bg-white/40 p-3 text-center">
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
    </section>
  );
};

export default CeoCard;
