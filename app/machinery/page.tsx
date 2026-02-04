import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MachineryHero from "@/components/Machinery/MachineryHero";
import CategoryFilter from "@/components/Machinery/CategoryFilter";
import MachineryGrid from "@/components/Machinery/MachineryGrid";
import MachineryCTA from "@/components/Machinery/MachineryCTA";

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
        <CategoryFilter />
        <MachineryGrid />
        <MachineryCTA />
      </main>
      <Footer />
    </div>
  );
}
