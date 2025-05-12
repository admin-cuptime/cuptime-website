"use client";

import Link from 'next/link';
import CupTimeLogo from '@/assets/svg/cuptime-logo.svg';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  
  { href: "/our-products", label: "Our Products" },
  { href: "/franchise", label: "Franchise" },
  { href: "/about-us", label: "About Us" },
  { href: "/cup-time", label: "Cup Time" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/more", label: "More" }
];

const Header = () => {
  return (
    <nav className="max-w-screen-3xl sticky top-0 z-20 mx-auto flex items-center justify-between bg-white px-4 py-3 lg:px-24">
      <div>
        <Link href="/">
          <CupTimeLogo className="h-auto w-16" />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-cuptime-red cursor-pointer">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Desktop Buttons */}
      <div className="hidden gap-2 lg:flex">
        <button className="text-cuptime-red border-foreground cursor-pointer rounded-xl border-2 bg-white px-6 py-2 font-semibold">
          Franchise
        </button>
        <button className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-xl bg-gradient-to-tr px-6 py-2 font-semibold text-white hover:opacity-90">
          Order Now
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-6">
            <div className="flex flex-col space-y-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-cuptime-red cursor-pointer">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-1">
                <button className="text-cuptime-red border-foreground cursor-pointer rounded-xl border-2 bg-white px-6 py-2 font-semibold">
                  Franchise
                </button>
                <button className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-xl bg-gradient-to-tr px-6 py-2 font-semibold text-white hover:opacity-90">
                  Order Now
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Header;