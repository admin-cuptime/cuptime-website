'use client';

import PrivacypolicyHero from '@/components/privacy-policy-hero/privacy-policy-hero';
import PrivacyPolicyQuestion from '@/components/privacy-policy-questions/privacy-policy-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Privacy Policy | Cup Time',
    template: '%s | CupTime',
  },
  description:
    'At Cup Time, we’re committed to protecting your personal data and ensuring transparency in how we collect, use, and safeguard your information. Whether you’re ordering your favorite brew or applying for a career, your trust matters. Explore our privacy policy to learn more about how we keep your data safe, secure, and never shared without consent.',
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

export default function PrivacyPolicy() {
  return (
    <div className="max-w-screen-3xl mx-auto">
      <PrivacypolicyHero />
      <div className="-mt-0 md:-mt-24">
        <PrivacyPolicyQuestion />
      </div>
    </div>
  );
}
