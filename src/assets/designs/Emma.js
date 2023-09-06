import { nanoid } from "nanoid";
import React from "react";

export default function Emma() {
  const values = [
    { points: "49 0.9 25.4 24.5 1.7 0.9 49 0.9" },
    { points: "24.6 25.3 1 48.9 1 1.6 24.6 25.3" },
    { points: "49 49.6 1.7 49.6 25.4 26 49 49.6" },
    { points: "49.7 1.6 49.7 48.9 26.1 25.3 49.7 1.6" },
    { points: "98.3 0.9 74.7 24.5 51 0.9 98.3 0.9" },
    { points: "73.9 25.3 50.3 48.9 50.3 1.6 73.9 25.3" },
    { points: "98.3 49.6 51 49.6 74.7 26 98.3 49.6" },
    { points: "99 1.6 99 48.9 75.4 25.3 99 1.6" },
    { points: "49 50.4 25.4 74 1.7 50.4 49 50.4" },
    { points: "24.6 74.8 1 98.4 1 51.1 24.6 74.8" },
    { points: "49 99.1 1.7 99.1 25.4 75.5 49 99.1" },
    { points: "49.7 51.1 49.7 98.4 26.1 74.8 49.7 51.1" },
    { points: "98.3 50.4 74.7 74 51 50.4 98.3 50.4" },
    { points: "73.9 74.8 50.3 98.4 50.3 51.1 73.9 74.8" },
    { points: "98.3 99.1 51 99.1 74.7 75.5 98.3 99.1" },
    { points: "99 51.1 99 98.4 75.4 74.8 99 51.1" },
  ];

  return (
    <svg
      id="b6eb7337-ea3d-4759-ae3a-27eea5528082"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value) => {
        return (
          <polygon
            key={nanoid()}
            points={value.points}
            fill="#fff"
            stroke="#000"
            strokeWidth="0.3863"
          />
        );
      })}
    </svg>
  );
}
