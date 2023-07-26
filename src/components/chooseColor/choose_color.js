import React, { useState } from "react";
import ColorGrid from "./color_grid";
import DesignPattern from "./design_pattern";


function ChooseColor({ DesignComponent, colorMap, setColorMap, defaultColorMap }) {
  // const [colorMap, setColorMap] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [eraserActive, setEraserActive] = useState(false);
  
  if(!colorMap) { colorMap = defaultColorMap}



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
    <div>
      <DesignComponent colorMap={colorMap} setColor={handlePolygonClick} />
      <ColorGrid
        setSelectedColor={setSelectedColor}
        resetColors={resetColors}
        setEraserActive={setEraserActive}
        eraserActive={eraserActive}
      />
    </div>
  );
}

export default ChooseColor;
