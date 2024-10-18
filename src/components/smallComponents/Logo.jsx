import { Link } from "react-router-dom";
import Button from "./Button";
export default function Logo({taille}){
    return(
        <>
         <Link to={"/Fa3ilKhair"} > <img className={`${taille}`} src="/Fa3ilKhair/assets/logos/logoGreenNoBg.png" alt="Logo.png" /></Link>
        </>
    );
}