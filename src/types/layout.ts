import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
