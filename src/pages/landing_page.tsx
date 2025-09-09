import ChoosePremium from "@/components/landing/choose_premium";
import Features from "@/components/landing/featutes";
import HeroComponent from "@/components/landing/hero_component";
import HowItWorks from "@/components/landing/how_it_works";
import HowWeWork from "@/components/landing/how_we_work";
import WhyUseUs from "@/components/landing/why_use_us";

const LandingPage = () => {
  return (
    <div className="text-white bg-background">
      <section>
        <HeroComponent />
      </section>

      <section className="py-12">
        <WhyUseUs />
      </section>

      <section className="py-12">
        <ChoosePremium />
      </section>

      <section className="py-12">
        <HowWeWork />
      </section>

      <section className="py-12">
        <HowItWorks />
      </section>

      <section className="py-12">
        <HowItWorks />
      </section>

      <section className="py-12">
        <Features />
      </section>
    </div>
  );
};

export default LandingPage;
