import React from "react";
import "./button.css"

const Button = ({ onClick, disabled, textContent }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="custom-button">
      {textContent}
    </button>
  );
};

export default Button;