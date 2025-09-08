import { Search } from "lucide-react";
import BackgroundImage from "../../assets/images/Background pattern.png";
import Header from "../layouts/header";
import { Button } from "../ui/button";
import Phone1 from "../../assets/images/phone-1.png";
import Phone2 from "../../assets/images/phone-2.png";
import Phone3 from "../../assets/images/phone-3.png";
import Phone4 from "../../assets/images/phone-4.png";
import lightening from "../../assets/icons/Lightning.svg"
const HeroComponent = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="w-full px-8">
        
      </div>
      <div className="flex px-8 gap-12 relative max_width items-start justify-center">
        <div className="flex gap-5 flex-col items-start flex-1 justify-center">
          <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 test py-1 px-4">
          <img src={lightening} alt="lightening" />
            <p className="text-lg font-semibold">Instant setup with KudiCall</p>
          </div>
          <p className="text-[55px] leading-15 tracking-tight font-bold">
            Own a Business Phone Number That Works Online,
            <br />
            <span className="pacifico tra tracking-tight text-primary">
              And Never Miss a Sale Again!
            </span>
          </p>
          <p className="text-2xl text-[#C8C8C8]">
            Connect an AI assistant. Connect your team. Manage everything for
            free inside the KudiCall app.
          </p>

          <div className="grid grid-cols-2 h-25 justify-between py-3 w-full px-3 gap-5 rounded-full bg-[#292929]">
            <div className="flex flex-col flex-1 pl-5 items-center justify-center">
              <div className="flex gap-2 items-start justify-start">
                <Search className="w-6.5 h-6.5" />
                <div className="flex items-start justify-start flex-col">
                  <p className="whitespace-nowrap text-[rgba(207, 207, 207, 1)] ">
                    Search for your business number
                  </p>
                  <p className="font-semibold text-xl">eg: +2348194672015</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end h-full">
              <Button className="rounded-full w-full max-w-38.5 h-17.5">
                Search
              </Button>
            </div>
          </div>
          <div className="flex gap-10 items-center h-full w-full justify-between">
            <Button className="max-w-xs h-20" variant="secondary">
              Try KudiCall
            </Button>

            <Button className="h-20" >Get a Number</Button>
          </div>
        </div>
        <div className="flex-1 h-full center flex-col max-w-[624px] relative">
          <div className="flex relative right-30 items-start">
            <img
              src={Phone1}
              className=" left-0 z-10 w-full max-w-81"
              alt="phone1"
            />

            <div className="center pulse">
              <img
                src={Phone4}
                className="absolte object-contain top-0 right-0"
                alt="phone1"
              />
            </div>
          </div>
          <div className="flex relative z-10 items-start">
            <img
              src={Phone3}
              className="relative w-full max-w-58.5 right-50"
              alt="phone1"
            />
          </div>
          <img
            src={Phone2}
            className="absolute top-20 z-0 right-2 w-min max-w-81"
            alt="phone1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
