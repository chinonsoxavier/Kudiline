import appIcon from "../../assets/icons/application-icon.svg";
import characterVector from "../../assets/images/character-vector.png";
import characterVector2 from "../../assets/images/character-vector-key.png";
import callReports from "../../assets/images/screen-injection.png";
import callForwarding from "../../assets/images/icon-injection.png";
import aiCallAssist from "../../assets/images/AI-vector.png";
import trackerImage from "../../assets/images/tracker.png";
import { Button } from "../ui/button";
const Features = () => {
  return (
    <div className="center gap-4 flex-col max_width">
      <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
        <img src={appIcon} alt="features icon" />
        <p className="text-lg font-semibold">Features Breakdown?</p>
      </div>

      <p className="text-[45px] leading-[100%] tracking-tight font-bold">
        Everything You Need to Run Your Business Calls Like a Pro
      </p>
      <p className="text-xl text-[#C8C8C8] text-center max-w-5xl">
        KudiLine packs powerful tools into one simple platform, so you can
        handle calls, manage your team, and close sales — all without juggling
        multiple apps or devices.
      </p>

      <div className="grid grid-cols-3 w-full gap-5 flex-wrap">
        <div className="bg-foreground flex items-center justify-between flex-col border space-y-8 border-[#282828] px-5 pt-5 rounded row-span-2">
          <div className="space-y-3">
            <p className="font-semibold text-[36px] leading-full">
              Works Perfectly Online & Offline
            </p>
            <p className="text-2xl leading-full text-secondary-foreground">
              No physical SIM needed — you can receive calls in KudiCall.
            </p>
          </div>

          <div className="flex items-end h-ful">
            <img
              src={characterVector}
              alt="character vector"
              className="w-full max-w-[310px]"
            />
          </div>
        </div>
        <div className="bg-foreground border flex items-end justify-between border-[#282828] px-5 pt-5 rounded col-span-2">
          <div className="py-6 space-y-4">
            <p className="font-semibold text-[36px] leading-full">
              Shared Access
            </p>
            <p className="text-2xl leading-full text-secondary-foreground">
              Add team members to answer from one number.
            </p>
          </div>

          <img
            src={characterVector2}
            alt="shared access vector image"
            className="w-full max-w-[403px]"
          />
        </div>
        <div className="bg-foreground border border-[#282828] px-5 pt-5 rounded">
          <div className="py-6 space-y-4">
            <p className="font-semibold text-[36px] leading-full">
              Call Reports
            </p>
            <p className="text-2xl leading-full text-secondary-foreground">
              See who’s calling, when, and why.
            </p>
          </div>
          <img
            src={callReports}
            alt="call reports vector image"
            className="w-full max-w-[160px]"
          />
        </div>
        <div className="bg-foreground border border-[#282828] px-5 pt-5 rounded">
          <div className="w-full flex items-center justify-end">
            <img
              src={callForwarding}
              alt="call reports vector image"
              className="w-full max-w-[140px]"
            />
          </div>
          <div className="py-6 space-y-4">
            <p className="font-semibold text-[36px] leading-full">
              Call Forwarding
            </p>
            <p className="text-2xl leading-full text-secondary-foreground">
              Stay connected whether you are online or offline.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 row-span-3 col-span-3 gap-5 w-full">
          <div className="bg-foreground border flex items-end justify-between border-[#282828] px-5 pt-5 rounded col-span-">
            <div className="py-6 space-y-4">
              <p className="font-semibold text-[36px] leading-full">
                AI Call Assistant
              </p>
              <p className="text-2xl leading-full text-secondary-foreground">
                Let AI pitch, answer FAQs, and take orders (coming soon).
              </p>
            </div>

            <img
              src={aiCallAssist}
              alt="shared access vector image"
              className="w-full max-w-[325px]"
            />
          </div>
          <div className="bg-foreground flex border border-[#282828] px-5 pt-5 rounded w-full">
            <div className="py-6 space-y-4">
              <p className="font-semibold whitespace-nowrap text-[36px] leading-full">
                Order Tracking
              </p>
              <p className="text-2xl leading-full text-secondary-foreground">
                Sync your calls with deliveries (via KudiCall)
              </p>
            </div>
            <img
              src={trackerImage}
              alt="call reports vector image"
              className="w-full max-w-[163px]"
            />
          </div>
        </div>
      </div>
      <Button className="max-w-[525px] my-8">Get Premium Number</Button>
    </div>
  );
};

export default Features;
