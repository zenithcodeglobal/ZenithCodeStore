'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/partner', label: 'Partner' },
];

const categories = [
  { label: 'All Games', icon: '🎮', href: '/games' },
  { label: 'Mobile', icon: '📱', href: '/games?cat=mobile' },
  { label: 'PC', icon: '🖥️', href: '/games?cat=pc' },
  { label: 'Console', icon: '🎯', href: '/games?cat=console' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav className="glass-card border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Top<span className="text-brand">Up</span>Zone
                </span>
              </div>
            </Link>

            {/* Search bar - desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 rounded-full bg-surface-700 border border-white/10 px-4 pr-10 text-sm text-white placeholder:text-text-muted focus:border-brand focus:ring-0 transition-colors"
                />
                <button className="absolute right-1 top-1 h-8 w-8 rounded-full bg-brand flex items-center justify-center hover:bg-brand-light transition-colors" aria-label="Search">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Category bar - desktop */}
        <div className="hidden md:block border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 h-11 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative bg-surface-800 border-r border-white/5 w-72 h-full animate-slide-in-left overflow-y-auto">
            {/* Mobile search */}
            <div className="p-4 border-b border-white/5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 rounded-full bg-surface-700 border border-white/10 px-4 pr-10 text-sm text-white placeholder:text-text-muted focus:border-brand"
                />
                <button className="absolute right-1 top-1 h-8 w-8 rounded-full bg-brand flex items-center justify-center" aria-label="Search">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile nav links */}
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile categories */}
            <div className="p-4 border-t border-white/5">
              <p className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
