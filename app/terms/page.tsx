import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ZenithCodeStore. Read our terms governing the use of our game top-up platform.',
};

const lastUpdated = 'April 12, 2026';

const sections = [
  {
    title: 'ACCEPTANCE OF TERMS',
    content: [
      'By accessing or using ZenithCodeStore (zenithcodestore.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.',
      'We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms. We will indicate the date of the most recent update at the top of this page.',
    ],
  },
  {
    title: 'PLATFORM STATUS',
    content: [
      'ZenithCodeStore is currently in a pre-launch phase. Certain features, including payment processing and in-game currency delivery, are not yet active. During this period, you may browse game listings, read news content, and submit contact or partnership inquiries.',
      'We do not guarantee a specific launch date. Features, pricing, and supported games are subject to change before and after launch.',
    ],
  },
  {
    title: 'DESCRIPTION OF SERVICE',
    content: [
      'ZenithCodeStore is a digital platform for purchasing in-game currencies and top-up packages for supported video games. When fully operational, the platform will facilitate the purchase and instant delivery of digital goods such as in-game diamonds, coins, points, and similar virtual currencies.',
      'We act as an intermediary between you and game publishers or authorized distributors. We are not the developer or publisher of any game listed on the platform.',
    ],
  },
  {
    title: 'USER RESPONSIBILITIES',
    content: [
      'You must provide accurate information when using the platform, including your in-game Player ID and Server ID where required. Incorrect details may result in failed or misdirected deliveries, for which ZenithCodeStore cannot be held responsible.',
      'You agree not to use the platform for any unlawful purpose, attempt to gain unauthorized access to our systems, or interfere with the operation of the platform.',
      'You must be at least 13 years old to use ZenithCodeStore. If you are under 18, you confirm that a parent or legal guardian has reviewed and agreed to these terms on your behalf.',
    ],
  },
  {
    title: 'DIGITAL GOODS AND REFUNDS',
    content: [
      'All products sold on ZenithCodeStore are digital goods. Once a top-up has been successfully delivered to your game account, the transaction is final.',
      'Refund requests are reviewed on a case-by-case basis. You may be eligible for a refund if delivery fails due to a platform error or if you are charged without receiving the purchased item. Contact us at zenithcode.global@gmail.com with your transaction details.',
      'We reserve the right to decline refund requests for completed deliveries, incorrect Player IDs provided by the user, or suspected fraudulent activity.',
    ],
  },
  {
    title: 'PRICING AND PAYMENTS',
    content: [
      'All prices displayed on the platform are in the currency indicated on each game listing. Prices may change without prior notice.',
      'When payment processing is active, we will support multiple payment methods including credit/debit cards, digital wallets, and local payment options depending on your region. All payment processing is handled by third-party payment providers.',
      'ZenithCodeStore does not store your payment card details on our servers.',
    ],
  },
  {
    title: 'INTELLECTUAL PROPERTY',
    content: [
      'All content on ZenithCodeStore, including but not limited to the website design, logos, text, and graphics, is the property of ZenithCodeStore or its licensors and is protected by applicable intellectual property laws.',
      'Game names, logos, and related assets displayed on the platform are trademarks of their respective publishers and are used for identification purposes only. ZenithCodeStore does not claim ownership of any third-party intellectual property.',
    ],
  },
  {
    title: 'NEWS CONTENT',
    content: [
      'The news section of ZenithCodeStore aggregates content from third-party sources including game publishers, RSS feeds, and gaming news outlets. We provide links to original sources where available.',
      'ZenithCodeStore does not claim authorship of externally sourced news articles. All third-party content remains the property of its original creators.',
    ],
  },
  {
    title: 'LIMITATION OF LIABILITY',
    content: [
      'ZenithCodeStore is provided on an "as is" and "as available" basis. We do not warrant that the platform will be uninterrupted, error-free, or free of harmful components.',
      'To the maximum extent permitted by law, ZenithCodeStore shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.',
      'Our total liability for any claim related to the platform shall not exceed the amount you paid to ZenithCodeStore in the 12 months preceding the claim.',
    ],
  },
  {
    title: 'THIRD-PARTY SERVICES',
    content: [
      'The platform uses third-party services for form processing (EmailJS), font delivery (Google Fonts), and news content aggregation. Your use of these services is subject to their respective terms and privacy policies.',
      'Links to external websites or resources are provided for convenience only. ZenithCodeStore is not responsible for the content or practices of any third-party sites.',
    ],
  },
  {
    title: 'TERMINATION',
    content: [
      'We reserve the right to suspend or terminate access to the platform at our discretion, without prior notice, for conduct that we believe violates these terms or is harmful to other users or the platform.',
    ],
  },
  {
    title: 'CONTACT',
    content: [
      'If you have questions about these Terms of Service, contact us at zenithcode.global@gmail.com.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[rgb(22,22,22)] min-h-screen">
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
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
            Legal
          </p>
          <h1 className="font-luckiest text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-4">
            TERMS OF SERVICE
          </h1>
          <p className="text-sm text-white/30">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <div className="space-y-0">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`py-8 sm:py-10 ${
                i < sections.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <div className="flex gap-4 sm:gap-8">
                <span className="font-luckiest text-lg text-white/10 select-none shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-luckiest text-lg sm:text-xl text-white mb-4 tracking-wide">
                    {section.title}
                  </h2>
                  <div className="space-y-3 font-body">
                    {section.content.map((paragraph, j) => (
                      <p key={j} className="text-white/40 text-[15px] leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.06] text-center">
          <p className="text-white/30 text-sm mb-4">
            See also our <Link href="/privacy" className="text-white/50 hover:text-white underline underline-offset-2 transition-colors">Privacy Policy</Link>
          </p>
          <p className="text-white/20 text-xs">
            zenithcode.global@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
