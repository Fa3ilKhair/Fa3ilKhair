import { faGift, faHandshakeAngle, faOilWell } from "@fortawesome/free-solid-svg-icons";
import ActionCard from "../smallComponents/ActionCard";

export default function PprincipaleProject() {
  return (
    <section className="flex flex-col items-center py-12">
      <h1 className="text-[3rem] font-extrabold text-center leading-[3rem]">
        Découvrez nos trois action
        <br />
        pour changer des vies
      </h1>
      <p className="mt-5">Quelles sont nos trois actions principales ?</p>
      <div className="flex justify-evenly mt-24 w-full phone:flex-col phone:items-center phone:gap-12">
        <ActionCard
          title={"Projet de Forage de puits"}
          content={
            "Nous réalisons des forages pour offrir un accès à l'eau potable aux communautés défavorisées, améliorant ainsi leur vie quotidienne."
          }
          icon={faOilWell}
        />
        <ActionCard
          title={"Projets à Aid Adha"}
          content={
            "Nous soutenons les familles pour acheter des moutons et offrons des vêtements aux enfants, apportant joie et espoir durant Aid Adha."
          }
          icon={faGift}
        />
        <ActionCard
          title={"Tremblement d'Al Haouz"}
          content={
            "Nous mobilisons des ressources pour soutenir les victimes du tremblement de terre d'Al Haouz, leur apportant réconfort et assistance."
          }
          icon={faHandshakeAngle}
        />
      </div>
    </section>
  );
}
