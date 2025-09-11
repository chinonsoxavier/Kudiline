import personTalking from "@/assets/icons/person-talking-icon.svg";
import telephoneIcon from "@/assets/icons/telephone-icon.svg";
import mailIcon from "@/assets/icons/mail-icon.svg";

const GetInTouch = () => {
  return (
    <div className="center gap-4 flex-col max_width">
      <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
        <img src={personTalking} alt="how it works icon" />
        <p className="text-lg font-semibold">Let’s Talk</p>
      </div>

      <p className="text-[45px] leading-[100%] tracking-tight font-bold">
        Get In Touch With Us Directly
      </p>
      <p className="text-xl text-[#C8C8C8] text-center max-w-5xl">
        Still have questions and can’t find the answer you’re looking for?
        Please reach out to our friendly team
      </p>

      <div className="flex items-center mt-8 w-full gap-8 flex-wrap ">
        <div className="gap-8 p-10 bg-[#292929] rounded flex items-start justify-between flex-col flex-1">
          <div className="center rounded-full bg-background w-17.5 h-17.5">
            <img
              src={telephoneIcon}
              alt="telephone icon"
              className="w-full max-w-7.5"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-[32px]">Call Us</p>
            <p className="text-2xl">Mon - Fri from 8am to 5pm</p>
          </div>
          <p className="font-semibold text-[32px]">+2348187165960</p>
        </div>

        <div className="gap-8 p-10 bg-[#292929] rounded flex items-start justify-between flex-col flex-1">
          <div className="center rounded-full bg-background w-17.5 h-17.5">
            <img
              src={mailIcon}
              alt="telephone icon"
              className="w-full max-w-7.5"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-[32px]">Send Email</p>
            <p className="text-2xl">We are always available for you</p>
          </div>
          <p className="font-semibold text-[32px]">support@kudiline.com</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
