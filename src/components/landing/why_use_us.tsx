import questionIcon from "../../assets/icons/question-icon.svg";
import landLine from "../../assets/icons/landline-icon.svg";
import teamCalling from "../../assets/icons/users-icon.svg";
import cellPhone from "../../assets/icons/cellphone-icon.svg";
import chatIcon from "../../assets/icons/chat-icon.svg";
import callForwarding from "../../assets/icons/forwarded-call-icon.svg";
import aiIcon from "../../assets/icons/ai-icon.svg";
import { motion } from "framer-motion";

const WhyUseUs = () => {
    const variants1 = {
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


     
  const features = [
    {
      title: "Virtual Business Numbers",
      desc: "Run your business from anywhere. No SIM card needed. Works online.",
      icon: landLine,
    },
    {
      title: "Team Calling",
      desc: "Share the number with your team. Everyone stays connected.",
      icon: teamCalling,
    },
    {
      title: "Call on the KudiCall App",
      desc: "Pick and answer calls directly from the app — even when offline.",
      icon: cellPhone,
    },
    {
      title: "Talk More, Sell More",
      desc: "Turn every call into an opportunity, you can engage customers in real time.",
      icon: chatIcon,
    },
    {
      title: "Call Forwarding + Escrow",
      desc: "Route calls to the right person instantly, Keep transactions safe with our built-in escrow feature.",
      icon: callForwarding,
    },
    {
      title: "AI Sales Assistant (coming soon)",
      desc: "Let AI answer questions and close deals while you sleep.",
      icon: aiIcon,
    },
  ];

  return (
    <div className="center gap-4 flex-col max_width">
      <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }} // Changed to animate for immediate effect
      >
        <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={questionIcon} alt="question icon" />
          <p className="md:text-lg text-sm font-semibold">Why KudiLine?</p>
        </div>
      </motion.div>

      <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }} // Changed to animate for immediate effect
      >
        <p className="md:text-[45px] text-[26px] text leading-[100%] tracking-tight font-bold">
          One Number. Every Sale. No Missed Calls.
        </p>
      </motion.div>

      <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }} // Changed to animate for immediate effect
      >
        <p className="md:text-xl text-[#C8C8C8] text-center max-w-5xl">
          KudiLine isn’t just a phone number — it’s a smart business tool
          designed for the way African entrepreneurs work. KudiLine helps you
          stay connected, close deals faster, and never miss an opportunity.
        </p>
      </motion.div>

      <div className="flex items-start flex-wrap justify-end">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex lg:min-h-70 flex-col pb-8 items-start flex-1 w-full min-w-xs p-4 m-2 bg-[#292929] rounded-2xl"
            variants={variants1}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }} // Changed to animate for immediate effect
          >
               <motion.div
        variants={variants1}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }} // Changed to animate for immediate effect
      >

              <div className="center rounded-full md:w-17.5 md:h-17.5 h-11.5 w-11.5 bg-background center">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className=""
                  />
              </div>
              <h3 className="md:text-[26px] text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="md:text-lg text-sm text-primary-foreground leading-">
                {feature.desc}
              </p>
                  </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUseUs;
