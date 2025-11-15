import BannerCommon from "@/app/components/common/BannerCommon";
import ProjectCommon from "@/app/components/common/ProjectCommon";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section id="project">
        <BannerCommon
          bannerH2={"Our Work Speaks for Itself"}
          bannerP={
            "A glimpse of our most recent and impactful construction projects"
          }
        />
        <div className="container">
          <div className="flex flex-wrap gap-6 py-[120px] justify-center  items-center">
            <Link
              href={"/ProjectDetails"}
              id="projectCommon"
              className="w-[424px] h-[380px]"
            >
              <ProjectCommon
                projectH2={"Horizon Commercial Complex"}
                projectP={"Chattogram"}
              />
            </Link>

            <Link
              href={"/ProjectDetails"}
              id="projectCommon"
              className="w-[424px] h-[380px]"
            >
              <ProjectCommon
                projectH2={"Horizon Commercial Complex"}
                projectP={"Chattogram"}
              />
            </Link>

            <Link
              href={"/ProjectDetails"}
              id="projectCommon"
              className="w-[424px] h-[380px]"
            >
              <ProjectCommon
                projectH2={"Horizon Commercial Complex"}
                projectP={"Chattogram"}
              />
            </Link>

            <Link
              href={"/ProjectDetails"}
              id="projectCommon"
              className="w-[424px] h-[380px]"
            >
              <ProjectCommon
                projectH2={"Horizon Commercial Complex"}
                projectP={"Chattogram"}
              />
            </Link>

            <Link
              href={"/ProjectDetails"}
              id="projectCommon"
              className="w-[424px] h-[380px]"
            >
              <ProjectCommon
                projectH2={"Horizon Commercial Complex"}
                projectP={"Chattogram"}
              />
            </Link>

            <Link
              href={"/ProjectDetails"}
              id="projectCommon"
              className="w-[424px] h-[380px]"
            >
              <ProjectCommon
                projectH2={"Horizon Commercial Complex"}
                projectP={"Chattogram"}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
