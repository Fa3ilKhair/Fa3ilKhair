import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback } from "react";

// Définir les emplacements marocains avec titre, description et images
const locations = [
  {
    lat: 33.5731,
    lng: -7.5898,
    title: "Casablanca",
    description:
      "À Casablanca, Fa3il Khair a organisé des ateliers éducatifs qui ont bénéficié à plus de 150 jeunes. Ces ateliers incluaient la formation aux compétences, le tutorat et des programmes de mentorat, aidant les participants à acquérir des connaissances précieuses pour leurs futures carrières. L'initiative visait à responsabiliser la jeunesse, lui permettant de contribuer positivement à ses communautés.",
    images: [
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
    ],
  },
  {
    lat: 35.6892,
    lng: -5.0116,
    title: "Tanger",
    description:
      "À Tanger, Fa3il Khair a assisté les communautés locales avec des projets environnementaux, impliquant plus de 200 bénévoles. Cette initiative a consisté à nettoyer les plages et les parcs locaux, promouvant la sensibilisation à l'environnement parmi les résidents. Le projet a non seulement embelli la région, mais a également sensibilisé les participants à la durabilité et à la conservation.",
    images: [
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
    ],
  },
  {
    lat: 31.6295,
    lng: -8.0049,
    title: "Marrakech",
    description:
      "À Marrakech, Fa3il Khair a soutenu des événements culturels pour les jeunes, atteignant environ 100 participants. Les activités comprenaient des ateliers d'art, des sessions de musique et des cours de danse. Cette initiative a encouragé la créativité parmi les participants et favorisé un sentiment de communauté à travers l'échange culturel.",
    images: [
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
    ],
  },
  {
    lat: 34.020882,
    lng: -6.84165,
    title: "Rabat",
    description:
      "À Rabat, Fa3il Khair a promu la sensibilisation aux services de santé, touchant plus de 300 personnes. La campagne a inclus des dépistages de santé, des ateliers sur la nutrition et la sensibilisation à la santé mentale. En engageant la communauté, l'initiative a aidé à améliorer la littératie en santé et l'accès aux services.",
    images: [
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
    ],
  },
  {
    lat: 32.9639,
    lng: -6.8694,
    title: "Fès",
    description:
      "À Fès, Fa3il Khair a fourni une formation aux artisans, bénéficiant à environ 50 artisans. Ce programme s'est concentré sur l'amélioration des compétences traditionnelles et l'introduction de nouvelles techniques, permettant aux artisans d'améliorer leur métier et de mieux commercialiser leurs produits. L'initiative visait à préserver le patrimoine culturel tout en soutenant les économies locales.",
    images: [
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
      "/Fa3ilKhair/assets/outils/cat.jpg",
    ],
  },
];

const customIcon = new L.Icon({
  iconUrl: "/Fa3ilKhair/assets/outils/marker-icon.png", // Path to your local icon image
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // The point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // The point from which the popup should open relative to the iconAnchor
});

export default function Maps({ onLocationSelect }) {
  const handleMarkerClick = useCallback(
    (location) => {
      onLocationSelect(location);
    },
    [onLocationSelect]
  );

  return (
    <MapContainer center={[31.6295, -8.0049]} zoom={6} className="h-[600px] w-1/2 phone:w-full phone:h-96 z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
      {locations.map((loc, index) => (
        <Marker
          key={index}
          position={[loc.lat, loc.lng]}
          icon={customIcon} // Use the custom icon
          eventHandlers={{
            click: () => handleMarkerClick(loc),
          }}
        >
          <Popup>{loc.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
