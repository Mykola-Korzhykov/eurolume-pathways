import type { Metadata, Viewport } from "next";
import { Raleway, Playfair_Display } from "next/font/google";

import "aos/dist/aos.css";
import "swiper/css";
import "@styles/global.scss";

import { FC, ReactNode } from "react";

import ProviderLayout from "@components/layout/ProviderLayout";
import getConfig from "../../next-seo.config";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type Props = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = getConfig();

export const viewport: Viewport = {
  themeColor: "#0071B8",
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ProviderLayout>{children}</ProviderLayout>
      </body>
      <GoogleAnalytics gaId="G-56JE062RYD" />
      <GoogleTagManager gtmId="GTM-5MW5SMPF" />
    </html>
  );
};

export default RootLayout;
