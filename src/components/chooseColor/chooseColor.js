import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorGrid from "./colorGrid";

import "./chooseColor.css";
import Button from "react-bootstrap/Button";

import Circle from "../chooseDesign/circle";




function ChooseColor({ DesignComponent, nextStep, colorMap, setColorMap}) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [eraseActive, setEraserActive] = useState(false);
   const [circle] = useState(4);
   const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const history = useNavigate();
   console.log(active);
   const arr = [];

   for (let i = 1; i < circle; i++)
     arr.push(
       <Circle className={i <= active ? "circle active" : "circle"} key={i}>
         {i}
       </Circle>
     );

   useEffect(() => {
     setWidth((100 / (circle - 1)) * active);
   }, [circle, active]);

  function handlePolygonClick(id) {
    if (selectedColor) {
      // Update the colorMap with the new color for the clicked SVG element
      setColorMap({ ...colorMap, [id]: selectedColor });
    }
  }

  const hundleBackclick = () => {
    history(-1)
  }
  const resetColors = () => {
    setColorMap({});
  };

  return (
    <>
      {/* dropdown section */}
      <div className="">
        <p className="text-center sqsrte-large ">Designe your own tiles </p>

        <ul className="dropdown ">
          <li>
            <input type="checkbox" name="dropdown" id="first" />

            <label htmlFor="first" className="sqsrte-medium  dropdown-line">
              How it works
            </label>

            <div className="dropdown-content  d-flex ">
              <div className="dropdown-content-list d-flex">
                <span>
                  <i class="fa-solid fa-diamond"></i>
                </span>
                <p className="sqsrte-small ">Choose Design</p>
              </div>
              <div className="dropdown-content-list d-flex">
                <span>
                  <i class="fa-solid fa-diamond"></i>
                </span>
                <p className="sqsrte-small">Choose Color</p>
              </div>
              <div className="dropdown-content-list d-flex ">
                <span>
                  <i className="fa-solid fa-diamond"></i>
                </span>
                <p className="sqsrte-small">Save Design</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* progress section */}

      <div className="progress-container my-1">
        <div className="progress-content w-50 m-auto">
          <div className="progress-progress-bar">
            <div
              className="progress-progress"
              style={{ width: width + "%" }}
            ></div>
            {arr}
          </div>
        </div>
      </div>

      {/* choose color section */}

      <div className="choose-color-container container d-flex">
        <div className="color-container w-100 d-sm-flex  justify-content-center  ">
          <div className="pattern     w-50  m-sm-auto">
            <DesignComponent
              colorMap={colorMap}
              handlePolygonClick={handlePolygonClick}
            />
          </div>

          <div className="color-grid mb-3 m-sm-auto ">
            <ColorGrid
              setSelectedColor={setSelectedColor}
              resetColors={resetColors}
              setEraserActive={setEraserActive}
              eraserActive={eraseActive}
            />
          </div>
        </div>
        {/* <div className="pattern1  w-50 ">
          <DesignComponent />
        </div> */}
      </div>
      {/* <div
        className="container-fluid next-btn d-block "
        size="lg"
        onClick={nextStep}
      >
        <ArrowBackIosIcon className="backArrow" /> BACK
        <span className="forwardArrow">
          NEXT
          <ArrowForwardIosIcon />
        </span>
      </div> */}

      <div className="button-container container-fluid w-75 ">
        <Button
          className="back-arrow  arrow btn-secondary"
          disabled={active > 0 ? false : true}
          onClick={() => {
            active <= 0 ? setActive(0) : setActive(active - 1);
            //  hundleBackclick();
          }}
        >
          BACK
        </Button>

        <Button
          className="next-arrow  arrow btn-secondary"
          disabled={active >= circle - 1 ? true : false}
          onClick={() => {
            active >= circle ? setActive(circle) : setActive(active + 1);
          }}
        >
          NEXT
        </Button>
      </div>
    </>
  );
}

export default ChooseColor;
