import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle } from '@/lib/types';

interface NewsCardProps {
  article: NewsArticle;
  index: number;
  featured?: boolean;
}

export default function NewsCard({ article, index, featured = false }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const href = article.isExternal && article.externalUrl
    ? article.externalUrl
    : `/news/${article.slug}`;

  const linkProps = article.isExternal && article.externalUrl
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  const isExternalImage = article.image.startsWith('http');

  if (featured) {
    return (
      <Link
        href={href}
        {...linkProps}
        className="group relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/6] overflow-hidden block animate-fade-in-up"
        style={{ animationDelay: '0ms', animationFillMode: 'both' }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          unoptimized={isExternalImage}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[rgb(217,60,79)] text-white rounded-sm">
              {article.categoryLabel}
            </span>
            {article.source && (
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-sm text-white/80 rounded-sm">
                {article.source}
              </span>
            )}
            <span className="font-body text-white/40 text-xs font-medium tracking-wide">
              {formattedDate}
            </span>
          </div>

          <h2 className="font-luckiest text-white text-[1.5rem] sm:text-[2rem] lg:text-[2.8rem] leading-[1.1] uppercase tracking-wide max-w-3xl mb-3 drop-shadow-lg">
            {article.title}
          </h2>

          <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl line-clamp-2 mb-5 hidden sm:block">
            {article.description}
          </p>

          <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.15em] group-hover:gap-3 transition-all duration-300">
            {article.isExternal ? 'Read Article' : 'Read More'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      {...linkProps}
      className="group relative flex flex-col overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[rgb(22,22,22)]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          unoptimized={isExternalImage}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-[rgb(217,60,79)] text-white rounded-sm">
            {article.categoryLabel}
          </span>
          {article.source && (
            <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-black/50 backdrop-blur-sm text-white/70 rounded-sm">
              {article.source}
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
          <h3 className="font-bold text-white text-[0.95rem] sm:text-[1.05rem] leading-snug uppercase tracking-wide line-clamp-2 mb-2 drop-shadow-md group-hover:text-white/90 transition-colors">
            {article.title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="font-body text-white/40 text-[11px] font-medium tracking-wide">
              {formattedDate}
            </span>
            <span className="font-body flex items-center gap-1.5 text-white/50 text-[11px] font-bold uppercase tracking-wider group-hover:text-white/80 transition-colors">
              {article.isExternal ? 'Read' : 'Read More'}
              <svg
                className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
