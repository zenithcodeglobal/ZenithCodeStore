import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ZenithCodeStore is building the fastest way to top up your favourite games. Learn about our story, mission, and what drives us.',
};

const stats = [
  { value: '12+', label: 'Supported Titles' },
  { value: '150+', label: 'Countries Ready' },
  { value: '<5s', label: 'Delivery Target' },
  { value: '24/7', label: 'Support' },
];

const pillars = [
  {
    number: '01',
    title: 'Speed Above All',
    body: 'Our delivery pipelines are built to get your in-game currency to you within seconds. Not minutes, not hours.',
  },
  {
    number: '02',
    title: 'Transparent Pricing',
    body: 'No hidden markups, no surprise fees. The price you see is the price you pay, every single time.',
  },
  {
    number: '03',
    title: 'Built for Gamers',
    body: 'Every feature is designed by people who game. We understand the urgency of a mid-session top-up.',
  },
  {
    number: '04',
    title: 'Security by Default',
    body: 'Bank-grade encryption protects every transaction. We never store payment details on our servers.',
  },
];

const faqs = [
  {
    q: 'How fast is the delivery?',
    a: 'Most top-ups will be delivered instantly, within seconds of payment confirmation. In rare cases, it may take up to 5 minutes.',
  },
  {
    q: 'Is it safe to use ZenithCodeStore?',
    a: 'Absolutely. All transactions are protected with bank-grade encryption. We never store your payment information on our servers.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept credit/debit cards, PayPal, Google Pay, Apple Pay, and various local payment methods depending on your region.',
  },
  {
    q: 'When are you launching?',
    a: 'We are putting the finishing touches on the platform right now. Sign up for updates and you will be the first to know when we go live.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[rgb(22,22,22)] min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-6">
            About Us
          </p>
          <h1 className="font-luckiest text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
            WE ARE BUILDING
            <br />
            <span className="text-[rgb(217,60,79)]">SOMETHING BIG</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed font-body">
            ZenithCodeStore is a new game top-up platform made by gamers
            who were tired of slow, overpriced, and unreliable alternatives.
            We are launching soon.
          </p>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[rgb(22,22,22)] p-6 sm:p-10 text-center"
            >
              <div className="font-luckiest text-3xl sm:text-4xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-4">
          Our Story
        </p>
        <h2 className="font-luckiest text-3xl sm:text-4xl text-white mb-8">
          STARTED WITH FRUSTRATION.
          <br />
          BUILT WITH PURPOSE.
        </h2>
        <div className="space-y-5 text-white/50 text-base sm:text-lg leading-relaxed font-body">
          <p>
            We started ZenithCodeStore because every top-up platform we tried
            felt slow, overpriced, or sketchy. As gamers ourselves, we knew
            there had to be a better way. So we decided to build it.
          </p>
          <p>
            Right now we are in the final stages before launch, with support
            for 12+ popular titles and coverage across 150+ countries already
            in place. Our systems are designed to deliver top-ups in under
            five seconds, backed by direct publisher partnerships that keep
            pricing honest.
          </p>
          <p>
            This is just the beginning. More games, more payment methods,
            and a relentless focus on making the experience faster and
            simpler. That is what drives every line of code we ship.
          </p>
        </div>
      </section>

      {/* ─── Pillars ─── */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-4">
          What We Stand For
        </p>
        <h2 className="font-luckiest text-3xl sm:text-4xl text-white mb-12">
          FOUR PILLARS
        </h2>

        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`group flex gap-4 sm:gap-8 py-6 sm:py-8 ${
                i < pillars.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <span className="font-luckiest text-2xl text-white/10 group-hover:text-[rgb(217,60,79)] transition-colors duration-500 select-none shrink-0 pt-0.5">
                {pillar.number}
              </span>
              <div>
                <h3 className="font-luckiest text-xl sm:text-2xl text-white mb-2 group-hover:translate-x-1 transition-transform duration-500">
                  {pillar.title.toUpperCase()}
                </h3>
                <p className="text-white/40 text-base leading-relaxed font-body">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-4">
          FAQ
        </p>
        <h2 className="font-luckiest text-3xl sm:text-4xl text-white mb-12">
          COMMON QUESTIONS
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <details
              key={faq.q}
              className={`group ${
                i < faqs.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <summary className="flex items-center justify-between py-6 text-white text-base sm:text-lg font-medium list-none select-none hover:text-white/80 transition-colors duration-300">
                {faq.q}
                <svg
                  className="w-5 h-5 text-white/20 group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <div className="pb-6 text-white/40 text-base leading-relaxed pr-10 font-body">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
