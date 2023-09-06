import React, { useState } from "react";
// import Taylor from "../chooseColor/design_pattern";
import Taylor from "../svg/Taylor";

import { nanoid } from "nanoid";
import "./chooseDesign.css";

const ChooseDesign = ({ onDesignSelect, colorMap }) => {
  const [page, setPage] = useState(0);
  const patternsPerPage = 6;

  const patterns = Array.from({length:18}, (v, i) => ({
    id:"design"+(i+1), 
    Component:Taylor
  }));
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
          return (
          <div
            className="design-item"
            key={nanoid()}
            onClick={() => onDesignSelect(pattern.id)}
          >
            <pattern.Component colorMap={colorMap} setColor={()=> console.log("color")} />
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
