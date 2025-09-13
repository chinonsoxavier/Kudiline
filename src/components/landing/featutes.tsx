import appIcon from "../../assets/icons/application-icon.svg";
import characterVector from "../../assets/images/character-vector.png";
import characterVector2 from "../../assets/images/character-vector-key.png";
import callReports from "../../assets/images/screen-injection.png";
import callForwarding from "../../assets/images/icon-injection.png";
import aiCallAssist from "../../assets/images/AI-vector.png";
import trackerImage from "../../assets/images/tracker.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Features = () => {
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

  return (
    <div className="center gap-4 flex-col max_width">
      <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
        <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={appIcon} alt="features icon" />
          <p className="md:text-lg text-sm font-semibold">
            Features Breakdown?
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <p className="md:text-[45px] text-[26px] text-center leading-[100%] tracking-tight font-bold">
          Everything You Need to Run Your Business Calls Like a Pro
        </p>
        <p className="md:text-xl text-[#C8C8C8] text-center max-w-5xl">
          KudiLine packs powerful tools into one simple platform, so you can
          handle calls, manage your team, and close sales — all without juggling
          multiple apps or devices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 flex-wrap">
        <motion.div
          variants={variants}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="bg-foreground flex items-center justify-between flex-col border space-y-8 border-[#282828] px-3 pt-3 rounded md:row-span-2"
        >
          <div className="space-y-3">
            <p className="font-semibold text-xl md:text-[36px] leading-full">
              Works Perfectly Online & Offline
            </p>
            <p className="md:text-2xl text-sm leading-full text-secondary-foreground">
              No physical SIM needed — you can receive calls in KudiCall.
            </p>
          </div>

          <div className="flex items-end h-ful">
            <img
              src={characterVector}
              alt="character vector"
              className="w-full max-w-[310px]"
            />
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="bg-foreground medium:flex-row flex-col border flex items-start md:items-end justify-between border-[#282828] px-3 pt-3 rounded md:col-span-2"
        >
          <div className="space-y-4 pb-5">
            <p className="font-semibold text-xl md:text-[36px] leading-full">
              Shared Access
            </p>
            <p className="md:text-2xl text-sm leading-full text-secondary-foreground">
              Add team members to answer from one number.
            </p>
          </div>

          <img
            src={characterVector2}
            alt="shared access vector image"
            className="w-full"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="bg-foreground border border-[#282828] px-3 pt-3 rounded"
        >
          <div className="space-y-4 p-5">
            <p className="font-semibold text-xl md:text-[36px] leading-full">
              Call Reports
            </p>
            <p className="md:text-2xl text-sm leading-full text-secondary-foreground">
              See who’s calling, when, and why.
            </p>
          </div>
          
          <div className="flex justify-end items-end">

          <img
            src={callReports}
            alt="call reports vector image"
            className="w-full max-w-[160px]"
            />
            </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="bg-foreground border border-[#282828] px-3 pt-3 rounded"
        >
          <div className="w-full flex items-center justify-end">
            <img
              src={callForwarding}
              alt="call reports vector image"
              className="w-full max-w-[140px]"
            />
          </div>
          <div className="py-6 space-y-4">
            <p className="font-semibold text-xl md:text-[36px] leading-full">
              Call Forwarding
            </p>
            <p className="md:text-2xl text-sm leading-full text-secondary-foreground">
              Stay connected whether you are online or offline.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="grid grid-cols-1 medium:grid-cols-2 md:row-span-3 md:col-span-3 gap-5 w-full"
        >
          <div className="bg-foreground  border flex items-start justify-between border-[#282828] px-3 pt-3 rounded">
            <div className=" space-y-4 pb-5">
              <p className="font-semibold text-xl md:text-[36px] leading-full">
                AI Call Assistant
              </p>
              <p className="md:text-2xl text-sm leading-full text-secondary-foreground">
                Let AI pitch, answer FAQs, and take orders (coming soon).
              </p>
            </div>

            <img
              src={aiCallAssist}
              alt="shared access vector image"
              className="w-full object-contain max-w-[240px] md:max-w-[325px]"
            />
          </div>
          <div className="bg-foreground gap-10 medium:gap-0 flex-col md:flex-row flex border border-[#282828] px-3 pt-3 rounded w-full">
            <div className="py-6 space-y-4">
              <p className="font-semibold whitespace-nowraptext-xl md:text-[36px]  leading-full">
                Order Tracking
              </p>
              <p className="md:text-2xl text-sm leading-full text-secondary-foreground">
                Sync your calls with deliveries (via KudiCall)
              </p>
            </div>
            <div className="flex md:items-start md:justify-start w-full items-start justify-center">
            <img
              src={trackerImage}
              alt="call reports vector image"
              className="w-full object-contain max-w-[163px]"
              />
              </div>
          </div>
        </motion.div>
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
          className="max-w-[525px] my-8"
        >
          Get Premium Number
        </Button>
      </motion.div>
    </div>
  );
};

export default Features;
