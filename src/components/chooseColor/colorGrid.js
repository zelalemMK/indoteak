// import { Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import React from "react";

import "./colorGrid.css";



export default function ColorGrid({
  setSelectedColor,
  resetColors,
  setEraserActive,
  eraserActive,
}) {
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

  return (
    <div className="color-grid-container">
      <div className="color-grid">
        {combinedGradients.map((color) => (
          <button
            className="color-grid-item"
            key={nanoid()}
            style={{ background: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      {/* <div className="color-grid-buttons">
        <button className="button-item" onClick={() => setSelectedColor(null)}>
          Clear Color Selection
        </button>
        <button className="button-item" onClick={resetColors}>
          Erase All Colors
        </button>
        <button
          className="button-item"
          onClick={() => setEraserActive((prev) => !prev)}
        >
          {eraserActive ? "Disable" : "Enable"} Eraser
        </button>
      </div> */}
    </div>
  );
}
