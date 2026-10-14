// ============================================================
// VISHWA CORPORATION — Metals & alloys catalogue (single source of truth)
//
// • Product names/order come from the supplied "ALL METAL ITEM.docx"
//   (`sourceName` preserves the document's original wording).
// • Technical data cite research records in data/sources.ts.
// • Nothing here asserts stock, price, lead time or certification.
//   `typicalForms` are industry-typical forms, not confirmed inventory.
// ============================================================

import type { Product } from '../types/catalogue';

import brass1 from '../assets/images/products/brass-1.jpg';
import brass2 from '../assets/images/products/brass-2.jpg';
import copper1 from '../assets/images/products/copper-1.jpg';
import copper2 from '../assets/images/products/copper-2.jpg';
import copper3 from '../assets/images/products/copper-3.jpg';
import beCu1 from '../assets/images/products/beryllium-copper-1.jpg';
import beCu2 from '../assets/images/products/beryllium-copper-2.jpg';
import teCu1 from '../assets/images/products/tellurium-copper-1.jpg';
import teCu2 from '../assets/images/products/tellurium-copper-2.jpg';
import teCu3 from '../assets/images/products/tellurium-copper-3.jpg';
import tin1 from '../assets/images/products/tin-ingot-1.jpg';
import tin2 from '../assets/images/products/tin-ingot-2.jpg';
import tin3 from '../assets/images/products/tin-ingot-3.jpg';
import solder1 from '../assets/images/products/soft-solder-1.jpg';
import solder2 from '../assets/images/products/soft-solder-2.jpg';
import solder3 from '../assets/images/products/soft-solder-3.jpg';
import ti1 from '../assets/images/products/titanium-1.jpg';
import ti2 from '../assets/images/products/titanium-2.jpg';
import ti3 from '../assets/images/products/titanium-3.jpg';
import al1 from '../assets/images/products/aluminium-1.jpg';
import al2 from '../assets/images/products/aluminium-2.jpg';
import al3 from '../assets/images/products/aluminium-3.jpg';
import ni1 from '../assets/images/products/nickel-1.jpg';
import ni2 from '../assets/images/products/nickel-2.jpg';
import ni3 from '../assets/images/products/nickel-3.jpg';
import agSolder1 from '../assets/images/products/silver-solder-1.jpg';
import agSolder2 from '../assets/images/products/silver-solder-2.jpg';
import zn1 from '../assets/images/products/zinc-1.jpg';
import zn2 from '../assets/images/products/zinc-2.jpg';
import zn3 from '../assets/images/products/zinc-3.jpg';
import pb1 from '../assets/images/products/lead-1.jpg';
import pb2 from '../assets/images/products/lead-2.jpg';
import pb3 from '../assets/images/products/lead-3.jpg';
import pbBronze1 from '../assets/images/products/lead-bronze-1.jpg';
import pbBronze2 from '../assets/images/products/lead-bronze-2.jpg';
import siBronze1 from '../assets/images/products/silicon-bronze-1.jpg';
import siBronze2 from '../assets/images/products/silicon-bronze-2.jpg';
import cuni9010a from '../assets/images/products/cupro-nickel-90-10-1.jpg';
import cuni9010b from '../assets/images/products/cupro-nickel-90-10-2.jpg';
import cuni9010c from '../assets/images/products/cupro-nickel-90-10-3.jpg';
import cuni7030a from '../assets/images/products/cupro-nickel-70-30-1.jpg';
import cuni7030b from '../assets/images/products/cupro-nickel-70-30-2.jpg';
import cuni7030c from '../assets/images/products/cupro-nickel-70-30-3.jpg';
import anode1 from '../assets/images/products/phosphorus-copper-anode-1.jpg';
import anode2 from '../assets/images/products/phosphorus-copper-anode-2.jpg';
import inconel1 from '../assets/images/products/inconel-1.jpg';
import inconel2 from '../assets/images/products/inconel-2.jpg';

/** Items every buyer should state; product-specific items are prepended per product. */
const BASE_CHECKLIST = [
  'Grade and the standard it must conform to (ASTM, EN, IS, UNS or your drawing)',
  'Form and dimensions — thickness or diameter, width, length and tolerances',
  'Approximate quantity, and whether the requirement is one-off or recurring',
  'Intended application, so the grade can be cross-checked before quoting',
  'Documents required — e.g. mill test certificate, chemical analysis, certificate of conformity',
  'Delivery city / site and the date you need material by',
];

const checklist = (...specific: string[]) => [...specific, ...BASE_CHECKLIST];

export const PRODUCTS: Product[] = [
  // ─────────────────────────────────────────── 1. BRASS
  {
    slug: 'brass',
    sourceName: 'BRASS',
    name: 'Brass',
    aliases: ['Copper-zinc alloy', 'Free-cutting brass', 'Cartridge brass', 'Naval brass', 'C36000', 'C26000', 'C46400'],
    family: 'brass-bronze',
    kind: 'Alloy family',
    specialised: false,
    keyBenefit: 'Free-cutting grades set the machinability benchmark for copper alloys',
    summary: 'Copper-zinc alloys for machined fittings, formed parts and marine hardware. Grade choice trades machinability against formability and corrosion resistance.',
    overview: [
      'Brass is a family of copper-zinc alloys, not a single material. Free-cutting brass (C36000) adds 2.5–3.0% lead and is the reference alloy against which copper-alloy machinability is rated (rating 100). Cartridge brass (C26000, 70/30) has no lead addition and is chosen for deep drawing and forming.',
      'Naval brass (C46400) adds 0.5–1.0% tin for improved resistance to fresh and salt water, and is used for shipboard equipment, fasteners and valve stems.',
    ],
    grades: [
      {
        designation: 'C36000',
        name: 'Free-Cutting Brass',
        composition: 'Cu 60.0–63.0%, Pb 2.5–3.0%, Fe ≤ 0.35%, Zn remainder',
        highlights: ['Machinability rating 100 (reference alloy)', 'Screw-machine parts, fittings, valve stems, gears'],
        standards: ['ASTM B16/B16M', 'SAE J461 / J463', 'AMS 4610'],
        status: 'verified',
        sourceIds: ['cda-c36000'],
      },
      {
        designation: 'C26000',
        name: 'Cartridge Brass, 70%',
        composition: 'Cu 68.5–71.5%, Pb ≤ 0.07%, Fe ≤ 0.05%, Zn remainder',
        highlights: ['Good formability and drawing characteristics', 'Radiator cores, hardware, electrical sockets'],
        standards: ['ASTM B36/B36M', 'ASTM B19', 'ASTM B135'],
        status: 'verified',
        sourceIds: ['cda-c26000'],
      },
      {
        designation: 'C46400',
        name: 'Naval Brass, Uninhibited',
        composition: 'Cu 59.0–62.0%, Sn 0.50–1.0%, Pb ≤ 0.20%, Zn remainder',
        highlights: ['Corrosion resistance to fresh and salt water', 'Shipboard equipment, bolts, nuts, valve stems'],
        standards: ['ASTM B21/B21M', 'ASTM B171/B171M', 'AMS 4611 / 4612'],
        status: 'verified',
        sourceIds: ['cda-c46400'],
      },
    ],
    typicalForms: ['Rod (round, hex, square)', 'Sheet & strip', 'Plate', 'Tube', 'Forgings', 'Ingot'],
    properties: [
      { label: 'Electrical conductivity', value: '26% IACS', grade: 'C36000', sourceId: 'cda-c36000' },
      { label: 'Electrical conductivity', value: '28% IACS', grade: 'C26000', sourceId: 'cda-c26000' },
      { label: 'Machinability rating', value: '100 (reference)', grade: 'C36000', sourceId: 'cda-c36000' },
      { label: 'Melting range', value: '888–899 °C', grade: 'C36000', sourceId: 'cda-c36000' },
      { label: 'Specific gravity', value: '8.50', grade: 'C36000', sourceId: 'cda-c36000' },
    ],
    applications: ['Precision-turned fittings and connectors', 'Valve stems, seats and trim', 'Gears, pinions and fasteners', 'Formed hardware and radiator parts', 'Shipboard fittings (naval brass)'],
    industries: ['heavy-engineering', 'marine', 'power-electrical'],
    limitations: ['Leaded free-cutting grades may be restricted for drinking-water contact in some jurisdictions — state the end use.', 'Cartridge brass and free-cutting brass are not interchangeable: one is optimised for forming, the other for machining.'],
    specifyChecklist: checklist('Whether the part is machined, formed or forged (drives grade choice)', 'Any lead-content restriction for the end use'),
    faqs: [
      { q: 'Which brass machines best?', a: 'C36000 free-cutting brass is the reference alloy for copper-alloy machinability (rating 100). Its lead addition is what makes it free-cutting.' },
      { q: 'Which brass is used for marine fittings?', a: 'Naval brass (C46400) contains 0.5–1.0% tin and is listed for fresh- and salt-water service. For seawater piping, copper-nickel alloys are usually considered instead — ask us to compare.' },
    ],
    related: ['lead-bronze', 'silicon-bronze', 'copper'],
    images: [
      { src: brass1, alt: 'Brass rods, hex nuts and threaded pipe fittings with copper and tin ingots' },
      { src: brass2, alt: 'Brass in rod, sheet, strip and coil forms' },
    ],
    sourceIds: ['cda-c36000', 'cda-c26000', 'cda-c46400'],
  },

  // ─────────────────────────────────────────── 2. COPPER
  {
    slug: 'copper',
    sourceName: 'COPPER',
    name: 'Copper (ETP, Oxygen-Free & DHP)',
    aliases: ['Oxygen-free copper', 'OFC', 'OFE copper', 'ETP copper', 'Electrolytic copper', 'DHP copper', 'C10100', 'C10200', 'C11000', 'C12200'],
    family: 'copper-alloys',
    kind: 'Pure metal',
    specialised: true,
    keyBenefit: 'Oxygen-free grades reach ≥ 101% IACS and resist hydrogen embrittlement during brazing',
    summary: 'High-conductivity coppers for busbars, conductors and electron devices — from general ETP to oxygen-free electronic (OFE) grade.',
    overview: [
      'Commercial copper is supplied in distinct grades. Electrolytic tough pitch (ETP, C11000) is the general-purpose conductor grade with a minimum of 100% IACS when annealed. It contains oxygen, which can cause hydrogen embrittlement if the copper is brazed or welded in a reducing atmosphere.',
      'Oxygen-free grades remove that risk. C10200 (OF) limits oxygen to 0.0010%, and C10100 (OFE, oxygen-free electronic) is the highest-purity grade at ≥ 99.99% copper with tightly limited impurities and a 101% IACS minimum. OFE is specified for vacuum seals, microwave tubes, waveguides and other electron-device parts.',
      'Phosphorus-deoxidised copper (DHP, C12200) trades some conductivity (85% IACS) for excellent brazeability and is the usual grade for tube and heat-exchanger work.',
    ],
    grades: [
      {
        designation: 'C10100',
        name: 'Oxygen-Free Electronic (OFE)',
        composition: 'Cu ≥ 99.99% (excl. Ag), O ≤ 0.0005%, individual impurity limits in ppm',
        highlights: ['Min. 101% IACS (annealed)', 'Will not hydrogen-embrittle during brazing or welding', 'Electron devices, vacuum seals, waveguides, klystrons'],
        standards: ['ASTM F68', 'ASTM B152/B152M', 'ASTM B187/B187M', 'ASTM B170'],
        status: 'verified',
        sourceIds: ['cda-c10100'],
      },
      {
        designation: 'C10200',
        name: 'Oxygen-Free (OF)',
        composition: 'Cu ≥ 99.95% (incl. Ag), O ≤ 0.0010%',
        highlights: ['High-conductivity copper (min. 100% IACS annealed)', 'Busbars, coaxial cable, waveguides, glass-to-metal seals'],
        standards: ['ASTM B152/B152M', 'ASTM B187/B187M', 'ASTM B170'],
        status: 'verified',
        sourceIds: ['cda-c10200'],
      },
      {
        designation: 'C11000',
        name: 'Electrolytic Tough Pitch (ETP)',
        composition: 'Cu ≥ 99.90% (incl. Ag); oxygen and trace elements vary with process',
        highlights: ['Min. 100% IACS (annealed)', 'Busbars, conductors, terminals, roofing'],
        standards: ['ASTM B152/B152M', 'ASTM B187/B187M', 'ASTM B1 / B2 / B3 (wire)'],
        status: 'verified',
        sourceIds: ['cda-c11000'],
      },
      {
        designation: 'C12200',
        name: 'Phosphorus-Deoxidised, High Residual P (DHP)',
        composition: 'Cu ≥ 99.9%, P 0.015–0.040%',
        highlights: ['85% IACS', 'Excellent brazeability', 'Tubes for heat exchangers, condensers, gas and hydraulic lines'],
        standards: ['ASTM B75/B75M', 'ASTM B88', 'ASTM B111/B111M'],
        status: 'verified',
        sourceIds: ['cda-c12200'],
      },
    ],
    typicalForms: ['Busbar & flat', 'Rod', 'Sheet, strip & plate', 'Wire & wire rod', 'Tube', 'Foil'],
    properties: [
      { label: 'Electrical conductivity (min., annealed)', value: '101% IACS', grade: 'C10100 OFE', sourceId: 'cda-c10100' },
      { label: 'Electrical conductivity (min., annealed)', value: '100% IACS', grade: 'C11000 ETP', sourceId: 'cda-c11000' },
      { label: 'Electrical conductivity', value: '85% IACS', grade: 'C12200 DHP', sourceId: 'cda-c12200' },
      { label: 'Melting point', value: '1083 °C', grade: 'C10100 OFE', sourceId: 'cda-c10100' },
      { label: 'Specific gravity', value: '8.94', grade: 'C10100 OFE', sourceId: 'cda-c10100' },
    ],
    applications: ['Busbars and bus conductors', 'Electrical conductors, terminals and connectors', 'Vacuum seals, microwave tubes and waveguides (OFE)', 'Heat-exchanger and condenser tubes (DHP)', 'Brazed and welded assemblies (oxygen-free grades)'],
    industries: ['power-electrical', 'electronics-plating', 'aerospace-defence'],
    limitations: ['ETP (C11000) contains oxygen and can suffer hydrogen embrittlement if brazed or annealed in hydrogen-bearing atmospheres — specify an oxygen-free or deoxidised grade for those processes.', 'DHP copper has lower conductivity (85% IACS) and is not a substitute for conductor grades.'],
    specifyChecklist: checklist('Minimum conductivity (% IACS) required', 'Whether the part will be brazed, welded or used in vacuum (drives OF/OFE vs ETP)'),
    faqs: [
      { q: 'What is the difference between OF and OFE copper?', a: 'Both are oxygen-free. OFE (C10100) is the higher-purity grade — Cu ≥ 99.99% with individual impurity limits in parts per million and a 101% IACS minimum — and is specified for electron devices. OF (C10200) is Cu ≥ 99.95% with O ≤ 0.0010%.' },
      { q: 'When is ETP copper not suitable?', a: 'When the part will be brazed or heated in a hydrogen-bearing atmosphere. ETP contains oxygen and can embrittle; oxygen-free (C10100/C10200) or deoxidised (C12200) grades are used instead.' },
      { q: 'Can you supply OFE copper?', a: 'Availability of each grade, form and size is confirmed per enquiry. Share your grade, dimensions and quantity and we will confirm sourcing.' },
    ],
    related: ['tellurium-copper', 'beryllium-copper', 'phosphorus-copper-anode'],
    images: [
      { src: copper1, alt: 'Copper coil, square bars and round rods' },
      { src: copper2, alt: 'Stack of copper sheets and plates' },
      { src: copper3, alt: 'Machined copper blocks, discs and round bar' },
    ],
    sourceIds: ['cda-c10100', 'cda-c10200', 'cda-c11000', 'cda-c12200'],
  },

  // ─────────────────────────────────────────── 3. BERYLLIUM COPPER
  {
    slug: 'beryllium-copper',
    sourceName: 'BERYLLIUM COPPER',
    name: 'Beryllium Copper',
    aliases: ['Copper beryllium', 'CuBe', 'BeCu', 'C17200', 'C17510'],
    family: 'copper-alloys',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Heat-treatable to very high strength while retaining useful conductivity',
    summary: 'Precipitation-hardenable copper alloys combining very high strength, fatigue resistance and conductivity for springs, connectors and wear parts.',
    overview: [
      'Beryllium copper alloys are heat-treatable: they can be formed in a softer condition and then age-hardened. C17200 (1.80–2.00% Be) is the high-strength grade used for springs, connectors, bearings and non-sparking tools.',
      'C17510 uses far less beryllium (0.2–0.6%) with nickel, giving roughly double the conductivity of C17200 (48% vs 22% IACS listed by CDA) at lower strength. It is used for welding equipment, heavy-duty connectors and thermal-transfer parts.',
    ],
    grades: [
      {
        designation: 'C17200',
        name: 'Copper Beryllium (high strength)',
        composition: 'Be 1.80–2.00%, Ni + Co ≥ 0.20%, Cu + named elements ≥ 99.5%',
        highlights: ['Heat treatable to very high strength', 'High fatigue endurance and stress-relaxation resistance', 'Springs, relay blades, connectors, bearings'],
        standards: ['ASTM B196/B196M', 'ASTM B194', 'ASTM B197/B197M', 'AMS 4533 / 4650 / 4651'],
        status: 'verified',
        sourceIds: ['cda-c17200'],
      },
      {
        designation: 'C17510',
        name: 'Copper Beryllium (high conductivity)',
        composition: 'Be 0.2–0.6%, Ni 1.4–2.2%',
        highlights: ['48% IACS listed', 'Retains strength at elevated temperature', 'Welding equipment, die-casting plunger tips, connectors'],
        standards: ['ASTM B441', 'ASTM B534', 'ASTM B937'],
        status: 'verified',
        sourceIds: ['cda-c17510'],
      },
    ],
    typicalForms: ['Rod & bar', 'Strip', 'Plate', 'Wire', 'Tube'],
    properties: [
      { label: 'Electrical conductivity', value: '22% IACS', grade: 'C17200 (value listed by CDA; varies with temper)', sourceId: 'cda-c17200' },
      { label: 'Electrical conductivity', value: '48% IACS', grade: 'C17510', sourceId: 'cda-c17510' },
      { label: 'Melting range', value: '866–982 °C', grade: 'C17200', sourceId: 'cda-c17200' },
      { label: 'Specific gravity', value: '8.26', grade: 'C17200', sourceId: 'cda-c17200' },
    ],
    applications: ['Springs, Belleville washers and retaining rings', 'Electrical connectors, relay and switch parts', 'Bearings and bushings requiring galling resistance', 'Resistance-welding equipment (C17510)'],
    industries: ['aerospace-defence', 'power-electrical', 'heavy-engineering'],
    limitations: ['Strength and conductivity depend heavily on temper and age-hardening — always specify the temper.'],
    safety: {
      title: 'Beryllium handling',
      body: 'Solid beryllium copper in finished form is routinely handled, but machining, grinding, welding or melting can release beryllium-containing dust or fume. OSHA identifies inhalation of airborne beryllium and skin contact as exposure routes, linked to chronic beryllium disease and lung cancer. Request the Safety Data Sheet and follow local regulations.',
      sourceIds: ['osha-beryllium'],
    },
    specifyChecklist: checklist('Temper / heat-treat condition (solution-annealed, age-hardened, mill-hardened)', 'Whether you will heat-treat after forming'),
    faqs: [
      { q: 'Is C17510 a lower-cost substitute for C17200?', a: 'Not directly. C17510 has lower strength but higher conductivity. They are selected for different duties — confirm the property you need with our team.' },
    ],
    related: ['copper', 'tellurium-copper', 'silicon-bronze'],
    images: [
      { src: beCu1, alt: 'Beryllium copper round bars' },
      { src: beCu2, alt: 'Beryllium copper block, bar and thin rods' },
    ],
    sourceIds: ['cda-c17200', 'cda-c17510', 'osha-beryllium'],
  },

  // ─────────────────────────────────────────── 4. TELLURIUM COPPER
  {
    slug: 'tellurium-copper',
    sourceName: 'TERILIUM COPPER',
    name: 'Tellurium Copper',
    aliases: ['Terilium copper', 'Tellurium-bearing copper', 'Free-machining copper', 'C14500'],
    editorialNote: 'Listed as "Terilium Copper" in the source document. The verified technical name is Tellurium Copper (UNS C14500, "tellurium-bearing copper").',
    family: 'copper-alloys',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Machines far better than pure copper (rating 85 vs 20) while keeping 93% IACS',
    summary: 'Free-machining copper: a small tellurium addition makes copper easy to machine while retaining high electrical and thermal conductivity.',
    overview: [
      'Pure coppers are difficult to machine (CDA rates oxygen-free copper at 20 on the 100-point scale). Tellurium copper, C14500, adds 0.40–0.7% tellurium, raising the machinability rating to 85 while keeping 93% IACS conductivity.',
      'That combination makes it a common choice for machined electrical connectors, switch parts, transistor bases, soldering tips and welding torch tips.',
    ],
    grades: [
      {
        designation: 'C14500',
        name: 'Tellurium-Bearing Copper',
        composition: 'Cu ≥ 99.90% (incl. Te + P + Ag), Te 0.40–0.7%, P 0.004–0.012%',
        highlights: ['93% IACS', 'Machinability rating 85', 'Resistance to thermal softening'],
        standards: ['ASTM B301/B301M', 'ASTM B124/B124M', 'ASTM B283/B283M'],
        status: 'verified',
        sourceIds: ['cda-c14500'],
      },
    ],
    typicalForms: ['Rod (round, hex)', 'Bar', 'Wire', 'Forgings'],
    properties: [
      { label: 'Electrical conductivity', value: '93% IACS', grade: 'C14500', sourceId: 'cda-c14500' },
      { label: 'Machinability rating', value: '85', grade: 'C14500', sourceId: 'cda-c14500' },
      { label: 'Melting range', value: '1051–1080 °C', grade: 'C14500', sourceId: 'cda-c14500' },
      { label: 'Specific gravity', value: '8.94', grade: 'C14500', sourceId: 'cda-c14500' },
    ],
    applications: ['Machined electrical connectors and terminals', 'Switch and motor parts', 'Soldering and welding torch tips', 'Screw-machine products and forgings'],
    industries: ['power-electrical', 'electronics-plating'],
    limitations: ['Conductivity is lower than OF/ETP copper (93% vs ≥ 100% IACS). If maximum conductivity matters more than machining, specify pure copper.'],
    specifyChecklist: checklist('Rod or bar size and the machining process (CNC turning, screw machine)', 'Temper required'),
    faqs: [
      { q: 'Is "Terilium copper" the same as tellurium copper?', a: 'Yes. "Terilium" in our product list refers to tellurium copper, UNS C14500.' },
    ],
    related: ['copper', 'beryllium-copper', 'brass'],
    images: [
      { src: teCu1, alt: 'Tellurium copper flat bars, round bar and tube' },
      { src: teCu2, alt: 'Tellurium copper square and hexagonal bars' },
      { src: teCu3, alt: 'Tellurium copper round rods on a copper plate' },
    ],
    sourceIds: ['cda-c14500'],
  },

  // ─────────────────────────────────────────── 5. TIN INGOT
  {
    slug: 'tin-ingot',
    sourceName: 'TIN INGOT',
    name: 'Tin Ingot',
    aliases: ['Pig tin', 'Refined tin', 'Sn', 'ASTM B339 Grade A'],
    family: 'tin-zinc-lead',
    kind: 'Pure metal',
    specialised: false,
    keyBenefit: 'Base metal for solder and tinplate, increasingly specified with low lead content',
    summary: 'Refined tin in ingot (pig) form — the feedstock for solders, tinplate, bronzes and tin chemicals.',
    overview: [
      'ASTM B339 covers refined pig tin and specifies a single grade, Grade A. It sets limits on antimony, arsenic, bismuth, cadmium, copper, iron, lead and other impurities.',
      'Solder is the largest use of tin, followed by tinplate and chemicals (International Tin Association). Buyers increasingly specify low-lead tin: the ITA reports a continuing shift towards < 25 ppm Pb specifications in tinplate.',
    ],
    grades: [
      {
        designation: 'ASTM B339 Grade A',
        name: 'Refined pig tin',
        composition: 'Purity and impurity limits per ASTM B339 — confirm the exact figures against the current standard',
        highlights: ['Single grade defined by ASTM B339', 'Low-lead variants specified by some solder and tinplate users'],
        standards: ['ASTM B339'],
        status: 'verified',
        sourceIds: ['astm-b339', 'ita-2023'],
      },
    ],
    typicalForms: ['Ingot / pig', 'Bar', 'Granules or shot (on request)'],
    properties: [],
    applications: ['Solder manufacture', 'Tinplate and tinning', 'Bronze and other alloy production', 'Tin chemicals'],
    industries: ['electronics-plating'],
    limitations: ['Tin purity requirements differ by end use; state any lead or bismuth limit you need.'],
    specifyChecklist: checklist('Minimum purity and any maximum lead (ppm) limit', 'Ingot weight / shape preferred'),
    faqs: [
      { q: 'What purity is Grade A tin?', a: 'ASTM B339 defines Grade A with specific impurity limits. We have not reproduced the figures here because the full standard is paywalled — we will confirm the certified analysis with each quotation.' },
    ],
    related: ['soft-solder', 'lead-bronze', 'zinc'],
    images: [
      { src: tin1, alt: 'Stacked refined tin ingots' },
      { src: tin2, alt: 'Pile of tin ingots' },
      { src: tin3, alt: 'Tin ingots stacked in three layers' },
    ],
    sourceIds: ['astm-b339', 'ita-2023'],
  },

  // ─────────────────────────────────────────── 6. SOLDER SOFT
  {
    slug: 'soft-solder',
    sourceName: 'SOLDER SOFT',
    name: 'Soft Solder',
    aliases: ['Solder soft', 'Solder metal', 'Tin-lead solder', 'Lead-free solder', 'Solder wire', 'Solder bar', 'ASTM B32'],
    family: 'solders-brazing',
    kind: 'Joining consumable',
    specialised: false,
    keyBenefit: 'Low-temperature joining (liquidus ≤ 430 °C) in tin-lead and lead-free alloys',
    summary: 'Tin-based soldering alloys for joining metals below their melting points, supplied as bars, ingots, wire and paste.',
    overview: [
      'Soft solders are tin-based joining alloys with a liquidus at or below 430 °C (800 °F), the boundary used by ASTM B32. The standard covers tin-lead, tin-antimony, tin-silver, tin-copper-silver and lead-tin-silver families, in bar, ingot, powder, solid wire, flux-cored wire and paste forms.',
      'ASTM B32 covers non-electronic applications. Electronic-grade solders are governed by IPC standards. The ITA estimates lead-free solders made up about 86% of electronics solder in 2022.',
    ],
    grades: [
      {
        designation: 'Tin-lead (Sn-Pb)',
        name: 'Conventional soft solder',
        composition: 'Alloy ratio to be specified (e.g. per ASTM B32 designations)',
        highlights: ['Covered by ASTM B32 for non-electronic use', 'Subject to lead restrictions in many end uses'],
        standards: ['ASTM B32'],
        status: 'verified',
        sourceIds: ['astm-b32'],
      },
      {
        designation: 'Lead-free (Sn-Ag, Sn-Cu-Ag)',
        name: 'Lead-free soft solder',
        composition: 'Alloy ratio to be specified',
        highlights: ['Dominant in electronics manufacture', 'Electronic grades fall under IPC rather than ASTM B32'],
        standards: ['ASTM B32 (non-electronic)', 'IPC (electronic grades)'],
        status: 'verified',
        sourceIds: ['astm-b32', 'ita-2023'],
      },
    ],
    typicalForms: ['Wire (solid or flux-cored)', 'Bar / stick', 'Ingot', 'Paste'],
    properties: [
      { label: 'Liquidus (scope of ASTM B32)', value: '≤ 430 °C', grade: 'All ASTM B32 solders', sourceId: 'astm-b32' },
    ],
    applications: ['Plumbing and sheet-metal joints', 'Electrical connections', 'Electronics assembly (IPC-grade alloys)', 'Radiator and heat-exchanger joints'],
    industries: ['electronics-plating', 'power-electrical'],
    limitations: ['Soft solder joints are weaker and lower-temperature than brazed (silver-solder) joints.', 'Lead-bearing solders are restricted for many electronics and potable-water uses — state the end use.'],
    safety: {
      title: 'Lead content',
      body: 'Tin-lead solders contain lead. OSHA links chronic occupational lead exposure to kidney, blood-pressure and nervous-system effects. Specify lead-free alloys where regulations require and request the SDS.',
      sourceIds: ['osha-lead'],
    },
    specifyChecklist: checklist('Alloy composition (e.g. tin-lead ratio or lead-free system)', 'Flux type and core, if flux-cored', 'Wire diameter or bar size'),
    faqs: [
      { q: 'How is soft solder different from silver solder?', a: 'Soft solder melts below about 430 °C. "Silver solder" normally means silver brazing alloy — for example BAg-7 melts at roughly 618–652 °C — giving stronger joints at higher temperatures.' },
    ],
    related: ['silver-solder', 'tin-ingot', 'lead'],
    images: [
      { src: solder1, alt: 'Spool of soft solder wire' },
      { src: solder2, alt: 'Bundle of solder sticks' },
      { src: solder3, alt: 'Stacked solder bars' },
    ],
    sourceIds: ['astm-b32', 'ita-2023', 'osha-lead'],
  },

  // ─────────────────────────────────────────── 7. TITANIUM
  {
    slug: 'titanium',
    sourceName: 'TITANIUM',
    name: 'Titanium',
    aliases: ['Commercially pure titanium', 'CP titanium', 'Grade 2', 'Grade 5', 'Ti-6Al-4V', 'R50400', 'R56400', 'ASTM B348'],
    family: 'titanium-aluminium',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Grade 2 for corrosion resistance, Grade 5 (Ti-6Al-4V) for high strength',
    summary: 'Commercially pure and alloyed titanium. Grade 2 is chosen for aggressive chloride environments, Grade 5 (Ti-6Al-4V) for strength.',
    overview: [
      'ASTM B348 covers titanium bar and billet in many grades. Grades 1–4 are unalloyed titanium of increasing strength. Grade 5 (UNS R56400) is the 6% aluminium, 4% vanadium alloy, and Grades 7, 11 and 16 add palladium for improved corrosion resistance.',
      'Grade 5 is the most widely used titanium grade and can be heat-treated to increase strength. Grade 2 is selected for corrosion resistance: it is virtually immune to wet chlorine at 10–80 °C and is specified for chloride media and high-temperature seawater.',
    ],
    grades: [
      {
        designation: 'Grade 2 (UNS R50400)',
        name: 'Unalloyed titanium',
        composition: 'Commercially pure titanium (limits per ASTM B348)',
        highlights: ['Outstanding corrosion resistance in chloride media', 'Grade 2H variant: min. UTS 400 MPa', 'Bleach-plant mixers, pipework, fasteners'],
        standards: ['ASTM B348'],
        status: 'verified',
        sourceIds: ['astm-b348', 'neonickel-ti'],
      },
      {
        designation: 'Grade 5 (UNS R56400)',
        name: 'Ti-6Al-4V',
        composition: 'Titanium alloy with nominal 6% Al, 4% V',
        highlights: ['Most widely used titanium grade', 'Heat-treatable alpha-beta alloy', 'Limited cold formability'],
        standards: ['ASTM B348'],
        status: 'verified',
        sourceIds: ['astm-b348', 'neonickel-ti'],
      },
      {
        designation: 'Grades 7 / 11 / 16',
        name: 'Palladium-bearing unalloyed titanium',
        composition: 'Unalloyed titanium with palladium addition (0.12–0.25% Pd for Grades 7 and 11)',
        highlights: ['Enhanced corrosion resistance', 'Confirm suitability for your medium with our team'],
        standards: ['ASTM B348'],
        status: 'verified',
        sourceIds: ['astm-b348'],
      },
    ],
    typicalForms: ['Round bar', 'Billet', 'Sheet & plate', 'Fasteners & machined parts'],
    properties: [
      { label: 'Minimum tensile strength', value: '400 MPa (58 ksi)', grade: 'Grade 2H', sourceId: 'astm-b348' },
    ],
    applications: ['Chemical-process equipment in chloride media', 'Seawater-service components', 'High-strength fasteners and machined parts (Grade 5)', 'Bleach-plant mixers and pipework (Grade 2)'],
    industries: ['marine', 'heavy-engineering'],
    limitations: ['Grade 2 and Grade 5 are not interchangeable — Grade 2 is chosen for corrosion and formability, Grade 5 for strength.', 'Corrosion behaviour depends on temperature, pH and flow velocity; crevice and stress-corrosion susceptibility must be assessed for the service.', 'Aerospace-certified titanium (AMS-specified) requires separate confirmation — ask our team.'],
    specifyChecklist: checklist('ASTM grade number (e.g. Grade 2, Grade 5) and any AMS/aerospace specification', 'Condition (annealed, heat-treated) and surface finish'),
    faqs: [
      { q: 'Should I choose Grade 2 or Grade 5?', a: 'Grade 2 is generally selected where aqueous corrosion resistance or formability is required. Grade 5 (Ti-6Al-4V) is chosen for strength. Tell us the service conditions and we will help you confirm.' },
    ],
    related: ['inconel', 'nickel', 'aluminium'],
    images: [
      { src: ti1, alt: 'Machined titanium components: flange, gear, washers and pin' },
      { src: ti2, alt: 'Titanium socket-head bolts' },
      { src: ti3, alt: 'Polished titanium round bars' },
    ],
    sourceIds: ['astm-b348', 'neonickel-ti'],
  },

  // ─────────────────────────────────────────── 8. ALUMINIUM
  {
    slug: 'aluminium',
    sourceName: 'ALUMINIUM',
    name: 'Aluminium',
    aliases: ['Aluminum', 'Al', '1350', '1100', '2024', '5083', '6061', '6063', '7075', 'Aluminium extrusions', 'ASTM B209'],
    family: 'titanium-aluminium',
    kind: 'Alloy family',
    specialised: false,
    keyBenefit: 'From high-conductivity 1350 to marine 5083 and aircraft-series 7xxx',
    summary: 'Aluminium and aluminium alloys across the wrought series — conductor grades, marine plate, structural extrusions and high-strength aircraft alloys.',
    overview: [
      'Wrought aluminium is designated by series. 1xxx alloys are ≥ 99% aluminium with excellent corrosion resistance and conductivity, for example 1350 for electrical applications. 2xxx (copper) and 7xxx (zinc) alloys are heat-treatable high-strength series used throughout the aircraft industry; 2024 is the classic aircraft alloy.',
      '5xxx (magnesium) alloys such as 5083 offer moderate-to-high strength, good weldability and corrosion resistance in the marine environment. 6xxx (magnesium-silicon) alloys are versatile, heat-treatable and weldable, and are the first choice for architectural and structural extrusions.',
    ],
    grades: [
      {
        designation: '1xxx (e.g. 1350, 1100)',
        name: 'Commercially pure aluminium',
        composition: 'Aluminium ≥ 99%',
        highlights: ['High electrical and thermal conductivity', '1350 for electrical applications', 'Non-heat-treatable'],
        status: 'verified',
        sourceIds: ['aa-alloys'],
      },
      {
        designation: '5xxx (e.g. 5083)',
        name: 'Aluminium-magnesium',
        composition: 'Magnesium as principal alloying element',
        highlights: ['Corrosion resistance in marine environment', 'Good weldability', 'Pressure vessels, storage tanks, marine'],
        status: 'verified',
        sourceIds: ['aa-alloys'],
      },
      {
        designation: '6xxx (e.g. 6061, 6063)',
        name: 'Aluminium-magnesium-silicon',
        composition: 'Silicon and magnesium',
        highlights: ['Heat-treatable, formable, weldable', 'First choice for architectural and structural extrusions'],
        status: 'verified',
        sourceIds: ['aa-alloys'],
      },
      {
        designation: '2xxx / 7xxx (e.g. 2024, 7075)',
        name: 'High-strength aircraft series',
        composition: 'Copper (2xxx) or zinc (7xxx) as principal alloying element',
        highlights: ['Heat-treatable, very high strength', '2xxx generally clad for atmospheric corrosion resistance'],
        status: 'verified',
        sourceIds: ['aa-alloys'],
      },
    ],
    typicalForms: ['Sheet & plate', 'Extrusions & profiles', 'Rod & bar', 'Ingot', 'Machined components'],
    properties: [],
    applications: ['Electrical conductors (1350)', 'Marine structures, tanks and pressure vessels (5xxx)', 'Architectural and structural extrusions (6xxx)', 'Aircraft structures (2xxx, 7xxx)'],
    industries: ['power-electrical', 'marine', 'aerospace-defence', 'heavy-engineering'],
    limitations: ['Mechanical properties depend on alloy and temper (e.g. -O, -H32, -T6). Always specify both.', 'Aerospace-specification material requires separate confirmation.'],
    specifyChecklist: checklist('Alloy and temper (e.g. 5083-H111, 6061-T6)', 'Product standard, e.g. ASTM B209 for sheet and plate'),
    faqs: [
      { q: 'Which aluminium is suitable for marine use?', a: 'The Aluminum Association identifies 5xxx alloys such as 5083 for marine applications thanks to their weldability and corrosion resistance in the marine environment.' },
    ],
    related: ['titanium', 'copper', 'zinc'],
    images: [
      { src: al1, alt: 'Aluminium extrusions: tubes, square sections and profiles' },
      { src: al2, alt: 'Stacked primary aluminium ingots' },
      { src: al3, alt: 'Machined aluminium turned parts' },
    ],
    sourceIds: ['aa-alloys', 'astm-b209'],
  },

  // ─────────────────────────────────────────── 9. NICKEL
  {
    slug: 'nickel',
    sourceName: 'NICKEL',
    name: 'Nickel (Nickel 200 / 201)',
    aliases: ['Pure nickel', 'Commercially pure nickel', 'Nickel 200', 'Nickel 201', 'N02200', 'N02201', 'Ni 99.2'],
    family: 'nickel-alloys',
    kind: 'Pure metal',
    specialised: true,
    keyBenefit: 'Exceptional resistance to caustic alkalis; low-carbon 201 for higher temperatures',
    summary: 'Commercially pure wrought nickel (≥ 99.2% Ni) for caustic-alkali processing, food handling and electrical components.',
    overview: [
      'Nickel 200 (UNS N02200) and Nickel 201 (UNS N02201) are unalloyed nickel with at least 99.2% Ni. They are known for excellent resistance in alkaline media, high ductility and good electrical and thermal conductivity, and they are ferromagnetic.',
      'Nickel 201 is the low-carbon version. VDM states it is preferable to Nickel 200 at service temperatures above 300 °C, because its reduced carbon practically eliminates grain-boundary attack above 315 °C.',
    ],
    grades: [
      {
        designation: 'Nickel 200 (UNS N02200)',
        name: 'Commercially pure nickel',
        composition: 'Ni ≥ 99.2%',
        highlights: ['Excellent resistance to caustic alkalis', 'Food processing, caustic soda production'],
        standards: ['ASTM B160 (rod & bar)'],
        status: 'verified',
        sourceIds: ['vdm-ni200', 'astm-b160'],
      },
      {
        designation: 'Nickel 201 (UNS N02201)',
        name: 'Low-carbon commercially pure nickel',
        composition: 'Ni ≥ 99.2%, reduced carbon',
        highlights: ['Preferred above ~300 °C', 'Higher ductility, lower work-hardening rate'],
        standards: ['ASTM B160 (rod & bar)'],
        status: 'verified',
        sourceIds: ['vdm-ni200', 'astm-b160'],
      },
    ],
    typicalForms: ['Rod & bar', 'Sheet & plate', 'Strip', 'Wire', 'Cathode / plating pieces'],
    properties: [
      { label: 'Nickel content (min.)', value: '99.2%', grade: 'Nickel 200 / 201', sourceId: 'vdm-ni200' },
    ],
    applications: ['Caustic soda production and handling', 'Food-processing equipment', 'Electrical and electronic components', 'Battery current conductors and electrode contacts', 'Electrodes for hydrogen production'],
    industries: ['heavy-engineering', 'electronics-plating', 'power-electrical'],
    limitations: ['Resistance to mineral acids varies by acid and conditions — confirm for your medium.', 'Nickel 200 is not preferred for service above roughly 300 °C; specify Nickel 201.'],
    specifyChecklist: checklist('Nickel 200 or 201 (service temperature)', 'Form — wrought product or plating-grade nickel'),
    faqs: [
      { q: 'Do you supply nickel for electroplating?', a: 'Plating-grade nickel (pieces, cathode squares) is a different product from wrought Nickel 200/201. Tell us your plating process and we will confirm sourcing.' },
    ],
    related: ['inconel', 'cupro-nickel-70-30', 'titanium'],
    images: [
      { src: ni1, alt: 'Pure nickel round bars' },
      { src: ni2, alt: 'Square nickel cathode pieces' },
      { src: ni3, alt: 'Lump of high-purity nickel metal' },
    ],
    sourceIds: ['vdm-ni200', 'astm-b160'],
  },

  // ─────────────────────────────────────────── 10. SILVER SOLDER
  {
    slug: 'silver-solder',
    sourceName: 'SILVER SOLDER',
    name: 'Silver Solder (Silver Brazing Alloys)',
    aliases: ['Silver brazing alloy', 'Silver braze', 'BAg', 'BAg-7', 'BAg-24', 'BAg-1', 'BCuP-5', 'Silver solder flux', 'AWS A5.8'],
    family: 'solders-brazing',
    kind: 'Joining consumable',
    specialised: false,
    keyBenefit: 'Strong, ductile brazed joints — cadmium-free grades available',
    summary: 'Silver-bearing brazing filler metals for strong joints in copper, brass, steel and stainless steel, with matching fluxes.',
    overview: [
      '"Silver solder" usually means silver brazing alloy: filler metals classified as BAg (and silver-bearing BCuP) under AWS A5.8. They melt well above soft solders. For example, BAg-7 (56Ag-22Cu-17Zn-5Sn) melts at about 618–652 °C.',
      'Grade selection depends on base metals and joint fit-up. Nickel-bearing BAg-24 is recommended for stainless steel. Copper-phosphorus-silver alloys such as BCuP-5 (15Ag-80Cu-5P) are used for copper-to-copper joints in refrigeration.',
    ],
    grades: [
      {
        designation: 'BAg-7',
        name: '56% silver, cadmium-free',
        composition: 'Ag 56%, Cu 22%, Zn 17%, Sn 5%',
        highlights: ['Low melting, very fluid', 'Melt–flow 618–652 °C (1145–1205 °F)', 'Cadmium-free'],
        standards: ['AWS A5.8'],
        status: 'secondary',
        sourceIds: ['lucas-brazing'],
      },
      {
        designation: 'BAg-24',
        name: '50% silver with nickel',
        composition: 'Ag 50%, Cu 20%, Zn 28%, Ni 2%',
        highlights: ['Recommended for stainless steel', 'Nickel improves wetting on base metal'],
        standards: ['AWS A5.8'],
        status: 'secondary',
        sourceIds: ['lucas-brazing'],
      },
      {
        designation: 'BCuP-5',
        name: '15% silver copper-phosphorus',
        composition: 'Ag 15%, Cu 80%, P 5%',
        highlights: ['High joint ductility', 'Copper-to-copper joints in refrigeration'],
        standards: ['AWS A5.8'],
        status: 'secondary',
        sourceIds: ['lucas-brazing'],
      },
      {
        designation: 'BAg-1',
        name: '45% silver, cadmium-bearing',
        composition: 'Ag 45%, Cu 15%, Zn 16%, Cd 24%',
        highlights: ['Contains cadmium — toxic fumes', 'Specify cadmium-free alternatives where possible'],
        standards: ['AWS A5.8'],
        status: 'secondary',
        sourceIds: ['lucas-brazing', 'osha-cadmium'],
      },
    ],
    typicalForms: ['Wire / coil', 'Rod (bare or flux-coated)', 'Strip', 'Brazing flux paste'],
    properties: [
      { label: 'Melt–flow range', value: '618–652 °C', grade: 'BAg-7', sourceId: 'lucas-brazing' },
    ],
    applications: ['Brazing copper, brass and steel assemblies', 'Stainless-steel joints (BAg-24)', 'Refrigeration and HVAC copper tube joints (BCuP)', 'Carbide tool tipping (confirm grade)'],
    industries: ['heavy-engineering', 'power-electrical'],
    limitations: ['BCuP (phosphorus-bearing) alloys are not generally recommended for ferrous or nickel-based base metals — confirm before use.'],
    safety: {
      title: 'Cadmium-bearing grades',
      body: 'Some silver brazing alloys (e.g. BAg-1) contain cadmium, and its fumes are toxic. Cadmium is regulated as an occupational hazard (OSHA). Specify cadmium-free grades such as BAg-7 or BAg-24 where possible and request the SDS.',
      sourceIds: ['lucas-brazing', 'osha-cadmium'],
    },
    specifyChecklist: checklist('AWS classification (e.g. BAg-7) or silver content', 'Base metals being joined', 'Bare, flux-coated or with separate flux'),
    faqs: [
      { q: 'Is silver solder the same as soft solder?', a: 'No. Silver "solder" is a brazing alloy melting at roughly 600 °C or more (BAg-7: ~618–652 °C), whereas soft solders melt below about 430 °C.' },
    ],
    related: ['soft-solder', 'copper', 'brass'],
    images: [
      { src: agSolder1, alt: 'Spools of silver brazing wire' },
      { src: agSolder2, alt: 'Bundle of silver brazing rods' },
    ],
    sourceIds: ['lucas-brazing', 'osha-cadmium'],
  },

  // ─────────────────────────────────────────── 11. ZINC
  {
    slug: 'zinc',
    sourceName: 'ZINC',
    name: 'Zinc',
    aliases: ['Zinc ingot', 'SHG zinc', 'Special High Grade zinc', 'Zinc anode', 'Zinc wire', 'ASTM B6', 'ASTM B418'],
    family: 'tin-zinc-lead',
    kind: 'Pure metal',
    specialised: false,
    keyBenefit: 'Graded purity for galvanizing and alloys; anode compositions for cathodic protection',
    summary: 'Primary zinc in ASTM B6 grades, plus galvanic zinc anodes for cathodic protection in seawater and soils.',
    overview: [
      'ASTM B6 specifies primary zinc in five grades: LME Grade, Special High Grade, High Grade, Intermediate Grade and Prime Western Grade. Continuous-galvanizing grades are covered separately by ASTM B852.',
      'Galvanic zinc anodes are a distinct product. ASTM B418 Type I anodes, which meet MIL-A-18001K, are used for cathodic protection in seawater and brackish water. Type II anodes are used in soils and other electrolytes.',
    ],
    grades: [
      {
        designation: 'ASTM B6 grades',
        name: 'LME / Special High / High / Intermediate / Prime Western',
        composition: 'Purity and impurity limits per grade — confirm against ASTM B6',
        highlights: ['Grade defines lead, iron, cadmium and other impurity limits'],
        standards: ['ASTM B6', 'ASTM B852 (galvanizing grades)'],
        status: 'verified',
        sourceIds: ['astm-b6'],
      },
      {
        designation: 'ASTM B418 Type I / Type II',
        name: 'Galvanic zinc anodes',
        composition: 'Type I meets MIL-A-18001K composition',
        highlights: ['Type I: seawater and brackish water', 'Type II: soils and other electrolytes'],
        standards: ['ASTM B418', 'MIL-A-18001K'],
        status: 'verified',
        sourceIds: ['astm-b418'],
      },
    ],
    typicalForms: ['Ingot / slab', 'Anodes (cast or wrought)', 'Wire (e.g. for thermal spray — confirm)', 'Rod'],
    properties: [],
    applications: ['Hot-dip and continuous galvanizing', 'Cathodic protection of hulls, piping and structures (anodes)', 'Alloy production (brass, die-casting alloys)', 'Thermal-spray metallizing (confirm grade)'],
    industries: ['marine', 'heavy-engineering'],
    limitations: ['Anode composition is controlled for electrochemical performance; ingot grades are not interchangeable with anode alloys.'],
    specifyChecklist: checklist('ASTM B6 grade or anode type (B418 Type I/II)', 'Anode shape, weight and insert/strap details (for anodes)'),
    faqs: [
      { q: 'Which zinc anode for seawater?', a: 'ASTM B418 Type I anodes, whose composition meets MIL-A-18001K, are most commonly used in seawater and brackish water.' },
    ],
    related: ['tin-ingot', 'lead', 'aluminium'],
    images: [
      { src: zn1, alt: 'Cast zinc rods' },
      { src: zn2, alt: 'Spools of zinc wire' },
      { src: zn3, alt: 'Stacked zinc ingots' },
    ],
    sourceIds: ['astm-b6', 'astm-b418'],
  },

  // ─────────────────────────────────────────── 12. LEAD
  {
    slug: 'lead',
    sourceName: 'LEAD (SHEET, INGOT, STRIP, SEAL, SHOTS)',
    name: 'Lead — Sheet, Ingot, Strip, Seal & Shots',
    aliases: ['Refined lead', 'Pure lead', 'Lead sheet', 'Lead ingot', 'Lead strip', 'Lead seal', 'Lead shots', 'Pb', 'ASTM B29'],
    family: 'tin-zinc-lead',
    kind: 'Pure metal',
    specialised: false,
    keyBenefit: 'Dense, corrosion-resistant metal for radiation shielding and acid-resistant linings',
    summary: 'Refined lead and lead products: sheet and strip for shielding and linings, ingots for alloying, seals and shots.',
    overview: [
      'ASTM B29 covers refined lead in pig, block or hog form in several grades: low-bismuth low-silver pure lead, refined pure lead, pure lead and chemical-copper lead.',
      'Lead sheet is used for radiation shielding (X-ray and gamma) in hospitals and laboratories, for roofing and flashing, and for protection against acids in storage and handling.',
    ],
    grades: [
      {
        designation: 'ASTM B29 grades',
        name: 'Pure lead / refined pure lead / chemical-copper lead',
        composition: 'Composition limits per grade — confirm against ASTM B29',
        highlights: ['Chemical-copper lead for chemical-resistant applications'],
        standards: ['ASTM B29'],
        status: 'verified',
        sourceIds: ['astm-b29'],
      },
    ],
    typicalForms: ['Sheet', 'Ingot', 'Strip', 'Seal', 'Shots'],
    properties: [],
    applications: ['Radiation shielding in hospitals and laboratories (sheet)', 'Roofing and flashing', 'Acid-resistant linings and tanks', 'Alloy and solder production (ingot)', 'Sealing (lead seals)'],
    industries: ['heavy-engineering'],
    limitations: ['Shielding thickness must be designed for the radiation source — we do not provide shielding design.'],
    safety: {
      title: 'Lead exposure and regulation',
      body: 'Lead is a regulated toxic metal. OSHA links chronic occupational exposure to kidney, cardiovascular and nervous-system effects. Handling, cutting or melting lead requires appropriate controls; request the SDS and check local restrictions for your application.',
      sourceIds: ['osha-lead'],
    },
    specifyChecklist: checklist('Product (sheet, ingot, strip, seal or shots) and size / thickness / weight', 'For shielding: required lead thickness or lead-equivalence from your designer'),
    faqs: [
      { q: 'Which forms are listed?', a: 'Our product list names lead sheet, ingot, strip, seal and shots. Sizes and current availability are confirmed per enquiry.' },
    ],
    related: ['tin-ingot', 'soft-solder', 'zinc'],
    images: [
      { src: pb1, alt: 'Rolls of lead sheet' },
      { src: pb2, alt: 'Stack of lead ingots' },
      { src: pb3, alt: 'Pile of lead shots and seals' },
    ],
    sourceIds: ['astm-b29', 'gravita-lead', 'osha-lead'],
  },

  // ─────────────────────────────────────────── 13. LEAD BRONZE
  {
    slug: 'lead-bronze',
    sourceName: 'LEAD BRONZE',
    name: 'Lead Bronze (Bearing Bronze)',
    aliases: ['Leaded tin bronze', 'High-leaded tin bronze', 'Bearing bronze', 'C93200', 'C93700'],
    family: 'brass-bronze',
    kind: 'Alloy family',
    specialised: false,
    keyBenefit: 'Anti-seizing, low-friction bearing alloy that machines easily',
    summary: 'High-leaded tin bronzes cast into bearings, bushings and wear parts where anti-seizing behaviour and machinability matter.',
    overview: [
      'Lead bronzes are cast copper-tin-lead alloys. The lead gives anti-seizing, low-friction behaviour under marginal lubrication and makes the alloy easy to machine. C93200, a high-leaded tin bronze, is a general-purpose bearing alloy (machinability rating 70).',
      'C93700, which CDA calls "Bearing Bronze", carries more tin and lead (each about 9–11%). It is used for high-speed, heavy-load bearings and pressure-tight castings.',
    ],
    grades: [
      {
        designation: 'C93200',
        name: 'High-leaded tin bronze',
        composition: 'Cu 81–85%, Sn 6.3–7.5%, Pb 6.0–8.0%, Zn 1.0–4.0%',
        highlights: ['General-purpose bushings and bearings', 'Machinability rating 70'],
        standards: ['ASTM B505/B505M', 'ASTM B271/B271M', 'ASTM B584', 'SAE J462'],
        status: 'verified',
        sourceIds: ['cda-c93200'],
      },
      {
        designation: 'C93700',
        name: 'Bearing Bronze',
        composition: 'Cu 78–82%, Sn 9.0–11.0%, Pb 8.0–11.0%',
        highlights: ['High-speed, heavy-load bearings', 'Pressure-tight castings', 'Machinability rating 80'],
        standards: ['ASTM B505/B505M', 'ASTM B271/B271M', 'ASTM B22/B22M', 'AMS 4827 / 4842'],
        status: 'verified',
        sourceIds: ['cda-c93700'],
      },
    ],
    typicalForms: ['Continuous-cast bar (solid & hollow)', 'Sand / centrifugal castings', 'Machined bushes'],
    properties: [
      { label: 'Machinability rating', value: '70', grade: 'C93200', sourceId: 'cda-c93200' },
      { label: 'Machinability rating', value: '80', grade: 'C93700', sourceId: 'cda-c93700' },
      { label: 'Electrical conductivity', value: '12% IACS', grade: 'C93200', sourceId: 'cda-c93200' },
      { label: 'Melting range', value: '854–977 °C', grade: 'C93200', sourceId: 'cda-c93200' },
    ],
    applications: ['Bearings and bushings for machinery, cranes and presses', 'Machine-tool and main-spindle bearings', 'Pump impellers and fittings', 'Pressure-tight castings'],
    industries: ['heavy-engineering'],
    limitations: ['Relatively low strength — not for high-stress structural parts.', 'Lead content may be restricted for some end uses.'],
    specifyChecklist: checklist('Grade (C93200 / C93700 or equivalent) and casting method', 'Bush OD / ID / length, or bar size'),
    faqs: [
      { q: 'Is lead bronze the same as phosphor bronze?', a: 'No. Lead bronzes contain substantial lead for anti-seizing bearing performance; phosphor bronzes are tin bronzes deoxidised with phosphorus. Confirm which you need.' },
    ],
    related: ['silicon-bronze', 'brass', 'tin-ingot'],
    images: [
      { src: pbBronze1, alt: 'Lead bronze block, hollow bar and round bar' },
      { src: pbBronze2, alt: 'Cast lead bronze bars' },
    ],
    sourceIds: ['cda-c93200', 'cda-c93700'],
  },

  // ─────────────────────────────────────────── 14. SILICON BRONZE
  {
    slug: 'silicon-bronze',
    sourceName: 'SILICON BRONZE',
    name: 'Silicon Bronze',
    aliases: ['High-silicon bronze', 'Silicon bronze A', 'C65500', 'C87300', 'C87600'],
    family: 'brass-bronze',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Strong, weldable bronze with salt-water and chemical corrosion resistance',
    summary: 'Copper-silicon alloys that combine strength, weldability and corrosion resistance, as wrought products and castings.',
    overview: [
      'Silicon bronzes are copper alloys with about 3–5% silicon. Wrought C65500 (High-Silicon Bronze A, Si 2.8–3.8%) offers high strength with good weldability and resistance to salt water, petrochemicals and paper-industry chemicals. It is used for fasteners, pole-line hardware, chemical equipment and marine hardware.',
      'Cast silicon bronzes such as C87300 and C87600 are used for valve bodies, bearings and engineering castings.',
    ],
    grades: [
      {
        designation: 'C65500',
        name: 'High-Silicon Bronze A (wrought)',
        composition: 'Si 2.8–3.8%, Mn 0.50–1.3%, Zn ≤ 1.5%, Fe ≤ 0.8%, Ni ≤ 0.6%, Cu remainder',
        highlights: ['High strength, weldable', 'Salt-water and chemical corrosion resistance', 'Fasteners, pole-line hardware, heat-exchanger tubes'],
        standards: ['ASTM B98/B98M', 'ASTM B96/B96M', 'ASTM B124/B124M', 'ASTM F467 / F468'],
        status: 'verified',
        sourceIds: ['cda-c65500'],
      },
      {
        designation: 'C87300',
        name: 'Silicon Bronze (cast)',
        composition: 'Cu ≥ 94.0%, Si 3.5–4.5%, Mn 0.8–1.5%',
        highlights: ['Cast components'],
        standards: ['ASTM B584', 'ASTM B271/B271M'],
        status: 'verified',
        sourceIds: ['cda-c87300'],
      },
      {
        designation: 'C87600',
        name: 'Copper-silicon alloy (cast)',
        composition: 'Cu ≥ 88.0%, Si 3.5–5.5%, Zn 4.0–7.0%',
        highlights: ['Valve bodies and stems, bearings'],
        standards: ['ASTM B584', 'ASTM B271/B271M'],
        status: 'verified',
        sourceIds: ['cda-c87600'],
      },
    ],
    typicalForms: ['Rod & bar', 'Sheet & plate', 'Welding wire', 'Castings'],
    properties: [
      { label: 'Electrical conductivity', value: '7% IACS', grade: 'C65500', sourceId: 'cda-c65500' },
      { label: 'Melting range', value: '971–1027 °C', grade: 'C65500', sourceId: 'cda-c65500' },
      { label: 'Specific gravity', value: '8.53', grade: 'C65500', sourceId: 'cda-c65500' },
    ],
    applications: ['Marine and chemical-plant fasteners', 'Pole-line hardware and electrical fittings', 'Pump, valve and bearing castings', 'Hydraulic-pressure lines and heat-exchanger tubes'],
    industries: ['marine', 'power-electrical', 'heavy-engineering'],
    limitations: ['Low conductivity (~7% IACS for C65500) — not a conductor alloy.'],
    specifyChecklist: checklist('Wrought or cast grade', 'For welding wire: AWS classification and spool size'),
    faqs: [
      { q: 'Why choose silicon bronze over brass?', a: 'Silicon bronze offers higher strength, good weldability and better resistance to salt water and many chemicals — at a higher cost than brass.' },
    ],
    related: ['lead-bronze', 'cupro-nickel-90-10', 'brass'],
    images: [
      { src: siBronze1, alt: 'Silicon bronze round bars' },
      { src: siBronze2, alt: 'Spool of silicon bronze welding wire' },
    ],
    sourceIds: ['cda-c65500', 'cda-c87300', 'cda-c87600'],
  },

  // ─────────────────────────────────────────── 15. CUPRO NICKEL 90/10
  {
    slug: 'cupro-nickel-90-10',
    sourceName: 'CUPRO NICKEL 90/10',
    name: 'Cupro-Nickel 90/10',
    aliases: ['Copper-nickel 90/10', 'C70600', '90-10 cupronickel', 'Copper-Nickel 10%'],
    family: 'copper-nickel',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Seawater corrosion and biofouling resistance for marine piping and condensers',
    summary: 'Copper-nickel alloy with 10% nickel and controlled iron, widely used for seawater piping, condensers and heat exchangers.',
    overview: [
      'C70600 (Copper-Nickel, 10%) contains 9–11% nickel and 1.0–1.8% iron. It resists corrosion in fresh and salt water and resists biofouling. CDA lists seawater pipe fittings, condensers, evaporator and heat-exchanger tubes, boat hulls and salt-water baffles among its uses.',
      '90/10 is usually more economical than 70/30. 70/30 is selected where higher strength or more demanding seawater conditions justify it.',
    ],
    grades: [
      {
        designation: 'C70600',
        name: 'Copper-Nickel, 10%',
        composition: 'Ni 9.0–11.0%, Fe 1.0–1.8%, Mn ≤ 1.0%, Zn ≤ 1.0%, Pb ≤ 0.05%, Cu remainder',
        highlights: ['Seawater corrosion resistance', 'Fouling resistance', 'Condenser, heat-exchanger and seawater piping'],
        standards: ['ASTM B111/B111M', 'ASTM B122/B122M', 'ASTM B151/B151M', 'ASTM B466/B466M', 'ASTM B467', 'ASTM B171/B171M'],
        status: 'verified',
        sourceIds: ['cda-c70600'],
      },
    ],
    typicalForms: ['Seamless tube & pipe', 'Welded pipe', 'Plate & sheet', 'Rod & bar', 'Flanges & fittings'],
    properties: [
      { label: 'Electrical conductivity', value: '9% IACS', grade: 'C70600', sourceId: 'cda-c70600' },
      { label: 'Melting range', value: '1099–1149 °C', grade: 'C70600', sourceId: 'cda-c70600' },
      { label: 'Specific gravity', value: '8.94', grade: 'C70600', sourceId: 'cda-c70600' },
    ],
    applications: ['Seawater piping systems and fittings', 'Condensers, evaporators and heat-exchanger tubes', 'Desalination and distiller tubes', 'Boat hulls and salt-water baffles', 'Brake lines (automotive)'],
    industries: ['marine', 'power-electrical'],
    limitations: ['90/10 and 70/30 are not interchangeable — confirm the grade required by your design code or drawing.'],
    specifyChecklist: checklist('Pipe/tube OD and wall (or schedule), length', 'Product standard (e.g. ASTM B111 tube, B466 pipe, B171 plate)'),
    faqs: [
      { q: '90/10 or 70/30?', a: 'Both resist seawater. 70/30 (C71500) has 29–33% nickel, higher strength and is listed for corrosion resistance to 700 °F. 90/10 (C70600) is the more widely used economical choice. Your design code or drawing should govern.' },
    ],
    related: ['cupro-nickel-70-30', 'silicon-bronze', 'nickel'],
    images: [
      { src: cuni9010a, alt: 'Cupro-nickel 90/10 flanges and pipe fittings' },
      { src: cuni9010b, alt: 'Cupro-nickel elbows, tees and pipe fittings' },
      { src: cuni9010c, alt: 'Cupro-nickel round bars' },
    ],
    sourceIds: ['cda-c70600'],
  },

  // ─────────────────────────────────────────── 16. CUPRO NICKEL 70/30
  {
    slug: 'cupro-nickel-70-30',
    sourceName: 'CUPRO NICKEL 70/30',
    name: 'Cupro-Nickel 70/30',
    aliases: ['Copper-nickel 70/30', 'C71500', '70-30 cupronickel', 'Copper-Nickel 30%'],
    family: 'copper-nickel',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Higher nickel for stronger, more demanding seawater and condenser service',
    summary: 'Copper-nickel with 30% nickel for seawater condensers, pump components and high-duty marine piping.',
    overview: [
      'C71500 (Copper-Nickel, 30%) contains 29–33% nickel with 0.40–1.0% iron. CDA lists it for seawater condensers, pump bodies and internal parts in seawater, salt-water flanges and piping, and corrosion resistance to 700 °F (≈ 370 °C).',
      'Compared with 90/10 it has higher nickel and strength, and it is used where service conditions are more demanding.',
    ],
    grades: [
      {
        designation: 'C71500',
        name: 'Copper-Nickel, 30%',
        composition: 'Ni 29.0–33.0%, Fe 0.40–1.0%, Mn ≤ 1.0%, Zn ≤ 1.0%, Pb ≤ 0.05%, Cu remainder',
        highlights: ['Seawater condensers and pump parts', 'Corrosion resistance to 700 °F', 'Weld wire and backing rings'],
        standards: ['ASTM B111/B111M', 'ASTM B122/B122M', 'ASTM B151/B151M', 'ASTM B466/B466M', 'ASTM B171/B171M', 'AWS A5.6 (filler)'],
        status: 'verified',
        sourceIds: ['cda-c71500'],
      },
    ],
    typicalForms: ['Seamless tube & pipe', 'Plate & sheet', 'Rod & bar', 'Fasteners & fittings'],
    properties: [
      { label: 'Electrical conductivity', value: '4.6% IACS', grade: 'C71500', sourceId: 'cda-c71500' },
      { label: 'Melting range', value: '1171–1238 °C', grade: 'C71500', sourceId: 'cda-c71500' },
      { label: 'Specific gravity', value: '8.94', grade: 'C71500', sourceId: 'cda-c71500' },
    ],
    applications: ['Seawater condensers and heat exchangers', 'Pump bodies and internal parts in seawater', 'Salt-water flanges, fittings and piping', 'Boiler and process equipment'],
    industries: ['marine', 'power-electrical', 'heavy-engineering'],
    limitations: ['Not a drop-in replacement for 90/10 without engineering review.'],
    specifyChecklist: checklist('Pipe/tube OD and wall, or plate thickness', 'Product standard and any naval / class-society requirement'),
    faqs: [
      { q: 'Is 70/30 always better than 90/10?', a: 'Not necessarily. 70/30 has higher nickel and strength, but 90/10 is widely specified and more economical. The right choice depends on the design code, flow and temperature.' },
    ],
    related: ['cupro-nickel-90-10', 'nickel', 'inconel'],
    images: [
      { src: cuni7030a, alt: 'Cupro-nickel 70/30 forged fittings' },
      { src: cuni7030b, alt: 'Cupro-nickel 70/30 bolts, nuts and fasteners' },
      { src: cuni7030c, alt: 'Large-diameter cupro-nickel 70/30 tubes' },
    ],
    sourceIds: ['cda-c71500'],
  },

  // ─────────────────────────────────────────── 17. PHOSPHOROUS COPPER ANODE
  {
    slug: 'phosphorus-copper-anode',
    sourceName: 'PHOSPHOROUS COPPER ANODE',
    name: 'Phosphorised Copper Anode',
    aliases: ['Phosphorous copper anode', 'Phosphorus copper anode', 'Phosphorized copper anode', 'Acid copper anode', 'Copper anode balls', 'Copper nuggets'],
    editorialNote: 'Listed as "Phosphorous Copper Anode" in the source document. The industry term is phosphorised (phosphorus-deoxidised) copper anode. It is a different product from "phosphor copper" master alloy and from phosphor bronze.',
    family: 'copper-alloys',
    kind: 'Plating anode',
    specialised: true,
    keyBenefit: 'Controlled 0.04–0.06% P forms a stable anode film for low-sludge acid copper plating',
    summary: 'Copper anodes with a controlled phosphorus content for acid copper sulphate electroplating, including PCB plating.',
    overview: [
      'In acid copper plating, anodes with a small, controlled phosphorus content form an adherent film that helps keep dissolution even and limits sludge. Luvata specifies its phosphorous copper anodes at P 0.04–0.06% and lists PCB plating and acid copper baths as their main uses.',
      'Oxygen-free copper anodes, by contrast, are used for alkaline cyanide and pyrophosphate baths. Anodes are made in several shapes, including balls, slugs, mini-slugs, plates, ovals, hexagonals and dogbones.',
    ],
    grades: [
      {
        designation: 'Phosphorised copper anode',
        name: 'Acid copper plating anode',
        composition: 'High-purity copper with P 0.04–0.06% (producer specification)',
        highlights: ['Acid copper sulphate baths', 'PCB through-hole and panel plating', 'Low sludge development'],
        status: 'verified',
        sourceIds: ['luvata-anodes'],
      },
      {
        designation: 'C12200 (DHP) reference',
        name: 'Phosphorus-deoxidised copper',
        composition: 'Cu ≥ 99.9%, P 0.015–0.040%',
        highlights: ['CDA lists "anodes for electroplating" among C12200 uses', 'Lower P than typical acid-plating anode spec — confirm with your plating chemistry supplier'],
        status: 'verified',
        sourceIds: ['cda-c12200'],
      },
    ],
    typicalForms: ['Balls', 'Nuggets / slugs', 'Plates & bars', 'Ovals', 'Dogbones'],
    properties: [
      { label: 'Phosphorus content', value: '0.04–0.06%', grade: 'Luvata phosphorous copper anode', sourceId: 'luvata-anodes' },
    ],
    applications: ['Printed circuit board (PCB) plating', 'Acid copper sulphate electroplating', 'Decorative plating', 'Rotogravure cylinders'],
    industries: ['electronics-plating'],
    limitations: ['Not for alkaline cyanide or pyrophosphate copper baths — oxygen-free anodes are used there.'],
    specifyChecklist: checklist('Plating bath type (acid sulphate, PCB) and required P range', 'Anode shape and size (ball diameter, nugget size, plate dimensions)', 'Basket or hook mounting'),
    faqs: [
      { q: 'Why is phosphorus added?', a: 'A controlled phosphorus content (e.g. 0.04–0.06%) helps form a stable anode film in acid copper baths, supporting even dissolution and low sludge.' },
      { q: 'Is this the same as phosphor copper?', a: 'No. "Phosphor copper" usually refers to a copper-phosphorus master alloy with much higher phosphorus, used in foundries. Confirm which product you need.' },
    ],
    related: ['copper', 'nickel', 'tin-ingot'],
    images: [
      { src: anode1, alt: 'Stacks of phosphorised copper anode plates' },
      { src: anode2, alt: 'Copper anode bars with hanging holes' },
    ],
    sourceIds: ['luvata-anodes', 'cda-c12200'],
  },

  // ─────────────────────────────────────────── 18. INCONEL
  {
    slug: 'inconel',
    sourceName: 'INCONEL',
    name: 'Inconel® Nickel-Chromium Alloys',
    aliases: ['Inconel', 'Nickel superalloy', 'Alloy 600', 'Alloy 625', 'Alloy 718', 'N06600', 'N06625', 'N07718', '2.4816', '2.4856', '2.4668'],
    editorialNote: 'INCONEL® is a registered trademark of the Special Metals Corporation group. Equivalent alloys are produced by other mills under UNS numbers; confirm whether you need trademarked material.',
    family: 'nickel-alloys',
    kind: 'Alloy family',
    specialised: true,
    keyBenefit: 'Strength and corrosion resistance from cryogenic to high-temperature service',
    summary: 'Nickel-chromium superalloys — 600 for heat and furnace service, 625 for severe corrosion, 718 for precipitation-hardened strength.',
    overview: [
      '"Inconel" is a family, not one material. Alloy 600 (UNS N06600) is a nickel-chromium-iron alloy that can only be strengthened by cold work. It is widely used in furnace and heat-treating equipment such as retorts, muffles and wire belts.',
      'Alloy 625 (UNS N06625) is a solid-solution Ni-Cr-Mo-Nb alloy with almost no attack in seawater and resistance to a wide range of severe corrosive environments. Alloy 718 (UNS N07718) is precipitation-hardened for high strength; it is referenced in AMS 5596/5597 and produced for oil-field use under NACE MR0175.',
    ],
    grades: [
      {
        designation: 'Alloy 600 (UNS N06600, W.Nr. 2.4816)',
        name: 'Nickel-chromium-iron',
        composition: 'Ni-Cr-Fe alloy — confirm limits against ASTM B168 / producer data',
        highlights: ['Oxidation resistance in furnace atmospheres', 'Strengthened by cold work only'],
        standards: ['ASTM B168 (plate, sheet, strip)'],
        status: 'verified',
        sourceIds: ['sm-600', 'astm-b168'],
      },
      {
        designation: 'Alloy 625 (UNS N06625, W.Nr. 2.4856)',
        name: 'Nickel-chromium-molybdenum-niobium',
        composition: 'Ni ≥ 58.0%, Cr 20.0–23.0%, Mo 8.0–10.0%, Nb + Ta 3.15–4.15%, Fe ≤ 5.0%',
        highlights: ['Almost no attack in seawater and neutral salts', 'Density 8.44 g/cm³', 'Grade 1 (annealed) / Grade 2 (solution annealed)'],
        standards: ['ASTM B446 (rod & bar)'],
        status: 'verified',
        sourceIds: ['sm-625', 'astm-b446'],
      },
      {
        designation: 'Alloy 718 (UNS N07718, W.Nr. 2.4668)',
        name: 'Precipitation-hardenable nickel-chromium',
        composition: 'Ni-Cr-Nb-Mo alloy — confirm limits against producer data',
        highlights: ['Specified solution-annealed and precipitation-hardened', 'AMS 5596 / 5597 references', 'NACE MR0175 oil-field material (max 40 HRC)'],
        standards: ['ASTM B637 (bars, forgings)', 'AMS 5596 / 5597', 'NACE MR0175'],
        status: 'verified',
        sourceIds: ['sm-718', 'astm-b637'],
      },
    ],
    typicalForms: ['Round bar', 'Plate & sheet', 'Pipe & tube', 'Wire', 'Forgings & rings', 'Fasteners'],
    properties: [
      { label: 'Density', value: '8.44 g/cm³', grade: 'Alloy 625', sourceId: 'sm-625' },
      { label: 'Melting range', value: '1290–1350 °C', grade: 'Alloy 625', sourceId: 'sm-625' },
    ],
    applications: ['Furnace retorts, muffles and heat-treating fixtures (600)', 'Seawater and chemical-process components (625)', 'High-strength fasteners and rotating parts (718)', 'Oil and gas components to NACE MR0175 (718)'],
    industries: ['aerospace-defence', 'marine', 'heavy-engineering'],
    limitations: ['Alloys 600, 625 and 718 differ fundamentally — never substitute one for another without engineering approval.', 'Properties of 718 depend on the specified heat-treatment sequence.'],
    specifyChecklist: checklist('Alloy number and UNS (600 / 625 / 718 or other)', 'Heat-treatment condition and any AMS / NACE requirement', 'Whether trademarked INCONEL® material is mandatory'),
    faqs: [
      { q: 'Is all Inconel the same?', a: 'No. INCONEL® is a trademarked family. Alloy 600, 625 and 718 have different compositions, strengthening mechanisms and uses.' },
    ],
    related: ['nickel', 'titanium', 'cupro-nickel-70-30'],
    images: [
      { src: inconel1, alt: 'Nickel alloy round bar, plate, ring, tube and wire coil' },
      { src: inconel2, alt: 'Assorted nickel alloy bolts and fasteners' },
    ],
    sourceIds: ['sm-600', 'sm-625', 'sm-718', 'astm-b168', 'astm-b446', 'astm-b637'],
  },
];

export const PRODUCT_BY_SLUG: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p]),
);

export const FAMILIES: { id: Product['family']; label: string }[] = [
  { id: 'copper-alloys', label: 'Copper & High-Copper Alloys' },
  { id: 'brass-bronze', label: 'Brass & Bronze' },
  { id: 'copper-nickel', label: 'Copper-Nickel' },
  { id: 'nickel-alloys', label: 'Nickel & Nickel Alloys' },
  { id: 'titanium-aluminium', label: 'Titanium & Aluminium' },
  { id: 'tin-zinc-lead', label: 'Tin, Zinc & Lead' },
  { id: 'solders-brazing', label: 'Solders & Brazing Alloys' },
];

export const familyLabel = (id: Product['family']) =>
  FAMILIES.find((f) => f.id === id)?.label ?? id;
