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
import { motion } from "framer-motion";

const HeroSection = () => {
  const variant = {
    inactive: {
      y: 50,
      opacity: 0,
    },
    active: {
      y: 0, // Fixed to match y property
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="overflow-hidden"
    >
      <Header />
      <div className="center gap-6 flex-col max_width">
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
        >
          <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
            <img src={questionBook} alt="how it works icon" />
            <p className="md:text-lg text-sm font-semibold">How It Works</p>
          </div>
        </motion.div>

        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="md:text-[45px] text-center text-[26px] text leading-[100%] tracking-tight font-bold">
            How
            <span className="pacifico font-normal text-primary">Kudiline</span>
            Works
          </p>
          <p className="md:text-xl text-[#C8C8C8] text-center max-w-xl">
            Make teamwork simple, seamless, and stress-free. Kudiline is built
            to help your team collaborate, organize, and deliver faster. Here’s
            how it works in just a few steps.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-wrap items-center gap-5 py-6 justify-center">
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="w-full flex items-center justify-center flex-wrap gap-4 flex-1"
        >
          <Button className="bg-white max-w-[280px] hover:bg-emerald-100 text-foreground">
            Try KudiCall App
          </Button>
          <Button className="max-w-[280px]">Get My Number Now</Button>
        </motion.div>
      </div>

      <div className="flex max_width flex-col md:flex-row flex-wrap items-end py-10 justify-center gap-5">

             <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }} className="flex items-center justify-between w-full">
            <img src={AiAssistance} alt="ai assistance image" className="" />

            <img
              src={AiAssistance2}
              alt="ai assistance image 2"
              className="relative block md:hidden"
            />
          </motion.div>
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="flex-2 h-full max-w-xs mx-auto w-full flex items-center justify-center gap-5 md:hidden"
        >
          <img
            src={masterCard}
            alt="master card"
            className="w-full object-contain"
          />
        </motion.div>
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="flex h-full flex-1 relative flex-col gap-5 items-start w-full justify-between"
        >

          <div className="rounded flex-wrap border-3 bg-foreground w-full flex items-center md:p-7 p-4 md:gap-4 border-[#FFFFFF33]">
            <div className="center min-w-[230px]">
              <div className="cemd:nter m-ml-3 d:w-18.5 md:h-18.5 w-10 h-10">
                <img
                  src={person1}
                  className="rounded-full w-full h-full"
                  alt="person1"
                />
              </div>
              <div className="center md:-ml-7 -ml-3 md:w-18.5 md:h-18.5 w-10 h-10">
                <img
                  src={person3}
                  className="rounded-full w-full h-full"
                  alt="person1"
                />
              </div>
              <div className="center md:-ml-7 -ml-3 md:w-18.5 md:h-18.5 w-10 h-10">
                <img
                  src={person2}
                  className="rounded-full w-full h-full"
                  alt="person1"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold text-xl md:text-2xl">12K+</p>
              <p className="md:text-lg text-primary-foreground whitespace-nowrap">
                Used by teams and individuals
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center items-stretch gap-5 flex-wrap">
            <div className="flex flex-col min-w-[165px] md:min-w-[217px] px-1 flex-1 center bg-primary gap-5 rounded py-7">
              <img
                src={successIcon}
                alt="success icon"
                className="w-full max-w-[45px]"
              />
              <p className="font-semibold text-center md:text-lg text-xs">
                Call forwarded successfully!
              </p>
            </div>
            <div className="flex px-1 flex-1 flex-col min-w-[165px] md:min-w-[200px] center bg-foreground gap-5 rounded py-7">
              <img
                src={successIcon}
                alt="success icon"
                className="w-full max-w-[45px]"
              />
              <p className="font-semibold text-center md:text-lg text-xs">
                Phone number linked!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="h-full flex-col gap-5 hidden md:flex items-center justify-center "
        >
          <img
            src={masterCard}
            alt="master card"
            className="w-full object-contain max-w-[479px]"
          />hh  
        </motion.div>

        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="flex h-full flex-1 relative flex-col gap-5 items-start md:min-w-[250px] w-full justify-between"
        >
          <img
            src={AiAssistance2}
            alt="ai assistance image 2"
            className="relative hidden md:block md:left-[60%]"
          />

          <div className="rounded flex-col w-full border-3 bg-foreground justify-start flex items-start p-4 border-[#FFFFFF33]">
            <p className="md:text-lg text-primary-foreground text-lg">
              Customer Satisfaction
            </p>
            <p className="font-bold md:text-[26px] text-[22px]  ">100%</p>
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

            <div className="flex relative mt-5 items-center justify-start bg-[#292929] gap-5 w-full p-2 rounded-full left-">
              <div className="center relative left-0 bg-white rounded-full w-13.5 h-13.5">
                <img src={landLine} alt="image icon" className="" />
              </div>

              <p className="text-sm absolute left-[40%] whitespace-nowrap font-medium">
                Slide to answer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
