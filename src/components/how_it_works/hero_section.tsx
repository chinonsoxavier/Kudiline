import BackgroundImage from "@/assets/images/Background pattern.png";
import Header from "../layouts/header";
import questionBook from "@/assets/icons/question-book-icon.svg";
import { Button } from "../ui/button";
import person1 from "@/assets/images/person1.png";
import person2 from "@/assets/images/person2.png";
import person3 from "@/assets/images/person3.png";
import AiAssistance from "@/assets/images/ai-assistant-image.png";
import AiAssistance2 from "@/assets/images/ai-assistant-image2.png";
import successIcon from "@/assets/icons/success.svg";
import masterCard from "@/assets/images/master-card.png";
import alarmIcon from "@/assets/icons/alarm-clock.svg";
import messageIcon from "@/assets/icons/message.svg";
import landLine from "@/assets/icons/landline-colored-icon.svg";
const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="center gap-6 flex-col max_width">
        <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={questionBook} alt="how it works icon" />
          <p className="text-lg font-semibold">How It Works</p>
        </div>

        <p className="text-[45px] leading-[100%] tracking-tight font-bold">
          How
          <span className="pacifico font-normal text-primary"> Kudiline </span>
          Works
        </p>
        <p className="text-xl text-[#C8C8C8] text-center max-w-xl">
          Make teamwork simple, seamless, and stress-free. Kudiline is built to
          help your team collaborate, organize, and deliver faster. Here’s how
          it works in just a few steps.
        </p>
      </div>
      <div className="flex items-center gap-5 py-6 justify-center">
        <Button className="bg-white max-w-[280px] hover:bg-emerald-100 text-foreground">
          Try KudiCall App
        </Button>
        <Button className="max-w-[280px]">Get My Number Now</Button>
      </div>

      <div className="flex items-end justify-center px-29 gap-5">
        <div className="flex max-w-[430px] flex-1 flex-col gap-5 items-end justify-between h-full">
          <img src={AiAssistance} alt="ai assistance image" />

          <div className="rounded border-3 bg-foreground flex items-center p-7 gap-4 border-[#FFFFFF33]">
            <div className="center">
              <div className="center w-18.5 h-18.5">
                <img
                  src={person1}
                  className="rounded-full w-full h-full"
                  alt="person1"
                />
              </div>
              <div className="center -ml-7 w-18.5 h-18.5">
                <img
                  src={person3}
                  className="rounded-full w-full h-full"
                  alt="person1"
                />
              </div>
              <div className="center -ml-7 w-18.5 h-18.5">
                <img
                  src={person2}
                  className="rounded-full w-full h-full"
                  alt="person1"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-2xl">12K+</p>
              <p className="text-lg text-primary-foreground">
                Used by teams and individuals
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col min-w-[217px] center bg-primary gap-5 rounded py-7">
              <img
                src={successIcon}
                alt="success icon"
                className="w-full max-w-[45px]"
              />
              <p className="font-semibold text-center text-lg">
                Call forwarded successfully!
              </p>
            </div>
            <div className="flex flex-col min-w-[200px] center bg-foreground gap-5 rounded py-7">
              <img
                src={successIcon}
                alt="success icon"
                className="w-full max-w-[45px]"
              />
              <p className="font-semibold text-center text-lg">
                Phone number linked!
              </p>
            </div>
          </div>
        </div>

        <div className="flex-2 h-full flex-col gap-5 items-start justify-end max-w-[349px]">
          <img
            src={masterCard}
            alt="master card"
            className="w-full object-contain max-w-[479px]"
          />
        </div>

        <div className="flex h-full flex-1 relative flex-col gap-5 items-start justify-between">
          <img
            src={AiAssistance2}
            alt="ai assistance image 2"
            className="relative left-[60%]"
          />

          <div className="rounded flex-col min-w-[297px] w-full border-3 bg-foreground justify-start flex items-start p-4 border-[#FFFFFF33]">
            <p className="text-lg text-primary-foreground">
              Customer Satisfaction
            </p>
            <p className="font-bold text-[26px]">100%</p>
          </div>

          <div className="rounded w-full flex-col border-3 bg-foreground flex items-center p-4 px-5 gap-2 border-[#FFFFFF33]">
            <p className="text-xs font-semibold text-primary-foreground">
              mobile
            </p>
            <p className="text-lg font-semibold">0700-FASHIONHUB</p>
            <p className="text-xs text-primary-foreground">Calling...</p>

            <div className="flex items-center w-full justify-between">
              <div className="flex items-center justify-center flex-col">
                <div className="rounded-full w-9 h-9 bg-[#292929] center">
                  <img src={messageIcon} alt="message icon" className="" />
                </div>
                <p className="text-[11px] text-primary-foreground">Message</p>
              </div>
              <div className="flex items-center justify-center flex-col">
                <div className="rounded-full w-9 h-9 bg-[#292929] center">
                  <img src={alarmIcon} alt="alarm icon" className="" />
                </div>
                <p className="text-[11px] text-primary-foreground">Remind Me</p>
              </div>
            </div>

            <div className="flex mt-5 items-center justify-start bg-[#292929] gap-5 w-full p-2 rounded-full relative">
              <div className="center relative left-0 bg-white rounded-full w-13.5 h-13.5">
                <img src={landLine} alt="image icon" className="" />
              </div>

              <p className="text-sm whitespace-nowrap font-medium">Slide to answer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
