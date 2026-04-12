'use client';

import { useState } from 'react';
import { Game } from '@/lib/types';
import GameCard from '@/app/components/GameCard';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'pc', label: 'PC' },
  { value: 'console', label: 'Console' },
];

interface GamesFilterProps {
  games: Game[];
}

export default function GamesFilter({ games }: GamesFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = games.filter((g) => {
    const matchesCat = activeCategory === 'all' || g.category === activeCategory;
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-white text-[rgb(22,22,22)]'
                  : 'bg-white/[0.04] text-white/40 hover:bg-white/[0.08] hover:text-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-56 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 pr-10 text-sm text-white placeholder:text-white/20 focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]/40 transition-all duration-200 outline-none"
          />
          <svg className="absolute right-3.5 top-2.5 w-4.5 h-4.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-white/30 text-sm">No games found. Try a different search or category.</p>
        </div>
      )}
    </>
  );
}
