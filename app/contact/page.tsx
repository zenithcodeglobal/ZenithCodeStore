'use client';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email Us',
    detail: 'support@topupzone.com',
    subDetail: 'We reply within 24 hours',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    detail: 'Available 24/7',
    subDetail: 'Average response: 2 minutes',
  },
  {
    icon: '📍',
    title: 'Office',
    detail: 'Singapore',
    subDetail: '1 Raffles Place, Tower 1',
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-text-secondary">
            Have a question or need help? We&apos;re here for you. Choose the best way to reach us.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="glass-card rounded-xl p-6 border border-white/5 text-center hover:border-brand/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-600 flex items-center justify-center text-2xl mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="font-semibold text-white mb-1">{info.title}</h3>
              <p className="text-brand text-sm font-medium">{info.detail}</p>
              <p className="text-xs text-text-muted mt-1">{info.subDetail}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/5">
            <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full h-11 rounded-lg bg-surface-600 border border-white/10 px-4 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us what you need..."
                  className="w-full rounded-lg bg-surface-600 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-text-muted focus:border-brand transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl font-semibold text-white brand-gradient hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
