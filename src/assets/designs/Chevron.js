import { nanoid } from "nanoid";



export default function Chevron({ colorMap, handlePolygonClick }) {
  const values = [
    {
      points: "49.519 59.12 0.31 30.383 0.31 14.238 49.519 42.975 49.519 59.12",
    },
    {
      points: "49.519 76.36 0.31 47.623 0.31 31.477 49.519 60.215 49.519 76.36",
    },
    { points: "49.519 93.6 0.31 64.862 0.31 48.717 49.519 77.454 49.519 93.6" },
    {
      points:
        "50.521 59.12 99.73 30.383 99.73 14.238 50.521 42.975 50.521 59.12",
    },
    {
      points:
        "50.521 76.36 99.73 47.623 99.73 31.477 50.521 60.215 50.521 76.36",
    },
    {
      points: "50.521 93.6 99.73 64.862 99.73 48.717 50.521 77.454 50.521 93.6",
    },
  ];

  return (
    <svg
    className="chevron"
      id="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value, index) => {
        const id = `point-${index}`
        return (
          <polygon
            key={nanoid()}
            id={id}
            points={value.points}
            fill={colorMap?.[id] || "white"}
            stroke="#000"
            strokeWidth="0.3863"
            onClick={() => handlePolygonClick?.(id)}
          />
        );
      })}
    </svg>
  );
}
