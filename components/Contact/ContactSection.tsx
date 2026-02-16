import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const contactInfo = [
  {
    icon: "location_on",
    title: "Physical Headquarters",
    description: (
      <>
        123 Coffee Way, Industrial District<br />
        Machinery Plaza, Suite 400<br />
        Bogotá, Colombia 110111
      </>
    ),
  },
  {
    icon: "call",
    title: "Direct Line",
    description: (
      <>
        +57 (1) 555-0123<br />
        Mon - Fri, 8am to 6pm COT
      </>
    ),
  },
  {
    icon: "mail",
    title: "Official Email",
    description: (
      <>
        contact@industriasjaber.com<br />
        support@industriasjaber.com
      </>
    ),
  },
];

const ContactSection = () => {
  return (
    <section className="px-4 lg:px-40 py-16 lg:py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-[#181411] dark:text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.04em]">
            Contact Our Technical Experts
          </h1>
          <p className="text-[#4a3f35] dark:text-[#cbbab0] text-lg max-w-2xl">
            Whether you are looking to start a new roasting facility or upgrade your industrial grinding equipment, our team is here to provide professional guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            {contactInfo.map((item, idx) => (
              <ContactInfoCard key={idx} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-10">
            {/* <ContactMap /> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
