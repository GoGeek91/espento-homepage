import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="text-center">
        <h2 className="text-5xl text-white">Tokenomics</h2>
      </div>

      <div className="space-y-14">
        <div className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-white text-opacity-70">By Espento</h2>
            <h3 className="text-white text-4xl">The Espento Utility Token</h3>
          </div>
          <Image src="/images/tokens/spent.svg" width={150} height={150} alt="Espento Spent" />
          <p className="text-white font-light">
            The Most Competitive Decentralized Platform For Earning Crypto In The DeFi Market. Espento Offers
            A Unique Farm, Staking, Lending-Borrowing, Gaming & Many Other DApps For Earning By Sharing The
            Revenue To Its Token Holders.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-xl">Token Details</h2>
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-300">
              <tbody className="bg-transparent">
                <tr className="bg-[#222531]">
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-base font-light text-white sm:pl-3">
                    Ticker
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-base font-light text-white">SPENT</td>
                </tr>
                <tr className="bg-transparent">
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-base font-light text-white sm:pl-3">
                    Token Type
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-base font-light text-white">BEP-20</td>
                </tr>
                <tr className="bg-[#222531]">
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-base font-light text-white sm:pl-3">
                    Contract address
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-base font-light text-white">
                    0x178fBE1cf4775fBDb9756D6349195a05799c0fe5
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-base font-light text-white sm:pl-3">
                    Bscscan link
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-base font-light text-white">
                    <Link href="https://bscscan.com/token/0x178fbe1cf4775fbdb9756d6349195a05799c0fe5">
                      <span className="text-brand hover:text-gray-400 hover:underline">
                        https://bscscan.com/token/0x178fbe1cf4775fbdb9756d6349195a05799c0fe5
                      </span>
                    </Link>
                  </td>
                </tr>
                <tr className="bg-[#222531]">
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-base font-light text-white sm:pl-3">
                    Total Supply
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-base font-light text-white">
                    51,000,000 SPENT
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-white text-xl">Tokenomics</h2>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-5 xl:grid-cols-4 xl:gap-5">
            {/* First */}
            <div className="mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">SALE ROUND</h2>
                <h2 className="text-primary-default text-xl font-medium">12%</h2>
              </div>
            </div>
            {/* Second */}
            <div className="mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">DEVELOPMENT</h2>
                <h2 className="text-pink-500 text-xl font-medium">10%</h2>
              </div>
            </div>
            {/* Third */}
            <div className="mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">POOL LIQUIDITY</h2>
                <h2 className="text-yellow-500 text-xl font-medium">2%</h2>
              </div>
            </div>
            {/* Fourth */}
            <div className="mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">AIRDROP</h2>
                <h2 className="text-green-500 text-xl font-medium">1%</h2>
              </div>
            </div>
            {/* Fifth */}
            <div className="col-span-2 mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">RESERVE FOR POOL LIQUIDITY</h2>
                <h2 className="text-orange-600 text-xl font-medium">48%</h2>
              </div>
            </div>
            {/* Sixth */}
            <div className="mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">GAMING</h2>
                <h2 className="text-indigo-500 text-xl font-medium">5%</h2>
              </div>
            </div>
            {/* Seventh */}
            <div className="mb-0 w-full flex-none p-0.5 md:mb-2 md:w-full md:p-1 lg:mb-2 lg:w-full lg:p-1.5 xl:mb-2 xl:w-full xl:p-1.5">
              <div className="relative p-4 bg-[#2e313e] border border-[#434551] rounded-lg">
                <h2 className="text-white text-sm">MARKETING</h2>
                <h2 className="text-red-500 text-xl font-medium">22%</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Image src="/images/fundsAllocation.svg" width={1200} height={1200} alt="espento" />
        </div>
      </div>
    </div>
  );
}
