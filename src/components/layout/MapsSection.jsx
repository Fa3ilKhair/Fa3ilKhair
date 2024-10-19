import { useState } from "react";
import Maps from "./Maps";

export default function MapsSection() {
  const [selectedLocation, setSelectedLocation] = useState({
    title: "Sélectionnez un emplacement sur la carte pour voir les informations à son sujet.",
    description: "",
    images: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(""); // State for selected image

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <h1 className="text-[3rem] font-extrabold text-center leading-[3rem]">Découvrez Nos Activités à Travers le Maroc</h1>
      <section className="py-12 flex justify-evenly phone:flex-col phone:justify-center phone:px-3">
        <Maps onLocationSelect={handleLocationSelect} />
        <article className="w-1/3 overflow-auto h-auto phone:px-5 phone:w-full phone:mt-10">
          <h2 className="text-xl font-bold">{selectedLocation.title}</h2>
          <p>{selectedLocation.description}</p>
          <div className="mt-10 flex w-full justify-center flex-wrap gap-5 gap-y-5 h-96">
            {selectedLocation.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={selectedLocation.title}
                className="w-1/4 cursor-pointer" // Add cursor pointer for clickable images
                onClick={() => openModal(image)} // Open modal on click
              />
            ))}
          </div>
        </article>
      </section>

      {/* Modal for displaying the selected image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full p-5" />
        </div>
      )}
    </>
  );
}
