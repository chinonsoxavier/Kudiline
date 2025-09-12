import bagIcon from "@/assets/icons/suitcase-icon.svg";
import girlImage from "@/assets/images/girl-holding.png";
import girlAndBoyImage from "@/assets/images/girl-and-boy.jpg";
import logo from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import caseStudyImage from "@/assets/images/case-study.png";
import { motion } from "framer-motion";

const HowWeWork = () => {

    const variants2 = {
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
    <div className="center flex-col gap-4 max_width">
      <motion.div
        variants={variants2}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
        <div className="center gap-2 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={bagIcon} alt="how we work icon" />
          <p className="md:text-lg text-sm font-semibold">
            KudiLine Works the Way You Work
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={variants2}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="md:text-[45px] text-center text-[26px] text leading-[100%] tracking-tight font-bold">
          Built for the African Way of Doing Business
        </p>
        <p className="md:text-[22px] leading-[140%] text-[#C8C8C8] text-center max-w-5xl">
          KudiLine is made for the realities of running a business in Africa —
          fast-moving, customer-focused, and always on the go. It’s your direct
          line to more sales, happier customers, and smoother operations.
        </p>
      </motion.div>
      <div className="py-5 center flex-col">
        <motion.div
          variants={variants2}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
        >
          <img src={girlImage} alt="image of a girl" className="w-full" />
        </motion.div>

        <div>
          <div className="flex items-stretch flex-wrap h-full py-6 gap-6">
            <motion.div
              variants={variants2}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
              className="rounded-xl md:min-w-80 flex-1 md:ax-w-[450px] w-full min-h-80 py-8 px-5 bg-gradient-to-br to-primary flex items-start justify-between flex-col from-[#004840] relative"
            >
              <div className="flex w-full items-center justify-end">
                <img
                  src={logo}
                  alt=""
                  className="w-full max-w-[27.1px] object-contain"
                />
              </div>

              <div className="">
                <p className="md:text-[47px] text-[26px] font-bold leading-[100%]">
                  Pan-Nigeria Coverage:
                </p>
                <p className="md:text-[40px] text-[26px] leading-[100%] font-medium">
                  Works with all major telcos.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={variants2}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
              className="flex md:min-w-80 w-full flex-1 flex-col items-center gap-5 justify-center"
            >
              <div className="text-left flex-col gap-2 w-full bg-foreground p-3 rounded-xl">
                <p className="text-xl font-semibold">Quick Setup:</p>
                <p className="text-lg text-primary-foreground leading-[100%]">
                  It is super-fast, you can get started in a matter minutes.
                </p>
              </div>

              <div className="rounded-xl h-full w-full center bg-[#292929]">
                <img src={caseStudyImage} alt="case study image" />
              </div>
            </motion.div>

            <motion.div
              style={{
                background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${girlAndBoyImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="rounded-xl md:min-w-80 flex-1 m:max-w-[450px] min-h-80 py-8 px-5 flex items-start w-full justify-between flex-col from-[#004840] relative"
              variants={variants2}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
            >
              <div className="flex w-full items-center justify-end">
                <img
                  src={logo2}
                  alt="logo 2"
                  className="w-full hidden sm:flex max-w-[27.1px] object-contain"
                />

                <img
                  src={logo}
                  alt="logo 2"
                  className="w-full sm:hidden max-w-[27.1px] object-contain"
                />
              </div>
              <div className="">
                <p className="md:text-[47px] text-[26px] leading-[100%] font-bold">
                  For All Business Sizes
                </p>
                <p className="md:text-[40px] text-[26px] leading-[100%] font-medium">
                  — From solo vendors to teams
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
