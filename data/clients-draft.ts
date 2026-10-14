// ============================================================
// INTERNAL REVIEW DATASET — NOT RENDERED ANYWHERE ON THE SITE.
//
// These 20 organisation names appear in the supplied "ALL METAL ITEM.docx"
// under "CLIENT NAME". They have NOT been independently verified as current
// or past customers, approved-vendor relationships or endorsements.
//
// Before any name is shown publicly (as text or logo), the business must
// confirm the relationship with documentary evidence (e.g. purchase order,
// vendor registration) and, where required, permission to use the
// organisation's name/logo. Government and defence bodies commonly restrict
// use of their names and emblems in marketing.
//
// To publish a name: set `approvedForPublicDisplay: true` and record
// `evidence` and `approvedBy`. Nothing reads this file yet.
// ============================================================

export interface DraftClient {
  /** Exactly as written in the source document. */
  nameAsSupplied: string;
  approvedForPublicDisplay: boolean;
  evidence?: string;
  approvedBy?: string;
}

const draft = (nameAsSupplied: string): DraftClient => ({
  nameAsSupplied,
  approvedForPublicDisplay: false,
});

export const DRAFT_CLIENTS: DraftClient[] = [
  'BHARAT ELECTRONICS',
  'INDIAN RAILWAY',
  'HINDUSTAN AERONAUTICS LIMITED',
  'KELTRON COMPONENT COMPLEX LTD',
  'GARDEN REACH SHIPBUILDERS & ENGINEERS LTD',
  'GOA SHIPYARD LIMITED',
  'NUCLEAR POWER CORPORATION OF INDIA LIMITED',
  'DEPARTMENT OF ATOMIC ENERGY',
  'KONKAN RAILWAY CORPORATION LIMITED',
  'INDIAN ORDNANCE FACTORIES',
  'IREL',
  'NTPC LIMITED',
  'INDIAN NAVY',
  'DRDO',
  'MDL',
  'BHARAT DYNAMICS',
  'BEML LIMITED',
  'BRBNMPL',
  'ECIL',
  'ONGC',
].map(draft);
