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
import Accordion from "react-bootstrap/Accordion";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ProgressBar from "react-bootstrap/ProgressBar";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDiamond, faChevronDown} from "@fortawesome/free-solid-svg-icons";
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

  const nextPage = () => {
    if ((page + 1) * patternsPerPage < patterns.length) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

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
            className=" d-flex btn show bg-white text-dark border-0  w-100 justify-content-center dropdown-toggle"
          >
            <p className="design-how "> How it works</p>

            <span className="chevron-down ">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Dropdown.Toggle>
          <div className="design-how-underline my-1"></div>

          <Dropdown.Menu className="w-100 justify-content-center m-auto  dropdown-menu-list">
            <div className=" dropdown-ordered-list d-flex  justify-content-center    align-items-center ">
              <ol class="fa-ul  d-flex ">
                <li>
                  <span className="icon-number num-1"> 1</span>
                  <FontAwesomeIcon
                    class="fa-li diamond-icon"
                    icon={faDiamond}
                  />
                  <p className="mt-2"> Select your tile preference.</p>
                </li>
                <li className="mx-5">
                  <span className="icon-number  num-2"> 2</span>
                  <FontAwesomeIcon
                    class="fa-li diamond-icon "
                    icon={faDiamond}
                  />
                  <p className="mt-2"> Choose your color style.</p>
                </li>
                <li>
                  <span className="icon-number num-3"> 3</span>
                  <FontAwesomeIcon
                    class="fa-li diamond-icon"
                    icon={faDiamond}
                  />

                  <p className="mt-2"> Save as a PDF</p>
                </li>
              </ol>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* progress section */}

      {/* <div
        className="design-container  activeIndex={index} onSelect={handleSelect} 
       w-75 m-auto  "
      >
       
        <Slider {...settings} className="design-grid ">
          
            {patterns.map((pattern, index) => {
              let CurrentDesign = pattern.Component();

              return (
                <div
                  className="design-it container bg-white  p-2 mb-5 border "
                  key={nanoid()}
                  onClick={() => {
                    nextStep();
                    onDesignSelect(pattern.Component);
                  }}
                >
                  <div className="d-flex current-design-content ">
                    <div className="current-design-container  ">
                      <CurrentDesign className="" />
                    </div>
                    <div>
                      <p className="pattern-title  fs-3  fw-light  ">
                        <span className="design-name">{pattern.id}</span>
                      </p>
                      <span className="circle-icon  ">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="border border-dark rounded mt-1 "
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
       
      </div> */}
      <div
        className="design-container  
        "
      >
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
        <div>
          {" "}
          <Slider {...settings}>
            {patterns.map((pattern, index) => {
              let CurrentDesign = pattern.Component();

              return (
                <div className="design-it container bg-body rounded  p-2  mb-1">
                  <div className="d-flex my-2 ">
                    <div
                      className="current-design-container "
                      key={nanoid()}
                      onClick={() => {
                        nextStep();
                        onDesignSelect(pattern.Component);
                      }}
                    >
                      <CurrentDesign className="" />
                    </div>
                    <div>
                      <p className="pattern-title  fs-3   ">
                        <span className="design-name">{pattern.id}</span>
                      </p>
                    </div>
                    <div>
                      <span className="circle-icon ">
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="border border-dark rounded mb-5"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="design-pattern-descriptions">
                    <p className="mb-0  ">{pattern.Size}</p>
                    <p className="mb-0 ">{pattern.Thickness}</p>
                    <p className="mb-0 ">{pattern.Price}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* buttons section */}
        <div className="button-container container-fluid w-100  mt-5">
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
              nextPage();
            }}
          >
            NEXT
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChooseDesign;
