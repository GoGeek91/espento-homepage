import { ThreeStarIcon } from "@/app/commonIcon";
import Link from "next/link";
import React from "react";

export const Herobanner = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-10 bg-transparent bg-gradient after:animate-spin before:animate-pulse">
      <div className="text-center max-w-3xl mx-auto py-10 w-full space-y-12">
        <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
          <ThreeStarIcon className="w-6 h-6" />
          <h4 className="text-white font-light text-xs tracking-wider">New: Launching Very Soon</h4>
        </div>
        <div className="space-y-4">
          <h2 className="text-7xl font-bold bg-gradient-to-b from-primary-default to-primary-lighter text-transparent bg-clip-text">
            Decentralized Finance Transformation
          </h2>
          <p className="font-light text-white text-lg tracking-wider">
            Espento stands out as the foremost decentralized platform, offering unparalleled competitiveness
            for earning cryptocurrencies within the DeFi market.
          </p>
        </div>
        <div className="space-x-4">
          <Link
            href=""
            className="border-primary-default border-2 bg-primary-default hover:bg-opacity-95 text-white py-2 px-3 rounded-md"
          >
            Trade Now
          </Link>
          <Link
            href=""
            className="border-primary-default border-2 hover:bg-opacity-95 text-white py-2 px-3 rounded-md"
          >
            Trade Now
          </Link>
        </div>
      </div>
    </div>
  );
};
