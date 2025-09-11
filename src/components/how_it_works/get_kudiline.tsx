import backgroundImage from "../../assets/images/background.png";
import womanonCallImage from "@/assets/images/man-on-call.png";
import { Button } from "../ui/button";
const GetKudiline = () => {
  return (
    <div className="max_width">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded px-10 py-5 flex items-center h-max bg-primary justify-between"
      >
        <div className="flex w-full max-w-[720px] flex-col h-full gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-[40px] font-bold leading-[100%]">
              Ready to Transform the Way You Handle Calls?
            </p>
            <p className="text-[24px] text-secondary-foreground">
              Whether you’re running a lean team or growing into a larger
              operation, our platform adapts to your needs. Take control of your
              calls, keep your workflow smooth, and focus on what matters
              most—growing your business.
            </p>
          </div>

          <div className="flex gap-5 items-start justify-start">
            <Button className="bg-white hover:bg-emerald-100 text-foreground">
              Get Started For Free
            </Button>
          </div>
        </div>

        <div className="">
          <img
            src={womanonCallImage}
            alt="get kudiline image"
            className="w-full max-w-[393px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetKudiline;
