import "./LoginButtons.css";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import { LoginForm } from "../LoginForm/LoginForm";
import { Button } from "../../UI/Button";
import { buttonStyle, buttonWrapperStyle } from "./ButtonStyles";
import { Link, useNavigate } from "react-router-dom";

export function LoginButtons(){

    const handleClick = () => {
      };

    return(
        <>
        <div id="content-Login">
            <LoginHeader/>
            <LoginForm/>
             <Button
             text="Iniciar Sesion"
             onClick={handleClick}
             buttonStyle={buttonStyle}
             buttonWrapperStyle={buttonWrapperStyle}
             />

               <p >
                Aun no tienes cuenta? {' '}
                <Link to='/register'>
                 Registrate ahora!
                </Link>
              </p>
        </div>
        
        </>
    )
}