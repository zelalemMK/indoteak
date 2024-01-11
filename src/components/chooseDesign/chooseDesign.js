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

import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";



const ChooseDesign = ({ onDesignSelect, nextStep }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;

  const patterns = [
    { id: "AMSTERDAM", Component: () => Amsterdam },
    { id: "AMY", Component: () => Amy },
    { id: "BARREL", Component: () => Barrel },
    { id: "CHEVON", Component: () => Chevron },
    { id: "EMMA", Component: () => Emma },
    { id: "FRANK", Component: () => Frank },
    { id: "FIELDS", Component: () => Fields },
    { id: "HERRINGBONE", Component: () => Herringbone },
    { id: "HEX", Component: () => Hex },
    { id: "PENNYROUND", Component: () => PennyRound },
    { id:  "RECTANGLE", Component: () => Rectanlge },
    { id: "TAYLOR", Component: () => Taylor },
    { id: "TOMMY", Component: () => Tommy },
    { id: "TWISTER", Component: () => Twister },
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

  return (
    <>
      <div className="display ">
        <Container className="gx-0">
          <h1 className="text-center text ">Designe your own tiles </h1>
          <Dropdown className="">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="btn show bg-white text-dark border-light w-100"
            >
              <p> How it works</p>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 border-light shadow-sm  text-light">
              <Dropdown.Item className="text-light" href="#/action-1">
                1 Select your tiile preference.
              </Dropdown.Item>
              <Dropdown.Item className="text-light" href="#/action-2">
                2. Choose your color style.
              </Dropdown.Item>
              <Dropdown.Item className="text-light" href="#/action-3">
                3. Save as a PDF
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="design-container  ">
            <div className="design-grid ">
              {displayedPatterns.map((pattern, index) => {
                let CurrentDesign = pattern.Component();

                return (
                  <Row
                    className="design-it container  px-0 "
                    key={nanoid()}
                    onClick={() => {
                      nextStep();
                      onDesignSelect(pattern.Component);
                    }}
                  >
                    <CurrentDesign />
                    <p className="pattern-title text-center mt-2  px-0 ">
                      {pattern.id}
                    </p>
                  </Row>
                );
              })}
            </div>
          </div>
        </Container>

        <div className="button-container container-fluid  ">
          <span className="b-arrow  arrow">
            <ArrowBackIosIcon onClick={previousPage} disabled={page === 0} />
          </span>

          <span className="f-arrow  arrow ">
            <ArrowForwardIosIcon
              onClick={nextPage}
              disabled={(page + 1) * patternsPerPage >= patterns.length}
            />
          </span>
        </div>

        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div className="dot"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseDesign;
