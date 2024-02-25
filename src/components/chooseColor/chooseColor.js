import { useState } from "react";
import ColorGrid from "./colorGrid";

import "./chooseColor.css";
import Button from "../button/button";

document.addEventListener("DOMContentLoaded", function () {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    const element = document.getElementsByClassName("svg-holder");
    element.classList.add("mac-svg");
  }
});


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
        <div className="button-half-view">
          <Button onClick={nextStep} textContent={"Finish"} />
        </div>
      </div>
      <div className="half-screen-display">
        <div className="svg-holder">
          <DesignComponent
            className="display-svg"
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
          <DesignComponent
            className="display-svg"
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
          <DesignComponent
            className="display-svg"
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
          <DesignComponent
            className="display-svg"
            colorMap={colorMap}
            handlePolygonClick={handlePolygonClick}
          />
        </div>
        <div className="chooseColor-button-container" id="finish-button">
          <Button onClick={nextStep} textContent={"Finish"} />
        </div>
      </div>
    </div>
  );
}

export default ChooseColor;
