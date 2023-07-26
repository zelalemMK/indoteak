import React, { useState } from "react";
import ColorGrid from "../chooseColor/color_grid";
import { ColorButton } from "../sgv_designs/design1";
// import DesignPattern from "../sgv/patterns";
import Design1 from "../sgv_designs/design1";

function ChooseFinish() {
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
  const colors = ["#000", "#FFF", "#00FF00"]
  const colorMapTemp = colors.map((color) => (
    <ColorButton color={color} />
  ))

  return (
    <div>
      <Design1 colorMap={colorMap} setColor={handlePolygonClick} />
      <ColorGrid
        setSelectedColor={setSelectedColor}
        resetColors={resetColors}
        setEraserActive={setEraserActive}
        eraserActive={eraserActive}
        colors={["#000000", "#FFFFFF"]} // Only two colors, black and white
      />
    </div>
  );
}

export default ChooseFinish;
