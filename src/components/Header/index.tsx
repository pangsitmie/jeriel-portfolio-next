import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import HeaderModal from "./Modal";
import { DesktopNavItem } from "./NavItem";
import { navigationItems } from "./config";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleModalVisible = useCallback(() => setVisible((pre) => !pre), []);

  const { isSmallTabletAndSmaller } = useMediaQuery();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Define a threshold for how much scroll is considered significant
      const threshold = 20; // Example value, adjust as needed

      if (currentScrollY < lastScrollY && scrollDifference > threshold) {
        console.log("scrolling up");
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        console.log("scrolling down");
        setHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerStyle = {
    transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <nav>
      <div
        className={`fixed top-0 left-0 right-0 z-10 ${
          visible ? "border-none" : " bg-transparent backdrop-blur-[15px]"
        } border-solid `}
        style={headerStyle}
      >
        <div
          className={`max-w-7xl h-20 mx-auto px-8 md:px-6 flex items-center justify-between`}
        >
          <div className="cursor-pointer">
            <Link href="/">
              <Image
                alt="logo"
                width={35}
                height={35}
                src="/images/logo_white.png"
                priority={true}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex justify-between gap-x-12 md:hidden">
              {navigationItems.map((nav, index) => (
                <DesktopNavItem key={index} {...nav} />
              ))}
            </div>

            <div
              className={`w-6
                 h-6 ${
                   isSmallTabletAndSmaller ? "block" : "hidden"
                 } md:flex md:items-center md:justify-center cursor-pointer hover:bg-overlay-white-5 rounded-circle transition-all ease-in-out duration-300`}
              onClick={handleModalVisible}
            >
              {visible ? (
                <XMarkIcon className="h-full w-full text-white" />
              ) : (
                <Bars3Icon className="h-full w-full text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
      <HeaderModal
        visible={visible}
        wrapClassName="bg-white text-black z-[100] backdrop-blur-[15px]"
        onClick={handleModalVisible}
      ></HeaderModal>
    </nav>
  );
};

export default Header;
