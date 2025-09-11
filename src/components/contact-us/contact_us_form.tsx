import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
const ContactUsForm = () => {
  return (
    <div className="max_width space-y-5">
      <div className="grid grid-cols-2 items-center justify-center flex-wrap gap-5 ">
        <div className="relative">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="text"
            id="first-name"
            placeholder="Enter first name"
          />
        </div>
        <div className="relative">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="text"
            id="last-name"
            placeholder="Enter last name"
          />
        </div>
        <div className="relative">
          <Label htmlFor="email">Email Address</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="email"
            id="email"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="relative">
          <Label htmlFor="subject">Subject</Label>
          <Input
            className="mt-2 border-[#282828] rounded-xl flex items-start justify-start pb-22 border pt-8 bg-foreground"
            type="text"
            id="subject"
            placeholder="Enter email address"
          />
        </div>
      </div>
      <div>
        <Label>Message</Label>
        <Textarea
                  className="border mt-2 border-[#282828] bg-foreground"
                  rows={10}
          placeholder="Type here..."
        />
          </div>
          <Button>Send Message</Button>
    </div>
  );
};

export default ContactUsForm;
