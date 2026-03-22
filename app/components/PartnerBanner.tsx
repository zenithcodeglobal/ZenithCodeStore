import Link from 'next/link';

export default function PartnerBanner() {
  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Background */}
          <div className="absolute inset-0 brand-gradient opacity-90 rounded-2xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aC0ydjJoLTJ2LTJoLTJ2MmgtMnYtMmgtMnYyaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmgydjh2LTJoMnYtMmgydjJoMnYtMmgydjJoMnYtMmgydjJoMnYtOGgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              🤝 Become a Partner
            </h3>
            <p className="text-white/80 text-sm sm:text-base max-w-lg">
              Are you a game publisher or API provider? Join our growing network of partners and reach millions of gamers worldwide.
            </p>
          </div>

          <Link
            href="/partner"
            className="relative shrink-0 px-6 py-3 rounded-xl font-semibold text-brand bg-white hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
