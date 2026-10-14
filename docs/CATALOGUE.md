# Metals catalogue, Industries section & enquiries

## Where things live

| Concern | File |
|---|---|
| Product data (all 18 products from `ALL METAL ITEM.docx`) | `data/products.ts` |
| Research sources (URL, organisation, claim, status, date checked) | `data/sources.ts` |
| Industries + panel images | `data/industries.ts` |
| Client names from the document — **draft only, not rendered** | `data/clients-draft.ts` |
| Image provenance | `data/image-credits.ts` |
| Types | `types/catalogue.ts` |
| Enquiry delivery | `lib/enquiry.ts`, `components/EnquiryForm.tsx` |
| Pages | `pages/products/index.tsx`, `pages/products/[slug].tsx` |
| Homepage sections | `sections/IndustriesSection.tsx`, `sections/AdvancedMaterialsSection.tsx` |

To edit a product, change only `data/products.ts`. Cards, detail pages, search, filters and the enquiry dropdown all read from it.
Keep `sourceName` exactly as written in the source document.

## Verification rules

- Every grade has a `status`. `verified` means a primary source was read: CDA alloy database, ASTM public scope, a producer datasheet or OSHA. `secondary` means distributor or OEM literature. `confirm` means unverified, and the page shows "Confirm with our team".
- Properties are always tied to a named grade. Never present a value as true for a whole family.
- `typicalForms` are industry-typical forms, **not stock**. Pages say so.
- No prices, stock, lead times, MOQs or certifications appear anywhere. Add them only from confirmed business data.
- ASTM standards are paywalled. Only their public scopes were read, so tin, zinc and lead purity figures are deliberately not quoted.

## Enquiry form activation

The site is a static GitHub Pages export with no server.

1. **Default (no config):** submitting opens the visitor's email app, pre-filled to `info@vishwacorporation.com`, with a WhatsApp alternative. The UI states it has **not** been sent until they press Send.
2. **Direct submission:** create a form endpoint (e.g. Formspree, Web3Forms, Getform, or your own API that accepts JSON POST). Add it as a GitHub repository *variable* `ENQUIRY_ENDPOINT` (Settings → Secrets and variables → Actions → Variables). The deploy workflow passes it to the build as `NEXT_PUBLIC_ENQUIRY_ENDPOINT`. Success is shown only on an HTTP 2xx response. The endpoint URL is public by design, so never use a secret API key here.

For local testing, put `NEXT_PUBLIC_ENQUIRY_ENDPOINT=…` in `.env.local` (git-ignored).

## Before launch — business actions required

1. **Product photos** came from `ALL METAL ITEM.docx`. Their source and licence are unknown. Confirm the rights or replace them (`assets/images/products/`).
2. **Client names** in `data/clients-draft.ts` are unverified. The existing homepage hero already shows a logo strip ("Trusted by India's Leading Industrial OEMs") that includes government and PSU emblems. Confirm that each relationship can be claimed publicly, or remove those logos.
3. Confirm which grades and forms you can actually source. You can then add confirmed availability as a separate field. Do not repurpose `typicalForms`.
