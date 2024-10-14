import Button from "../smallComponents/Button";
export default function PresentationSection() {
  return (
    <section className="p-24 bg-white flex justify-center w-full gap-24">
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <img class="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Qui sommes-nous ?" />
        </div>

        <div class="max-w-2xl bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:-top-8 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div class="flex flex-col p-12 md:px-16">
            <h2 class="uppercase text-green-800 font-bold text-[2.5rem]">Qui sommes-nous?</h2>
            <p class="mt-4 text-[1.1rem] text-justify font-light font-italic">
              Chaque jour, notre pays fait un nouveau pas vers un avenir meilleur. Nous, association Mubadarat Fail Khir
              Rabat, affirmons que l’engagement associatif est une des clés de ce mouvement. Face aux différents défis,
              nousprenons depuis 2012, notre part à la construction d’un futur marocain plus solidaire. C’est l’ambition
              quianime le cœur de notre association, le sens de la responsabilité envers nos concitoyens est une
              résolution deceux qui ont fait le choix d’être volontaires au service de l’intérêt général.
            </p>
            <div class="mt-8">
              <Button content="En savoir plus" color="bg-[#4CAF4F] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
