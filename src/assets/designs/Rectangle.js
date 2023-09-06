import { nanoid } from "nanoid";
import React from "react";

export default function Rectanlge() {
  const values = [
    { x: "0", y: "0" },
    { x: "25.5", y: "0" },
    { x: "51", y: "0" },
    { x: "76.5", y: "0" },
    { x: "0", y: "51" },
    { x: "25.5", y: "51" },
    { x: "51", y: "51" },
    { x: "76.5", y: "51" },
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      stroke="black"
      stroke-wdith="0.1"
    >
      {values.map((value) => {
        return (
          <rect
            key={nanoid()}
            x={value.x}
            y={value.y}
            width={23.5}
            height={49}
            stroke="black"
            strokeWidth="0.3"
            fill="white"
          />
        );
      })}
    </svg>
  );
}
