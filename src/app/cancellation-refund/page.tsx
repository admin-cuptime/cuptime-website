'use client';
import CancellationRefundHero from '@/components/cancellation-refund-hero/cancellation-refund-hero';
import CancellationRefundQuestion from '@/components/cancellation-refund-section/cancellation-refund-section';

import React from 'react'

const CancellationRefundPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto">
      <CancellationRefundHero/>
      <div className="-mt-0 md:-mt-24">
        <CancellationRefundQuestion/>
      </div>
    </section>
  )
}

export default CancellationRefundPage;

