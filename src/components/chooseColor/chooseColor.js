import React, { useState } from "react";
import ColorGrid from "./colorGrid";

import "./chooseColor.css";
import Button from "react-bootstrap/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



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
    <>
      <div className="choose-color-container container  d-flex">
        <div className="container color-container  ">
          <div className="pattern  container">
            <DesignComponent
              colorMap={colorMap}
              handlePolygonClick={handlePolygonClick}
            />
          </div>
          <div className="color-grid mb-3  ">
            <ColorGrid
              setSelectedColor={setSelectedColor}
              resetColors={resetColors}
              setEraserActive={setEraserActive}
              eraserActive={eraseActive}
            />
          </div>
        </div>
        <div className="pattern1">
          <DesignComponent />
        </div>
      </div>
      <div
        className="container-fluid next-btn d-block "
        size="lg"
        onClick={nextStep}
         >
        <ArrowBackIosIcon className="backArrow" /> BACK
        <span className="forwardArrow">
          NEXT
          <ArrowForwardIosIcon />
        </span>
      </div>
    </>
  );
}

export default ChooseColor;
