import React from 'react'

const BannerCommon = ({bannerH2,bannerP}) => {
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
                   {bannerH2}
                  </h2>
                  <div className="mt-4 md:mt-[12px] w-full md:w-[752px] mx-auto">
                    <h4 className="text-[16px] md:text-[18px] font-normal font-main text-white">
                   {bannerP}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
      
    </>
  )
}

export default BannerCommon
