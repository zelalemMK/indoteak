import { jsPDF } from "jspdf";
import "svg2pdf.js";

const saveSvgAsPdf = async (svgElement, name) => {
   const pdf = new jsPDF();
   const headerFontSize = 24; // Size in pixels
   pdf.setFont("Syne", "normal");
   pdf.setFontSize(headerFontSize);

  svgElement = svgElement.querySelector("svg");
  const pageHeight = pdf.internal.pageSize.getHeight(); // A4 size height in mm
  const svgHeightPx = 580; // SVG height in pixels
  const svgHeightMm = svgHeightPx * (25.4 / 96); // Convert pixels to mm
  const yOffset = pageHeight - svgHeightMm; // Calculate Y offset

  pdf.text(`${name} Order Sample`, 105, 20, { align: "center" }); // Add centered header at the top
  await pdf.svg(svgElement, 10, yOffset, 180, svgHeightMm); // Adjust width and X offset as needed
  pdf.save(`${name}.pdf`);
};

export default saveSvgAsPdf;


