import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandAsset() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-20 lg:px-8 xl:py-20 xl:px-8">
      <div className="text-center">
        <h2 className="text-5xl text-white">Brand Assets</h2>
      </div>

      <div className="space-y-20">
        <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-4 flex items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl text-white">Our values</h2>
              <p className="text-white text-opacity-80 font-light text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ratione quos soluta ut? Ad,
                mollitia quae numquam quis, ullam beatae a quam repudiandae, ipsa ea totam illo facilis
                quaerat dolorum.
              </p>
            </div>
            <Link
              href=""
              className="flex w-fit text-secondary-default px-6 py-3 rounded-full bg-primary-default font-medium"
            >
              Download logo
            </Link>
          </div>
          <div className="w-80 shrink-0">
            <Image src="/images/brandAssets/desktop.png" width={300} height={300} alt="espento" />
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-4 max-w-xl mx-auto text-center">
            <h2 className="text-3xl text-white">Our values</h2>
            <p className="text-white text-opacity-80 font-light text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ratione quos soluta ut? Ad,
              mollitia quae numquam quis, ullam beatae a quam repudiandae, ipsa ea totam illo facilis quaerat
              dolorum.
            </p>
          </div>
          <div className="grid grid-cols-4">
            <div className="border border-[#434551] rounded-xl">
              <div className="bg-secondary-default mx-auto flex justify-center w-full p-6 rounded-xl">
                <Image
                  src="/images/brandAssets/Lightlogotype/logo.png"
                  width={180}
                  height={80}
                  alt="espento logo"
                />
              </div>
              <div className="p-4 space-y-1">
                <h2 className="text-xl font-normal text-secondary-default">Light logotype</h2>
                <p className="text-base text-normal text-secondary-default text-opacity-60">#2E5AD0</p>
                <div className="flex items-center space-x-2">
                  <Link
                    href="/images/brandAssets/Lightlogotype/logo.png"
                    className="text-primary-default font-medium"
                  >
                    PNG
                  </Link>
                  <Link
                    href="/images/brandAssets/Lightlogotype/logo.png"
                    className="text-primary-default font-medium"
                  >
                    SVG
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
