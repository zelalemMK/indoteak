import { useState } from "react";
import ColorGrid from "./colorGrid";

import "./chooseColor.css";
import Button from "../button/button";

function ChooseColor({
  DesignComponent,
  nextStep,
  prevStep,
  colorMap,
  setColorMap,
}) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [eraseActive, setEraserActive] = useState(false);

  function handlePolygonClick(id) {
    if (eraseActive) {
      // Erase color for the selected polygon
      const newColorMap = { ...colorMap };
      delete newColorMap[id]; // Remove the color mapping for this polygon
      setColorMap(newColorMap);
    } else if (selectedColor) {
      // Set the selected color for the polygon
      setColorMap({ ...colorMap, [id]: selectedColor });
    }
  }

  const resetColors = () => {
    setColorMap({});
  };

  return (
    <div className="chooseColor-display">
      <div className="color-editor">
        <DesignComponent
          className="selected-svg"
          colorMap={colorMap}
          handlePolygonClick={handlePolygonClick}
        />
        <ColorGrid
          setSelectedColor={setSelectedColor}
          resetColors={resetColors}
          setEraserActive={setEraserActive}
          eraserActive={eraseActive}
        />
      </div>
      <div className="half-screen-display">
        <div className="svg-holder">
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
        <div className="chooseColor-button-container">
          <Button onClick={nextStep} textContent={"Finish"} />
        </div>
      </div>
    </div>
  );
}

export default ChooseColor;
