import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '@/lib/types';

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export default function NewsCard({ article, index }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link
      href={`/news/${article.slug}`}
      id={`news-card-${article.id}`}
      className="group flex flex-col overflow-hidden bg-transparent animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* Image Section - Top half */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111111]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-sm text-white/90 rounded-sm border border-white/10">
            {article.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content Section - Bottom half, EA-style blue */}
      <div className="flex flex-col flex-1 bg-[#2563EB] p-5 sm:p-6 transition-colors duration-300 group-hover:bg-[#1d4ed8]">
        {/* Title */}
        <h3 className="font-black text-white text-[1.05rem] sm:text-[1.15rem] leading-snug uppercase tracking-wide mb-3 line-clamp-3 transition-all duration-200">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-white/75 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {article.description}
        </p>

        {/* Date & Read more */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/15">
          <span className="text-white/50 text-xs font-medium tracking-wide">
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5 text-white/80 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
            Read More
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
