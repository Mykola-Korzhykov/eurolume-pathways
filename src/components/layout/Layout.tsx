"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Loader from "@components/ui/Loader/Loader";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useAppDispatch, useAppSelector } from "@store/hook";
import Aos from "aos";
import "aos/dist/aos.css";
import { Raleway, Playfair_Display, Montserrat } from "next/font/google";
import { hideLoader } from "@store/slices/loaderSlice";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useHasWindow from "@hooks/useHasWindows";
import LostConnection from "@components/sections/LostConnection/LostConnection";
import Link from "next/link";
import TeamIcon from "@img/icons/mini-falcon.svg";
import HomeIcon from "@img/icons/home.svg";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

const RalewayFont = Raleway({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const PlayfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const Layout: FC<Props> = ({ children }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);

  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const dispatch = useAppDispatch();

  const isOnline = useOnlineStatus();
  const hasWindow = useHasWindow();

  const currentPath = usePathname();

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoader());
      Aos.init({ duration: 500, once: true });
      window.scrollTo(0, 0);
      localStorage.removeItem("isApplicationSent");
      setShowVideo(true);
      window.addEventListener("scroll", () => {
        setHeaderHeight(headerRef.current?.offsetHeight);

        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div className={`next-layout ${RalewayFont.className}`}>
      <Loader />
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          className={`loadingVideo ${videoEnded ? "loadingVideoHide" : ""}`}
          onEnded={handleVideoEnd}
        >
          <source src="/videos/preview.mp4" />
        </video>
      )}

      {isOnline && hasWindow && (
        <>
          <div style={{ flex: "1 0 auto" }}>
            <Header isSticky={isSticky} headerRef={headerRef} />
            <main
              style={{ zIndex: 99, paddingTop: isSticky ? headerHeight : 0 }}
            >
              {children}
            </main>
          </div>
          <Footer />
        </>
      )}

      {!isOnline && hasWindow && (
        <>
          <LostConnection />
        </>
      )}
    </div>
  );
};

export default Layout;
