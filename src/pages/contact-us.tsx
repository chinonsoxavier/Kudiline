import ContactUsForm from "@/components/contact-us/contact_us_form";
import GetInTouch from "@/components/contact-us/get_in_touch";
import HeroSection from "@/components/contact-us/hero_section";
import Faqs from "@/components/landing/faqs";
import Footer from "@/components/layouts/footer";

const ContactUs = () => {
  return (
    <div className="text-white bg-background">
          <section>
              <HeroSection/>
          </section>
          
          <section className="py-16" >
              <ContactUsForm/>
          </section>

          <section className="py-16" >
              <Faqs/>
          </section>

          <section className="py-16" >
              <GetInTouch/>
          </section>

          <section className="" >
              <Footer/>
          </section>
    </div>
  );
};

export default ContactUs;
