import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ProjectDescrip = () => {
  return (
    <>



<div>


{/* ------------ left-side description */}

      <div>
        <div className="w-[872px]">
          <h2 className="text-[32px] font-semibold font-main text-main">
            Project Overview
          </h2>
          <h5 className="text-[16px] font-normal font-main text-[#4A5565] mt-[16px]">
            A luxury residential complex featuring eco-friendly design and
            state-of-the-art amenities. Green Valley Residences combines
            sustainable living with modern comfort, offering residents a
            harmonious blend of nature and <br /> contemporary architecture.
          </h5>
        </div>

        {/* ----------- key-feature */}

        <div className="flex items-center gap-[47px] my-[48px]">
          <div className="feature-left-side">
            <h3 className="text-[20px] font-semibold font-main text-main">
              Key Features
            </h3>

            <div>
              <ul>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Eco-friendly materials and construction methods
                </li>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Rainwater harvesting system
                </li>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Energy-efficient HVAC systems
                </li>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Modern fitness center and swimming pool
                </li>
              </ul>
            </div>
          </div>
          <div className="feature-right-side">
            <h3 className="text-[20px] font-semibold font-main text-main">
              Key Features
            </h3>

            <div>
              <ul>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Solar panel integration for renewable energy
                </li>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Green rooftop gardens
                </li>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Smart home automation
                </li>
                <li className="text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                  <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                  Underground parking facility
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="feature-left-side">
          <h3 className="text-[20px] font-semibold font-main text-main">
            Project Challenges & Solutions
          </h3>

          <div className="mt-[20px]">
            <ul className="">
              <li className="w-[872px] bg-[#F9FAFB] py-[14px] px-[16px] rounded-[12px] text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                Implemented sustainable building practices while maintaining
                budget
              </li>
              <li className="w-[872px] bg-[#F9FAFB] py-[14px] px-[16px] rounded-[12px] my-[16px] text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                Coordinated with multiple stakeholders for green certifications
              </li>
              <li className="w-[872px] bg-[#F9FAFB] py-[14px] px-[16px] rounded-[12px] text-[16px] font-normal font-main text-[#4A5565] flex items-center gap-[12px]">
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32] text-[20px]" />
                Integrated smart technology throughout the building
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="w-[427px] h-[666px] bg-[#F9FAFB] rounded-2xl">
        <div>
          <h2>Project Information</h2>
        </div>
      </div> */}


</div>

    </>
  );
};

export default ProjectDescrip;
