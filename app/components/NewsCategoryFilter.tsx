'use client';

import { NewsCategory } from '@/lib/types';
import { newsCategories } from '@/lib/newsData';
import { useRef, useEffect, useState } from 'react';

interface NewsCategoryFilterProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
}

export default function NewsCategoryFilter({
  activeCategory,
  onCategoryChange,
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
    <div className="w-full bg-[#0a0a1a] border-b border-white/10 z-40">
      <div className="relative max-w-7xl mx-auto">
        {/* Left fade + arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-start pl-2 bg-gradient-to-r from-[#0a0a1a] via-[#0a0a1a]/80 to-transparent"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable tabs */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 py-3"
        >
          {newsCategories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                id={`news-filter-${cat.value}`}
                onClick={() => onCategoryChange(cat.value)}
                className={`
                  relative whitespace-nowrap px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition-all duration-200 rounded-sm shrink-0
                  ${
                    isActive
                      ? 'bg-[#E53935] text-white shadow-lg shadow-red-500/20'
                      : 'text-[#8a8aaf] hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {cat.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-white/40 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right fade + arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-10 w-12 flex items-center justify-end pr-2 bg-gradient-to-l from-[#0a0a1a] via-[#0a0a1a]/80 to-transparent"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
