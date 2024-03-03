import { useRef, useState } from "react";

import saveSvgAsPdf from "../../utils/pdfUtls";
import OrderForm from "./orderForm/orderForm";
import Button from "../button/button";

import "./chooseFinish.css";
import "./orderForm/orderForm.css";

const ChooseFinish = ({ DesignComponent, colorMap }) => {
  const svgRef = useRef(DesignComponent);
  const [buttonStyle, setButtonStyle] = useState({visibility:"hidden"}); // Use state for button style

  const handleDownloadClick = async () => {
    // Make the button invisible
    setButtonStyle({ visibility: "hidden" });

    // Wait for the state update to render
    setTimeout(async () => {
      await saveSvgAsPdf(svgRef.current, DesignComponent.name);

      // Make the button visible again
      setButtonStyle({});
    }, 100); // Adjust time if necessary
  };

  return (
    <div className="choose-finish">
      <div className="order-form">
        <OrderForm />
      </div>
      <div className="tile-preview" ref={svgRef}>
        <DesignComponent colorMap={colorMap} className="display-svg" />
        <Button textContent={"Download PDF"} onClick={handleDownloadClick} style={buttonStyle} />
      </div>
    </div>
  );
};

export default ChooseFinish;
