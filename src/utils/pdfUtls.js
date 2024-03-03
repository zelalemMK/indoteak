import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const saveSvgAsPdf = async (svgElement, name) => {
  const canvas = await html2canvas(svgElement);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF();
  const svgWidth =
    svgElement.clientWidth || svgElement.getBoundingClientRect().width;
  const svgHeight =
    svgElement.clientHeight || svgElement.getBoundingClientRect().height;

  // Define maximum dimensions for the image in the PDF
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const scale = Math.min(pdfWidth / svgWidth, pdfHeight / svgHeight); // Calculate scale to fit SVG in PDF

  // Calculate the width and height to maintain aspect ratio
  const imgWidth = svgWidth * scale;
  const imgHeight = svgHeight * scale;

  // Calculate positions to center the image
  const xPosition = (pdfWidth - imgWidth) / 2;
  const yPosition = (pdfHeight - imgHeight) / 2;

  // Add the image centered on the PDF page
  pdf.addImage(imgData, "PNG", xPosition, yPosition, imgWidth * .8, imgHeight * .8);

  // Save the PDF
  pdf.save(`${name}-Style.pdf`);
};

export default saveSvgAsPdf;
