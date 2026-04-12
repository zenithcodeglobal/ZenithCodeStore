'use client';

import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8l3bji3';
const TEMPLATE_ID = 'template_rqsjuut';
const PUBLIC_KEY = '1bses4q9O63xyN_Gp';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type FieldErrors = Record<string, string>;

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);

  function validate(): FieldErrors {
    const form = formRef.current;
    if (!form) return {};
    const e: FieldErrors = {};
    const name = (form.elements.namedItem('from_name') as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem('from_email') as HTMLInputElement)?.value.trim();
    const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim();

    if (!name) e.from_name = 'Your name is required';
    if (!email) e.from_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.from_email = 'Enter a valid email address';
    if (!subject) e.subject = 'Subject is required';
    if (!message) e.message = 'Message is required';

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

  const inputClass = (field: string) =>
    `w-full h-12 bg-white/[0.04] border rounded-xl px-4 text-sm text-white placeholder:text-white/20 focus:bg-white/[0.06] transition-all duration-200 outline-none ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/40'
        : 'border-white/[0.08] focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]/40'
    }`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
      setAttempted(false);
      setErrors({});
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(22,22,22)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">

        <div className="text-center mb-16">
          <h1 className="font-luckiest text-4xl sm:text-5xl text-white uppercase tracking-wide mb-4">
            Get In Touch
          </h1>
          <p className="text-white/35 text-[15px] max-w-md mx-auto mb-6">
            Have a question or need help? We&apos;re here for you.
          </p>
          <a
            href="mailto:zenithcode.global@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            zenithcode.global@gmail.com
          </a>
        </div>

        <div>
          <h2 className="font-luckiest text-xl text-white uppercase tracking-wider mb-8">
            Send a Message
          </h2>

          <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="from_name"
                  type="text"
                  placeholder="John Doe"
                  onBlur={() => handleBlur('from_name')}
                  className={inputClass('from_name')}
                />
                {errors.from_name && (
                  <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.from_name}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="from_email"
                  type="email"
                  placeholder="john@example.com"
                  onBlur={() => handleBlur('from_email')}
                  className={inputClass('from_email')}
                />
                {errors.from_email && (
                  <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.from_email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                onBlur={() => handleBlur('subject')}
                className={inputClass('subject')}
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-white/30 uppercase tracking-widest mb-2.5">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us what you need..."
                onBlur={() => handleBlur('message')}
                className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:bg-white/[0.06] transition-all duration-200 outline-none resize-none ${
                  errors.message
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/40'
                    : 'border-white/[0.08] focus:border-[rgb(51,89,237)] focus:ring-1 focus:ring-[rgb(51,89,237)]/40'
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full h-12 font-luckiest text-base tracking-wider uppercase rounded-xl transition-all duration-200 ${
                status === 'sent'
                  ? 'bg-emerald-500 text-white'
                  : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-[rgb(22,22,22)] hover:bg-white/90 active:scale-[0.97]'
              } ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent'}
              {status === 'error' && 'Failed - Try Again'}
              {status === 'idle' && 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
