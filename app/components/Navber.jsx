import React from "react";
import mainLogo from "../../public/iamges/main-logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav id="Antor-Navbar" className="py-7">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* ------------ main-logo */}
            <Link href={"/"}>
              <Image src={mainLogo} width={119} alt="main-logo" />
            </Link>

            {/* ------------------- nav-content */}

            <div className="flex items-center gap-12">
              <div>
                <ul className="flex gap-8 items-center">
                  <li>
                    <Link
                      href={"/"}
                      className="text-[16px] font-normal font-main text-primary hover:text-[#2E7D32] duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className="text-[16px] font-normal font-main text-primary hover:text-[#2E7D32] duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services"}
                      className="text-[16px] font-normal font-main text-primary hover:text-[#2E7D32] duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/Project"}
                      className="text-[16px] font-normal font-main text-primary hover:text-[#2E7D32] duration-300"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="text-[16px] font-normal font-main text-primary hover:text-[#2E7D32] duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <button className="w-[129px] bg-[#2E7D32] text-[14px] font-medium font-main text-white py-2 rounded-full">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
