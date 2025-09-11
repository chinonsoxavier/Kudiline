import GetKudiline from "@/components/how_it_works/get_kudiline";
import HeroSection from "@/components/how_it_works/hero_section";
import Steps from "@/components/how_it_works/steps";
import Footer from "@/components/layouts/footer";

const HowItWorks = () => {
    return (
      <div className="text-white bg-background">
        <section>
          <HeroSection />
        </section>

        <section className="py-24">
          <Steps />
        </section>

        <section className="py-24">
          <GetKudiline />
        </section>

        <section className="">
          <Footer />
        </section>
      </div>
    );
}

export default HowItWorks