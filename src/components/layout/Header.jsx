import Nav from "./Nav";
import Logo from "../smallComponents/Logo";
import Button from "../smallComponents/Button";
export default function Header (){
 return(
     <header className="h-[10%]  bg-white shadow-xl flex justify-center items-center p-4" >
        <div className="border-blue-800 flex justify-between w-[90%]">
        <Logo taille='h-[55px] w-[55px]'/>
        <Nav/>
        </div>
     </header>
 );
}