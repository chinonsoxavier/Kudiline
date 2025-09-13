import bookIcon from "@/assets/icons/book-icon.svg";
import searchIcon from "@/assets/icons/magnifier-icon.svg";
import noConnection from "@/assets/icons/no-connection-icon.svg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  const variants = {
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
      <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
        <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={bookIcon} alt="how it works icon" />
          <p className="md:text-lg text-sm font-semibold">How It Works?</p>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="md:text-[45px] text-[26px] text leading-[100%] tracking-tight text-center font-bold">
          How KudiLine Works — Simple Steps to Smarter Business Calls
        </p>
        <p className="md:text-xl text-[#C8C8C8] text-center max-w-5xl">
          Getting started with KudiLine is quick and effortless. In just a few
          steps, you can set up your business number, connect it to your
          KudiCall profile, and start receiving calls from customers anywhere.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 medium:grid-cols-2 text-[#0E0E0E] flex-col md:flex-row items-stretch w-full gap-4  md:gap-8 flex-wrap justify-end">
        {steps.map((step, index) => (
          <motion.div
            className="rounded-[30px] w-full p-6 h-full flex-1"
            style={{ backgroundColor: step.boxColor }}
            variants={variants}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
          >
            <div className="h-full">
              <div
                className="center text-[white] text-xl medium:text-3xl font-bold rounded-full md:w-14 md:h-14 h-10 w-10"
                style={{ backgroundColor: step.iconColor }}
              >
                {index + 1}
              </div>

              <div
                className={`flex flex-col xlarge:flex-row relative py-4 medium:gap-0 gap-5 box-border items-start justify-end h-[90%]`}
              >
                <div className="h-full">
                  <p className="text-xl font-semibold leading-10">
                    {step.title}
                  </p>

                  <p className="md:text-base   text-sm text-foreground">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-end relative h-max justify-end w-full">
                  <img
                    src={step.icon}
                    alt=""
                    className="  w-[130px] md:w-[221px] object-cover max-w-[221px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="w-full center"
      >
        <Button
          onClick={() => navigate("/pricing")}
          className="max-w-[525px] mt-8"
        >
          Get Premium Number
        </Button>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
