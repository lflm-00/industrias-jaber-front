import { Header, Footer } from "@/components";
import {
  AboutHero,
  AboutStorySection,
  AboutCorePrinciples,
  AboutLeadershipSection,
} from "@/components/About";


export default function AboutPage() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">
          <AboutHero />
          <AboutStorySection />
          <AboutCorePrinciples />
          <AboutLeadershipSection />
        </main>
        <Footer />
      </div>

    </>
  );
}
