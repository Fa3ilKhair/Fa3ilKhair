import { useState } from "react";
import { useTranslation } from "react-i18next";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Button from "../smallComponents/Button";
import Icon from "../smallComponents/Icon";
import Tag from "../smallComponents/Tag";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(t("home"));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (page, e) => {
    if (page === t("contact")) {
      e.preventDefault();
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === t("about")) {
      const quiSommesNous = document.getElementById("quiSommesNous");
      if (quiSommesNous) {
        quiSommesNous.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page === t("home")) {
    } else {
      setActivePage(page);
      toggleMenu();
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex items-center relative">
      <button type="button" className="hidden phone:inline" onClick={toggleMenu}>
        <Icon icon={faBarsStaggered} className="text-[#4D4D4D] hover:text-gray-400" size="3x" />
      </button>

      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu} />}

      <div
        className={`w-full fixed top-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out phone:w-[50vw] phone:h-screen phone:overflow-y-auto z-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } hidden phone:block`}
      >
        <ul className="flex flex-col items-start gap-10 p-12">
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage("fr")} className="px-2 py-1 border rounded hover:bg-gray-200">
              FR
            </button>
            <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded hover:bg-gray-200">
              عربية
            </button>
          </div>
          <li>
            <Tag
              content={t("home")}
              route="/Fa3ilKhair"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("home") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("home"), e)}
            />
          </li>
          <li>
            <Tag
              content={t("projects")}
              route="/Fa3ilKhair/projets"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("projects") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("projects"), e)}
            />
          </li>
          <li>
            <Tag
              content={t("gallery")}
              route="/Fa3ilKhair/galerie"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("gallery") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("gallery"), e)}
            />
          </li>
          <li>
            <Tag
              content={t("contact")}
              route="/Fa3ilKhair"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("contact") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("contact"), e)}
            />
          </li>
          <li>
            <Tag
              content={t("about")}
              route="/Fa3ilKhair"
              color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("about") ? "border-b-2 border-[#4caf4f]" : ""}`}
              onClick={(e) => handlePageClick(t("about"), e)}
            />
          </li>
          <li>
            <Button content={t("donate")} color="bg-[#4caf4f]" arrow={true} />
          </li>
        </ul>
      </div>
      {/* desktop version */}
      <ul className="flex items-center gap-10 phone:hidden">
        <li>
          <Tag
            content={t("home")}
            route="/Fa3ilKhair"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("home") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("home"), e)}
          />
        </li>
        <li>
          <Tag
            content={t("projects")}
            route="/Fa3ilKhair/projets"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("projects") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("projects"), e)}
          />
        </li>
        <li>
          <Tag
            content={t("gallery")}
            route="/Fa3ilKhair/galerie"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("gallery") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("gallery"), e)}
          />
        </li>
        <li>
          <Tag
            content={t("contact")}
            route="/Fa3ilKhair"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("contact") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("contact"), e)}
          />
        </li>
        <li>
          <Tag
            content={t("about")}
            route="/Fa3ilKhair"
            color={`text-[#4D4D4D] decoration-[#4caf4f] decoration-4 ${activePage === t("about") ? "border-b-2 border-[#4caf4f]" : ""}`}
            onClick={(e) => handlePageClick(t("about"), e)}
          />
        </li>
        <li>
          <Button content={t("donate")} color="bg-[#4caf4f]" arrow={true} />
        </li>
        <div className="flex space-x-2">
          <button onClick={() => changeLanguage("fr")} className="px-2 py-1 border rounded hover:bg-gray-200">
            FR
          </button>
          <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded hover:bg-gray-200">
            عربية
          </button>
        </div>
      </ul>
    </nav>
  );
}
