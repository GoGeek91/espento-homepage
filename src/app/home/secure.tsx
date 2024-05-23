import { AnimationLine, ThreeStarIcon } from "../commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="mx-auto max-w-7xl space-y-5 bg-transparent px-4 py-5 sm:space-y-10 sm:px-6 md:space-y-10 lg:space-y-10 lg:px-8 xl:space-y-10">
      <div className="relative space-y-8 py-8 lg:space-y-14 lg:py-24 xl:space-y-14 xl:py-24 ">
        <div className="mx-auto w-full max-w-4xl space-y-12 py-10 text-left">
          <div className="border-primary-default bg-primary-default bg-opacity-15 mx-auto flex w-fit items-center space-x-1 rounded-full border border-opacity-30 px-3 py-1">
            <ThreeStarIcon className="h-6 w-6" />
            <h4 className="text-xs font-light tracking-wider text-white">Features</h4>
          </div>
          <div className="space-y-4 text-center">
            <h2 className="from-secondary-default to-secondary-lighter bg-gradient-to-b bg-clip-text text-4xl font-semibold tracking-wider text-transparent sm:text-3xl md:text-3xl lg:text-7xl xl:text-7xl">
              Tailor Your Experience to Your Needs
            </h2>
            <p className="text-opacity-65 text-lg font-light tracking-wider text-white">
              Discover the Revolutionary Capabilities Driving Espento&lsquo;s Blockchain Innovation and
              Transforming the Future of Decentralized Finance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {secureBox.map((secureBoxs) => (
            <div
              key={secureBoxs.id}
              className="border-secondary-dark card-gradient relative rounded-3xl border p-6 text-left"
            >
              <img
                src="/images/developer-bg-blue.svg"
                className="absolute left-0 top-0 w-full object-cover opacity-20"
              />

              <div className="border-secondary-dark border-b-secondary-dark absolute left-8 -top-8 rounded-full border border-b-2 bg-[#14112c] p-2.5">
                <Image src={secureBoxs.ImageUrl} width={44} height={44} alt="Espento" className="m-auto" />
              </div>
              <div className="mt-9 space-y-1">
                <h2 className="text-lg font-medium tracking-wide text-white">{secureBoxs.title} </h2>
                <p className="text-justify text-sm font-light tracking-wider text-white text-opacity-75">
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
