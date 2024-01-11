
import { Button } from "react-bootstrap";
import React from "react";

const ColorButton = ({ color, setSelectedColor }) => (
  <Button className="color-btn container-fluid"
    style={{ backgroundColor: color, width: "50px", height: "20px",   justifyContent:"center" }}
    onClick={() => setSelectedColor(color)}
  ></Button>
);

export default function ColorGrid({ setSelectedColor, resetColors, setEraserActive, eraserActive }) {
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
    <div className="button-grid shadow ">
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          color={color}
          setSelectedColor={setSelectedColor}
        />
      ))}
      <div className="mt-2">
        <Button
          className="btn-secondary mx-1 my-1"
          onClick={() => setSelectedColor(null)}
        >
          Clear Color Selection
        </Button>
        <Button className="btn-secondary mx-1 my-1" onClick={resetColors}>
          Erase All Colors
        </Button>
        <Button
          className="btn-secondary mx-1 mb-1"
          onClick={() => setEraserActive((prev) => !prev)}
        >
          {eraserActive ? "Disable" : "Enable"} Eraser
        </Button>

        
      </div>
    </div>
  );
}
