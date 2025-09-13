import BackgroundImage from "@/assets/images/Background pattern.png";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import SideMenu from "@/components/layouts/sidemenu";

const TermsOfUse = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      details: [
        "By accessing or using Kudiline, you agree to these Terms and any future updates. If you do not agree, you may not use our services.",
      ],
    },
    {
      title: "Eligibility",
      details: [
        "You must be at least 18 years old to use Kudiline. By using our platform, you confirm you meet this requirement.",
      ],
    },
    {
      title: "User Accounts",
      details: [
        "You are responsible for maintaining the confidentiality of your login details.",
        "You agree to provide accurate, complete, and updated information.",
        "You are responsible for all activities under your account.",
      ],
    },
    {
      title: "Use of Services",
      details: [
        "You may only use Kudiline for lawful purposes.",
        "You agree not to misuse, interfere, or attempt to hack our platform.",
        "We reserve the right to suspend accounts that violate these rules.",
      ],
    },
    {
      title: "Payments & Subscriptions",
      details: [
        "All payments must be made through our authorized payment channels.",
        "Subscription fees are non-refundable except as required by law.",
        "Failure to pay may result in suspension of service.",
      ],
    },
    {
      title: "Intellectual Property",
      details: [
        "All content, trademarks, designs, and features on Kudiline belong to us or our partners. You may not copy, distribute, or modify them without permission.",
      ],
    },
    {
      title: "Privacy Policy",
      details: [
        "Your use of Kudiline is also governed by our Privacy Policy. Please review it to understand how we handle your information.",
      ],
    },
    {
      title: "Termination",
      details: [
        "We reserve the right to suspend or terminate your access to Kudiline at our discretion if you violate these Terms.",
      ],
    },
    {
      title: "Limitation of Liability",
      details: [
        "Kudiline is provided 'as is.' We are not responsible for any indirect damages, losses, or errors arising from your use of the platform.",
      ],
    },
    {
      title: "Changes to Terms",
      details: [
        "We may update these Terms at any time. Continued use after changes means you accept the revised Terms.",
      ],
    },
    {
      title: "Contact Us",
      details: [
        "For questions or concerns about these Terms, reach us at: support@kudiline.com",
      ],
    },
  ];

  return (
    <div className="text-[#FFFFFF] max_width bg-background relative">
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
          <div className="center py-16 gap-6 flex-col max_width">
            <p className="md:text-[45px] text-[26px] text leading-[100%] tracking-tight font-bold">
              Terms of
              <span className="pacifico font-normal text-primary"> Use </span>
              Works
            </p>

            <p className="md:text-xl text-[#C8C8C8] text-center max-w-xl">
              Welcome to Kudiline. By accessing or using our platform, you agree
              to comply with and be bound by these Terms of Use. Please read
              them carefully before using our services.
            </p>

            <div className="space-y-6">
              <p className="font-medium text-base md:text-[26px]">
                These Terms of Use outline the rules and guidelines for using
                Kudiline’s services. By accessing or using our platform, you
                agree to comply with these terms, ensuring a safe, fair, and
                transparent experience for all users.
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

                    {term.details.map((details, index) => (
                      <div key={index} className="flex gap-1 items-start">
                        <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 mt-2 rounded-full bg-white"></div>
                        <p className="md:text-[26px] text-base mt-0 text-primary-foreground font-semibold">
                          {details}
                        </p>
                      </div>
                    ))}
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

export default TermsOfUse;
