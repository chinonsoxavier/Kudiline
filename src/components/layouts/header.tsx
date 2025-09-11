import Logo from "../../assets/images/logo.png";
import { Button } from "../ui/button";
import arrowDown from "../../assets/icons/arrow-down-icon.svg"
import { NavLink } from "react-router-dom";
import MenuIcon from "@/assets/icons/menu.svg";
import useLandingStore from "../landing/landing_store";
const Header = () => {

  const { toggleSideMenuOpen } = useLandingStore();

  return (
    <div className=" h-44.5 center medium:relative fixed z-50 inset-0 px-4 w-full">
      <div className="w-full bg-[#151515] border-[#282828] border h-24.5 max-w-[1126px] rounded-[50px] top-10 flex items-center justify-between px-5">
        <div className="h-full center">
          <img
            src={Logo}
            alt="logo"
            className="w-full max-w-30 lg:max-w-35 object-contain h-full"
          />
        </div>

        <div className="flex items-center medium:gap-10 gap-5 justify-evenly">
          <nav className="hidden medium:flex">
            <ul className="center text-white text-xl gap-5">
              <li className="text-base lg:text-lg font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Home
                </NavLink>
              </li>

              <li className="text-base lg:text-lg font-medium">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Pricing
                </NavLink>
              </li>

              <li className="text-base lg:text-lg font-medium">
                <NavLink
                  to="/how-it-works"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  How it works
                </NavLink>
              </li>

              <li className="text-base lg:text-lg font-medium">
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="center">
            <Button value="outline" className="w-full rounded-full">
              Download KudiCall App
              <img src={arrowDown} alt="arrow down icon" className="" />
            </Button>
          </div>
          <div
            onClick={() => toggleSideMenuOpen()}
            className="flex medium:hidden cursor-pointer"
          >
            <img src={MenuIcon} alt="menu" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
