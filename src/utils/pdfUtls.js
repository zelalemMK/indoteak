import { jsPDF } from "jspdf";
import "svg2pdf.js";

const saveSvgAsPdf = async (svgElement, name) => {
  
  // A4 PDF page in jsPDF is 210 mm wide and 297 mm high
  const pdf = new jsPDF();
  svgElement = svgElement.querySelector("svg");

  // Header
  pdf.setFont("Syne");
  pdf.setFontSize(24)
  pdf.text(`${name} Order Sample`, 60, 20);
  

  console.log(name);
  console.log("printed in pdfUtils");


  pdf
    .svg(svgElement, { x: 10, y: 50, width:190, height:200 })
    .then(() => pdf.save(`${name}.pdf`)); // Adjust width and X offset as needed
};

export default saveSvgAsPdf;
