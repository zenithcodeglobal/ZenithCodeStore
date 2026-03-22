'use client';

import Link from 'next/link';

const benefits = [
  {
    icon: '🌍',
    title: 'Global Distribution',
    description: 'Reach millions of gamers across 150+ countries through our established marketplace.',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Access detailed dashboards with sales data, user insights, and performance metrics.',
  },
  {
    icon: '🔗',
    title: 'Easy API Integration',
    description: 'Our developer-friendly API makes integration seamless. Full documentation and support provided.',
  },
  {
    icon: '💳',
    title: 'Flexible Payments',
    description: 'Multiple payout methods with transparent pricing. Weekly or monthly settlement options.',
  },
  {
    icon: '🎧',
    title: 'Dedicated Support',
    description: 'Get a dedicated account manager and priority technical support for your integration.',
  },
  {
    icon: '📈',
    title: 'Marketing Support',
    description: 'Benefit from featured placements, promotional campaigns, and co-marketing opportunities.',
  },
];

const partnerTypes = [
  {
    title: 'Game Publishers',
    description: 'List your game on our platform and reach new audiences. We handle payments, delivery, and customer support.',
    icon: '🎮',
  },
  {
    title: 'API Providers',
    description: 'Connect your top-up API to our platform. We bring the traffic and users, you provide the service.',
    icon: '🔌',
  },
  {
    title: 'Payment Partners',
    description: 'Integrate your payment solution to serve gamers in your region with local payment methods.',
    icon: '💰',
  },
];

export default function PartnerPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4">
            Partnership Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Partner With <span className="gradient-text">TopUpZone</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Join our growing ecosystem of game publishers, API providers, and payment partners.
            Together, we can deliver the best top-up experience to gamers worldwide.
          </p>
        </div>

        {/* Partner types */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {partnerTypes.map((type) => (
            <div
              key={type.title}
              className="group relative glass-card rounded-xl p-6 border border-white/5 hover:border-brand/30 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-600 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Why Partner With <span className="gradient-text">Us</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 glass-card rounded-xl p-5 border border-white/5"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-600 flex items-center justify-center text-xl shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-2">Apply to Partner</h2>
            <p className="text-sm text-text-secondary mb-6">
              Fill out the form below and our partnerships team will get back to you within 48 hours.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="partner-company" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="partner-company"
                    type="text"
                    placeholder="Your company"
                    className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="partner-email" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Business Email
                  </label>
                  <input
                    id="partner-email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="partner-type" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Partnership Type
                </label>
                <select
                  id="partner-type"
                  className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white focus:border-brand transition-colors"
                >
                  <option value="">Select a type</option>
                  <option value="publisher">Game Publisher</option>
                  <option value="api">API Provider</option>
                  <option value="payment">Payment Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="partner-website" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Website
                </label>
                <input
                  id="partner-website"
                  type="url"
                  placeholder="https://your-company.com"
                  className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                />
              </div>

              <div>
                <label htmlFor="partner-message" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Tell us about your partnership proposal
                </label>
                <textarea
                  id="partner-message"
                  rows={4}
                  placeholder="Describe how you'd like to partner with us..."
                  className="w-full rounded-lg bg-surface-600 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl font-semibold text-white brand-gradient hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>

              <p className="text-xs text-text-muted text-center">
                By submitting, you agree to our{' '}
                <Link href="#" className="text-brand hover:underline">Terms of Service</Link>{' '}
                and{' '}
                <Link href="#" className="text-brand hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
