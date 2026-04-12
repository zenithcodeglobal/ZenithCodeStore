'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import CustomSelect from '@/app/components/CustomSelect';

const SERVICE_ID = 'service_8l3bji3';
const TEMPLATE_ID = 'template_rqsjuut';
const PUBLIC_KEY = '1bses4q9O63xyN_Gp';

const reasons = [
  {
    number: '01',
    title: 'Early Access',
    body: 'Get in on the ground floor. Partners who join before launch get priority placement and better terms.',
  },
  {
    number: '02',
    title: 'Ready Infrastructure',
    body: 'Automated delivery, payment processing, and customer support are already built. We handle the operational complexity.',
  },
  {
    number: '03',
    title: 'Transparent Revenue',
    body: 'Real-time dashboards, clear settlement terms, and no hidden fees. You always know where you stand.',
  },
  {
    number: '04',
    title: 'Developer-First API',
    body: 'Clean REST endpoints, comprehensive documentation, and dedicated integration support from day one.',
  },
];

const PARTNERSHIP_OPTIONS = [
  { value: 'Game Publisher', label: 'Game Publisher' },
  { value: 'API Provider', label: 'API Provider' },
  { value: 'Payment Partner', label: 'Payment Partner' },
  { value: 'Other', label: 'Other' },
];

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

type FieldErrors = Record<string, string>;

export default function PartnerPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [partnerType, setPartnerType] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);

  function validate(): FieldErrors {
    const form = formRef.current;
    if (!form) return {};
    const e: FieldErrors = {};
    const company = (form.elements.namedItem('from_name') as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem('from_email') as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim();

    if (!company) e.from_name = 'Company name is required';
    if (!email) e.from_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.from_email = 'Enter a valid email address';
    if (!partnerType) e.subject = 'Select a partnership type';
    if (!message) e.message = 'Tell us about your proposal';

    return e;
  }

  function handleBlur(field: string) {
    if (!attempted) return;
    setErrors((prev) => {
      const next = { ...prev };
      const fresh = validate();
      if (fresh[field]) next[field] = fresh[field];
      else delete next[field];
      return next;
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);

    const fieldErrors = validate();
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    if (!formRef.current || status === 'sending') return;

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('sent');
      formRef.current.reset();
      setPartnerType('');
      setAttempted(false);
      setErrors({});
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  const buttonLabel: Record<FormStatus, string> = {
    idle: 'SUBMIT APPLICATION',
    sending: 'SENDING...',
    sent: 'APPLICATION SENT',
    error: 'FAILED - TRY AGAIN',
  };

  const buttonColor: Record<FormStatus, string> = {
    idle: 'bg-white text-[rgb(22,22,22)]',
    sending: 'bg-white/60 text-[rgb(22,22,22)]',
    sent: 'bg-emerald-500 text-white',
    error: 'bg-red-500 text-white',
  };

  const inputClass = (field: string) =>
    `w-full h-12 rounded-xl bg-white/[0.04] border px-4 text-white placeholder:text-white/20 transition-all duration-200 outline-none ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/40'
        : 'border-white/[0.08] focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]'
    }`;

  return (
    <div className="bg-[rgb(22,22,22)] min-h-screen">
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
            Partnerships
          </p>
          <h1 className="font-luckiest text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
            LET&apos;S BUILD THIS
            <br />
            <span className="text-[rgb(217,60,79)]">TOGETHER</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
            We are launching soon and looking for game publishers,
            payment providers, and API partners to grow with us
            from the start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-4">
          Why Partner With Us
        </p>
        <h2 className="font-luckiest text-3xl sm:text-4xl text-white mb-12">
          FOUR REASONS
        </h2>

        <div className="space-y-0">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`group flex gap-4 sm:gap-8 py-6 sm:py-8 ${
                i < reasons.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <span className="font-luckiest text-2xl text-white/10 group-hover:text-[rgb(217,60,79)] transition-colors duration-500 select-none shrink-0 pt-0.5">
                {reason.number}
              </span>
              <div>
                <h3 className="font-luckiest text-xl sm:text-2xl text-white mb-2 group-hover:translate-x-1 transition-transform duration-500">
                  {reason.title.toUpperCase()}
                </h3>
                <p className="text-white/40 text-base leading-relaxed">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
        <p className="text-sm tracking-[0.25em] uppercase text-white/40 mb-4">
          Get Started
        </p>
        <h2 className="font-luckiest text-3xl sm:text-4xl text-white mb-3">
          APPLY TO PARTNER
        </h2>
        <p className="text-white/40 text-base mb-10">
          Tell us about your business. We respond within 48 hours.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="partner-company" className="block text-sm text-white/50 mb-2">
                Company Name
              </label>
              <input
                id="partner-company"
                name="from_name"
                type="text"
                placeholder="Acme Games"
                onBlur={() => handleBlur('from_name')}
                className={inputClass('from_name')}
              />
              {errors.from_name && (
                <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.from_name}</p>
              )}
            </div>
            <div>
              <label htmlFor="partner-email" className="block text-sm text-white/50 mb-2">
                Business Email
              </label>
              <input
                id="partner-email"
                name="from_email"
                type="email"
                placeholder="you@company.com"
                onBlur={() => handleBlur('from_email')}
                className={inputClass('from_email')}
              />
              {errors.from_email && (
                <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.from_email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="partner-type" className="block text-sm text-white/50 mb-2">
              Partnership Type
            </label>
            <CustomSelect
              id="partner-type"
              name="subject"
              options={PARTNERSHIP_OPTIONS}
              value={partnerType}
              onChange={(v) => {
                setPartnerType(v);
                if (attempted) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.subject;
                    return next;
                  });
                }
              }}
              placeholder="Select a type"
              error={errors.subject}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="partner-website" className="block text-sm text-white/50 mb-2">
              Website
            </label>
            <input
              id="partner-website"
              name="website"
              type="url"
              placeholder="https://your-company.com"
              className="w-full h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 text-white placeholder:text-white/20 focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)] transition-colors duration-300 outline-none"
            />
          </div>

          <div>
            <label htmlFor="partner-message" className="block text-sm text-white/50 mb-2">
              Partnership Proposal
            </label>
            <textarea
              id="partner-message"
              name="message"
              rows={5}
              placeholder="Tell us how you'd like to work together..."
              onBlur={() => handleBlur('message')}
              className={`w-full rounded-xl bg-white/[0.04] border px-4 py-3 text-white placeholder:text-white/20 transition-all duration-200 outline-none resize-none ${
                errors.message
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/40'
                  : 'border-white/[0.08] focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]'
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full h-13 rounded-xl font-luckiest text-base tracking-wide transition-all duration-300 ${buttonColor[status]} ${
              status === 'sending' ? 'opacity-60' : 'hover:opacity-90 active:scale-[0.98]'
            }`}
          >
            {buttonLabel[status]}
          </button>

          <p className="text-xs text-white/25 text-center pt-1">
            By submitting, you agree to our{' '}
            <Link href="/terms" className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </section>
    </div>
  );
}
