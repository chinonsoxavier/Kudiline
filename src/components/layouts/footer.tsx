import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import instagramicon from "../../assets/icons/instagram-icon.svg";
import xicon from "../../assets/icons/x-icon.svg";
const Footer = () => {
  return (
    <div className="border-t max_width mt-10 text-[#FFFFFF] border-[#FFFFFF33]">
      <div className="flex max_width mx-auto py-10 items-center justify-between border-[#FFFFFF33] border-b">
        <img src={logo} alt="logo" className="w-full max-w-[150px]" />
        <nav className="center justify-center items-center gap-5">
          <p className="text-lg">Terms of use</p>
          <p className="text-lg">Privacy Policy</p>
          <p className="text-lg">Support</p>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <div className="center bg-[#202020] cursor-pointer rounded-full p-1 w-10.5 h-10.5">
            <img src={facebookIcon} alt="facebook icon" />
          </div>
          <div className="center bg-[#202020] cursor-pointer rounded-full p-1 w-10.5 h-10.5">
            <img src={xicon} alt="facebook icon" />
          </div>
          <div className="center bg-[#202020] cursor-pointer rounded-full p-1 w-10.5 h-10.5">
            <img src={instagramicon} alt="facebook icon" />
          </div>
        </div>
      </div>
      <div className="center">
        <p className="font-medium py-8">
          © 2025 Box2Box All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer