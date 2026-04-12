'use client';

import { useEffect } from 'react';

interface LaunchingSoonModalProps {
  onClose: () => void;
}

export default function LaunchingSoonModal({ onClose }: LaunchingSoonModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="relative bg-[rgb(28,27,25)] border border-white/[0.06] rounded-2xl p-8 sm:p-10 max-w-sm w-full animate-fade-in-up shadow-2xl">
        <div className="text-center">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.06] flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h3 className="font-luckiest text-2xl text-white uppercase tracking-wide leading-none mb-3">
            Launching Soon
          </h3>

          <p className="text-white/40 text-sm leading-relaxed mb-8">
            We are onboarding API partners to bring you the best top-up experience. Stay tuned for launch.
          </p>

          <button
            onClick={onClose}
            className="w-full h-12 bg-white text-[rgb(22,22,22)] font-luckiest text-base tracking-wider uppercase rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
