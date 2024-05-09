import { useRef, useState } from "react";

import saveSvgAsPdf from "../../utils/pdfUtls";
import OrderForm from "./orderForm/orderForm";
import Button from "../button/button";

import "./chooseFinish.css";
import "./orderForm/orderForm.css";

const ChooseFinish = ({ DesignComponent, colorMap }) => {
  const svgRef = useRef(DesignComponent);
  const [submitted, setSubmitted] = useState(false);

  const designName = DesignComponent.name;
  console.log(`Tile name at chooseFinish:17 ${designName}`);

  return (
    <>
      <div className="title">
        <h1>Order Sample</h1>
      </div>
      <div className="choose-finish">
        <div className="order-form">
          <OrderForm setSubmitted={setSubmitted} />
          {/* They can download PDF only after submitting form
          We will inplement ordering samples after words. */}
          <div className="download-holder">
            {submitted && (
              <Button
                textContent={"Download PDF"}
                onClick={() => {
                  saveSvgAsPdf(svgRef.current, designName);
                  setSubmitted(true);
                }}
              />
            )}
          </div>
        </div>
        <div className="tile-preview-holder" ref={svgRef}>
          <DesignComponent colorMap={colorMap} className="tile-preview" />
        </div>
      </div>
    </>
  );
};

export default ChooseFinish;
