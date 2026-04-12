import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/lib/types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] hover:scale-[1.02]">
        <div className="relative aspect-[3/4] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={game.imageScale ? { transform: `scale(${game.imageScale})` } : undefined}>
            <Image
              src={game.image}
              alt={game.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
              style={{ objectPosition: game.imagePosition || 'center' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-luckiest text-base sm:text-lg text-white uppercase tracking-wide leading-tight mb-1.5">
              {game.name}
            </h3>
            <div className="flex items-center gap-2.5 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-amber-400/80" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {game.rating}
              </span>
              <span className="w-px h-3 bg-white/15" />
              <span>{game.platforms.join(' / ')}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
