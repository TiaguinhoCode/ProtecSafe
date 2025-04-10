// Componentes
import Contacts from "@/components/contacts";
import Services from "@/components/services";
import Benefits from "@/components/benefits";
import Faqs from "@/components/faqs";
import Plans from "@/components/plans";

export default function Home() {

  return (
    <main className="w-full">
      <Contacts />
      <Services />
      <Benefits />
      <Faqs />
      <Plans />
    </main >
  );
}
