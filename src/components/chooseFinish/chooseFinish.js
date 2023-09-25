import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";

const saveSvgAsPdf = async (svgElement, name) => {
  const canvas = await html2canvas(svgElement);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF();

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width * 0.1, canvas.height * 0.1);

  // Save the PDF
  pdf.save(`${name}.pdf`);
};

const divStyle = {
  width: "50vw",
  height: "50vh",
};

const ChooseFinish = ({ DesignComponent, colorMap }) => {
      const componentName =
        DesignComponent.name ||
        DesignComponent.displayName ||
        "UnnamedComponent";

  console.log(colorMap);
  const svgRef = useRef(null);
  return (
    <div style={divStyle}>
      <div ref={svgRef}>
        <DesignComponent colorMap={colorMap} />
      </div>
      <button onClick={() => saveSvgAsPdf(svgRef.current, componentName)}>
        Save as PDF
      </button>
    </div>
  );
};

export default ChooseFinish;
