import landLineColored from "../../assets/icons/landline-colored-icon.svg";
import KudilineFrame1 from "@/assets/images/kudiline-frame-1.png";
import KudilineFrame2 from "@/assets/images/kudiline-frame-2.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ChoosePremium = () => {
  const navigate = useNavigate();
  const variants1 = {
    inactive: {
      x: -50,
      opacity: 0,
    },
    active: {
      x: 0, // Fixed to match y property
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  return (
    <div className="center gap-4 flex-col max_width">
      <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
        <div className="center gap-1 max-w-m rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={landLineColored} alt="choose premium icon" />
          <p className="md:text-lg text-sm font-semibold">
            Choose a Premium Number
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
        <p className="md:text-[45px] text-[26px] text-center text leading-[100%] tracking-tight font-bold">
          Get a Memorable Number That Builds Trust
        </p>
        <p className="md:text-[22px] leading-[140%] text-[#C8C8C8] text-center max-w-5xl">
          Your business number should be as memorable as your brand. With
          KudiLine, you can secure an easy-to-remember premium number that
          customers won’t forget — whether it’s a catchy word, a number pattern,
          or both.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="flex flex-wrap md:flex-nowrap w-full gap-5 my-6 justify-center">
        <motion.div
          variants={variants1}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={KudilineFrame1}
            alt="kudiline frame 1"
            className="w-full object-contain"
          />
        </motion.div>

        <motion.div
          variants={variants1}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={KudilineFrame2}
            alt="kudiline frame 2"
            className="w-full object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="w-full center"
      >
      <Button className="max-w-80" onClick={()=>navigate("/pricing")} >Browse Premium Numbers</Button>
      </motion.div>
    </div>
  );
};

export default ChoosePremium;
