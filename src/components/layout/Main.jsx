import PresentationSection from "./presentationSection";
import SponsorsSection from "./sponsorsSection";
import Hero from "./Hero";
import PprincipaleProject from "./PprincipaleProject";

export default function Main() {
  return (
    <main className="w-full">
      <Hero />
      <SponsorsSection />
      <PprincipaleProject />
      <PresentationSection />
    </main>
  );
}
