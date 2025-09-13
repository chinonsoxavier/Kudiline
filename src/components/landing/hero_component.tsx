import { Search } from "lucide-react";
import BackgroundImage from "../../assets/images/Background pattern.png";
import Header from "../layouts/header";
import { Button } from "../ui/button";
import Phone1 from "../../assets/images/phone-1.png";
import Phone2 from "../../assets/images/phone-2.png";
import Phone3 from "../../assets/images/phone-3.png";
import Phone4 from "../../assets/images/phone-4.png";
import lightening from "../../assets/icons/lightening-icon.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroComponent = () => {
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


    const variants2 = {
      inactive: {
        x: 50,
        opacity: 0,
      },
      active: {
        x: 0, // Fixed to match y property
        opacity: 1,
        transition: { duration: 1.5 },
      },
    };

  const navigate = useNavigate();

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max_width">
        <Header />
      </div>

      <div className="flex max_width w-full relative flex-wrap gap-20 items-center justify-center">
        <div className="flex gap-5 w-full flex-col md:mr-10 items-center text-center lg:text-left lg:items-start md:min-w-[650px] flex-1 justify-center">
          <motion.div
            variants={variants1}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }} // Changed to animate for immediate effect
          >
            <div className="center mt-10 gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
              <img src={lightening} alt="lightening" />
              <p className="md:text-lg text-sm font-semibold">
                Instant setup with KudiCall
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={variants1}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className=""
          >
            <p className="md:text-[53px] max-w-3xl text-3xl tracking-tight leading-full font-bold">
              Own a Business Phone Number That Works Online,
              <br />
              <span className="pacifico tra tracking-tight text-primary">
                And Never Miss a Sale Again!
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={variants1}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
          >
            <p className="md:text-2xl max-w-3xl text-[#C8C8C8]">
              Connect an AI assistant. Connect your team. Manage everything for
              free inside the KudiCall app.
            </p>
          </motion.div>

          <motion.div
            className="w-full"
            variants={variants1}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }} // Changed to animate for immediate effect
          >
            <div className="grid grid-cols-2 h-22 md:h-20 justify-between w-full px-2 max-w-3xl rounded-full bg-[#292929]">
              <div className="flex h-full w-full flex-col flex-1 pl-2 md:pl-5  items-start justify-center">
                <div className="flex gap-2 items-start justify-start">
                  <Search className="w-6.5 h-6.5" />
                  <div className="flex items-start justify-start flex-col">
                    <p className="md:text-base text-xs whitespace-nowrap text-[rgba(207,207,207,1)]">
                      Search for your business number
                    </p>
                    <p className="font-semibold text-basemd:text-xl">
                      eg: +2348194672015
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end h-full">
                <Button className="rounded-full w-full md:max-w-38.5 max-w-27 h-12.5 md:h-17.5">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full"
            variants={variants1}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }} // Changed to animate for immediate effect
          >
            <div className="flex md:gap-10 gap-2 items-center h-full w-full justify-start">
              <Button
                onClick={() => navigate("/how-it-works")}
                className="lg:max-w-xs h-16 md:h-20"
                variant="secondary"
              >
                Try KudiCall
              </Button>

              <Button
                onClick={() => navigate("/pricing")}
                className="lg:max-w-xs h-16 md:h-20"
              >
                Get a Number
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 ml-30 h-full center flex-col min-w-[400px] max-w-[624px] relative">
          <motion.div
            className="w-full"
            variants={variants2}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }} // Changed to animate for immediate effect
          >
            <div className="flex relative right-5 md:right-30 items-start">
              <img
                src={Phone1}
                className="z-10 w-full wiggle md:min-w-65 max-w-53 md:max-w-81"
                alt="phone1"
              />
              <img
                src={Phone4}
                className="object-cover pulse absolute md:max-w-15 max-w-12.5 left-60 md:left-80 top-0 -right-0 w-full"
                alt="phone4"
              />
            </div>

            <div className="flex relative z-10 items-start">
              <img
                src={Phone3}
                className="relative wiggle w-full -left-15 max-w-39 md:max-w-58.5 md:-left-40"
                alt="phone3"
              />
            </div>
            <img
              src={Phone2}
              className="absolute wiggle top-20 z-0 left-30 md:left-30 max-w-53 md:max-w-81"
              alt="phone2"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
