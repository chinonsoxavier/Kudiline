import BackgroundImage from "@/assets/images/Background pattern.png";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import SideMenu from "@/components/layouts/sidemenu";

const PrivacyPolicy = () => {
  const terms = [
    {
      title: "Information We Collect",
      info: "When you use Kudiline, we may collect the following types of information:",
      details: [
        "Personal Information: such as your name, email address, phone number, and account details when you sign up.",
        "Usage Data: including your interactions with the app/website, device information, browser type, and IP address.",
        "Transaction Information: details related to purchases, subscriptions, or other financial activities.",
        "Cookies & Tracking Data: small files stored on your device to improve functionality and personalize your experience.",
      ],
    },
    {
      title: "How We Use Your Information",
      info: "We use the data we collect to:",
      details: [
        "Provide, maintain, and improve our services.",
        "Personalize your experience on Kudiline.",
        "Communicate with you about updates, offers, and customer support.",
        "Monitor usage, prevent fraud, and enhance security.",
        "Comply with legal requirements and enforce our Terms of Use.",
      ],
    },
    {
      title: "How We Share Your Information",
      info: "We respect your trust and do not sell your personal data. However, we may share information in the following cases:",
      details: [
        "With service providers: who help us operate the platform (e.g., payment processors, hosting services).",
        "For legal reasons: if required by law, court order, or government authority.",
        "In business transfers: if Kudiline is merged, acquired, or sold, your data may be part of the transferred assets.",
      ],
    },
    {
      title: "Cookies & Tracking Technologies",
      info: "We use cookies and similar technologies to:",
      details: [
        "Keep you logged in.",
        "Remember your preferences.",
        "Analyze site performance and improve services.",
        "You can adjust your browser settings to refuse cookies, but some features may not function properly without them.",
      ],
    },
    {
      title: "Data Security",
      info: "We implement industry-standard measures to protect your personal data. However, no system is completely secure, and we cannot guarantee absolute protection.",
    },
    {
      title: "Your Rights",
      info: "Depending on your location, you may have the right to:",
      details: [
        "Access the data we hold about you.",
        "Request corrections to inaccurate information.",
        "Request deletion of your personal data.",
        "Opt out of marketing communications.",
        "Withdraw consent where applicable.",
      ],
      footer: "To exercise these rights, contact us at info@kudiline.com",
    },
    {
      title: "Third-Party Links",
      info: "Kudiline may contain links to third-party websites. Please note we are not responsible for the privacy practices of those sites.",
    },
    {
      title: "Updates to This Privacy Policy",
      info: "We may update this Privacy Policy from time to time. When we do, we will notify you by updating the date at the top of this page and, where appropriate, provide additional notice.",
    },
    {
      title: "Contact Us",
      info: "If you have any questions about this Privacy Policy or how we handle your data, please contact us at:  support@kudiline.com",
    },
  ];

  return (
    <div className="text-[#FFFFFF] max_width bg-background">
      <section>
        <div
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Header />
          <SideMenu/>
          <div className="center py-16 gap-6 flex-col ">
            <p className="md:text-[45px] text-[26px] text leading-[100%] tracking-tight font-bold">
              Privacy
              <span className="pacifico font-normal text-primary"> Use </span>
              Policy
            </p>

            <p className="md:text-xl text-[#C8C8C8] text-center max-w-xl">
              our privacy matters to us. This Privacy Policy explains how
              Kudiline collects, uses, and protects your personal information.
              Our goal is to ensure transparency and give you control over your
              data.
            </p>

            <div className="space-y-6">
              <p className="font-medium text-base md:text-[26px]">
                At Kudiline, your privacy is our priority. This Privacy Policy
                explains how we collect, use, share, and protect the personal
                information you provide when using our platform. By accessing or
                using Kudiline, you agree to the terms described in this policy.
              </p>

              <p className="md:text-[26px] text-primary-foreground">
                Last revised: 2025-05-29
              </p>
              <div className="space-y-4">
                {terms.map((term, index) => (
                  <div key={index} className="">
                    <span className="md:text-[32px] text-xl mb-0 py-0 font-semibold">
                      {index + 1}. {term.title}
                    </span>
                    <p className="md:text-[26px] text-base mt-0 text-primary-foreground font-semibold">
                      {term?.info}
                    </p>
                    {term.details &&
                      term.details.map((details, index) => (
                        <div key={index} className="flex gap-1 items-start">
                          <div className="min-w-1.5 min-h-1.5 h-1.5 w-1.5 mt-2 rounded-full bg-white"></div>
                          <p className="md:text-[26px] text-base mt-0 text-primary-foreground font-semibold">
                            {details}
                          </p>
                        </div>
                      ))}

                    <p className="md:text-[26px] mt-0 text-primary-foreground font-semibold">
                      {term.footer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
