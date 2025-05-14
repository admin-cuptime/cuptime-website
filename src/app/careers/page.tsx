import CuptimeJobApplication from '@/components/cuptime-job-grow/cuptime-job-application';
import ReviewMarquee from '@/components/review-marquee/review-marquee';
import React from 'react'

const CareersPage = () => {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto space-y-20">
        <CuptimeJobApplication/>
        <ReviewMarquee/>
      </div>
    </>
  );
}

export default CareersPage;
