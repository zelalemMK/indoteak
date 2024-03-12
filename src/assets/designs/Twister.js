import { nanoid } from "nanoid";


export default function Twister({ colorMap, handlePolygonClick}) {
  const values = [
    { d: "M24.9,25.4H2.8a22.3485,22.3485,0,0,1,22.1-22Z" },
    { d: "M47.7,25.4h-22V3.4A22.3284,22.3284,0,0,1,47.7,25.4Z" },
    { d: "M24.9,1.9v.7A23.1847,23.1847,0,0,0,2.1,25.4H.9V1.9Z" },
    { d: "M24.9,48.9v.8H.9V26.1H2.1A23.1847,23.1847,0,0,0,24.9,48.9Z" },
    { d: "M2.8,26.1H24.9v22A22.3485,22.3485,0,0,1,2.8,26.1Z" },
    { d: "M25.6,26.1h22a22.3962,22.3962,0,0,1-22,22Z" },
    { d: "M49.6,1.9V25.4H48.4A23.1847,23.1847,0,0,0,25.6,2.6V1.9Z" },
    { d: "M48.4,26.1h1.2V49.6h-24v-.8A23.03,23.03,0,0,0,48.4,26.1Z" },
    { d: "M74.4,25.4H52.3a22.3485,22.3485,0,0,1,22.1-22Z" },
    { d: "M97.1,25.4h-22V3.4A22.2616,22.2616,0,0,1,97.1,25.4Z" },
    { d: "M74.4,1.9v.7A23.1847,23.1847,0,0,0,51.6,25.4H50.4V1.9Z" },
    { d: "M74.4,48.9v.8h-24V26.1h1.2A23.1847,23.1847,0,0,0,74.4,48.9Z" },
    { d: "M52.3,26.1H74.4v22A22.3485,22.3485,0,0,1,52.3,26.1Z" },
    { d: "M75.1,26.1h22a22.3962,22.3962,0,0,1-22,22Z" },
    { d: "M99.1,1.9V25.4H97.9A23.1847,23.1847,0,0,0,75.1,2.6V1.9Z" },
    { d: "M97.9,26.1h1.2V49.6h-24v-.8A23.03,23.03,0,0,0,97.9,26.1Z" },
    { d: "M24.9,73.9H2.8a22.3485,22.3485,0,0,1,22.1-22Z" },
    { d: "M47.7,73.9h-22v-22A22.3284,22.3284,0,0,1,47.7,73.9Z" },
    { d: "M24.9,50.3V51A23.3406,23.3406,0,0,0,2.1,73.9H.9V50.3Z" },
    { d: "M24.9,97.4v.8H.9V74.6H2.1A23.1847,23.1847,0,0,0,24.9,97.4Z" },
    { d: "M2.8,74.6H24.9v22A22.3485,22.3485,0,0,1,2.8,74.6Z" },
    { d: "M25.6,74.6h22a22.3962,22.3962,0,0,1-22,22Z" },
    { d: "M49.6,50.3V73.8H48.4A23.1847,23.1847,0,0,0,25.6,51v-.7Z" },
    { d: "M48.4,74.6h1.2V98.1h-24v-.8A23.03,23.03,0,0,0,48.4,74.6Z" },
    { d: "M74.4,73.9H52.3a22.3485,22.3485,0,0,1,22.1-22Z" },
    { d: "M97.1,73.9h-22v-22A22.2616,22.2616,0,0,1,97.1,73.9Z" },
    { d: "M74.4,50.3V51A23.1847,23.1847,0,0,0,51.6,73.8H50.4V50.3Z" },
    { d: "M74.4,97.4v.8h-24V74.6h1.2A23.1847,23.1847,0,0,0,74.4,97.4Z" },
    { d: "M52.3,74.6H74.4v22A22.3485,22.3485,0,0,1,52.3,74.6Z" },
    { d: "M75.1,74.6h22a22.3962,22.3962,0,0,1-22,22Z" },
    { d: "M99.1,50.3V73.8H97.9A23.1847,23.1847,0,0,0,75.1,51v-.7Z" },
    { d: "M97.9,74.6h1.2V98.1h-24v-.8A23.03,23.03,0,0,0,97.9,74.6Z" },
  ];

  return (
    <svg
      className="twister"
      id="a965c6f8-ac70-4d3b-bed8-03194a92ac9b"
      data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((values) => {
        const id = `point-${values.d}`;
        return (
          <path
            key={nanoid()}
            id={id}
            d={values.d}
            fill={colorMap?.[id] || "white"}
            stroke="#000"
            strokeWidth="0.3"
            onClick={() => handlePolygonClick?.(id)}
          />
        );
      })}
    </svg>
  );
}
