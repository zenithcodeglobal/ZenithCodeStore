import type { Metadata } from 'next';
import GameCard from '@/app/components/GameCard';
import { getAllGames } from '@/lib/data';
import GamesFilter from './GamesFilter';

export const metadata: Metadata = {
  title: 'All Games',
  description: 'Browse and top up your favourite games. Find Mobile Legends, PUBG Mobile, Free Fire, Valorant, Genshin Impact and many more.',
};

export default function GamesPage() {
  const allGames = getAllGames();

  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            All <span className="gradient-text">Games</span>
          </h1>
          <p className="text-text-secondary max-w-xl">
            Browse our complete collection of games available for instant top-up.
          </p>
        </div>

        {/* Filter + Grid */}
        <GamesFilter games={allGames} />
      </div>
    </div>
  );
}
