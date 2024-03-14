import { ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import React from "react";

export const Globe = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-10 bg-transparent">
      <div className="text-left max-w-4xl mx-auto py-10 w-full space-y-12">
        <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
          <ThreeStarIcon className="w-6 h-6" />
          <h4 className="text-white font-light text-xs tracking-wider">DApps</h4>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-7xl font-bold bg-gradient-to-b from-secondary-default to-secondary-dark text-transparent bg-clip-text tracking-wider">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="font-light text-white text-opacity-65 text-lg tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum, odio magnam deserunt,
            voluptate incidunt libero corporis molestias, beatae quae ratione doloremque provident amet atque
            voluptates ea eum aliquid autem?
          </p>
        </div>
      </div>
      <div className="mx-auto w-fit">
        <Image src="images/globe.svg" width={900} height={900} alt="www" />
      </div>
    </div>
  );
};
