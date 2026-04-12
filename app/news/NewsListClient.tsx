'use client';

import { useMemo, useState } from 'react';
import { NewsArticle, NewsCategory } from '@/lib/types';
import { newsCategories } from '@/lib/newsData';
import NewsCategoryFilter from '../components/NewsCategoryFilter';
import NewsCard from '../components/NewsCard';

interface NewsListClientProps {
  articles: NewsArticle[];
}

export default function NewsListClient({ articles }: NewsListClientProps) {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all');

  const availableCategories = useMemo(() => {
    const presentCategories = new Set(articles.map((a) => a.category));
    return newsCategories.filter(
      (cat) => cat.value === 'all' || presentCategories.has(cat.value),
    );
  }, [articles]);

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = filtered[0];
  const gridArticles = filtered.slice(1);

  return (
    <>
      <NewsCategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={availableCategories}
      />

      <section className="flex-1 w-full bg-[rgb(22,22,22)] pt-8 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div key={activeCategory}>
              {featuredArticle && (
                <div className="mb-8 sm:mb-10 animate-fade-in-up rounded-sm overflow-hidden">
                  <NewsCard article={featuredArticle} index={0} featured />
                </div>
              )}

              {gridArticles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
                  {gridArticles.map((article, index) => (
                    <NewsCard key={article.id} article={article} index={index + 1} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-white/30 text-lg font-medium mb-1">No articles found</p>
              <p className="text-white/15 text-sm">Check back later for updates in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
