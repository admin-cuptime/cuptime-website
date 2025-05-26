'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CupTimeLogo from '@/assets/svg/cuptime-logo.svg';
import { Button } from '../ui/button';
import { Menu, ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';
import { handleAppRedirect } from '@/utils/helper';
import { useEffect, useState, useRef } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-products', label: 'Our Products' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/about-us', label: 'About Us' },
  { href: '/cup-time-mobile', label: 'Cup Time Mobile' },
  { href: '/contact-us', label: 'Contact Us' },
];

const moreLinks = [
  { href: '/careers', label: 'Our Careers' },
  { href: '/blogs', label: 'Blog' },
  { href: '/events', label: 'Events' },
  { href: '/technology', label: 'Technology' },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLLIElement | null>(null);
  const isAboutUsPage = pathname === '/about-us';
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setMoreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreMenuRef]);

  const navBackground = isAboutUsPage
    ? scrolled
      ? 'bg-white'
      : 'bg-transparent'
    : 'bg-white';

  return (
    <nav
      className={`max-w-screen-3xl sticky top-0 z-20 mx-auto flex h-16 items-center justify-between ${navBackground} px-4 transition-colors duration-300 lg:px-24`}
    >
      <div className="transition-all hover:brightness-90">
        <Link href="/">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 10,
            }}
          >
            <CupTimeLogo
              className={`h-auto w-16 ${isAboutUsPage && !scrolled ? 'brightness-0 invert filter' : ''}`}
            />
          </motion.div>
        </Link>
      </div>
      {/* Desktop Navigation starts here ma dude*/}
      <div className="hidden text-sm md:text-sm lg:block lg:text-base">
        <ul className="flex gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-cuptime-red cursor-pointer pb-1 ${
                  pathname === href
                    ? 'border-cuptime-red border-b-2 font-semibold ' +
                      (isAboutUsPage && !scrolled
                        ? 'text-white'
                        : 'text-zinc-900')
                    : isAboutUsPage && !scrolled
                      ? 'text-white'
                      : 'text-zinc-900'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          {/* More Dropdown */}
          <li ref={moreMenuRef} className="relative">
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === 'Space') {
                  e.preventDefault();
                  setMoreMenuOpen(!moreMenuOpen);
                }
                if (e.key === 'Escape') {
                  setMoreMenuOpen(false);
                }
              }}
              className={`hover:text-cuptime-red flex cursor-pointer items-center pb-1 ${
                moreLinks.some((link) => pathname === link.href)
                  ? 'border-cuptime-red border-b-2 font-semibold text-zinc-900' +
                    (isAboutUsPage && !scrolled ? 'text-white' : '')
                  : isAboutUsPage && !scrolled
                    ? 'text-white'
                    : 'text-zinc-900'
              }`}
              aria-expanded={moreMenuOpen}
              aria-haspopup="true"
            >
              More
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {moreMenuOpen && (
              <div
                className="absolute z-50 mt-2 w-56 rounded-md bg-white text-center drop-shadow-xl"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1">
                  {moreLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`hover:text-cuptime-red block px-4 py-2 text-sm hover:bg-gray-100 ${
                        pathname === href
                          ? 'text-cuptime-red font-semibold'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setMoreMenuOpen(false)}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Space') {
                          e.preventDefault();
                          setMoreMenuOpen(false);
                          window.location.href = href;
                        }
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      {/* Desktop Buttons */}
      <div className="hidden gap-2 lg:flex">
        <Link
          href="/contact-us?reason=franchise"
          className={`${isAboutUsPage && !scrolled ? 'border-white text-white' : 'text-cuptime-red border-foreground transition-all hover:bg-zinc-200'} cursor-pointer rounded-xl border-2 px-6 py-2 font-semibold`}
        >
          Franchise
        </Link>
        <button
          onClick={handleAppRedirect}
          className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-xl bg-gradient-to-tr px-6 py-2 font-semibold whitespace-nowrap text-white transition-all hover:opacity-90"
        >
          Order Now
        </button>
      </div>
      {/* Mobile Navigation starts here ma dude */}
      <div className="lg:hidden">
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isAboutUsPage && !scrolled ? 'text-white' : ''}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-6">
            <div className="flex flex-col space-y-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsMobileNavOpen(false)}
                      className={`hover:text-cuptime-red flex cursor-pointer items-center pb-1 ${
                        pathname === href
                          ? 'text-cuptime-red font-semibold'
                          : ''
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <DropdownMenu onOpenChange={setMobileMoreOpen}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="hover:text-cuptime-red flex w-full cursor-pointer items-center gap-1 text-left"
                        aria-expanded={mobileMoreOpen}
                        aria-haspopup="true"
                      >
                        <span className="font-semibold">More</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileMoreOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full" align="start">
                      {moreLinks.map(({ href, label }) => (
                        <DropdownMenuItem key={href} asChild>
                          <Link
                            href={href}
                            onClick={() => setIsMobileNavOpen(false)} // Close drawer
                            className={`w-full cursor-pointer ${
                              pathname === href
                                ? 'text-cuptime-red font-semibold'
                                : ''
                            }`}
                          >
                            {label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
              <div className="mt-4 flex flex-col gap-1">
                <button
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-cuptime-red border-foreground cursor-pointer rounded-xl border-2 bg-white px-6 py-2 font-semibold transition-all hover:bg-zinc-400"
                >
                  Franchise
                </button>
                <button
                  onClick={handleAppRedirect}
                  className="from-cuptime-orange to-cuptime-red cursor-pointer rounded-xl bg-gradient-to-tr px-6 py-2 font-semibold text-white hover:opacity-90"
                >
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.cuptime.customer"
                    target="_blank"
                  >
                    Order Now
                  </Link>
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
