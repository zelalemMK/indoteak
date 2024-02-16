
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
      <div className="choose-color-wrapper w-75 ">
        <Row xs={5} className="button-grid m-sm-auto m-1 ">
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
        <div className=" choose-color-buttons w-100 d-flex  mt-3">
          <div>
            <Button
              className=" btn-block color-button btn-light"
              onClick={() => setSelectedColor(null)}
            >
              Clear Color
            </Button>
          </div>
          <span>
            <Button
              className=" m-1 color-button btn-light "
              onClick={resetColors}
            >
              Erase All
            </Button>
          </span>
          <span>
            <Button
              className="  btn-light color-button  "
              onClick={() => setEraserActive((prev) => !prev)}
            >
              {eraserActive ? "Disable" : "Enable"} Eraser
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}
