import mainImg from "../assets/svg/main_Img.svg";
import exploreArrow from "../assets/svg/exploreArrow.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between pb-32 pt-16 px-3 md:px-12 ">
      <div>
        <p className="text-xl font-semibold text-regularText mb-2">
          Your Security Partner
        </p>
        <h1 className="text-[40px] leading-[40px] font-bold text-regularText mb-2">
          Securing Today for a
        </h1>
        <h1 className="text-[40px] leading-[40px] font-bold text-newGreen">
          Secure Tomorrow
        </h1>
        <p className="max-w-[389px] text-regularText mt-5 leading-5">
          With years of experience in the security industry, we&apos;re at the
          forefront of innovative solutions that protect you, your assets, and
          your data.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <button className="px-9 py-3 bg-BanUndGrdGreen  text-white font-semibold border-[1.5px] border-newGreen rounded-full">
            Get Started
          </button>
          <button className="flex items-center gap-2 px-9 py-3 border-[1.5px] border-newDarkGray text-regularText rounded-full">
            <span>Explore</span>
            <Image src={exploreArrow} alt="arr" />
          </button>
        </div>
      </div>

      <div>
        {/* <img src={mainImg} /> */}
        <Image src={mainImg} alt="mainImg" />
      </div>
    </header>
  );
}

export default Header;
