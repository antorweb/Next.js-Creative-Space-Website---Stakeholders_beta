"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const SustainableSpaces = () => {
  return (
    <section className="w-full py-16 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[48px] font-bold font-main text-[#09231E]">
            Crafting Sustainable <br />
            Spaces for the Future
          </h1>

          <p className="text-[18px] font-bold font-main text-[#4A5565]">
            BuildTech is dedicated to delivering exceptional construction
            solutions that blend innovation, sustainability, and craftsmanship.
            Our approach combines cutting-edge techniques with environmentally
            conscious practices to create spaces that inspire and endure.
          </p>

          {/* BUTTON */}
          <button className="mt-6 flex items-center gap-2 bg-[#0A4D25] hover:bg-[#0c5e2e] text-white font-medium px-6 py-2 rounded-full transition-all">
            Discover Our Story <FaArrowRight size={14} />
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          {/* BIG TOP IMAGE */}
          <div className="col-span-2">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image  src=""       alt="Top Building"    fill  className="object-cover"   />
            </div>
          </div>

          {/* BOTTOM LEFT IMAGE */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src=""
              alt="Building 2"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM RIGHT IMAGE */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <Image
              src=""
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
