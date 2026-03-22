import Link from 'next/link';

interface SectionHeadingProps {
  title: string;
  seeMoreHref?: string;
}

export default function SectionHeading({ title, seeMoreHref }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        <span className="gradient-text">{title}</span>
      </h2>
      {seeMoreHref && (
        <Link
          href={seeMoreHref}
          className="flex items-center gap-1 px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium text-text-secondary hover:text-white hover:border-brand/50 transition-all"
        >
          See more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
