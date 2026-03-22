import Link from 'next/link';

const footerLinks = {
  catalogue: [
    { label: 'Mobile Games', href: '/games?cat=mobile' },
    { label: 'PC Games', href: '/games?cat=pc' },
    { label: 'Console Games', href: '/games?cat=console' },
    { label: 'All Games', href: '/games' },
  ],
  resources: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partner With Us', href: '/partner' },
    { label: 'FAQ', href: '/about#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-800 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <span className="text-xl font-bold text-white">
                Top<span className="text-brand">Up</span>Zone
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Your trusted platform for instant game top-ups. Fast, secure, and affordable.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              {[
                { label: 'Twitter', icon: '𝕏' },
                { label: 'Discord', icon: '💬' },
                { label: 'Instagram', icon: '📷' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-surface-700 border border-white/5 flex items-center justify-center text-sm hover:bg-brand hover:border-brand transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Catalogue */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Catalogue</h3>
            <ul className="space-y-2.5">
              {footerLinks.catalogue.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['VISA', 'MC', 'PayPal', 'GPay', 'Apple'].map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 rounded-md bg-surface-700 border border-white/5 text-xs font-medium text-text-secondary"
                >
                  {method}
                </span>
              ))}
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-brand transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © 2026 TopUpZone. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            All trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
