'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Game } from '@/lib/types';

interface HeroSliderProps {
  games: Game[];
}

export default function HeroSlider({ games }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % games.length);
  }, [games.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + games.length) % games.length);
  }, [games.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative pt-32 pb-12 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Slider container */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] w-full flex items-center justify-center -mx-4 sm:mx-0">
          {games.map((game, i) => {
            let offset = i - current;
            if (offset < -Math.floor(games.length / 2)) offset += games.length;
            if (offset > Math.floor(games.length / 2)) offset -= games.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1 || (offset < -1 && offset === -Math.floor(games.length / 2));
            const isRight = offset === 1 || (offset > 1 && offset === Math.floor(games.length / 2));
            const isVisible = isCenter || isLeft || isRight;

            // Responsive transforms
            let transformClass = 'translate-x-0 scale-50 opacity-0 z-0';
            let widthClass = 'w-[85vw] sm:w-[500px] lg:w-[580px]';
            let heightClass = 'h-[240px] sm:h-[320px] lg:h-[400px]';
            let pointerEvents = 'pointer-events-none';

            if (isCenter) {
              transformClass = 'translate-x-0 scale-100 opacity-100 z-30';
              pointerEvents = 'pointer-events-auto';
            } else if (isLeft) {
              transformClass = '-translate-x-[60%] sm:-translate-x-[65%] lg:-translate-x-[80%] scale-[0.85] opacity-0 sm:opacity-50 z-20';
              pointerEvents = 'pointer-events-auto';
            } else if (isRight) {
              transformClass = 'translate-x-[60%] sm:translate-x-[65%] lg:translate-x-[80%] scale-[0.85] opacity-0 sm:opacity-50 z-20';
              pointerEvents = 'pointer-events-auto';
            } else if (offset < -1) {
              transformClass = '-translate-x-[150%] scale-50 opacity-0 z-10';
            } else if (offset > 1) {
              transformClass = 'translate-x-[150%] scale-50 opacity-0 z-10';
            }

            return (
              <div
                key={game.id}
                onClick={() => {
                  if (isLeft) prev();
                  if (isRight) next();
                }}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${transformClass} ${widthClass} ${heightClass} ${pointerEvents}`}
              >
                <div
                  className={`relative w-full h-full rounded-2xl overflow-hidden ${
                    isCenter ? 'shadow-2xl ring-1 ring-white/10 shadow-brand/20' : ''
                  }`}
                >
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 580px"
                    priority={isCenter}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {isCenter && (
                    <div className="absolute bottom-4 left-4 right-4 animate-fade-in-up">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand/80 text-xs font-semibold text-white mb-2 backdrop-blur-sm">
                        {game.category === 'mobile' ? '📱 Mobile' : '🖥️ PC'}
                      </span>
                    </div>
                  )}

                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300" />
                  )}

                  {isCenter && (
                    <Link
                      href={`/games/${game.slug}`}
                      className="absolute inset-0 z-10"
                      aria-label={`View ${game.name}`}
                    />
                  )}
                </div>
              </div>
            );
          })}

          {/* Arrows for mobile */}
          <div className="absolute bottom-[-16px] sm:hidden flex justify-center gap-4 z-40">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-surface-700 border border-white/10 flex items-center justify-center text-white hover:bg-brand transition-colors shadow-lg"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-surface-700 border border-white/10 flex items-center justify-center text-white hover:bg-brand transition-colors shadow-lg"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Game info */}
        <div className="text-center mt-10 sm:mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white transition-all duration-300">
            {games[current].name}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-sm text-text-secondary">Platform:</span>
            {games[current].platforms.map((p) => (
              <span key={p} className="px-2.5 py-0.5 rounded-full bg-surface-600 text-xs font-medium text-text-secondary">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {games.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-brand' : 'w-2 bg-surface-500 hover:bg-surface-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
