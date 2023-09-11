import React from "react";
import { nanoid } from "nanoid";

export default function Barrel({ colorMap, handlePolygonClick }) {
  const values = [
    {
      d: "M17.9,20.6c0,5.8-3.9,8-3.9,8H4.8S.9,26.4,.9,20.6s3.9-8,3.9-8H14S17.9,14.8,17.9,20.6Z",
    },
    {
      d: "M17.9,37.4c0,5.8-3.9,8-3.9,8H4.8S.9,43.2,.9,37.4s3.9-8,3.9-8H14S17.9,31.6,17.9,37.4Z",
    },
    {
      d: "M17.9,54.2c0,5.8-3.9,8-3.9,8H4.8S.9,60,.9,54.2s3.9-8,3.9-8H14S17.9,48.4,17.9,54.2Z",
    },
    {
      d: "M17.9,71c0,5.8-3.9,8-3.9,8H4.8S.9,76.8,.9,71s3.9-8,3.9-8H14S17.9,65.2,17.9,71Z",
    },
    {
      d: "M17.9,87.8c0,5.8-3.9,8-3.9,8H4.8S.9,93.6,.9,87.8s3.9-8,3.9-8H14S17.9,82,17.9,87.8Z",
    },
    {
      d: "M34.2,12.2c0,5.8-3.9,8-3.9,8H21.2s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S34.2,6.4,34.2,12.2Z",
    },
    {
      d: "M34.2,29c0,5.8-3.9,8-3.9,8H21.2s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S34.2,23.2,34.2,29Z",
    },
    {
      d: "M34.2,45.8c0,5.8-3.9,8-3.9,8H21.2s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S34.2,40,34.2,45.8Z",
    },
    {
      d: "M34.2,62.6c0,5.8-3.9,8-3.9,8H21.2s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S34.2,56.8,34.2,62.6Z",
    },
    {
      d: "M34.2,79.4c0,5.8-3.9,8-3.9,8H21.2s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S34.2,73.6,34.2,79.4Z",
    },
    {
      d: "M50.4,20.6c0,5.8-3.9,8-3.9,8H37.4s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,50.4,20.6Z",
    },
    {
      d: "M50.4,37.4c0,5.8-3.9,8-3.9,8H37.4s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,50.4,37.4Z",
    },
    {
      d: "M50.4,54.2c0,5.8-3.9,8-3.9,8H37.4s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,50.4,54.2Z",
    },
    {
      d: "M50.4,71c0,5.8-3.9,8-3.9,8H37.4s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,50.4,71Z",
    },
    {
      d: "M50.4,87.8c0,5.8-3.9,8-3.9,8H37.4s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,50.4,87.8Z",
    },
    {
      d: "M66.7,12.2c0,5.8-3.9,8-3.9,8H53.7s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,66.7,12.2Z",
    },
    {
      d: "M66.7,29c0,5.8-3.9,8-3.9,8H53.7s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,66.7,29Z",
    },
    {
      d: "M66.7,45.8c0,5.8-3.9,8-3.9,8H53.7s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,66.7,45.8Z",
    },
    {
      d: "M66.7,62.6c0,5.8-3.9,8-3.9,8H53.7s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,66.7,62.6Z",
    },
    {
      d: "M66.7,79.4c0,5.8-3.9,8-3.9,8H53.7s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1A9.3261,9.3261,0,0,1,66.7,79.4Z",
    },
    {
      d: "M82.8,20.6c0,5.8-3.9,8-3.9,8H69.8s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S82.8,14.8,82.8,20.6Z",
    },
    {
      d: "M82.8,37.4c0,5.8-3.9,8-3.9,8H69.8s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S82.8,31.6,82.8,37.4Z",
    },
    {
      d: "M82.8,54.2c0,5.8-3.9,8-3.9,8H69.8s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S82.8,48.4,82.8,54.2Z",
    },
    {
      d: "M82.8,71c0,5.8-3.9,8-3.9,8H69.8s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S82.8,65.2,82.8,71Z",
    },
    {
      d: "M82.8,87.8c0,5.8-3.9,8-3.9,8H69.8s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1S82.8,82,82.8,87.8Z",
    },
    {
      d: "M99.1,12.2c0,5.8-3.9,8-3.9,8H86s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1C95.2,4.2,99.1,6.4,99.1,12.2Z",
    },
    {
      d: "M99.1,29c0,5.8-3.9,8-3.9,8H86s-3.9-2.2-3.9-8S86,21,86,21h9.1C95.2,21,99.1,23.2,99.1,29Z",
    },
    {
      d: "M99.1,45.8c0,5.8-3.9,8-3.9,8H86s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1C95.2,37.8,99.1,40,99.1,45.8Z",
    },
    {
      d: "M99.1,62.6c0,5.8-3.9,8-3.9,8H86s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1C95.2,54.6,99.1,56.8,99.1,62.6Z",
    },
    {
      d: "M99.1,79.4c0,5.8-3.9,8-3.9,8H86s-3.9-2.2-3.9-8,3.9-8,3.9-8h9.1C95.2,71.4,99.1,73.6,99.1,79.4Z",
    },
  ];

  return (
    <svg
      data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value, index) => {
        const id = `path-${index}`;
        return (
          <path
            key={nanoid()}
            id={id}
            d={value.d}
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
