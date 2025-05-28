'use client';
import { motion } from 'framer-motion';
import React from 'react';
import MySVGBag from '@/assets/svg/officebag.svg';

interface Job {
  title: string;
  description: string;
  location: string;
  experience: string;
  tools?: string;
}

const JobCard = ({
  job,
  index,
  onApply,
}: {
  job: Job;
  index: number;
  onApply: (jobTitle: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-start gap-4 rounded-xl bg-white p-6 drop-shadow-xl transition-all hover:drop-shadow-2xl md:flex-row md:items-center md:justify-between md:gap-8 md:px-10"
    >
      <div className="flex flex-row items-start gap-4">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-2">
            <MySVGBag className="h-auto w-5 shrink-0" />
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
          </div>
          <p className="text-gray-600">{job.description}</p>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold">Location :</h2>
              <p className="bg-cuptime-purple rounded px-2 py-1 text-sm text-zinc-900">
                {job.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold">Experience :</h2>
              <p className="bg-cuptime-purple rounded px-2 py-1 text-sm text-zinc-900">
                {job.experience}
              </p>
            </div>
          </div>
        </div>
      </div>

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
        className="flex w-full justify-center md:w-1/4 md:justify-end"
      >
        <button
          onClick={() => {
            onApply(job.title);
          }}
          className="bg-cuptime-black whitespace-nowrap transition-all cursor-pointer rounded-lg px-6 py-3 text-sm font-bold text-white hover:bg-zinc-600 md:text-base"
        >
          Apply Now
        </button>
      </motion.div>
    </motion.div>
  );
};

const JobApplySection = ({
  selectedJob,
  setSelectedJob,
}: {
  selectedJob?: string;
  setSelectedJob: (job: string) => void;
}) => {
  const jobsData = [
    {
      title: 'Delivery Executive (Hot Beverages)',
      description:
        'Our beverages are made using time-honored recipes from Madurai — no chemicals, no preservatives, only natural goodness.',
      location: 'Madurai & Nearby Areas',
      experience: '0–2 years',
    },
    {
      title: 'Android App Developer',
      description:
        'We’re looking for a skilled Android Developer to work on our customer-facing mobile app. You’ll work closely with the UI/UX and backend teams to build, maintain, and optimize a smooth ordering experience for our users.',
      location: 'Remote / Chennai',
      experience: '2–4 years',
    },
    {
      title: 'Franchise Support Coordinator',
      description:
        'As our Franchise Support Coordinator, you’ll help new franchise partners onboard, train staff, and ensure quality service across locations. Strong communication and multitasking skills are key.',
      location: 'Madurai & Nearby Areas',
      experience: '0–2 years',
    },
    {
      title: 'Graphic Designer – Marketing',
      description:
        'Bring our brand to life through social media creatives, ad banners, packaging designs, and more. Ideal for a designer who can combine creativity with fast-paced execution.',
      location: 'Tools: Figma, Illustrator, Canva',
      experience: '0–2 years',
    },
  ];

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    const el = document.getElementById('job-application-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-6 py-12 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6">
          {jobsData.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              index={index}
              onApply={handleApply}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobApplySection;
