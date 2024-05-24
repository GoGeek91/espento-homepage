import React from "react";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="text-center">
        <h2 className="text-5xl text-white">About Us</h2>
      </div>

      <div className="space-y-7 ">
        <div className="space-y-2">
          <h2 className="text-white font-medium text-sm tracking-wider">What Is Espento ?</h2>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            Espento Is An Algorithmic Money Market Created Solely On Binance Smart Chain (BSC).
          </p>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            The Protocol Brings To The Decentralised Finance (DeFi) Ecosystem A Simple Crypto Asset Swap,
            Bridge, Stake And Lending-Borrowing Solution. Allowing Users To Borrow Directly Against Collateral
            At Rapid Speeds While Incurring Less Transaction Costs. In Addition, Espento Allows Users To
            Bridge Cross-Chain Assets To EUSD Stablecoins On-Demand Within Seconds By Posting Needed Assets To
            The Espento Bridge Smart Contract.
          </p>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            EUSD Tokens Are BEP-20 Token Assets, Whereas SPENT Tokens Are Likewise BEP-20-Based, But Are Used
            For Espento Protocol Governance And May Be Used To Vote On Updates. Includes New Collateral Types,
            Parameter Changes, And Product Improvement Organisation.
          </p>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            The Governance Of The Protocol Is Entirely Controlled By Espento DAO Community Members, Since The
            Espento Founders, Team Members And Other Advisors Do Have Any SPENT Token Allocations.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-white font-medium text-sm tracking-wider">Who Are Espento&lsquo;s Founders?</h2>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            The Development Of The Espento Project Is Being Undertaken By The Developers From Different
            Countries Of The World As A Team. The Main Goal Of Espento Is To Achieve Decentralization Through
            Community-Governance. There Are No Pre-Mines For The Team, Developers, Giving SPENT Holders Total
            Control Over The Path The Espento Protocol Takes.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-white font-medium text-sm tracking-wider">What Makes Espento Unique?</h2>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            The Key Strength Of Espento Is Its Fast Speed And Incredibly Cheap Transaction Fees, Which Are A
            Direct Result Of Its Build On Top Of The Binance Smart Chain. The Protocol Is The First To Allow
            Users To Have Real-Time Access To Liquidity Pool For BNB, BUSD, USDT(TRC20), BTC, ETH And Other
            Cryptocurrencies Via Bridging Protocol.
          </p>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            Users Seeking Liquidity Using The Espento Protocol Do Not Need To Pass A Credit Check And May Get
            A Loan Immediately By Interacting With The Espento Decentralised Application (DApp). Users Are Not
            Restricted By Their Geographic Region, Credit Score, Or Anything Else Because There Are No
            Centralised Authorities In Existence, And May Always Obtain Liquidity By Providing Necessary
            Collateral.
          </p>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            These Loans Are Made Possible By A Pool Of Funds Supplied By Espento Users, Who Earn A Variable
            APY In Return For Their Inputs. These Loans Are Backed By Borrowers, Over-Collateralized Deposits
            On The Platform.
          </p>
          <p className="text-white font-light text-sm tracking-wider text-justify">
            To Prevent Market Manipulation Attacks, The Espento Protocol Employs Price Feed Oracles, Such As
            Those Provided By Chainlink, To Supply Reliable Pricing Data That Cannot Be Tampered With. The
            Binance Smart Chain Allows The Protocol To Acquire Pricing Feeds At A Cheaper Cost And With
            Greater Efficiency, Lowering The System&lsquo;s Overall Cost Footprint.
          </p>
        </div>
      </div>
    </div>
  );
}
