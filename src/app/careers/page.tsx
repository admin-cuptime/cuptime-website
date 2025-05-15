import CuptimeJobApplication from '@/components/cuptime-job-grow/cuptime-job-application';
import JobApplySection from '@/components/job-apply-section/job-apply-section';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react'

const CareersPage = () => {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto space-y-20">
        <JobApplySection/>
        <CuptimeJobApplication/>
        <ReviewMarquee/>
      </div>
    </>
  );
}

export default CareersPage;
