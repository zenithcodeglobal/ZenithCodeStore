import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllGames, getGameBySlug, getPackagesForGame } from '@/lib/data';
import PackageSelector from './PackageSelector';

interface GameDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const games = getAllGames();
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: 'Game Not Found' };

  return {
    title: `${game.name} Top-Up`,
    description: `Instant ${game.name} top-up. Buy ${game.currencyName} at the best prices. Fast and secure delivery.`,
    openGraph: {
      title: `${game.name} Top-Up | TopUpZone`,
      description: `Buy ${game.currencyName} for ${game.name}. Instant delivery, best prices.`,
      images: [game.bannerImage],
    },
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) notFound();

  const packages = getPackagesForGame(game.id);

  return (
    <div className="pt-28 pb-16">
      {/* Banner */}
      <div className="relative h-[240px] sm:h-[320px] lg:h-[380px] overflow-hidden">
        <Image
          src={game.bannerImage}
          alt={game.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-900/80 to-transparent" />

        {/* Game info overlay */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-brand/80 text-xs font-semibold text-white backdrop-blur-sm">
                    {game.category === 'mobile' ? '📱 Mobile' : '🖥️ PC'}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-white/70">
                    ⭐ {game.rating}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{game.name}</h1>
                <div className="flex gap-2 mt-2">
                  {game.platforms.map((p) => (
                    <span key={p} className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Details & Input */}
          <div className="lg:col-span-1 space-y-6">
            {/* About */}
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-3">About</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Player ID */}
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-4">Enter Player Info</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    {game.playerIdLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter your ${game.playerIdLabel}`}
                    className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                  />
                </div>
                {game.serverIdLabel && (
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">
                      {game.serverIdLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter your ${game.serverIdLabel}`}
                      className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right — Packages */}
          <div className="lg:col-span-2">
            <PackageSelector packages={packages} currencyName={game.currencyName} />
          </div>
        </div>
      </div>
    </div>
  );
}
