import React from "react";

export default function Taylor() {
  const values = [
    { points: "24.4 99.3 0.6 99.3 0.6 52.1 24.4 99.3" },
    { points: "24.4 50.6 24.4 97.3 1 50.6 24.4 50.6" },
    { points: "49.1 50.6 25.5 97.3 25.5 50.6 49.1 50.6" },
    { points: "49.3 52.5 49.3 99.3 25.5 99.3 49.3 52.5" },
    { points: "74.5 99.3 50.7 99.3 50.7 52.1 74.5 99.3" },
    { points: "74.5 50.6 74.5 97.3 51.1 50.6 74.5 50.6" },
    { points: "99.2 50.6 75.6 97.3 75.6 50.6 99.2 50.6" },
    { points: "99.4 52.5 99.4 99.3 75.6 99.3 99.4 52.5" },
    { points: "75.6 0.7 99.4 0.7 99.4 47.9 75.6 0.7" },
    { points: "75.6 49.4 75.6 2.7 99 49.4 75.6 49.4" },
    { points: "50.9 49.4 74.5 2.7 74.5 49.4 50.9 49.4" },
    { points: "50.7 47.5 50.7 0.7 74.5 0.7 50.7 47.5" },
    { points: "25.5 0.7 49.3 0.7 49.3 47.9 25.5 0.7" },
    { points: "25.5 49.4 25.5 2.7 48.9 49.4 25.5 49.4" },
    { points: "0.8 49.4 24.4 2.7 24.4 49.4 0.8 49.4" },
    { points: "0.6 47.5 0.6 0.7 24.4 0.7 0.6 47.5" },
  ];

  return (
    <svg id="aaf0937a-9efc-4c47-ab2b-02d02e216d31" data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      {values.map((value, index) => {
        return (
          <polygon
            key={index}
            points={value.points}
            fill="#fff"
            stroke="#000"
            strokeWidth="0.3" />
        )}
      )}
    </svg>
  )
}