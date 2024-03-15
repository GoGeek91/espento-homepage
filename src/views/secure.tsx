import { AnimationLine, ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
const secureBox = [
  {
    id: "1",
    ImageUrl: "/images/secure/s1.svg",
    title: "Swap",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "2",
    ImageUrl: "/images/secure/s2.svg",
    title: "Swap",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "3",
    ImageUrl: "/images/secure/s3.svg",
    title: "Swap",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "4",
    ImageUrl: "/images/secure/s1.svg",
    title: "Swap",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "5",
    ImageUrl: "/images/secure/s2.svg",
    title: "Swap",
    subtitle: "Trade crypto instantly across multiple chains",
  },
  {
    id: "6",
    ImageUrl: "/images/secure/s3.svg",
    title: "Swap",
    subtitle: "Trade crypto instantly across multiple chains",
  },
];

export const Secure = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-10 bg-transparent">
      <div className="relative xl:py-24 lg:py-24 py-8 xl:space-y-14 lg:space-y-14 space-y-8 ">
        <div className="text-left max-w-4xl mx-auto py-10 w-full space-y-12">
          <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-30 space-x-1 mx-auto bg-primary-default bg-opacity-15">
            <ThreeStarIcon className="w-6 h-6" />
            <h4 className="text-white font-light text-xs tracking-wider">DApps</h4>
          </div>
          <div className="space-y-4 text-center">
            <h2 className="xl:text-7xl lg:text-7xl md:text-3xl sm:text-3xl text-4xl font-bold bg-gradient-to-b from-secondary-default to-secondary-lighter text-transparent bg-clip-text tracking-wider">
              Let's dive deep, craft wonders, thrive.
            </h2>
            <p className="font-light text-white text-opacity-65 text-lg tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente numquam iste molestiae
              provident eius incidunt sunt, vero cum dolore ipsam, sed voluptatem libero adipisci ut repellat
              enim iusto labore.
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-16">
          {secureBox.map((secureBoxs) => (
            <div
              key={secureBoxs.id}
              className="text-left rounded-3xl border border-secondary-dark p-6 relative"
            >
              <div className="bg-[#171227] rounded-full border border-secondary-dark absolute border-b-2 border-b-secondary-dark left-8 -top-8 p-2.5">
                <Image src={secureBoxs.ImageUrl} width={44} height={44} alt="Espento" className="m-auto" />
              </div>
              <div className="mt-9 space-y-1">
                <h2 className="text-white text-lg font-medium tracking-wide">Lorem Ipsum </h2>
                <p className="text-white font-light text-sm text-opacity-75 text-justify tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea doloremque in eius
                  totam, magnam repellat possimus accusamus amet pariatur aliquam nobis, ab iste ad ratione
                  aliquid cupiditate ut tenetur!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
