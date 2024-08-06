import FaqIndex from "@/components/faq";
import HeroIndex from "@/components/hero";
import Sponsors from "@/components/hero/sponsors";
import CountriesSupport from "@/components/Info/countriesSupport";
import InfoSection from "@/components/Info/info";
import Solutions from "@/components/Info/solutions";
import UseCases from "@/components/Info/useCases";
import NavIndex from "@/components/nav";
import Support from "@/components/support";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sora">
      <HeroIndex />
      <Sponsors />
      <InfoSection />
      <UseCases />
      <Solutions />
      <CountriesSupport />
      <Support />
      <FaqIndex />
    </main>
  );
}
