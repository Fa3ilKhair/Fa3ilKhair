import Button from "../smallComponents/Button";
export default function PresentationSection() {
  return (
    <section className="p-24 bg-white flex justify-center w-full gap-24">
      <div className="h-96">
        <img className="h-full" src="/Fa3ilKhair/assets/quiSommesNous.jpg" alt="assosiation.png" />
      </div>
      <div className="flex flex-col justify-evenly items-start w-1/2">
        <h1 className="font-bold text-4xl">Qui sommes-nous?</h1>
        <p className="text-xl text-justify">
          Chaque jour, notre pays fait un nouveau pas vers un avenir meilleur. Nous, association Mubadarat Fail Khir
          Rabat, affirmons que l’engagement associatif est une des clés de ce mouvement. Face aux différents défis, nous
          prenons depuis 2012, notre part à la construction d’un futur marocain plus solidaire. C’est l’ambition qui
          anime le cœur de notre association, le sens de la responsabilité envers nos concitoyens est une résolution de
          ceux qui ont fait le choix d’être volontaires au service de l’intérêt général.
        </p>
        <Button content="En savoir plus" color="bg-[#4CAF4F] " />
      </div>
    </section>
  );
}
