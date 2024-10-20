import { faArrowAltCircleLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DernierProjectCard({text,img}) {
  return (
    <div class=" flex flex-col justify-center items-center overflow-hidden  bg-white bg-clip-border rounded-xl w-1/4 phone:w-3/4 ">
      <img src={img} alt="card-image" class="object-cover w-full h-72 " />
      <div className="flex flex-col justify-evenly  bg-[#F5F7FA] h-36  w-96 p-3  rounded-md relative bottom-14">
        <p className="text-[1rem] text-center">{text}</p>
        <button className="text-[#4CAF50] hover:text-[#2b6c2d] ">Détails <FontAwesomeIcon className="ml-1" icon={faArrowRight}  /></button>
      </div>
    </div>
  );
}
