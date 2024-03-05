import React from "react";
import logo from "../../../assets/img/logo.png";
import "./RegisterHeader.css";

export function RegisterHeader(){
    return(
        <>
        <section id="Content-Header">
        <img id="img-logo" src={logo} alt="Logo" />
        <div id="Texto-Header">
        <h3>¡Registrate Ahora!</h3>
        </div>
        </section>
        </>
    )
}