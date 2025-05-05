// Componentes
import Contacts from "@/components/contacts";
import Faqs from "@/components/faqs";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/howItWorks";
import Testimonials from "@/components/testimonials";

export default function Home() {

  return (
    <main className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <Contacts />
    </main >
  );
}
