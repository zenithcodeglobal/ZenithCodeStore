'use client';

import { NewsCategory } from '@/lib/types';
import { newsCategories } from '@/lib/newsData';
import { useRef, useEffect, useState } from 'react';

interface NewsCategoryFilterProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
  categories?: { value: NewsCategory; label: string }[];
}

export default function NewsCategoryFilter({
  activeCategory,
  onCategoryChange,
  categories,
}: NewsCategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 w-full bg-[rgb(22,22,22)]/95 backdrop-blur-md border-b border-white/[0.06] z-40">
      <div className="relative max-w-7xl mx-auto">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-10 w-14 flex items-center justify-start pl-3 bg-gradient-to-r from-[rgb(22,22,22)] via-[rgb(22,22,22)]/90 to-transparent"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 py-4"
        >
          {(categories ?? newsCategories).map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`
                  relative whitespace-nowrap px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 rounded-full shrink-0 border
                  ${
                    isActive
                      ? 'bg-white text-[rgb(22,22,22)] border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                      : 'bg-transparent text-white/35 border-white/[0.08] hover:text-white/60 hover:border-white/15'
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-10 w-14 flex items-center justify-end pr-3 bg-gradient-to-l from-[rgb(22,22,22)] via-[rgb(22,22,22)]/90 to-transparent"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
