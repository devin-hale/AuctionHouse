"use client";
import { MarketingSC } from "./components/marketingShowCase";

export default function Home() {
  return (
    <div className="">
      <div className="sm:hidden flex-nowrap font-frizquad flex flex-row font-bold text-[25px] items-center justify-center select-none">
        <img
          src="./assets/icons/coinLogo.svg"
          alt=""
          className="h-[30px] mr-3 select-none"
        />
        <p className=" line-clamp-1">The Auction House</p>
      </div>
      <MarketingSC />
      <div className="mt-[40px] sm:mt-auto sm:h-[400px] w-[100%] overflow-hidden sm:absolute sm:bottom-0 flex flex-col-reverse sm:flex-row items-start">
        <img
          src="./gallywix.png"
          alt=""
          className="h-[250px] sm:h-[600px] object-scale-down sm:object-cover drop-shadow-[-5px_4px_2px_rgba(0,0,0,.45)]"
        />
        <p className="h-[50px] sm:w-[100%] text-[20px] sm:text-[45px] font-frizquad m-auto">
          <em>{'"We make making money easy! For me, that is."'}</em>
        </p>
      </div>
    </div>
  );
}
