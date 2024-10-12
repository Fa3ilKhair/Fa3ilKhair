import SocialMediaIcon from "../smallComponents/SocialMediaIcon";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Logo from "../smallComponents/Logo";
import Tag from "../smallComponents/Tag";
import Icon from "../smallComponents/Icon";
import Email from "../smallComponents/Email";

export default function FooterTwo() {
  return (
    <div className="h-96 bg-[#263238] text-white flex justify-between px-32 py-12">
      <div className="flex flex-col justify-between">
        <Logo taille={"w-24"} />
        <p className="text-start text-xl">
          Copyright © 2024 Fail Khair.
          <br />
          All rights reserved
        </p>
        <div className="flex gap-2">
          <SocialMediaIcon icon={faFacebookF} />
          <SocialMediaIcon icon={faInstagram} />
          <SocialMediaIcon icon={faLinkedinIn} />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="text-start flex flex-col gap-5">
          <h1 className="font-extrabold text-4xl">Information</h1>
          <ul className="flex flex-col gap-3 ps-4">
            <Tag content="Acceuil" route={"/Fa3ilKhair"} color={"text-white"} />
            <Tag content={"Projects"} route={"/Fa3ilKhair/projects"} color={"text-white"} />
            <Tag content={"Galerie"} route={"/Fa3ilKhair/galerie"} color={"text-white"} />
            <Tag content={"Qui sommes-nous ?"} route={"/Fa3ilKhair"} color={"text-white"} />
            <Tag content={"Faites un Don"} route={"/Fa3ilKhair"} color={"text-white"} />
          </ul>
        </div>
        <div className="text-start flex flex-col gap-5">
          <h1 className="font-extrabold text-4xl">Contactez-nous</h1>
          <ul className="flex flex-col gap-3 ps-4">
            <li className="flex items-center justify-between">
              <span className="text-white font-semibold underline-offset-3">E-mail</span>
              <a type="button" className="cursor-pointer">
                <Icon icon={faUpRightFromSquare} />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-white font-semibold underline-offset-3">Téléphone</span>
              <a type="button" className="cursor-pointer">
                <Icon icon={faUpRightFromSquare} />
              </a>
            </li>{" "}
            <li className="flex items-center justify-between">
              <span className="text-white font-semibold underline-offset-3">Adresse</span>
              <a type="button" className="cursor-pointer">
                <Icon icon={faUpRightFromSquare} />
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-white font-semibold underline-offset-3">Copy RIB</span>
              <a type="button" className="cursor-pointer">
                <Icon icon={faCopy} />
              </a>
            </li>{" "}
            <li className="flex items-center justify-between">
              <span className="text-white font-semibold underline-offset-3">Copy code swift</span>
              <a type="button" className="cursor-pointer">
                <Icon icon={faCopy} />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-start flex flex-col gap-5">
          <h1 className="font-extrabold text-4xl">Restez à jour</h1>
          <Email />
        </div>
      </div>
    </div>
  );
}
