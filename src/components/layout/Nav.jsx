import Button from "../smallComponents/Button";
import Tag from "../smallComponents/Tag";

export default function Nav() {
  return (
    <nav className="flex">
      <ul className="flex items-center gap-10">
        <li>
          <Tag content="Acceuil" route="/Fa3ilKhair" color={"text-[#4D4D4D] decoration-[#4caf4f] decoration-4"} />
        </li>
        <li>
          <Tag content="Projets" route="/FailKhair/projets" color={"text-[#4D4D4D] decoration-[#4caf4f] decoration-4"} />
        </li>
        <li>
          <Tag content="Galerie" route="/FailKhair/gelerie" color={"text-[#4D4D4D] decoration-[#4caf4f] decoration-4"} />
        </li>
        <li>
          <Tag content="Contactez-nous" route="/FailKhair" color={"text-[#4D4D4D] decoration-[#4caf4f] decoration-4"} />
        </li>
        <li>
          <Tag content="Qui sommes-nous?" route="/FailKhair" color={"text-[#4D4D4D] decoration-[#4caf4f] decoration-4"} />
        </li>
        <li>
          <Button content="Faites un Don" color="bg-[#4caf4f]" arrow={true} />
        </li>
      </ul>
    </nav>
  );
}
