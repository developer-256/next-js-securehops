// "use client";
import React from "react";
import { useState } from "react";

// svg with two colors so that we can change color of svg on hover
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

const ServicesNavComponent = (props: any) => {
  const [arrow, setArrow] = useState(navArrow);
  const toHover = () => {
    setArrow(navArrowHover);
  };
  const toNotHover = () => {
    setArrow(navArrow);
  };

  return (
    <li
      className="flex items-center gap-2 cursor-pointer md:hover:text-hoverGray group/service"
      onMouseOver={toHover}
      onMouseOut={toNotHover}
    >
      <span className="">{props.name}</span>
      <span className="pt-1 group-hover/service:pb-2 group-hover/service:rotate-180">
        {arrow}
      </span>
    </li>
  );
};

export default ServicesNavComponent;
