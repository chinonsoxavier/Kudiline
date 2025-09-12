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

      <div className="grid  grid-cols-[repeat(auto-fill,minmax(430px,1fr))] text-[#0E0E0E] flex-col md:flex-row items-stretch w-full gap-8 flex-wrap justify-end">
        {steps.map((step, index) => (
          <motion.div
            className="rounded-[30px] w-full p-6 h-full flex-1"
            style={{ backgroundColor: step.boxColor }}
            variants={variants}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
          >
            <div
              className="center text-[white] text-[19px] sm:text-[34px] font-bold rounded-full w-10 h-10 sm:w-17 sm:h-17"
              style={{ backgroundColor: step.iconColor }}
            >
              {index + 1}
            </div>

            <div className="flex relative py-4 items-start justify-between">
              <div className="h-full">
                <p className="sm:text-[32px] text-xl font-semibold leading-10">
                  {step.title}
                </p>

                <p className="sm:text-2xl text-sm text-foreground">
                  {step.desc}
                </p>
              </div>

              <img
                src={step.icon}
                alt="steps image"
                className="relative w-full top-10 object-contain max-w-[221px] right-0"
              />
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
        <Button onClick={()=>navigate("/pricing")} className="max-w-[525px] mt-8">Get Premium Number</Button>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
