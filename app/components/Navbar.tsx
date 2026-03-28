'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      // Add a small threshold to avoid jittery behavior
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  return (
    <header 
      className={`sticky w-full z-50 flex flex-col transition-[top] duration-300 ease-in-out ${
        isScrolled && scrollDirection === 'down' ? '-top-8' : 'top-0'
      }`}
    >
      {/* Top thin strip for utilities - EA uses a very tight dark bar */}
      <div className="w-full bg-[#111111] h-8 flex items-center justify-end px-4 sm:px-8 gap-6 text-sm text-[#999999]">
        {/* Profile/Account Icon */}
        <button aria-label="Account" className="hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        {/* Help Icon */}
        <button aria-label="Help" className="hover:text-white transition-colors">
          <span className="font-sans font-semibold text-[15px] select-none">?</span>
        </button>
        {/* Secondary EA-style logo slot */}
        <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <Image
            src="/zenith_logo.png"
            alt="Zenith"
            width={20}
            height={14}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Navbar - thick and bold */}
      <nav className="w-full bg-black text-white h-[80px] flex items-center justify-between px-4 sm:px-8 border-b border-[#2f5ae6]/20">
        <div className="flex items-center">
          {/* Main Logo & Brand Name similar to EA SPORTS */}
          <Link href="/" className="flex shrink-0 items-center gap-1 group mr-12 hover:opacity-90 transition-opacity">
            <div className="relative h-7 w-12 sm:h-9 sm:w-16">
              <Image
                src="/zenith_logo.png"
                alt="Zenith Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* Switched to STORE and Luckiest Guy font, making it massive like EA SPORTS */}
            <span className="font-luckiest text-[2rem] sm:text-[2.5rem] tracking-tight leading-none mt-1 -ml-2 sm:-ml-4">
              STORE
            </span>
          </Link>

          {/* Desktop Nav Links - Pulled tightly next to logo like EA */}
          <div className="hidden md:flex items-center gap-8 font-luckiest text-[1.4rem] tracking-wide text-white mt-1">
            <div className="relative group flex items-center h-[80px]">
              <Link href="/games" className="group-hover:text-[#2f5ae6] transition-colors uppercase flex items-center gap-1.5 h-full">
                GAMES
                {/* Caret pointing down, rotates and turns blue on hover */}
                <svg className="w-4 h-4 text-white/70 group-hover:text-[#2f5ae6] group-hover:-scale-y-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu - Smooth fade & slide in */}
              <div className="absolute top-[80px] -left-6 w-[240px] bg-black/70 backdrop-blur-md border-t-4 border-[#2f5ae6] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out shadow-2xl flex flex-col py-2 z-50">
                <Link href="/games/valorant" className="px-5 py-2 text-[1.1rem] font-luckiest tracking-widest text-white/90 hover:text-white hover:bg-white/10 transition-colors uppercase">
                  VALORANT
                </Link>
                <Link href="/games/mobile-legends" className="px-5 py-2 text-[1.1rem] font-luckiest tracking-widest text-white/90 hover:text-white hover:bg-white/10 transition-colors uppercase">
                  MOBILE LEGENDS
                </Link>
                <Link href="/games/cod-mobile" className="px-5 py-2 text-[1.1rem] font-luckiest tracking-widest text-white/90 hover:text-white hover:bg-white/10 transition-colors uppercase">
                  CALL OF DUTY: MOBILE
                </Link>
                <Link href="/games/pubg-mobile" className="px-5 py-2 text-[1.1rem] font-luckiest tracking-widest text-white/90 hover:text-white hover:bg-white/10 transition-colors uppercase">
                  PUBG MOBILE
                </Link>
                <Link href="/games/genshin-impact" className="px-5 py-2 text-[1.1rem] font-luckiest tracking-widest text-white/90 hover:text-white hover:bg-white/10 transition-colors uppercase">
                  GENSHIN IMPACT
                </Link>
                <Link href="/games/free-fire" className="px-5 py-2 text-[1.1rem] font-luckiest tracking-widest text-white/90 hover:text-white hover:bg-white/10 transition-colors uppercase">
                  FREE FIRE
                </Link>
              </div>
            </div>
            <Link href="/news" className="hover:text-gray-300 transition-colors uppercase">
              NEWS
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - hidden on desktop */}
        <div className="md:hidden flex items-center">
          <button aria-label="Menu" className="ml-2 hover:text-gray-400">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
