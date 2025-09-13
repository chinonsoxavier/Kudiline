import Header from "@/components/layouts/header";
import priceTag from "@/assets/icons/price-icon.svg";
import { Button } from "@/components/ui/button";
import BackgroundImage from "@/assets/images/Background pattern.png";
import checkmark from "@/assets/icons/check-mark-icon.svg";
import backgroundImage from "@/assets/images/background.png";
import manOnPc from "@/assets/images/man-on-pc.png";
import Footer from "@/components/layouts/footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SideMenu from "@/components/layouts/sidemenu";

const Pricing = () => {
  const navigate = useNavigate();
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

  const variant = {
    inactive: {
      y: 50,
      opacity: 0,
    },
    active: {
      y: 0, // Fixed to match y property
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="text-white bg-background">
      <main className="max_width" >
        <SideMenu />
        <section
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Header />
          <div className="center gap-6 flex-col ">
            <motion.div
              variants={variant}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
            >
              <div className="center mt-10 gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
                <img src={priceTag} alt="how it works icon" />
                <p className="md:text-lg text-sm font-semibold">
                  Pricing Plans
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={variant}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="md:text-[45px] text-center text-[26px] text leading-[100%] tracking-tight font-bold">
                Simple, Flexible Pricing for Every
                <span className="pacifico font-regular text-primary">
                  {" "}
                  Team
                </span>
              </p>
              <p className="text-xl text-[#C8C8C8] text-center max-w-xl">
                Choose a plan that fits your workflow. No hidden fees, cancel
                anytime.
              </p>
            </motion.div>

            <motion.div
              variants={variant}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
              className="w-full center"
            >
              <Button
                onClick={() => navigate("/how-it-works")}
                className="max-w-[525px]"
              >
                Get Started
              </Button>
            </motion.div>

            <div className="flex text-[#0E0E0E] items-start w-full gap-8 flex-wrap justify-end"></div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex items-stretch w-full gap-3 flex-wrap justify-evenly">
            {plans.map((plan, index) => (
              <motion.div
                variants={variant}
                initial="inactive"
                whileInView={"active"}
                viewport={{ once: true }}
                key={index}
                className={`${
                  plan.name === "Team" ? "border-primary" : "border-transparent"
                } flex hover:border-primary border-5 duration-500 flex-col pb-8 items-start flex-1 justify-between w-full md:min-w-xs mi-h-[470px] min-w-[250px] md:p-6 p-4 m-2 bg-[#292929] rounded`}
              >
                <div>
                  <div className="flex items-center w-full justify-between">
                    <h3 className="md:text-3xl text-xl font-semibold mb-2">
                      {plan.name}
                    </h3>
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
                      <li
                        key={idx}
                        className="md:text-[22px] text-xs flex gap-2"
                      >
                        <img src={checkmark} alt="checkmark icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full">
                  <p className="md:text-[40px] text-[26px] font-semibold mb-4">
                    {plan.price} /
                    <span className="text-[24px] font-normal text-secondary-foreground">
                      month
                    </span>
                  </p>
                  <Button className="md:h-20 h-15">Choose Plann</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="">
            <div
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="rounded md:pl-10 pt-5 pl-6  flex flex-wrap flex-col md:flex-row items-center h-max bg-primary justify-between"
            >
              <div className="flex md:min-w-[450px] w-full flex-1 max-w-[720px] pr-5 flex-col h-full gap-4 md:pb-5 md:gap-10">
                <motion.div
                  variants={variant}
                  initial="inactive"
                  whileInView={"active"}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2"
                >
                  <p className="md:text-[40px] text-[20px] font-bold leading-[100%]">
                    Start your free trial today. No credit card required.
                  </p>
                  <p className="md:text-[24px] text-sm text-secondary-foreground">
                    Find the plan that grows with you. Whether you’re just
                    starting out or scaling fast, Kudiline gives you the
                    flexibility, tools, and support you need to succeed.
                  </p>
                </motion.div>

                <motion.div
                  variants={variant}
                  initial="inactive"
                  whileInView={"active"}
                  viewport={{ once: true }}
                  className="flex gap-5 items-start justify-start"
                >
                  <Button className="bg-white hover:bg-emerald-100 max-w-[209px] md:max-w-[350px] text-foreground">
                    Get Started For Free
                  </Button>
                </motion.div>
              </div>

              <motion.div
                variants={variant}
                initial="inactive"
                whileInView={"active"}
                viewport={{ once: true }}
                className="md:min-w-[250px] flex-1 flex justify-end items-end h-full w-full"
              >
                <img
                  src={manOnPc}
                  alt="get kudiline image"
                  className="w-full md:max-w-[503px] max-w-40 "
                />
              </motion.div>
            </div>
          </div>
        </section>

      </main>
        <section className="">
          <Footer />
        </section>
    </div>
  );
};

export default Pricing;
