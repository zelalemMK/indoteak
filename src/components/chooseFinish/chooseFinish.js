import { useRef } from "react";

import saveSvgAsPdf from "../../utils/pdfUtls";
import OrderForm from "./orderForm/orderForm";
import Button from "../button/button";

import "./chooseFinish.css";
import "./orderForm/orderForm.css";

const ChooseFinish = ({ DesignComponent, colorMap }) => {
  const svgRef = useRef(DesignComponent);

  return (
    <div className="choose-finish">
      <div className="order-form">
        <OrderForm />
        <Button
          textContent={"Download PDF"}
          onClick={() => saveSvgAsPdf(svgRef.current, DesignComponent.name)}
        />
      </div>
      <div className="tile-preview-holder" ref={svgRef}>
        <DesignComponent colorMap={colorMap} className="tile-preview" />
      </div>
    </div>
  );
};

export default ChooseFinish;
