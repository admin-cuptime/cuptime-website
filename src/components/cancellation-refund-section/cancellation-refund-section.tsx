import React from 'react';
import { motion } from 'framer-motion';
import { cancellationRefundData } from './cancellation-refund-data';

const CancellationRefundQuestion = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden px-0 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 w-full items-center justify-center rounded-2xl bg-white p-3 drop-shadow-xl"
      >
        <div className="flex flex-col gap-8 md:p-12">
          <div className="md:mb-3 space-y-6">
            <h2 className="text-sm font-bold text-zinc-900 md:text-xl">
             How the Refund Process Works:
            </h2>
          </div>
          {cancellationRefundData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-bold text-zinc-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg">{item.content}</p>
                <ul className="list-disc space-y-2 pl-6">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-sm text-zinc-600 md:text-base"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CancellationRefundQuestion;
