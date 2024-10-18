import { useState } from "react";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Button from "../smallComponents/Button";
import Icon from "../smallComponents/Icon";
import Tag from "../smallComponents/Tag";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center relative">
      {/* Hamburger Icon for Mobile */}
      <button
        type="button"
        className="hidden phone:inline"
        onClick={toggleMenu}
      >
        <Icon icon={faBarsStaggered} className="text-[#4D4D4D] hover:text-gray-400" size="3x" />
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu} // Close menu when overlay is clicked
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`w-full fixed top-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out phone:w-[40vw] phone:h-screen phone:overflow-y-auto z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } hidden phone:block`}
      >
        <ul className="flex flex-col items-center gap-10 p-12">
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
      </div>

      {/* Desktop Navigation */}
      <ul className="flex items-center gap-10 phone:hidden">
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
