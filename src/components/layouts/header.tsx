import { Download } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className=" h-44.5 center w-full">
      <div className="w-full bg-[#151515] border-[#282828] border h-24.5 max-w-[1126px] rounded-[50px] top-10 flex items-center justify-between px-5">
        <div className="h-full center">
          <img
            src={Logo}
            alt="logo"
            className="w-full max-w-35 object-contain h-full"
          />
        </div>

        <div className="flex items-center gap-10 justify-evenly">
          <div className="center text-white text-xl gap-5">
            <p className="font-medium text-primary">Home</p>
            <p className="font-medium">Pricing</p>
            <p className="font-medium">How it works</p>
            <p className="font-medium">Pricing</p>
          </div>

          <div className="center">
            <Button value="outline"  className="w-full rounded-full" >
               Download KudiCall App <Download/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
