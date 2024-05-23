import { ThreeStarIcon } from "../commonIcon";
import Image from "next/image";
import React from "react";

export const Globe = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-5 bg-transparent px-4 py-10 sm:space-y-10 sm:px-6 md:space-y-10 lg:space-y-10 lg:px-8 xl:space-y-10">
      <div className="mx-auto w-full max-w-5xl space-y-12 py-10 text-left">
        <div className="border-primary-default bg-primary-default bg-opacity-15 mx-auto flex w-fit items-center space-x-1 rounded-full border border-opacity-30 px-3 py-1">
          <ThreeStarIcon className="h-6 w-6" />
          <h4 className="text-xs font-light tracking-wider text-white">Global</h4>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="from-secondary-default to-secondary-dark bg-gradient-to-b bg-clip-text text-3xl font-semibold tracking-wider text-transparent sm:text-3xl md:text-3xl lg:text-7xl xl:text-7xl">
            Empowerment Through Espento DeFi
          </h2>
          <p className="text-opacity-65 text-sm font-light tracking-wider text-white sm:text-base md:text-base lg:text-lg xl:text-lg">
            Discover boundless financial opportunities with Espento DeFi. Seamlessly connecting users globally
            to decentralized finance for unparalleled accessibility and empowerment. Join us in reshaping the
            future of finance!
          </p>
        </div>
      </div>
      <div className="mx-auto w-fit">
        <Image src="images/globe.svg" width={900} height={900} alt="www" />
      </div>
    </div>
  );
};
