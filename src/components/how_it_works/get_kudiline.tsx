import backgroundImage from "../../assets/images/background.png";
import womanonCallImage from "@/assets/images/man-on-call.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const GetKudiline = () => {
    // const navigate = useNavigate();
    const variant = {
      inactive: {
        y: -50,
        opacity: 0,
      },
      active: {
        y: 0, // Fixed to match y property
        opacity: 1,
        transition: { duration: 1.5 },
      },
    };

  return (
    <div className="max_width">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded lx-10 pt-5 flex-wrap flex items-center h-max bg-primary justify-between"
      >
        <div className="flex md:min-w-[450px] w-full flex-1 max-w-[720px] flex-col h-full gap-10">
          <motion.div
            variants={variant}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex p-4 flex-col gap-6 md:gap-10"
          >
            <p className="text-[40px] font-bold leading-[100%]">
              Ready to Transform the Way You Handle Calls?
            </p>
            <p className="text-[24px] text-secondary-foreground">
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
          className="w-full  md:min-w-[250px] flex-1 items-center justify-end flex"
        >

          <div className="flex gap-5 px-4 w-full items-start justify-start">
            <Button className="bg-white hover:bg-emerald-100 text-foreground">
              Get Started For Free
            </Button>
          </div>
        </motion.div>
        </div>

   <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="w-full flex pt-5 items-end justify-end"
        >

          <img
            src={womanonCallImage}
            alt="get kudiline image"
            className="w-full max-w-[393px]"
            />
            </motion.div>
      </div>
    </div>
  );
};

export default GetKudiline;
