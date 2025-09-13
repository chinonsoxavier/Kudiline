import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import instagramicon from "../../assets/icons/instagram-icon.svg";
import xicon from "../../assets/icons/x-icon.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="border-t mt-10 text-[#FFFFFF] border-[#FFFFFF33]">
      <div className="flex max_width flex-wrap gap-5 mx-auto md:py-10 py-6 items-center justify-between border-[#FFFFFF33] border-b">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-[100px] md:max-w-[150px]"
        />
        <nav className="center justify-center items-center gap-5">
          <NavLink to="/terms-of-use">
            <p className="text-xs md:text-lg">Terms of use</p>
          </NavLink>
          <NavLink to="/privacy-policy">
            <p className="text-xs md:text-lg">Privacy Policy</p>
          </NavLink>

          <NavLink to="/contact-us">
          <p className="text-xs md:text-lg">Support</p>
          </NavLink>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <div className="center bg-[#202020] cursor-pointer rounded-full p-1 md:w-10.5 w-7.5 md:h-10.5 h-7.5">
            <img src={facebookIcon} alt="facebook icon" />
          </div>
          <div className="center bg-[#202020] cursor-pointer rounded-full p-1 md:w-10.5 w-7.5 md:h-10.5 h-7.5">
            <img src={xicon} alt="facebook icon" />
          </div>
          <div className="center bg-[#202020] cursor-pointer rounded-full p-1 md:w-10.5 w-7.5 md:h-10.5 h-7.5">
            <img src={instagramicon} alt="facebook icon" />
          </div>
        </div>
      </div>
      <div className="center">
        <p className="font-medium md:py-8 py-5 md:text-base text-xs">
          © 2025 Box2Box All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
