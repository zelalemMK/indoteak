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
import Container from "react-bootstrap/Container";

const ChooseDesign = ({ onDesignSelect, nextStep }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;

  const patterns = [
    { id: "design1", Component: () => Amsterdam },
    { id: "design2", Component: () => Amy },
    { id: "design3", Component: () => Barrel },
    { id: "design4", Component: () => Chevron },
    { id: "design5", Component: () => Emma },
    { id: "design6", Component: () => Frank },
    { id: "design7", Component: () => Fields },
    { id: "design8", Component: () => Herringbone },
    { id: "design9", Component: () => Hex },
    { id: "design10", Component: () => PennyRound },
    { id: "design11", Component: () => Rectanlge },
    { id: "design12", Component: () => Taylor },
    { id: "design13", Component: () => Tommy },
    { id: "design14", Component: () => Twister },
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
      <div className="display">
        <Container fluid col-sm-6>
          <h1 className="text-center text">Choose a Design</h1>
          <div className="design-container  ">
            <div className="design-grid ">
              {displayedPatterns.map((pattern) => {
                let CurrentDesign = pattern.Component();
                return (
                  <div
                    className="design-item m-1 shadow"
                    key={nanoid()}
                    onClick={() => {
                      nextStep();
                      onDesignSelect(pattern.Component);
                    }}
                  >
                    <CurrentDesign />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>

        <div className="button-container container  ">
          <Button
            size="lg"
            className="button btn btn-secondary  "
            onClick={previousPage}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            size="lg"
            className="button btn-secondary   "
            onClick={nextPage}
            disabled={(page + 1) * patternsPerPage >= patterns.length}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChooseDesign;
