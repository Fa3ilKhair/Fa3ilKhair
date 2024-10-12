import SocialMediaIcon from "../smallComponents/SocialMediaIcon";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo.jsx";

export default function FooterTwo() {
  return (
    <div className="h-96 bg-[#263238] text-white flex justify-between px-32 py-12">
      <div className="flex flex-col justify-between">
        <Logo taille={"w-24"}></Logo>
        <p className="text-start">
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
      <div className="flex gap-9">
        <div className="text-start">
          <h1 className="font-bold text-3xl">Information</h1>
          <ul>
            
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Contactez-nous</h1>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Restez à jour</h1>
        </div>
      </div>
    </div>
  );
}
