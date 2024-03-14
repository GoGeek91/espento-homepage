import { SecureIcon, ThreeStarIcon } from "@/app/commonIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const point = [
  {
    id: "1",
    icons: <SecureIcon className="w-6 h-6" />,
    title: "Private infrastructure",
  },
  {
    id: "1",
    icons: <SecureIcon className="w-6 h-6" />,
    title: "99,99% uptime guaranteed by SSL",
  },
  {
    id: "1",
    icons: <SecureIcon className="w-6 h-6" />,
    title: "Guaranteed configuration",
  },
  {
    id: "1",
    icons: <SecureIcon className="w-6 h-6" />,
    title: "Bespoke load-balancing",
  },
  {
    id: "1",
    icons: <SecureIcon className="w-6 h-6" />,
    title: "Personalized monitoring and alerts",
  },
  {
    id: "1",
    icons: <SecureIcon className="w-6 h-6" />,
    title: "Priority support 24/7",
  },
];

export const Bluecard = () => {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between xl:py-24 lg:py-24 py-8 space-y-20 px-8">
      <div className="bg-gradient-to-r from-primary-light to-primary-main rounded-3xl">
        <div className="relative bgspider">
          <div className="grid grid-cols-2 p-16 gap-28">
            <div className=" space-y-7">
              <div className="flex items-center border w-fit rounded-full px-3 py-1 border-primary-default border-opacity-80 space-x-1 bg-primary-default bg-opacity-50">
                <ThreeStarIcon className="w-6 h-6" />
                <h4 className="text-white font-light text-xs tracking-wider">DApps</h4>
              </div>
              <div className="space-y-5">
                <h2 className="text-5xl font-bold text-white tracking-wider leading">
                  Unleash the full potential of your business
                </h2>
                <p className="text-white font-light text-opacity-85">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, eos, quis voluptas eaque
                  suscipit, inventore harum earum pariatur optio eveniet deserunt neque. Necessitatibus, modi?
                  Ipsam molestiae quo culpa quod quam.
                </p>
                <div className="flex items-center space-x-3">
                  <Link
                    href="#"
                    className="bg-white px-4 py-1.5 flex w-fit border border-white text-primary-default font-normal rounded-md"
                  >
                    Lorem Ipsum
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-1.5 flex w-fit border border-white text-white font-normal rounded-md"
                  >
                    Lorem Ipsum
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {point.map((points) => (
                <div className="flex items-center space-x-5" key={points.id}>
                  <div className="bg-white p-2.5 w-fit rounded-md">{points.icons}</div>
                  <h2 className="text-white">{points.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
