import { Bluecard } from "@/views/bluecard";
import { Dapps } from "@/views/dapps";
import { Globe } from "@/views/globe";
import { Herobanner } from "@/views/herobanner";
import { MediaPartner } from "@/views/mediaPartner";
import { Stats } from "@/views/stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Herobanner />
      <Stats />
      <Dapps />
      <Bluecard />
      <Globe />
      <MediaPartner />
    </div>
  );
}
