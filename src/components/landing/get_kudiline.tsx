import backgroundImage from "../../assets/images/background.png";
import womanonCallImage from "@/assets/images/woman-on-call.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const GetKudiline = () => {

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
    <div className="max_width">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded md:pl-10 pl-6 pt-6 md:pt-10 flex flex-wrap items-center h-max bg-primary justify-between"
      >
        <div className="flex md:min-w-[450px] w-full flex-1 max-w-[720px] flex-col h-full gap-10">
          <motion.div
            variants={variant}
            initial="inactive"
            whileInView={"active"}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="md:text-[40px] text-xl font-bold leading-[100%]">
              Start Receiving Business Calls the Smart Way
            </p>
            <p className="md:text-[24px] text-sm text-secondary-foreground">
              Simplify your work and collaborate smarter with Kudiline. Get
              started today and see the difference.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row pr-6 md:pr-10 gap-5 items-center justify-center">
            <motion.div
              variants={variant}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
              className="w-full"
            >
              <Button className="bg-white hover:bg-emerald-100 text-foreground">
                Try KudiCall App
              </Button>
            </motion.div>

            <motion.div
              variants={variant}
              initial="inactive"
              whileInView={"active"}
              viewport={{ once: true }}
              className="w-full"
            >
              <Button className="bg-foreground hover:bg-background text-white">
                Get My Number Now
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="w-full  md:min-w-[250px] flex-1 items-center justify-end flex"
        >
          <img
            src={womanonCallImage}
            className="w-full min-w-xs max-w-[393px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GetKudiline;
