import React from 'react';
import Image from 'next/image';
import portImage from '../assets/images/global-reach-port.jpg';

const ArrowDiagonalIcon: React.FC = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden="true">
    <path d="M6 6L19 19M19 19V8M19 19H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Figma node 34:3860 — "Global Reach. Local Reliability." */
export const GlobalReachSection: React.FC = () => {
  return (
    <section aria-labelledby="global-reach-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 pt-12 sm:pt-16 md:pt-20 lg:gap-[40px] lg:pt-[100px]">
        <div className="flex w-full flex-col items-start gap-6 px-6 sm:px-8 md:px-12 lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:px-[65px]">
          <h2 id="global-reach-heading" className="w-full text-[34px] font-medium leading-[1.1] text-[#050505] sm:text-[48px] md:text-[64px] lg:w-[774px] lg:text-[86px]">
            Global Reach. Local Reliability.
          </h2>

          <div className="flex w-full flex-col items-start gap-5 lg:w-[398px] lg:gap-[38px] lg:pt-[5px]">
            <p className="text-[16px] leading-[24px] tracking-[-0.31px] text-[#050505]/70 sm:text-[18px] lg:text-[20px] lg:leading-[26px]">
              We&apos;re seeking manufacturing partners, distributors, and direct customers who
              value precision, reliability, and consistent quality across copper alloys and
              advanced engineering materials.
            </p>
            <button
              aria-label="Learn more about global reach"
              className="flex size-14 items-center justify-center bg-[#006AFF] sm:size-16 lg:size-[80px]"
            >
              <ArrowDiagonalIcon />
            </button>
          </div>
        </div>

        <div className="relative h-[200px] w-full max-w-[1164px] self-center overflow-hidden sm:h-[320px] md:h-[420px] lg:h-[574px]">
          <Image src={portImage} alt="Aerial view of a busy container shipping port used for exporting engineering materials and precision components" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
