import React, { useState } from "react";
import ColorGrid from "./color_grid";

import "./chooseColor.css";

function ChooseColor({ DesignComponent }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorMap, setColorMap] = useState({});
  const [eraseActive, setEraserActive] = useState(false);

  function handlePolygonClick(id) {
    if (selectedColor) {
      // Update the colorMap with the new color for the clicked SVG element
      setColorMap({ ...colorMap, [id]: selectedColor });
    }
  }

  const resetColors = () => {
    setColorMap({});
  };

  return (
    <div className="choose-color-container">
      <div className="pattern">
        <DesignComponent
          colorMap={colorMap}
          handlePolygonClick={handlePolygonClick}
        />
      </div>
      <div className="color-grid">
        <ColorGrid
          setSelectedColor={setSelectedColor}
          resetColors={resetColors}
          setEraserActive={setEraserActive}
          eraserActive={eraseActive}
        />
      </div>
    </div>
  );
}

export default ChooseColor;
