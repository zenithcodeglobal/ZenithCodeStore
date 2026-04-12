'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'zenith_overlay_seen';
const AUTO_DISMISS_MS = 6000;
const BUTTON_APPEAR_DELAY_MS = 1200;

export default function LaunchingSoonOverlay() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const dismissedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setVisible(true);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setMounted(true));
    }
  }, []);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      sessionStorage.setItem(STORAGE_KEY, '1');
    }, 800);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const startDelay = setTimeout(() => {
      setTimerActive(true);
      timerRef.current = setTimeout(dismiss, AUTO_DISMISS_MS);
    }, BUTTON_APPEAR_DELAY_MS);

    return () => {
      clearTimeout(startDelay);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mounted, dismiss]);

  if (!visible) return null;

  const perim = 2 * (240 + 56) + 2 * Math.PI * 28;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden overscroll-none touch-none transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[rgb(8,8,8)]" />

      <div
        className={`absolute w-[600px] h-[600px] rounded-full transition-all duration-[2000ms] ease-out ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(217,60,79,0.12) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
          filter: 'blur(80px)',
        }}
      />
      <div
        className={`absolute w-[500px] h-[500px] rounded-full transition-all duration-[2500ms] ease-out delay-300 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(51,89,237,0.10) 0%, transparent 70%)',
          bottom: '5%',
          right: '-8%',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-[1800ms] ease-out delay-200 ${
          mounted ? 'w-[90vw] opacity-100' : 'w-0 opacity-0'
        }`}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">

        <div
          className={`mb-6 sm:mb-10 transition-all duration-[1200ms] ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${exiting ? 'translate-y-[-20px]' : ''}`}
        >
          <Image
            src="/zenith_logo.png"
            alt="ZenithCodeStore"
            width={72}
            height={72}
            className="w-auto h-auto max-w-16 max-h-16 sm:max-w-[72px] sm:max-h-[72px]"
            priority
          />
        </div>

        <h1
          className={`font-luckiest uppercase text-white leading-none tracking-wider transition-all duration-[1400ms] ease-out delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } ${exiting ? 'translate-y-[-30px]' : ''}`}
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          LAUNCHING
        </h1>

        <h2
          className={`font-luckiest uppercase leading-none tracking-wider text-[rgb(217,60,79)] transition-all duration-[1400ms] ease-out delay-[400ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          } ${exiting ? 'translate-y-[-30px]' : ''}`}
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          SOON
        </h2>

        <div
          className={`w-12 h-px bg-white/20 my-6 sm:my-8 transition-all duration-[1000ms] ease-out delay-[600ms] ${
            mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        <p
          className={`text-white/35 text-sm sm:text-base leading-relaxed max-w-sm transition-all duration-[1200ms] ease-out delay-[700ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } ${exiting ? 'translate-y-[-10px]' : ''}`}
        >
          We&apos;re crafting the ultimate game top-up experience. Fast, secure, and built for gamers.
        </p>

        <div
          className={`relative mt-8 sm:mt-10 transition-all duration-[1200ms] ease-out delay-[900ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${exiting ? 'translate-y-[-10px]' : ''}`}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 240 56"
            fill="none"
            preserveAspectRatio="none"
          >
            <rect
              x="1"
              y="1"
              width="238"
              height="54"
              rx="27"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="1"
              y="1"
              width="238"
              height="54"
              rx="27"
              stroke="url(#border-gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray={perim}
              strokeDashoffset={timerActive ? 0 : perim}
              strokeLinecap="round"
              style={{
                transition: timerActive ? `stroke-dashoffset ${AUTO_DISMISS_MS}ms linear` : 'none',
              }}
            />
            <defs>
              <linearGradient id="border-gradient" x1="0" y1="0" x2="240" y2="56" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgb(217,60,79)" />
                <stop offset="100%" stopColor="rgb(51,89,237)" />
              </linearGradient>
            </defs>
          </svg>

          <button
            onClick={dismiss}
            className="relative h-14 px-10 bg-transparent text-white font-luckiest text-base tracking-widest uppercase rounded-full overflow-hidden hover:bg-white/[0.04] active:scale-[0.96] transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              Enter Store
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
        </div>

        <p
          className={`mt-8 text-white/15 text-xs tracking-widest uppercase transition-all duration-[1000ms] ease-out delay-[1100ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ZenithCodeStore
        </p>
      </div>

      <div
        className={`absolute top-5 left-5 sm:top-8 sm:left-8 transition-all duration-[1500ms] ease-out delay-[500ms] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-8 h-px bg-white/10" />
        <div className="w-px h-8 bg-white/10" />
      </div>
      <div
        className={`absolute bottom-5 right-5 sm:bottom-8 sm:right-8 transition-all duration-[1500ms] ease-out delay-[500ms] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-8 h-px bg-white/10 ml-auto" />
        <div className="w-px h-8 bg-white/10 ml-auto" />
      </div>
    </div>
  );
}
