import { ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dapp = [
  {
    id: "1",
    href: "#",
    ImageUrl: "/images/dapps/swap.svg",
    title: "Swap",
    subtitle: "Streamline Your Token Exchanges with Ease",
  },
  {
    id: "2",
    href: "#",
    ImageUrl: "/images/dapps/bridge.svg",
    title: "Bridge",
    subtitle: "Fuel Your Espento Journey: Bridge Your Crypto and Access Powerful DApps    ",
  },
  {
    id: "3",
    href: "#",
    ImageUrl: "/images/dapps/stake.svg",
    title: "Stake",
    subtitle: "Earn Passive Income & Build the Future of DeFi Together",
  },
  {
    id: "4",
    href: "#",
    ImageUrl: "/images/dapps/game.svg",
    title: "Games",
    subtitle: "Experience Thrilling Adventures and Earn Rewards with Espento Games",
  },
  {
    id: "5",
    href: "#",
    ImageUrl: "/images/dapps/dao.svg",
    title: "Dao",
    subtitle: "Empowering Community Governance: Join the Espento DAO Movement Today",
  },
  {
    id: "6",
    href: "#",
    ImageUrl: "/images/dapps/lending.svg",
    title: "Lending",
    subtitle: "Grow Your Wealth: Espento's Lending Program Offers Lucrative Opportunities",
  },
  {
    id: "7",
    href: "#",
    ImageUrl: "/images/dapps/borrow.svg",
    title: "Borrowing",
    subtitle: "Your Trusted Partner in De-Fi Growth and Prosperity",
  },
  {
    id: "8",
    href: "#",
    ImageUrl: "/images/dapps/wallet.svg",
    title: "Wallet",
    subtitle: "Store, Send, and Receive with Confidence: The Ultimate Tool for Effortless Crypto Management",
  },
];

export const Dapps = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-10 bg-transparent">
      <div className="text-left max-w-3xl mx-auto py-10 w-full space-y-12">
        <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
          <h4 className="text-white font-light text-xs tracking-wider">Building on</h4>
          <Image src="images/escchain.svg" width={70} height={20} alt="" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="xl:text-6xl lg:text-6xl md:text-3xl sm:text-3xl text-4xl font-bold text-primary-default tracking-wider">
            The Technology that powers De-Fi innovation
          </h2>
          <p className="font-light text-white text-opacity-80 xl:text-lg lg:text-lg md:text-base sm:text-base text-sm tracking-wider">
            Explore innovative decentralized applications (DApps) designed to revolutionize your crypto
            experience. From seamless asset transfers to lucrative yield farming, unlock endless possibilities
            with Espento
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-4">
        {dapp.map((dapps) => (
          <Link
            key={dapps.id}
            href={dapps.href}
            className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8"
          >
            <div className="w-48 h-48 mx-auto items-center">
              <Image
                src={dapps.ImageUrl}
                width={500}
                height={500}
                alt="espento swap"
                className="opacity-70 hover:opacity-100"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-base text-white">{dapps.title}</h2>
              <p className="text-sm text-white font-light text-opacity-70">{dapps.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
