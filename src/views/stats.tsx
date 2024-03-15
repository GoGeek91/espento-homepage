import { ThreeStarIcon } from "@/app/commonIcon";
import React from "react";

export const Stats = () => {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between xl:py-24 lg:py-24 py-8 space-y-20 xl:px-8 lg:px-8 md:px-8 sm:px-8 px-4">
      <div className="bg-white bg-opacity-5 text-center rounded-3xl p-8 border border-secondary-dark space-y-8">
        <h2 className="text-4xl font-semibold bg-gradient-to-b from-primary-default to-primary-lighter text-transparent bg-clip-text">
          <span className="font-light text-white">Impressive</span> on-chain data.
        </h2>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1">
          {/* First Stats */}
          <div className="">
            <h2 className="text-white font-medium text-4xl">$75,484,248</h2>
            <p className="text-white text-opacity-75 font-light">Fully Diluted Valuation</p>
          </div>
          {/* Second Stats */}
          <div className="">
            <h2 className="text-white font-medium text-4xl">$75,484,248</h2>
            <p className="text-white text-opacity-75 font-light">Market cap</p>
          </div>
          {/* Third Stats */}
          <div className="">
            <h2 className="text-white font-medium text-4xl">$75,484,248</h2>
            <p className="text-white text-opacity-75 font-light">Whitelisted</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-black via-secondary-lighter to-black h-[1px]"></div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {/* First Stats */}
          <div className="text-center">
            <h2 className="text-white font-medium text-4xl">$75,484,248</h2>
            <p className="text-white text-opacity-75 font-light">Fully Diluted Valuation</p>
          </div>
          {/* Second Stats */}
          <div className="">
            <h2 className="text-white font-medium text-4xl">$75,484,248</h2>
            <p className="text-white text-opacity-75 font-light">Market cap</p>
          </div>
        </div>
      </div>
    </div>
  );
};
