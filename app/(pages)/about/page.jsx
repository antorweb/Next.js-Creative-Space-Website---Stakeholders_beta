import Image from "next/image";
import React from "react";
import AboutImg from "../../../public/iamges/AboutStoryImg.png";
import misImg from "../../../public/iamges/misImg.png";
import visImg from "../../../public/iamges/visImg.png";
import AboutCommon from "@/app/components/AboutCommon";

const page = () => {
  return (
    <>
      <section id="section-1 Antor" className="py-[120px]">
        <div className="container">
          {/* ------------------ vision/mission contain */}

          <div className="flex justify-center items-center gap-[24px]">
            {/* ------------ mission */}

            <div className="w-[648px] bg-[#F9FAFB] rounded-[16px] ">
              <div className="p-[32px]">
                <div className="w-[52px] h-[52px] bg-[#2e7d322c] flex justify-center items-center rounded-[12px]">
                  <Image src={visImg} alt="visImg" width={30} />
                </div>

                <h2 className="text-[32px] mt-[48px] mb-[16px] font-bold font-main text-[#09231E]">
                  {" "}
                  Our Mission
                </h2>
                <div className="w-[584px]">
                  <h4 className="text-[16px] font-normal font-main text-[#4A5565]">
                    To deliver innovative, cost-effective, and eco-friendly
                    construction solutions that empower communities and create
                    lasting value for our clients.
                  </h4>
                </div>
              </div>
            </div>

            {/* -------------- vission */}
            <div className="w-[648px] bg-[#F9FAFB] rounded-[16px] ">
              <div className="p-[32px]">
                <div className="w-[52px] h-[52px] bg-[#2e7d322c] flex justify-center items-center rounded-[12px]">
                  <Image src={misImg} alt="visImg" width={30} />
                </div>

                <h2 className="text-[32px] mt-[48px] mb-[16px] font-bold font-main text-[#09231E]">
                  {" "}
                  Our Vision
                </h2>
                <div className="w-[584px]">
                  <h4 className="text-[16px] font-normal font-main text-[#4A5565]">
                    To deliver innovative, cost-effective, and eco-friendly
                    construction solutions that empower communities and create
                    lasting value for our clients.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-2 Antor" className="bg-[#F9FAFB] py-[100px]">
        <div className="container ">

        <div className="text-center">
          <h2 className="text-[48px] font-bold font-main text-[#09231E]">
            Our Core Values
          </h2>
          <h5 className="text-[18px] font-normal font-main text-[#4A5565]">
            The principles that guide everything we do
          </h5>
        </div>


            <div className="flex justify-center items-center gap-[24px] my-[80px]">

            <AboutCommon  aboutH2={'Sustainability'} aboutP={'Eco-friendly practices for a better tomorrow'} />
            <AboutCommon aboutH2={'Timely Delivery'} aboutP={'Meeting deadlines without compromise'} />
            <AboutCommon aboutH2={'Quality Assurance'} aboutP={'Excellence in every detail'} />
            <AboutCommon aboutH2={'Expert Team'} aboutP={'Skilled professionals at your service'} />


            </div>

            <div className="flex items-center justify-center gap-[24px]">
                
            <AboutCommon aboutH2={'Innovation '} aboutP={'Embracing new technologies and construction methods.'} />
            <AboutCommon aboutH2={'Safety'} aboutP={'Prioritizing the well-being of our team and communities.'} />
            <AboutCommon aboutH2={'Collaboration'} aboutP={'Working together with clients and partners for success.'} />
            <AboutCommon aboutH2={'Integrity'} aboutP={'Operating with honesty and transparency in every project.'} />

            </div>








        </div>
      </section>

      <section id="section-3 Antor" className="py-[120px]">
        <div className="container">
          <div className="flex justify-center gap-[112px]">
            {/* ------------ left-side content */}
            <div>
              <h2 className="text-[48px] font-bold font-main text-[#09231E]">
                Our Story
              </h2>
              <div className="w-[561px]">
                <p className="text-[18px] py-[24px] font-normal font-main text-[#4A5565]">
                  Founded in 2010, BuildTech emerged from a simple vision: to
                  transform the construction industry through sustainable
                  practices and innovative solutions. What started as a small
                  team of passionate engineers has grown into one of the
                  region's most trusted construction firms.
                </p>
                <p className="text-[18px] font-normal font-main text-[#4A5565]">
                  Over the years, we've completed more than 120 projects ranging
                  from residential complexes to large-scale industrial
                  facilities. Each project has reinforced our commitment to
                  quality, safety, and environmental responsibility.
                </p>
              </div>
              <div></div>
            </div>

            {/* -------------- right-side Images */}

            <Image src={AboutImg} alt="Img" width={648} height={484} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
