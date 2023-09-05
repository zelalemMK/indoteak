import React, { useState } from "react";
import "./svg.css";

const ColorButton = ({ color, setSelectedColor }) => (
  <button
    className="color-button"
    style={{ backgroundColor: color }}
    onClick={() => setSelectedColor(color)}
  >
    <span style={{ opacity: 0 }}>•</span>
  </button>
);

function ColorGrid({
  setSelectedColor,
  resetColors,
  setEraserActive,
  eraserActive,
}) {
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
}

const DesignPattern = ({ colorMap, setColor }) => {
  const polygons = [
    { id: "one", points: "0,0 25,0 0,50" },
    { id: "two", points: "0,50 25,50 25,0" },
    { id: "three", points: "25,0 50,0 50,50" },
    { id: "four", points: "25,0 25,50 50,50" },
    { id: "five", points: "50,0 75,0 50,50" },
    { id: "six", points: "75,0 75,50 50,50" },
    { id: "seven", points: "75,0 75,50 100,50" },
    { id: "eight", points: "75,0 100,0 100,50" },
    { id: "nine", points: "0,100 25,100 0,50" },
    { id: "ten", points: "0,50 25,50 25,100" },
    { id: "eleven", points: "25,100 50,100 50,50" },
    { id: "twelve", points: "25,100 25,50 50,50" },
    { id: "thirteen", points: "50,100 75,100 50,50" },
    { id: "fourteen", points: "75,100 75,50 50,50" },
    { id: "fifteen", points: "75,100 75,50 100,50" },
    { id: "sixteen", points: "75,100 100,100 100,50" },
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="first" className="one" stroke="black" strokeWidth=".5">
        {polygons.map((polygon) => (
          <polygon
            key={polygon.id}
            id={polygon.id}
            points={polygon.points}
            fill={colorMap[polygon.id] || "white"} // use white as default color
            onClick={() => setColor(polygon.id)}
          />
        ))}
      </g>
    </svg>
  );
};

function ChooseColorWithDesign() {
  const [colorMap, setColorMap] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [eraserActive, setEraserActive] = useState(false);

  const setColor = (id) => {
    if (selectedColor) {
      setColorMap((prev) => ({ ...prev, [id]: selectedColor }));
    }
  };

  const resetColors = () => {
    setColorMap({});
  };

  const eraseColor = (id) => {
    setColorMap((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  const handlePolygonClick = (id) => {
    if (eraserActive) {
      eraseColor(id);
    } else {
      setColor(id);
    }
  };

  return (
    <div className="container">
      <DesignPattern
        className="design"
        colorMap={colorMap}
        setColor={handlePolygonClick}
      />
      <ColorGrid
        setSelectedColor={setSelectedColor}
        resetColors={resetColors}
        setEraserActive={setEraserActive}
        eraserActive={eraserActive}
        className="color-grid"
      />
    </div>
  );
}

export default ChooseColorWithDesign;
