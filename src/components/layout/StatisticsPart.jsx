import { faCheck, faCoins, faHandsHolding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Statistic from "../smallComponents/statistic";
export default function StatictPart(){
    return(
        <div className="bg-[#F5F7FA] phone:flex-col flex justify-evenly py-20  phone:gap-5 phone:py-15 " >
            <div className="w-1/2 px-32 phone:px-20 text-4xl phone:w-full   " >
                <p className=" font-semibold leading-10">Aider notre</p>
                <p className="font-semibold text-[#4CAF50] leading-10">communité à prospérer</p>
                <p className="text-[1rem]">Nous avons réussi gràce à notre traivail.</p>
            </div>
            <div className="flex flex-wrap gap-8 phone:justify-end ">
                <Statistic icon={faUserGroup} number={"2,341"} subject={"Members"}/>
                <Statistic icon={faHandsHolding} number={"39,328"} subject={"béneficiares"}/>
                <Statistic icon={faCheck} number={"829"} subject={"Projets réalisés"}/>
                <Statistic icon={faCoins} number={"926,536"} subject={"Dhs recus"}/>
            </div>
        </div>
    );
}