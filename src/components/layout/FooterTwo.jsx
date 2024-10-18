import { useState } from "react";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopy, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Logo from "../smallComponents/Logo";
import Tag from "../smallComponents/Tag";
import Icon from "../smallComponents/Icon";
import Email from "../smallComponents/Email";
import SocialMediaIcon from "../smallComponents/SocialMediaIcon";

// Notification Component
const Notification = ({ message, show }) => {
  if (!show) return null;

  return <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-md z-50">{message}</div>;
};

// open google maps :
const openGoogleMaps = (latitude, longitude) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
  window.open(googleMapsUrl, "_blank");
};

// Footer Section
const FooterSection = ({ title, children }) => (
  <div className="text-start flex flex-col gap-5">
    <h1 className="font-extrabold text-[1.7rem]">{title}</h1>
    {children}
  </div>
);

// FooterLink Component
const FooterLink = ({ content, route, color }) => <Tag content={content} route={route} color={color} />;

// ContactItem Component with notification
const ContactItem = ({ label, icon, fn, message }) => {
  const [showNotification, setShowNotification] = useState(false);

  // Hide notification after 3 seconds
  const handleClick = () => {
    fn();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <li className="flex items-center justify-between">
      <span className="text-white font-semibold underline-offset-3 text-[1.1rem]">{label}</span>
      <a type="button" className="cursor-pointer text-[1.1rem]" aria-label={`Action for ${label}`} onClick={handleClick}>
        <Icon icon={icon} />
      </a>
      {/* Notification Component */}
      <Notification message={message} show={showNotification} />
    </li>
  );
};

// Main Footer Component
export default function FooterTwo() {
  return (
    <div className="bg-[#263238] text-white flex justify-between px-32 phone:px-12 py-12 w-full phone:flex-col-reverse phone:gap-12">
      {/* Left Section */}
      <div className="flex flex-col gap-6">
        <Logo taille="w-24" />
        <p className="text-start text-[1rem]">
          Copyright © 2024 Fail Khair.
          <br />
          All rights reserved.
        </p>
        <div className="flex gap-2">
          <SocialMediaIcon icon={faFacebookF} link={"https://www.facebook.com/Fa3ilkhirRabat"} />
          <SocialMediaIcon icon={faInstagram} link={"https://www.instagram.com/fa3ilkhirrabat/"} />
          <SocialMediaIcon icon={faLinkedinIn} link={"https://www.linkedin.com/in/fa3ilkhirrabat/"} />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex gap-12 phone:flex-col phone:items-start">
        <div className="flex flex-row-reverse justify-between gap-12 phone:w-full  phone:border-b phone:pb-10">
          {/* Information Links */}
          <FooterSection title="Information">
            <ul className="flex flex-col gap-3 ps-4">
              <FooterLink content="Acceuil" route="/Fa3ilKhair" color="text-white" />
              <FooterLink content="Projets" route="/Fa3ilKhair/projets" color="text-white" />
              <FooterLink content="Galerie" route="/Fa3ilKhair/galerie" color="text-white" />
              <FooterLink content="Qui sommes-nous ?" route="/Fa3ilKhair" color="text-white" />
              <FooterLink content="Faites un Don" route="/Fa3ilKhair" color="text-white" />
            </ul>
          </FooterSection>

          {/* Contact Links */}
          <FooterSection title="Contactez-nous">
            <ul className="flex flex-col gap-3 ps-4">
              <ContactItem label="E-mail" icon={faUpRightFromSquare} fn={() => (window.location.href = "mailto:failkhir.rabat@gmail.com")} />
              <ContactItem label="Téléphone" icon={faUpRightFromSquare} fn={() => (window.location.href = `tel:+212611562636`)} />
              <ContactItem label="Adresse" icon={faUpRightFromSquare} fn={() => openGoogleMaps(34.02672112637983, -6.842232721131984)} />
              <ContactItem
                label="RIB"
                icon={faCopy}
                fn={() => navigator.clipboard.writeText("350810000000000872218644")}
                message="RIB copié dans le presse-papiers !"
              />
              <ContactItem
                label="Code Swift"
                icon={faCopy}
                fn={() => navigator.clipboard.writeText("BIG ABBMMAMC")}
                message="Code Swift copié dans le presse-papiers !"
              />
            </ul>
          </FooterSection>
        </div>
        {/* Stay Updated */}
        <FooterSection title="Restez à jour">
          <Email />
        </FooterSection>
      </div>
    </div>
  );
}
