import bookIcon from "@/assets/icons/book-icon.svg";
import searchIcon from "@/assets/icons/magnifier-icon.svg";
import noConnection from "@/assets/icons/no-connection-icon.svg";
import { Button } from "../ui/button";
const HowItWorks = () => {
  const steps = [
    {
        desc: "Search and select the perfect number for your business.",
        iconColor: "#006C60",
        boxColor: "#66D2C6",
        icon: searchIcon,
        title: "Pick a Phone Number",
    },
    {
        title: "Link to Your KudiCall Profile",
      desc: "Connect it instantly, no SIM card needed.",
      icon: noConnection,
      iconColor: "#107AE3",
      boxColor: "#D0E7FE",
    },
  ];
  return (
    <div className="center gap-4 flex-col max_width">
      <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 test py-1 px-4">
        <img src={bookIcon} alt="question icon" />
        <p className="text-lg font-semibold">How It Works?</p>
      </div>

      <p className="text-[45px] leading-[100%] tracking-tight font-bold">
        How KudiLine Works — Simple Steps to Smarter Business Calls{" "}
      </p>
      <p className="text-xl text-[#C8C8C8] text-center max-w-5xl">
        Getting started with KudiLine is quick and effortless. In just a few
        steps, you can set up your business number, connect it to your KudiCall
        profile, and start receiving calls from customers anywhere.
      </p>

      <div className="flex text-[#0E0E0E] items-start w-full gap-8 flex-wrap justify-end">
        {steps.map((step, index) => (
          <div
            className="rounded-[30px] p-6 min-h-[409px] h-full flex-1"
            style={{ backgroundColor: step.boxColor }}
          >
            <div
              className="center text-[white] text-[34px] font-bold rounded-full w-17 h-17"
              style={{ backgroundColor: step.iconColor }}
            >
              {index + 1}
            </div>

            <div className="flex relative py-4 items-start justify-between">
              <div className="h-full" >
                <p className="text-[32px] font-semibold leading-10">
                  {step.title}
                </p>

                <p className="text-2xl text-foreground" >{step.desc}</p>
              </div>

              <img
                src={step.icon}
                alt=""
                className="relative w-full top-10 object-contain max-w-[221px] right-0"
              />
            </div>
          </div>
        ))}
          </div>
          <Button className="max-w-[525px] mt-8" >Get Premium Number</Button>
    </div>
  );
};

export default HowItWorks;
