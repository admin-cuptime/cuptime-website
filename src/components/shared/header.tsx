"use client";

import CupTimeLogo from '@/assets/svg/cuptime-logo.svg';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react'; 
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 max-w-screen-3xl mx-auto flex items-center justify-between bg-white px-4 lg:px-24 py-3">
      <div>
        <CupTimeLogo className="h-auto w-16" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-cuptime-red">Our Products</li>
          <li className="cursor-pointer hover:text-cuptime-red">Franchise</li>
          <li className="cursor-pointer hover:text-cuptime-red">About Us</li>
          <li className="cursor-pointer hover:text-cuptime-red">Cup Time mobile</li>
          <li className="cursor-pointer hover:text-cuptime-red">Contact Us</li>
          <li className="cursor-pointer hover:text-cuptime-red">More</li>
        </ul>
      </div>
      
      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-2">
        <button className="text-cuptime-red cursor-pointer rounded-xl border-2 border-foreground bg-white px-6 py-2 font-semibold">
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
                <li className="cursor-pointer hover:text-cuptime-red">Our Products</li>
                <li className="cursor-pointer hover:text-cuptime-red">Franchise</li>
                <li className="cursor-pointer hover:text-cuptime-red">About Us</li>
                <li className="cursor-pointer hover:text-cuptime-red">Cuptime mobile</li>
                <li className="cursor-pointer hover:text-cuptime-red">Contact Us</li>
                <li className="cursor-pointer hover:text-cuptime-red">More</li>
              </ul>
              
              <div className="flex flex-col gap-1 mt-4">
                <button className="text-cuptime-red cursor-pointer rounded-xl border-2 border-foreground bg-white px-6 py-2 font-semibold">
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