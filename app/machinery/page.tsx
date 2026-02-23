import type { Metadata } from "next";
import { MachineryHero, MachineryContainer, MachineryCTA } from "@/components/Machinery";
import { Header } from "@/components/Header";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Machinery Catalog - Industrias Jaber",
  description:
    "Explore our range of high-performance industrial coffee processing equipment including roasters, grinders, dryers, and cleaning systems.",
};

export default function MachineryPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <MachineryHero />
        <MachineryContainer />
        <MachineryCTA />
      </main>
      <Footer />
    </div>
  );
}
