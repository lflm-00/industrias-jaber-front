import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import Processes from "@/components/Home/Processes";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Processes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
