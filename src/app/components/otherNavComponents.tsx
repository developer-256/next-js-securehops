import React from "react";
import Link from "next/link";

const OtherNavComponents = (props: navLinkDatatypes) => {
  return (
    <Link href={props.link} key={props.name}>
      <li className="cursor-pointer group/li">
        <div className="overflow-hidden h-[22.5px] ">
          <div className="flex flex-col group-hover/li:-translate-y-[23px] transition-[transform_ease_300] duration-300">
            <span
              className={props.IsActive ? "text-hoverGray" : "text-regularText"}
            >
              {props.name}
            </span>
            <span className="text-hoverGray">{props.name}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default OtherNavComponents;

interface navLinkDatatypes {
  name: string;
  link: string;
  IsActive: boolean;
}
