import GetKudiline from "@/components/how_it_works/get_kudiline";
import HeroSection from "@/components/how_it_works/hero_section";
import Steps from "@/components/how_it_works/steps";
import Footer from "@/components/layouts/footer";
import SideMenu from "@/components/layouts/sidemenu";

const HowItWorks = () => {
    return (
      <div className="text-white bg-background">
      <main className="max_width" >

        <section className="" >
          <SideMenu/>
          <HeroSection />
        </section>

        <section className="md:py-24 py-12">
          <Steps />
        </section>

        <section className="md:py-24  py-12">
          <GetKudiline />
        </section>

        <section className="">
          <Footer />
        </section>
        </main>
      </div>
    );
}

export default HowItWorks