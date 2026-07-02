import React from 'react';
import Image from 'next/image';
import precisionParts from '../assets/images/about-precision-parts.jpg';
import cncMachining from '../assets/images/about-cnc-machining.jpg';

const BoltIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2.33 8.17C2.22 8.17 2.11 8.14 2.02 8.08C1.93 8.02 1.85 7.93 1.81 7.84C1.76 7.74 1.74 7.62 1.75 7.51C1.77 7.41 1.81 7.30 1.88 7.22L7.65 1.27C7.70 1.22 7.76 1.18 7.82 1.17C7.89 1.16 7.95 1.17 8.01 1.20C8.07 1.23 8.12 1.28 8.14 1.34C8.17 1.40 8.17 1.47 8.16 1.53L7.04 5.05C7.00 5.13 6.99 5.23 7.00 5.32C7.01 5.42 7.05 5.51 7.10 5.58C7.16 5.66 7.23 5.72 7.31 5.77C7.40 5.81 7.49 5.83 7.58 5.83H11.67C11.78 5.83 11.89 5.86 11.98 5.92C12.07 5.98 12.15 6.07 12.19 6.16C12.24 6.26 12.26 6.38 12.25 6.49C12.24 6.59 12.19 6.70 12.12 6.78L6.35 12.73C6.30 12.78 6.24 12.82 6.18 12.83C6.11 12.84 6.05 12.83 5.99 12.80C5.93 12.77 5.88 12.72 5.86 12.66C5.83 12.60 5.83 12.53 5.85 12.47L6.97 8.95C6.99 8.87 7.00 8.77 6.99 8.68C6.98 8.58 6.95 8.49 6.90 8.42C6.84 8.34 6.77 8.28 6.69 8.23C6.60 8.19 6.51 8.17 6.42 8.17H2.33Z"
      stroke="#006AFF"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Figma node 34:3744 — "Specialty Copper & Copper Alloys, Manufactured with Precision" */
export const AboutSection: React.FC = () => {
  return (
    <section aria-labelledby="about-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:gap-[140px] lg:px-[64px] lg:py-[120px]">

        {/* ── Top row: copy + CTA, photo collage ── */}
        <div className="flex w-full flex-col items-start gap-10 wide:flex-row wide:items-start wide:justify-between">
          <div className="flex w-full flex-col items-start gap-6 wide:w-[584px] wide:shrink-0">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-fit items-center gap-2 rounded-full border border-[#006AFF]/20 bg-[#006AFF]/10 px-[13px] py-[7px]">
                <BoltIcon />
                <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">
                  Who We Are
                </span>
              </div>

              <h2 id="about-heading" className="w-full text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] md:text-[44px] lg:text-[56px]">
                Advanced Engineering Materials, Manufactured with Precision
              </h2>

              <p className="w-full text-[16px] font-medium leading-[1.4] tracking-[-0.4px] text-[#050505] sm:text-[18px] lg:text-[24px] lg:tracking-[-0.96px]">
                We supply critical sectors including Electrical &amp; Power Distribution,
                Aerospace &amp; Defence, Marine, Railways, and Heavy Engineering with specialty
                copper alloys, advanced engineering materials and precision components
                manufactured to ASTM, EN, and JIS material specifications.
              </p>
            </div>

            <a
              href="#contact"
              className="flex h-[52px] items-center gap-3 rounded-full bg-[#006AFF] px-6 py-[12px] lg:h-[56px] lg:px-8 lg:py-[14px]"
            >
              <span className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.36px] text-white lg:text-[18px]">
                Contact Us Now
              </span>
              <ArrowRightIcon />
            </a>
          </div>

          {/* Photo collage — mobile/tablet: simple stacked grid */}
          <div className="grid w-full grid-cols-2 gap-4 wide:hidden">
            <div className="flex flex-col gap-1 rounded-2xl border border-black/[0.12] bg-white p-4">
              <p className="text-[28px] leading-[1.1] text-[#050505]">15+</p>
              <p className="text-[13px] leading-[1.3] text-[#4a5565]">
                Specialty alloys &amp; engineering materials manufactured in-house
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl border border-black/[0.12] bg-white p-4 text-[#050505]">
              <p className="text-[28px] leading-[1.1]">500+</p>
              <p className="text-[13px] leading-[1.3]">
                Industrial clients served across 45+ countries
              </p>
            </div>
            <div className="relative h-44 overflow-hidden rounded-2xl sm:h-56">
              <Image src={precisionParts} alt="Precision-machined copper alloy components" fill className="object-cover" />
            </div>
            <div className="relative h-44 overflow-hidden rounded-2xl sm:h-56">
              <Image src={cncMachining} alt="CNC machining of an engineering-grade component" fill className="object-cover" />
            </div>
          </div>

          {/* Photo collage — desktop: exact original pixel layout */}
          <div className="relative hidden h-[613px] w-[640px] shrink-0 wide:block">
            <div className="absolute left-0 top-[48px] flex w-[307.69px] flex-col gap-2 rounded-[20.5px] border border-black/[0.12] bg-white p-[24.6px]">
              <p className="text-[44px] leading-[49px] text-[#050505]">15+</p>
              <p className="text-[18.5px] leading-[24.6px] text-[#4a5565]">
                Specialty alloys &amp; engineering materials manufactured in-house
              </p>
            </div>
            <div className="absolute left-0 top-[217.44px] h-[395.9px] w-[307.69px] overflow-hidden rounded-[16.4px]">
              <Image src={precisionParts} alt="Precision-machined copper alloy components" fill className="object-cover" />
            </div>
            <div className="absolute left-[332.31px] top-0 h-[398.97px] w-[307.69px] overflow-hidden rounded-[16.4px]">
              <Image src={cncMachining} alt="CNC machining of an engineering-grade component" fill className="object-cover" />
            </div>
            <div className="absolute left-[332.31px] top-[410.97px] flex w-[307.69px] flex-col gap-2 rounded-[20.5px] border border-black/[0.12] bg-white p-[24.6px] text-[#050505]">
              <p className="text-[44px] leading-[49px]">500+</p>
              <p className="text-[18.5px] leading-[24.6px]">
                Industrial clients served across 45+ countries
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom row: two-paragraph statement ── */}
        <div className="flex w-full flex-col items-start gap-6 text-[#050505] lg:flex-row lg:items-start lg:gap-[100px]">
          <p className="w-full text-[16px] font-medium leading-[1.4] tracking-[-0.4px] sm:text-[18px] lg:flex-1 lg:text-[24px] lg:tracking-[-0.96px]">
            Vishwa Corporation manufactures and supplies specialty copper alloys, advanced
            engineering materials and precision components engineered to exacting technical
            specifications for marine, defence, aerospace and industrial applications.
          </p>
          <p className="w-full text-[20px] font-bold leading-[1.4] tracking-[-0.5px] sm:text-[24px] lg:w-[640px] lg:text-[32px] lg:tracking-[-1.28px]">
            Our Mumbai-based facility processes copper, copper alloys and engineering-grade
            materials through casting, extrusion, drawing, CNC machining and precision finishing
            — delivering custom components and assemblies per technical drawings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
