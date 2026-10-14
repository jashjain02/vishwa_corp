'use client';

import React, { useState, useEffect } from 'react';
import logoMark from '../assets/images/logo-mark.png';

// Root-relative so the links also work from /products/ pages.
const LEFT_LINKS = [
  { href: '/products/', lines: ['Our', 'Materials'] },
  { href: '/products/#enquire', lines: ['Request', 'a Quote'] },
  { href: '/#partner', lines: ['Partner', 'with Us'] },
] as const;

const MOBILE_LINKS = [
  { href: '/products/', label: 'Our Materials' },
  { href: '/#industries', label: 'Industries' },
  { href: '/products/#enquire', label: 'Request a Quote' },
  { href: '/#partner', label: 'Partner with Us' },
  { href: '/#contact', label: 'Contact Us' },
] as const;

/**
 * Navbar — transparent over the Hero, fixed for the full page.
 * Matches Figma node 34:433 ("Navigations") exactly.
 */
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Dim overlay behind mobile drawer, signals locked scroll ── */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden transition-opacity duration-300"
        />
      )}

      <header
        role="banner"
        className={[
          'fixed left-0 right-0 z-50',
          'transition-all duration-300 ease-out',
          menuOpen
            ? 'top-0 inset-x-0 rounded-none border border-transparent bg-black/60 backdrop-blur-md'
            : scrolled
            ? 'top-3 inset-x-3 rounded-full border border-white/10 bg-black/60 shadow-lg shadow-black/30 backdrop-blur-md sm:inset-x-6 sm:top-4 md:inset-x-10 lg:inset-x-[64px]'
            : 'top-0 inset-x-0 rounded-none border border-transparent bg-transparent',
        ].join(' ')}
      >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-[64px] lg:py-[24px]">

        {/* ── Left links (desktop) ── */}
        <nav
          aria-label="Primary navigation left"
          className="hidden lg:flex items-center gap-[40px] w-[340px]"
        >
          {LEFT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium capitalize text-white leading-[1.1] hover:text-white/70 transition-colors duration-200"
            >
              <span className="block">{link.lines[0]}</span>
              <span className="block">{link.lines[1]}</span>
            </a>
          ))}
        </nav>

        {/* ── Center logo (masked white, matching Figma) ── */}
        <a
          href="/"
          aria-label="Vishwa Corporation — home"
          className="relative h-[27.5px] w-[150px] overflow-hidden md:h-[38.75px] md:w-[212.5px] lg:h-[50px] lg:w-[277.5px]"
        >
          <span
            className="absolute left-[0.14px] top-[-10.39px] block h-[49.9px] w-[149.73px] bg-white md:left-[0.2px] md:top-[-14.73px] md:h-[70.69px] md:w-[212.11px] lg:left-[0.26px] lg:top-[-19.23px] lg:h-[92.31px] lg:w-[276.99px]"
            style={{
              WebkitMaskImage: `url(${logoMark.src})`,
              maskImage: `url(${logoMark.src})`,
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          />
        </a>

        {/* ── Right: Contact Us (desktop) ── */}
        <div className="hidden lg:flex items-center justify-end w-[340px]">
          <a
            href="/#contact"
            className="flex flex-col items-start text-[16px] font-semibold uppercase tracking-[-0.03em] text-white"
          >
            Contact Us
            <span className="block h-[1.32px] w-full bg-white" />
          </a>
        </div>

        {/* ── Mobile: hamburger ── */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-white p-2"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <nav
          aria-label="Primary navigation mobile"
          className="lg:hidden bg-black/60 backdrop-blur-md border-t border-white/[0.06]"
        >
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {MOBILE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-200 border-b border-white/[0.06]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      </header>
    </>
  );
};

export default Navbar;
