import React from "react";
import "./button.css"

const Button = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="custom-button">
      {children}
    </button>
  );
};

export default Button;