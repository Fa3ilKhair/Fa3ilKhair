import SocialMediaIcon from "../smallComponents/SocialMediaIcon";
import { faLinkedinIn, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function FooterTwo() {
  return (
    <div className="h-96 bg-[#263238] text-white">
      <div>
        <h1 className="text-4xl">LOGO</h1>
        <p className="text-start">
          Copyright © 2024 Fail Khair.
          <br />
          All rights reserved
        </p>
        <div>
          <SocialMediaIcon icon={faLinkedinIn} />
          <SocialMediaIcon icon={faFacebook} />
          <SocialMediaIcon icon={faInstagram} />
          <SocialMediaIcon icon={faLink} />
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-bold text-3xl">Information</h1>
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
