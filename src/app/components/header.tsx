import React from "react";
import Image from "next/image";
import exploreArrow from "../assets/svg/exploreArrow.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-center py-10 md:py-[120px] px-5">
      <div className="text-headerGray bg-headerGreen rounded-full px-7 py-2 border border-headerGreenBorder text-xs md:text-sm mb-3 sm:mb-auto">
        Your Security Partner
      </div>
      <p className="text-regularText font-bold text-2xl sm:text-[40px] md:text-[65px] sm:leading-[60px] md:leading-[80px] mt-1">
        Securing Today for a
      </p>
      <p className="text-newGreen font-bold text-2xl sm:text-[40px] md:text-[65px] sm:leading-[60px] md:leading-[80px]">
        Secure Tomorrow
      </p>
      <p className="max-w-[500px] text-center text-[14px] text-regularText mt-[14px]">
        With years of experience in the security industry, we're at the
        forefront of innovative solutions that protect you, your assets, and
        your data.
      </p>
      <div className="flex flex-col sm:flex-row items-center mt-[22px] gap-4 w-full sm:w-auto text-sm sm:text-base">
        <button className="px-8 py-3 border border-newGreen bg-newGreen rounded-full text-white w-full sm:w-auto">
          Get Started
        </button>
        <button className="flex items-center border border-regularText text-black rounded-full justify-center bg-transparent px-8 py-3 gap-3 w-full sm:w-auto">
          <span>Explore</span>
          <Image src={exploreArrow} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
