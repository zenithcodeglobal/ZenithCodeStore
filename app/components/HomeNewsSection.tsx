import Link from 'next/link';
import { getAllNews } from '@/lib/newsData';
import NewsCard from './NewsCard';

export default function HomeNewsSection() {
  // Get the 6 most recent news articles for the homepage
  const latestNews = getAllNews().slice(0, 6);

  return (
    <section className="w-full bg-[#0a0a1a] py-16 md:py-24 flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6">
          <h2 className="font-luckiest text-white text-[2.5rem] md:text-[3.5rem] leading-none uppercase tracking-wide">
            LATEST NEWS
          </h2>
          <Link 
            href="/news" 
            className="group flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-[#E53935] transition-colors pb-2"
          >
            Read All News
            <span className="w-8 h-[2px] bg-[#E53935] inline-block transition-all group-hover:w-12"></span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestNews.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center sm:hidden">
          <Link 
            href="/news" 
            className="px-8 py-3 border-2 border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
