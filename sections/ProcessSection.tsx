import React from 'react';

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

interface Step {
  index: string;
  title: string;
  description: string;
  active?: boolean;
  hasConnector: boolean;
}

const STEPS: Step[] = [
  {
    index: '01',
    title: 'Inquiry & Consultation',
    description: 'Share your technical requirements, material grade and dimensional specifications',
    hasConnector: true,
  },
  {
    index: '02',
    title: 'Material Selection',
    description: 'We recommend the optimal copper alloy or engineering material for your application',
    hasConnector: true,
  },
  {
    index: '03',
    title: 'Manufacturing',
    description: 'Precision casting, extrusion, drawing, CNC machining and fabrication of copper alloys and engineering materials',
    active: true,
    hasConnector: true,
  },
  {
    index: '04',
    title: 'Quality Testing',
    description: 'Conductivity, composition and dimensional inspection against material specifications',
    hasConnector: true,
  },
  {
    index: '05',
    title: 'Delivery',
    description: 'Secure packaging and timely dispatch to your location',
    hasConnector: false,
  },
];

/** Figma node 34:3783 — "How We Deliver Excellence" process section */
export const ProcessSection: React.FC = () => {
  return (
    <section aria-labelledby="process-heading" className="w-full" style={{ background: '#F7FBFD' }}>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:gap-[64px] lg:px-[64px] lg:py-[100px]">

        {/* ── Header: badge + heading + subtitle ── */}
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-fit items-center gap-2 rounded-full border border-[#006AFF]/20 bg-[#006AFF]/10 px-[13px] py-[7px]">
            <BoltIcon />
            <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">
              Our Process
            </span>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4">
            <h2
              id="process-heading"
              className="text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] md:text-[44px] lg:text-[56px]"
            >
              How We Deliver Excellence
            </h2>
            <p
              className="text-[18px] font-normal leading-[1.3] tracking-[-0.2px] text-[#050505] sm:text-[24px] lg:text-[32px] lg:leading-[38px] lg:tracking-[-0.44px]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              A streamlined approach from inquiry to delivery
            </p>
          </div>
        </div>

        {/* ── Step cards ── */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-start lg:gap-6">
          {STEPS.map((step) => (
            <div key={step.index} className="relative lg:flex-1">
              {/* Gradient connector line (extends right, overlaps into gap + next card) — desktop row layout only */}
              {step.hasConnector && (
                <div
                  className="pointer-events-none absolute top-[48px] z-10 hidden h-[2px] lg:block"
                  style={{
                    left: '75%',
                    width: '50%',
                    background: 'linear-gradient(to right, #0087FD, #E5E7EB)',
                  }}
                />
              )}

              {/* Card */}
              <div
                className="relative flex h-auto min-h-[180px] flex-col gap-4 rounded-[16px] border border-[#E5E7EB] p-5 lg:h-[275px] lg:gap-6 lg:p-6"
                style={
                  step.active
                    ? {
                        background: 'linear-gradient(130.5deg, #006AFF 0%, #2CCCEB 100%)',
                        boxShadow:
                          '0px 9px 9.5px rgba(0,0,0,0.10), 0px 35px 17.5px rgba(0,0,0,0.09), 0px 79px 24px rgba(0,0,0,0.05), 0px 141px 28px rgba(0,0,0,0.01)',
                      }
                    : { background: '#FFFFFF' }
                }
              >
                {/* Ghost step number */}
                <span
                  className="text-[40px] font-normal leading-[1] tracking-[0.26px] lg:text-[60px] lg:leading-[60px]"
                  style={{ color: '#F3F4F6' }}
                >
                  {step.index}
                </span>

                {/* Title + description */}
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[18px] font-normal leading-[1.3] tracking-[0.07px] lg:text-[24px] lg:leading-[32px]"
                    style={{ color: step.active ? '#FFFFFF' : '#050505' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-[13px] font-normal leading-[1.5] tracking-[-0.15px] lg:text-[14px] lg:leading-[22.75px]"
                    style={{ color: step.active ? 'rgba(255,255,255,0.85)' : '#4A5565' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Centered CTA ── */}
        <a
          href="#contact"
          className="flex h-[52px] items-center gap-2 rounded-full bg-[#006AFF] px-8 py-[14px]"
        >
          <span
            className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.32px] text-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Contact Us Now
          </span>
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
};

export default ProcessSection;
