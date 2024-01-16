import React, { useState } from "react";
import ColorGrid from "./colorGrid";

import "./chooseColor.css";

function ChooseColor({ DesignComponent, nextStep, colorMap, setColorMap }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [eraseActive, setEraserActive] = useState(false);

  function handlePolygonClick(id) {
    if (selectedColor) {
      setColorMap({ ...colorMap, [id]: selectedColor });
    }
  }

  const resetColors = () => {
    setColorMap({});
  };

  return (
    <div className="chooseColor-display">
      <div className="color-editor">
        <div className="selected-svg">
          <DesignComponent
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
        <ColorGrid
          setSelectedColor={setSelectedColor}
          resetColors={resetColors}
          setEraserActive={setEraserActive}
          eraserActive={eraseActive}
        />
      </div>
      <div className="half-screen-display">
        <div className="display-svg">
          <DesignComponent
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
        <div className="display-svg">
          <DesignComponent
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
        <div className="display-svg">
          <DesignComponent
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
        <div className="display-svg">
          <DesignComponent
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseColor;
