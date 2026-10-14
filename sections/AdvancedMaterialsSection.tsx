import React from 'react';
import Image from 'next/image';
import { PRODUCT_BY_SLUG } from '../data/products';

const SparkIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M7.96 5.34c.15-.31.59-.31.74 0l1.64 3.3c.04.08.11.15.19.19l3.3 1.64c.31.15.31.59 0 .75l-3.3 1.64a.42.42 0 0 0-.19.19l-1.64 3.3c-.15.3-.59.3-.74 0l-1.64-3.3a.42.42 0 0 0-.19-.19l-3.3-1.64c-.31-.16-.31-.6 0-.75l3.3-1.64a.42.42 0 0 0 .19-.19l1.64-3.3Z"
      stroke="#006AFF"
      strokeWidth="1.67"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon: React.FC<{ color?: string }> = ({ color = 'white' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M12 5L19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Feature {
  slug: string;
  grade: string;
  metric: string;
  metricLabel: string;
}

/** Each metric is grade-specific and cited in data/products.ts → data/sources.ts. */
const FEATURES: Feature[] = [
  { slug: 'copper', grade: 'C10100 · Oxygen-Free Electronic', metric: '≥ 101% IACS', metricLabel: 'minimum conductivity, annealed' },
  { slug: 'tellurium-copper', grade: 'C14500 · Tellurium Copper', metric: '85 vs 20', metricLabel: 'machinability rating vs oxygen-free copper' },
  { slug: 'beryllium-copper', grade: 'C17200 · Copper Beryllium', metric: '1.80–2.00% Be', metricLabel: 'age-hardenable to very high strength' },
  { slug: 'cupro-nickel-90-10', grade: 'C70600 · Copper-Nickel 90/10', metric: '9–11% Ni', metricLabel: 'with 1.0–1.8% Fe for seawater service' },
  { slug: 'inconel', grade: 'Alloy 625 · UNS N06625', metric: '20–23% Cr · 8–10% Mo', metricLabel: 'for severe corrosive environments' },
  { slug: 'titanium', grade: 'Grade 2 · UNS R50400', metric: '10–80 °C', metricLabel: 'range in which it is virtually immune to wet chlorine' },
];

/** "Advanced Metals. Demanding Applications." — featured specialised grades. */
export const AdvancedMaterialsSection: React.FC = () => {
  return (
    <section id="products" aria-labelledby="advanced-heading" className="w-full bg-[#f7f7f7]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:gap-14 lg:px-[64px] lg:py-[120px]">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[720px] flex-col items-start gap-4">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#006AFF]/20 bg-[#006AFF]/10 px-[13px] py-[7px]">
              <SparkIcon />
              <span className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">Specialised Grades</span>
            </div>
            <h2 id="advanced-heading" className="text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] md:text-[44px] lg:text-[56px]">
              Advanced Metals. Demanding Applications.
            </h2>
            <p className="text-[15px] leading-[24px] tracking-[-0.31px] text-[#050505]/70 lg:text-[16px] lg:leading-[26px]">
              When a general-purpose metal is not enough, the grade matters. These materials are chosen for a specific
              property — conductivity, machinability, strength or corrosion resistance — documented against the relevant
              standard or producer data.
            </p>
          </div>
          <a
            href="/products/"
            className="flex h-[52px] shrink-0 items-center gap-3 rounded-full bg-[#006AFF] px-6 transition-colors duration-200 hover:bg-[#0058d6] lg:h-[56px] lg:px-8"
          >
            <span className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.36px] text-white">View All 18 Materials</span>
            <ArrowRightIcon />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((f) => {
            const p = PRODUCT_BY_SLUG[f.slug];
            return (
              <li key={f.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                <a href={`/products/${p.slug}/`} className="relative block aspect-[16/10] overflow-hidden bg-[#eceef2]" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.images[0].src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </a>
                <div className="flex flex-1 flex-col gap-4 p-5 lg:p-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">{f.grade}</p>
                    <h3 className="text-[20px] font-medium leading-[1.2] text-[#050505] lg:text-[22px]">
                      <a href={`/products/${p.slug}/`} className="hover:text-[#006AFF]">{p.name}</a>
                    </h3>
                  </div>
                  <div className="border-l-2 border-[#006AFF] pl-3">
                    <p className="text-[22px] font-medium leading-[1.15] tracking-[-0.02em] text-[#050505]">{f.metric}</p>
                    <p className="text-[13px] leading-[1.4] text-[#4a5565]">{f.metricLabel}</p>
                  </div>
                  <p className="text-[14px] leading-[22px] text-[#050505]/70">{p.keyBenefit}.</p>
                  <p className="text-[13px] leading-[20px] text-[#4a5565]">
                    <span className="font-semibold text-[#050505]">Used for: </span>
                    {p.applications.slice(0, 2).join('; ')}.
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                    <a href={`/products/${p.slug}/`} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#006AFF] hover:underline">
                      View grades &amp; specs <ArrowRightIcon color="#006AFF" />
                    </a>
                    <a href={`/products/${p.slug}/#enquire`} className="text-[14px] font-medium text-[#050505]/70 hover:text-[#050505] hover:underline">
                      Discuss your requirements
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="text-[12px] leading-[18px] text-[#050505]/55">
          Figures are grade-specific values from the Copper Development Association, Special Metals and other cited sources. They
          are not a guarantee of any specific lot. Availability of each grade and form is confirmed per enquiry.
        </p>
      </div>
    </section>
  );
};

export default AdvancedMaterialsSection;
