import { useState, useEffect } from "react";


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
import Button from "../button/button";

const ChooseDesign = ({ onDesignSelect, nextStep }) => {
  const [page, setPage] = useState(0);

  const patterns = [
    { id: "design1", name: "Amsterdam", Component: () => Amsterdam },
    { id: "design2", name: "Amy", Component: () => Amy },
    { id: "design3", name: "Barrel", Component: () => Barrel },
    { id: "design4", name: "Chevron", Component: () => Chevron },
    { id: "design5", name: "Emma", Component: () => Emma },
    { id: "design6", name: "Frank", Component: () => Frank },
    { id: "design7", name: "Fields", Component: () => Fields },
    { id: "design8", name: "Herringbone", Component: () => Herringbone },
    { id: "design9", name: "Hex", Component: () => Hex },
    { id: "design10", name: "Penny Round", Component: () => PennyRound },
    { id: "design11", name: "Rectangle", Component: () => Rectanlge },
    { id: "design12", name: "Taylor", Component: () => Taylor },
    { id: "design13", name: "Tommy", Component: () => Tommy },
    { id: "design14", name: "Twister", Component: () => Twister },
  ];

  const [patternsPerPage, setPatternsPerPage] = useState(3);

  // Function to update the patternsPerPage based on screen width
  const updatePatternsPerPage = () => {
    if (window.innerWidth < 431) {
      // Assuming 778 px as the breakpoint for mobile view
      setPatternsPerPage(6);
    } else {
      setPatternsPerPage(3);
    }
  };

  useEffect(() => {
    updatePatternsPerPage();
    window.addEventListener("resize", updatePatternsPerPage);

    return () => {
      window.removeEventListener("resize", updatePatternsPerPage);
    };
  }, []);

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
        <div className="title">
          <h1 className="text-center text">Choose A Design</h1>
        </div>
        <div className="design-grid ">
          {displayedPatterns.map((pattern) => {
            let CurrentDesign = pattern.Component();
            return (
              <div
                className="svg-design"
                key={nanoid()}
                onClick={() => {
                  nextStep();
                  onDesignSelect(pattern.Component);
                }}
              >
                <CurrentDesign />
                <p className="pattern-name">{pattern.name}</p>
              </div>
            );
          })}
        </div>
        {/* </div> */}

        <div className="button-container container">
          <Button
            onClick={previousPage}
            textContent={"Back"}
            disabled={page === 0}
          />
          <Button
            textContent={"Next"}
            onClick={nextPage}
            disabled={(page + 1) * patternsPerPage >= patterns.length}
          />
        </div>
      </div>
    </>
  );
};

export default ChooseDesign;
