import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import React, { useRef } from "react";

import OrderForm from "./orderForm/orderForm";
import Button from "react-bootstrap/Button";

import "./chooseFinish.css";
import "./orderForm/orderForm.css";


const saveSvgAsPdf = async (svgElement, name) => {
  const canvas = await html2canvas(svgElement);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF();

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width * 0.1, canvas.height * 0.1);

  // Save the PDF
  pdf.save(`${name}.pdf`);
};

const ChooseFinish = ({ DesignComponent, colorMap }) => {
  const componentName =
    DesignComponent.name || DesignComponent.displayName || "UnnamedComponent";

  console.log(colorMap);
  const svgRef = useRef(null);
  return (
    <div className="choose-finish">
      <div className="pdf-style">
        <div ref={svgRef}>
          <DesignComponent colorMap={colorMap} />
        </div>
        <Button
          className="custom-button"
          onClick={() => saveSvgAsPdf(svgRef.current, componentName)}
        >
          Save as PDF
        </Button>
      </div>
      <div className="order-form-container">
        <div>
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default ChooseFinish;
