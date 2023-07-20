// ChooseDesign.js
import React, { useState } from "react";
import Design1 from "./sgv_designs/design1";
// import Pattern2 from "./patterns/Pattern2";
import './choose_design.css'

const ChooseDesign = ({ onSelect }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;

  const patterns = Array(18).fill(Design1);
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
      {displayedPatterns.map((Pattern, index) => (
        <div className="design-item" key={index} onClick={() => onSelect(Pattern)}>
          <Pattern  />
        </div>
      ))}
      <button onClick={previousPage} disabled={page === 0}>
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={(page + 1) * patternsPerPage >= patterns.length}
      >
        Next
      </button>
    </div>
  );
};

export default ChooseDesign;

