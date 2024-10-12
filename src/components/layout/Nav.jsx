import Button from "../smallComponents/Button";
import Link from "../smallComponents/Link";
export default function Nav(){
    return(
        <nav className="flex  border-green-600 w-[60%] ">
             <ul className="flex justify-evenly items-center  w-[100%]">
                <li><Link content="Acceuil" route="/"/></li>
                <li><Link content="Projets" route="/projets"/></li>
                <li><Link content="Galerie" route="/gelerie"/></li>
                <li><Link content="Contactez-nous" route="/"/></li>
                <li><Link content="Qui sommes-nous?" route="/"/></li>
                <li><Button content='Faire un Don' color='bg-green-600' /></li>
            </ul>
        </nav>
    );
}