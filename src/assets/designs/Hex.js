import { nanoid } from "nanoid";
import React from "react";


export default function Hex({ colorMap, handlePolygonClick }) {
  const values = [
    { d:"M.9,13.3V21a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0L15,21.5a.55.55,0,0,0,.3-.5V13.3a.55.55,0,0,0-.3-.5L8.5,8.9a.8542.8542,0,0,0-.7,0L1.2,12.7A.8643.8643,0,0,0,.9,13.3Z" },
    { d:"M16.1,13.3V21a.55.55,0,0,0,.3.5L23,25.3a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V13.3a.55.55,0,0,0-.3-.5L23.6,9A.6375.6375,0,0,0,23,9l-6.6,3.8A.55.55,0,0,0,16.1,13.3Z" },
    { d:"M31.3,13.3V21a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V13.3a.55.55,0,0,0-.3-.5L38.8,9a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,31.3,13.3Z" },
    { d:"M46.5,13.3V21a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V13.3a.55.55,0,0,0-.3-.5L54,9a.6375.6375,0,0,0-.6,0l-6.6,3.8A.85.85,0,0,0,46.5,13.3Z" },
    { d:"M61.8,13.3V21a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V13.3a.55.55,0,0,0-.3-.5L69.3,9a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,61.8,13.3Z" },
    { d:"M77,13.3V21a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V13.3a.55.55,0,0,0-.3-.5L84.5,9a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,77,13.3Z" },
    { d:"M8.5,26.4v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V26.4a.55.55,0,0,0-.3-.5L16,22.1a.6375.6375,0,0,0-.6,0L8.8,25.9A.55.55,0,0,0,8.5,26.4Z" },
    { d:"M23.7,26.4v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V26.4a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0L24,25.9A.55.55,0,0,0,23.7,26.4Z" },
    { d:"M38.9,26.4v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0L53,34.6a.55.55,0,0,0,.3-.5V26.4a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.85.85,0,0,0,38.9,26.4Z" },
    { d:"M54.2,26.4v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V26.4a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,54.2,26.4Z" },
    { d:"M69.4,26.4v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V26.4a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,69.4,26.4Z" },
    { d:"M84.6,26.4v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V26.4a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,84.6,26.4Z" },
    { d:"M.9,39.6v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0L15,47.8a.55.55,0,0,0,.3-.5V39.6a.55.55,0,0,0-.3-.5L8.4,35.3a.6375.6375,0,0,0-.6,0L1.2,39.1A.55.55,0,0,0,.9,39.6Z" },
    { d:"M16.1,39.6v7.7a.55.55,0,0,0,.3.5L23,51.6a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V39.6a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,16.1,39.6Z" },
    { d:"M31.3,39.6v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V39.6a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,31.3,39.6Z" },
    { d:"M46.5,39.6v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V39.6a.55.55,0,0,0-.3-.5L54,35.3a.6375.6375,0,0,0-.6,0l-6.6,3.8A.85.85,0,0,0,46.5,39.6Z" },
    { d:"M61.8,39.6v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V39.6a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,61.8,39.6Z" },
    { d:"M77,39.6v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V39.6a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,77,39.6Z" },
    { d:"M8.5,52.7v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V52.7a.55.55,0,0,0-.3-.5L16,48.4a.6375.6375,0,0,0-.6,0L8.8,52.2A.55.55,0,0,0,8.5,52.7Z" },
    { d:"M23.7,52.7v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V52.7a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0L24,52.2A.55.55,0,0,0,23.7,52.7Z" },
    { d:"M38.9,52.7v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0L53,60.9a.55.55,0,0,0,.3-.5V52.7a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.85.85,0,0,0,38.9,52.7Z" },
    { d:"M54.2,52.7v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V52.7a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,54.2,52.7Z" },
    { d:"M69.4,52.7v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V52.7a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,69.4,52.7Z" },
    { d:"M84.6,52.7v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V52.7a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,84.6,52.7Z" },
    { d:"M.9,65.9v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.8542.8542,0,0,0,.7,0l6.6-3.8a.55.55,0,0,0,.3-.5V65.9a.55.55,0,0,0-.3-.5L8.5,61.6a.6375.6375,0,0,0-.6,0L1.3,65.4A.51.51,0,0,0,.9,65.9Z" },
    { d:"M16.1,65.9v7.7a.55.55,0,0,0,.3.5L23,77.9a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V65.9a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,16.1,65.9Z" },
    { d:"M31.3,65.9v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V65.9a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,31.3,65.9Z" },
    { d:"M46.5,65.9v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V65.9a.55.55,0,0,0-.3-.5L54,61.6a.6375.6375,0,0,0-.6,0l-6.6,3.8A.85.85,0,0,0,46.5,65.9Z" },
    { d:"M61.8,65.9v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V65.9a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,61.8,65.9Z" },
    { d:"M77,65.9v7.7a.55.55,0,0,0,.3.5l6.6,3.8a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V65.9a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,77,65.9Z" },
    { d:"M8.5,79v7.7a.55.55,0,0,0,.3.5L15.4,91a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V79a.55.55,0,0,0-.3-.5L16,74.7a.6375.6375,0,0,0-.6,0L8.8,78.5A.55.55,0,0,0,8.5,79Z" },
    { d:"M23.7,79v7.7a.55.55,0,0,0,.3.5L30.6,91a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V79a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0L24,78.5A.55.55,0,0,0,23.7,79Z" },
    { d:"M38.9,79v7.7a.55.55,0,0,0,.3.5L45.8,91a.6375.6375,0,0,0,.6,0L53,87.2a.55.55,0,0,0,.3-.5V79a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.85.85,0,0,0,38.9,79Z" },
    { d:"M54.2,79v7.7a.55.55,0,0,0,.3.5L61.1,91a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V79a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,54.2,79Z" },
    { d:"M69.4,79v7.7a.55.55,0,0,0,.3.5L76.3,91a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V79a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,69.4,79Z" },
    { d:"M84.6,79v7.7a.55.55,0,0,0,.3.5L91.5,91a.6375.6375,0,0,0,.6,0l6.6-3.8a.55.55,0,0,0,.3-.5V79a.55.55,0,0,0-.3-.5l-6.6-3.8a.6375.6375,0,0,0-.6,0l-6.6,3.8A.55.55,0,0,0,84.6,79Z" },
  ];

  return (
    <svg
      id="afff9cc0-f335-47c9-b52a-653c76ec8c7e"
      data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value, index) => {
        const id = `point-${index}`
        return (
          <path
            key={nanoid()}
            id={id}
            d={value.d}
            fill={colorMap?.[id] || "white"}
            stroke={"black"}
            strokeWidth={".3"}
            onClick={() => handlePolygonClick?.(id)}
          />
        );
      })}
    </svg>
  );
}