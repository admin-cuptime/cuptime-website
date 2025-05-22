'use client';

import React from 'react';
import CuptimeLogoWhite from '@/assets/svg/cuptime-logo-white.svg';
import PlayStore from '@/assets/svg/playstore.svg';
import AppStore from '@/assets/svg/apple-logo.svg';
import Link from 'next/link';
import { handleAppRedirect } from '@/utils/helper';
import { handlePlaystoreRedirect } from '@/utils/ios-helper';

type FooterSectionProps = {
  title: string;
  links: { text: string; href: string }[];
};

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="flex flex-col gap-3">
    <div className="font-semibold text-white">{title}</div>
    <div className="flex flex-col gap-1">
      {links.map((link, index) => (
        <Link
          className="hover:text-cuptime-red hover:underline"
          key={index}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const aboutLinks = [
    { text: 'About Us', href: '/about-us' },
    { text: 'Careers', href: '/careers' },
    { text: 'Media & Press', href: '/events' },
  ];

  const productLinks = [
    { text: 'Our Products', href: '/our-products' },
    { text: 'Mobile App', href: '/cup-time-mobile' },
    { text: 'Franchise Opportunities', href: '/franchise' },
  ];

  const connectedLinks = [
    { text: 'Events', href: '/events' },
    {
      text: 'App Download',
      href: 'https://play.google.com/store/apps/details?id=com.cuptime.customer',
    },
    { text: 'Blog', href: '/blogs' },
  ];

  const legalLinks = [
    { text: 'Terms & Conditions', href: '/terms-conditions' },
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Cancellation & Refund', href: '/cancellation-refund' },
  ];

  return (
    <footer className="bg-cuptime-black max-w-screen-3xl mx-auto flex flex-col gap-10 px-4 py-10 md:px-12">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex w-32 flex-col items-center justify-center gap-4">
          <CuptimeLogoWhite className="h-auto w-20" />
          <div className="text-cuptime-red text-center text-xs">
            Tech-Driven Brews. Human-Driven Connections
          </div>
        </div>

        <FooterSection title="About Cuptime" links={aboutLinks} />
        <FooterSection title="Join Us / Resources" links={connectedLinks} />
        <div className="flex flex-col gap-10">
          <FooterSection title="Products" links={productLinks} />
          {/* <FooterSection title="Connected / Join Us" links={connectedLinks} /> */}
        </div>
        <FooterSection title="Legal" links={legalLinks} />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="font-semibold text-white">Contact</div>
            <div className="flex w-fit flex-col">
              <Link
                href="mailto:reach@cuptime.in"
                className="hover:text-cuptime-red"
              >
                reach@cuptime.in
              </Link>
              <Link
                href="mailto:⁠franchise@cuptime.in"
                className="hover:text-cuptime-red"
              >
                ⁠franchise@cuptime.in
              </Link>
              <Link href="tel:+919876543210" className="hover:text-cuptime-red">
                +91 98765 43210
              </Link>
              <Link
                href="https://maps.app.goo.gl/UHChYbATqTrxVKp78"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cuptime-red"
              >
                <div className="text-wrap">
                  No. 12, Main Street
                  <div>Madurai – 625001,</div>
                  <div>Tamil Nadu, India</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 border-t border-white/20 pt-10 md:flex-row">
        <div className="text-center text-lg font-semibold text-white md:text-left md:text-xl">
          Order Now, with better Experience and trackable orders
        </div>
        <div className="flex w-full flex-col justify-center gap-2 text-[#0E1633] md:w-fit md:flex-row">
          <button
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-2 transition-all duration-300 hover:bg-white/80 md:w-fit"
            onClick={handleAppRedirect}
          >
            <PlayStore className="h-8 w-8" />
            <div className="flex flex-col leading-none">
              <span className="text-[8px] font-semibold">GET IT ON</span>
              <span className="text-base leading-none font-semibold">
                Google Play
              </span>
            </div>
          </button>
          <button
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-2 transition-all duration-300 hover:bg-white/80 md:w-fit"
            onClick={handlePlaystoreRedirect}
          >
            <AppStore className="h-8 w-8" />
            <div className="flex flex-col leading-none">
              <span className="text-[8px]">GET IT ON</span>
              <span className="text-base leading-none font-semibold">
                App Store
              </span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
