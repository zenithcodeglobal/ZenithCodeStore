import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ZenithCodeStore. Learn how we collect, use, and protect your information.',
};

const lastUpdated = 'April 12, 2026';

const sections = [
  {
    title: 'INTRODUCTION',
    content: [
      'This Privacy Policy explains how ZenithCodeStore ("we", "us", "our") collects, uses, and protects your information when you use our website at zenithcodestore.com.',
      'By using the platform, you consent to the practices described in this policy. If you do not agree, please discontinue use of the website.',
    ],
  },
  {
    title: 'INFORMATION WE COLLECT',
    content: [
      'Contact form submissions: When you use our Contact or Partner application forms, we collect the information you provide, including your name, email address, subject, message content, and (for partner applications) company name, partnership type, and website URL.',
      'Game account details: When the platform is fully operational, you will be asked to enter your in-game Player ID and, where applicable, Server ID to process top-up orders. This information is used solely for delivery purposes.',
      'Automatically collected data: We use sessionStorage (a browser-based temporary storage mechanism) to remember whether you have seen the launch overlay during your current browser session. This data is not sent to our servers and is cleared when you close your browser tab.',
      'We do not currently use analytics services, tracking pixels, or advertising cookies.',
    ],
  },
  {
    title: 'HOW WE USE YOUR INFORMATION',
    content: [
      'To respond to your contact form submissions and partnership inquiries.',
      'To process and deliver top-up orders to your game account (when payment processing is active).',
      'To communicate with you about your orders, inquiries, or platform updates.',
      'To improve the platform and troubleshoot technical issues.',
      'We do not use your information for automated decision-making or profiling.',
    ],
  },
  {
    title: 'THIRD-PARTY SERVICES',
    content: [
      'EmailJS: Contact and partner application forms are processed through EmailJS, a third-party email delivery service. When you submit a form, your input data (name, email, message, etc.) is transmitted to EmailJS servers for delivery to our inbox. EmailJS processes this data according to their own privacy policy.',
      'Google Fonts: The website loads fonts (Exo 2 and Luckiest Guy) from Google Fonts. This may result in your browser making requests to Google servers, which may log your IP address. See Google\'s privacy policy for details.',
      'News content: Our news section fetches articles from third-party sources including Steam News API, and RSS feeds from gaming news outlets (IGN, PC Gamer, Kotaku, Eurogamer, GameSpot, Rock Paper Shotgun, Destructoid). Fetching this content is done server-side and does not expose your personal data to these sources.',
      'We do not sell, rent, or share your personal information with third parties for their marketing purposes.',
    ],
  },
  {
    title: 'PAYMENT INFORMATION',
    content: [
      'ZenithCodeStore does not currently process payments as the platform is in a pre-launch phase.',
      'When payment processing becomes active, all transactions will be handled by third-party payment processors. We will not store your credit card numbers, bank account details, or other payment credentials on our servers. Payment processors will handle your financial data according to their own security standards and privacy policies.',
    ],
  },
  {
    title: 'DATA STORAGE AND SECURITY',
    content: [
      'Form submissions are delivered directly to our email inbox via EmailJS. We do not operate a user database or store form data on our own servers.',
      'We take reasonable measures to protect the information transmitted through our platform, but no method of electronic transmission is 100% secure. We cannot guarantee absolute security.',
    ],
  },
  {
    title: 'COOKIES AND LOCAL STORAGE',
    content: [
      'ZenithCodeStore uses sessionStorage to store a single flag indicating whether you have dismissed the launch overlay. This is cleared automatically when you close your browser tab and is never transmitted to our servers.',
      'Next.js, the framework powering this website, may set functional cookies required for the website to operate correctly. These are not used for tracking or advertising.',
      'We do not use advertising cookies, tracking cookies, or any cookie-based analytics.',
    ],
  },
  {
    title: 'YOUR RIGHTS',
    content: [
      'You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at zenithcode.global@gmail.com.',
      'Since we do not maintain user accounts or a user database, the personal data we hold is limited to contact form submissions delivered to our email.',
      'If you are located in the European Economic Area (EEA), you have additional rights under GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.',
    ],
  },
  {
    title: 'CHILDREN\'S PRIVACY',
    content: [
      'ZenithCodeStore is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us and we will take steps to delete it.',
    ],
  },
  {
    title: 'CHANGES TO THIS POLICY',
    content: [
      'We may update this Privacy Policy from time to time. Changes will be reflected by the "Last updated" date at the top of this page. Continued use of the platform after updates constitutes acceptance of the revised policy.',
    ],
  },
  {
    title: 'CONTACT',
    content: [
      'If you have questions or concerns about this Privacy Policy or our data practices, contact us at zenithcode.global@gmail.com.',
    ],
  },
];

export default function PrivacyPage() {
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
            PRIVACY POLICY
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
            See also our <Link href="/terms" className="text-white/50 hover:text-white underline underline-offset-2 transition-colors">Terms of Service</Link>
          </p>
          <p className="text-white/20 text-xs">
            zenithcode.global@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
