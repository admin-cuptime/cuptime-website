import React from 'react';
import CuptimeLogoWhite from '@/assets/svg/cuptime-logo-white.svg';
import PlayStore from '@/assets/svg/playstore.svg';
import AppStore from '@/assets/svg/apple-logo.svg';
import Link from 'next/link';

type FooterSectionProps = {
  title: string;
  links: { text: string; href: string }[];
};

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="flex flex-col gap-3">
    <div className="font-semibold text-white">{title}</div>
    <div className="flex flex-col gap-1 ">
      {links.map((link, index) => (
        <Link className='hover:underline hover:text-cuptime-red' key={index} href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const aboutLinks = [
    { text: 'About Us', href: '/about-us' },
    { text: 'Our Story', href: '/about-us' },
    { text: 'Careers', href: '/about-us' },
    { text: 'Media & Press', href: '/about-us' },
  ];

  const productLinks = [
    { text: 'Our Products', href: '/about-us' },
    { text: 'Mobile App', href: '/about-us' },
    { text: 'Franchise Opportunities', href: '/about-us' },
  ];

  const connectedLinks = [
    { text: 'Join Our Events', href: '/about-us' },
    { text: 'Corporate Gifting', href: '/about-us' },
    { text: 'App Download', href: '/about-us' },
  ];

  const resourceLinks = [
    { text: 'Blog', href: '/about-us' },
    { text: 'Events', href: '/about-us' },
    { text: 'Customer Stories', href: '/about-us' },
  ];

  const legalLinks = [
    { text: 'Terms & Conditions', href: '/about-us' },
    { text: 'Privacy Policy', href: '/about-us' },
    { text: 'Cookie Policy', href: '/about-us' },
    { text: 'Return & Refund Policy', href: '/about-us' },
  ];

  return (
    <footer className="bg-cuptime-black max-w-screen-3xl mx-auto flex flex-col gap-10 px-4 py-10 md:px-24">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex w-32 flex-col gap-4">
          <CuptimeLogoWhite className="h-auto w-full" />
          <div className="text-xs text-cuptime-red text-center">
            Brewing Connections, One Cup at a Time
          </div>
        </div>

        <FooterSection title="About Cuptime" links={aboutLinks} />

        <div className="flex flex-col gap-10">
          <FooterSection title="Products" links={productLinks} />
          <FooterSection title="Connected / Join Us" links={connectedLinks} />
        </div>

        <FooterSection title="Resources" links={resourceLinks} />

        <div className="flex flex-col gap-10">
          <FooterSection title="Legal" links={legalLinks} />

          <div className="flex flex-col gap-3">
            <div className="font-semibold text-white">Contact</div>
            <div className="flex w-fit flex-col">
              <Link href="/about-us">support@cuptime.com</Link>
              <Link href="/about-us">+91 98765 43210</Link>
              <div className="text-wrap">
                No. 12, Main Street
                <div>Madurai – 625001,</div>
                <div>Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 border-t border-white/20 pt-10 md:flex-row">
        <div className="text-center text-lg font-semibold text-white md:text-left md:text-xl">
          Order Now, with better Experience and trackable orders
        </div>
        <div className="flex w-full flex-col justify-center gap-2 text-[#0E1633] md:w-fit md:flex-row">
          <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-2 transition-all duration-300 hover:bg-white/80 md:w-fit">
            <PlayStore className="h-8 w-8" />
            <div className="flex flex-col leading-none">
              <span className="text-[8px] font-semibold">GET IT ON</span>
              <span className="text-base leading-none font-semibold">
                Google Play
              </span>
            </div>
          </div>
          <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-2 transition-all duration-300 hover:bg-white/80 md:w-fit">
            <AppStore className="h-8 w-8" />
            <div className="flex flex-col leading-none">
              <span className="text-[8px]">GET IT ON</span>
              <span className="text-base leading-none font-semibold">
                App Store
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
