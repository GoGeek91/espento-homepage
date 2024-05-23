import {
  AppIcon,
  CommunityIcon,
  ExchangeIcon,
  FeesIcon,
  SpeedIcon,
  StakeIcon,
  ThreeStarIcon,
} from "../commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const point = [
  {
    id: "1",
    icons: <SpeedIcon className="h-8 w-8" />,
    title: "High Transaction Speed & Scalability",
  },
  {
    id: "1",
    icons: <StakeIcon className="h-8 w-8" />,
    title: "Proof-of-Stake Authority (POSA) Consensus",
  },
  {
    id: "1",
    icons: <AppIcon className="h-8 w-8" />,
    title: "Focus on Decentralized Applications (DApps)",
  },
  {
    id: "1",
    icons: <FeesIcon className="h-8 w-8" />,
    title: "Lower Transaction Fees",
  },
  {
    id: "1",
    icons: <ExchangeIcon className="h-8 w-8" />,
    title: "Interoperability with Binance Exchange",
  },
  {
    id: "1",
    icons: <CommunityIcon className="h-8 w-8" />,
    title: "Community-Driven Development",
  },
];

export const Bluecard = () => {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="rounded-3xl bg-gradient-to-r from-[#064CC6] to-[#2F78F7]">
        <div className="relative">
          <div className="bgspider rounded-3xl">
            <div className="md:gap-18 grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 sm:gap-10 sm:p-16 md:grid-cols-2 md:p-16 lg:grid-cols-2 lg:gap-28 lg:p-16 xl:grid-cols-2 xl:gap-28 xl:p-16">
              <div className="space-y-6 sm:space-y-4 md:space-y-4 lg:space-y-7 xl:space-y-7">
                <div className="flex w-fit items-center space-x-1 rounded-full border border-white border-opacity-30 bg-white bg-opacity-30 px-3 py-1">
                  <h4 className="text-xs font-light tracking-wider text-white">Building on</h4>
                  <Image src="images/escchain.svg" width={70} height={20} alt="" />
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-5 xl:space-y-5">
                  <h2 className="leading text-shadow-xl text-2xl font-bold tracking-wider text-white sm:text-xl md:text-xl lg:text-5xl xl:text-5xl">
                    Empowered by Espento&apos;s Dynamic Blockchain
                  </h2>
                  <p className="text-opacity-85 text-sm font-light text-white sm:text-base md:text-base lg:text-lg xl:text-lg">
                    Experience the power of innovation with Espento Blockchain. Seamlessly merge security,
                    scalability, and efficiency for a transformative financial landscape. Join the revolution
                    today.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Link
                      href="https://www.espento.network/"
                      target="_blank"
                      className="text-primary-default flex w-fit rounded-md border border-white bg-white px-4 py-1.5 font-normal"
                    >
                      Visit
                    </Link>
                    <Link
                      href="https://escscan.com/"
                      target="_blank"
                      className="flex w-fit transform rounded-md border border-white bg-[#0e54ce] px-4 py-1.5 font-normal text-white hover:bg-white hover:text-[#0e54ce]"
                    >
                      Explorer
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {point.map((points) => (
                  <div className="flex items-center space-x-5" key={points.id}>
                    <div className="w-fit rounded-md bg-white p-2">{points.icons}</div>
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
