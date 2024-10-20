import { faPeopleGroup, faPeoplePulling, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Statistic({icon,number,subject}){
    return(
        <div className="flex w-2/5 ">
            <FontAwesomeIcon icon={icon} size="2x" className="text-[#4CAF50]"/>
            <div className="px-5 flex flex-col">
                <p className="text-[1.7rem] font-bold m-0 p-0 leading-5">{number}</p>
                <p className="text-[0.8rem] m-0 p-0">{subject}</p>
            </div>
        </div>
    );
}