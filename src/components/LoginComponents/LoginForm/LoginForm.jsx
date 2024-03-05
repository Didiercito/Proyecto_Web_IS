import "./LoginForm.css";
import React, { useState } from "react";
import { Input } from "../../UI/Input";
import { wrapperStyle, labelStyle, correoInputStyle, contrasenaInputStyle } from "./InputStyles";

export function LoginForm() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleChangeCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const handleChangeContrasena = (e) => {
    setContrasena(e.target.value);
  };

  return (
    <div id="Content-Form">
    <div className="input-container">
      <Input
        name="Correo Electrónico"
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