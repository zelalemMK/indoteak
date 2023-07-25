import React, { useState } from "react";
import ColorGrid from "./color_grid";
import DesignPattern from "./design_pattern";


function ChooseColor() {
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
    <div>
      <DesignPattern colorMap={colorMap} setColor={handlePolygonClick} />
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
