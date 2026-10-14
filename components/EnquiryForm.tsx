'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import {
  EMAIL_RE,
  ENQUIRY_EMAIL,
  deliverEnquiry,
  hasEnquiryEndpoint,
  mailtoHref,
  whatsappHref,
  type EnquiryPayload,
} from '../lib/enquiry';

const FIELD_BASE =
  'w-full rounded-xl border border-[#edeef7] bg-white px-3 py-[14px] text-[14px] text-[#050505] placeholder:text-[#050505]/45 focus:border-[#0087fd] focus:outline-none';
const FIELD_ERROR = 'border-[#d92d20] focus:border-[#d92d20]';
const LABEL = 'flex flex-1 flex-col gap-2 text-[14px] font-medium text-[#050505]';

const ArrowRightIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type Fields = Omit<EnquiryPayload, 'source'>;
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: '', company: '', email: '', phone: '', product: '', grade: '',
  formAndDimensions: '', quantity: '', application: '', deliveryLocation: '', message: '',
};

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!f.email.trim()) e.email = 'Please enter your business email.';
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  if (f.phone && !/^[+()\d\s-]{7,20}$/.test(f.phone.trim())) e.phone = 'Use digits, spaces, + ( ) or - only.';
  if (!f.product) e.product = 'Select a product, or “Other / not sure”.';
  return e;
}

interface EnquiryFormProps {
  /** Pre-selected product name. */
  defaultProduct?: string;
  /** Identifies the page in the delivered enquiry. */
  source: string;
  id?: string;
}

/**
 * Material enquiry / request-for-quote form.
 * Never reports success unless the configured endpoint accepted the enquiry.
 */
export const EnquiryForm: React.FC<EnquiryFormProps> = ({ defaultProduct = '', source, id = 'enquiry-form' }) => {
  const [fields, setFields] = useState<Fields>({ ...EMPTY, product: defaultProduct });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'handoff' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const payload: EnquiryPayload = { ...fields, source };

  const set = (k: keyof Fields) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`${id}-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    setState('sending');
    const result = await deliverEnquiry(payload);
    if (result.status === 'sent') setState('sent');
    else if (result.status === 'handoff') {
      setState('handoff');
      window.location.href = mailtoHref(payload);
    } else {
      setErrorMsg(result.message);
      setState('error');
    }
  };

  const field = (k: keyof Fields) => ({
    id: `${id}-${k}`,
    value: fields[k] ?? '',
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${id}-${k}-err` : undefined,
  });

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <span id={`${id}-${k}-err`} className="text-[13px] font-normal text-[#d92d20]">{errors[k]}</span>
    ) : null;

  if (state === 'sent') {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-[24px] bg-[#f7f7f7] p-6 sm:p-8">
        <p className="text-[22px] font-medium text-[#050505]">Enquiry received.</p>
        <p className="text-[15px] leading-[24px] text-[#050505]/70">
          Thank you, {fields.name.split(' ')[0]}. Our team will review the grade, form and quantity and reply to {fields.email}.
        </p>
      </div>
    );
  }

  return (
    <form id={id} noValidate onSubmit={onSubmit} className="flex w-full flex-col gap-5 rounded-[24px] bg-[#f7f7f7] p-5 sm:gap-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row">
        <label className={LABEL}>
          Name *
          <input type="text" autoComplete="name" placeholder="Your full name" className={`${FIELD_BASE} ${errors.name ? FIELD_ERROR : ''}`} {...field('name')} />
          {err('name')}
        </label>
        <label className={LABEL}>
          Company
          <input type="text" autoComplete="organization" placeholder="Company name" className={FIELD_BASE} {...field('company')} />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <label className={LABEL}>
          Business email *
          <input type="email" autoComplete="email" placeholder="name@company.com" className={`${FIELD_BASE} ${errors.email ? FIELD_ERROR : ''}`} {...field('email')} />
          {err('email')}
        </label>
        <label className={LABEL}>
          Phone
          <input type="tel" autoComplete="tel" placeholder="+91 …" className={`${FIELD_BASE} ${errors.phone ? FIELD_ERROR : ''}`} {...field('phone')} />
          {err('phone')}
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <label className={LABEL}>
          Product *
          <select className={`${FIELD_BASE} ${errors.product ? FIELD_ERROR : ''}`} {...field('product')}>
            <option value="">Select a material</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
            <option value="Other / not sure">Other / not sure — help me choose</option>
          </select>
          {err('product')}
        </label>
        <label className={LABEL}>
          Grade or specification
          <input type="text" placeholder="e.g. C10100, ASTM B111, or equivalent" className={FIELD_BASE} {...field('grade')} />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <label className={LABEL}>
          Form &amp; dimensions
          <input type="text" placeholder="e.g. Ø25 mm rod × 3 m" className={FIELD_BASE} {...field('formAndDimensions')} />
        </label>
        <label className={LABEL}>
          Approx. quantity
          <input type="text" placeholder="e.g. 500 kg, 200 pcs" className={FIELD_BASE} {...field('quantity')} />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <label className={LABEL}>
          Intended application
          <input type="text" placeholder="e.g. seawater condenser tubes" className={FIELD_BASE} {...field('application')} />
        </label>
        <label className={LABEL}>
          Delivery city / location
          <input type="text" autoComplete="address-level2" placeholder="e.g. Pune, India" className={FIELD_BASE} {...field('deliveryLocation')} />
        </label>
      </div>

      <label className={LABEL}>
        Additional requirements
        <textarea rows={4} placeholder="Certificates needed, alternative grades you can accept, delivery date…" className={`${FIELD_BASE} resize-y`} {...field('message')} />
      </label>

      {state === 'handoff' && (
        <div role="status" className="rounded-xl border border-[#006AFF]/25 bg-[#006AFF]/[0.06] p-4 text-[14px] leading-[22px] text-[#050505]">
          <p className="font-semibold">Your email app should now be open with this enquiry filled in.</p>
          <p className="mt-1 text-[#050505]/75">
            It has <strong>not been sent yet</strong>. Press Send in your email app to deliver it. If nothing opened, email{' '}
            <a className="text-[#006AFF] underline" href={mailtoHref(payload)}>{ENQUIRY_EMAIL}</a> or{' '}
            <a className="text-[#006AFF] underline" href={whatsappHref(payload)} target="_blank" rel="noopener noreferrer">send it on WhatsApp</a>.
          </p>
        </div>
      )}
      {state === 'error' && (
        <div role="alert" className="rounded-xl border border-[#d92d20]/30 bg-[#d92d20]/[0.05] p-4 text-[14px] leading-[22px] text-[#050505]">
          <p className="font-semibold">Your enquiry was not sent.</p>
          <p className="mt-1 text-[#050505]/75">
            {errorMsg} Please try again, or email <a className="text-[#006AFF] underline" href={mailtoHref(payload)}>{ENQUIRY_EMAIL}</a>.
          </p>
        </div>
      )}

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="flex h-[52px] w-fit items-center gap-2 rounded-full bg-[#006AFF] px-8 transition-colors duration-200 hover:bg-[#0058d6] disabled:opacity-60"
        >
          <span className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.32px] text-white">
            {state === 'sending' ? 'Sending…' : hasEnquiryEndpoint ? 'Request a Quote' : 'Prepare Quote Request'}
          </span>
          <ArrowRightIcon />
        </button>
        <a
          href={whatsappHref(payload)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] font-medium text-[#050505]/70 underline-offset-4 hover:text-[#050505] hover:underline"
        >
          Or send these details on WhatsApp
        </a>
      </div>
      <p className="text-[12px] leading-[18px] text-[#050505]/55">
        * Required. Availability, grade, form and certification are confirmed for each enquiry. We do not publish stock or prices.
      </p>
    </form>
  );
};

export default EnquiryForm;
