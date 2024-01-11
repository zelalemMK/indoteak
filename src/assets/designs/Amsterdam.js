import React from "react";
import { nanoid } from "nanoid";

export default function Amsterdam({colorMap, handlePolygonClick}) {
  const values = [
    { d: "M42.6,16.2V47a10.7787,10.7787,0,0,0-6.3,2.1c-2.9,2.2-5,3.1-7.4,3.1s-4.5-.9-7.4-3.1A12.59,12.59,0,0,0,15,47V16.2a10.7787,10.7787,0,0,0,6.3-2.1c2.9-2.2,5-3.1,7.4-3.1s4.5.9,7.4,3.1A11.58,11.58,0,0,0,42.6,16.2Z",},
    { d: "M70.9,16.2V47a10.7787,10.7787,0,0,0-6.3,2.1c-2.9,2.2-5,3.1-7.4,3.1s-4.5-.9-7.4-3.1A12.59,12.59,0,0,0,43.3,47V16.2a10.7787,10.7787,0,0,0,6.3-2.1c2.9-2.2,5-3.1,7.4-3.1s4.5.9,7.4,3.1A11.58,11.58,0,0,0,70.9,16.2Z",},
    { d: "M99.2,16.2V47a10.7787,10.7787,0,0,0-6.3,2.1c-2.9,2.2-5,3.1-7.4,3.1s-4.5-.9-7.4-3.1A12.59,12.59,0,0,0,71.6,47V16.2a10.7787,10.7787,0,0,0,6.3-2.1c2.9-2.2,5-3.1,7.4-3.1s4.5.9,7.4,3.1A11.58,11.58,0,0,0,99.2,16.2Z",},
    { d: "M28.4,53V83.8a10.7787,10.7787,0,0,0-6.3,2.1c-2.9,2.2-5,3.1-7.4,3.1s-4.5-.9-7.4-3.1A10.9556,10.9556,0,0,0,1,83.8V53a10.7787,10.7787,0,0,0,6.3-2.1c2.9-2.2,5-3.1,7.4-3.1s4.5.9,7.4,3.1A11.6879,11.6879,0,0,0,28.4,53Z",},
    { d: "M56.7,53V83.8a10.7787,10.7787,0,0,0-6.3,2.1c-2.9,2.2-5,3.1-7.4,3.1s-4.5-.9-7.4-3.1a10.9556,10.9556,0,0,0-6.3-2.1V53a10.7787,10.7787,0,0,0,6.3-2.1c2.9-2.2,5-3.1,7.4-3.1s4.5.9,7.4,3.1A11.6879,11.6879,0,0,0,56.7,53Z",},
    { d: "M85,53V83.8a10.7787,10.7787,0,0,0-6.3,2.1c-2.9,2.2-5,3.1-7.4,3.1s-4.5-.9-7.4-3.1a10.9556,10.9556,0,0,0-6.3-2.1V53a10.7787,10.7787,0,0,0,6.3-2.1c2.9-2.2,5-3.1,7.4-3.1s4.5.9,7.4,3.1A11.6879,11.6879,0,0,0,85,53Z",},
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
            fill={colorMap?.[id] || "#b4b4b4"}
            stroke="#fff"
            strokeWidth="0.3"
            onClick={() => handlePolygonClick?.(id)}
          />
        );
      })}
    </svg>
  );
}

