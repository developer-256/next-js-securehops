import FooterLogo from "../assets/svg/footerLogo.svg";
import FooterArrow from "../assets/svg/footerArrow.svg";
import linkedin from "../assets/svg/linkedin.svg";
import facebook from "../assets/svg/facebook.svg";
import x from "../assets/svg/x.svg";
import insta from "../assets/svg/insta.svg";
import Image from "next/image";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-newGray px-2 md:px-0">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 px-3 md:px-12 pt-10 md:pt-[100px] pb-[60px] text-regularText">
        {/* first row of footer */}
        <ul className="flex flex-col items-center gap-2 md:block md:justify-self-start">
          <Image alt="img" src={FooterLogo} />
          <p className="text-center md:text-start max-w-[300px] my-3 leading-5">
            Our team of experts maintains robust network solutions, ensuring
            seamless connectivity.
          </p>
          {/* for larger screens */}
          <ul className="hidden md:block">
            <li className="flex">
              <span>Facebook</span>
              <Image alt="img" src={FooterArrow} />
            </li>
            <li className="flex">
              <span>Instagram</span>
              <Image alt="img" src={FooterArrow} />
            </li>
            <li className="flex">
              <span>LinkedIn</span>
              <Image alt="img" src={FooterArrow} />
            </li>
            <li className="flex">
              <span>Twitter</span>
              <Image alt="img" src={FooterArrow} />
            </li>
          </ul>

          {/* for mobile and tabs */}
          <ul className="flex gap-3 md:hidden">
            <Image src={linkedin} alt="li" />
            <Image src={facebook} alt="fa" />
            <Image src={x} alt="x" />
            <Image src={insta} alt="ins" />
          </ul>
        </ul>

        {/* second row of footer */}
        <ul className="md:justify-self-center flex flex-col gap-3">
          <h1 className="font-semibold text-black">Quick Links</h1>
          <div className="flex gap-5 leading-3 md:leading-6 flex-wrap md:block">
            <li className=" md:mb-3">Home</li>
            <li className=" md:mb-3">Services</li>
            <li className=" md:mb-3">Cybersecurity</li>
            <li className=" md:mb-3">Blogs</li>
            <li className=" md:mb-3">Contact Us</li>
          </div>
        </ul>

        {/* third row of footer */}
        <ul className="hidden md:justify-self-start md:flex flex-col gap-3 lg:max-w-[285px]">
          <h1 className="font-semibold mb-px text-black">Digital Services</h1>
          <li>IT Solutions Outsourcing</li>
          <li>Vulnerability Assessment</li>
          <li>Penetration Testing</li>
          <li className="leading-5 whitespace-nowrap">SOC Services</li>
          <li className="leading-5 whitespace-nowrap">IT Support Services</li>
        </ul>

        {/* fourth row of footer */}
        <ul className="md:justify-end">
          <li>
            <h1 className="font-semibold mb-3 text-black">
              Head Office Address
            </h1>
            <p className="max-w-[235px] leading-5">
              LDA Avenue 1, Block B, House no. 153, Lahore, Punjab PK
            </p>
          </li>
          <li className="mt-10 md:mt-10">
            <h1 className="font-semibold mb-3 text-black">Branch Office</h1>
            <p className="max-w-[235px] leading-5">
              McLeod Road, Lakshmi Chowk, Saleem Chamber, Second Floor, Office
              no. 11, Lahore, Punjab PK
            </p>
          </li>
        </ul>
      </div>

      {/* bottom line */}
      <div className="border border-t-regularText mx-3 md:mx-12 "></div>

      {/* copyright */}
      <p className="text-center text-sm sm:text-base py-5 text-regularText">
        Copyright © <span>{year}</span>{" "}
        <span className="hidden md:inline-block">Securehops</span>
        <span className="px-2">|</span> All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
