"use client";

import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/NaharaTechnologiesWhite.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
        Try our installmental plan 
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="font-semibold">Get Your dream to live with the little you have</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="Nahara Technologies"
                width={140}
                height={50}
                className="h-auto w-auto max-h-12 bg-red-800 text-red-800 rounded-lg"
                priority
              />
             <span className="text-lg font-bold text-red-800 hidden sm:inline">
              NAHARA TECHNOLOGIES<sup className="text-xs align-super ml-1 text-red-800">™</sup>
            </span>
            </div>
            <button onClick={toggleMobileNav} className="md:hidden">
              <MenuIcon className="h-6 w-6 text-black" />
            </button>
            <nav className="hidden md:flex gap-6 text-black/60">
              <a href="/about">About</a>
              <a href="/upcomingproducts">Products to be released</a>
              <a href="/career">Career</a>
              <a href="/customer">Customers</a>
              <a href="/help">Help</a>
              <Link href="/contact">
                <button
                  className="bg-black text-white font-medium px-4 py-2 rounded-lg 
                    inline-flex items-center justify-center tracking-tight"
                >
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
          {isMobileNavOpen && (
            <nav className="mt-4 flex flex-col gap-4 text-black/80 md:hidden">
              <a href="/about">About</a>
              <a href="/upcomingproducts">Products to be released</a>
              <a href="/career">Career</a>
              <a href="/customer">Customers</a>
              <a href="/help">Help</a>
              <Link href="/contact">
                <button
                  className="bg-black text-white font-medium px-4 py-2 rounded-lg 
                    inline-flex items-center justify-center tracking-tight w-full"
                >
                  Contact Us
                </button>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
