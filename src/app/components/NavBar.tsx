"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/svg/logo.svg";
import Link from "next/link";
// import logo from "../assets/svg/logo.svg";

// svg with two types of colors
const navArrow = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="#333333" stroke-width="1.5" />
  </svg>
);
const navArrowHover = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="#9B9B9B" stroke-width="1.5" />
  </svg>
);

const navLinks = [{ name: "Home", href: "/" }];

function NavBar() {
  const [arrow, setArrow] = useState(navArrow);
  const toHover = () => {
    setArrow(navArrowHover);
  };
  const toNotHover = () => {
    setArrow(navArrow);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center py-3 px-3 md:px-12 border border-navGray z-50 bg-white/40 backdrop-blur-[6px]">
      {/* <img src={logo} alt="logo" /> */}
      <Image src={logo} alt="logo" />

      <ul className="mx-auto flex justify-between items-center rounded-full px-16 gap-10 text-regularText text-[15px] font-medium max-w-[600px]  ">
        <li className="cursor-pointer text-hoverGray group/li">
          <div className="overflow-hidden h-[22.5px] ">
            <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500">
              <span>Home</span>
              <span className="text-hoverGray">Home</span>
            </div>
          </div>
        </li>

        <li className="cursor-pointer group/li">
          <div className="overflow-hidden h-[22.5px]">
            <div
              className={`flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500`}
            >
              <span className="">About</span>
              <span className="text-hoverGray">About</span>
            </div>
          </div>
        </li>

        <li
          className="flex items-center gap-2 cursor-pointer md:hover:text-hoverGray group/service"
          onMouseOver={toHover}
          onMouseOut={toNotHover}
        >
          <span className="">Services</span>
          <span className="pt-1 group-hover/service:pb-2 group-hover/service:rotate-180">
            {arrow}
          </span>
        </li>

        <li className="cursor-pointer group/li">
          <div className="overflow-hidden h-[22.5px]">
            <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500">
              <span>Blogs</span>
              <span className="text-hoverGray">Blogs</span>
            </div>
          </div>
        </li>

        <li className="cursor-pointer group/li">
          <div className="overflow-hidden h-[22.5px]">
            <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_600] duration-500">
              <span>Contact Us</span>
              <span className="text-hoverGray">Contact Us</span>
            </div>
          </div>
        </li>
      </ul>

      <button className="px-6 py-3 text-sm font-semibold text-white rounded-full bg-newGreen md:hover:ring-offset-1 md:hover:ring-newGreen md:hover:ring">
        Get Started
      </button>
    </header>
  );
}

export default NavBar;
