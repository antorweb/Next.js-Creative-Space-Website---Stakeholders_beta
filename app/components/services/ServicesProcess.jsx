import React from "react";
import ServicesProcessCommon from "../common/ServicesProcessCommon";

const ServicesProcess = () => {
  return (
    <>
      {/* ------------- Our-Process */}

      <section className="bg-[#F9FAFB] py-[100px] text-center">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[48px] font-bold font-main text-[#09231E]">
              Our Process
            </h2>
            <h5 className="text-[18px] font-normal font-main text-[#4A5565]">
              A streamlined approach to delivering exceptional results
            </h5>
          </div>

          <div className="flex justify-center gap-[24px] mt-[80px]">
            <ServicesProcessCommon
              proNum={"01"}
              proH2={"Planning"}
              proP={
                "Initial consultation, site assessment, and project scope definition."
              }
            />
            <ServicesProcessCommon
              proNum={"02"}
              proH2={"Design"}
              proP={
                "Architectural plans, engineering drawings, and material selection."
              }
            />
            <ServicesProcessCommon
              proNum={"03"}
              proH2={"Construction"}
              proP={
                "Skilled execution with quality control and regular progress updates."
              }
            />
            <ServicesProcessCommon
              proNum={"04"}
              proH2={"Handover"}
              proP={
                "Final inspection, documentation, and project delivery to client."
              }
            />
          </div>

          {/* ------------- Project-Images */}

          <div className="flex justify-center">
            <div
              id="ServicesImage"
              className=" w-[1320px] flex justify-center  mt-[120px] rounded-[16px]"
            >
              <div className="container">
                <div className="text-center py-[58px]">
                  <h2 className="text-[48px] font-bold font-main text-[#09231E]">
                    Let&apos;s Make Your Vision a Reality
                  </h2>
                  <h5 className="text-[18px] mt-[12px] mb-[155px]  font-normal font-main text-[#4A5565]">
                    Contact our team today to discuss your construction project
                  </h5>

                  <button className="w-[157px] bg-[#2E7D32] text-[14px] font-medium font-main text-white py-[16px] rounded-full">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesProcess;
