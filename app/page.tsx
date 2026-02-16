import { Header, Hero, Processes, CTA, Footer } from "@/components";
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
