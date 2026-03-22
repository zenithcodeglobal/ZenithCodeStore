import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TopUpZone – your trusted platform for instant game top-ups. Our mission, values, and the team behind the platform.',
};

const values = [
  {
    icon: '🎯',
    title: 'Our Mission',
    description: 'To make game top-ups accessible, instant, and affordable for every gamer around the world.',
  },
  {
    icon: '🛡️',
    title: 'Security First',
    description: 'Every transaction is protected with industry-leading encryption and fraud prevention systems.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Supporting gamers in over 50 countries with localized payment methods and multi-currency support.',
  },
  {
    icon: '⚡',
    title: 'Instant Delivery',
    description: 'Our automated systems ensure your top-up is delivered within seconds of payment confirmation.',
  },
  {
    icon: '💎',
    title: 'Best Prices',
    description: 'Direct partnerships with game publishers allow us to offer the most competitive prices.',
  },
  {
    icon: '🫂',
    title: 'Community Driven',
    description: 'Built by gamers, for gamers. We listen to our community and continuously improve.',
  },
];

const stats = [
  { value: '2M+', label: 'Happy Gamers' },
  { value: '50+', label: 'Supported Games' },
  { value: '150+', label: 'Countries Served' },
  { value: '99.9%', label: 'Uptime' },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">TopUpZone</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Welcome to TopUpZone — your trusted partner in the world of gaming entertainment.
            We are dedicated to providing gamers with the fastest, safest, and most affordable
            way to top up their favourite games.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-6 text-center border border-white/5">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/5 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              TopUpZone was founded in 2024 by a group of passionate gamers who were frustrated
              with the complexity and unreliability of existing game top-up platforms. We set out
              to build something better — a platform that combines speed, security, and simplicity.
            </p>
            <p>
              Today, we serve millions of gamers across over 150 countries, offering instant
              top-ups for more than 50 of the world&apos;s most popular games. Our direct partnerships
              with game publishers and payment providers allow us to offer the best prices with
              instant delivery.
            </p>
            <p>
              We believe that gaming should be accessible to everyone. That&apos;s why we continuously
              work to expand our game catalogue, support more payment methods, and improve our
              platform to deliver the best possible experience for our community.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group glass-card rounded-xl p-6 border border-white/5 hover:border-brand/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div id="faq">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How fast is the delivery?',
                a: 'Most top-ups are delivered instantly — within seconds of payment confirmation. In rare cases, it may take up to 5 minutes.',
              },
              {
                q: 'Is it safe to use TopUpZone?',
                a: 'Absolutely. All transactions are protected with bank-grade encryption. We never store your payment information.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit/debit cards, PayPal, Google Pay, Apple Pay, and various local payment methods depending on your region.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Due to the instant nature of digital deliveries, refunds are handled on a case-by-case basis. Contact our support team for assistance.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group glass-card rounded-xl border border-white/5 overflow-hidden"
              >
                <summary className="cursor-pointer p-5 flex items-center justify-between text-white font-medium hover:bg-white/5 transition-colors list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
