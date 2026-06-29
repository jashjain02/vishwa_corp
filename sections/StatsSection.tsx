import React from 'react';

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: '45', suffix: '+', label: 'Countries Across Global Markets' },
  { value: '18', suffix: 'Y', label: 'Metallurgical Manufacturing Experience' },
  { value: '500', suffix: '+', label: 'Industrial Clients & OEM Partners' },
  { value: '15', suffix: '+', label: 'Specialty Copper Alloys & Grades' },
];

/** Figma node 34:3730 — stats strip (45+ / 18Y / 500+ / ISO). */
export const StatsSection: React.FC = () => {
  return (
    <section aria-label="Key statistics" className="w-full bg-[#F7F7F7]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-12 px-[64px] py-[64px] sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-3">
            <span className="text-[64px] font-medium leading-none tracking-[-0.02em] text-[#0A0A0F]">
              {stat.value}
              {stat.suffix && <span className="text-[#1A5CFF]">{stat.suffix}</span>}
            </span>
            <p className="max-w-[200px] text-[13px] font-medium uppercase tracking-[0.02em] text-[#6B6B6B]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
