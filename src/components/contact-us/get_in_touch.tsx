import personTalking from "@/assets/icons/person-talking-icon.svg";
import telephoneIcon from "@/assets/icons/telephone-icon.svg";
import mailIcon from "@/assets/icons/mail-icon.svg";
import { motion } from "framer-motion";

const GetInTouch = () => {
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
    <div className="center gap-4 flex-col max_width">
      <motion.div
        variants={variant}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
        <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={personTalking} alt="how it works icon" />
          <p className="md:text-lg text-sm font-semibold">Let’s Talk</p>
        </div>
      </motion.div>

      <motion.div
        variants={variant}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="md:text-[45px] text-[26px] text leading-[100%] tracking-tight font-bold">
          Get In Touch With Us Directly
        </p>
        <p className="md:text-xl text-[#C8C8C8] text-center max-w-5xl">
          Still have questions and can’t find the answer you’re looking for?
          Please reach out to our friendly team
        </p>
      </motion.div>

      <div className="flex items-center mt-8 w-full gap-8 flex-wrap ">
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="md:gap-8 gap-5 md:p-10 p-6 bg-[#292929] rounded flex items-start justify-between flex-col flex-1"
        >
            <div className="center rounded-full bg-background md:w-17.5 md:h-17.5 w-10 h-10 p-1">
              <img
                src={telephoneIcon}
                alt="telephone icon"
                className="w-full max-w-4 md:max-w-7.5"
              />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xl md:text-[32px]">Call Us</p>
              <p className="md:text-2xl text-xs">Mon - Fri from 8am to 5pm</p>
            </div>
            <p className="font-semibold text-xl md:text-[32px]">
              +2348187165960
            </p>
        </motion.div>

        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="md:gap-8 gap-5 md:p-10 p-6 bg-[#292929] rounded flex items-start justify-between flex-col flex-1"
        >
          <div className="center rounded-full bg-background md:w-17.5 md:h-17.5 w-10 h-10 p-1">
            <img
              src={mailIcon}
              alt="telephone icon"
              className="w-full max-w-4 md:max-w-7.5"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-xl md:text-[32px]">Send Email</p>
            <p className="md:text-2xl text-xs">
              We are always available for you
            </p>
          </div>
          <p className="font-semibold text-xl md:text-[32px]">
            support@kudiline.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
