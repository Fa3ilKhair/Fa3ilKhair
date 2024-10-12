import { Link } from "react-router-dom";
import Button from "./Button";
export default function Logo({taille}){
    return(
        <>
         <Link to={"/Fa3ilKhair"} > <img className={`${taille} h-[40px]`} src="/Fa3ilKhair/assets/logoGreenNoBg.png" alt="Logo.png" /></Link>
        </>
    );
}