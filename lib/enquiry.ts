// ============================================================
// Enquiry delivery.
//
// The site is a static export (GitHub Pages) with no server, so there are two
// delivery paths:
//
// 1. NEXT_PUBLIC_ENQUIRY_ENDPOINT is set at build time → the form POSTs JSON
//    to that URL (e.g. a Formspree / Web3Forms / Getform form endpoint, or your
//    own API). Success is reported only when the endpoint returns 2xx.
//    Such endpoints are public by design — never put a secret API key here.
//
// 2. No endpoint configured → the visitor's own email app (or WhatsApp) opens
//    with the enquiry pre-filled. The UI says plainly that it has NOT been sent
//    until they press Send.
// ============================================================

export const ENQUIRY_EMAIL = 'info@vishwacorporation.com';
export const WHATSAPP_NUMBER = '919137534627';

const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? '';

export const hasEnquiryEndpoint = ENDPOINT.length > 0;

export interface EnquiryPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  product?: string;
  grade?: string;
  formAndDimensions?: string;
  quantity?: string;
  application?: string;
  deliveryLocation?: string;
  message?: string;
  /** Page the enquiry came from. */
  source: string;
}

const LABELS: Record<keyof EnquiryPayload, string> = {
  name: 'Name',
  company: 'Company',
  email: 'Email',
  phone: 'Phone',
  product: 'Product',
  grade: 'Grade / specification',
  formAndDimensions: 'Form & dimensions',
  quantity: 'Approx. quantity',
  application: 'Application',
  deliveryLocation: 'Delivery location',
  message: 'Additional requirements',
  source: 'Submitted from',
};

export function enquiryToText(p: EnquiryPayload): string {
  return (Object.keys(LABELS) as (keyof EnquiryPayload)[])
    .filter((k) => p[k])
    .map((k) => `${LABELS[k]}: ${p[k]}`)
    .join('\n');
}

const subjectFor = (p: EnquiryPayload) =>
  `Material enquiry${p.product ? ` — ${p.product}` : ''}${p.company ? ` (${p.company})` : ''}`;

export const mailtoHref = (p: EnquiryPayload) =>
  `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subjectFor(p))}&body=${encodeURIComponent(enquiryToText(p))}`;

export const whatsappHref = (p: EnquiryPayload) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${subjectFor(p)}\n\n${enquiryToText(p)}`)}`;

export type DeliveryResult =
  | { status: 'sent' }
  | { status: 'error'; message: string }
  | { status: 'handoff' };

/** POSTs to the configured endpoint; returns `handoff` when none is configured. */
export async function deliverEnquiry(p: EnquiryPayload): Promise<DeliveryResult> {
  if (!hasEnquiryEndpoint) return { status: 'handoff' };
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...p, _subject: subjectFor(p) }),
    });
    if (!res.ok) return { status: 'error', message: `The enquiry service responded with ${res.status}.` };
    return { status: 'sent' };
  } catch {
    return { status: 'error', message: 'We could not reach the enquiry service. Check your connection.' };
  }
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
