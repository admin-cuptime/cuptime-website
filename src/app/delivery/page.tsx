'use client';

import DeliveryContent from '@/components/delivery-content/delivery-section';
import DeliveryHero from '@/components/delivery-hero/delivery-hero';
import React from 'react'

const DeliveryPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto">
      <DeliveryHero/>
      <div className="-mt-0 md:-mt-24">
        <DeliveryContent/>
      </div>
    </section>
  )
}

export default DeliveryPage;

