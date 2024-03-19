import { ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import React from "react";

type Props = {};

export const Dapps = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-10 bg-transparent">
      <div className="text-left max-w-3xl mx-auto py-10 w-full space-y-12">
        <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
          <ThreeStarIcon className="w-6 h-6" />
          <h4 className="text-white font-light text-xs tracking-wider">DApps</h4>
        </div>
        <div className="space-y-4">
          <h2 className="text-7xl font-bold bg-gradient-to-b from-secondary-default to-secondary-dark text-transparent bg-clip-text tracking-wider">
            The technology that powers innovation
          </h2>
          <p className="font-light text-white text-opacity-65 text-lg tracking-wider"></p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Swap */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8">
          <Image
            src="/images/dapps/swap.png"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Swap</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>
        {/* Stake */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8">
          <Image
            src="/images/dapps/stake.svg"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Stake</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>
        {/* Bridge */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8 col-span-2">
          <Image
            src="/images/dapps/bridge.svg"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Bridge</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>

        {/* Games */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8">
          <Image
            src="/images/dapps/game.svg"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Games</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>
        {/* Dao */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8">
          <Image
            src="/images/dapps/dao.svg"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Dao</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>
        {/* Lending */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8">
          <Image
            src="/images/dapps/lending.svg"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Lending</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>
        {/* Borrowing */}
        <div className="bg-white bg-opacity-5 text-left rounded-3xl p-8 border border-secondary-dark space-y-8">
          <Image
            src="/images/dapps/borrow.svg"
            width={500}
            height={500}
            alt="espento swap"
            className="opacity-70"
          />
          <div className="space-y-2">
            <h2 className="text-xl text-white">Borrowing</h2>
            <p className="text-base text-white font-light text-opacity-70">
              Trade crypto instantly across multiple chains
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
