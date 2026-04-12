import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllGames, getGameBySlug, getPackagesForGame } from '@/lib/data';
import PackageSelector from './PackageSelector';
import AccountInput from './AccountInput';

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
      title: `${game.name} Top-Up | ZenithCodeStore`,
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
    <div className="min-h-screen bg-[rgb(22,22,22)]">

      {/* ── Hero ── */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[280px] sm:min-h-[360px] max-h-[520px] overflow-hidden">
        <Image
          src={game.bannerImage}
          alt={game.name}
          fill
          className="object-cover"
          style={{ objectPosition: game.bannerPosition || 'center top' }}
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(22,22,22)] via-[rgb(22,22,22)]/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 pb-6 sm:pb-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <nav className="inline-flex items-center gap-2 text-xs tracking-wide text-white/35 mb-4 sm:mb-6">
              <Link href="/" className="hover:text-white/60 transition-colors duration-200">Home</Link>
              <span className="text-white/15">/</span>
              <Link href="/games" className="hover:text-white/60 transition-colors duration-200">Games</Link>
              <span className="text-white/15">/</span>
              <span className="text-white/55">{game.name}</span>
            </nav>

            <h1 className="font-luckiest text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide leading-[0.95] mb-3 sm:mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              {game.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400/80" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {game.rating}
              </span>
              <span className="w-px h-3.5 bg-white/15" />
              <span>{game.category === 'mobile' ? 'Mobile' : game.category === 'pc' ? 'PC' : 'Console'}</span>
              <span className="w-px h-3.5 bg-white/15" />
              <span>{game.platforms.join(' / ')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-16 sm:pb-24">

        <p className="text-center text-white/40 text-sm sm:text-[15px] leading-relaxed mt-6 sm:mt-8 mb-10 sm:mb-14 max-w-xl mx-auto font-body">
          {game.description}
        </p>

        {/* ── Account Section ── */}
        <AccountInput
          gameId={game.id}
          gameSlug={game.slug}
          playerIdLabel={game.playerIdLabel}
          serverIdLabel={game.serverIdLabel}
        />

        {/* ── Packages ── */}
        <PackageSelector packages={packages} currencyName={game.currencyName} />
      </div>
    </div>
  );
}
