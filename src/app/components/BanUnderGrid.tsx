import BanUnderGridImg from "../assets/svg/banner1.svg";
import mobileBanner from "../assets/svg/mobileBanner.svg";
import Image from "next/image";

function BanUnderGrid() {
  return (
    <div className="md:px-12 py-10 md:py-[100px]">
      <div className="relative md:h-auto md:rounded-xl overflow-hidden border border-BanUndGrdGreen">
        <Image
          className="hidden sm:block w-[100%]"
          src={BanUnderGridImg}
          alt="banner"
        />
        <Image className="sm:hidden w-[100%]" src={mobileBanner} alt="banner" />
        <div className="absolute h-full w-full top-0 left-0 bottom-0 right-0 bg-BanUndGrdGreen "></div>
        <div className="absolute right-0 left-0 top-0 bottom-0 m-auto flex flex-col items-center justify-center gap-3 md:gap-3 lg:gap-5">
          <p className="hidden md:block md:max-w-[640px] lg:max-w-[770px] text-white md:text-2xl lg:text-4xl leading-[46px] font-semibold text-center">
            Unlock the Power of Your Ideas — Request Your Free Project Quote
            Now.
          </p>
          <p className="md:hidden text-white px-3 text-2xl leading-[31px] font-bold text-center">
            Request Your Free Project Quote Now.
          </p>
          <p className="px-2 max-w-[350px] md:max-w-[580px] mb-2 text-sm text-white leading-5 text-center">
            Our team of experts is dedicated to understanding your unique needs,
            offering tailored solutions, and ensuring that every detail aligns
            with your goals.
          </p>
          <button className="px-8 lg:px-10 py-2 lg:py-[10px] bg-white text-newGreen rounded-full text-sm lg:text-base font-semibold md:hover:text-white md:hover:bg-transparent border-2 border-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default BanUnderGrid;
