import React, { useState } from "react";
import Design1 from "../sgv_designs/design1";
import DesignPattern from "../chooseColor/design_pattern";
import "./choose_design.css";

const ChooseDesign = ({ onDesignSelect, colorMap }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;

  const patterns = Array(18).fill(DesignPattern);
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
        {displayedPatterns.map((Pattern, index) => (
          <div
            className="design-item"
            key={index}
            onClick={() => onDesignSelect(Pattern)}
          >
            <Pattern colorMap={colorMap} setColor={()=> console.log("color")}/>
          </div>
        ))}
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
