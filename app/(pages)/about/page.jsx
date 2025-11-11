
import Image from "next/image";
import React from "react";
import AboutImg from "../../../public/iamges/AboutStoryImg.png";
import misImg from "../../../public/iamges/misImg.png";
import visImg from "../../../public/iamges/visImg.png";

import Img1 from "../../../public/iamges/Icon1.png";
import Img2 from "../../../public/iamges/Icon2.png";
import Img3 from "../../../public/iamges/Icon3.png";
import Img4 from "../../../public/iamges/Icon4.png";
import Img5 from "../../../public/iamges/Icon5.png";
import Img6 from "../../../public/iamges/Icon6.png";
import Img7 from "../../../public/iamges/Icon7.png";
import Img8 from "../../../public/iamges/Icon8.png";

import AboutCommon from "@/app/components/AboutCommon";

const page = () => {
  return (
    <>
      <div id="banner-section Antor">
        <div id="aboutBanner" className="w-full h-[400px] md:h-[550px]">
          <div
            id="aboutContainer"
            className="w-full h-full flex justify-center items-center px-4 md:px-0"
          >
            <div className="text-center">
              <h2 className="text-[32px] md:text-[48px] w-full md:w-[750px] mx-auto font-bold font-main text-white">
                We Build More Than Structures  We Build Trust
              </h2>
              <div className="mt-4 md:mt-[12px] w-full md:w-[752px] mx-auto">
                <h4 className="text-[16px] md:text-[18px] font-normal font-main text-white">
                  BuildTech was founded with a mission to create modern,
                  sustainable construction solutions. From residential homes to
                  large-scale industrial projects, we've consistently delivered
                  with quality, safety, and integrity.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="section-1 Antor" className="py-[80px] md:py-[120px] px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-[24px]">
            {/* Mission */}
            <div className="w-full md:w-[648px] bg-[#F9FAFB] rounded-[16px]">
              <div className="p-[24px] md:p-[32px]">
                <div className="w-[52px] h-[52px] bg-[#2e7d322c] flex justify-center items-center rounded-[12px]">
                  <Image src={visImg} alt="visImg" width={30} />
                </div>

                <h2 className="text-[28px] md:text-[32px] mt-[32px] md:mt-[48px] mb-[16px] font-bold font-main text-[#09231E]">
                  Our Mission
                </h2>
                <div className="w-full">
                  <h4 className="text-[15px] md:text-[16px] font-normal font-main text-[#4A5565]">
                    To deliver innovative, cost-effective, and eco-friendly
                    construction solutions that empower communities and
                    create lasting value for our clients.
                  </h4>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="w-full md:w-[648px] bg-[#F9FAFB] rounded-[16px]">
              <div className="p-[24px] md:p-[32px]">
                <div className="w-[52px] h-[52px] bg-[#2e7d322c] flex justify-center items-center rounded-[12px]">
                  <Image src={misImg} alt="visImg" width={30} />
                </div>

                <h2 className="text-[28px] md:text-[32px] mt-[32px] md:mt-[48px] mb-[16px] font-bold font-main text-[#09231E]">
                  Our Vision
                </h2>
                <div className="w-full">
                  <h4 className="text-[15px] md:text-[16px] font-normal font-main text-[#4A5565]">
                    To deliver innovative, cost-effective, and eco-friendly
                    construction solutions that empower communities and
                    create lasting value for our clients.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-2 Antor" className="bg-[#F9FAFB] py-[80px] md:py-[100px] px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-[32px] md:text-[48px] font-bold font-main text-[#09231E]">
              Our Core Values
            </h2>
            <h5 className="text-[16px] md:text-[18px] font-normal font-main text-[#4A5565]">
              The principles that guide everything we do
            </h5>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-[24px] my-[60px] md:my-[80px] px-4 md:px-0">
            <AboutCommon
              aboutImg={Img1}
              aboutH2={"Sustainability"}
              aboutP={"Eco-friendly practices for a better tomorrow"}
            />
            <AboutCommon
              aboutImg={Img2}
              aboutH2={"Timely Delivery"}
              aboutP={"Meeting deadlines without compromise"}
            />
            <AboutCommon
              aboutImg={Img3}
              aboutH2={"Quality Assurance"}
              aboutP={"Excellence in every detail"}
            />
            <AboutCommon
              aboutImg={Img4}
              aboutH2={"Expert Team"}
              aboutP={"Skilled professionals at your service"}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-[24px] px-4 md:px-0">
            <AboutCommon
              aboutImg={Img5}
              aboutH2={"Innovation"}
              aboutP={"Embracing new technologies and construction methods."}
            />
            <AboutCommon
              aboutImg={Img6}
              aboutH2={"Safety"}
              aboutP={"Prioritizing the well-being of our team and communities."}
            />
            <AboutCommon
              aboutImg={Img7}
              aboutH2={"Collaboration"}
              aboutP={"Working together with clients and partners for success."}
            />
            <AboutCommon
              aboutImg={Img8}
              aboutH2={"Integrity"}
              aboutP={"Operating with honesty and transparency in every project."}
            />
          </div>
        </div>
      </section>

      <section id="section-3 Antor" className="py-[80px] md:py-[120px] px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center lg:gap-[112px] items-center">
            {/* left-side content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] md:text-[48px] font-bold font-main text-[#09231E]">
                Our Story
              </h2>
              <div className="w-full lg:w-[561px]">
                <p className="text-[16px] md:text-[18px] py-[16px] md:py-[24px] font-normal font-main text-[#4A5565]">
                  Founded in 2010, BuildTech emerged from a simple vision: to
                  transform the construction industry through sustainable
                  practices and innovative solutions. What started as a small
                  team of passionate engineers has grown into one of the
                  region's most trusted construction firms.
                </p>
                <p className="text-[16px] md:text-[18px] font-normal font-main text-[#4A5565]">
                  Over the years, we've completed more than 120 projects
                  ranging from residential complexes to large-scale industrial
                  facilities. Each project has reinforced our commitment to
                  quality, safety, and environmental responsibility.
                </p>
              </div>
            </div>

            {/* right-side image */}
            <div className="w-full lg:w-1/2 mt-[32px] lg:mt-0 flex justify-center">
              <Image
                src={AboutImg}
                alt="Img"
                width={648}
                height={484}
                className="w-full max-w-[648px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
