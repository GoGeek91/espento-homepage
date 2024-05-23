import { ThreeStarIcon } from "../commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dapp = [
  {
    id: "1",
    href: "#",
    ImageUrl: "/images/dapps/swap.png",
    title: "Swap",
    subtitle: "Streamline Your Token Exchanges with Ease",
  },
  {
    id: "2",
    href: "https://app.espento.network/bridge",
    ImageUrl: "/images/dapps/bridge.png",
    title: "Bridge",
    subtitle: "Fuel Your Espento Journey: Bridge Your Crypto and Access Powerful DApps    ",
  },
  {
    id: "3",
    href: "#",
    ImageUrl: "/images/dapps/stake.png",
    title: "Stake",
    subtitle: "Earn Passive Income & Build the Future of DeFi Together",
  },
  {
    id: "4",
    href: "#",
    ImageUrl: "/images/dapps/game.png",
    title: "Games",
    subtitle: "Experience Thrilling Adventures and Earn Rewards with Espento Games",
  },
  {
    id: "5",
    href: "#",
    ImageUrl: "/images/dapps/dao.png",
    title: "Dao",
    subtitle: "Empowering Community Governance: Join the Espento DAO Movement Today",
  },
  {
    id: "6",
    href: "#",
    ImageUrl: "/images/dapps/lending.png",
    title: "Lending",
    subtitle: "Grow Your Wealth: Espento's Lending Program Offers Lucrative Opportunities",
  },
  {
    id: "7",
    href: "#",
    ImageUrl: "/images/dapps/borrow.png",
    title: "Borrowing",
    subtitle: "Your Trusted Partner in De-Fi Growth and Prosperity",
  },
  {
    id: "8",
    href: "#",
    ImageUrl: "/images/dapps/wallet.png",
    title: "Wallet",
    subtitle: "Store, Send, and Receive with Confidence: The Ultimate Tool for Effortless Crypto Management",
  },
];

export const Dapps = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-5 bg-transparent px-4 py-10 sm:space-y-10 sm:px-6 md:space-y-10 lg:space-y-10 lg:px-8 xl:space-y-10">
      <div className="mx-auto w-full max-w-3xl space-y-12 py-10 text-left">
        <div className="border-primary-default bg-primary-default bg-opacity-15 mx-auto flex w-fit items-center space-x-1 rounded-full border border-opacity-30 px-3 py-1">
          <h4 className="text-xs font-light tracking-wider text-white">Building on</h4>
          <Image src="images/escchain.svg" width={70} height={20} alt="" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-primary-default text-4xl font-bold tracking-wider sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl">
            The Technology that powers De-Fi innovation
          </h2>
          <p className="text-sm font-light tracking-wider text-white text-opacity-80 sm:text-base md:text-base lg:text-lg xl:text-lg">
            Explore innovative decentralized applications (DApps) designed to revolutionize your crypto
            experience. From seamless asset transfers to lucrative yield farming, unlock endless possibilities
            with Espento
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {dapp.map((dapps) => (
          <Link
            key={dapps.id}
            href={dapps.href}
            className="border-secondary-dark space-y-8 rounded-3xl border bg-white bg-opacity-5 p-2 text-left sm:space-y-6 sm:p-8 md:space-y-6 md:p-8 lg:space-y-6 lg:p-8 xl:space-y-6 xl:p-8"
          >
            <div className="mx-auto h-28 w-36 items-center sm:h-32 sm:w-36 md:h-32 md:w-36 lg:h-32 lg:w-36 xl:h-32 xl:w-36">
              <Image
                src={dapps.ImageUrl}
                width={500}
                height={500}
                alt="espento swap"
                className="hover:opacity-100"
              />
            </div>
            <div className="space-y-2 pb-3 text-center">
              <h2 className="text-sm text-white">{dapps.title}</h2>
              <p className="text-xs font-light text-white text-opacity-70">{dapps.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
