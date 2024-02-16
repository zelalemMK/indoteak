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
import Accordion from "react-bootstrap/Accordion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
// import ProgressBar from "react-bootstrap/ProgressBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faDiamond,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Circle from "./circle.js";

const ChooseDesign = ({ onDesignSelect, nextStep }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;
  const [circle] = useState(4);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const history = useNavigate();
  console.log(active);
  const arr = [];

  for (let i = 1; i < circle; i++)
    arr.push(
      <Circle className={i <= active ? "circle active" : "circle"} key={i}>
        {i}
      </Circle>
    );

  // const navigate = useNavigate();
  const nextPageNumber = () => {
    setPageNum((prevNum) => prevNum + 1);
  };

  const prevPageNumber = () => {
    setPageNum((prevNum) => prevNum - 1);
  };

  useEffect(() => {
    setWidth((100 / (circle - 1)) * active);
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
  const hundleBackclick = () => {
    history(-1);
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
      <div className="Design-wrapper">
        <p className="text-center sqsrte-large ">Designe your own tiles </p>

        <ul className="dropdown ">
          <li>
            <input type="checkbox" name="dropdown" id="first" />

            <label htmlFor="first" className="sqsrte-medium  dropdown-line">
              <p>How it works</p>
            </label>

            <div className="dropdown-content  d-flex ">
              <div className="dropdown-content-list  d-flex">
                <span>
                  <i class="fa-solid fa-diamond"></i>
                </span>
                <p className="sqsrte-small">Choose Design</p>
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

      <div
        className="design-container  
        "
      >
        <div className="progress-container ">
          <div className="progress-content w-50 m-auto">
            <div className="progress-progress-bar">
              <div
                className="progress-progress"
                style={{ width: width + "%" }}
              ></div>
              {arr}
            </div>
            <div className="progress1">
              <divc className="choose-design">Choose Design</divc>
              <div className="choose-colors">Choose Colors</div>
              <div className="save-design">Save Design</div>
            </div>
          </div>
        </div>
        {/* Design section */}
        <div>
         
          <Slider {...settings} >
            {patterns.map((pattern, index) => {
              let CurrentDesign = pattern.Component();

              return (
                <div className="design-it container bg-body rounded  p-2  mb-1">
                  <div className=" ">
                    <div
                      className="current-design-container "
                      key={nanoid()}
                      onClick={() => {
                        nextStep();
                        onDesignSelect(pattern.Component);
                      }}
                    >
                      <CurrentDesign />
                      <div className="design-pattern-descriptions  mt-3">
                        <p className="mb-0 sqsrte-small  ">{pattern.Size}</p>
                        <p className="mb-0 sqsrte-small  ">
                          {pattern.Thickness}
                        </p>
                        <p className="mb-0  sqsrte-small ">{pattern.Price}</p>
                      </div>
                    </div>
                    <div className="flexible"></div>
                    <div className="design-name-and-radio  d-sm-block">
                      <label class="container ">
                        <input type="radio" />
                        <span class="checkmark "></span>
                      </label>
                      <p className=" ">
                        <span className="design-name ">{pattern.id}</span>
                      </p>
                    </div>
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
              prevPageNumber();
              // hundleBackclick();
            }}
          >
            BACK
          </Button>

          <Button
            className="next-arrow  arrow "
            disabled={active >= circle - 1 ? true : false}
            onClick={() => {
              active >= circle ? setActive(circle) : setActive(active + 1);
              nextPageNumber();
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
