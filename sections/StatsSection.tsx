import React from 'react';

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: '45', suffix: '+', label: 'Countries Across Global Markets' },
  { value: '18', suffix: 'Y', label: 'Metallurgical & Precision Manufacturing Experience' },
  { value: '500', suffix: '+', label: 'Industrial Clients & OEM Partners' },
  { value: '15', suffix: '+', label: 'Engineering Materials & Alloy Grades Supplied' },
];

/** Figma node 34:3730 — stats strip (45+ / 18Y / 500+ / ISO). */
export const StatsSection: React.FC = () => {
  return (
    <section aria-label="Key statistics" className="w-full bg-[#F7F7F7]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 sm:grid-cols-4 sm:px-8 md:px-12 md:py-12 lg:gap-y-12 lg:px-[64px] lg:py-[64px]">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 lg:gap-3">
            <span className="text-[32px] font-medium leading-none tracking-[-0.02em] text-[#0A0A0F] sm:text-[44px] lg:text-[64px]">
              {stat.value}
              {stat.suffix && <span className="text-[#1A5CFF]">{stat.suffix}</span>}
            </span>
            <p className="max-w-[200px] text-[11px] font-medium uppercase tracking-[0.02em] text-[#6B6B6B] sm:text-[12px] lg:text-[13px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
