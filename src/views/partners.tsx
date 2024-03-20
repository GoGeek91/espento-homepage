import { ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
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
      <div className="mx-auto max-w-7xl items-center justify-between xl:py-24 lg:py-24 py-8 space-y-20 xl:px-8 lg:px-8 md:px-8 sm:px-8 px-4">
        <div className="bg-black rounded-3xl border-white border border-opacity-20">
          <div className="relative">
            <div className="grid xl:grid-cols-2 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:gap-28 lg:gap-28 md:gap-18 sm:gap-10 gap-16 relative">
              <div className="space-y-7 bgspider  xl:p-16 lg:p-16 md:p-16 sm:p-16 p-6 object-cover">
                <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-80 space-x-1 bg-primary-default bg-opacity-50">
                  <ThreeStarIcon className="w-6 h-6" />
                  <h4 className="text-white font-light text-xs tracking-wider">Partners</h4>
                </div>
                <div className="space-y-5">
                  <h2 className="xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl text-xl font-bold text-white tracking-wider leading">
                    Our Valued Partners and Supporters
                  </h2>
                  <p className="text-white font-light text-opacity-85 xl:text-lg lg:text-lg md:text-base sm:text-base text-sm">
                    Building Strong Collaborations and Community Engagement
                  </p>
                </div>
              </div>
              <div className="space-y-6 items-center">
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
