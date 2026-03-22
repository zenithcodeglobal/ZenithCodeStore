'use client';

export default function Newsletter() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-brand/10 to-violet-500/20 rounded-2xl" />
          <div className="absolute inset-0 glass-card rounded-2xl" />

          {/* Glow effects */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500/15 rounded-full blur-[100px]" />

          <div className="relative text-center max-w-xl mx-auto">
            <span className="inline-block text-4xl mb-4">📬</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Stay Updated
            </h2>
            <p className="text-text-secondary mb-8">
              Subscribe to our newsletter for the latest game top-up deals, new game
              releases, and exclusive promotions.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 rounded-xl bg-surface-700 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                required
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-xl font-semibold text-white brand-gradient hover:opacity-90 transition-opacity shrink-0"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-text-muted mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
