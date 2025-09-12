import { Search } from "lucide-react";
import BackgroundImage from "../../assets/images/Background pattern.png";
import Header from "../layouts/header";
import { Button } from "../ui/button";
import Phone6 from "../../assets/images/phone6.png";
import Phone8 from "../../assets/images/phone8.png";
import Phone7 from "../../assets/images/phone7.png";
import Phone4 from "../../assets/images/phone-4.png";
import lightening from "../../assets/icons/lightening-icon.svg";
import { useNavigate } from "react-router-dom";
const HeroComponent = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="z-0 top-50 absolute -left-15">
        <img src={Phone7} className="z-10 w-full max-w-81" alt="phone1" />

        <img
          src={Phone6}
          className="relative w-full max-w-76.5 left-10"
          alt="phone1"
        />
      </div>

      <div className="absolute top-50 -right-15 z-0">
        <div className="center left-20 relative  w-20 h-20 pulse">
          <img src={Phone4} className="object-contain w-full" alt="phone1" />
        </div>
        <img
          src={Phone8}
          className="top-20 z-0 right-2 w-min max-w-81"
          alt="phone1"
        />
      </div>

      <div className="max_width">
        <Header />
      </div>

      <div className="flex max_width flex-wrap px-6 md:px-12 gap-16 items-center justify-center">
        <div className="flex gap-5 relative z-10 flex-col items-center text-center max-w-[901px] justify-center ">
          <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
            <img src={lightening} alt="lightening" />
            <p className="md:text-lg text-sm font-semibold">
              Instant setup with KudiCall
            </p>
          </div>

          <p className="text-[53px] leading-15 tracking-tight font-bold">
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
          <div className="flex gap-10 items-center h-full w-full justify-center ">
            <Button
              onClick={() => navigate("/how-it-works")}
              className="max-w-[290px] h-20"
              variant="secondary"
            >
              Try KudiCall
            </Button>

            <Button
              onClick={() => navigate("/pricing")}
              className="h-20 max-w-[290px]"
            >
              Get a Number
            </Button>
          </div>
        </div>

        {/* <div className="flex-1 ml-10 h-full center flex-col min-w-[400px]  max-w-[624px] relative">
          <div className="flex relative right-30 items-start">
            <img
              src={Phone1}
              className="z-10 w-full max-w-81"
              alt="phone1"
            />

            <div className="center pulse">
              <img
                src={Phone4}
                className="object-contain"
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
            src={Phone8}
            className="absolute top-20 z-0 right-2 w-min max-w-81"
            alt="phone1"
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroComponent;
