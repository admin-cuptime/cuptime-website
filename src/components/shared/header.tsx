"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CupTimeLogo from '@/assets/svg/cuptime-logo.svg';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  
  { href: "/our-products", label: "Our Products" },
  { href: "/franchise", label: "Franchise" },
  { href: "/about-us", label: "About Us" },
  { href: "/cup-time", label: "Cup Time Mobile" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/more", label: "More" }
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isAboutUsPage = pathname === "/about-us";
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navBackground = isAboutUsPage 
    ? scrolled 
      ? "bg-white" 
      : "bg-transparent"
    : "bg-white";
  
  return (
    <nav className={`max-w-screen-3xl h-16 sticky top-0 z-20 mx-auto flex items-center justify-between ${navBackground} px-4 lg:px-24 transition-colors duration-300`}>
      <div className='transition-all hover:brightness-90'>
        <Link href="/">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 10 
            }}
          >
            <CupTimeLogo className={`h-auto w-16 ${isAboutUsPage && !scrolled ? 'filter brightness-0 invert' : ''}`} />
          </motion.div>
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden lg:block text-sm md:text-sm lg:text-base">
        <ul className="flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link 
                href={href} 
                className={`cursor-pointer hover:text-cuptime-red pb-1 ${
                  pathname === href 
                    ? "border-b-2 border-cuptime-red font-semibold " + (isAboutUsPage && !scrolled ? "text-white" : "")
                    : isAboutUsPage && !scrolled ? "text-white" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Desktop Buttons */}
      <div className="hidden gap-2 lg:flex">
        <button className={`${isAboutUsPage && !scrolled ? "text-white border-white" : "text-cuptime-red border-foreground"} cursor-pointer rounded-xl border-2 bg-transparent px-6 py-2 font-semibold`}>
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
            <Button variant="ghost" size="icon" className={`lg:hidden ${isAboutUsPage && !scrolled ? "text-white" : ""}`}>
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
                      className={`cursor-pointer hover:text-cuptime-red pb-1 ${
                        pathname === href ? "border-b-2 border-cuptime-red font-semibold" : ""
                      }`}
                    >
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