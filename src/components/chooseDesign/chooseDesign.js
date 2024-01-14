import React, { useState } from "react";

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
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dropdown from "react-bootstrap/Dropdown";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import SwiperCore from "swiper";
// import { CarouselCaption } from "react-bootstrap";
// import DesignCarousel from "./designCarousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faDiamond } from "@fortawesome/free-solid-svg-icons";

const ChooseDesign = ({ onDesignSelect, nextStep }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;

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
            className="btn show bg-white text-dark border-0  w-100"
          >
            <p className="fs-6"> How it works</p>
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100  border-top-0  border-end-1 border-start-1 border-4 shadow-sm  text-light dropdown-menu-list d-flex">
            <div className="dropdown-left-side-ordered-lists">
              <ol class="fa-ul ">
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Select your tile preference.
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Choose your color style.
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Save as a PDF
                </li>
              </ol>
            </div>

            <div  dropdown-right-side-ordered-lists>
              <ol class="fa-ul ">
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Lorem ipsum dolor sit elit.
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={faDiamond} />
                  </span>
                  Lorem ipsum dolor sit amet.
                </li>
              </ol>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

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
                  className="design-it container   w-10 shadow p-3 mb-5 bg-body rounded  border border-5"
                  key={nanoid()}
                  onClick={() => {
                    nextStep();
                    onDesignSelect(pattern.Component);
                  }}
                >
                  <div className="d-flex ">
                    <div className="current-design-container">
                      <CurrentDesign />
                    </div>
                    <p className="pattern-title  fs-5 fw-light  ">
                      <span>{pattern.id}</span>
                    </p>
                    <span className="circle-icon ">
                      {" "}
                      <PanoramaFishEyeIcon fontSize="" />{" "}
                    </span>
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
          onClick={previousPage}
          disabled={page === 0}
        >
          BACK
        </Button>

        <Button
          className="next-arrow  arrow btn-secondary"
          onClick={nextPage}
          disabled={(page + 1) * patternsPerPage >= patterns.length}
        >
          NEXT
        </Button>
      </div>

      {/* <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div className="dot"></div>
          ))}
        </div> */}
    </>
  );
};

export default ChooseDesign;
