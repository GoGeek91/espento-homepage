"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DoubleArrowIcon } from "../commonIcon";
const navigation = [
  { name: "Home", href: "/swap" },
  { name: "Bridge", href: "/bridge" },
  { name: "Stake", href: "#" },
  { name: "Affiliate", href: "/affiliate" },
];
export const Header = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-4 bg-transparent z-50 relative">
      <div className="flex items-center justify-between">
        <Link href="#">
          <Image src="images/logo.svg" width={120} height={30} alt="Espento" />
        </Link>

        <div className="space-x-8 border border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur rounded-full py-2 px-6 leading-4 xl:relative lg:relative md:relative sm:relative fixed xl:bottom-0 lg:bottom-0 md:bottom-0 sm:bottom-0 bottom-3 z-50">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="tracking-wide text-secondary-lighter hover:text-secondary-default font-light text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="#"
          className="bg-primary-default text-sm xl:font-normal lg:font-normal md:font-normal sm:font-normal font-medium tracking-wide px-3 py-2 rounded-lg text-secondary-default flex items-center space-x-0.5"
        >
          <p>Launch dApp</p>
          <DoubleArrowIcon className="w-4 h-4 text-white" />
        </Link>
      </div>
    </div>
  );
};
