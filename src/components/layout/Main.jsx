import PresentationSection from "./presentationSection";
import SponsorsSection from "./sponsorsSection";
import Hero from "./Hero";
import PprincipaleProject from "./PprincipaleProject";
import MapsSection from "./MapsSection";

export default function Main() {
  return (
    <main className="w-full">
      <Hero />
      <PresentationSection />
      <PprincipaleProject />
      <MapsSection />
      <SponsorsSection />
    </main>
  );
}
