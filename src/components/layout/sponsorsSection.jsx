import SponsorsLogoContainer from "./sponsorsLogoContainer";

export default function SponsorsSection() {
  return (
    <section className="w-full py-12 flex flex-col gap-12 items-center">
      <div>
        <h1 className="text-center text-[2.5rem] font-extrabold">Nos Sponsors</h1>
        <p className="text-center text-[1rem] font-italic">Rejoignez nos sponsors et aidez à changer des vies</p>
      </div>
      <SponsorsLogoContainer />
    </section>
  );
}
