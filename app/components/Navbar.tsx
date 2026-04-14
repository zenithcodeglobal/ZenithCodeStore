'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from './AuthProvider';
import { motion, AnimatePresence } from 'motion/react';

const mobileNavLinks = [
  { href: '/', label: 'HOME' },
  { href: '/games', label: 'GAMES' },
  { href: '/news', label: 'NEWS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/partner', label: 'PARTNER' },
];

const gameLinks = [
  { href: '/games/valorant', label: 'VALORANT', image: '/valorant-new.jpg' },
  { href: '/games/mobile-legends', label: 'MOBILE LEGENDS', image: '/kagura-mlbb.webp', position: 'center 20%' },
  { href: '/games/cod-mobile', label: 'COD: MOBILE', image: '/cod_mobile.jpeg' },
  { href: '/games/pubg-mobile', label: 'PUBG MOBILE', image: '/pubg1.jpg', position: 'center 20%' },
  { href: '/games/genshin-impact', label: 'GENSHIN IMPACT', image: '/genshin_impact.jpg' },
  { href: '/games/free-fire', label: 'FREE FIRE', image: '/free_fire_new.jpg' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGamesExpanded, setIsGamesExpanded] = useState(false);
  const pathname = usePathname();
  const { user, loading } = useAuth();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsGamesExpanded(false);
  }, [pathname]);

  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsGamesExpanded(false);
  }, []);

  return (
    <header 
      className={`sticky w-full z-50 flex flex-col transition-[top] duration-300 ease-in-out ${
        isScrolled && scrollDirection === 'down' ? '-top-7 sm:-top-8' : 'top-0'
      }`}
    >
      {/* Top thin strip for utilities */}
      <div className="w-full bg-[rgb(22,22,22)] h-7 sm:h-8 flex items-center justify-end px-4 sm:px-8 gap-4 sm:gap-6 text-sm text-[#999999]">
        {/* Profile/Account Icon */}
        {!loading && (
          <Link
            href={user ? '/profile' : '/login'}
            aria-label={user ? 'Profile' : 'Sign in'}
            className="hover:text-white transition-colors"
          >
            {user ? (
              <div className="w-5 h-5 rounded-full bg-[rgb(51,89,237)] flex items-center justify-center text-[10px] font-bold text-white uppercase">
                {user.user_metadata?.name?.[0] || user.email?.[0] || 'U'}
              </div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </Link>
        )}
        {/* Help Icon */}
        <Link href="/about" aria-label="Help" className="hover:text-white transition-colors">
          <span className="font-sans font-semibold text-[15px] select-none">?</span>
        </Link>
        {/* Secondary EA-style logo slot */}
        <a href="https://zenithglobal.onrender.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <Image
            src="/zenith_logo.png"
            alt="Zenith"
            width={20}
            height={14}
            className="object-contain w-auto h-auto"
          />
        </a>
      </div>

      {/* Main Navbar - thick and bold */}
      <nav className="w-full bg-black text-white h-16 sm:h-[80px] flex items-center justify-between px-4 sm:px-8 border-b border-[#2f5ae6]/20">
        <div className="flex items-center">
          {/* Main Logo & Brand Name similar to EA SPORTS */}
          <Link href="/" className="flex shrink-0 items-center gap-1 group mr-12 hover:opacity-90 transition-opacity">
            <div className="relative h-7 w-12 sm:h-9 sm:w-16 -mt-1">
              <Image
                src="/zenith_logo.png"
                alt="Zenith Logo"
                fill
                sizes="64px"
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
            <div className="relative group flex items-center h-16 sm:h-[80px]">
              <Link href="/games" className="group-hover:text-[#2f5ae6] transition-colors uppercase flex items-center gap-1.5 h-full">
                GAMES
                {/* Caret pointing down, rotates and turns blue on hover */}
                <svg className="w-4 h-4 text-white/70 group-hover:text-[#2f5ae6] group-hover:-scale-y-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              <div className="absolute top-16 sm:top-[80px] left-1/2 -translate-x-1/2 pt-0 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="relative bg-[rgb(18,18,18)] border border-white/[0.06] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden w-[560px] p-3">
                  <div className="grid grid-cols-2 gap-1.5 max-h-[360px] overflow-y-auto no-scrollbar">
                    {gameLinks.map((game) => (
                      <Link
                        key={game.href}
                        href={game.href}
                        className="group/item relative flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-200"
                      >
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 ring-1 ring-white/[0.06]">
                          <Image
                            src={game.image}
                            alt={game.label}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                            style={game.position ? { objectPosition: game.position } : undefined}
                            sizes="40px"
                          />
                        </div>
                        <span className="font-luckiest text-[0.85rem] tracking-wide text-white/70 group-hover/item:text-white transition-colors duration-200">
                          {game.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/[0.04]">
                    <Link
                      href="/games"
                      className="flex items-center justify-center gap-2 py-2 rounded-xl text-white/40 hover:text-white hover:bg-white/[0.04] transition-all duration-200 font-luckiest text-[0.8rem] tracking-widest uppercase"
                    >
                      View All Games
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/news" className="hover:text-gray-300 transition-colors uppercase">
              NEWS
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - hidden on desktop */}
        <div className="md:hidden flex items-center">
          <button
            ref={hamburgerRef}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="ml-2 relative w-10 h-10 flex items-center justify-center z-[60]"
          >
            <span
              className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0 bg-white' : '-translate-y-2 bg-white'
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'opacity-0 scale-x-0 bg-white' : 'opacity-100 bg-white'
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ease-out ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0 bg-white' : 'translate-y-2 bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ clipPath: 'circle(0px at calc(100% - 2.25rem) 5.5rem)' }}
            animate={{ clipPath: 'circle(150vmax at calc(100% - 2.25rem) 5.5rem)' }}
            exit={{
              clipPath: 'circle(0px at calc(100% - 2.25rem) 5.5rem)',
              transition: { type: 'tween', duration: 0.5, ease: [0.4, 0, 1, 1] },
            }}
            transition={{
              type: 'spring',
              stiffness: 30,
              damping: 15,
              mass: 1,
            }}
          >
            <div className="absolute inset-0 bg-[rgb(14,14,14)]" />

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[rgb(217,60,79)] rounded-full opacity-[0.06] blur-[100px]" />

            <div className="relative h-full flex flex-col justify-between px-6 pt-20 pb-8 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {mobileNavLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.label === 'GAMES' ? (
                      <>
                        <motion.button
                          onClick={() => setIsGamesExpanded((prev) => !prev)}
                          className={`w-full flex items-center gap-4 group ${
                            pathname.startsWith('/games') ? 'text-[rgb(217,60,79)]' : 'text-white'
                          }`}
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.15 + index * 0.07,
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <span className="text-[0.7rem] font-mono text-white/20 mt-1 w-6 text-right tabular-nums">
                            0{index + 1}
                          </span>
                          <span className="font-luckiest text-[2.4rem] leading-[1.1] tracking-wide uppercase">
                            {link.label}
                          </span>
                          <motion.svg
                            className="w-5 h-5 text-white/30 mt-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ rotate: isGamesExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.button>

                        <AnimatePresence>
                          {isGamesExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                              className="overflow-hidden"
                            >
                              <div className="flex gap-3 py-4 pl-10 overflow-x-auto no-scrollbar">
                                {gameLinks.map((game, gi) => (
                                  <motion.div
                                    key={game.href}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: gi * 0.05, duration: 0.3 }}
                                  >
                                    <Link
                                      href={game.href}
                                      onClick={closeMobileMenu}
                                      className="flex flex-col items-center gap-2 shrink-0 group/game"
                                    >
                                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-white/[0.08] group-hover/game:ring-[rgb(217,60,79)]/40 transition-all duration-300">
                                        <Image
                                          src={game.image}
                                          alt={game.label}
                                          fill
                                          className="object-cover group-hover/game:scale-110 transition-transform duration-300"
                                          style={game.position ? { objectPosition: game.position } : undefined}
                                          sizes="64px"
                                        />
                                      </div>
                                      <span className="text-[0.6rem] text-white/40 font-semibold tracking-wider uppercase whitespace-nowrap">
                                        {game.label.length > 10 ? game.label.split(' ')[0] : game.label}
                                      </span>
                                    </Link>
                                  </motion.div>
                                ))}
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: gameLinks.length * 0.05, duration: 0.3 }}
                                >
                                  <Link
                                    href="/games"
                                    onClick={closeMobileMenu}
                                    className="flex flex-col items-center justify-center gap-2 shrink-0 w-16 h-16 rounded-2xl border border-dashed border-white/[0.1] hover:border-white/20 transition-colors"
                                  >
                                    <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                    <span className="text-[0.55rem] text-white/30 font-semibold tracking-wider uppercase">ALL</span>
                                  </Link>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + index * 0.07,
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center gap-4 group ${
                            pathname === link.href ? 'text-[rgb(217,60,79)]' : 'text-white'
                          }`}
                        >
                          <span className="text-[0.7rem] font-mono text-white/20 mt-1 w-6 text-right tabular-nums">
                            0{index + 1}
                          </span>
                          <span className="font-luckiest text-[2.4rem] leading-[1.1] tracking-wide uppercase group-hover:text-[rgb(217,60,79)] transition-colors duration-200">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Bottom section */}
              <motion.div
                className="mt-auto pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="h-px bg-gradient-to-r from-[rgb(217,60,79)]/40 via-white/[0.06] to-transparent mb-6" />

                <div className="flex items-center justify-between">
                  {!loading && (
                    <Link
                      href={user ? '/profile' : '/login'}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                    >
                      {user ? (
                        <>
                          <div className="w-8 h-8 rounded-full bg-[rgb(51,89,237)] flex items-center justify-center text-xs font-bold text-white uppercase">
                            {user.user_metadata?.name?.[0] || user.email?.[0] || 'U'}
                          </div>
                          <span className="text-sm font-medium">Profile</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-sm font-medium">Sign In</span>
                        </>
                      )}
                    </Link>
                  )}
                  <Link
                    href="/games"
                    onClick={closeMobileMenu}
                    className="px-6 py-2.5 rounded-full bg-white text-[rgb(14,14,14)] font-luckiest text-sm tracking-wider uppercase hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
                  >
                    BROWSE GAMES
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
