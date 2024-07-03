import Image from "next/image";
const MetamaskWallet = "https://assets.espento.com/images/homePage/metamaskWallet.svg";
const Coincapmarket = "https://assets.espento.com/images/homePage/coinmarketcap.svg";
const BscScan = "https://assets.espento.com/images/homePage/bscscan.svg";
const coingecgo = "https://assets.espento.com/images/homePage/coingecko.svg";
const pancakeswap = "https://assets.espento.com/images/homePage/pancake.svg";

import Link from "next/link";

interface navigationItem {
  name: string;
  href: string;
  info?: string;
  targetBlank?: boolean;
  icon?: string;
}

interface NavtigationDto {
  [name: string]: navigationItem[];
}

const navigation: NavtigationDto = {
  About: [
    { name: "Espento Profile", href: "/about" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Careers", href: "/careers", info: "Hiring" },
    { name: "Espento Tokenomics", href: "/tokenomics" },
    {
      name: "SPENT Audit",
      href: "https://gopluslabs.io/token-security/56/0x178fbe1cf4775fbdb9756d6349195a05799c0fe5",
      targetBlank: true,
      icon: "https://assets.espento.com/images/homePage/auditIcon.png",
    },
  ],
  Products: [
    { name: "Yield Farm", href: "https://espento.com/farm" },
    { name: "Stake", href: "https://espento.com/stake" },
    { name: "Espento Swap", href: "https://espento.com/swap" },
    { name: "Liquidity", href: "https://espento.com/liquidity" },
    { name: "Lend - Borrow", href: "https://espento.com/borrow" },
    { name: "Bridge", href: "https://espento.com/bridge" },
  ],
  Resources: [
    { name: "Docs", href: "https://espento.com/info", info: "Soon" },
    { name: "Brand Assets", href: "/brandAssets" },
    { name: "Espento Whitepaper", href: "https://assets.espento.com/whitepaper.pdf", targetBlank: true },
    { name: "Espento Blog", href: "/blog" },
    { name: "Support", href: "/support" },
    { name: "Espento Roadmap", href: "/roadmap" },
    { name: "Institutions", href: "/" },
  ],
  Community: [
    { name: "Twitter", href: "https://twitter.com/espentoofficial" },
    { name: "Telegram", href: "https://telegram.me/espento_news" },
    { name: "Reddit", href: "https://www.reddit.com/r/espentoofficial/" },
    { name: "Medium", href: "https://medium.com/@espentoofficial" },
    { name: "Discord", href: "https://discord.com/invite/7BUJ9UTBgE" },
    { name: "Facebook", href: "https://www.facebook.com/espentoofficial" },
    { name: "Instagram", href: "https://www.instagram.com/espentoofficial" },
    { name: "Youtube", href: "https://www.youtube.com/@espentoofficial" },
    { name: "Github", href: "https://github.com/espentoofficial" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-secondary-lighter border-opacity-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 xl:grid-cols-6">
          {/* First Box */}
          <div className="col-span-2 mr-10 space-y-2 md:mt-0 md:space-y-4 lg:space-y-4 xl:space-y-4">
            <div className="w-44">
              <Link href="/" passHref={true} className="flex cursor-pointer">
                <Image alt="Espento" src="images/logo.svg" width={160} height={31} />
              </Link>
            </div>

            <p className="text-justify text-sm font-light text-white">
              Espento is the most competitive decentralized platform for earning crypto in the DeFi market.
            </p>

            <div className="hidden md:block lg:block xl:block 2xl:block">
              <div className="flex items-center space-x-3"></div>
            </div>
            {/* NOTE: website update  */}
            <h1 className="font-light text-gray-300 text-sm">
              © {new Date().getFullYear()} Espento DAO Community
            </h1>
            {/* <div>
                {" "}
                <p className="font-medium text-gray-800">Website last updated</p>
                <p className="font-light text-gray-400">September 9, 2022</p>
              </div> */}
          </div>
          {/* Second Box */}
          <div>
            <h3 className="xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base font-normal text-white">
              About
            </h3>
            <ul
              role="list"
              className="mt-2 space-y-2 md:mt-4 md:space-y-3 lg:mt-4 lg:space-y-3 xl:mt-4 xl:space-y-3 xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base"
            >
              {navigation.About.map((item) => (
                <li key={item.name} className="flex items-center space-x-1">
                  <Link
                    href={item.href}
                    target={item.targetBlank ? "_blank" : "_parent"}
                    rel="noopener"
                    className="flex items-center space-x-0.5 xl:text-xs lg:text-xs md:text-xs sm:text-xs text-sm  font-light text-white opacity-70 hover:opacity-100"
                  >
                    <span> {item.name}</span>
                    {item.icon && <img src={item.icon} className="w-5" alt="Espento" />}
                  </Link>
                  {item.info && (
                    <div className="bg-primary-default text-white text-xs rounded-full px-1">{item.info}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Third Box */}
          <div>
            <h3 className="xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base font-normal text-white">
              Products
            </h3>
            <ul
              role="list"
              className="mt-2 space-y-2 md:mt-4 md:space-y-3 lg:mt-4 lg:space-y-3 xl:mt-4 xl:space-y-3 xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base"
            >
              {navigation.Products.map((item) => (
                <li key={item.name} className="flex items-center space-x-1">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-0.5 xl:text-xs lg:text-xs md:text-xs sm:text-xs text-sm font-light text-white opacity-70 hover:opacity-100"
                  >
                    {item.name}
                  </Link>
                  {item.info && (
                    <div className="bg-primary-default text-white text-xs rounded-full px-1">{item.info}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Fourth Box */}
          <div>
            <h3 className="xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base font-normal text-white">
              Resource
            </h3>
            <ul
              role="list"
              className="mt-2 space-y-2 md:mt-4 md:space-y-3 lg:mt-4 lg:space-y-3 xl:mt-4 xl:space-y-3 xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base"
            >
              {navigation.Resources.map((item) => (
                <li key={item.name} className="flex items-center space-x-1">
                  <Link
                    href={item.href}
                    target={item.targetBlank ? "_blank" : "_parent"}
                    rel="noopener"
                    className="flex items-center space-x-0.5 xl:text-xs lg:text-xs md:text-xs sm:text-xs text-sm  font-light text-white opacity-70 hover:opacity-100"
                  >
                    {item.name}
                  </Link>
                  {item.info && (
                    <div className="bg-primary-default text-white text-xs rounded-full px-1">{item.info}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Five Box */}
          <div>
            <h3 className="xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base font-normal text-white">
              Community
            </h3>
            <ul
              role="list"
              className="mt-2 space-y-2 md:mt-4 md:space-y-3 lg:mt-4 lg:space-y-3 xl:mt-4 xl:space-y-3 xl:text-sm lg:text-sm md:text-sm sm:text-sm text-base"
            >
              {navigation.Community.map((item) => (
                <li key={item.name} className="flex items-center space-x-1">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center space-x-0.5 xl:text-xs lg:text-xs md:text-xs sm:text-xs text-sm font-light text-white opacity-70 hover:opacity-100"
                  >
                    {item.name}
                  </Link>
                  {item.info && (
                    <span className="text-success-500 ml-2 rounded-md bg-blue-100 px-2 text-xs font-light text-blue-500">
                      {item.info}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="pt-6 text-center">
          <Text color="gray" Size="small" type="light">
            © 2023 Espento. | All rights reserved
          </Text>
        </div> */}
      </div>
    </footer>
  );
}
