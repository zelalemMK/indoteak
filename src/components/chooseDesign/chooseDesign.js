import React, { useEffect, useState } from "react";

import Amsterdam from "../../assets/designs/Amsterdam";
import Amy from "../../assets/designs/Amy";
import Barrel from "../../assets/designs/Barrel";
import Chevron from "../../assets/designs/Chevron";
import Emma from "../../assets/designs/Emma";
import Frank from "../../assets/designs/Frank";
import Fields from "../../assets/designs/Fields";
import Herringbone from "../../assets/designs/Herringbone";
import Hex from "../../assets/designs/Hex";
import PennyRound from "../../assets/designs/PennyRound";
import Rectanlge from "../../assets/designs/Rectangle";
import Taylor from "../../assets/designs/Taylor";
import Tommy from "../../assets/designs/Tommy";
import Twister from "../../assets/designs/Twister";

import { nanoid } from "nanoid";

import "./chooseDesign.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ProgressBar from "react-bootstrap/ProgressBar";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDiamond } from "@fortawesome/free-solid-svg-icons";
import Circle from "./circle.js"

const ChooseDesign = ({ onDesignSelect, nextStep }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;
  const [circle] = useState(5);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  console.log(active)
  const arr = [];
  
  for (let i = 1; i < circle ; i++)
    arr.push(<Circle className={i <= active ? "circle active" : "circle"} key={i} >{i}</Circle>);


  useEffect(() => {
    setWidth(100/(circle -1) * active);
  }, [circle, active]);

  const patterns = [
    {
      id: "AMSTERDAM",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Amsterdam,
    },
    {
      id: "AMY",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Amy,
    },
    {
      id: "BARREL",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Barrel,
    },
    {
      id: "CHEVON",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Chevron,
    },
    {
      id: "EMMA",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Emma,
    },
    {
      id: "FRANK",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Frank,
    },
    {
      id: "FIELDS",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Fields,
    },
    {
      id: "HERRINGBONE",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Herringbone,
    },
    {
      id: "HEX",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Hex,
    },
    {
      id: "PENNYROUND",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => PennyRound,
    },
    {
      id: "RECTANGLE",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Rectanlge,
    },
    {
      id: "TAYLOR",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Taylor,
    },
    {
      id: "TOMMY",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Tommy,
    },
    {
      id: "TWISTER",
      Size: "Size:",
      Thickness: "Thickness:",
      Price: "Price:",
      Component: () => Twister,
    },
  ];

  const displayedPatterns = patterns.slice(
    page * patternsPerPage,
    (page + 1) * patternsPerPage
  );

  // const nextPage = () => {
  //   if ((page + 1) * patternsPerPage < patterns.length) {
  //     setPage(page + 1);
  //   }
  // };

  // const previousPage = () => {
  //   if (page > 0) {
  //     setPage(page - 1);
  //   }
  // };

  // slide show settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="">
        <h6 className="text-center design-text ">Designe your own tiles </h6>
        <Dropdown className="design-dropdown mx-5  ">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="btn show bg-white text-dark border-0  w-100"
          >
            

            <p className=""> How it works</p>
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100 justify-content-center m-auto border-top-0  border-end-1 border-start-1 border-4 shadow-lg text-light dropdown-menu-list">
            <div className=" d-flex ">
              <div className="dropdown-left-side-ordered-lists">
                <ol class="fa-ul ">
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Select your tile preference.
                  </li>
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Choose your color style.
                  </li>
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Save as a PDF
                  </li>
                </ol>
              </div>

              <div dropdown-right-side-ordered-lists>
                <ol class="fa-ul ">
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Lorem ipsum dolor sit elit.
                  </li>
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <span class="fa-li diamond-icon">
                      <FontAwesomeIcon icon={faDiamond} />
                    </span>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ol>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* progress section */}

      <div className="progress-container">
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

      {/* Design section */}
      <div
        className="design-container  activeIndex={index} onSelect={handleSelect} 
       w-75 m-auto  "
      >
        <div className="design-grid ">
          <Slider {...settings}>
            {patterns.map((pattern, index) => {
              let CurrentDesign = pattern.Component();

              return (
                <div
                  className="design-it container bg-white shadow w-10  p-3 mb-5 border border-5  border-light opacity-100"
                  key={nanoid()}
                  onClick={() => {
                    nextStep();
                    onDesignSelect(pattern.Component);
                  }}
                >
                  <div className="d-flex ">
                    <div className="current-design-container  ">
                      <CurrentDesign className="w-53" />
                    </div>
                    <div>
                      <p className="pattern-title  fs-3  fw-light  ">
                        <span className="design-name">{pattern.id}</span>
                      </p>
                      <span className="circle-icon ">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="border border-dark rounded"
                        />
                      </span>
                    </div>
                  </div>
                  <p className="mb-0  fw-light">{pattern.Size}</p>
                  <p className="mb-0 fw-light">{pattern.Thickness}</p>
                  <p className="mb-0 fw-light">{pattern.Price}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="button-container container-fluid w-75  mt-5">
        <Button
          className="back-arrow  arrow btn-secondary"
          disabled={active > 0 ? false : true}
          onClick={() => {
            active <= 0 ? setActive(0) : setActive(active - 1);
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
};

export default ChooseDesign;
