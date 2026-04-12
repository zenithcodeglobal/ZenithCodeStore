'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const BARE_ROUTES = ['/login'];

interface LayoutShellProps {
  children: ReactNode;
  navbar: ReactNode;
  footer: ReactNode;
  overlay: ReactNode;
}

export default function LayoutShell({ children, navbar, footer, overlay }: LayoutShellProps) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(r + '/'));

  if (isBare) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      {overlay}
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
