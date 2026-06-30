// ============================================================
// VISHWA CORPORATION — Site-level constants
// ============================================================

export const SITE_NAME = 'Vishwa Corporation';

export const NAV_LINKS = [
  { label: 'About Us',   href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Products',   href: '#products' },
] as const;

export const STATS = [
  { value: '45+',  label: 'Countries We Actively Export To' },
  { value: '18Y',  label: 'Years of Metallurgical & Precision Manufacturing Experience' },
  { value: '500+', label: 'Industrial Clients & OEM Partners' },
  { value: '15+',  label: 'Engineering Materials & Alloy Grades Supplied' },
] as const;

export const PROCESS_STEPS = [
  { step: '01', label: 'Inquiry & Consultation' },
  { step: '02', label: 'Alloy & Material Selection' },
  { step: '03', label: 'Manufacturing',     active: true },
  { step: '04', label: 'Quality Testing' },
  { step: '05', label: 'Delivery' },
] as const;

export const SERVICES = [
  { title: 'Precision Engineering',   description: '' },
  { title: 'Rapid Turnaround',        description: '' },
  { title: 'Global Material Standards', description: '' },
  { title: 'Expert Metallurgical Team', description: '' },
  { title: 'Comprehensive Material Range', description: '' },
  { title: 'Proven Track Record',     description: '' },
] as const;

export const GALLERY_ITEMS = [
  { label: '01', caption: 'OXYGEN-FREE & ETP COPPER WIRE ROD', image: '' },
  { label: '02', caption: 'PRECISION-TURNED ALLOY COMPONENTS', image: '' },
  { label: '03', caption: 'ENGINEERING ALLOY SHEET & FLAT STOCK', image: '' },
] as const;
