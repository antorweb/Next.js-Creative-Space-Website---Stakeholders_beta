import BannerCommon from "@/app/components/common/BannerCommon";
import ServicesProcess from "@/app/components/services/ServicesProcess";
import ServiesDetails from "@/app/components/services/ServiesDetails";
import React from "react";

const page = () => {
  return (
    <>
      <BannerCommon
        bannerH2={"Our Expertise, Your Vision"}
        bannerP={
          "From design to delivery, we offer complete construction services that meet modern standards and sustainability goals."
        }
      />

      <ServiesDetails />
      <ServicesProcess />

      
    </>
  );
};

export default page;
