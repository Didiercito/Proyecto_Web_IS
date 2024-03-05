import "./RegisterForm.css";
import React, { useState } from "react";
import { Input } from "../../UI/Input";
import { wrapperStyle, labelStyle, nombresInputStyle, apellidosInputStyle } from "./InputStyles";

export function Register1() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeApellidos = (e) => {
    setApellidos(e.target.value);
  };

  return (
    <div id="Content-Form">
    <div className="input-container">
      <Input
        name="Nombre(s)"
        type="text"
        value={nombre}
        onChange={handleChangeNombre}
        wrapperStyle={wrapperStyle}
        labelStyle={labelStyle}
        style={nombresInputStyle}
      />
      <Input
        name="Apellido(s)"
        type="apellidos"
        value={apellidos}
        onChange={handleChangeApellidos}
        wrapperStyle={wrapperStyle}
        labelStyle={labelStyle}
        style={apellidosInputStyle}
      />
    </div>
  </div>
  );
}