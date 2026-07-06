'use client';

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

const MailIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#050505" strokeWidth="1.6" />
    <path d="M4 7l8 6 8-6" stroke="#050505" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.6 10.8c1.5 3 4 5.4 7 7l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.4 21.3 2.7 13.6 2.7 4.2c0-.6.4-1 1-1H7.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
      stroke="#050505"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22Z"
      stroke="#050505"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.5" stroke="#050505" strokeWidth="1.6" />
  </svg>
);

const FIELD_BASE =
  'w-full rounded-xl border border-[#edeef7] bg-white px-3 py-4 text-[14px] text-[#050505] placeholder:text-[#050505]/60 focus:border-[#0087fd] focus:outline-none';

/** Figma node 34:3870 — "We Ship from India to Your Facility Worldwide." */
export const ContactSection: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-12 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-[100px] lg:py-[120px]">

        {/* ── Left: copy + contact details ── */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-1 lg:gap-10">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#006AFF]/20 bg-[#006AFF]/10 px-[13px] py-[7px]">
              <BoltIcon />
              <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">
                Let&apos;s Build Together
              </span>
            </div>
            <h2 id="contact-heading" className="text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] md:text-[44px] lg:text-[56px]">
              We Ship from India to Your Facility Worldwide.
            </h2>
            <p className="text-[15px] leading-[24px] tracking-[-0.31px] text-[#050505]/70 lg:text-[16px] lg:leading-[26px]">
              Send us your technical requirements or material specifications. Join industrial
              leaders sourcing premium specialty copper alloys, engineering materials and
              precision components from India.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-8">
            <div className="flex w-full items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#050505]/10">
                <MailIcon />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2 text-[18px]">
                <p className="text-[#050505]/60">Email</p>
                <p className="break-words text-[#050505]">info@vishwacorporation.com</p>
              </div>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#050505]/10">
                <PhoneIcon />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2 text-[18px]">
                <p className="text-[#050505]/60">Phone</p>
                <p className="break-words text-[#050505]">+91 9619500650</p>
              </div>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#050505]/10">
                <LocationIcon />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <p className="text-[18px] text-[#050505]/60">Address</p>
                <p className="break-words text-[20px] text-[#050505]">72, C.P. Tank Road, Shop No. 1, Mumbai - 400 004</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form card ── */}
        <form className="flex w-full shrink-0 flex-col gap-6 rounded-[24px] bg-[#f7f7f7] p-5 sm:gap-8 sm:p-8 lg:w-[592px]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex flex-1 flex-col gap-3 text-[14px] font-medium text-[#050505]">
              First Name
              <input type="text" placeholder="e.g. John" className={FIELD_BASE} />
            </label>
            <label className="flex flex-1 flex-col gap-3 text-[14px] font-medium text-[#050505]">
              Last Name
              <input type="text" placeholder="e.g. Doe" className={FIELD_BASE} />
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex flex-1 flex-col gap-3 text-[14px] font-medium text-[#050505]">
              Email
              <input type="email" placeholder="e.g. johndoe@gmail.com" className={FIELD_BASE} />
            </label>
            <label className="flex flex-1 flex-col gap-3 text-[14px] font-medium text-[#050505]">
              Phone
              <input type="tel" placeholder="e.g. (+91) 8912 3456 789" className={FIELD_BASE} />
            </label>
          </div>

          <label className="flex flex-col gap-3 text-[14px] font-medium text-[#050505]">
            Message
            <textarea
              placeholder="Write your message here..."
              rows={5}
              className={`${FIELD_BASE} h-[180px] resize-none`}
            />
          </label>

          <button
            type="submit"
            className="flex h-[52px] w-fit items-center gap-2 rounded-full bg-[#006AFF] px-8 py-[14px]"
          >
            <span className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.32px] text-white">
              Send Message
            </span>
            <ArrowRightIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
