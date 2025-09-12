import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const ContactUsForm = () => {

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
    <div className="max_width space-y-5">
      <div className="grid grid-cols-1 xs:grid-cols-2  items-center justify-center flex-wrap gap-5 ">
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="relative"
        >
            <Label htmlFor="first-name">First Name</Label>
            <Input
              className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
              type="text"
              id="first-name"
              placeholder="Enter first name"
            />
        </motion.div>
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="relative"
        >
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="text"
            id="last-name"
            placeholder="Enter last name"
          />
        </motion.div>
        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="relative"
        >
          <Label htmlFor="email">Email Address</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="email"
            id="email"
            placeholder="Enter Email Address"
          />
        </motion.div>

        <motion.div
          variants={variant}
          initial="inactive"
          whileInView={"active"}
          viewport={{ once: true }}
          className="relative"
        >
          <Label htmlFor="subject">Subject</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="text"
            id="subject"
            placeholder="Enter email address"
          />
      </motion.div>
      </div>

      <motion.div
        variants={variant}
        initial="inactive"
        whileInView={"active"}
        viewport={{ once: true }}
      >
          <Label>Message</Label>
          <Textarea
            className="border mt-2 border-[#282828] bg-foreground"
            rows={10}
            placeholder="Type here..."
          />
      </motion.div>
      <Button>Send Message</Button>
    </div>
  );
};

export default ContactUsForm;
