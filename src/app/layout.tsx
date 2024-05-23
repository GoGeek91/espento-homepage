import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import Head from "next/head";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Decentralized Finance (DeFi) Platform | Espento",
  description:
    "Espento offers a unique Farm, Staking pool, Lending-Borrowing, Gaming, and many other decentralised Apps for earning, Espento  shares the whole ecosystem revenue to its token holders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="app/favicon.ico" sizes="any" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="lp-version" content="v6.22.1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="Web3, decentralized finance, blockchain technology, cryptocurrency, smart contracts, NFTs"
        />
        <link rel="canonical" href="https://espento.com/" />
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <body className={`${ubuntu.className} h-auto bg-no-repeat bg-fixed bg-[#030115] `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
