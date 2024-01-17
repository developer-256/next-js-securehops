"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ServicesNavComponent from "./servicesNavComponent";
import OtherNavComponents from "./otherNavComponents";
import logo from "../assets/svg/logo.svg";
import mobileLogo from "../assets/svg/mobileLogo.svg";
import hamburger from "../assets/svg/hamburger.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

function NavBar() {
  const pathName = usePathname();

  return (
    <header className="sticky top-0  border border-navGray z-50 bg-white/40 backdrop-blur-[6px]">
      {/* for large screens */}
      <div className="items-center justify-between hidden px-3 py-3 md:flex md:px-12">
        {/* starting section ie logo */}
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        {/* middle section */}
        <ul className="mx-auto flex justify-between items-center rounded-full px-16 gap-10  text-[15px] font-medium max-w-[600px]  ">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return link.name === "Services" ? (
              <ServicesNavComponent name={link.name} />
            ) : (
              <OtherNavComponents
                link={link.href}
                name={link.name}
                IsActive={isActive}
              />
            );
          })}
        </ul>

        {/* last section ie button */}
        <button className="px-6 py-3 text-sm font-semibold text-white rounded-full bg-newGreen md:hover:ring-offset-1 md:hover:ring-newGreen md:hover:ring">
          Get Started
        </button>
      </div>

      {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% (for mobile and tabs) %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      {/* for mobile and tabs */}
      <div className="flex flex-col items-center justify-center px-3 py-3 md:hidden md:px-12">
        {/* starting section ie logo */}
        <div className="flex items-center justify-between w-full">
          <Link href={"/"}>
            <Image src={mobileLogo} alt="logo" />
          </Link>

          <button>
            <Image src={hamburger} alt="options" />
          </button>
        </div>

        <div className="flex flex-col">
          <ul className="mx-auto flex flex-col justify-center items-center rounded-full px-16 gap-10  text-[15px] font-medium max-w-[600px]  ">
            {navLinks.map((link) => {
              const isActive = pathName === link.href;

              return link.name === "Services" ? (
                <ServicesNavComponent name={link.name} />
              ) : (
                <OtherNavComponents
                  link={link.href}
                  name={link.name}
                  IsActive={isActive}
                />
              );
            })}
          </ul>

          <button className="px-6 py-3 text-sm font-semibold text-white rounded-full bg-newGreen md:hover:ring-offset-1 md:hover:ring-newGreen md:hover:ring">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
