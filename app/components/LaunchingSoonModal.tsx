'use client';

import { useState } from 'react';

export default function LaunchingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3.5 rounded-xl font-semibold text-base bg-surface-500 text-text-muted cursor-not-allowed relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          🔒 Purchase
        </span>
        <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-surface-700 rounded-2xl border border-white/10 p-6 sm:p-8 max-w-md w-full animate-fade-in-up shadow-2xl">
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-brand/20 rounded-full blur-[80px]" />

            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-full brand-gradient flex items-center justify-center mb-4 animate-pulse-glow">
                <span className="text-3xl">🚀</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Launching Soon!
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                We are currently onboarding API partners to bring you the best
                top-up experience. Stay tuned for our grand launch!
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl font-semibold text-white brand-gradient hover:opacity-90 transition-opacity"
                >
                  Got it!
                </button>
                <p className="text-xs text-text-muted">
                  Want to be notified? Sign up for our newsletter below.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
