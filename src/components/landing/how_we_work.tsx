import bagIcon from "@/assets/icons/suitcase-icon.svg";
import girlImage from "@/assets/images/girl-holding.png";
import girlAndBoyImage from "@/assets/images/girl-and-boy.jpg";
import logo from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import caseStudyImage from "@/assets/images/case-study.png";
const HowWeWork = () => {
  return (
    <div className="center flex-col gap-4 max_width">
      <div className="center gap-2 rounded-full border-[0.5px] border-primary/5 test py-1 px-4">
        <img src={bagIcon} alt="question icon" />
        <p className="text-lg font-semibold">KudiLine Works the Way You Work</p>
      </div>
      <p className="text-[45px] leading-[100%] tracking-tight font-bold">
        Built for the African Way of Doing Business
      </p>
      <p className="text-[22px] leadinh-[140%] text-[#C8C8C8] text-center max-w-5xl">
        KudiLine is made for the realities of running a business in Africa —
        fast-moving, customer-focused, and always on the go. It’s your direct
        line to more sales, happier customers, and smoother operations.
      </p>

      <div className="py-5" >
        <div>
          <img src={girlImage} alt="image of a girl" className="" />
        </div>
        <div>
          <div className="flex items-stretch h-full py-6 gap-6">
            <div className="rounded-xl max-w-[450px]  py-8 px-5 bg-gradient-to-br to-primary flex items-center justify-between flex-col from-[#004840] relative">
              <div className="flex w-full items-center justify-end">
                <img
                  src={logo}
                  alt=""
                  className="w-full max-w-[27.1px] object-contain"
                />
              </div>

              <div className="">
                <p className="text-[47px] font-bold leading-[100%]">
                  Pan-Nigeria Coverage:
                </p>
                <p className="text-[40px] leading-[100%] font-medium">
                  Works with all major telcos.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5 justify-center">
              <div className="text-left flex-col gap-2 bg-foreground p-3 rounded-xl">
                <p className="text-xl font-semibold">Quick Setup:</p>
                <p className="text-lg text-primary-foreground leading-[100%]">
                  It is super-fast, you can get started in a matter minutes.
                </p>
              </div>

              <div className="rounded-xl h-full center bg-[#292929]">
                <img src={caseStudyImage} alt="case study image" />
              </div>
            </div>

            <div
              style={{
                              background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${girlAndBoyImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="rounded-xl max-w-[450px] py-8 px-5 flex items-center justify-between flex-col from-[#004840] relative"
            >
              <div className="flex w-full items-center justify-end">
                <img
                  src={logo2}
                  alt="logo 2"
                  className="w-full max-w-[27.1px] object-contain"
                />
              </div>
              <div className="">
                <p className="text-[47px] leading-[100%] font-bold">
                  For All Business Sizes
                </p>
                <p className="text-[40px] leading-[100%] font-medium">
                  — From solo vendors to teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
