const ColorButton = ({ color, setSelectedColor }) => (
  <button
    className="color-button"
    style={{ backgroundColor: color }}
    onClick={() => setSelectedColor(color)}
  >
    <span style={{ opacity: 0 }}>•</span>
  </button>
);

export default function ColorGrid({
  setSelectedColor,
  resetColors,
  setEraserActive,
  eraserActive,
}) {
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
    <div className="button-grid">
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          color={color}
          setSelectedColor={setSelectedColor}
        />
      ))}
      <button onClick={() => setSelectedColor(null)}>
        Clear Color Selection
      </button>
      <button onClick={resetColors}>Erase All Colors</button>
      <button onClick={() => setEraserActive((prev) => !prev)}>
        {eraserActive ? "Disable" : "Enable"} Eraser
      </button>
    </div>
  );
}
