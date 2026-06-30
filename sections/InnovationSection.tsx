import React from 'react';
import Image from 'next/image';
import gallery1 from '../assets/images/gallery-1-precision.jpg';
import gallery2 from '../assets/images/gallery-2-raw-materials.jpg';
import gallery3 from '../assets/images/gallery-3-fasteners.jpg';
import gallery4 from '../assets/images/gallery-4-flanges.jpg';
import gallery5 from '../assets/images/gallery-5-shafts.jpg';
import gallery6 from '../assets/images/gallery-6-fabrication.jpg';

interface GalleryCard {
  index: string;
  title: string;
  description: string;
  image: typeof gallery1;
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    index: '01',
    title: 'Oxygen-Free & ETP Copper Wire Rod',
    description: 'High-conductivity OFC and electrolytic tough pitch copper wire rod, the base feedstock for electrical and busbar-grade conductors.',
    image: gallery1,
  },
  {
    index: '02',
    title: 'Precision-Turned Alloy Components',
    description: 'CNC-turned bushings, bearings and collars in brass and high-conductivity copper alloys, produced to tight dimensional tolerances.',
    image: gallery2,
  },
  {
    index: '03',
    title: 'Copper & Alloy Sheet, Strip & Flat Stock',
    description: 'Specialty copper, brass and engineering alloy sheets and flats rolled to precise thickness and flatness tolerances.',
    image: gallery3,
  },
  {
    index: '04',
    title: 'Copper Tube & Pipe Fittings',
    description: 'Seamless copper tubes and fittings engineered for thermal, fluid-transfer and industrial piping applications.',
    image: gallery4,
  },
  {
    index: '05',
    title: 'CNC-Machined Bearing Housings & Bushes',
    description: 'High-tolerance bearings, bushes and housings machined from copper alloys and engineering-grade materials to customer drawings.',
    image: gallery5,
  },
  {
    index: '06',
    title: 'CNC Profile Cutting & Custom Fabrication',
    description: 'Computer-controlled plasma and laser profile cutting for custom-fabricated parts in steel and specialty engineering alloys.',
    image: gallery6,
  },
];

/** Figma node 34:3780 — "Built with Precision. Driven by Innovation." */
export const InnovationSection: React.FC = () => {
  return (
    <section aria-labelledby="innovation-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:gap-[100px] lg:px-[64px] lg:py-[120px]">

        <h2 id="innovation-heading" className="w-full max-w-[864px] text-[34px] font-medium capitalize leading-[1.1] text-[#050505] sm:text-[48px] md:text-[64px] lg:text-[100px]">
          Built with Precision. Driven by <span className="text-[#050505]/50">Innovation.</span>
        </h2>

        {/* Horizontal-scrolling gallery */}
        <div className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:gap-8 lg:snap-none">
          {GALLERY_CARDS.map((card) => (
            <article key={card.index} className="flex w-[260px] shrink-0 snap-start flex-col gap-3 sm:w-[380px] sm:gap-4 lg:w-[600px] lg:gap-5 lg:snap-align-none">
              <div className="relative h-[170px] w-[260px] shrink-0 sm:h-[250px] sm:w-[380px] lg:h-[400px] lg:w-[600px]">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-start justify-between gap-2 text-black lg:items-center lg:whitespace-nowrap">
                  <p className="text-[14px] uppercase sm:text-[18px] lg:text-[24px]">{card.title}</p>
                  <p className="shrink-0 text-[14px] leading-[1.4] sm:text-[18px] lg:text-[20px] lg:leading-[32px]">{card.index}</p>
                </div>
                <p className="w-full text-[13px] text-black/60 sm:text-[15px] lg:w-[439px] lg:text-[16px]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
