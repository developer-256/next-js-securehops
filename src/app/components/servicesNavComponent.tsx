import React from "react";
import { useState } from "react";
import Services from "./services";
import { serviceLinks } from "./serviceLinks";

const navArrow = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ServicesNavComponent = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const MouseIsOver = () => {
    setIsHover(true);
  };
  const MouseIsOut = () => {
    setIsHover(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className="md:relative flex flex-col items-center justify-center w-full md:w-auto"
      onMouseEnter={MouseIsOver}
      onMouseLeave={MouseIsOut}
    >
      <li
        onClick={toggleIsOpen}
        className={`flex items-center gap-2 cursor-pointer justify-center w-full ${
          isHover ? "md:text-hoverGray text-regularText" : ""
        }`}
      >
        <span className="">{props.name}</span>
        <span className={`pt-1 ${isHover ? "rotate-180 pb-2" : ""}`}>
          {navArrow}
        </span>
      </li>

      {/* laptop and pc dropdown */}
      {isHover && (
        <div className="absolute hidden md:block top-5 left-0 w-full md:min-w-72 bg-transparent">
          <ul className="flex flex-col border border-hoverGray my-7 p-5 rounded-xl text-regularText gap-1 bg-white/40 backdrop-blur-[6px] relative z-40 shadow-lg">
            {serviceLinks.map((link, index) => {
              return <Services link={link.href} name={link.name} key={index} />;
            })}
          </ul>
        </div>
      )}

      {/* mobile and tabs dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col border border-hoverGray my-7 p-2 md:p-5 w-full items-center rounded-xl text-regularText gap-1 bg-white/40 backdrop-blur-[6px]">
          {serviceLinks.map((link, index) => {
            return <Services link={link.href} name={link.name} key={index} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ServicesNavComponent;
