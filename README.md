# ZenithCodeStore

Game top-up e-commerce platform for purchasing in-game currencies. Built with Next.js 16 and deployed on Vercel.

**Status**: Pre-launch (Launching Soon)

## Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **Auth**: Supabase (Email + Google OAuth)
- **Database**: Supabase (PostgreSQL + RLS)
- **Email**: EmailJS (contact + partner forms)
- **News**: Steam News API + RSS aggregation (ISR, 1hr revalidation)
- **Animations**: Motion (Framer Motion)
- **Fonts**: Exo 2, Luckiest Guy, Manrope (self-hosted via next/font)

## Getting Started

```bash
npm install
```

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx              Root layout (fonts, auth provider, nav/footer)
  page.tsx                Homepage (video hero, featured games, news)
  globals.css             Design system (Tailwind v4 theme)
  components/             Shared components
  games/                  Game catalog + detail pages with top-up packages
  news/                   Live gaming news (Steam + RSS)
  login/                  Auth (email + Google OAuth)
  profile/                User profile + saved game accounts
  about/                  About page
  contact/                Contact form (EmailJS)
  partner/                Partner application (EmailJS)
  terms/                  Terms of Service
  privacy/                Privacy Policy
  auth/                   OAuth callback + email confirmation routes
lib/
  data.ts                 Game catalog + top-up packages (static)
  types.ts                TypeScript interfaces
  newsApi.ts              Steam News + RSS fetcher with ISR
  newsData.ts             Static news data + category definitions
  supabase/               Supabase client (browser, server, middleware)
proxy.ts                  Next.js 16 request proxy (auth session refresh)
```

## Database Setup

Run the SQL migration in your Supabase SQL Editor. The migration creates:

- `profiles` table with auto-creation trigger on signup
- `saved_game_accounts` table for storing player IDs per game
- `orders` table for order history
- Row Level Security policies on all tables

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Set the same environment variables in Vercel project settings.

### Notes

- The 58MB `hero_video.mp4` in `public/` should be moved to a video CDN (Vercel Blob, Cloudinary, etc.) before production traffic
- Large images in `public/` should be compressed to < 200KB each
- Google OAuth redirect URI must be updated to match your production domain in both GCP Console and Supabase Dashboard

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
