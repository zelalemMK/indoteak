import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";

export default function Amy({ colorMap, handlePolygonClick }) {


  const values = [
    { points: "48.9 0.8 25.3 24.4 1.6 0.8 48.9 0.8" },
    { points: "24.5 25.2 0.9 48.8 0.9 1.5 24.5 25.2" },
    { points: "48.9 49.5 1.6 49.5 25.3 25.9 48.9 49.5" },
    { points: "49.6 1.5 49.6 48.8 26 25.2 49.6 1.5" },
    { points: "74.2 49.5 50.4 49.5 50.4 2.3 74.2 49.5" },
    { points: "74.2 0.8 74.2 47.4 50.8 0.8 74.2 0.8" },
    { points: "98.9 0.8 75.3 47.4 75.3 0.8 98.9 0.8" },
    { points: "99.1 2.6 99.1 49.5 75.3 49.5 99.1 2.6" },
    { points: "51.1 99.2 74.7 75.6 98.4 99.2 51.1 99.2" },
    { points: "75.5 74.8 99.1 51.2 99.1 98.5 75.5 74.8" },
    { points: "51.1 50.5 98.4 50.5 74.7 74.1 51.1 50.5" },
    { points: "50.4 98.5 50.4 51.2 74 74.8 50.4 98.5" },
    { points: "25.8 50.5 49.6 50.5 49.6 97.7 25.8 50.5" },
    { points: "25.8 99.2 25.8 52.6 49.2 99.2 25.8 99.2" },
    { points: "1.1 99.2 24.7 52.6 24.7 99.2 1.1 99.2" },
    { points: "0.9 97.4 0.9 50.5 24.7 50.5 0.9 97.4" },
  ];

  return (
    <svg
      data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value, index) => {
        const id = `point-${index}`
        console.log(typeof handlePolygonClick)
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
