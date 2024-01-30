
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ColorButton = ({ color, setSelectedColor }) => (
  <Button className="color-btn   container-fluid "
    style={{ backgroundColor: color }}
    onClick={() => setSelectedColor(color)}
  ></Button>
);

export default function ColorGrid({ setSelectedColor, resetColors, setEraserActive, eraserActive }) {
  const colors = [
    "#FF0000",
    "#FF6347",
    "#FF4500",
    "#FF1493", // Reds and Pinks
    "#C71585",
    "#DB7093",
    "#FF69B4",
    "#FFB6C1", // Pinks and Purple
    "#800080",
    "#9370DB",
    "#8A2BE2",
    "#9400D3", // Purples and Blue
    "#0000FF",
    "#4169E1",
    "#1E90FF",
    "#00BFFF",
  ]; // Blues
  return (
    <>
      <Row xs={5} className="button-grid ">
        {colors.map((color, index) => (
          <div className="button-grid-col  ">
            <ColorButton
              key={index}
              color={color}
              setSelectedColor={setSelectedColor}
            />
          </div>
        ))}
      </Row>
      <div className="mt-4  choose-color-buttons d-grid ">
        <div>
          <Button
            className="btn-secondary mx-1 my-1    btn-block"
            onClick={() => setSelectedColor(null)}
          >
            Clear Color 
          </Button>
        </div>
        <span>
          <Button
            className="btn-secondary mx-1 my-1 btn-lg "
            onClick={resetColors}
          >
            Erase All 
          </Button>
        </span>
        <span>
          <Button
            className="btn-secondary mx-1 mb-1  btn-block "
            onClick={() => setEraserActive((prev) => !prev)}
          >
            {eraserActive ? "Disable" : "Enable"} Eraser
          </Button>
        </span>
      </div>
    </>
  );
}
