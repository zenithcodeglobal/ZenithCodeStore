const features = [
  {
    icon: '🚀',
    title: 'Quick Delivery',
    description: 'Instant content access. Get your top-up delivered within seconds after payment confirmation.',
    gradient: 'from-violet-500/20 to-blue-500/20',
  },
  {
    icon: '💰',
    title: 'Great Prices',
    description: 'Bang for your buck. Competitive prices with regular promotions and exclusive discounts.',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: '🎧',
    title: 'Customer Service',
    description: 'Talk to real people. Our support team is available 24/7 to help you with any issues.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Why Choose <span className="gradient-text">TopUpZone</span>?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            We make game top-ups simple, fast, and affordable for gamers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl glass-card border border-white/5 hover:border-brand/30 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-surface-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
