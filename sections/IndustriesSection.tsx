'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { INDUSTRIES, type IndustryIcon } from '../data/industries';

// ── White outline industry icons (5:4, matching the reference's 80×64 slot) ──
const ICON_PATHS: Record<IndustryIcon, React.ReactNode> = {
  ship: (
    <>
      <path d="M40 6v10M30 16h20v12H30z" />
      <path d="M16 28h48l-6 22H22z" />
      <path d="M40 28v22" />
      <path d="M8 58c5 0 5-3 10.7-3s5.6 3 10.6 3 5.6-3 10.7-3 5.6 3 10.7 3 5.6-3 10.6-3S68 58 72 58" />
    </>
  ),
  rocket: (
    <>
      <path d="M40 4c9 8 12 20 12 32v14H28V36c0-12 3-24 12-32z" />
      <circle cx="40" cy="26" r="5" />
      <path d="M28 38l-9 9v8l9-5M52 38l9 9v8l-9-5" />
      <path d="M34 50l-2 10M40 50v12M46 50l2 10" />
    </>
  ),
  pylon: (
    <>
      <path d="M40 4L26 60M40 4l14 56" />
      <path d="M18 16h44M14 28h52" />
      <path d="M33 16l14 12M47 16L33 28M30 34l20 14M50 34L30 48M28 54h24" />
      <path d="M18 16v5M62 16v5M14 28v5M66 28v5" />
    </>
  ),
  gear: (
    <>
      <circle cx="40" cy="32" r="9" />
      <path d="M40 8v8M40 48v8M16 32h8M56 32h8M23 15l6 6M51 43l6 6M57 15l-6 6M29 43l-6 6" />
      <circle cx="40" cy="32" r="18" />
    </>
  ),
  chip: (
    <>
      <rect x="22" y="14" width="36" height="36" rx="3" />
      <rect x="31" y="23" width="18" height="18" rx="1" />
      <path d="M30 8v6M40 8v6M50 8v6M30 50v6M40 50v6M50 50v6M16 22h6M16 32h6M16 42h6M58 22h6M58 32h6M58 42h6" />
    </>
  ),
};

const IndustryGlyph: React.FC<{ icon: IndustryIcon }> = ({ icon }) => (
  <svg viewBox="0 0 80 64" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-auto w-10 min-[501px]:w-[50px] min-[1281px]:w-20">
    {ICON_PATHS[icon]}
  </svg>
);

const ArrowLongIcon: React.FC = () => (
  <svg width="36" height="12" viewBox="0 0 36 12" fill="none" aria-hidden="true">
    <path d="M0 6h34M29 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Slides visible per breakpoint — mirrors the reference (Swiper 4 max-width breakpoints). */
function slidesForWidth(w: number) {
  if (w <= 480) return 1;
  if (w <= 768) return 2;
  if (w <= 1000) return 3;
  return 4;
}

const AUTOPLAY_MS = 3000;
const COUNT = INDUSTRIES.length;
// Three copies give seamless looping in both directions.
const LOOPED = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

/**
 * "Industries We Serve" — portrait photo panels in a looping, auto-advancing carousel.
 * Each panel links to the catalogue pre-filtered by that industry.
 */
export const IndustriesSection: React.FC = () => {
  const [perView, setPerView] = useState(4);
  const [pos, setPos] = useState(COUNT); // index into LOOPED; middle copy is "real"
  const [animate, setAnimate] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dragStart = useRef<number | null>(null);
  const dragged = useRef(false);

  useEffect(() => {
    const onResize = () => setPerView(slidesForWidth(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMq = () => setReducedMotion(mq.matches);
    onMq();
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('resize', onResize);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  const go = useCallback((next: number) => {
    setAnimate(true);
    setPos(next);
  }, []);

  // Autoplay: stops permanently after user interaction (like Swiper's disableOnInteraction),
  // pauses on hover/focus, and never runs when reduced motion is requested.
  useEffect(() => {
    if (!autoplay || paused || reducedMotion) return;
    const t = window.setInterval(() => {
      if (document.visibilityState === 'visible') go(pos + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [autoplay, paused, reducedMotion, pos, go]);

  // After animating into a cloned copy, jump back to the matching real slide without animation.
  const onTransitionEnd = () => {
    if (pos >= COUNT * 2 || pos < COUNT) {
      setAnimate(false);
      setPos(((pos % COUNT) + COUNT) % COUNT + COUNT);
    }
  };

  const userGo = (next: number) => {
    setAutoplay(false);
    go(next);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    dragged.current = false;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 40) {
      dragged.current = true;
      userGo(pos + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <section id="industries" aria-labelledby="industries-heading" className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 pt-12 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 md:pt-16 lg:px-[64px] lg:pt-[120px]">
        <h2 id="industries-heading" className="text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] md:text-[44px] lg:text-[56px]">
          Industries We Serve
        </h2>

        {/* CTA — accent block expands to fill on hover (reference interaction, in brand blue) */}
        <a
          href="/products/"
          className="group relative z-0 inline-flex h-[52px] items-center gap-4 rounded-[20px_5px_20px_5px] bg-[#006AFF] px-5 text-[16px] font-medium text-white md:h-[63px] md:rounded-none md:bg-transparent md:pl-5 md:pr-14 md:text-[20px] md:text-[#050505]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 -z-10 hidden w-[63px] rounded-[25px_5px_5px_5px] bg-[#006AFF] transition-all duration-300 ease-out group-hover:w-full group-hover:rounded-[25px_5px_25px_5px] group-focus-visible:w-full md:block"
          />
          <span className="transition-colors duration-300 md:group-hover:text-white md:group-focus-visible:text-white">Find Your Material</span>
          <span className="transition-transform duration-300 md:absolute md:right-[-22px] md:text-[#050505] md:group-hover:translate-x-1">
            <ArrowLongIcon />
          </span>
        </a>
      </div>

      {/* ── Carousel ── */}
      <div
        className="relative mx-auto mt-8 w-full max-w-[1920px] md:mt-12 lg:mt-[72px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Industries"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="flex touch-pan-y select-none"
          style={{
            transform: `translateX(-${(pos * 100) / perView}%)`,
            transition: animate && !reducedMotion ? 'transform 300ms ease' : 'none',
          }}
          onTransitionEnd={onTransitionEnd}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (dragStart.current = null)}
        >
          {LOOPED.map((industry, i) => {
            const isClone = i < COUNT || i >= COUNT * 2;
            return (
              <a
                key={`${industry.id}-${i}`}
                href={`/products/?industry=${industry.id}`}
                aria-hidden={isClone || undefined}
                tabIndex={isClone ? -1 : undefined}
                aria-label={isClone ? undefined : `${industry.name} — view materials`}
                onClick={(e) => dragged.current && e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="group relative block shrink-0 overflow-hidden"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="relative aspect-[119/208] w-full">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1000px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                    style={{ objectPosition: industry.focus }}
                    draggable={false}
                  />
                  {/* Contrast scrims for top title and bottom label */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/60" />
                </div>

                <div className="absolute left-4 top-4 flex flex-col min-[501px]:left-[30px] min-[501px]:top-[30px] min-[1281px]:left-[50px] min-[1281px]:top-[50px]">
                  <IndustryGlyph icon={industry.icon} />
                  <p className="mt-4 pr-4 text-[18px] font-medium leading-[1.2] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] min-[661px]:text-[20px] min-[1281px]:mt-[35px] min-[1281px]:text-[24px]">
                    {industry.name}
                  </p>
                  <p className="mt-2 max-w-[260px] pr-4 text-[13px] leading-[1.45] text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] lg:text-[14px]">
                    {industry.blurb}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-10 left-4 rotate-180 text-[20px] text-white transition-[bottom] duration-300 ease-out [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [writing-mode:vertical-rl] group-hover:bottom-[50px] min-[1281px]:left-8 min-[1281px]:text-[24px]"
                >
                  {industry.shortName}——
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
