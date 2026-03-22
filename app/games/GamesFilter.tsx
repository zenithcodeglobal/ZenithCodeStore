'use client';

import { useState } from 'react';
import { Game } from '@/lib/types';
import GameCard from '@/app/components/GameCard';

const categories = [
  { value: 'all', label: 'All Games', icon: '🎮' },
  { value: 'mobile', label: 'Mobile', icon: '📱' },
  { value: 'pc', label: 'PC', icon: '🖥️' },
  { value: 'console', label: 'Console', icon: '🎯' },
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
      {/* Filters row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.value
                  ? 'bg-brand text-white shadow-lg shadow-brand/25'
                  : 'bg-surface-700 text-text-secondary hover:text-white hover:bg-surface-600'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 h-10 rounded-full bg-surface-700 border border-white/10 px-4 pr-10 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
          />
          <svg className="absolute right-3 top-2.5 w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-text-muted mb-6">
        Showing {filtered.length} game{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} showPrice />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-4xl mb-4 block">🎮</span>
          <p className="text-text-secondary">No games found. Try a different search or category.</p>
        </div>
      )}
    </>
  );
}
