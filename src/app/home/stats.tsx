import { ThreeStarIcon } from "../commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { rootAppState, useAppSelector } from "@src/redux";

export const Stats = () => {
  // const DATA = useAppSelector((state: rootAppState) => state.globalReducer.globalStats);

  return (
    <div className="relative mx-auto max-w-6xl items-center justify-between space-y-3 py-8 px-4 sm:space-y-20 sm:px-8 md:space-y-20 md:px-8 lg:space-y-20 lg:py-24 lg:px-8 xl:space-y-20 xl:py-24 xl:px-8">
      <div className="">
        {/* Background gradient */}
        <div className="absolute left-10 z-40">
          <Image src="images/stats/stats.svg" alt="" />
        </div>
        {/* Background gradient2 */}
        <div className="absolute right-32 z-40 -mt-10">
          <Image src="images/stats/statsBg.svg" alt="" />
        </div>
      </div>
      <div className="border-secondary-dark relative space-y-8 rounded-3xl border bg-black bg-opacity-100 p-8 text-center sm:space-y-10 md:space-y-10 lg:space-y-10 xl:space-y-10">
        <div className="mx-auto space-y-1">
          <h2 className="from-primary-default to-primary-lighter bg-gradient-to-b bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
            <span className="font-light text-white">Impressive</span> on-chain data
          </h2>
          <div className="mx-auto flex w-fit items-center rounded-full">
            <Image src="images/bnbchain.svg" width={120} height={40} alt="espento" />
          </div>
        </div>

        <div className="space-y-10 sm:space-y-10 md:space-y-10 lg:space-y-10 xl:space-y-10">
          <div className="mt-10 grid grid-cols-2 gap-5 space-y-0 sm:mt-0 sm:grid-cols-3 sm:gap-0 sm:space-y-0 md:mt-0 md:grid-cols-3 md:gap-0 md:space-y-0 lg:mt-0 lg:grid-cols-3 lg:gap-0 lg:space-y-0 xl:mt-0 xl:grid-cols-3 xl:gap-0 xl:space-y-0">
            {/* First Stats */}
            <div className="gradient-border space-y-2 border-0 sm:border-r md:border-r lg:border-r xl:border-r">
              <h2 className="text-2xl font-medium text-white"> $82,909,605</h2>
              <p className="text-sm font-light text-white text-opacity-50">Fully Diluted Valuation</p>
            </div>
            {/* Second Stats */}
            <div className="gradient-border space-y-2 border-b sm:border-r md:border-r lg:border-r xl:border-r">
              <h2 className="text-2xl font-medium text-white">-</h2>
              <p className="text-sm font-light text-white text-opacity-50">Market cap</p>
            </div>
            {/* Third Stats */}
            <div className="space-y-2">
              <h2 className="text-2xl font-medium text-white">3571</h2>
              <p className="text-sm font-light text-white text-opacity-50">Whitelisted</p>
            </div>

            <div className="gradient-border block space-y-2 text-center sm:hidden sm:space-y-2 sm:border-r md:hidden md:space-y-2 md:border-r lg:hidden lg:space-y-2 lg:border-r xl:hidden xl:space-y-2 xl:border-r">
              <h2 className="text-2xl font-medium text-white">$0</h2>
              <p className="text-sm font-light text-white text-opacity-50">24 Hr Volume</p>
            </div>
            {/* Second Stats */}
            <div className="block space-y-2 lg:hidden lg:space-y-2 lg:border-r xl:hidden">
              <h2 className="text-2xl font-medium text-white">$2,231,618.34</h2>
              <p className="text-sm font-light text-white text-opacity-50">Liquidity</p>
            </div>
          </div>

          {/*  */}

          <div className="via-secondary-lighter hidden h-[0.5px] bg-gradient-to-r from-transparent to-transparent sm:block md:block lg:block xl:block"></div>
          <div className="hidden grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
            {/* First Stats */}
            <div className="gradient-border space-y-8 text-center sm:space-y-2 sm:border-r md:space-y-2 md:border-r lg:space-y-2 lg:border-r xl:space-y-2 xl:border-r">
              <h2 className="text-2xl font-medium text-white">$0</h2>
              <p className="text-sm font-light text-white text-opacity-50">24 Hr Volume</p>
            </div>
            {/* Second Stats */}
            <div className="space-y-2">
              <h2 className="text-2xl font-medium text-white">$2,231,618.34</h2>
              <p className="text-sm font-light text-white text-opacity-50">Liquidity</p>
            </div>
          </div>
        </div>

        <div className="relative z-50 mx-auto flex w-fit items-center space-x-3 ">
          <Link href="https://www.coingecko.com/en/coins/espento" target="_blank">
            <Image src="images/coingecko.svg" width={116} height={27} alt="espento" />
          </Link>
          <div className="h-6 w-[1px] bg-white"></div>
          <Link href="https://coinmarketcap.com/currencies/espento/" target="_blank">
            <Image src="images/coinmarketcap.svg" width={158} height={29} alt="espento" />
          </Link>
        </div>
      </div>
    </div>
  );
};
