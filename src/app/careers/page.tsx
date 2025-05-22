"use client";
import React, { useState } from 'react';
import CareersHero from '@/components/careers-hero/careers-hero';
import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';
import CuptimeJobApplication from '@/components/cuptime-job-grow/cuptime-job-application';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import JobApplySection from '@/components/job-apply-section/job-apply-section';
import ReviewMarquee from '@/components/review-marquee/review-marquee';

const jobPositions = [
  'Delivery Executive (Hot Beverages)',
  'Android App Developer',
  'Franchise Support Coordinator',
  'Graphic Designer – Marketing',
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | undefined>(undefined);

  return (
    <main className="max-w-screen-3xl mx-auto space-y-20">
      <CareersHero />
      <JobApplySection
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />
      <div id="job-application-section" className='scroll-mt-24'>
        <CuptimeJobApplication
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          jobPositions={jobPositions}
        />
      </div>
      <HorizontelTimeline />
      <ReviewMarquee />
      <CuptimeImageMedia />
    </main>
  );
};

export default CareersPage;
