import landLineColored from "../../assets/icons/landline-colored-icon.svg";
import KudilineFrame1 from "@/assets/images/kudiline-frame-1.png";
import KudilineFrame2 from "@/assets/images/kudiline-frame-2.png";
import { Button } from "../ui/button";

const ChoosePremium = () => {
  return (
    <div className="center gap-2 flex-col max_width">
      <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 test py-1 px-4">
        <img src={landLineColored} alt="question icon" />
        <p className="text-lg font-semibold">Choose a Premium Number</p>
      </div>

      <p className="text-[45px] tracking-tight font-bold">
        Get a Memorable Number That Builds Trust
      </p>
      <p className="text-[22px] leadinh-[140%] text-[#C8C8C8] text-center max-w-5xl">
        Your business number should be as memorable as your brand. With
        KudiLine, you can secure an easy-to-remember premium number that
        customers won’t forget — whether it’s a catchy word, a number pattern,
        or both.
      </p>

      <div className="flex w-full gap-5 my-6 items-center flex-wrap justify-center">
        <img src={KudilineFrame1} alt="kudiline frame 1" className="flex-1 w-full" />
        <img src={KudilineFrame2} alt="kudiline frame 2" className="flex-1 w-full" />
          </div>
          
          <Button className="max-w-80" >Browse Premium Numbers</Button>
    </div>
  );
}

export default ChoosePremium