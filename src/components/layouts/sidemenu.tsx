import useLandingStore from "../landing/landing_store";
import homeIcon from "@/assets/icons/home.svg";
import rightIcon from "@/assets/icons/right-arrow.svg";
import phoneIcon from "@/assets/icons/landline-colored-icon.svg";
import bookIcon from "@/assets/icons/book-icon.svg";
import pricingIcon from "@/assets/icons/price-icon.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import arrowDown from "@/assets/icons/arrow-down-icon.svg";
import { useEffect } from "react";

const SideMenu = () => {
  const { sideMenuOpen,closeSideMrnu } = useLandingStore();
const location = useLocation();

  useEffect(() => {
   closeSideMrnu();
  }, [location])
  

  return (
    <div
      className={`fixed z-20 bg-background top-0 overflow-hidden duration-500 w-full ${
        sideMenuOpen ? "h-dvh" : "h-0"
      } `}
    >
      <div className="flex flex-col gap-8 items-center justify relative top-50 px-8 w-full">
        <NavLink className="w-full" to="/">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-2">
              <img
                src={homeIcon}
                alt="home icon"
                className="w-full max-w-4.5"
              />
              <p className="md:text-lg text-sm font-semibold">Home</p>
            </div>

            <div>
              <img src={rightIcon} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/pricing">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-2">
              <img
                src={pricingIcon}
                alt="home icon"
                className="w-full max-w-4.5"
              />
              <p className="md:text-lg text-sm font-semibold">Pricing</p>
            </div>

            <div>
              <img src={rightIcon} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/how-it-works">
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-2">
              <img src={bookIcon} alt="home icon" className="w-full max-w-4" />
              <p className="md:text-lg text-sm font-semibold">How it works</p>
            </div>

            <div>
              <img src={rightIcon} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/contact-us">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-2">
              <img
                src={phoneIcon}
                alt="home icon"
                className="w-full max-w-4.5"
              />
              <p className="md:text-lg text-sm font-semibold">Contact Us</p>
            </div>

            <div>
              <img src={rightIcon} alt="" />
            </div>
          </div>
        </NavLink>
      </div>

      <div className="flex px-4 items-center justify-center sm:hidden top-90 relative">
        <Button value="outline" className="w-full rounded-full">
          Download KudiCall App
          <img src={arrowDown} alt="arrow down icon" className="" />
        </Button>
      </div>
    </div>
  );
};

export default SideMenu;
