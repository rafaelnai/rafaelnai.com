import React from "react";
import { AppProps } from "next/app";
import Providers from "components/Providers";
import GlobalStyles from "styles/Globals";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Providers>
    <GlobalStyles />
    <Component {...pageProps} />
  </Providers>
);

export default MyApp;
