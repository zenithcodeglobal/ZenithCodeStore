import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner With Us',
  description: 'Join TopUpZone as a partner. Game publishers, API providers, and payment processors — grow your reach with our global gaming marketplace.',
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
