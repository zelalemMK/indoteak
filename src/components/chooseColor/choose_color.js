import React, { useState } from "react";
import ColorGrid from "./color_grid";


import './choose_color.css'


function ChooseColor({ DesignComponent, colorMap, setColorMap }) {

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
      <div className="pattern">
        <DesignComponent colorMap={colorMap} setColor={handlePolygonClick} />
      </div>
      <div className="color-grid">
        {/* <ColorGrid
          setSelectedColor={setSelectedColor}
          resetColors={resetColors}
          setEraserActive={setEraserActive}
          eraserActive={eraserActive}
        /> */}
      </div>
    </div>
  );
}

export default ChooseColor;
