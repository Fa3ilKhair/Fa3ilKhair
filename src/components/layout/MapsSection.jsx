import { useState } from "react";
import Maps from "./Maps";

export default function MapsSection() {
  const [selectedLocation, setSelectedLocation] = useState({
    title: "Sélectionnez un emplacement sur la carte pour voir les informations à son sujet.",
    description: "",
    images: [],
  });

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      <h1 className="text-[3rem] font-extrabold text-center leading-[3rem]">Découvrez Nos Activités à Travers le Maroc</h1>
      <section className="py-12 flex justify-evenly phone:flex-col phone:justify-center phone:px-3">
        <Maps onLocationSelect={handleLocationSelect} />
        <article className="w-1/3 overflow-auto h-auto phone:px-5 phone:w-full phone:mt-10">
          <h2 className="text-xl font-bold">{selectedLocation.title}</h2>
          <p>{selectedLocation.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {selectedLocation.images.map((image, index) => (
              <img key={index} src={image} alt={selectedLocation.title} className="h-24" />
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
