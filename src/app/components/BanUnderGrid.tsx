import BanUnderGridImg from "../assets/svg/banner1.svg";
import Image from "next/image";

function BanUnderGrid() {
  return (
    <div className="px-3 md:px-12 py-[100px]">
      <div className="relative rounded-xl overflow-hidden border border-BanUndGrdGreen">
        <Image className="w-[100%]" src={BanUnderGridImg} alt="banner" />
        <div className="absolute h-full w-full top-0 left-0 bottom-0 right-0 bg-BanUndGrdGreen "></div>
        <div className="absolute right-0 left-0 top-0 bottom-0 m-auto flex flex-col items-center justify-center gap-5">
          <p className="max-w-[770px] text-white text-4xl leading-[46px] font-semibold text-center">
            Unlock the Power of Your Ideas — Request Your Free Project Quote
            Now.
          </p>
          <p className="max-w-[580px] text-white leading-5 text-center">
            Our team of experts is dedicated to understanding your unique needs,
            offering tailored solutions, and ensuring that every detail aligns
            with your goals.
          </p>
          <button className="px-10 py-[10px] bg-white text-newGreen rounded-full font-semibold md:hover:text-white md:hover:bg-transparent border-2 border-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default BanUnderGrid;
