import Link from 'next/link';
import { fetchLatestNews } from '@/lib/newsApi';
import NewsCard from './NewsCard';

export default async function HomeNewsSection() {
  const latestNews = await fetchLatestNews(6);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24 flex flex-col items-center border-t border-black/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-luckiest text-[#0a0a1a] text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-none uppercase tracking-wide text-center mb-8 sm:mb-12 md:mb-16">
          LATEST NEWS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {latestNews.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/news"
            className="px-8 py-3 rounded-full bg-[rgb(217,60,79)] text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            See All News
          </Link>
        </div>
      </div>
    </section>
  );
}
