// External Imports
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Internal Components
import Logo from "../smallComponents/Logo";
import Tag from "../smallComponents/Tag";
import Icon from "../smallComponents/Icon";
import Email from "../smallComponents/Email";
import SocialMediaIcon from "../smallComponents/SocialMediaIcon";

// Reusable Component for Footer Sections
const FooterSection = ({ title, children }) => (
  <div className="text-start flex flex-col gap-5">
    <h1 className="font-extrabold text-[1.7rem]">{title}</h1>
    {children}
  </div>
);

// Reusable Component for Footer Links
const FooterLink = ({ content, route, color }) => <Tag content={content} route={route} color={color} />;

// Reusable Component for Contact Items
const ContactItem = ({ label, icon }) => (
  <li className="flex items-center justify-between">
    <span className="text-white font-semibold underline-offset-3 text-[1.1rem]">{label}</span>
    <a type="button" className="cursor-pointer text-[1.1rem]" aria-label={`Action for ${label}`}>
      <Icon icon={icon} />
    </a>
  </li>
);

// Main Footer Component
export default function FooterTwo() {
  return (
    <div className="h-96 bg-[#263238] text-white flex justify-between px-32 py-12 w-full">
      {/* Left Section */}
      <div className="flex flex-col justify-between">
        <Logo taille="w-24" />
        <p className="text-start text-[1rem]">
          Copyright © 2024 Fail Khair.
          <br />
          All rights reserved.
        </p>
        <div className="flex gap-2">
          <SocialMediaIcon icon={faFacebookF} />
          <SocialMediaIcon icon={faInstagram} />
          <SocialMediaIcon icon={faLinkedinIn} />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex gap-12">
        {/* Information Links */}
        <FooterSection title="Information">
          <ul className="flex flex-col gap-3 ps-4">
            <FooterLink content="Acceuil" route="/Fa3ilKhair" color="text-white" />
            <FooterLink content="Projects" route="/Fa3ilKhair/projects" color="text-white" />
            <FooterLink content="Galerie" route="/Fa3ilKhair/galerie" color="text-white" />
            <FooterLink content="Qui sommes-nous ?" route="/Fa3ilKhair" color="text-white" />
            <FooterLink content="Faites un Don" route="/Fa3ilKhair" color="text-white" />
          </ul>
        </FooterSection>

        {/* Contact Links */}
        <FooterSection title="Contactez-nous">
          <ul className="flex flex-col gap-3 ps-4">
            <ContactItem label="E-mail" icon={faUpRightFromSquare} />
            <ContactItem label="Téléphone" icon={faUpRightFromSquare} />
            <ContactItem label="Adresse" icon={faUpRightFromSquare} />
            <ContactItem label="Copy RIB" icon={faCopy} />
            <ContactItem label="Copy code swift" icon={faCopy} />
          </ul>
        </FooterSection>

        {/* Stay Updated */}
        <FooterSection title="Restez à jour">
          <Email />
        </FooterSection>
      </div>
    </div>
  );
}
