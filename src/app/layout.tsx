import type { Metadata, Viewport } from "next";
import { Raleway, Playfair_Display } from "next/font/google";

import "aos/dist/aos.css";
import "swiper/css";
import "@styles/global.scss";

import { FC, ReactNode } from "react";

import ProviderLayout from "@components/layout/ProviderLayout";
import getConfig from "../../next-seo.config";

import { SpeedInsights } from "@vercel/speed-insights/next";

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
  themeColor: "#5edada",
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body >
        <ProviderLayout>{children}</ProviderLayout>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;