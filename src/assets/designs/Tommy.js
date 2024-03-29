import { nanoid } from "nanoid";


export default function Tommy({ colorMap, handlePolygonClick}) {
  const values = [
    { points: "12.6 29.3 47.9 49.6 0.9 49.6 12.6 29.3" },
    { points: "25.1 7.7 49.1 49.3 13 28.5 25.1 7.7" },
    { points: "49.6 7.3 49.6 48.4 25.8 7.3 49.6 7.3" },
    { points: "74.2 7.3 50.4 48.4 50.4 7.3 74.2 7.3" },
    { points: "86.8 28.3 51.1 48.9 74.9 7.7 86.8 28.3" },
    { points: "25.8 92.7 49.6 51.6 49.6 92.7 25.8 92.7" },
    { points: "0.9 50.4 48.5 50.4 12.8 71.1 0.9 50.4" },
    { points: "13.3 71.8 48.7 51.3 25.1 92.3 13.3 71.8" },
    { points: "50.4 92.7 50.4 51.6 74.2 92.7 50.4 92.7" },
    { points: "74.9 92.3 51.4 51.6 86.7 71.9 74.9 92.3" },
    { points: "87.1 71.2 51.1 50.4 99.1 50.4 87.1 71.2" },
    { points: "99.1 49.6 51.8 49.6 87.3 29 99.1 49.6" },
  ];

  return (
    <svg
      id="a607e17b-3a57-4336-9262-e1f4f8ce4a43"
      data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((values) => {
        const id = `point-${values.points}`;
        return (
          <polygon
            key={nanoid()}
            id={id}
            points={values.points}
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
