import TermsConditionsHero from '@/components/terms-conditions-hero/terms-conditions-hero';
import TermsConditionsQuestion from '@/components/terms-conditions-questions/terms-conditions-section';
import React from 'react';

const TermsConditionsPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto">
      <TermsConditionsHero/>
      <div className="-mt-0 md:-mt-24">
      <TermsConditionsQuestion/>
      </div>
    </section>
  )
}

export default TermsConditionsPage;
