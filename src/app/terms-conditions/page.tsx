'use client';
import TermsConditionsHero from '@/components/terms-conditions-hero/terms-conditions-hero';
import TermsConditionsQuestion from '@/components/terms-conditions-questions/terms-conditions-section';
import { Metadata } from 'next';

import React from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Terms and Conditions | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'Enjoy the finest tea and authentic filter coffee delivered straight to your office in Madurai. Cup Time specializes in reliable B2B beverage delivery for workplaces. Order today for fresh, flavorful brews at your doorstep!',
  keywords: [
    'coffee',
    'tea',
    'coffee delivery',
    'coffee delivery app',
    'tea delivery app',
    'tea delivery',
    'filter coffee',
    'office coffee',
    'filter coffee delivery',
    'tea delivery service',
    'office coffee service',
    'traditional filter coffee',
    'Madurai filter coffee',
    'workspace tea and coffee',
    'hot coffee flask delivery',
    'South Indian filter coffee',
    'corporate tea coffee supplier',
    'fresh coffee for offices',
    'employee refreshment services',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
};

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
