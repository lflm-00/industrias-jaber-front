"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: "location_on",
      title: t("contact.info.location.title"),
      description: (
        <>
          {t("contact.info.location.address1")}<br />
          {t("contact.info.location.address2")}<br />
          {t("contact.info.location.address3")}
        </>
      ),
    },
    {
      icon: "call",
      title: t("contact.info.phone.title"),
      description: (
        <>
          {t("contact.info.phone.number")}<br />
          {t("contact.info.phone.hours")}
        </>
      ),
    },
    {
      icon: "mail",
      title: t("contact.info.email.title"),
      description: (
        <>
          {t("contact.info.email.primary")}<br />
          {t("contact.info.email.support")}
        </>
      ),
    },
  ];

  return (
    <section className="px-4 lg:px-40 py-16 lg:py-24 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full">
            {t("contact.hero.tag")}
          </span>
          <h1 className="text-[#181411] dark:text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.04em]">
            {t("contact.hero.title")}
          </h1>
          <p className="text-[#4a3f35] dark:text-[#cbbab0] text-lg max-w-2xl">
            {t("contact.hero.description")}
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
