import backgroundImage from "../../assets/images/background.png";
import womanonCallImage from "@/assets/images/woman-on-call.png";
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
        className="rounded px-10 py5 flex items-center h-max bg-primary justify-between"
      >
        <div className="flex w-full max-w-[720px] flex-col h-full gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-[40px] font-bold leading-[100%]">
              Start Receiving Business Calls the Smart Way
            </p>
            <p className="text-[24px] text-secondary-foreground">
              Simplify your work and collaborate smarter with Kudiline. Get
              started today and see the difference.
            </p>
          </div>

          <div className="flex gap-5 items-center justify-center">
            <Button  className="bg-white hover:bg-emerald-100 text-foreground">
              Try KudiCall App
            </Button>
            <Button className="bg-foreground hover:bg-background text-white">
              Get My Number Now
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
