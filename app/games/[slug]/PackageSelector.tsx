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

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-1">
        Select {currencyName} Package
      </h2>
      <p className="text-sm text-text-muted mb-4">Choose a top-up package below</p>

      {/* Package grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {packages.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setSelectedId(pkg.id)}
            className={`relative p-4 rounded-xl border text-left transition-all duration-200 ${
              selectedId === pkg.id
                ? 'border-brand bg-brand/10 shadow-lg shadow-brand/10'
                : 'border-white/5 bg-surface-700 hover:border-white/15 hover:bg-surface-600'
            }`}
          >
            {/* Popular badge */}
            {pkg.popular && (
              <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-brand text-[10px] font-bold text-white">
                POPULAR
              </span>
            )}

            <div className="font-semibold text-white text-sm sm:text-base">
              {pkg.amount.toLocaleString()} {currencyName.split(' ')[0]}
            </div>

            {pkg.bonus && (
              <div className="text-xs text-success font-medium mt-0.5">
                +{pkg.bonus.toLocaleString()} bonus
              </div>
            )}

            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-lg font-bold text-brand">
                ${pkg.price.toFixed(2)}
              </span>
              <span className="text-xs text-text-muted">{pkg.currency}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected summary */}
      {selectedId && (
        <div className="glass-card rounded-xl p-4 border border-white/5 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Selected:</p>
              <p className="font-semibold text-white">
                {packages.find((p) => p.id === selectedId)?.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-text-secondary">Total:</p>
              <p className="text-xl font-bold text-brand">
                ${packages.find((p) => p.id === selectedId)?.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Purchase button (disabled → modal) */}
      <LaunchingSoonModal />
    </div>
  );
}
