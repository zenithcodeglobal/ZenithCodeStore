import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Support', href: '/contact' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  return (
    <>
      <section className="w-full bg-[rgb(51,89,237)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <h2 className="font-luckiest text-white text-[1.6rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.05] uppercase tracking-wide text-center md:text-left">
            LET&apos;S BUILD THE FUTURE
            <br />
            OF GAMING TOGETHER
          </h2>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3 rounded-full bg-[rgb(217,60,79)] text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <footer className="w-full bg-[rgb(28,27,25)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-center gap-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/zenith_logo.png" alt="ZenithCodeStore" width={32} height={32} />
              <span className="text-lg font-bold text-white tracking-tight">ZenithCodeStore</span>
            </Link>

            <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#8a8f98] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="w-full border-t border-white/[0.06]" />

            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
              <p className="text-xs text-[#555960]">
                © 2026 ZenithCodeStore. All rights reserved.
              </p>
              <p className="text-[11px] text-[#555960]">
                All trademarks are property of their respective owners.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
