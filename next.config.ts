import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Steam CDN (news article images)
      { protocol: 'https', hostname: 'clan.akamai.steamstatic.com' },
      { protocol: 'https', hostname: 'cdn.akamai.steamstatic.com' },
      { protocol: 'https', hostname: 'shared.akamai.steamstatic.com' },
      // RSS feed image sources
      { protocol: 'https', hostname: '**.ign.com' },
      { protocol: 'https', hostname: '**.pcgamer.com' },
      { protocol: 'https', hostname: '**.gamespot.com' },
      { protocol: 'https', hostname: '**.eurogamer.net' },
      { protocol: 'https', hostname: '**.rockpapershotgun.com' },
      { protocol: 'https', hostname: '**.destructoid.com' },
      { protocol: 'https', hostname: '**.kotaku.com' },
      // Supabase storage (user avatars)
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.emailjs.com https://api.steampowered.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          {
            key: 'Vary',
            value: 'RSC, Next-Router-State, Next-Router-Prefetch, Accept-Encoding',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
