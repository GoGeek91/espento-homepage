import { ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Stats = () => {
  return (
    <div className="relative mx-auto max-w-6xl items-center justify-between xl:py-24 lg:py-24 py-8 space-y-20 xl:px-8 lg:px-8 md:px-8 sm:px-8 px-4">
      <div className="">
        {/* Background gradient */}
        <div className="absolute left-10 z-40">
          <img src="images/stats/stats.svg" alt="" />
        </div>
        {/* Background gradient2 */}
        <div className="absolute right-32 -mt-10 z-40">
          <img src="images/stats/statsBg.svg" alt="" />
        </div>
      </div>
      <div className="relative bg-black bg-opacity-100 text-center rounded-3xl p-8 border border-secondary-dark xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-0">
        <div className="mx-auto space-y-1">
          <h2 className="text-4xl font-semibold bg-gradient-to-b from-primary-default to-primary-lighter text-transparent bg-clip-text">
            <span className="font-light text-white">Impressive</span> on-chain data.
          </h2>
          <div className="flex items-center w-fit rounded-full mx-auto">
            <Image src="images/bnbchain.svg" width={120} height={40} alt="espento" />
          </div>
        </div>

        <div className="xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-10">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 xl:space-y-0 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-8">
            {/* First Stats */}
            <div className="gradient-border xl:border-r lg:border-r md:border-r sm:border-r border-0 space-y-2">
              <h2 className="text-white font-medium text-2xl">$75,484,248</h2>
              <p className="text-white text-opacity-50 font-light text-sm">Fully Diluted Valuation</p>
            </div>
            {/* Second Stats */}
            <div className="gradient-border xl:border-r lg:border-r md:border-r sm:border-r space-y-2 border-b">
              <h2 className="text-white font-medium text-2xl">$75,484,248</h2>
              <p className="text-white text-opacity-50 font-light text-sm">Market cap</p>
            </div>
            {/* Third Stats */}
            <div className="space-y-2">
              <h2 className="text-white font-medium text-2xl">$75,484,248</h2>
              <p className="text-white text-opacity-50 font-light text-sm">Whitelisted</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-transparent via-secondary-lighter to-transparent h-[0.5px] xl:block lg:block md:block sm:block hidden"></div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            {/* First Stats */}
            <div className="text-center gradient-border xl:border-r lg:border-r md:border-r sm:border-r xl:space-y-2 lg:space-y-2 md:space-y-2 sm:space-y-2 space-y-8">
              <h2 className="text-white font-medium text-2xl">$75,484,248</h2>
              <p className="text-white text-opacity-50 font-light text-sm">Fully Diluted Valuation</p>
            </div>
            {/* Second Stats */}
            <div className="space-y-2">
              <h2 className="text-white font-medium text-2xl">$75,484,248</h2>
              <p className="text-white text-opacity-50 font-light text-sm">Market cap</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 w-fit mx-auto z-50 relative">
          <Link href="#">
            <Image src="images/coingecko.svg" width={116} height={27} alt="espento" />
          </Link>
          <div className="w-[1px] bg-white h-6"></div>
          <Link href="#">
            <Image src="images/coinmarketcap.svg" width={158} height={29} alt="espento" />
          </Link>
        </div>
      </div>
    </div>
  );
};
