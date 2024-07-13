"use client";
import { cn } from "@/libs/utils";
import React, { useState } from "react";
import { Metamask } from "./components/metamask";
enum TABS {
  METAMASK = "Metamask",
  TRUSTWALLET = "Trustwallet",
}
interface TabsInterface {
  selected: TABS;
}
const Tabs = ({ selected }: TabsInterface) => {
  switch (selected) {
    case TABS.METAMASK:
      return <Metamask />;
    case TABS.TRUSTWALLET:
      return <>sss</>;
  }
};
export default function Institutions() {
  const [selected, setSelected] = useState<TABS>(TABS.METAMASK);
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="text-center">
        <h2 className="text-5xl text-white">Institutions</h2>
      </div>

      <div className="space-y-7 ">
        <div className="space-y-2">
          <div className="flex items-center rounded-lg bg-white px-1 py-0.5 shadow-lg">
            <div
              className={cn(
                "font-normal px-4 py-1 cursor-pointer",
                selected === TABS.METAMASK && "font-normal px-4 py-1 rounded-lg bg-primary-light"
              )}
              onClick={() => setSelected(TABS.METAMASK)}
            >
              V4
            </div>
            <div
              className={cn(
                "font-normal px-4 py-1 cursor-pointer",
                selected === TABS.TRUSTWALLET && "font-normal px-4 py-1 rounded-lg bg-primary-light"
              )}
              onClick={() => setSelected(TABS.TRUSTWALLET)}
            >
              V3
            </div>
          </div>
          <div className="">
            <Tabs selected={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}
