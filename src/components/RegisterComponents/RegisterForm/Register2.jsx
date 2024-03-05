import "./RegisterForm.css";
import React, { useState } from "react";
import { Input } from "../../UI/Input";
import { wrapperStyle, labelStyle, correoInputStyle, contrasenaInputStyle } from "./InputStyles";

export function Register2() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
  
    const handleChangeContrasena = (e) => {
        setContrasena(e.target.value);
      };

    const handleChangeCorreo = (e) => {
        setCorreo(e.target.value);
     };

  return (
    <div id="Content-Form2">
    <div className="input-container2">
    <Input
        name="Correo Electronico"
        type="email"
        value={correo}
        onChange={handleChangeCorreo}
        wrapperStyle={wrapperStyle}
        labelStyle={labelStyle}
        style={correoInputStyle}
      />
    <Input
        name="Contraseña"
        type="password"
        value={contrasena}
        onChange={handleChangeContrasena}
        wrapperStyle={wrapperStyle}
        labelStyle={labelStyle}
        style={contrasenaInputStyle}
      />
    </div>
  </div>
  );
}