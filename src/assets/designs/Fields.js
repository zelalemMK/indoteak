import React from "react";
import { nanoid } from "nanoid";

export default function Fields({ colorMap, handlePolygonClick}) {
    const values = [
      { x: "0", y: "20", width:"40" },
      { x: "42", y: "20", width:"40" },
      { x: "20", y: "35.5", width:"40" },
      { x: "62", y: "35.5", width:"38" },
      { x: "0", y: "51", width:"40" },
      { x: "42", y: "51", width:"40" },
      { x: "20", y: "66.5", width:"40" },
      { x: "62", y: "66.5", width:"38" },
    ];

    return (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        stroke="black"
        stroke-wdith="0.1"
        preserveAspectRatio="xMidYMid meet"
      >
        {values.map((value, index) => {
          const id = `rect-${index}`;
          return (
            <rect
              key={nanoid()}
              id={id}
              x={value.x}
              y={value.y}
              width={value.width}
              height={13.5}
              stroke="black"
              strokeWidth="0.3"
              fill={colorMap?.[id] || "white"}
              onClick={() => handlePolygonClick?.(id)}
            />
          );
        })}
      </svg>
    );
}