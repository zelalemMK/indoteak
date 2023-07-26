import React, { useState } from "react";
import './design1.css'



const ColorButton = ({ color, setSelectedColor }) => (
  <button
    className="color-button"
    style={{ backgroundColor: color }}
    onClick={() => setSelectedColor(color)}
  >
    <span style={{ opacity: 0 }}>•</span>
  </button>
);

function ColorGrid ({setSelectedColor,resetColors,
    setEraserActive, eraserActive,}) {
        const colors = [
          "#FF0000",
          "#FF6347",
          "#FF4500",
          "#FF1493", // Reds and Pinks
          "#C71585",
          "#DB7093",
          "#FF69B4",
          "#FFB6C1", // Pinks and Purple
          "#800080",
          "#9370DB",
          "#8A2BE2",
          "#9400D3", // Purples and Blue
          "#0000FF",
          "#4169E1",
          "#1E90FF",
          "#00BFFF",
        ]; // Blues
    return (
      <div className="button-grid">
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            setSelectedColor={setSelectedColor}
          />
        ))}
        <button onClick={() => setSelectedColor(null)}>
          Clear Color Selection
        </button>
        <button onClick={resetColors}>Erase All Colors</button>
        <button onClick={() => setEraserActive((prev) => !prev)}>
          {eraserActive ? "Disable" : "Enable"} Eraser
        </button>
      </div>
    );
};




function Design1({colorMap, setColor }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <g id="first" className="one" stroke="black" stroke-width=".5">
        <polygon id="one" points="0,0 25,0 0,50" fill="white" />
        <polygon id="two" points="0,50 25,50 25,0" fill="white" />
        <polygon id="three" points="25,0 50,0 50,50" fill="white" />
        <polygon id="four" points="25,0 25,50 50,50" fill="white" />
        <polygon id="five" points="50,0 75,0 50,50" fill="white" />
        <polygon id="six" points="75,0 75,50 50,50" fill="white" />
        <polygon id="seven" points="75,0 75,50 100,50" fill="white" />
        <polygon id="eight" points="75,0 100,0 100,50" fill="white" />
        <polygon id="nine" points="0,100 25,100 0,50" fill="white" />
        <polygon id="ten" points="0,50 25,50 25,100" fill="white" />
        <polygon id="eleven" points="25,100 50,100 50,50" fill="white" />
        <polygon id="twelve" points="25,100 25,50 50,50" fill="white" />
        <polygon id="thirteen" points="50,100 75,100 50,50" fill="white" />
        <polygon id="fourteen" points="75,100 75,50 50,50" fill="white" />
        <polygon id="fifteen" points="75,100 75,50 100,50" fill="white" />
        <polygon id="sixteen" points="75,100 100,100 100,50" fill="white" />
      </g>
    </svg>
  );
}

export default Design1;
export {ColorButton};
