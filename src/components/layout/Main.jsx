import PresentationSection from "./presentationSection";
import SponsorsSection from "./sponsorsSection";

export default function Main() {
  return (
    <main className="w-full">
      <SponsorsSection />
      <PresentationSection />
    </main>
  );
}
