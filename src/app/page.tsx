import React from "react";
import { Herobanner } from "./home/herobanner";
import { Stats } from "./home/stats";
import { Dapps } from "./home/dapps";
import { Bluecard } from "./home/bluecard";
import { Globe } from "./home/globe";
import { MediaPartner } from "./home/mediaPartner";
import { Secure } from "./home/secure";
import { Partners } from "./home/partners";

export default function Home() {
  return (
    <div className="">
      <Herobanner />
      <Stats />
      <Dapps />
      <Bluecard />
      <Globe />
      <MediaPartner />
      <Secure />
      <Partners />
    </div>
  );
}
