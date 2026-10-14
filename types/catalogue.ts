import type { StaticImageData } from 'next/image';

/**
 * Verification status for a technical claim.
 * - verified:  checked against a primary source (standards body, producer datasheet, CDA, OSHA).
 * - secondary: checked against a reputable secondary source (distributor / OEM literature).
 * - confirm:   not independently verified — shown as "Confirm with our team".
 */
export type VerificationStatus = 'verified' | 'secondary' | 'confirm';

export type FamilyId =
  | 'copper-alloys'
  | 'brass-bronze'
  | 'copper-nickel'
  | 'nickel-alloys'
  | 'titanium-aluminium'
  | 'tin-zinc-lead'
  | 'solders-brazing';

export type IndustryId =
  | 'marine'
  | 'aerospace-defence'
  | 'power-electrical'
  | 'heavy-engineering'
  | 'electronics-plating';

export type ProductKind = 'Pure metal' | 'Alloy family' | 'Joining consumable' | 'Plating anode';

export interface ResearchSource {
  id: string;
  organisation: string;
  title: string;
  url: string;
  /** What this source was used to support. */
  supports: string;
  status: VerificationStatus;
  /** ISO date the source was last checked. */
  checked: string;
  /** Access limitation, e.g. full standard behind paywall — only the public scope was read. */
  limitation?: string;
}

export interface Grade {
  designation: string;
  /** Common/trade name for the grade, e.g. "Oxygen-Free Electronic (OFE)". */
  name: string;
  composition: string;
  highlights: string[];
  standards?: string[];
  status: VerificationStatus;
  sourceIds: string[];
}

export interface Property {
  label: string;
  value: string;
  /** Grade the value applies to — never presented as universal to the family. */
  grade: string;
  sourceId: string;
}

export interface ProductImage {
  src: StaticImageData;
  alt: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  /** Exact term used in the supplied "ALL METAL ITEM" document. */
  sourceName: string;
  name: string;
  aliases: string[];
  editorialNote?: string;
  family: FamilyId;
  kind: ProductKind;
  /** Specialised / high-performance material featured in "Advanced Metals". */
  specialised: boolean;
  /** One-line benefit used on cards and in the featured section. */
  keyBenefit: string;
  summary: string;
  overview: string[];
  grades: Grade[];
  /** Typical industry forms — NOT confirmed stock. */
  typicalForms: string[];
  properties: Property[];
  applications: string[];
  industries: IndustryId[];
  limitations: string[];
  safety?: { title: string; body: string; sourceIds: string[] };
  specifyChecklist: string[];
  faqs: Faq[];
  related: string[];
  images: ProductImage[];
  sourceIds: string[];
}
