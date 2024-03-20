import { AnimationLine, ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
const secureBox = [
  {
    id: "1",
    ImageUrl: "/images/secure/s1.svg",
    title: "Maximum LP Rewards",
    subtitle:
      "Earn LP rewards from trading fees by providing Liquidity to the Espento trading pool, 0.18% of fees are allocated to Liquidity Providers.",
  },
  {
    id: "2",
    ImageUrl: "/images/secure/s2.svg",
    title: "Lowest Trading Fees",
    subtitle:
      "Trade with Espento, industry's lowest trading fees provider platform that shares 100% fees with its LP providers.",
  },
  {
    id: "3",
    ImageUrl: "/images/secure/s3.svg",
    title: "Highest Borrow Ratio ",
    subtitle:
      "Get the highest borrow tokens by providing fewer collateral from Espento, Borrow up to 150% of your collateral.",
  },
];

export const Secure = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-5 bg-transparent">
      <div className="relative xl:py-24 lg:py-24 py-8 xl:space-y-14 lg:space-y-14 space-y-8 ">
        <div className="text-left max-w-4xl mx-auto py-10 w-full space-y-12">
          <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
            <ThreeStarIcon className="w-6 h-6" />
            <h4 className="text-white font-light text-xs tracking-wider">Features</h4>
          </div>
          <div className="space-y-4 text-center">
            <h2 className="xl:text-7xl lg:text-7xl md:text-3xl sm:text-3xl text-4xl font-bold bg-gradient-to-b from-secondary-default to-secondary-lighter text-transparent bg-clip-text tracking-wider">
              Tailor Your Experience to Your Needs
            </h2>
            <p className="font-light text-white text-opacity-65 text-lg tracking-wider">
              Discover the Revolutionary Capabilities Driving Espento&lsquo;s Blockchain Innovation and
              Transforming the Future of Decentralized Finance.
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-16">
          {secureBox.map((secureBoxs) => (
            <div
              key={secureBoxs.id}
              className="text-left rounded-3xl border border-secondary-dark p-6 relative card-gradient"
            >
              <img
                src="/images/developer-bg-blue.svg"
                className="w-full object-cover absolute left-0 top-0 opacity-20"
              />

              <div className="bg-[#14112c] rounded-full border border-secondary-dark absolute border-b-2 border-b-secondary-dark left-8 -top-8 p-2.5">
                <Image src={secureBoxs.ImageUrl} width={44} height={44} alt="Espento" className="m-auto" />
              </div>
              <div className="mt-9 space-y-1">
                <h2 className="text-white text-lg font-medium tracking-wide">{secureBoxs.title} </h2>
                <p className="text-white font-light text-sm text-opacity-75 text-justify tracking-wider">
                  {secureBoxs.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
