import React from 'react';
import Image from 'next/image';
import heroGlow from '../assets/images/hero-bg-glow.png';
import buttonEllipseGlow from '../assets/icons/button-ellipse-glow.svg';
import clientLogo1 from '../assets/images/client-logo-1.png';
import clientLogo2 from '../assets/images/client-logo-2.png';
import clientLogo3 from '../assets/images/client-logo-3.png';
import clientLogo4 from '../assets/images/client-logo-4.png';
import clientLogo5 from '../assets/images/client-logo-5.png';
import clientLogo6 from '../assets/images/client-logo-6.png';
import clientLogo7 from '../assets/images/client-logo-7.png';
import clientLogo8 from '../assets/images/client-logo-8.png';
import clientLogo9 from '../assets/images/client-logo-9.png';
import clientLogo10 from '../assets/images/client-logo-10.png';

const CLIENT_LOGOS = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
  clientLogo10,
];

const SparkIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M7.95511 5.3353C8.10842 5.02731 8.54783 5.02731 8.70114 5.3353L10.343 8.63373C10.3834 8.7149 10.4492 8.78067 10.5303 8.82107L13.8288 10.4629C14.1368 10.6162 14.1368 11.0556 13.8288 11.2089L10.5303 12.8508C10.4492 12.8912 10.3834 12.957 10.343 13.0381L8.70114 16.3366C8.54783 16.6446 8.10842 16.6446 7.95511 16.3366L6.31326 13.0381C6.27286 12.957 6.20709 12.8912 6.12592 12.8508L2.82749 11.2089C2.5195 11.0556 2.5195 10.6162 2.82749 10.4629L6.12592 8.82107C6.20708 8.78067 6.27286 8.7149 6.31326 8.63373L7.95511 5.3353Z"
      stroke="white"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 3.33594C14.4743 4.35324 14.8312 4.69827 15.8333 5.0026C14.8365 5.3172 14.47 5.68057 14.1667 6.66927C13.8721 5.65622 13.4989 5.29422 12.5 5.0026C13.4917 4.71075 13.8612 4.35187 14.1667 3.33594Z"
      stroke="white"
      strokeWidth="1.66667"
      strokeLinejoin="round"
    />
    <path
      d="M15.8307 14.1641C16.1384 15.1814 16.4953 15.5264 17.4974 15.8307C16.5006 16.1453 16.1341 16.5087 15.8307 17.4974C15.5362 16.4843 15.1629 16.1223 14.1641 15.8307C15.1557 15.5389 15.5252 15.18 15.8307 14.1641Z"
      stroke="white"
      strokeWidth="1.66667"
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

/** Figma node 34:405 — Hero Section. */
export const HeroSection: React.FC = () => {
  return (
    <section
      aria-label="Hero — Precision Copper & Specialty Alloys for Critical Industries"
      className="relative w-full overflow-hidden bg-black"
    >
      {/* ── Glowing sphere background image ── */}
      <div className="pointer-events-none absolute left-1/2 top-[-93px] size-[1380px] -translate-x-1/2">
        <Image
          src={heroGlow}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ── Bottom fade to black ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[560px]"
        style={{
          background:
            'linear-gradient(to top, #010000 74.334%, rgba(1,0,0,0) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-[141px] pt-[324px] pb-[97px]">

        <div className="flex w-full max-w-[616px] flex-col items-center gap-4">
          {/* Badge */}
          <div className="flex items-center justify-center gap-[6px] rounded-[50px] bg-white/10 px-3 py-[6px]">
            <SparkIcon />
            <p className="whitespace-nowrap text-center text-[14px] font-normal uppercase text-white">
              Specialty Copper &amp; Alloy Manufacturer
            </p>
          </div>

          {/* Headline + subtext */}
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="w-[617px] max-w-full text-[70px] font-medium capitalize leading-[1.1] tracking-[-2.1px] text-white">
                Precision Copper &amp; Specialty Alloys, Engineered for Critical Industries.
              </h1>
              <p className="w-[541px] max-w-full text-[16px] font-normal leading-[24px] text-white/70">
                We manufacture and supply oxygen-free copper, beryllium copper, chromium copper
                and other specialty alloys engineered for electrical, aerospace, defence and
                high-performance industrial applications across 45+ countries.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="relative flex items-center justify-center gap-[10px] overflow-visible rounded-[100px] border border-white bg-[#006aff] px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <span className="absolute bottom-[-13px] left-1/2 h-6 w-[120px] -translate-x-1/2">
                <Image src={buttonEllipseGlow} alt="" fill />
              </span>
              <span className="whitespace-nowrap text-[18px] font-semibold tracking-[-0.36px] text-white">
                Contact Us Now
              </span>
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

        {/* Trusted-by + logo strip */}
        <div className="flex flex-col items-center gap-10">
          <p className="text-center text-[16px] leading-[31.2px] tracking-[-0.648px] text-white/[0.64]">
            Trusted by India&apos;s Leading Industrial OEMs
          </p>

          <div className="relative w-[1159px] max-w-full overflow-hidden">
            <div className="flex items-center justify-center gap-[44.5px]">
              {CLIENT_LOGOS.map((src, i) => (
                <div key={i} className="relative size-[72px] shrink-0 opacity-70 mix-blend-luminosity">
                  <Image src={src} alt="" fill className="object-contain" />
                </div>
              ))}
            </div>
            {/* Edge fade-to-black */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[102px] bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[102px] bg-gradient-to-l from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
