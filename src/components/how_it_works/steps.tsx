import personWalking from "@/assets/icons/level-up.svg";
import noConnection1 from "@/assets/images/no-connection 1.png";
import callQueue from "@/assets/images/call-queue 1.png";
import aiBot from "@/assets/images/artificial-intelligence.png";
import searchIcon from "@/assets/icons/magnifier-icon.svg";
import { motion } from "framer-motion";

const Steps = () => {

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

  const steps = [
    {
      desc: "Choose a smart phone number that reflects your business identity. Whether you want a local touch or a professional edge, your line becomes the first impression customers trust.",
      iconColor: "#006C60",
      boxColor: "#66D2C6",
      icon: searchIcon,
      title: "Pick a Phone Number",
      span: 2,
    },
    {
      title: "Set Up Your Profile",
      desc: "Fill in your business details, upload your logo, and customize your caller experience. This profile is what callers see — building instant credibility and recognition.",
      icon: noConnection1,
      iconColor: "#F79009",
      boxColor: "#FEC84B",
      span: 1,
    },
    {
      title: "Manage Calls Seamlessly",
      desc: "Easily manage missed calls, voicemails, and follow-ups in one dashboard—so no customer ever slips through the cracks.",
      icon: callQueue,
      iconColor: "#F79009",
      boxColor: "#FEC84B",
      span: 1,
    },
    {
      title: "Use AI and Team features to scale",
      desc: "Automate call handling with AI that transcribes, summarizes, and routes calls instantly. Add teammates to share workloads, assign roles, and manage calls seamlessly as your business expands.",
      icon: aiBot,
      iconColor: "#006C60",
      boxColor: "#66D2C6",
      span: 2,
    },
  ];
  return (
    <div className="center gap-4 flex-col max_width">
      <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
        >
      <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
        <img src={personWalking} alt="how it works icon" />
        <p className="md:text-lg text-sm font-semibold">Kudiline Steps</p>
      </div>
        </motion.div>

      <div className="grid-cols-1 xlarge:grid-cols-5 text-[#0E0E0E] grid items-start w-full  md:gap-3 flex-wrap justify-end">
        {steps.map((step, index) => (
          
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="mt-4"
        >

          <div
            className={`rounded-[30px] w-[100%] md:p-6 p-3 md:min-h-[409px] h-full ${
              step.span === 2 ? "col-span-3" : "col-span-2"
            }`}
            style={{ backgroundColor: step.boxColor }}
            >
            <div
              className="center text-[white] text-3xl font-bold rounded-full w-14 h-14"
              style={{ backgroundColor: step.iconColor }}
              >
              {index + 1}
            </div>

            <div
              className={`flex flex-col xxs:flex-row relative py-4 items-end justify-between ${
                step.span === 2 ? "" : ""
              }`}
              >
              <div className="h-full">
                <p className="text-xl font-semibold leading-10">{step.title}</p>

                <p className="md:text-lg text-sm text-foreground">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center justify-center w-full">
                <img
                  src={step.icon}
                  alt=""
                  className=" relative w-[130px] md:w-[221px] object-cover max-w-[221px]"
                  />
              </div>
            </div>
          </div>
                  </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
