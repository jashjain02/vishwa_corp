// ============================================================
// Research record — every technical claim in data/products.ts
// cites one of these by id. All sources were opened and read on
// the date in `checked`; paywalled standards were read only to
// the extent of their public scope/abstract (see `limitation`).
// ============================================================

import type { ResearchSource } from '../types/catalogue';

const CHECKED = '2026-10-14';
const ASTM_LIMIT = 'Full standard is paywalled — only the public abstract and scope on astm.org were read. Composition tables were not accessed.';

const cda = (uns: string, name: string, supports: string): ResearchSource => ({
  id: `cda-${uns.toLowerCase()}`,
  organisation: 'Copper Development Association Inc. (CDA)',
  title: `${uns} — ${name} (CDA alloy database)`,
  url: `https://alloys.copper.org/alloy/${uns}`,
  supports,
  status: 'verified',
  checked: CHECKED,
});

const astm = (code: string, slug: string, title: string, supports: string): ResearchSource => ({
  id: `astm-${code.toLowerCase()}`,
  organisation: 'ASTM International',
  title: `ASTM ${code} — ${title}`,
  url: `https://www.astm.org/${slug}.html`,
  supports,
  status: 'verified',
  checked: CHECKED,
  limitation: ASTM_LIMIT,
});

export const SOURCES: ResearchSource[] = [
  // ── Copper & copper alloys (CDA) ──
  cda('C10100', 'Oxygen-Free Electronic (OFE)', 'Composition limits, min. 101% IACS conductivity, electron-device and vacuum applications, ASTM F68 / B152 / B187 listings'),
  cda('C10200', 'Oxygen-Free (OF)', 'Composition limits, conductivity, busbar and waveguide applications, resistance to hydrogen embrittlement during brazing/welding'),
  cda('C11000', 'Electrolytic Tough Pitch (ETP)', 'Composition (Cu ≥ 99.90%), min. 100% IACS in annealed condition, busbar/conductor/roofing applications'),
  cda('C12200', 'Phosphorus-Deoxidized, High Residual P (DHP)', 'Composition (P 0.015–0.040%), 85% IACS, tube applications, listed use as anodes for electroplating'),
  cda('C14500', 'Tellurium-Bearing Copper', 'Verified identity of "Terilium Copper" as tellurium copper; Te 0.40–0.7%, 93% IACS, machinability rating 85, connector/switch/welding-tip applications'),
  cda('C17200', 'Copper Beryllium', 'Be 1.80–2.00%, heat-treatable high-strength alloy, springs/connectors/bearings, AMS & ASTM B196/B194 listings'),
  cda('C17510', 'Copper Beryllium (high-conductivity)', 'Be 0.2–0.6%, Ni 1.4–2.2%, 48% IACS, welding-equipment and connector applications'),
  cda('C26000', 'Cartridge Brass, 70%', 'Cu 68.5–71.5%, formability, radiator, hardware and electrical-socket applications'),
  cda('C36000', 'Free-Cutting Brass', 'Cu 60–63%, Pb 2.5–3.0%, machinability rating 100 (reference alloy), screw-machine parts, fittings, valves'),
  cda('C46400', 'Naval Brass, Uninhibited', 'Cu 59–62%, Sn 0.50–1.0%, salt-water corrosion resistance, shipboard equipment, fasteners'),
  cda('C65500', 'High-Silicon Bronze A', 'Si 2.8–3.8%, salt-water and chemical corrosion resistance, weldability, fasteners, pole-line hardware'),
  cda('C87300', 'Silicon Bronze (cast)', 'Cast silicon bronze composition (Si 3.5–4.5%), ASTM B584 / B271 listings'),
  cda('C87600', 'Copper-Silicon Alloy (cast)', 'Cast composition, valve bodies, bearings, engineering castings'),
  cda('C70600', 'Copper-Nickel, 10%', 'Ni 9–11%, Fe 1.0–1.8%, seawater piping, condensers, heat-exchanger tubes, fouling resistance'),
  cda('C71500', 'Copper-Nickel, 30%', 'Ni 29–33%, seawater condensers, pump bodies, salt-water piping, corrosion resistance to 700 °F'),
  cda('C93200', 'High-Leaded Tin Bronze', 'Cu 81–85%, Sn 6.3–7.5%, Pb 6–8%, bearings and bushings, anti-seizing properties'),
  cda('C93700', 'Bearing Bronze', 'Cu 78–82%, Sn 9–11%, Pb 8–11%, high-speed heavy-load bearings, pressure-tight castings'),

  // ── ASTM specification scopes ──
  astm('B339', 'b0339-19', 'Standard Specification for Pig Tin', 'Refined pig tin specified as a single grade, Grade A'),
  astm('B32', 'b0032-20', 'Standard Specification for Solder Metal', 'Soft-solder alloy families covered, liquidus ≤ 430 °C, forms (bar, ingot, wire, paste); electronic-grade solders fall under IPC'),
  astm('B6', 'b0006-18', 'Standard Specification for Zinc', 'Five zinc grades: LME, Special High Grade, High Grade, Intermediate, Prime Western; galvanizing grades in B852'),
  astm('B418', 'b0418-16a', 'Standard Specification for Cast and Wrought Galvanic Zinc Anodes', 'Zinc anodes for cathodic protection in seawater (Type I, meets MIL-A-18001K) and soils (Type II)'),
  astm('B29', 'b0029-19', 'Standard Specification for Refined Lead', 'Refined lead grades and pig/block/hog forms'),
  astm('B348', 'b0348_b0348m-21', 'Titanium and Titanium Alloy Bars and Billets', 'Titanium grade list with UNS numbers; Grade 2H minimum UTS 400 MPa'),
  astm('B209', 'b0209_b0209m-21a', 'Aluminum and Aluminum-Alloy Sheet and Plate', 'Standard covering aluminium sheet and plate'),
  astm('B160', 'b0160-05r19', 'Nickel Rod and Bar', 'Nickel UNS N02200, N02201, N02211 rod and bar'),
  astm('B446', 'b0446-19', 'Ni-Cr-Mo-Nb Alloy (UNS N06625) Rod and Bar', 'UNS N06625 rod/bar in Grade 1 (annealed) and Grade 2 (solution annealed)'),
  astm('B637', 'b0637-18', 'Precipitation-Hardening Nickel Alloy Bars, Forgings and Forging Stock', 'Precipitation-hardenable nickel alloys for high-temperature service'),
  astm('B168', 'b0168-19', 'Ni-Cr-Fe Alloy Plate, Sheet and Strip', 'UNS N06600 plate, sheet and strip'),

  // ── Nickel alloys ──
  {
    id: 'sm-625',
    organisation: 'Special Metals Corporation',
    title: 'INCONEL® alloy 625 technical bulletin',
    url: 'https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf',
    supports: 'UNS N06625 / W.Nr. 2.4856, limiting composition, density 8.44 g/cm³, melting range 1290–1350 °C, corrosion resistance in seawater and aggressive media',
    status: 'verified',
    checked: CHECKED,
  },
  {
    id: 'sm-718',
    organisation: 'Special Metals Corporation',
    title: 'INCONEL® alloy 718 technical bulletin',
    url: 'https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf',
    supports: 'UNS N07718 / W.Nr. 2.4668, specified solution-annealed and precipitation-hardened, AMS 5596/5597 references, NACE MR0175 oil-field material (max 40 HRC)',
    status: 'verified',
    checked: CHECKED,
  },
  {
    id: 'sm-600',
    organisation: 'Special Metals Corporation',
    title: 'INCONEL® alloy 600 technical bulletin',
    url: 'https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-600.pdf',
    supports: 'UNS N06600 / W.Nr. 2.4816, strengthened only by cold work, furnace and heat-treating applications (retorts, muffles, wire belts)',
    status: 'verified',
    checked: CHECKED,
  },
  {
    id: 'vdm-ni200',
    organisation: 'VDM Metals',
    title: 'VDM® Nickel 200 and 201 material data sheet No. 1101 (rev. 02, March 2022)',
    url: 'https://alloy59.de/fileadmin/user_upload/Downloads/Data_Sheets/Data_Sheet_VDM_Nickel_200_201.pdf',
    supports: 'Ni ≥ 99.2%, Nickel 201 as the low-carbon version preferred above 300 °C, alkaline-media resistance, caustic soda, food, electrical/electronic and battery applications',
    status: 'verified',
    checked: CHECKED,
  },

  // ── Titanium & aluminium ──
  {
    id: 'neonickel-ti',
    organisation: 'NeoNickel (distributor)',
    title: 'Titanium Grade 5 vs Titanium Grade 2',
    url: 'https://www.neonickel.com/technical-resources/titanium-grade-5-vs-titanium-grade-2-comparison-between-the-alpha-beta-alloy-and-the-workhorse-of-commercially-pure-grade',
    supports: 'Grade 5 is the most widely used titanium grade and heat-treatable; Grade 2 has outstanding corrosion resistance (wet chlorine, high-temperature seawater, chloride media)',
    status: 'secondary',
    checked: CHECKED,
    limitation: 'Distributor guidance; the page states it is not a technical specification.',
  },
  {
    id: 'aa-alloys',
    organisation: 'The Aluminum Association',
    title: 'Aluminum Alloys 101 (alloy designation infographic)',
    url: 'https://www.aluminum.org/aluminum-alloys-101',
    supports: 'Wrought series characteristics: 1xxx ≥ 99% Al (1350 electrical), 2xxx (2024 aircraft), 5xxx marine (5083), 6xxx architectural/structural extrusions, 7xxx aircraft; heat-treatable vs non-heat-treatable',
    status: 'verified',
    checked: CHECKED,
  },

  // ── Tin, solder, brazing ──
  {
    id: 'ita-2023',
    organisation: 'International Tin Association',
    title: 'ITA tin use survey press release (Oct 2023)',
    url: 'https://www.internationaltin.org/wp-content/uploads/2023/10/PR-ITA-Study-Macro-pressure-rolls-back-tin-demand-17-10-TUS2023-1.pdf',
    supports: 'Solder and tinplate as major tin uses; lead-free solders ≈ 86% of electronics solder in 2022; trend to low-lead tin specifications',
    status: 'verified',
    checked: CHECKED,
  },
  {
    id: 'lucas-brazing',
    organisation: 'Trane Technologies (reproducing Lucas-Milhaupt filler-metal data)',
    title: 'Brazing alloys selection literature RSP-SLB171-EN',
    url: 'https://elibrary.tranetechnologies.com/public/trane-history-b/Literature/Sales/RSP-SLB171-EN_07062020.pdf',
    supports: 'BAg-7 (56Ag-22Cu-17Zn-5Sn, Cd-free, 618–652 °C), BAg-24 (Ni-bearing, for stainless), BAg-1 (Cd-bearing, toxic fumes warning), BCuP-5 (15Ag-80Cu-5P)',
    status: 'secondary',
    checked: CHECKED,
    limitation: 'OEM literature reproducing a producer table; confirm against the producer datasheet before specifying.',
  },

  // ── Plating anodes ──
  {
    id: 'luvata-anodes',
    organisation: 'Luvata (anode producer)',
    title: 'Copper anodes — oxygen-free and phosphorous copper anodes',
    url: 'https://www.luvata.com/products/anodes',
    supports: 'Phosphorous copper anodes contain P 0.04–0.06% and are used for PCB and acid copper plating; oxygen-free anodes for cyanide/pyrophosphate baths; anode shapes (balls, slugs, plates, ovals, dogbones)',
    status: 'verified',
    checked: CHECKED,
  },

  // ── Lead ──
  {
    id: 'gravita-lead',
    organisation: 'Gravita India Ltd (lead producer)',
    title: 'Lead sheet for X-ray radiation shielding',
    url: 'https://www.gravitaindia.com/lead-sheets/lead-sheet-x-ray-radiation-shielding',
    supports: 'Lead sheet applications: radiation shielding (X-ray, gamma) in hospitals and laboratories; roofing and flashing; acid corrosion protection',
    status: 'secondary',
    checked: CHECKED,
  },

  // ── Health & safety ──
  {
    id: 'osha-beryllium',
    organisation: 'US Occupational Safety and Health Administration (OSHA)',
    title: 'Beryllium — Health Effects',
    url: 'https://www.osha.gov/beryllium/health-effects',
    supports: 'Exposure by inhalation of airborne beryllium or skin contact with beryllium-containing dust, fume, mist or solutions; chronic beryllium disease and lung cancer',
    status: 'verified',
    checked: CHECKED,
  },
  {
    id: 'osha-lead',
    organisation: 'US Occupational Safety and Health Administration (OSHA)',
    title: 'Lead — Health Effects',
    url: 'https://www.osha.gov/lead/health-effects',
    supports: 'Chronic occupational lead exposure effects (kidney, blood pressure, nervous system)',
    status: 'verified',
    checked: CHECKED,
  },
  {
    id: 'osha-cadmium',
    organisation: 'US Occupational Safety and Health Administration (OSHA)',
    title: 'Cadmium — Overview',
    url: 'https://www.osha.gov/cadmium',
    supports: 'Cadmium as a regulated occupational hazard used in alloys and coatings',
    status: 'verified',
    checked: CHECKED,
  },
];

export const SOURCE_BY_ID: Record<string, ResearchSource> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s]),
);
