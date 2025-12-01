"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import rightImg1 from '../../../public/iamges/rightImg1.png'
import rightImg2 from '../../../public/iamges/rightImg2.png'
import rightImg3 from '../../../public/iamges/rightImg3.png'

const SustainableSpaces = () => {
  return (
    <section className="w-full py-[120px] bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[48px] font-bold font-main text-[#09231E]">
            Crafting Sustainable <br />
            Spaces for the Future
          </h1>

<div className="w-[560px] mt-[24px] mb-[48px]">

          <p className="text-[18px] font-normal font-main text-[#4A5565]">
            BuildTech is dedicated to delivering exceptional construction
            solutions that blend innovation, sustainability, and craftsmanship.
            Our approach combines cutting-edge techniques with environmentally
            conscious practices to create spaces that inspire and endure.
          </p>
</div>

          {/* BUTTON */}
          <button className=" flex items-center gap-2 bg-[#2E7D32] hover:bg-[#0c5e2e] text-[14px] font-medium font-main text-white py-[16px] px-[24px] rounded-full transition-all">
            Discover Our Story <FaArrowRight size={14} />
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          {/* BIG TOP IMAGE */}
          <div className="col-span-2">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image  src={rightImg1}       alt="Top Building"    fill  className="object-cover"   />
            </div>
          </div>

          {/* BOTTOM LEFT IMAGE */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src={rightImg2}
              alt="Building 2"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM RIGHT IMAGE */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src={rightImg3}
              alt="Building 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SustainableSpaces;
