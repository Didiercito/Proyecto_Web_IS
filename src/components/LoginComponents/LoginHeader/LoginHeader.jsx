
import React from "react";
import logo from "../../../assets/img/logo.png";
import "./LoginHeader.css";

export function LoginHeader(){
    return(
        <>
        <section id="Content-Header">
        <img id="img-logo" src={logo} alt="Logo" />
        <div id="Texto-Header">
        <h3>Iniciar Sesion</h3>
        </div>
        </section>
        </>
    )
}