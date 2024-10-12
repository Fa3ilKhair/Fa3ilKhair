import Button from "../smallComponents/Button";
import Tag from "../smallComponents/Tag";
import Link from "../smallComponents/Tag";
export default function Nav(){
    return(
        <nav className="flex  border-green-600 w-[60%] ">
             <ul className="flex justify-evenly items-center  w-[100%]">
                <li><Tag content="Acceuil" route="/"/></li>
                <li><Tag content="Projets" route="/projets"/></li>
                <li><Tag content="Galerie" route="/gelerie"/></li>
                <li><Tag content="Contactez-nous" route="/"/></li>
                <li><Tag content="Qui sommes-nous?" route="/"/></li>
                <li><Button content='Faire un Don' color='bg-[#4CAF4F]' /></li>
            </ul>
        </nav>
    );
}