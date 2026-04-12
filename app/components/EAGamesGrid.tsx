import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/lib/types';
import { getAllGames } from '@/lib/data';

export default function EAGamesGrid() {
  const allGames = getAllGames();
  
  const targetIds = ['4', '1', '6', '2', '5', '3'];
  const games = targetIds.map(id => allGames.find(g => g.id === id)).filter(Boolean) as Game[];

  const logoMap: Record<string, string> = {
    'mobile-legends': '/mlbb-logo.png',
    'valorant': '/valorant-logo.svg',
    'cod-mobile': '/codm-logo.png',
    'pubg-mobile': '/pubg-logo.png',
    'genshin-impact': '/genshin-logo.png',
    'free-fire': '/freefire-logo.png',
  };

  return (
    <section className="w-full bg-[rgb(28,27,25)] py-12 sm:py-16 md:py-24 flex flex-col items-center">
      <h2 
        className="font-luckiest text-white text-center text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-none uppercase tracking-wide mb-10 sm:mb-16 md:mb-24"
      >
        HOT RIGHT NOW
      </h2>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-12 md:gap-y-20 lg:gap-y-24">
        {games.map(game => (
          <Link 
            key={game.id} 
            href={`/games/${game.slug}`}
            className="group relative w-full aspect-[4/5] overflow-hidden bg-transparent block"
          >
            <Image
              src={game.image}
              alt={game.name}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className={`object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out z-0 ${
                ['mobile-legends', 'cod-mobile', 'pubg-mobile'].includes(game.slug) ? 'object-top' : 'object-center'
              } ${game.slug === 'cod-mobile' ? 'scale-[1.08] group-hover:scale-[1.12]' : 'scale-100 group-hover:scale-105'}`}
            />
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgb(28,27,25)] via-[rgb(28,27,25)]/60 to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center gap-2 sm:gap-3 z-20">
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-1.5 sm:p-2 shadow-lg mix-blend-normal">
                <Image
                  src={logoMap[game.slug] || "/zenith_logo.png"}
                  alt={`${game.name} Logo`}
                  width={30}
                  height={30}
                  className="object-contain mix-blend-multiply scale-90 w-auto h-auto"
                />
              </div>
              <span className="font-luckiest text-white text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] leading-none uppercase tracking-wide translate-y-0.5 sm:translate-y-1 drop-shadow-md line-clamp-2">
                {game.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 sm:mt-20 md:mt-28 flex justify-center">
        <Link
          href="/games"
          className="px-8 py-3 rounded-full bg-white text-[rgb(22,22,22)] font-body font-bold uppercase tracking-wider hover:bg-white/90 active:scale-[0.97] transition-all duration-200"
        >
          See All Games
        </Link>
      </div>
    </section>
  );
}
