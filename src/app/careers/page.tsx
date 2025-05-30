"use client";
import React, { useState } from 'react';
import CareersHero from '@/components/careers-hero/careers-hero';
import CuptimeJobApplication from '@/components/cuptime-job-grow/cuptime-job-application';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import JobApplySection from '@/components/job-apply-section/job-apply-section';
import ReviewMarquee from '@/components/review-marquee/review-marquee';

const jobPositions = [
  'Delivery Executive (Hot Beverages)',
  'Customer Care Executive (Female)',
  'Franchisee Support Coordinator',
  'Marketing Executive (Male)',
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | undefined>(undefined);

  return (
    <main className="max-w-screen-3xl mx-auto space-y-14">
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
    </main>
  );
};

export default CareersPage;
