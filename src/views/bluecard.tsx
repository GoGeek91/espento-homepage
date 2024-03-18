import {
  AppIcon,
  CommunityIcon,
  ExchangeIcon,
  FeesIcon,
  SpeedIcon,
  StakeIcon,
  ThreeStarIcon,
} from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const point = [
  {
    id: "1",
    icons: <SpeedIcon className="w-8 h-8" />,
    title: "High Transaction Speed & Scalability",
  },
  {
    id: "1",
    icons: <StakeIcon className="w-8 h-8" />,
    title: "Proof-of-Stake Authority (POSA) Consensus",
  },
  {
    id: "1",
    icons: <AppIcon className="w-8 h-8" />,
    title: "Focus on Decentralized Applications (DApps)",
  },
  {
    id: "1",
    icons: <FeesIcon className="w-8 h-8" />,
    title: "Lower Transaction Fees",
  },
  {
    id: "1",
    icons: <ExchangeIcon className="w-8 h-8" />,
    title: "Interoperability with Binance Exchange",
  },
  {
    id: "1",
    icons: <CommunityIcon className="w-8 h-8" />,
    title: "Community-Driven Development",
  },
];

export const Bluecard = () => {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between xl:py-24 lg:py-24 py-8 space-y-20 xl:px-8 lg:px-8 md:px-8 sm:px-8 px-4">
      <div className="bg-gradient-to-r from-primary-light to-primary-main rounded-3xl">
        <div className="relative">
          <div className="bgspider h-fi rounded-3xl">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:p-16 lg:p-16 md:p-16 sm:p-16 p-6 xl:gap-28 lg:gap-28 md:gap-18 sm:gap-10 gap-16">
              <div className="xl:space-y-7 lg:space-y-7 md:space-y-4 sm:space-y-4 space-y-6">
                <div className="flex items-center border w-fit rounded-full px-3 py-1 border-white border-opacity-30 space-x-1 bg-white bg-opacity-35">
                  <h4 className="text-white font-light text-xs tracking-wider">Building on</h4>
                  <Image src="images/escchain.svg" width={70} height={20} alt="" />
                </div>
                <div className="xl:space-y-5 lg:space-y-5 md:space-y-5 sm:space-y-5 space-y-4">
                  <h2 className="xl:text-5xl lg:text-5xl md:text-xl sm:text-xl text-2xl font-bold text-white tracking-wider leading text-shadow-xl">
                    Empowered by Espento&apos;s Dynamic Blockchain
                  </h2>
                  <p className="text-white font-light xl:text-lg lg:text-lg md:text-base sm:text-base text-sm text-opacity-85">
                    Experience the power of innovation with Espento Blockchain. Seamlessly merge security,
                    scalability, and efficiency for a transformative financial landscape. Join the revolution
                    today.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Link
                      href="https://www.espento.network/"
                      target="_blank"
                      className="bg-white px-4 py-1.5 flex w-fit border border-white text-primary-default font-normal rounded-md"
                    >
                      Visit
                    </Link>
                    <Link
                      href="https://escscan.com/"
                      target="_blank"
                      className="px-4 py-1.5 flex w-fit border transform bg-[#0e54ce] hover:bg-white hover:text-[#0e54ce] border-white text-white font-normal rounded-md"
                    >
                      Explorer
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {point.map((points) => (
                  <div className="flex items-center space-x-5" key={points.id}>
                    <div className="bg-white p-2 w-fit rounded-md">{points.icons}</div>
                    <h2 className="text-white">{points.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
