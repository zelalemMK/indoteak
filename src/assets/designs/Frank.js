import { nanoid } from "nanoid";


export default function Frank({ colorMap, handlePolygonClick}) {
  const values = [
    { points: "0.9 80 19.9 99.1 0.9 99.1 0.9 80" },
    { points: "19.1 0.9 10.2 9.5 1.6 0.9 19.1 0.9" },
    { points: "39.1 0.9 20.1 19.4 10.9 10.2 20.5 0.9 39.1 0.9" },
    { points: "58.8 0.9 29.8 29.2 20.8 20.1 40.5 0.9 58.8 0.9" },
    { points: "78.6 0.9 39.6 38.9 30.5 29.9 60.2 0.9 78.6 0.9" },
    { points: "98.1 0.9 49.2 48.6 40.3 39.6 80 0.9 98.1 0.9" },
    { points: "0.9 60.1 39.8 99.1 21.3 99.1 0.9 78.6 0.9 60.1" },
    { points: "59.7 99.1 41.2 99.1 0.9 58.8 0.9 40.3 59.7 99.1" },
    { points: "79 99.1 61.1 99.1 0.9 38.9 0.9 20.9 79 99.1" },
    { points: "98.3 99.1 80.4 99.1 0.9 19.5 0.9 1.6 98.3 99.1" },
    { points: "99.1 19.8 59.3 58.6 49.9 49.2 99.1 1.3 99.1 19.8" },
    { points: "69.3 68.6 60 59.3 99.1 21.2 99.1 39.6 69.3 68.6" },
    { points: "79.3 78.6 70 69.3 99.1 41 99.1 59.4 79.3 78.6" },
    { points: "89.2 88.5 80 79.3 99.1 60.7 99.1 78.9 89.2 88.5" },
    { points: "99.1 98.5 89.9 89.2 99.1 80.2 99.1 98.5" },
  ];

  return (
    <svg
      id="a38e51b1-efd2-456b-9654-01bff574064b"
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
