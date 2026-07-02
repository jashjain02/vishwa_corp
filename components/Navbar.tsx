'use client';

import React, { useState, useEffect } from 'react';
import logoMark from '../assets/images/logo-mark.png';

const LEFT_LINKS = [
  { href: '#export', lines: ['Request', 'a Quote'] },
  { href: '#partner', lines: ['Partner', 'with Us'] },
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
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300 ease-out',
          scrolled || menuOpen ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent',
        ].join(' ')}
      >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-[64px] lg:py-[24px]">

        {/* ── Left links (desktop) ── */}
        <nav
          aria-label="Primary navigation left"
          className="hidden lg:flex items-center gap-[60px] w-[300px]"
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
          className="relative h-[22px] w-[120px] overflow-hidden md:h-[31px] md:w-[170px] lg:h-[40px] lg:w-[222px]"
        >
          <span
            className="absolute left-[0.11px] top-[-8.31px] block h-[39.92px] w-[119.78px] bg-white md:left-[0.16px] md:top-[-11.78px] md:h-[56.55px] md:w-[169.69px] lg:left-[0.21px] lg:top-[-15.38px] lg:h-[73.85px] lg:w-[221.59px]"
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

        {/* ── Right: Contact Us + menu (desktop) ── */}
        <div className="hidden lg:flex items-center justify-end gap-[63px] w-[300px]">
          <a
            href="#contact"
            className="flex flex-col items-start text-[16px] font-semibold uppercase tracking-[-0.03em] text-white"
          >
            Contact Us
            <span className="block h-[1.32px] w-full bg-white" />
          </a>

          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex size-[60px] items-center justify-center rounded-full"
          >
            <span className="flex flex-col items-center gap-[6px]">
              <span
                className={[
                  'block h-[2px] w-[20px] bg-white transition-all duration-200',
                  menuOpen ? 'translate-y-[8px] rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-[2px] w-[20px] bg-white transition-all duration-200',
                  menuOpen ? 'opacity-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-[2px] w-[20px] bg-white transition-all duration-200',
                  menuOpen ? '-translate-y-[8px] -rotate-45' : '',
                ].join(' ')}
              />
            </span>
          </button>
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
            {[
              { href: '#export', label: 'Request a Quote' },
              { href: '#partner', label: 'Partner with Us' },
              { href: '#contact', label: 'Contact Us' },
            ].map((link) => (
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
