// Import jsPDF library
import { jsPDF } from "jspdf";

// Create a new jsPDF instance
const doc = new jsPDF();

// Set text font and size
doc.setFont("helvetica", "normal");
doc.setFontSize(10);

// Add company and contact info section
doc.text("Company:", 20, 20);
doc.rect(70, 18, 120, 6); // Placeholder for input

doc.text("Contact:", 20, 30);
doc.rect(70, 28, 120, 6); // Placeholder for input

doc.text("Email:", 20, 40);
doc.rect(70, 38, 120, 6); // Placeholder for input

// Add order details section
doc.text("Order Date:", 20, 50);
doc.rect(70, 48, 60, 6); // Placeholder for date input

doc.text("Delivery Date:", 140, 50);
doc.rect(190, 48, 60, 6); // Placeholder for date input

// Style and color selection
doc.text("Style Selection:", 20, 60);
const styles = ["Style 1", "Style 2", "Style 3"]; // Example styles
styles.forEach((style, index) => {
  doc.rect(70, 58 + index * 10, 6, 6); // Checkbox
  doc.text(style, 80, 63 + index * 10); // Style label
});

doc.text("Color Selection:", 20, 120);
const colors = ["Red", "Blue", "Green"]; // Example colors
colors.forEach((color, index) => {
  doc.setDrawColor(0);
  doc.setFillColor(color.toLowerCase()); // Use color name for fill color
  doc.rect(70, 118 + index * 10, 6, 6, "FD"); // Color box
  doc.text(color, 80, 123 + index * 10); // Color label
});

// Add signatures and notes section
doc.text("Customer Signature:", 20, 180);
doc.line(70, 178, 190, 178); // Placeholder for signature

doc.text("Notes:", 20, 190);
doc.rect(20, 195, 170, 40); // Placeholder for additional notes

// Save the created PDF
doc.save("TaylorOrderForm.pdf");
