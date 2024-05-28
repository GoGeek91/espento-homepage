import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="text-center">
        <h2 className="text-5xl text-white">Disclaimer</h2>
      </div>

      <div className="space-y-7 ">
        <div className="space-y-2">
          <h2 className="text-white font-medium text-base tracking-wider">
            Legal Disclaimer And Risk Caution
          </h2>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            Participating in an crypto trading is a high-risk activity. This crypto trading in particular is
            only aimed at experienced professionals who are used to blockchain technology. By participating in
            this crypto trading, the purchaser is aware and accepts the risks related to security, the
            potential lack of technical and economic results and the total or partial loss of its capital.
            Finally, the purchaser declares being aware of the legal uncertainty of this type of transaction
            and to have conducted his own legal guidance according to the applicable law to which he
            subscribes. Indeed, the token grants no financial (income, capital or dividend). The token is a
            crypto-asset issued by Decentral Autonomous Platform (Community) through the platform instruments
            and used by the members of the espento.com platform and community. No other rights are transferred
            upon the trading. Precisely, the Community’s only obligation is to distribute the SPENT token
            under the conditions defined in the official publications.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-white font-medium text-base tracking-wider">Sales Restriction</h2>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            Due to national legislation, participants from the following countries are not allowed to
            participate in the platform : “US person” (as per this definition), Canada, South Korea, Burma,
            Cote D'Ivoire (Ivory Coast), Cuba, Democratic Republic of Congo, Iran, Iraq, Liberia, North Korea,
            Sudan, Syria, and Zimbabwe, Singapore and China. This prohibition applies to all types of people
            (moral, physical, agent, etc.) and to any indirect participation (via a proxy, a name loan, a
            limited company, etc.). By participating in the platform, the purchaser agrees to the legal
            disclaimer and, especially, that he respects the above provisions community.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-white font-medium text-base tracking-wider">Warnings</h2>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            Trading the crypto are high risk operations because of their experimental nature. By participating
            in this operation, participants declare to understand and assume the following risks:
          </p>
          <ul className="space-y-3 list-disc list-inside">
            <li className="text-white font-light text-sm tracking-wider text-justify">
              Whe lack of regulation: the purchaser agrees not to benefit from any guarantees associated with
              sales on regulated financial markets or other regulated financial investments.
            </li>
            <li className="text-sm text-white font-light">
              Capital loss: the purchaser accepts the risk of a total or partial capital loss in
              cryptocurrency or in the token.
            </li>
            <li className="text-sm text-white font-light">
              Volatility or market risk: the value of tokens, just like that of cryptocurrencies in general,
              can be extremely volatile and subject to significant, and largely unforeseeable fluctuations.
              Moreover, the market or markets on which these tokens are traded do not offer the same
              guarantees that are generally applicable to conventional financial markets.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
