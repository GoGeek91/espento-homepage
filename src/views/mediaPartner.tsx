import { ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const marqueSlider = [
  {
    id: "1",
    href: "https://www.binance.com/en-IN/price/espento",
    imageUrl: "/images/logos/first/binance.svg",
    alt: "binance",
  },

  {
    id: "2",
    href: "https://www.bnbchain.org/en/wallets",
    imageUrl: "/images/logos/first/bscscan.svg",
    alt: "bscscan",
  },
  {
    id: "3",
    href: "https://www.forbes.com/digital-assets/assets/espento-spent/?sh=5fa5ad75dab5",
    imageUrl: "/images/logos/first/forbes.svg",
    alt: "forbes",
  },
  {
    id: "4",
    href: "https://www.coinbase.com/price/espento",
    imageUrl: "/images/logos/first/coinbase.svg",
    alt: "coinbase",
  },
  {
    id: "5",
    href: "https://www.bybit.com/en/coin-price/espento/",
    imageUrl: "/images/logos/first/bybit.svg",
    alt: "bybit",
  },
  {
    id: "6",
    href: "https://www.coingecko.com/en/coins/espento",
    imageUrl: "/images/logos/first/coingecko.svg",
    alt: "coingecko",
  },
  {
    id: "7",
    href: "https://www.gate.io/price/espento-spent",
    imageUrl: "/images/logos/first/gate.svg",
    alt: "gate",
  },
  {
    id: "8",
    href: "https://www.okx.com/nl/price/spent-spent",
    imageUrl: "/images/logos/first/okx.svg",
    alt: "okx",
  },
  {
    id: "9",
    href: "https://www.bitget.com/price/espento",
    imageUrl: "/images/logos/first/bitget.svg",
    alt: "bitget",
  },
];
const marqueSlider1 = [
  {
    id: "1",
    href: "https://skynet.certik.com/projects/espento",
    imageUrl: "/images/logos/second/certik.svg",
    alt: "coinmarketcap",
  },
  {
    id: "2",
    href: "https://coinmarketcap.com/currencies/espento/",
    imageUrl: "/images/logos/second/coinmarketcap.svg",
    alt: "crypto.com",
  },
  {
    id: "3",
    href: "https://crypto.com/price/espento",
    imageUrl: "/images/logos/second/crypto.svg",
    alt: "dappradar",
  },
  {
    id: "4",
    href: "https://www.geckoterminal.com/bsc/pools/0x8ea468c464c4814fd18aac4d91a59dae2ea87165",
    imageUrl: "/images/logos/second/geckoterminal.svg",
    alt: "Gecko Terminal",
  },
  {
    id: "5",
    href: "https://finance.yahoo.com/quote/SPENT-USD?p=SPENT-USD&.tsrc=fin-srch",
    imageUrl: "/images/logos/second/yahooFinance.svg",
    alt: "yahooFinance",
  },

  {
    id: "6",
    href: "https://dappradar.com/dapp/espento",
    imageUrl: "/images/logos/second/dappradar.svg",
    alt: "dappradar",
  },
  {
    id: "7",
    href: "https://dex.guru/token/bsc/0x178fbe1cf4775fbdb9756d6349195a05799c0fe5",
    imageUrl: "/images/logos/second/dexguru.svg",
    alt: "dexguru",
  },
  {
    id: "8",
    href: "https://www.btcc.com/en-US/markets/Espento",
    imageUrl: "/images/logos/second/btcc.svg",
    alt: "btcc",
  },
  {
    id: "9",
    href: "https://coincodex.com/crypto/espento/",
    imageUrl: "/images/logos/second/coincodex.svg",
    alt: "coincodex",
  },
];

export const MediaPartner = () => {
  return (
    <>
      <div className="bg-media-partner bg-cover relative xl:py-24 lg:py-24 py-8 xl:space-y-14 lg:space-y-14 space-y-8 ">
        <div className="text-left max-w-3xl mx-auto py-10 w-full space-y-12">
          <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
            <ThreeStarIcon className="w-6 h-6" />
            <h4 className="text-white font-light text-xs tracking-wider">DApps</h4>
          </div>
          <div className="space-y-4 text-center">
            <h2 className="xl:text-7xl lg:text-7xl md:text-3xl sm:text-3xl text-4xl font-bold bg-gradient-to-b from-white to-secondary-lighter text-transparent bg-clip-text tracking-wider">
              Expanding Across Digital Frontiers
            </h2>
            <p className="font-light text-secondary-default xl:text-lg lg:text-lg md:text-base sm:text-base text-sm tracking-wider">
              Experience Espento's presence on leading online platforms. Seamlessly access our innovative
              ecosystem across popular platforms and join the revolution in decentralized finance today!
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="space-y-6">
            <Marquee pauseOnHover>
              {marqueSlider.map((marqueSliders) => (
                <div className="flex items-center space-x-6" key={marqueSliders.id}>
                  <Link
                    href={marqueSliders.href}
                    target="_blank"
                    className="flex flex-shrink-0 bg-white w-30 h-16 rounded-md p-3 ml-5"
                  >
                    <Image src={marqueSliders.imageUrl} width={200} height={200} alt={marqueSliders.alt} />
                  </Link>
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover direction="right">
              {marqueSlider1.map((marqueSliders1) => (
                <div className="flex items-center space-x-5" key={marqueSliders1.id}>
                  <Link
                    href={marqueSliders1.href}
                    target="_blank"
                    className="flex flex-shrink-0 bg-white w-30 h-16 rounded-md px-4 py-3 ml-5"
                  >
                    <Image src={marqueSliders1.imageUrl} width={200} height={200} alt={marqueSliders1.alt} />
                  </Link>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};
