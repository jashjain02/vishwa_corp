import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { Navbar } from '../../components/Navbar';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { PageHero } from '../../components/PageHero';
import { ProductCard } from '../../components/ProductCard';
import { EnquiryForm } from '../../components/EnquiryForm';
import { FooterSection } from '../../sections/FooterSection';
import { PRODUCTS, PRODUCT_BY_SLUG, familyLabel } from '../../data/products';
import { INDUSTRY_BY_ID } from '../../data/industries';
import { SOURCE_BY_ID } from '../../data/sources';
import type { Product, VerificationStatus } from '../../types/catalogue';
import { absoluteUrl } from '../../constants/seo';

interface Props {
  slug: string;
}

const DOCUMENTS = [
  { name: 'Mill test certificate', note: 'e.g. EN 10204 type 3.1 inspection certificate, where the producing mill issues one' },
  { name: 'Chemical analysis report', note: 'heat / lot composition against the specified grade' },
  { name: 'Certificate of conformity', note: 'confirming the material meets the ordered standard' },
  { name: 'Heat / lot traceability', note: 'heat numbers marked on material and documents' },
  { name: 'Dimensional inspection report', note: 'for cut-to-size or machined material' },
  { name: 'Safety Data Sheet (SDS)', note: 'especially for lead, beryllium-, cadmium- or lead-bearing products' },
];

const STATUS_LABEL: Record<VerificationStatus, { text: string; cls: string }> = {
  verified: { text: 'Verified source', cls: 'bg-[#e7f6ec] text-[#11733a]' },
  secondary: { text: 'Secondary source', cls: 'bg-[#fff4e0] text-[#8a5a00]' },
  confirm: { text: 'Confirm with our team', cls: 'bg-[#f2f2f2] text-[#555]' },
};

const CheckIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-[2px] shrink-0">
    <circle cx="12" cy="12" r="10" fill="#006AFF" fillOpacity="0.1" />
    <path d="M7.5 12.5l3 3 6-7" stroke="#006AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SectionHeading: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="text-[22px] font-medium leading-[1.2] text-[#050505] sm:text-[26px] lg:text-[30px]">{children}</h2>
);

const Gallery: React.FC<{ product: Product }> = ({ product }) => {
  const [active, setActive] = useState(0);
  const img = product.images[active];
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#eceef2]">
        <Image src={img.src} alt={img.alt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
      </div>
      {product.images.length > 1 && (
        <div className="flex gap-3" role="group" aria-label="Product images">
          {product.images.map((im, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}: ${im.alt}`}
              aria-pressed={i === active}
              className={[
                'relative h-16 w-20 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-28',
                i === active ? 'border-[#006AFF]' : 'border-transparent opacity-70 hover:opacity-100',
              ].join(' ')}
            >
              <Image src={im.src} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductPage: React.FC<Props> = ({ slug }) => {
  const p = PRODUCT_BY_SLUG[slug];
  const related = p.related.map((s) => PRODUCT_BY_SLUG[s]).filter(Boolean);
  const sources = p.sourceIds.map((id) => SOURCE_BY_ID[id]).filter(Boolean);
  const url = absoluteUrl(`/products/${p.slug}/`);
  const description = `${p.summary} Grades, standards, applications and procurement checklist for ${p.name}. Request a quote from Vishwa Corporation.`.slice(0, 300);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Products', item: absoluteUrl('/products/') },
        { '@type': 'ListItem', position: 3, name: p.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      <Head>
        <title>{`${p.name} — Grades, Standards & Applications | Vishwa Corporation`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${p.name} | Vishwa Corporation`} />
        <meta property="og:description" content={p.summary} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <Navbar />
      <main>
        <PageHero
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products/' }, { label: p.name }]}
          eyebrow={`${familyLabel(p.family)} · ${p.kind}`}
          title={p.name}
          intro={<p>{p.summary}</p>}
        >
          <div className="mt-2 flex flex-wrap gap-3">
            <a href="#enquire" className="flex h-[52px] items-center rounded-full bg-[#006AFF] px-7 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-[#0058d6]">
              Request a Quote
            </a>
            <a href="#grades" className="flex h-[52px] items-center rounded-full border border-white/40 px-7 text-[16px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10">
              Grades &amp; standards
            </a>
          </div>
        </PageHero>

        <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-10 sm:px-8 md:px-12 md:py-14 lg:flex-row lg:gap-16 lg:px-[64px] lg:py-[72px]">
          {/* ── Main column ── */}
          <article className="flex min-w-0 flex-1 flex-col gap-12 lg:gap-16">
            <Gallery product={p} />

            {p.editorialNote && (
              <aside className="rounded-xl border border-[#006AFF]/20 bg-[#006AFF]/[0.05] p-4 text-[14px] leading-[22px] text-[#050505]/85">
                <span className="font-semibold text-[#050505]">Name note: </span>{p.editorialNote}
              </aside>
            )}

            <section aria-labelledby="overview" className="flex flex-col gap-4">
              <SectionHeading id="overview">Technical overview</SectionHeading>
              {p.overview.map((para, i) => (
                <p key={i} className="text-[16px] leading-[27px] text-[#050505]/80">{para}</p>
              ))}
            </section>

            <section aria-labelledby="grades" className="flex scroll-mt-24 flex-col gap-5">
              <SectionHeading id="grades">Grades &amp; standards</SectionHeading>
              <p className="text-[14px] leading-[22px] text-[#050505]/65">
                Grades are distinct materials — properties and uses below apply to the named grade only.
              </p>
              <div className="flex flex-col gap-4">
                {p.grades.map((g) => (
                  <div key={g.designation} className="flex flex-col gap-3 rounded-2xl border border-black/[0.08] p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-[18px] font-semibold text-[#050505]">{g.designation}</h3>
                        <p className="text-[14px] text-[#050505]/65">{g.name}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.4px] ${STATUS_LABEL[g.status].cls}`}>
                        {STATUS_LABEL[g.status].text}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[22px] text-[#050505]/85">
                      <span className="font-semibold">Composition: </span>{g.composition}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {g.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-[14px] leading-[22px] text-[#050505]/80"><CheckIcon />{h}</li>
                      ))}
                    </ul>
                    {g.standards && (
                      <p className="text-[13px] leading-[20px] text-[#4a5565]">
                        <span className="font-semibold text-[#050505]">Listed specifications: </span>{g.standards.join(' · ')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {p.properties.length > 0 && (
              <section aria-labelledby="properties" className="flex flex-col gap-4">
                <SectionHeading id="properties">Technical properties</SectionHeading>
                <div className="overflow-x-auto rounded-2xl border border-black/[0.08]">
                  <table className="w-full min-w-[520px] border-collapse text-left text-[14px]">
                    <caption className="sr-only">Grade-specific properties for {p.name}</caption>
                    <thead className="bg-[#f7f7f7] text-[12px] uppercase tracking-[0.5px] text-[#050505]/60">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">Property</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Value</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Applies to</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.properties.map((pr, i) => (
                        <tr key={i} className="border-t border-black/[0.06]">
                          <th scope="row" className="px-4 py-3 font-medium text-[#050505]">{pr.label}</th>
                          <td className="px-4 py-3 text-[#050505]">{pr.value}</td>
                          <td className="px-4 py-3 text-[#050505]/70">{pr.grade}</td>
                          <td className="px-4 py-3 text-[#050505]/70">
                            <a href={`#src-${pr.sourceId}`} className="text-[#006AFF] hover:underline">{SOURCE_BY_ID[pr.sourceId]?.organisation.split(' (')[0]}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] leading-[18px] text-[#050505]/55">
                  Typical or specified values for the named grade from the cited source. Actual values depend on temper, size and the producing mill — rely on the mill certificate for your lot.
                </p>
              </section>
            )}

            <section aria-labelledby="forms" className="flex flex-col gap-4">
              <SectionHeading id="forms">Forms</SectionHeading>
              <p className="text-[14px] leading-[22px] text-[#050505]/65">
                Typical industry forms for this material. They are not a stock list — form, size and availability are confirmed per enquiry.
              </p>
              <ul className="flex flex-wrap gap-2">
                {p.typicalForms.map((f) => (
                  <li key={f} className="rounded-full border border-black/[0.1] bg-[#f7f7f7] px-3.5 py-1.5 text-[14px] text-[#050505]/85">{f}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="applications" className="flex flex-col gap-4">
              <SectionHeading id="applications">Applications &amp; industries</SectionHeading>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {p.applications.map((a) => (
                  <li key={a} className="flex gap-2 text-[15px] leading-[23px] text-[#050505]/85"><CheckIcon />{a}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.industries.map((id) => (
                  <a key={id} href={`/products/?industry=${id}`} className="rounded-full bg-[#006AFF]/[0.08] px-3.5 py-1.5 text-[13px] font-medium text-[#006AFF] hover:bg-[#006AFF]/[0.14]">
                    {INDUSTRY_BY_ID[id].name}
                  </a>
                ))}
              </div>
              {p.limitations.length > 0 && (
                <div className="mt-2 rounded-xl bg-[#f7f7f7] p-4">
                  <p className="mb-2 text-[14px] font-semibold text-[#050505]">Selection notes &amp; limitations</p>
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[14px] leading-[22px] text-[#050505]/75">
                    {p.limitations.map((l) => <li key={l}>{l}</li>)}
                  </ul>
                </div>
              )}
            </section>

            {p.safety && (
              <section aria-labelledby="safety" className="flex flex-col gap-3 rounded-2xl border border-[#d97706]/30 bg-[#fffbeb] p-5">
                <h2 id="safety" className="text-[18px] font-semibold text-[#050505]">⚠ {p.safety.title}</h2>
                <p className="text-[14px] leading-[23px] text-[#050505]/80">{p.safety.body}</p>
                <p className="text-[12px] text-[#050505]/60">
                  Source: {p.safety.sourceIds.map((id) => SOURCE_BY_ID[id]?.organisation).join('; ')}
                </p>
              </section>
            )}

            <section aria-labelledby="checklist" className="flex flex-col gap-4">
              <SectionHeading id="checklist">What to specify when requesting a quote</SectionHeading>
              <ol className="flex flex-col gap-2.5">
                {p.specifyChecklist.map((c, i) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-[23px] text-[#050505]/85">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#006AFF] text-[12px] font-semibold text-white">{i + 1}</span>
                    {c}
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="documents" className="flex flex-col gap-4">
              <SectionHeading id="documents">Documents buyers may request</SectionHeading>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DOCUMENTS.map((d) => (
                  <li key={d.name} className="rounded-xl border border-black/[0.08] p-4">
                    <p className="text-[15px] font-semibold text-[#050505]">{d.name}</p>
                    <p className="text-[13px] leading-[20px] text-[#050505]/65">{d.note}</p>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] leading-[18px] text-[#050505]/55">Which documents can be provided depends on the source mill and is confirmed with each quotation.</p>
            </section>

            <section aria-labelledby="faq" className="flex flex-col gap-4">
              <SectionHeading id="faq">Frequently asked questions</SectionHeading>
              <div className="flex flex-col divide-y divide-black/[0.08] rounded-2xl border border-black/[0.08]">
                {p.faqs.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-[#050505]">
                      {f.q}
                      <span aria-hidden="true" className="text-[22px] leading-none text-[#006AFF] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pt-3 text-[15px] leading-[24px] text-[#050505]/75">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section aria-labelledby="sources" className="flex flex-col gap-4">
              <SectionHeading id="sources">Sources &amp; technical references</SectionHeading>
              <ol className="flex flex-col gap-3">
                {sources.map((s) => (
                  <li key={s.id} id={`src-${s.id}`} className="scroll-mt-24 text-[14px] leading-[22px] text-[#050505]/80">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-[#006AFF] hover:underline">{s.title}</a>
                    <span className="text-[#050505]/60"> — {s.organisation}. Checked {s.checked}.</span>
                    {s.limitation && <span className="block text-[12px] text-[#050505]/55">{s.limitation}</span>}
                  </li>
                ))}
              </ol>
            </section>
          </article>

          {/* ── Sticky summary ── */}
          <aside className="lg:w-[340px] lg:shrink-0">
            <div className="flex flex-col gap-5 rounded-2xl border border-black/[0.08] bg-[#f7f7f7] p-6 lg:sticky lg:top-28">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.6px] text-[#050505]/55">Why buyers choose it</p>
                <p className="mt-1 text-[17px] font-medium leading-[1.35] text-[#050505]">{p.keyBenefit}</p>
              </div>
              <dl className="flex flex-col gap-3 text-[14px]">
                <div>
                  <dt className="text-[#050505]/55">Grades covered</dt>
                  <dd className="font-medium text-[#050505]">{p.grades.map((g) => g.designation.split(' (')[0]).join(', ')}</dd>
                </div>
                <div>
                  <dt className="text-[#050505]/55">Also known as</dt>
                  <dd className="text-[#050505]/85">{p.aliases.slice(0, 6).join(', ')}</dd>
                </div>
                <div>
                  <dt className="text-[#050505]/55">Supply status</dt>
                  <dd className="text-[#050505]/85">Sourcing confirmed per enquiry — grade, form, size and documents.</dd>
                </div>
              </dl>
              <a href="#enquire" className="flex h-[50px] items-center justify-center rounded-full bg-[#006AFF] text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0058d6]">
                Request a Quote
              </a>
              <a href="#enquire" className="-mt-2 text-center text-[13px] font-medium text-[#050505]/70 hover:text-[#050505] hover:underline">
                Ask about an alternative or equivalent grade
              </a>
            </div>
          </aside>
        </div>

        <section id="enquire" aria-labelledby="enquire-heading" className="w-full scroll-mt-24 bg-[#F7FBFD]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:flex-row lg:gap-16 lg:px-[64px] lg:py-[100px]">
            <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
              <h2 id="enquire-heading" className="text-[28px] font-medium leading-[1.1] text-[#050505] sm:text-[36px] lg:text-[44px]">
                Enquire about {p.name.split(' (')[0]}
              </h2>
              <p className="text-[15px] leading-[24px] text-[#050505]/70">
                Share the grade, form, dimensions and quantity. If you can accept an equivalent grade, say so — it can widen sourcing options.
              </p>
            </div>
            <div className="flex-1">
              <EnquiryForm defaultProduct={p.name} source={`Product page: ${p.name}`} id="product-enquiry" />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section aria-labelledby="related" className="w-full bg-white">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-[64px] lg:py-[100px]">
              <SectionHeading id="related">Related materials</SectionHeading>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {related.map((r) => <li key={r.slug}><ProductCard product={r} /></li>)}
              </ul>
            </div>
          </section>
        )}
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PRODUCTS.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { slug: String(params?.slug) },
});

export default ProductPage;
