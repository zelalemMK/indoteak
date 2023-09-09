import React, { useState } from "react";
import ColorGrid from "./color_grid";

import "./chooseColor.css";

function ChooseColor({ DesignComponent, colorMap, setColorMap }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [eraserActive, setEraserActive] = useState(false);

  const handlePolygonClick = (id) => {
    if (selectedColor) {
      // Update the colorMap with the new color for the clicked SVG element
      setColorMap((prevColorMap) => ({
        ...prevColorMap,
        [id]: selectedColor,
      }));
    }
  };

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


  return (
    <div className="choose-color-container">
      <div className="pattern">
        <DesignComponent colorMap={colorMap} handlePolygonClick={handlePolygonClick}/>
      </div>
      <div className="color-grid">
        <ColorGrid
          setSelectedColor={setSelectedColor}
          resetColors={resetColors}
          setEraserActive={setEraserActive}
          eraserActive={eraserActive}
        />
      </div>
    </div>
  );
}

export default ChooseColor;
