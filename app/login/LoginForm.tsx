'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { signInWithGoogle } from './actions';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ShinyText from '@/app/components/ShinyText';
import BorderGlow from '@/app/components/BorderGlow';
import CharacterShowcase from './CharacterShowcase';
import { createClient } from '@/lib/supabase/client';

const INPUT_CLASS = 'w-full h-12 bg-transparent rounded-xl px-4 text-sm text-white placeholder:text-white/20 focus:outline-none';

const RED_GLOW = '350 68 54';
const RED_COLORS = ['#d93c4f', '#e8455a', '#c23045'];

const QUOTES = [
  'Every pro was once a noob.',
  'GG starts here.',
  'One more game. Famous last words.',
  'Lag is just the universe testing you.',
  'Your inventory awaits.',
  'Respawning in 3... 2... 1...',
  'No save point. Full send.',
  "It's dangerous to go alone.",
  'Press start to continue.',
  'The grind never stops.',
];

const CYCLE_MS = 4000;

type FieldErrors = Record<string, string>;

export default function LoginForm() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [mounted, setMounted] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const paramError = searchParams.get('error');
    const paramMessage = searchParams.get('message');
    if (paramError) setError(decodeURIComponent(paramError));
    if (paramMessage) setSuccessMessage(paramMessage);
  }, [searchParams]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const cycleQuote = useCallback(() => {
    setQuoteVisible(false);
    setTimeout(() => {
      setQuoteIndex((i) => (i + 1) % QUOTES.length);
      setQuoteVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    const showTimer = setTimeout(() => setQuoteVisible(true), 600);
    const interval = setInterval(cycleQuote, CYCLE_MS);
    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, [cycleQuote]);

  function handleSwitch() {
    setSwitching(true);
    setError(null);
    setSuccessMessage(null);
    setFieldErrors({});
    setAttempted(false);
    setTimeout(() => {
      setMode((m) => (m === 'login' ? 'signup' : 'login'));
      setTimeout(() => setSwitching(false), 30);
    }, 200);
  }

  function validateFields(form: HTMLFormElement): FieldErrors {
    const e: FieldErrors = {};
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim();
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value.trim();

    if (mode === 'signup') {
      const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim();
      if (!name) e.name = 'Display name is required';
    }
    if (!email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address';
    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Password must be at least 6 characters';

    return e;
  }

  function handleFieldBlur(field: string, form: HTMLFormElement) {
    if (!attempted) return;
    setFieldErrors((prev) => {
      const next = { ...prev };
      const fresh = validateFields(form);
      if (fresh[field]) next[field] = fresh[field];
      else delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setAttempted(true);

    const errs = validateFields(e.currentTarget);
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      router.push('/');
      router.refresh();
    } else {
      const name = formData.get('name') as string;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setSuccessMessage('Check your email to confirm your account');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(22,22,22)] relative overflow-hidden flex items-center justify-center px-4 py-20">

      <CharacterShowcase />

      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <BorderGlow
          glowColor={RED_GLOW}
          colors={RED_COLORS}
          backgroundColor="rgb(22,22,22)"
          borderRadius={9999}
          glowRadius={20}
          glowIntensity={0.8}
          edgeSensitivity={20}
          coneSpread={30}
          fillOpacity={0.3}
        >
          <Link
            href="/"
            className="group flex items-center gap-3 px-4 py-2"
          >
            <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm text-white/40 group-hover:text-white/80 transition-colors duration-300">Back to Store</span>
          </Link>
        </BorderGlow>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[rgb(51,89,237)] opacity-[0.04] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[rgb(217,60,79)] opacity-[0.04] blur-[120px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div
        className={`relative w-full max-w-md transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center mb-10 h-24 flex flex-col items-center justify-center" style={{ transitionDelay: '100ms' }}>
          <div className="text-white/10 font-luckiest text-6xl leading-none mb-2 select-none">&ldquo;</div>
          <div
            className={`transition-all duration-400 ease-out ${
              quoteVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-[2px]'
            }`}
          >
            <p className="font-luckiest text-2xl sm:text-3xl leading-tight tracking-tight">
              <ShinyText
                text={QUOTES[quoteIndex]}
                speed={2.5}
                color="rgba(255,255,255,0.4)"
                shineColor="#ffffff"
                spread={100}
                className="font-luckiest text-2xl sm:text-3xl"
              />
            </p>
          </div>
          <div className="flex items-center gap-1.5 mt-4">
            {QUOTES.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === quoteIndex ? 'w-6 bg-[rgb(217,60,79)]' : 'w-1.5 bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-body animate-fade-in">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-body animate-fade-in">
            {successMessage}
          </div>
        )}

        <div
          className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-8 backdrop-blur-sm transition-all duration-500 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className={`transition-all duration-200 ease-out ${switching ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-0'}`}>
            <h2 className="font-luckiest text-2xl text-white mb-1">
              {mode === 'login' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
            </h2>
            <p className="text-white/40 text-sm mb-8 font-body">
              {mode === 'login' ? 'Sign in to continue' : 'Join the arena'}
            </p>
          </div>

          <div className={`transition-all duration-200 ease-out ${switching ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
            <form onSubmit={handleSubmit} noValidate>
              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  mode === 'signup' ? 'max-h-24 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
                }`}
              >
                <BorderGlow
                  glowColor={RED_GLOW}
                  colors={RED_COLORS}
                  backgroundColor="#1a1a1a"
                  borderRadius={12}
                  glowRadius={15}
                  glowIntensity={0.8}
                  edgeSensitivity={20}
                  coneSpread={30}
                  fillOpacity={0.15}
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Display name"
                    onBlur={(e) => handleFieldBlur('name', e.currentTarget.form!)}
                    className={INPUT_CLASS}
                  />
                </BorderGlow>
                {fieldErrors.name && (
                  <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{fieldErrors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <BorderGlow
                  glowColor={RED_GLOW}
                  colors={RED_COLORS}
                  backgroundColor="#1a1a1a"
                  borderRadius={12}
                  glowRadius={15}
                  glowIntensity={0.8}
                  edgeSensitivity={20}
                  coneSpread={30}
                  fillOpacity={0.15}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    onBlur={(e) => handleFieldBlur('email', e.currentTarget.form!)}
                    className={INPUT_CLASS}
                  />
                </BorderGlow>
                {fieldErrors.email && (
                  <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{fieldErrors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <BorderGlow
                  glowColor={RED_GLOW}
                  colors={RED_COLORS}
                  backgroundColor="#1a1a1a"
                  borderRadius={12}
                  glowRadius={15}
                  glowIntensity={0.8}
                  edgeSensitivity={20}
                  coneSpread={30}
                  fillOpacity={0.15}
                >
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onBlur={(e) => handleFieldBlur('password', e.currentTarget.form!)}
                    className={INPUT_CLASS}
                  />
                </BorderGlow>
                {fieldErrors.password && (
                  <p className="mt-1.5 text-xs text-red-400 animate-fade-in">{fieldErrors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full h-12 font-luckiest text-lg tracking-wider rounded-xl overflow-hidden transition-all duration-300 ${
                  loading
                    ? 'bg-white/60 text-[rgb(22,22,22)]/60 scale-[0.98]'
                    : 'bg-white text-[rgb(22,22,22)] active:scale-[0.97]'
                }`}
              >
                <span className={`relative z-10 flex items-center justify-center gap-2 transition-opacity duration-200 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                  {mode === 'login' ? 'SIGN IN' : 'SIGN UP'}
                </span>
                {loading && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-5 h-5 animate-spin text-[rgb(22,22,22)]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </span>
                )}
                {!loading && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/90 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="text-white/20 text-xs uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            <form action={signInWithGoogle}>
              <BorderGlow
                glowColor={RED_GLOW}
                colors={RED_COLORS}
                backgroundColor="#1a1a1a"
                borderRadius={12}
                glowRadius={15}
                glowIntensity={0.8}
                edgeSensitivity={20}
                coneSpread={30}
                fillOpacity={0.15}
              >
                <button
                  type="submit"
                  className="group w-full h-12 bg-transparent rounded-xl flex items-center justify-center gap-3 text-white/60 hover:text-white active:scale-[0.98] transition-all duration-300"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-sm font-medium">Continue with Google</span>
                </button>
              </BorderGlow>
            </form>
          </div>
        </div>

        <p
          className={`text-center mt-6 text-white/30 text-sm transition-all duration-500 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={handleSwitch}
            className="text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}
