import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/lib/types';

interface GameCardProps {
  game: Game;
  showPrice?: boolean;
}

export default function GameCard({ game, showPrice = false }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="group block">
      <div className="relative rounded-xl overflow-hidden glass-card glow-hover">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={game.image}
            alt={game.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand/90 text-white backdrop-blur-sm">
              {game.category === 'mobile' ? '📱 Mobile' : game.category === 'pc' ? '🖥️ PC' : '🎯 Console'}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium text-white">
              ⭐ {game.rating}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-3.5">
          <h3 className="font-semibold text-white text-sm sm:text-base truncate group-hover:text-brand transition-colors">
            {game.name}
          </h3>
          <p className="text-xs text-text-muted mt-1 truncate">
            {game.shortDescription}
          </p>
          {showPrice && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-bold text-brand">From $0.99</span>
            </div>
          )}

          {/* Platform tags */}
          <div className="flex gap-1.5 mt-2 flex-wrap">
            {game.platforms.slice(0, 3).map((p) => (
              <span
                key={p}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-surface-600 text-text-secondary"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
