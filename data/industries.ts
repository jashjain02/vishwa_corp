import type { StaticImageData } from 'next/image';
import type { IndustryId } from '../types/catalogue';
import { PRODUCTS } from './products';

import marineImg from '../assets/images/industries/marine.jpg';
import aerospaceImg from '../assets/images/industries/aerospace.jpg';
import powerImg from '../assets/images/industries/power.jpg';
import heavyImg from '../assets/images/industries/railways.jpg';
import electronicsImg from '../assets/images/industries/electronics.jpg';

export type IndustryIcon = 'ship' | 'rocket' | 'pylon' | 'gear' | 'chip';

export interface Industry {
  id: IndustryId;
  name: string;
  /** Shorter label for the vertical text at the panel foot. */
  shortName: string;
  icon: IndustryIcon;
  image: StaticImageData;
  imageAlt: string;
  /** CSS object-position used to keep the subject inside the tall panel crop. */
  focus: string;
  /** Why these materials matter here — grounded in the cited product applications. */
  blurb: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'marine',
    name: 'Marine & Shipbuilding',
    shortName: 'Marine',
    icon: 'ship',
    image: marineImg,
    imageAlt: "Bronze propellers of a large ship in dry dock, with shipyard workers below",
    focus: '50% 50%',
    blurb: 'Seawater piping, condensers, fittings and cathodic protection.',
  },
  {
    id: 'aerospace-defence',
    name: 'Aerospace & Defence',
    shortName: 'Aerospace',
    icon: 'rocket',
    image: aerospaceImg,
    imageAlt: 'Rocket lifting off from a launch pad at night',
    focus: '50% 40%',
    blurb: 'Aircraft-series aluminium, AMS-referenced nickel and beryllium-copper alloys.',
  },
  {
    id: 'power-electrical',
    name: 'Power & Electrical',
    shortName: 'Power & Electrical',
    icon: 'pylon',
    image: powerImg,
    imageAlt: 'High-voltage transmission pylons against a blue sky',
    focus: '72% 50%',
    blurb: 'High-conductivity copper, conductor aluminium and connector alloys.',
  },
  {
    id: 'heavy-engineering',
    name: 'Heavy Engineering & Process',
    shortName: 'Heavy Engineering',
    icon: 'gear',
    image: heavyImg,
    imageAlt: 'Railway axle and wheel with dismantled bearing, bushes and housing',
    focus: '38% 50%',
    blurb: 'Bearing bronzes, machining brass and corrosion-resistant process alloys.',
  },
  {
    id: 'electronics-plating',
    name: 'Electronics & Plating',
    shortName: 'Electronics',
    icon: 'chip',
    image: electronicsImg,
    imageAlt: 'Close-up of hands soldering a component onto a circuit board',
    focus: '55% 50%',
    blurb: 'Plating anodes, solders, tin and oxygen-free copper for electron devices.',
  },
];

export const INDUSTRY_BY_ID: Record<IndustryId, Industry> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.id, i]),
) as Record<IndustryId, Industry>;

/** Products whose researched applications map to the industry. */
export const productsForIndustry = (id: IndustryId) =>
  PRODUCTS.filter((p) => p.industries.includes(id));
