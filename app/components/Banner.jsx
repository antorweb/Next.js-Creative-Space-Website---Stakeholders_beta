import React from "react";

import { HiArrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <>
      <section id="AntorBanner" className=" ">
        <div id="bannerContain" className=" py-20 ">
          <div className="container">
            {/* --------------- */}

            <div className="text-center flex flex-col  justify-center items-center">
              <div className="w-[250px]  bg-[#ffffff36] flex items-center justify-center gap-2.5 py-3 rounded-full ">
                {" "}
                <span className="w-4 h-4 inline-block bg-[#ffffff50] drop-shadow-2xl rounded-full "></span>{" "}
                <h2 className="text-[14px] font-medium font-main  text-white">
                  Your Vision, Our Expertise
                </h2>{" "}
              </div>

              <h1 className="text-[64px] font-bold font-main my-[16px] text-white">
                Building the Future, Today
              </h1>
              <div className="w-[683px] text-center">
                <h4 className="text-[20px] font-normal font-main text-[#F3F4F6]">
                  Transform your construction dreams into reality with
                  sustainable practices and innovative design excellence.
                </h4>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <button className="w-[203px] text-[14px] font-medium font-main text-white flex justify-center items-center gap-[10px] bg-[#2E7D32] py-[16px] rounded-full hover:bg-white hover:border-[#2E7D32] hover:text-[#2E7D32] duration-400 ">
                  Discover Our Story <HiArrowRight />
                </button>
                <button className="w-[154px] text-[14px] font-medium font-main text-white flex justify-center items-center gap-[10px] bg-[#2E7D32] py-[16px] rounded-full hover:bg-white hover:border-[#2E7D32] hover:text-[#2E7D32] duration-400">
                  Get Started <HiArrowRight />
                </button>
              </div>

              <div className="flex mt-[240px]  gap-[20px]">
                <div className="w-[370px] p-[20px] bg-[#ffffff19] bg-blur flex items-center  gap-2.5 py-3 rounded-[16px] ">
                
                  <span className="w-[48px] h-[48px] inline-block bg-[#ffffff50] drop-shadow-2xl rounded-full "></span>
                  <div className="">
                    <p className="text-[14px] flex justify-start mb-[4px] font-normal font-main text-[#D1D5DC]">Contact Us</p>
                    <h5 className="text-[16px] font-semibold font-main text-white">+880 1234 567 890</h5>
                  </div>
                </div>
                    <div className="w-[370px] p-[20px]  bg-[#ffffff36] flex items-center gap-2.5 py-3 rounded-[16px] ">
                 
                  <span className="w-[48px] h-[48px] inline-block bg-[#ffffff50] drop-shadow-2xl rounded-full "></span>
                  <div>
                    <p className="text-[14px] flex justify-start mb-[4px] font-normal font-main text-[#D1D5DC]">Contact Us</p>
                    <h5 className="text-[16px] font-semibold font-main text-white">+880 1234 567 890</h5>
                  </div>
                </div>


            
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
