import Button from "../smallComponents/Button";
import Tag from "../smallComponents/Tag";

export default function Nav() {
  return (
    <nav className="flex w-[60%] ">
      <ul className="flex justify-evenly items-center  w-[100%]">
        <li>
          <Tag content="Acceuil" route="/Fa3ilKhair" color={"text-[#4D4D4D]"} />
        </li>
        <li>
          <Tag content="Projets" route="/FailKhair/projets" color={"text-[#4D4D4D]"} />
        </li>
        <li>
          <Tag content="Galerie" route="/FailKhair/gelerie" color={"text-[#4D4D4D]"} />
        </li>
        <li>
          <Tag content="Contactez-nous" route="/FailKhair" color={"text-[#4D4D4D]"} />
        </li>
        <li>
          <Tag content="Qui sommes-nous?" route="/FailKhair" color={"text-[#4D4D4D]"} />
        </li>
        <li>
          <Button content="Faites un Don" color="bg-[#4caf4f]" />
        </li>
      </ul>
    </nav>
  );
}
