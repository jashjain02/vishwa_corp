import React from 'react';
import logoMark from '../assets/images/logo-mark.png';

const FOOTER_LINKS = ['About', 'Global Reach', 'Why Choose Us', 'Contact'] as const;

const GearIcon: React.FC = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="white" aria-hidden="true" style={{ transform: 'rotate(-1deg)' }}>
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9.4 5.5-1.6.9c.05.5.05 1 0 1.5l1.6.9c.3.2.4.6.2.9l-1.5 2.6c-.2.3-.6.4-.9.3l-1.7-.7c-.4.3-.9.6-1.4.8l-.3 1.8c-.05.4-.4.6-.7.6h-3c-.4 0-.7-.2-.7-.6l-.3-1.8c-.5-.2-1-.5-1.4-.8l-1.7.7c-.3.1-.7 0-.9-.3l-1.5-2.6c-.2-.3-.1-.7.2-.9l1.6-.9a6.6 6.6 0 0 1 0-1.5l-1.6-.9c-.3-.2-.4-.6-.2-.9l1.5-2.6c.2-.3.6-.4.9-.3l1.7.7c.4-.3.9-.6 1.4-.8l.3-1.8c.05-.4.4-.6.7-.6h3c.4 0 .7.2.7.6l.3 1.8c.5.2 1 .5 1.4.8l1.7-.7c.3-.1.7 0 .9.3l1.5 2.6c.2.3.1.7-.2.9Z" />
  </svg>
);

/** Figma node 34:3932 — footer with "PRECISI⚙N ENGINEERED for India's Elite Industries" */
export const FooterSection: React.FC = () => {
  return (
    <footer
      className="relative w-full overflow-hidden bg-[#050505]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,90,220,0.55) 0%, rgba(2,30,80,0.4) 45%, rgba(5,5,5,0) 75%)',
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-[743px] max-w-[1440px] flex-col justify-center gap-[42px] px-[64px] py-[80px]">

        <div
          className="relative h-[40px] w-[205px] overflow-hidden"
          aria-label="Vishwa Corporation"
        >
          <span
            className="absolute left-0 top-[-14px] block h-[71px] w-[213px] bg-white"
            style={{
              WebkitMaskImage: `url(${logoMark.src})`,
              maskImage: `url(${logoMark.src})`,
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          />
        </div>

        <div className="flex flex-wrap items-end justify-between gap-12">
          <h2 className="text-[58px] font-semibold uppercase leading-[0.95] tracking-[-0.15px] text-white">
            <span className="inline-flex items-center align-middle">
              PRECISI
              <GearIcon />
              N
            </span>
            <br />
            <span className="text-[#006AFF]">ENGINEERED</span>
            <br />
            <span className="block text-[35px] font-normal normal-case">for India&apos;s Elite Industries</span>
          </h2>

          <div className="flex flex-col gap-6">
            <p className="w-[449px] max-w-full text-[32px] leading-[38px] tracking-[-0.44px] text-white">
              Specialty copper &amp; copper alloys, engineered for critical applications
            </p>
            <nav aria-label="Footer navigation" className="flex items-center justify-between gap-10">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="whitespace-nowrap text-[16px] tracking-[-0.15px] text-white hover:text-white/70"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />

        <p className="text-center text-[20px] tracking-[-0.4px] text-white">
          © 2026 Vishwa Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
