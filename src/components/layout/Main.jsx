import PresentationSection from "./presentationSection";
import SponsorsSection from "./sponsorsSection";
import Hero from "./Hero";

export default function Main() {
  return (
    <main className="w-full">
      <Hero />
      <SponsorsSection />
      <PresentationSection />
    </main>
  );
}
