import ChoosePremium from "@/components/landing/choose_premium";
import Faqs from "@/components/landing/faqs";
import Features from "@/components/landing/featutes";
import GetKudiline from "@/components/landing/get_kudiline";
import HeroComponent from "@/components/landing/hero_component";
import HowItWorks from "@/components/landing/how_it_works";
import HowWeWork from "@/components/landing/how_we_work";
import useLandingStore from "@/components/landing/landing_store";
import Pricing from "@/components/landing/pricing";
import WhyUseUs from "@/components/landing/why_use_us";
import Footer from "@/components/layouts/footer";
import SideMenu from "@/components/layouts/sidemenu";

const LandingPage = () => {
  
  const {sideMenuOpen} = useLandingStore();
  return (
    <div className={`text-white relative bg-background overflow-hidden ${sideMenuOpen ? 'h-dvh' : ''}`}>

    <SideMenu/>     

      <section>
        <HeroComponent />
      </section>

      <section className="py-24">
        <WhyUseUs />
      </section>

      <section className="py-14">
        <ChoosePremium />
      </section>

      <section className="py-14">
        <HowWeWork />
      </section>

      <section className="py-14">
        <HowItWorks />
      </section>

      <section className="py-14">
        <Features />
      </section>

      <section className="py-14">
        <Pricing />
      </section>

      <section className="py-14">
        <Faqs />
      </section>

      <section className="py-14">
        <GetKudiline />
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default LandingPage;
