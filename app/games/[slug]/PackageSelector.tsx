'use client';

import { useState } from 'react';
import { TopUpPackage } from '@/lib/types';
import LaunchingSoonModal from '@/app/components/LaunchingSoonModal';

interface PackageSelectorProps {
  packages: TopUpPackage[];
  currencyName: string;
}

export default function PackageSelector({ packages, currencyName }: PackageSelectorProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const selected = packages.find((p) => p.id === selectedId);

  return (
    <div>
      {/* ── Section header ── */}
      <div className="flex items-baseline justify-between mb-6 sm:mb-8">
        <h2 className="font-luckiest text-lg sm:text-xl text-white uppercase tracking-wider">
          Select {currencyName}
        </h2>
        <span className="text-xs text-white/25 font-medium">
          {packages.length} packages
        </span>
      </div>

      {/* ── Package grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {packages.map((pkg) => {
          const isSelected = selectedId === pkg.id;

          return (
            <button
              key={pkg.id}
              onClick={() => setSelectedId(pkg.id)}
              className={`
                relative text-left rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-all duration-300 ease-out outline-none
                ${isSelected
                  ? 'bg-white text-[rgb(22,22,22)] scale-[1.02] shadow-[0_8px_40px_rgba(255,255,255,0.12)]'
                  : 'bg-white/[0.04] text-white hover:bg-white/[0.08] hover:scale-[1.01]'
                }
              `}
            >
              {pkg.popular && (
                <div className={`absolute top-3 right-3 w-2 h-2 rounded-full ${
                  isSelected ? 'bg-[rgb(217,60,79)]' : 'bg-[rgb(217,60,79)] animate-pulse'
                }`} />
              )}

              <div className={`text-xl sm:text-2xl font-bold leading-none mb-1 transition-colors duration-300 ${
                isSelected ? 'text-[rgb(22,22,22)]' : 'text-white'
              }`}>
                {pkg.amount.toLocaleString()}
              </div>

              <div className={`text-[11px] font-bold uppercase tracking-wider mb-3 transition-colors duration-300 ${
                isSelected ? 'text-[rgb(22,22,22)]/50' : 'text-white/30'
              }`}>
                {currencyName.split(' ')[0]}
              </div>

              {pkg.bonus && (
                <div className={`inline-block text-[11px] font-bold mb-3 transition-colors duration-300 ${
                  isSelected ? 'text-emerald-600' : 'text-emerald-400/70'
                }`}>
                  +{pkg.bonus.toLocaleString()} bonus
                </div>
              )}

              <div className={`pt-3 border-t transition-colors duration-300 ${
                isSelected ? 'border-black/10' : 'border-white/[0.06]'
              }`}>
                <span className={`text-lg font-luckiest tracking-wide transition-colors duration-300 ${
                  isSelected ? 'text-[rgb(22,22,22)]' : 'text-white/70'
                }`}>
                  ${pkg.price.toFixed(2)}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Sticky purchase bar ── */}
      <div className={`
        sticky bottom-0 mt-8 sm:mt-10 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-4 sm:pb-6 pt-4
        transition-all duration-500 ease-out
        ${selected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}>
        <div className="bg-[rgb(28,27,25)] border border-white/[0.06] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center justify-between backdrop-blur-xl gap-4">
          <div>
            <p className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-1">Total</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-luckiest text-white leading-none">
                ${selected?.price.toFixed(2)}
              </span>
              {selected?.bonus && (
                <span className="text-xs text-emerald-400/80 font-bold">
                  +{selected.bonus.toLocaleString()} bonus
                </span>
              )}
            </div>
          </div>

            <button
            onClick={() => setShowModal(true)}
            className="h-11 sm:h-12 px-5 sm:px-8 bg-white text-[rgb(22,22,22)] font-luckiest text-sm sm:text-base tracking-wider uppercase rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-200 shrink-0"
          >
            Purchase
          </button>
        </div>
      </div>

      {showModal && <LaunchingSoonModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
