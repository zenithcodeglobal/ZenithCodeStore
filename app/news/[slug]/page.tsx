import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllNews, getNewsBySlug, getNewsByCategory } from '@/lib/newsData';
import NewsCard from '@/app/components/NewsCard';

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllNews();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | ZenithCodeStore`,
      description: article.description,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
    },
  };
}

function getReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) notFound();

  const readingTime = getReadingTime(article.content);
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const paragraphs = article.content.split('\n\n');

  const sameCategoryArticles = getNewsByCategory(article.category).filter(
    (a) => a.slug !== article.slug
  );
  const relatedArticles =
    sameCategoryArticles.length >= 3
      ? sameCategoryArticles.slice(0, 3)
      : [
          ...sameCategoryArticles,
          ...getAllNews()
            .filter((a) => a.slug !== article.slug && !sameCategoryArticles.some((sc) => sc.slug === a.slug))
            .slice(0, 3 - sameCategoryArticles.length),
        ];

  return (
    <div className="min-h-screen bg-[#060a13]">
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a13] via-[#060a13]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a13]/50 to-transparent" />

        <div className="absolute top-6 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#2563EB]/90 backdrop-blur-sm text-white">
              {article.categoryLabel}
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-luckiest text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] uppercase tracking-wide max-w-4xl animate-fade-in-up">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-white/50">
              <time dateTime={article.date}>{formattedDate}</time>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{readingTime} min read</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[#ff6600]/80">{article.categoryLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-10 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          <div className="space-y-6 font-body">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-relaxed ${
                  index === 0
                    ? 'text-[1.15rem] sm:text-[1.25rem] text-[#d1d8e5] font-medium first-letter:text-[3.5rem] first-letter:font-luckiest first-letter:text-[#ff6600] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]'
                    : 'text-[1.05rem] text-[#a0aab8]'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6600] to-[#ff8533] flex items-center justify-center">
                <span className="font-luckiest text-white text-sm">Z</span>
              </div>
              <div>
                <p className="text-white/90 text-sm font-semibold">Zenith Store Editorial</p>
                <p className="text-white/40 text-xs">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="w-full py-12 sm:py-16 border-t border-white/[0.04]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-luckiest text-white text-[1.8rem] sm:text-[2.5rem] uppercase tracking-wide mb-8">
              MORE NEWS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedArticles.map((related, index) => (
                <NewsCard key={related.id} article={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
