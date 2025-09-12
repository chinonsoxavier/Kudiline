import priceIcon from "../../assets/icons/price-icon.svg";
import { Button } from "../ui/button";
import checkmark from "../../assets/icons/check-mark-icon.svg";
import { motion } from "framer-motion";

const Pricing = () => {
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
  const plans = [
    {
      name: "Starter",
      price: "₦2,000",
      desc: "Perfect for individuals and small businesses just getting started.",
      features: ["1 number", "1 user", "Basic call"],
    },
    {
      name: "Team",
      price: "₦10,000",
      desc: "Designed for growing teams that need more flexibility and control.",
      features: [
        "1 number",
        "5 user",
        "call log",
        "forwarding",
        "Ai assistant",
      ],
    },
    {
      name: "Pro",
      price: "6000",
      desc: "The complete communication suite for established businesses and professionals.",
      features: [
        "Premium number",
        "Ai assistant",
        "Voicemail & Call Forwarding",
        "Team",
        "Full Analytics",
      ],
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
        <img src={priceIcon} alt="price icon" />
        <p className="md:text-lg text-sm font-semibold">Pricing Plans</p>
      </div>
      </motion.div>

  <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
        className="space-y-4"
      >

      <p className="md:text-[45px] text-center text-[26px] text leading-[100%] tracking-tight font-bold">
        Simple Pricing. Big Value. No Surprises.
      </p>
      <p className="md:text-xl text-[#C8C8C8] text-center max-w-5xl">
        KudiLine keeps pricing transparent and straightforward, so you know
        exactly what you’re getting and what it costs.
      </p>
      </motion.div>

      <div className="flex items-stretch w-full gap-3 flex-wrap justify-evenly">
        {plans.map((plan, index) => (
            <motion.div
        variants={variants}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
           key={index}
            className={`${
              plan.name === "Team" ? "border-primary" : "border-transparent"
            } flex min-h-130 md:min-h-70 hover:border-primary border-5 duration-500 flex-col pb-8 items-start flex-1 justify-between w-full min-w-xs p-6 m-2 bg-[#292929] rounded`}
      >        
            <div>
              <div className="flex items-center w-full justify-between">
                <h3 className="md:text-3xl text-xl font-semibold mb-2">{plan.name}</h3>
                {plan.name === "Team" ? (
                  <div className="rounded-full -mt-8 px-2 py-1 center md:text-sm text-lg bg-primary/10 text-primary font-medium">
                    Most Popular
                  </div>
                ) : null}
              </div>
              <p className="md:text-[22px] text-sm text-secondary-foreground font-medium mb-6">
                {plan.desc}
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="md:text-[22px] text-base flex gap-2">
                    <img src={checkmark} alt="checkmark icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <p className="md:text-[40px] text-[24px] font-semibold mb-4">
                {plan.price} /
                <span className="md:text-[24px] text-base font-normal text-secondary-foreground">
                  month
                </span>
              </p>
              <Button className="md:h-20 h-15">Choose Plan</Button>
            </div>
          </motion.div>))}
      </div>
    </div>
  );
};

export default Pricing;
