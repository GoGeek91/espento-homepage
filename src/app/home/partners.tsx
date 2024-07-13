import { ThreeStarIcon } from "../commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const marqueSlider = [
  {
    id: "1",
    imageUrl: "/images/partner/metamask.svg",
    alt: "metamask",
  },
  {
    id: "2",
    imageUrl: "/images/partner/trust.png",
    alt: "binance",
  },
  {
    id: "3",
    imageUrl: "/images/partner/chainlink.svg",
    alt: "binance",
  },
  {
    id: "4",
    imageUrl: "/images/partner/bnbchain.svg",
    alt: "binance",
  },
  {
    id: "5",
    imageUrl: "/images/partner/eth.svg",
    alt: "binance",
  },
  {
    id: "6",
    imageUrl: "/images/partner/tether.svg",
    alt: "binance",
  },
  {
    id: "7",
    imageUrl: "/images/partner/walletConnect.svg",
    alt: "binance",
  },
  {
    id: "8",
    imageUrl: "/images/partner/aws.svg",
    alt: "binance",
  },
];

export const Partners = () => {
  return (
    <div>
      {" "}
      <div className="mx-auto max-w-7xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
        <div className="rounded-3xl border border-white border-opacity-20 bg-black">
          <div className="relative">
            <div className="md:gap-18 relative grid grid-cols-1 items-center gap-16 sm:grid-cols-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-28 xl:grid-cols-2 xl:gap-28">
              <div className="bgspider space-y-7  object-cover p-6 sm:p-16 md:p-16 lg:p-16 xl:p-16">
                <div className="border-primary-default bg-primary-default flex w-fit items-center space-x-1 rounded-full border border-opacity-80 bg-opacity-50 px-3 py-1">
                  <ThreeStarIcon className="h-6 w-6" />
                  <h4 className="text-xs font-light tracking-wider text-white">Partners</h4>
                </div>
                <div className="space-y-5">
                  <h2 className="leading text-xl font-semibold tracking-wider text-white sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
                    Our Valued Partners and Supporters
                  </h2>
                  <p className="text-opacity-85 text-sm font-light text-white sm:text-base md:text-base lg:text-lg xl:text-lg">
                    Building Strong Collaborations and Community Engagement
                  </p>
                </div>
              </div>
              <div className="items-center space-y-6">
                <div className="w-full">
                  <div className="space-y-6">
                    {/* <Marquee pauseOnHover gradient gradientWidth={120} gradientColor="#000">
                      {marqueSlider.map((marqueSliders) => (
                        <div className="flex items-center space-x-6" key={marqueSliders.id}>
                          <div className="flex flex-shrink-0 bg-white w-16 h-16 rounded-full p-3 ml-5">
                            <Image
                              src={marqueSliders.imageUrl}
                              width={200}
                              height={200}
                              alt={marqueSliders.alt}
                            />
                          </div>
                        </div>
                      ))}
                    </Marquee>
                    <Marquee pauseOnHover gradient gradientWidth={120} gradientColor="#000" direction="right">
                      {marqueSlider.map((marqueSliders) => (
                        <div className="flex items-center space-x-6" key={marqueSliders.id}>
                          <div className="flex flex-shrink-0 bg-white w-16 h-16 rounded-full p-3 ml-5">
                            <Image
                              src={marqueSliders.imageUrl}
                              width={200}
                              height={200}
                              alt={marqueSliders.alt}
                            />
                          </div>
                        </div>
                      ))}
                    </Marquee>
                    <Marquee pauseOnHover gradient gradientWidth={120} gradientColor="#000" delay={0.2}>
                      {marqueSlider.map((marqueSliders) => (
                        <div className="flex items-center space-x-6" key={marqueSliders.id}>
                          <div className="flex flex-shrink-0 bg-white w-16 h-16 rounded-full p-3 ml-5">
                            <Image
                              src={marqueSliders.imageUrl}
                              width={200}
                              height={200}
                              alt={marqueSliders.alt}
                            />
                          </div>
                        </div>
                      ))}
                    </Marquee>{" "} */}
                    <Image
                      src="images/dapps-icons.svg"
                      width={700}
                      height={700}
                      alt="espento"
                      className="blinkin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
