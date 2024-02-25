import { useRef } from "react";

import saveSvgAsPdf from "../../utils/pdfUtls"
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
      </div>
      <div className="tile-preview" ref={svgRef}>
        <DesignComponent colorMap={colorMap} className="display-svg" />
        <Button
          textContent={"Download PDF"}
          onClick={() => saveSvgAsPdf(svgRef.current, DesignComponent.name)}
        />
      </div>
    </div>
  );
};


export default ChooseFinish;
