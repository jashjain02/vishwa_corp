// ============================================================
// Image provenance register.
// Industry panels: public-domain / CC0 photographs from Wikimedia Commons
// (no attribution legally required; credited here as good practice).
// Product photos: supplied by the business in "ALL METAL ITEM.docx".
// Their original source and licence are NOT recorded in that document —
// the business must confirm usage rights before public launch, or replace them.
// ============================================================

export interface ImageCredit {
  file: string;
  subject: string;
  author: string;
  licence: string;
  sourceUrl?: string;
  note?: string;
}

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    file: 'assets/images/industries/marine.jpg',
    subject: "RMS Olympic's propellers in dry dock",
    author: 'Harland & Wolff Shipyard',
    licence: 'Public domain',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:RMS_Olympic%27s_propellers.jpg",
  },
  {
    file: 'assets/images/industries/aerospace.jpg',
    subject: 'Kepler mission Delta II liftoff',
    author: 'NASA / Regina Mitchell-Ryall, Tom Farrar',
    licence: 'Public domain (NASA)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kepler_mission_Delta_II_liftoff.jpg',
    note: 'NASA imagery must not be used to imply NASA endorsement.',
  },
  {
    file: 'assets/images/industries/power.jpg',
    subject: 'Anchor pylon of a 750 kV overhead power line',
    author: 'Novoklimov',
    licence: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anchor_pylon_of_high-voltage_overhead_power_line_750_kV.jpg',
  },
  {
    file: 'assets/images/industries/railways.jpg',
    subject: 'Axle and wheels of a railway locomotive, Islington Railway Workshops',
    author: 'State Government Photographer (South Australia)',
    licence: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Axle_and_wheels_railway_locomotive_-_Islington_Railway_workshop(GN13087A).jpg',
  },
  {
    file: 'assets/images/industries/electronics.jpg',
    subject: 'Circuit-board soldering (cropped to hands and board)',
    author: 'U.S. Navy photo by MCSN John Wagner',
    licence: 'Public domain (U.S. Navy)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:US_Navy_070129-N-3038W-073_Electronics_Technician_3rd_Class_Christopher_Ralph_makes_repairs_with_a_soldering_iron_on_a_circuit_board_in_the_micro-miniature_electronics_repair_shop.jpg',
    note: 'Cropped to exclude the person’s face; must not imply U.S. Navy endorsement.',
  },
  {
    file: 'assets/images/products/*.jpg',
    subject: 'Product photographs for all 18 catalogue entries',
    author: 'Supplied by Vishwa Corporation (ALL METAL ITEM.docx)',
    licence: 'UNCONFIRMED — business to verify rights before launch',
  },
];
