import React from "react";

export function Input({
  name,
  type = "text",
  value,
  onChange,
  style,
  wrapperStyle,
  labelStyle,
}) {
  return (
    <div className="input-wrapper" style={wrapperStyle}>
      <label htmlFor={name} style={labelStyle}>
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        style={style}
      />
    </div>
  );
}
