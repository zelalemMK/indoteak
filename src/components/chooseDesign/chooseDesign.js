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

const ChooseDesign = ({ onDesignSelect, nextStep}) => {
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

//   const patterns = [
//   { id: "design1", Component: () => <Amsterdam /> },
//   { id: "design2", Component: () => <Amy /> },
//   { id: "design3", Component: () => <Barrel /> },
//   { id: "design4", Component: () => <Chevron /> },
//   { id: "design5", Component: () => <Emma /> },
//   { id: "design6", Component: () => <Frank /> },
//   { id: "design7", Component: () => <Fields /> },
//   { id: "design8", Component: () => <Herringbone /> },
//   { id: "design9", Component: () => <Hex /> },
//   { id: "design10", Component: () => <PennyRound /> },
//   { id: "design11", Component: () => <Rectanlge /> },
//   { id: "design12", Component: () => <Taylor /> },
//   { id: "design13", Component: () => <Tommy /> },
//   { id: "design14", Component: () => <Twister /> },
// ];



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
    <div className="design-container">
      <div className="design-grid">
        {displayedPatterns.map((pattern, index) => {
          let CurrentDesign = pattern.Component();
          return (
            <div
              className="design-item"
              key={nanoid()}
              onClick={() => {
                nextStep();
                onDesignSelect(pattern.Component);
              }} >
              <CurrentDesign />
            </div>
          );
          })}
      </div>
      <div className="button-container">
        <button className="button" onClick={previousPage} disabled={page === 0}>
          Previous
        </button>
        <button
          className="button"
          onClick={nextPage}
          disabled={(page + 1) * patternsPerPage >= patterns.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChooseDesign;
