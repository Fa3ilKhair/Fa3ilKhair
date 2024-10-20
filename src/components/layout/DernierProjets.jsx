import { faGift, faHandshakeAngle, faOilWell } from "@fortawesome/free-solid-svg-icons";
import ActionCard from "../smallComponents/ActionCard";
import DernierProjectCard from "../smallComponents/DernierProjetCard";

export default function DernierProjets(){
    return(
        <section className="flex flex-col items-center py-12">
      <h1 className="text-[3rem] font-extrabold text-center leading-[3rem]">
        Nos derniers projets
      </h1>
      <p className="mt-5 w-2/4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit,
        diam vitae consequat porta, quam quam quam quam ante euismod tellus, vitae consequat metus ante vel nibh.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit,
        diam vitae consequat porta, quam quam quam quam ante euismod tellus, vitae consequat metus ante vel nibh.</p>
      <div className="flex justify-evenly mt-24 w-full phone:flex-col phone:items-center phone:gap-6">
        <DernierProjectCard text={"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise"} img={"/Fa3ilKhair/assets/media/dernierProjets.jpg"}/>
        <DernierProjectCard text={"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise"}  img={"/Fa3ilKhair/assets/media/dernierProjets2.jpg"}/>
        <DernierProjectCard text={"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise"}  img={"/Fa3ilKhair/assets/media/dernierProjets3.jpg"}/>
      </div>
    </section>
    )
}