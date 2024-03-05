import "./RegistrerButton.css";
import { RegisterHeader } from "../RegisterHeader/RegisterHeader";
import { Register1 } from "../RegisterForm/Register1";
import { Register2 } from "../RegisterForm/Register2";
import { Button } from "../../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { buttonStyle, buttonWrapperStyle } from "./ButtonStyles";

export function RegistrerButton(){

    const handleClick = () => {
    };

    return(
        <>
        <div id="content-register">
            <RegisterHeader/>
            <Register1/>
            <Register2/>
            <Button
             text="Registrarse"
             onClick={handleClick}
             buttonStyle={buttonStyle}
             buttonWrapperStyle={buttonWrapperStyle}
             />

               <p >
                Ya tienes cuenta? {' '}
                <Link to='/'>
                 Iniciar Sesion!!
                </Link>
              </p>
        </div>
        
        </>
    )
}