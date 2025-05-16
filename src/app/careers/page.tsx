import CareersHero from '@/components/careers-hero/careers-hero';
import CuptimeImageMedia from '@/components/cuptime-image-media/cuptime-image-media';
import CuptimeJobApplication from '@/components/cuptime-job-grow/cuptime-job-application';
import HorizontelTimeline from '@/components/horizontel-timeline/horizontel-timeline';
import JobApplySection from '@/components/job-apply-section/job-apply-section';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react';

const CareersPage = () => {
  return (
    <main className="max-w-screen-3xl mx-auto space-y-20">
      <CareersHero />
      <JobApplySection />
      <CuptimeJobApplication />
      <HorizontelTimeline/>
      <ReviewMarquee />
      <CuptimeImageMedia />
    </main>
  );
};

export default CareersPage;
