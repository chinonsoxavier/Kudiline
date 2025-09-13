import BackgroundImage from "@/assets/images/Background pattern.png";
import landLine from "@/assets/icons/landline-colored-icon.svg";
import Header from "../layouts/header";
import { motion } from "framer-motion";

const HeroSection = () => {

    const variant = {
      inactive: {
        y: 50,
        opacity: 0,
      },
      active: {
        y: 0,
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
    >
      <Header />
      <div className="center gap-6 flex-col">

            <motion.div
        variants={variant}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >

        <div className="center gap-1 mt-10 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={landLine} alt="how it works icon" />
          <p className="md:text-lg text-sm font-semibold">Contact Us</p>
        </div>
      </motion.div>

          <motion.div
        variants={variant}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      className="space-y-4"
      >

        <p className="md:text-[45px] text-[26px] text leading-[100%] tracking-tight text-center font-bold">
          We’d Love to
          <span className="pacifico font-normal text-primary">Hear</span> From
          You
        </p>
        <p className="md:text-xl text-[#C8C8C8] text-center max-w-xl">
          Have questions, feedback, or partnership ideas? Our team is here to
          help. Reach out to us through the form below.
        </p>
      </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
