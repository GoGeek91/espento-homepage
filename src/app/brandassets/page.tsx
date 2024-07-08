import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownloadIcons } from "../commonIcon";

const brandAsset = [
  {
    id: 1,
    logo: "/images/brandAssets/logo.png",
    logotype: "Espento Logo",
    DownloadLink: "/images/brandAssets/logo.zip",
  },
  {
    id: 2,
    logo: "/images/brandAssets/icon.png",
    logotype: "Espento Icon",
    DownloadLink: "/images/brandAssets/icon.zip",
  },
  {
    id: 3,
    logo: "/images/brandAssets/tokenlogo.png",
    logotype: "Token Logo",
    DownloadLink: "/images/brandAssets/tokens.zip",
  },
];

export default function BrandAsset() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-20 lg:px-8 xl:py-20 xl:px-8">
      <div className="text-center">
        <h2 className="text-5xl text-white">Brand Assets</h2>
      </div>

      <div className="space-y-20">
        <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-4">
          <div className="space-y-10">
            <div className="mx-auto space-y-6 max-w-xl text-center">
              <h2 className="text-5xl text-white">Let&lsquo;s build the Espento brand together!</h2>
              <p className="text-white text-opacity-80 font-light text-base">
                These guidelines will help us create and maintain a consistent brand presence and experience
                worldwide.
              </p>
              <Link
                href=""
                className="flex mx-auto w-fit text-secondary-default px-6 py-3 rounded-full bg-primary-default font-medium"
              >
                Download Brand Book
              </Link>
            </div>
          </div>
        </div>
        {/* logo , icons and token  */}
        <div className="space-y-10">
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-white">Espento Logo</h2>
            <p className="text-white text-opacity-80 font-light text-base">
              At Espento, we proudly display our logo in its official colors and designated usage patterns. To
              maintain its clarity and impact, we ask that you avoid placing the logo on top of other objects.
              Please ensure there is a reasonable amount of margin around the logo, allowing it to stand out
              and be easily recognizable.
            </p>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-8">
            {brandAsset.map((brandAssets) => (
              <div key={brandAssets.logo} className="border border-[#484848] rounded-xl">
                <div className="bg-[#2e313e] border border-[#434551] mx-auto flex justify-center p-6 rounded-xl w-full">
                  <div className="">
                    <Image src={brandAssets.logo} width={180} height={80} alt="espento logo" />
                  </div>
                </div>
                <div className="p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-normal text-secondary-default">{brandAssets.logotype}</h2>
                    <div className="flex items-center space-x-2">
                      <Link
                        href={brandAssets.DownloadLink}
                        className="text-primary-default font-medium text-xs flex items-center space-x-1"
                      >
                        <span> Download</span> <DownloadIcons className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-4">
          <div className="space-y-10">
            <div className="mx-auto space-y-6 max-w-xl text-center">
              <h2 className="text-5xl text-white">Ubuntu Font Family</h2>
              <p className="text-white text-opacity-80 font-light text-base">
                Ubuntu is a distinctive, modern, and humanist typeface designed for clarity and readability
                across various digital platforms. Developed by Dalton Maag in 2010 for the Ubuntu operating
                system, this font family has grown in popularity for its clean, friendly appearance.
              </p>
              <Link
                href="https://fonts.google.com/specimen/Ubuntu?query=ub"
                target="_blank"
                className="flex mx-auto w-fit text-secondary-default px-6 py-3 rounded-full bg-primary-default font-medium"
              >
                Open in Google Font
              </Link>
            </div>
          </div>
        </div>

        {/* Color  */}
        <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-12">
          <h2 className="text-5xl text-white text-center">Espento Colors</h2>
          <div className="space-y-4">
            <div className="w-full rounded-3xl bg-primary-main p-6 text-center">
              <p>Espento Blue</p>
              <div className="flex items-center justify-between">
                <p>#3a77fb</p>
                <p>rgb(58 119 251)</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
              <div className="bg-gradient-to-r from-[#5081f5] to-[#64d1ff] w-full space-y-2 rounded-2xl py-6 px-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
                <p>Gradient 1</p>
                <div className="flex items-center justify-between ">
                  <p>#5081f5</p>
                  <p>#64d1ff</p>
                </div>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-[#cbe0ff] py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Background</p>
                <p>#cbe0ff</p>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-red-500 py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Error Red</p>
                <p>#ef4444</p>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-green-400 py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Success Green</p>
                <p>#4ade80</p>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-yellow-500 py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Warning Yellow</p>
                <p>#eab308</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
              <div className="w-full space-y-2 rounded-2xl bg-gradient-to-r from-[#ebf8ff] to-[#cce0ff] py-6 px-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
                <p>Gradient 2</p>
                <div className="flex items-center justify-between ">
                  <p>#ebf8ff</p>
                  <p>#cce0ff</p>
                </div>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-gray-600 py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Gray</p>
                <p>#4b5563</p>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-slate-500 py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Slate</p>
                <p>#64748b</p>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-[#f0ce38] py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>Binance Yellow</p>
                <p>#f0ce38</p>
              </div>
              <div className="w-[47.5%] space-y-2 rounded-2xl bg-white py-6 px-4 md:w-1/6 lg:w-1/6 xl:w-1/6">
                <p>White</p>
                <p>#fff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
