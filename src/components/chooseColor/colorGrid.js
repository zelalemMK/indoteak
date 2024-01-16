import { nanoid } from "nanoid";
import React, { useState } from "react";

import "./colorGrid.css";

export default function ColorGrid({ setSelectedColor }) {
  const gradientRed = [
    "#ff0000",
    "#e20000",
    "#c60000",
    "#aa0000",
    "#8d0000",
    "#710000",
    "#550000",
    "#380000",
    "#1c0000",
    "#000000",
  ];

  const gradientBlue = [
    "#0000ff",
    "#0000e2",
    "#0000c6",
    "#0000aa",
    "#00008d",
    "#000071",
    "#000055",
    "#000038",
    "#00001c",
    "#000000",
  ];

  const gradientYellow = [
    "#ffff00",
    "#e2e200",
    "#c6c600",
    "#aaaa00",
    "#8d8d00",
    "#717100",
    "#555500",
    "#383800",
    "#1c1c00",
    "#000000",
  ];

  const combinedGradients = [
    ...gradientRed,
    ...gradientBlue,
    ...gradientYellow,
  ];

  const [selected, setSelected] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color); // External function to set color
    setSelected(color); // Internal state to track selected color
  };

  return (
    <div className="color-grid-container">
      <div className="color-grid">
        {combinedGradients.map((color) => (
          <button
            className={`color-grid-item ${
              selected === color ? "selected" : ""
            }`}
            key={nanoid()}
            style={{
              background: color,
              transform: selected === color ? "scale(1.2)" : "scale(1)",
            }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
    </div>
  );
}
