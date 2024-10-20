import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import the hook for translations
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Button from "../smallComponents/Button";
import Icon from "../smallComponents/Icon";
import Tag from "../smallComponents/Tag";

export default function Nav() {
  const { t, i18n } = useTranslation(); // Use t for translations and i18n for language switch
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(t("Accueil")); // Use translation for active page

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (page, e) => {
    if (page === t("Contactez-nous")) {
      e.preventDefault();
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" }); // scroll to footer
      }
    } else if (page === t("Qui sommes-nous?")) {
      const quiSommesNous = document.getElementById("quiSommesNous");
      if (quiSommesNous) {
        quiSommesNous.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setActivePage(page);
      toggleMenu(); // Close menu
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language when user selects it
  };

  return (
    <nav className="flex items-center relative">
      {/* Hamburger Icon for Mobile */}
      <button type="button" className="hidden phone:inline" onClick={toggleMenu}>
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
        className={`w-full fixed top-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out phone:w-[50vw] phone:h-screen phone:overflow-y-auto z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } hidden phone:block`}
      >
        <ul className="flex flex-col items-start gap-10 p-12">
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage("fr")} className="px-2 py-1 border rounded hover:bg-gray-200">
              FR
            </button>
            <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded hover:bg-gray-200">
              AR
            </button>
          </div>
          <li>
            <Tag
              content={t("Accueil")}
              route="/Fa3ilKhair"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Accueil") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("Accueil"), e)} // Pass the event to the handler
            />
          </li>
          <li>
            <Tag
              content={t("Projets")}
              route="/Fa3ilKhair/projets"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Projets") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("Projets"), e)} // Pass the event to the handler
            />
          </li>
          <li>
            <Tag
              content={t("Galerie")}
              route="/Fa3ilKhair/galerie"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Galerie") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("Galerie"), e)} // Pass the event to the handler
            />
          </li>
          <li>
            <Tag
              content={t("Contactez-nous")}
              route="/Fa3ilKhair" // Keep this for routing purposes
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Contactez-nous") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("Contactez-nous"), e)} // Pass the event to the handler
            />
          </li>
          <li>
            <Tag
              content={t("Qui sommes-nous?")}
              route="/Fa3ilKhair"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Qui sommes-nous?") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("Qui sommes-nous?"), e)} // Pass the event to the handler
            />
          </li>
          <li>
            <Button content={t("Faites un Don")} color="bg-[#4caf4f]" arrow={true} />
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <ul className="flex items-center gap-10 phone:hidden">
        <li>
          <Tag
            content={t("Accueil")}
            route="/Fa3ilKhair"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Accueil") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("Accueil"), e)} // Pass the event to the handler
          />
        </li>
        <li>
          <Tag
            content={t("Projets")}
            route="/Fa3ilKhair/projets"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Projets") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("Projets"), e)} // Pass the event to the handler
          />
        </li>
        <li>
          <Tag
            content={t("Galerie")}
            route="/Fa3ilKhair/galerie"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Galerie") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("Galerie"), e)} // Pass the event to the handler
          />
        </li>
        <li>
          <Tag
            content={t("Contactez-nous")}
            route="/Fa3ilKhair" // Keep this for routing purposes
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Contactez-nous") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("Contactez-nous"), e)} // Pass the event to the handler
          />
        </li>
        <li>
          <Tag
            content={t("Qui sommes-nous?")}
            route="/Fa3ilKhair"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("Qui sommes-nous?") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("Qui sommes-nous?"), e)} // Pass the event to the handler
          />
        </li>
        <li>
          <Button content={t("Faites un Don")} color="bg-[#4caf4f]" arrow={true} />
        </li>
        {/* Language Switcher */}
        <div className="flex space-x-2">
          <button onClick={() => changeLanguage("fr")} className="px-2 py-1 border rounded hover:bg-gray-200">
            FR
          </button>
          <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded hover:bg-gray-200">
            AR
          </button>
        </div>
      </ul>
    </nav>
  );
}
