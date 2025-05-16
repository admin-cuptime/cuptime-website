'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import MySVGcalender from '@/assets/svg/calendar.svg';
import { ChevronLeft } from 'lucide-react';
import BlogImage from '@/assets/png/Blogs-2.png';
import { motion } from 'framer-motion';

const blogsdetails = [
  {
    image: BlogImage,
    tags: ['Tea', 'Coffee'],
    date: 'Feb 14, 2022',
    title: 'Fueling Productivity One Cup at a Time – The CupTime Way',
    description:
      'In the fast-paced world of work, staying alert, energized, and refreshed isn’t just a luxury—it’s a necessity. Whether you’re tackling early meetings, powering through deadlines, or managing a night shift, a good cup of tea or coffee can make all the difference. That’s where CupTime steps in.',
  },
];
const highlights = [
  {
    title: 'Subscription Convenience:',
    text: 'Choose your favorite beverage combo, set your schedule, and let us take care of the rest.',
  },
  {
    title: 'Customization:',
    text: 'No sugar? Extra strong? Light brew? Personalize your cup every single time.',
  },
  {
    title: 'Eco-Conscious Delivery:',
    text: 'We use reusable flasks and encourage zero waste with our returnable containers.',
  },
  {
    title: 'Punctuality Promise:',
    text: 'Timed deliveries that sync perfectly with your routine.',
  },
];

const BlogsDetails = () => {
  const router = useRouter();

  return (
    <div className="mx-auto w-full px-4 py-10 md:px-52">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-cuptime-midnight hover:text-cuptime-red mb-6 flex items-center text-lg font-bold hover:underline md:text-2xl"
      >
        <ChevronLeft className="mr-2 h-5 w-5" />
        Back
      </button>
      <div className="grid grid-cols-1 gap-8 md:gap-16">
        {blogsdetails.map((blogsdetails, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div key={index} className="overflow-hidden rounded-xl bg-white">
              <div
                style={{
                  backgroundImage: `url(${blogsdetails.image.src})`,
                }}
                className="relative h-80 w-full rounded-2xl bg-cover bg-center md:h-[500px]"
              ></div>
              <div className="py-2 md:py-5">
                <div className="flex items-center gap-5 py-2 sm:gap-2 md:py-5">
                  {blogsdetails.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-cuptime-pink font-sm text-cuptime-red rounded-full px-2 py-1 text-base md:px-4 md:font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="flex items-center gap-2 px-4 text-sm text-zinc-900 md:text-base">
                    <div className="h-auto w-7 shrink-0">
                      <MySVGcalender />
                    </div>
                    {blogsdetails.date}
                  </span>
                </div>
                <div>
                  <h3 className="text-cuptime-midnight text-xl font-bold md:text-3xl">
                    {blogsdetails.title}
                  </h3>
                  <p className="py-2 text-sm text-zinc-700 md:py-5 md:text-base">
                    {blogsdetails.description}
                  </p>
                </div>
                <motion.h2
                  className="text-cuptime-midnight text-xl font-bold md:text-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  The Idea Behind CupTime
                </motion.h2>
                <motion.p
                  className="py-2 text-sm text-zinc-700 md:py-5 md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  CupTime was born from a simple idea: Why should enjoying your
                  favorite brew be limited to your home or a café visit? What if
                  you could get premium-quality beverages delivered right to
                  your desk—fresh, hot, and on time?
                </motion.p>
                <motion.p
                  className="py-1 text-sm text-zinc-700 md:py-2 md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  That’s exactly what CupTime offers: authentic South Indian tea
                  and coffee, delivered with care to your workplace or home.
                </motion.p>
                <motion.h2
                  className="text-cuptime-midnight py-2 text-xl font-bold md:py-5 md:text-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  What Sets Us Apart?
                </motion.h2>

                {highlights.map((item, index) => (
                  <motion.p
                    key={index}
                    className="gap-3 py-3 text-sm text-zinc-700 md:text-base"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {item.title} {item.text}
                  </motion.p>
                ))}
                <motion.h2
                  className="text-cuptime-midnight py-1 text-xl font-bold md:py-3 md:text-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Brewing a Culture of Care at Work
                </motion.h2>
                <motion.p
                  className="py-2 text-sm text-zinc-700 md:py-5 md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Our clients include busy professionals, startups, co-working
                  spaces, and factory floors. When a team is energized,
                  collaboration thrives. A fresh cup of filter coffee or classic
                  chai can break the monotony and spark new ideas.
                </motion.p>
                <motion.p
                  className="py-1 text-sm text-zinc-700 md:py-2 md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  At CupTime, we aren’t just delivering beverages—we’re creating
                  small moments of joy in your day.
                </motion.p>
                <motion.h2
                  className="text-cuptime-midnight py-1 text-xl font-bold md:py-3 md:text-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Join the Cup Time Family
                </motion.h2>
                <motion.p
                  className="py-2 text-sm text-zinc-700 md:py-5 md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Over the months, we’ve grown not just in reach, but in love.
                  Thousands of customers rely on CupTime to power their days. If
                  you haven’t tried us yet, this is your sign!
                </motion.p>
                <motion.p
                  className="py-1 text-sm text-zinc-700 md:py-2 md:text-base"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  📱 Download the app, subscribe to your brew, and experience
                  the magic of a timely cup.
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsDetails;
