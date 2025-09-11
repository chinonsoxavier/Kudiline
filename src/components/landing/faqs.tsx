import faqIcon from "@/assets/icons/thinking-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faqs = () => {
  const faqs = [
    {
      label: "What is Kudiline and how does it work?",
      content:
        "Kudiline is a platform that helps you streamline your workflow by providing powerful tools for collaboration, communication, and productivity. Simply sign up, choose a plan, and start managing your projects in one place.",
    },
    {
      label: "Who can use Kudiline?",
      content:
        "Kudiline is built for individuals, teams, and businesses of all sizes. Whether you’re a freelancer, a small startup, or a large organization, you can tailor Kudiline to fit your workflow.",
    },
    {
      label: "Do I need technical skills to use Kudiline?",
      content:
        "Not at all. Kudiline is designed with a simple and intuitive interface so anyone can get started without needing prior technical experience.",
    },
    {
      label: "Do I need a SIM card?",
      content: "No. Your KudiLine works fully online.",
    },
    {
      label: "Is my data safe with Kudiline?",
      content:
        "Absolutely. We use industry-standard encryption and security practices to ensure your data is always protected.",
    },
    {
      label: "Can I use my own number?",
      content: "",
    },
    {
      label: "What happens if I miss a call?",
      content: "",
    },
    {
      label: "Is it available in my area?",
      content: "",
    },
  ];
  return (
    <div className="center gap-4 flex-col max_width">
      <div className="center gap-1 rounded-full border-[0.5px] border-primary/5 glow-shadow py-1 px-4">
        <img src={faqIcon} alt="faq icon" />
        <p className="text-lg font-semibold">FAQ</p>
      </div>

      <p className="text-[45px] leading-[100%] tracking-tight font-bold">
        Got questions? We’ve got answers.
      </p>
      <p className="text-xl text-[#C8C8C8] text-center max-w-5xl">
        Here are some of the most common things people ask about Kudiline. If
        you don’t see your question here, feel free to reach out to our support
        team.
      </p>

      <div className="flex items-stretch w-full mt-5 gap-3 flex-wrap justify-evenly">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="multiple" className="w-full">
            <AccordionItem
              value={`item-${index}`}
              className="w-full border-[#909090]"
            >
              <AccordionTrigger className="py-4 text-[28px] font-bold text-left w-full flex justify-between items-center">
                {faq.label}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-[22px] font-semibold text-secondary-foreground">
                {faq.content || "Answer coming soon..."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
