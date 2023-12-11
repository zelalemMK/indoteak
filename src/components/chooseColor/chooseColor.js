import React, { useState } from "react";
import ColorGrid from "./colorGrid";

import "./chooseColor.css";
import Button from "react-bootstrap/Button";



function ChooseColor({ DesignComponent, nextStep, colorMap, setColorMap}) {
  const [selectedColor, setSelectedColor] = useState(null);
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
    <div className="choose-color-container m-5  container">
      <div className="container color-container d-sm-flex ">
        <div className="pattern bg-secondary mb-5 container shadow">
          <DesignComponent
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
        <div className="color-grid mb-3  container">
          <ColorGrid
            setSelectedColor={setSelectedColor}
            resetColors={resetColors}
            setEraserActive={setEraserActive}
            eraserActive={eraseActive}
          />
          <Button className="container-fluid next-btn my-3" size="lg" onClick={nextStep}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChooseColor;
