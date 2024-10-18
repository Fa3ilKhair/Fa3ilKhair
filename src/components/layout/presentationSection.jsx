import Button from "../smallComponents/Button";

export default function PresentationSection() {
  return (
    <section className="p-24 bg-white flex justify-center w-full gap-24">
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-[70%] lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src="/Fa3ilKhair/assets/media/groupImage.jpeg"
            alt="Image representing our association's mission"
          />
        </div>

        <div className="bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:-top-8 md:mt-48 lg:w-3/5 lg:-left-72 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 phone:p-6 md:px-16 phone:px-3">
            <h2 className="uppercase text-green-800 font-bold text-4xl">Qui sommes-nous?</h2>
            <p className="mt-4 text-lg text-justify font-light">
              Chaque jour, notre pays fait un nouveau pas vers un avenir meilleur. Nous, association Mubadarat Fail Khir Rabat, affirmons que
              l’engagement associatif est une des clés de ce mouvement. Face aux différents défis, nous prenons depuis 2012, notre part à la
              construction d’un futur marocain plus solidaire. C’est l’ambition qui anime le cœur de notre association; le sens de la responsabilité
              envers nos concitoyens est une résolution de ceux qui ont fait le choix d’être volontaires au service de l’intérêt général.
            </p>
            <div className="mt-8">
              <Button content="En savoir plus" color="bg-[#4CAF4F]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
