import backgroundImage from "../../assets/images/background.png";
import womanonCallImage from "@/assets/images/man-on-call.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const GetKudiline = () => {
    // const navigate = useNavigate();
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
            Ready to Transform the Way You Handle Calls?
          </p>
          <p className="md:text-[24px] text-sm text-secondary-foreground">
            Whether you’re running a lean team or growing into a larger
            operation, our platform adapts to your needs. Take control of your
            calls, keep your workflow smooth, and focus on what matters
            most—growing your business.
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
          src={womanonCallImage}
          alt="get kudiline image"
          className="w-full md:max-w-[503px] max-w-40 "
        />
      </motion.div>
    </div>
  );
};

export default GetKudiline;
