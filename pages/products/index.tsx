import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navbar } from '../../components/Navbar';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { PageHero } from '../../components/PageHero';
import { ProductCard } from '../../components/ProductCard';
import { EnquiryForm } from '../../components/EnquiryForm';
import { FooterSection } from '../../sections/FooterSection';
import { PRODUCTS, FAMILIES, familyLabel } from '../../data/products';
import { INDUSTRIES } from '../../data/industries';
import type { FamilyId, IndustryId, Product } from '../../types/catalogue';
import { absoluteUrl } from '../../constants/seo';

const SearchIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Everything a buyer might type: names, aliases, grades, standards, applications. */
const haystack = (p: Product) =>
  [
    p.name,
    p.sourceName,
    ...p.aliases,
    familyLabel(p.family),
    p.kind,
    ...p.grades.flatMap((g) => [g.designation, g.name, ...(g.standards ?? [])]),
    ...p.applications,
    ...p.typicalForms,
  ]
    .join(' | ')
    .toLowerCase();

const INDEX = PRODUCTS.map((p) => ({ product: p, text: haystack(p) }));

const isFamily = (v: unknown): v is FamilyId => FAMILIES.some((f) => f.id === v);
const isIndustry = (v: unknown): v is IndustryId => INDUSTRIES.some((i) => i.id === v);

const chip = (active: boolean) =>
  [
    'whitespace-nowrap rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors duration-200',
    active
      ? 'border-[#006AFF] bg-[#006AFF] text-white'
      : 'border-black/[0.12] bg-white text-[#050505]/80 hover:border-[#006AFF] hover:text-[#006AFF]',
  ].join(' ');

const ProductsPage: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState<FamilyId | ''>('');
  const [industry, setIndustry] = useState<IndustryId | ''>('');
  const [hydrated, setHydrated] = useState(false);

  // Hydrate filters from the URL (e.g. /products/?industry=marine from the Industries panels).
  useEffect(() => {
    if (!router.isReady) return;
    const { q, family: f, industry: i } = router.query;
    if (typeof q === 'string') setQuery(q);
    if (isFamily(f)) setFamily(f);
    if (isIndustry(i)) setIndustry(i);
    setHydrated(true);
  }, [router.isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep the URL shareable as filters change.
  useEffect(() => {
    if (!hydrated) return;
    const next: Record<string, string> = {};
    if (query.trim()) next.q = query.trim();
    if (family) next.family = family;
    if (industry) next.industry = industry;
    router.replace({ pathname: router.pathname, query: next }, undefined, { shallow: true, scroll: false });
  }, [hydrated, query, family, industry]); // eslint-disable-line react-hooks/exhaustive-deps

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return INDEX.filter(({ product: p, text }) =>
      (!family || p.family === family) &&
      (!industry || p.industries.includes(industry)) &&
      terms.every((t) => text.includes(t)),
    ).map((r) => r.product);
  }, [query, family, industry]);

  const filtered = Boolean(query || family || industry);
  const reset = () => {
    setQuery('');
    setFamily('');
    setIndustry('');
  };

  const title = 'Metals & Alloys Catalogue — Copper Alloys, Nickel Alloys, Titanium & More | Vishwa Corporation';
  const description =
    'Browse 18 metals and alloys — oxygen-free and tellurium copper, beryllium copper, cupro-nickel 90/10 and 70/30, Inconel, titanium, aluminium, bronzes, solders, tin, zinc and lead — with grades, standards and applications. Request a quote.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={absoluteUrl('/products/')} />
        <meta property="og:title" content="Metals & Alloys Catalogue | Vishwa Corporation" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={absoluteUrl('/products/')} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
          eyebrow="Metals & Alloys Catalogue"
          title="Find the right grade for your application."
          intro={
            <p>
              Eighteen material families, from oxygen-free copper and beryllium copper to Inconel® and titanium, with the grades,
              standards and applications buyers specify. Tell us your grade, form and quantity and we will confirm sourcing and
              documentation for your enquiry.
            </p>
          }
        >
          <div className="mt-2 flex w-full max-w-[720px] flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <span className="sr-only">Search materials</span>
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#050505]/50"><SearchIcon /></span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by material, grade (e.g. C70600), standard or application"
                className="h-[56px] w-full rounded-full border border-transparent bg-white pl-12 pr-5 text-[15px] text-[#050505] placeholder:text-[#050505]/50 focus:border-[#006AFF] focus:outline-none"
              />
            </label>
            <a href="#enquire" className="flex h-[56px] items-center justify-center rounded-full bg-[#006AFF] px-7 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#0058d6]">
              Request a Quote
            </a>
          </div>
        </PageHero>

        <section aria-label="Catalogue" className="w-full bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-8 md:px-12 md:py-14 lg:px-[64px] lg:py-[72px]">
            {/* Filters */}
            <div className="flex flex-col gap-5">
              <fieldset className="flex flex-col gap-2.5">
                <legend className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.6px] text-[#050505]/60">Material family</legend>
                <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
                  <button type="button" aria-pressed={!family} onClick={() => setFamily('')} className={chip(!family)}>All families</button>
                  {FAMILIES.map((f) => (
                    <button key={f.id} type="button" aria-pressed={family === f.id} onClick={() => setFamily(family === f.id ? '' : f.id)} className={chip(family === f.id)}>
                      {f.label}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="flex flex-col gap-2.5">
                <legend className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.6px] text-[#050505]/60">Industry / application</legend>
                <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
                  <button type="button" aria-pressed={!industry} onClick={() => setIndustry('')} className={chip(!industry)}>All industries</button>
                  {INDUSTRIES.map((i) => (
                    <button key={i.id} type="button" aria-pressed={industry === i.id} onClick={() => setIndustry(industry === i.id ? '' : i.id)} className={chip(industry === i.id)}>
                      {i.name}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] pb-4">
              <p aria-live="polite" className="text-[14px] text-[#050505]/70">
                Showing <strong className="text-[#050505]">{results.length}</strong> of {PRODUCTS.length} materials
              </p>
              {filtered && (
                <button type="button" onClick={reset} className="text-[14px] font-semibold text-[#006AFF] hover:underline">
                  Reset filters
                </button>
              )}
            </div>

            {results.length > 0 ? (
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                {results.map((p) => (
                  <li key={p.slug}><ProductCard product={p} /></li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-start gap-4 rounded-2xl bg-[#f7f7f7] p-8">
                <p className="text-[20px] font-medium text-[#050505]">No materials match these filters.</p>
                <p className="max-w-[560px] text-[15px] leading-[24px] text-[#050505]/70">
                  Try a broader search, or reset the filters. If you are looking for a grade not listed here, send us the specification and we
                  will check whether we can source it or an equivalent.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={reset} className="rounded-full bg-[#006AFF] px-6 py-3 text-[15px] font-semibold text-white">Reset filters</button>
                  <a href="#enquire" className="rounded-full border border-[#006AFF] px-6 py-3 text-[15px] font-semibold text-[#006AFF]">Ask about a grade</a>
                </div>
              </div>
            )}

            <p className="text-[12px] leading-[18px] text-[#050505]/55">
              Technical data summarise published standards and producer datasheets for reference only. Forms shown are typical industry
              forms, not stock. Grade, dimensions, certification and availability are confirmed per enquiry.
            </p>
          </div>
        </section>

        <section id="enquire" aria-labelledby="enquire-heading" className="w-full scroll-mt-24 bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pb-12 sm:px-8 md:px-12 md:pb-16 lg:flex-row lg:gap-16 lg:px-[64px] lg:pb-[120px]">
            <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
              <h2 id="enquire-heading" className="text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] lg:text-[44px]">
                Request a quote or ask about an equivalent grade.
              </h2>
              <p className="text-[15px] leading-[24px] text-[#050505]/70">
                The more precisely you specify grade, form, dimensions and quantity, the faster we can confirm sourcing. Not sure which grade
                fits? Describe the application and choose “Other / not sure”.
              </p>
            </div>
            <div className="flex-1">
              <EnquiryForm source="Products catalogue" id="catalogue-enquiry" />
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default ProductsPage;
