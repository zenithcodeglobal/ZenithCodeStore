'use client';

import { useState } from 'react';
import { NewsCategory } from '@/lib/types';
import { getAllNews, getNewsByCategory } from '@/lib/newsData';
import NewsCategoryFilter from '../components/NewsCategoryFilter';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all');
  const articles = activeCategory === 'all' ? getAllNews() : getNewsByCategory(activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a1a]">
      {/* Page Header */}
      <section className="w-full bg-[#0a0a1a] pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-luckiest text-white text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-none uppercase tracking-wide">
            LATEST NEWS
          </h1>
          <p className="text-[#8a8aaf] text-base sm:text-lg mt-3 max-w-2xl">
            Stay up to date with the latest updates, patches, events, and guides across all your favourite games.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <NewsCategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* News Grid */}
      <section className="flex-1 w-full bg-[#0a0a1a] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {articles.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#8a8aaf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-[#8a8aaf] text-lg font-medium">No articles found</p>
              <p className="text-[#8a8aaf]/60 text-sm mt-1">Check back later for updates in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
