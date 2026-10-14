import React from 'react';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Dark page header for inner pages — sits under the transparent fixed Navbar,
 * using the footer's blue radial glow for brand continuity.
 */
export const PageHero: React.FC<PageHeroProps> = ({ crumbs, eyebrow, title, intro, children }) => (
  <section
    className="relative w-full overflow-hidden bg-[#050505]"
    style={{
      backgroundImage:
        'radial-gradient(ellipse 70% 80% at 50% 120%, rgba(0,90,220,0.45) 0%, rgba(2,30,80,0.35) 45%, rgba(5,5,5,0) 75%)',
    }}
  >
    <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-5 px-6 pb-12 pt-[110px] sm:px-8 md:px-12 md:pb-16 md:pt-[140px] lg:px-[64px] lg:pb-[72px] lg:pt-[170px]">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/60">
          {crumbs.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {c.href ? (
                <a href={c.href} className="hover:text-white">{c.label}</a>
              ) : (
                <span aria-current="page" className="text-white/90">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>
      {eyebrow && <p className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#5b9dff]">{eyebrow}</p>}
      <h1 className="max-w-[900px] text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px] md:text-[48px] lg:text-[60px]">
        {title}
      </h1>
      {intro && <div className="max-w-[720px] text-[15px] leading-[24px] text-white/70 lg:text-[17px] lg:leading-[28px]">{intro}</div>}
      {children}
    </div>
  </section>
);

export default PageHero;
