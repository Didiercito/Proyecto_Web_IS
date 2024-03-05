import React from "react";

export function Button({
  text,
  onClick,
  buttonStyle,
  buttonWrapperStyle,
}) {
  return (
    <div style={buttonWrapperStyle}>
      <button style={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}