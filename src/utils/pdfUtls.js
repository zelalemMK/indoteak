import { jsPDF } from "jspdf";
import "svg2pdf.js";

const saveSvgAsPdf = async (svgElement, name) => {
  //  A4 PDF page in jsPDF is 210 mm wide and 297 mm high
  const pdf = new jsPDF();
  const pageHeight = pdf.internal.pageSize.getHeight(); // A4 size height in mm
  const svgHeightPx = 580; // SVG height in pixels
  const svgHeightMm = svgHeightPx * (25.4 / 96); // Convert pixels to mm
  const yOffset = pageHeight - svgHeightMm; // Calculate Y offset

  svgElement = svgElement.querySelector("svg");

  // pdf.text("Your Header Text Here", 105, 20, { align: "center" }); // Add centered header at the top
  await pdf.svg(svgElement, 10, yOffset, 180, svgHeightMm); // Adjust width and X offset as needed
  pdf.save(`${name}.pdf`);
};

export default saveSvgAsPdf;
