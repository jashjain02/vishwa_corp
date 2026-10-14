import React from 'react';
import Image from 'next/image';
import type { Product } from '../types/catalogue';
import { familyLabel } from '../data/products';

const ArrowRightIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Catalogue card — consistent 4:3 image, family, benefit, grades and two actions. */
export const ProductCard: React.FC<{ product: Product }> = ({ product: p }) => {
  const href = `/products/${p.slug}/`;
  const grades = p.grades.map((g) => g.designation.split(' (')[0]).slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-shadow duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      <a href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[4/3] overflow-hidden bg-[#eceef2]">
        <Image
          src={p.images[0].src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
        {p.specialised && (
          <span className="absolute left-3 top-3 rounded-full bg-[#050505]/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white backdrop-blur-sm">
            Specialised grade
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#006AFF]">
          {familyLabel(p.family)} · {p.kind}
        </p>
        <h3 className="text-[19px] font-medium leading-[1.25] text-[#050505]">
          <a href={href} className="hover:text-[#006AFF]">{p.name}</a>
        </h3>
        <p className="text-[14px] leading-[22px] text-[#050505]/70">{p.summary}</p>

        {grades.length > 0 && (
          <ul aria-label="Example grades" className="flex flex-wrap gap-1.5">
            {grades.map((g) => (
              <li key={g} className="rounded-md border border-black/[0.08] bg-[#f7f7f7] px-2 py-0.5 text-[12px] font-medium text-[#050505]/80">
                {g}
              </li>
            ))}
          </ul>
        )}

        <p className="text-[13px] leading-[20px] text-[#4a5565]">
          <span className="font-semibold text-[#050505]">Common uses: </span>
          {p.applications.slice(0, 2).join('; ')}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
          <a href={href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#006AFF] hover:underline">
            View details <ArrowRightIcon />
          </a>
          <a
            href={`${href}#enquire`}
            className="rounded-full border border-[#006AFF] px-3.5 py-1.5 text-[13px] font-semibold text-[#006AFF] transition-colors duration-200 hover:bg-[#006AFF] hover:text-white"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
