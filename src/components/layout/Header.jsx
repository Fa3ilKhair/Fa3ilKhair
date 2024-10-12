import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";
export default function Header (){
 return(
     <header className="h-[10%] bg-white shadow-xl" >
        <Logo taille='h-[65px]'/>
        <Button color='bg-green-700'  content="Faire un don"/>
     </header>
 );
}