import "../resources/styles/Theme_colors.css";
import "../resources/styles/globals.scss";
import "../resources/styles/source_sans_pro.scss";
import "../resources/styles/deja_vu_sans.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
