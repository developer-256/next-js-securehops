import React from "react";
import Link from "next/link";

const Services = (props: serviceLinkDatatypes) => {
  return (
    <Link href={props.link}>
      <li className="md:hover:border md:hover:border-newDarkGray md:hover:text-newDarkGray text-sm md:hover:text-base rounded-md py-3 px-4 md:hover:cursor-pointer">
        {props.name}
      </li>
    </Link>
  );
};

export default Services;

interface serviceLinkDatatypes {
  name: string;
  link: string;
}
