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
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "2",
    href: "#",
    ImageUrl: "/images/dapps/bridge.svg",
    title: "Bridge",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "3",
    href: "#",
    ImageUrl: "/images/dapps/stake.svg",
    title: "Stake",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "4",
    href: "#",
    ImageUrl: "/images/dapps/game.svg",
    title: "Games",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "5",
    href: "#",
    ImageUrl: "/images/dapps/dao.svg",
    title: "Dao",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "6",
    href: "#",
    ImageUrl: "/images/dapps/lending.svg",
    title: "Lending",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "7",
    href: "#",
    ImageUrl: "/images/dapps/borrow.svg",
    title: "Borrowing",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "8",
    href: "#",
    ImageUrl: "/images/dapps/wallet.svg",
    title: "Wallet",
    subtitle: "Trade crypto instantly across multiple chains",
  },
];

export const Dapps = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-10 bg-transparent">
      <div className="text-left max-w-3xl mx-auto py-10 w-full space-y-12">
        <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
          <ThreeStarIcon className="w-6 h-6" />
          <h4 className="text-white font-light text-xs tracking-wider">DApps</h4>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-7xl font-bold bg-gradient-to-b from-secondary-default to-secondary-dark text-transparent bg-clip-text tracking-wider">
            The technology that powers innovation
          </h2>
          <p className="font-light text-white text-opacity-65 text-lg tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed reprehenderit animi laudantium omnis
            porro eum ipsam voluptatum qui esse. Fuga aliquam ab veritatis delectus hic eos consequuntur
            reprehenderit enim! Assumenda!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {dapp.map((dapps) => (
          <Link
            key={dapps.id}
            href={dapps.href}
            className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8"
          >
            <Image
              src={dapps.ImageUrl}
              width={500}
              height={500}
              alt="espento swap"
              className="opacity-70 hover:opacity-100"
            />
            <div className="space-y-2">
              <h2 className="text-xl text-white">{dapps.title}</h2>
              <p className="text-base text-white font-light text-opacity-70">{dapps.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
