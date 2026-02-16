import type { Metadata } from "next";
import { Footer,  } from "@/components";
import { ContactSection } from "@/components/Contact";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Contacto - Industrias Jaber",
  description: "Ponte en contacto con nuestro equipo técnico de Industrias Jaber",
};

const ContactPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 relative">
        <div className="absolute top-0 right-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <span className="material-symbols-outlined text-[600px] leading-none">filter_vintage</span>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
