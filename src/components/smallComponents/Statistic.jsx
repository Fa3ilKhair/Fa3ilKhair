import { faPeopleGroup, faPeoplePulling, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import { useState } from "react";

export default function Statistic({icon,number,subject}){
    const [statisticOn,setStatisticOn] = useState(false)
    return(
        <ScrollTrigger className="flex w-2/5 " onEnter={()=>{setStatisticOn(true)}} onExit={()=>{setStatisticOn(false)}} >
            <FontAwesomeIcon icon={icon} size="2x" className="text-[#4CAF50]"/>
            <div className="px-5 flex flex-col">
                {statisticOn && <CountUp className="text-[1.7rem] font-bold m-0 p-0 leading-5" start={0} end={number} duration={2} delay={0}/>}
                <p className="text-[0.8rem] m-0 p-0">{subject}</p>
            </div>
        </ScrollTrigger>
    );
}