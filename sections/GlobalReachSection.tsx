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
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-[40px] pt-[100px]">
        <div className="flex w-full items-start justify-between px-[65px]">
          <h2 id="global-reach-heading" className="w-[774px] text-[86px] font-medium leading-[1.1] text-[#050505]">
            Global Reach. Local Reliability.
          </h2>

          <div className="flex w-[398px] flex-col items-start gap-[38px] pt-[5px]">
            <p className="text-[20px] leading-[26px] tracking-[-0.31px] text-[#050505]/70">
              We&apos;re seeking manufacturing partners, distributors, and direct customers who
              value precision, reliability, and consistent copper alloy quality.
            </p>
            <button
              aria-label="Learn more about global reach"
              className="flex size-[80px] items-center justify-center bg-[#006AFF]"
            >
              <ArrowDiagonalIcon />
            </button>
          </div>
        </div>

        <div className="relative h-[574px] w-full max-w-[1164px] self-center overflow-hidden">
          <Image src={portImage} alt="Aerial view of a busy container shipping port used for copper exports" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
