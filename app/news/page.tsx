import type { Metadata } from 'next';
import { fetchGamingNews } from '@/lib/newsApi';
import NewsListClient from './NewsListClient';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Latest Gaming News | ZenithCodeStore',
  description: 'Stay up to date with the latest updates, patches, events, and guides across all your favourite games.',
};

export default async function NewsPage() {
  const articles = await fetchGamingNews({ pageSize: 30 });

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(22,22,22)]">
      <section className="relative w-full bg-[rgb(22,22,22)] pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[rgb(217,60,79)]/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[rgb(51,89,237)]/8 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-8 bg-[rgb(217,60,79)] rounded-full" />
            <span className="text-white/40 text-xs font-bold uppercase tracking-[0.25em]">
              News &amp; Updates
            </span>
          </div>

          <h1 className="font-luckiest text-white text-[2.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[0.9] uppercase tracking-wide mb-4 sm:mb-5">
            LATEST
            <span className="block text-[rgb(217,60,79)]">NEWS</span>
          </h1>

          <p className="text-white/40 text-base sm:text-lg max-w-xl leading-relaxed">
            Breaking stories, patch notes, tournament updates, and deep dives across the gaming world.
          </p>
        </div>
      </section>

      <NewsListClient articles={articles} />
    </div>
  );
}
