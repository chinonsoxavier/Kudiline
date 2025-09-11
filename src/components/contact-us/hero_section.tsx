import BackgroundImage from "@/assets/images/Background pattern.png";
import landLine from "@/assets/icons/landline-colored-icon.svg";
import Header from "../layouts/header";
const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <div className="center gap-6 flex-col max_width">
        <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
          <img src={landLine} alt="how it works icon" />
          <p className="text-lg font-semibold">Contact Us</p>
        </div>

        <p className="text-[45px] leading-[100%] tracking-tight font-bold">
          We’d Love to{" "}
          <span className="pacifico font-normal text-primary">Hear</span> From
          You
        </p>
        <p className="text-xl text-[#C8C8C8] text-center max-w-xl">
          Have questions, feedback, or partnership ideas? Our team is here to
          help. Reach out to us through the form below.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
