import React from 'react';
import logoMark from '../assets/images/logo-mark.png';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Global Reach', href: '#global-reach' },
  { label: 'Why Choose Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

const GearIcon: React.FC = () => (
  <span className="inline-block shrink-0" style={{ transform: 'translateY(0.05em)' }}>
    <svg
      width="0.9em"
      height="0.9em"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
      className="animate-gear-spin block"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.032.45.083.312.214.641.405.985.57.182.088.277.228.297.348l.178 1.072c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.348a7.507 7.507 0 0 0 .985-.57c.167-.115.335-.126.45-.083l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.598 7.598 0 0 0 0-1.139c-.015-.2.059-.352.153-.43l.841-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.032-.449-.083a7.51 7.51 0 0 0-.985-.57c-.183-.088-.277-.228-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      />
    </svg>
  </span>
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
      <div className="relative z-10 mx-auto flex min-h-0 max-w-[1440px] flex-col justify-center gap-8 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:min-h-[743px] lg:gap-[42px] lg:px-[64px] lg:py-[80px]">

        <div
          className="relative h-[27px] w-[140px] overflow-hidden md:h-[34px] md:w-[175px] lg:h-[40px] lg:w-[205px]"
          aria-label="Vishwa Corporation"
        >
          <span
            className="absolute left-0 top-[-9.56px] block h-[48.49px] w-[145.46px] bg-white md:top-[-11.95px] md:h-[60.61px] md:w-[181.83px] lg:top-[-14px] lg:h-[71px] lg:w-[213px]"
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

        <div className="flex flex-col items-start gap-10 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-12">
          <h2 className="text-[32px] font-semibold uppercase leading-[0.95] tracking-[-0.15px] text-white sm:text-[42px] md:text-[50px] lg:text-[58px]">
            <span className="inline-flex items-center align-middle">
              PRECISI
              <GearIcon />
              N
            </span>
            <br />
            <span className="text-[#006AFF]">ENGINEERED</span>
            <br />
            <span className="block text-[18px] font-normal normal-case sm:text-[24px] md:text-[30px] lg:text-[35px]">for India&apos;s Elite Industries</span>
          </h2>

          <div className="flex flex-col gap-6">
            <p className="w-full max-w-[449px] text-[20px] leading-[1.3] tracking-[-0.2px] text-white sm:text-[26px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.44px]">
              Specialty alloys &amp; precision-engineered components, built for critical applications
            </p>
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-between lg:gap-10">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-[14px] tracking-[-0.15px] text-white hover:text-white/70 lg:text-[16px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="h-px w-full bg-white/15" />

        <p className="text-center text-[15px] tracking-[-0.4px] text-white lg:text-[20px]">
          © 2026 Vishwa Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
