import PresentationSection from "./presentationSection";
import SponsorsSection from "./sponsorsSection";
import Hero from "./Hero";
import PprincipaleProject from "./PprincipaleProject";
import MapsSection from "./MapsSection";
import DernierProjets from "./DernierProjets";

export default function Main() {
  return (
    <main className="w-full">
      <Hero />
      <PresentationSection />
      <PprincipaleProject />
      <MapsSection />
      <SponsorsSection />
      <DernierProjets/>
    </main>
  );
}
