import { AnimationLine, LaunchingIcon, ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Herobanner = () => {
  return (
    <>
      <div className="mx-auto relative z-40 max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 xl:pt-10 lg:pt-10 md:pt-10 sm:pt-10 xl:pb-10 lg:pb-10 md:pb-10 sm:pb-10 pb-4 pt-4">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:pt-24 lg:pt-24 md:pt-24 sm:pt-24 pt-0">
          <div className="space-y-6 mt-8 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0">
            <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-2 bg-primary-default bg-opacity-15">
              <LaunchingIcon className="w-5 h-5" />
              <h4 className="text-white font-light text-xs tracking-wider">New Launching </h4>
            </div>
            <div className="space-y-4">
              <h2 className="xl:text-7xl lg:text-7xl md:text-3xl sm:text-3xl text-3xl font-bold bg-gradient-to-b from-primary-default to-primary-lighter text-transparent bg-clip-text">
                Decentralized Finance Transformation
              </h2>
              <p className="font-light text-white xl:text-lg lg:text-lg md:text-base sm:text-base text-sm tracking-wider">
                Espento stands out as the foremost decentralized platform, offering unparalleled
                competitiveness for earning cryptocurrencies within the DeFi market.
              </p>
            </div>
            <div className="space-x-4 flex">
              <Link
                href="https://espento.com/swap"
                className="border-primary-default border-2 bg-primary-default hover:bg-opacity-95 text-white py-2 px-3 rounded-md"
              >
                Trade Now
              </Link>
              <Link
                href="https://espento.com/liquidity"
                className="border-primary-default border-2 hover:bg-opacity-95 text-white py-2 px-3 rounded-md"
              >
                Liquidity
              </Link>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="flex items-center space-x-1">
                <h2 className="text-secondary-default font-light text-sm">Built on </h2>
                <Image src="images/bnbchain.svg" width={100} height={40} alt="espento" />
              </div>

              <div className="w-[1px] bg-primary-lighter h-6"></div>

              <div className="flex items-center space-x-1">
                <h2 className="text-secondary-default font-light text-sm">Building on </h2>
                <Image src="images/escchain.svg" width={100} height={40} alt="espento" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-44 top-0">
        <img src="images/backgroundHerobanner.svg" alt="" />
      </div>
    </>
  );
};
