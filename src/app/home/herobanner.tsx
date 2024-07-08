import { AnimationLine, LaunchingIcon, ThreeStarIcon } from "../commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Herobanner = () => {
  return (
    <>
      <video autoPlay loop muted playsInline className="absolute w-full opacity-60">
        <source src="images/background.mp4" />
      </video>
      <div className="relative z-40 mx-auto max-w-7xl space-y-5 px-4 pb-4 pt-4 sm:space-y-10 sm:px-6 sm:pt-10 sm:pb-10 md:space-y-10 md:pt-10 md:pb-10 lg:space-y-10 lg:px-8 lg:pt-10 lg:pb-10 xl:space-y-10 xl:pt-10 xl:pb-10">
        <div className="grid grid-cols-1 pt-0 sm:grid-cols-2 sm:pt-24 md:grid-cols-2 md:pt-24 lg:grid-cols-2 lg:pt-24 xl:grid-cols-2 xl:pt-24">
          <div className="mt-8 space-y-6 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
            <div className="border-primary-default bg-primary-default bg-opacity-15 flex w-fit items-center space-x-2 rounded-full border border-opacity-30 px-3 py-1">
              <LaunchingIcon className="h-5 w-5" />
              <h4 className="text-xs font-light tracking-wider text-white">New Launching </h4>
            </div>
            <div className="space-y-4">
              <h2 className="from-primary-default to-primary-lighter bg-gradient-to-b bg-clip-text text-3xl font-semibold text-transparent sm:text-3xl md:text-3xl lg:text-7xl xl:text-7xl">
                Decentralized Finance Transformation
              </h2>
              <p className="text-sm font-light tracking-wider text-white sm:text-base md:text-base lg:text-lg xl:text-lg">
                Espento stands out as the foremost decentralized platform, offering unparalleled
                competitiveness for earning cryptocurrencies within the DeFi market.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://espento.com/swap"
                className="border-primary-default bg-primary-default rounded-md border-2 py-2 px-3 text-white hover:bg-opacity-95"
              >
                Trade Now
              </Link>
              <Link
                href="https://espento.com/liquidity"
                className="border-primary-default rounded-md border-2 py-2 px-3 text-white hover:bg-opacity-95"
              >
                Liquidity
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <h2 className="text-secondary-default text-sm font-light">Built on </h2>
                <Image src="images/bnbchain.svg" width={100} height={40} alt="espento" />
              </div>

              <div className="bg-primary-lighter h-6 w-[1px]"></div>

              <div className="flex items-center space-x-1">
                <h2 className="text-secondary-default text-sm font-light">Building on </h2>
                <Image src="images/escchain.svg" width={100} height={40} alt="espento" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-44 top-0">
        <Image src="images/backgroundHerobanner.svg" alt="" />
      </div>
    </>
  );
};
