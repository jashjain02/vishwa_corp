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
    title: 'Oxygen-Free & ETP Copper Rods',
    description: 'High-conductivity OFC and electrolytic tough pitch copper rods drawn to precise diameters for electrical and busbar applications.',
    image: gallery1,
  },
  {
    index: '02',
    title: 'Specialty Copper Alloy Bars',
    description: 'Beryllium, chromium and zirconium copper bars engineered for high-strength, wear-resistant industrial use.',
    image: gallery2,
  },
  {
    index: '03',
    title: 'Copper Sheets & Flats',
    description: 'Precision-rolled copper sheets and flats supplied to tight thickness and flatness tolerances.',
    image: gallery3,
  },
  {
    index: '04',
    title: 'Copper Tubes & Profiles',
    description: 'Seamless and custom-drawn copper tubes and profiles for thermal, electrical and structural applications.',
    image: gallery4,
  },
  {
    index: '05',
    title: 'Precision Copper Components',
    description: 'Machined copper and copper alloy components manufactured to customer drawings for critical assemblies.',
    image: gallery5,
  },
  {
    index: '06',
    title: 'Bimetallic & Custom Fabrication',
    description: 'Copper-clad and bimetallic products engineered for applications requiring combined electrical and mechanical performance.',
    image: gallery6,
  },
];

/** Figma node 34:3780 — "Built with Precision. Driven by Innovation." */
export const InnovationSection: React.FC = () => {
  return (
    <section aria-labelledby="innovation-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-[100px] px-[64px] py-[120px]">

        <h2 id="innovation-heading" className="w-[864px] max-w-full text-[100px] font-medium capitalize leading-[1.1] text-[#050505]">
          Built with Precision. Driven by <span className="text-[#050505]/50">Innovation.</span>
        </h2>

        {/* Horizontal-scrolling gallery */}
        <div className="flex w-full gap-8 overflow-x-auto pb-2">
          {GALLERY_CARDS.map((card) => (
            <article key={card.index} className="flex w-[600px] shrink-0 flex-col gap-5">
              <div className="relative h-[400px] w-[600px] shrink-0">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center justify-between whitespace-nowrap text-black">
                  <p className="text-[24px] uppercase">{card.title}</p>
                  <p className="text-[20px] leading-[32px]">{card.index}</p>
                </div>
                <p className="w-[439px] text-[16px] text-black/60">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
