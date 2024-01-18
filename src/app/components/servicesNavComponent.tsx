import React from "react";
import { useState } from "react";
import Services from "./services";

const navArrow = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" />
  </svg>
);

const serviceLinks = [
  { name: "Vulnerability Assessment", href: "/vulnerability" },
  { name: "IT Solutions", href: "/it-solution" },
  { name: "IT Support", href: "/it-support" },
  { name: "Penetration Testing", href: "/penetration" },
  { name: "Data Center Services", href: "/data-center" },
  { name: "Cyber Security Services", href: "/cyber-sec" },
  { name: "SOC Services ", href: "/soc-service" },
];

const ServicesNavComponent = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const MouseIsOver = () => {
    setIsHover(true);
  };
  const MouseIsOut = () => {
    setIsHover(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={MouseIsOver}
      onMouseLeave={MouseIsOut}
    >
      <li
        className={`flex items-center gap-2 cursor-pointer ${
          isHover ? "md:text-hoverGray" : ""
        }`}
      >
        <span className="">{props.name}</span>
        <span className={`pt-1 ${isHover ? "rotate-180 pb-2" : ""}`}>
          {navArrow}
        </span>
      </li>

      {isHover && (
        <div className="absolute hidden md:block top-5 left-0 min-w-72 bg-transparent">
          <ul className="flex flex-col border border-hoverGray my-7 p-5 rounded-xl text-regularText gap-1 bg-white/40 backdrop-blur-[6px] relative z-40">
            {serviceLinks.map((link) => {
              return <Services link={link.href} name={link.name} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesNavComponent;
