import FooterLogo from "../assets/svg/footerLogo.svg";
import FooterArrow from "../assets/svg/footerArrow.svg";

function Footer() {
  return (
    <div className="bg-newGray">
      <div className=" grid grid-cols-1 lg:grid-cols-[3fr_1.5fr_3fr_3fr] px-3 md:px-12 pt-[100px] pb-[60px] text-regularText">
        <ul>
          <img src={FooterLogo} />
          <p className="max-w-[300px] my-3 leading-5">
            Our team of experts maintains robust network solutions, ensuring
            seamless connectivity.
          </p>

          <li className="flex">
            <span>Facebook</span>
            <img src={FooterArrow} />
          </li>
          <li className="flex">
            <span>Instagram</span>
            <img src={FooterArrow} />
          </li>
          <li className="flex">
            <span>LinkedIn</span>
            <img src={FooterArrow} />
          </li>
          <li className="flex">
            <span>Twitter</span>
            <img src={FooterArrow} />
          </li>
        </ul>

        <ul className="lg:justify-self-center flex flex-col gap-3 max-w-[270px]">
          <h1 className="font-semibold mb-px text-black">Quick Links</h1>
          <li>Home</li>
          <li>Services</li>
          <li>Cybersecurity</li>
          <li>Solutions</li>
          <li>SOC</li>
        </ul>

        <ul className="lg:justify-self-center flex flex-col gap-3 lg:max-w-[285px]">
          <h1 className="font-semibold mb-px text-black">Digital Services</h1>
          <li>Data Center Services</li>
          <li>Network Engineering</li>
          <li className="leading-5 whitespace-nowrap">
            Information Technology Solutions Outsourcing
          </li>
          <li className="leading-5 whitespace-nowrap">
            Consultancy for Vulnerability Assessment
          </li>
          <li>Penetration Testing</li>
        </ul>

        <ul className="lg:justify-self-end gap-5">
          <li>
            <h1 className="font-semibold mb-3 text-black">
              Head Office Address
            </h1>
            <p className="max-w-[235px] leading-5">
              LDA Avenue 1, Block B, House no. 153, Lahore, Punjab PK
            </p>
          </li>
          <li className="mt-5">
            <h1 className="font-semibold mb-3 text-black">Branch Office</h1>
            <p className="max-w-[235px] leading-5">
              McLeod Road, Lakshmi Chowk, Saleem Chamber, Second Floor, Office
              no. 11, Lahore, Punjab PK
            </p>
          </li>
        </ul>
      </div>
      <div className="border border-t-regularText mx-3 md:mx-12 "></div>
      <p className="text-center py-5 text-regularText">
        Copyright © 2024 Securehops | All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
