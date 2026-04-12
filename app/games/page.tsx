import type { Metadata } from 'next';
import { getAllGames } from '@/lib/data';
import GamesFilter from './GamesFilter';

export const metadata: Metadata = {
  title: 'All Games',
  description: 'Browse and top up your favourite games. Find Mobile Legends, PUBG Mobile, Free Fire, Valorant, Genshin Impact and many more.',
};

export default function GamesPage() {
  const allGames = getAllGames();

  return (
    <div className="min-h-screen bg-[rgb(22,22,22)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">

        <div className="text-center mb-14">
          <h1 className="font-luckiest text-4xl sm:text-5xl text-white uppercase tracking-wide mb-4">
            All Games
          </h1>
          <p className="text-white/35 text-[15px] max-w-md mx-auto">
            Browse our collection and top up instantly.
          </p>
        </div>

        <GamesFilter games={allGames} />
      </div>
    </div>
  );
}
