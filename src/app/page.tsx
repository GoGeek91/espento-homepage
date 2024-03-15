import { Bluecard } from "@/views/bluecard";
import { Dapps } from "@/views/dapps";
import { Globe } from "@/views/globe";
import { Herobanner } from "@/views/herobanner";
import { MediaPartner } from "@/views/mediaPartner";
import { Partners } from "@/views/partners";
import { Secure } from "@/views/secure";
import { Stats } from "@/views/stats";

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
