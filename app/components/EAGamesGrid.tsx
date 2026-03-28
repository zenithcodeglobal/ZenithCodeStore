import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/lib/types';
import { getAllGames } from '@/lib/data';

export default function EAGamesGrid() {
  const allGames = getAllGames();
  
  // Valorant (4), Mobile Legends (1), COD Mobile (6), PUBG (2), Genshin Impact (5), Free Fire (3)
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
    <section className="w-full bg-[#111111] py-16 md:py-24 flex flex-col items-center">
      <h2 
        className="font-luckiest text-white text-center text-[2.5rem] md:text-[3.5rem] leading-none uppercase tracking-wide mb-16 md:mb-24"
      >
        HOT RIGHT NOW
      </h2>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-20 lg:gap-y-24">
        {games.map(game => (
          <Link 
            key={game.id} 
            href={`/games/${game.slug}`}
            className="group relative w-full aspect-[4/5] overflow-hidden bg-transparent block"
          >
            {/* Background Image - We make the image itself fade slightly by fading the overlay stronger */}
            <Image
              src={game.image}
              alt={game.name}
              fill
              className={`object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out z-0 ${
                ['mobile-legends', 'cod-mobile', 'pubg-mobile'].includes(game.slug) ? 'object-top' : 'object-center'
              } ${game.slug === 'cod-mobile' ? 'scale-[1.08] group-hover:scale-[1.12]' : 'scale-100 group-hover:scale-105'}`}
            />
            
            {/* EA-Style Fading Effect - We fade from the section background color (#111111) solidly, so the image blends smoothly into the page without hard edges */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent pointer-events-none z-10" />

            {/* Bottom Title Area matching EA style */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 z-20">
              {/* White Circular Game Badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-2 shadow-lg mix-blend-normal">
                <Image
                  src={logoMap[game.slug] || "/zenith_logo.png"}
                  alt={`${game.name} Logo`}
                  width={30}
                  height={30}
                  className="object-contain mix-blend-multiply scale-90"
                />
              </div>
              {/* Game Title */}
              <span className="font-luckiest text-white text-[1.5rem] sm:text-[1.8rem] leading-none uppercase tracking-wide translate-y-1 drop-shadow-md line-clamp-2">
                {game.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
