import { nanoid } from "nanoid";


export default function PennyRound({ colorMap, handlePolygonClick}) {
  const values = [
    { cx: "4.7", cy: "8.7" },
    { cx: "13.4", cy: "8.7" },
    { cx: "22", cy: "8.7" },
    { cx: "30.6", cy: "8.7" },
    { cx: "39.2", cy: "8.7" },
    { cx: "47.8", cy: "8.7" },
    { cx: "56.5", cy: "8.7" },
    { cx: "65.1", cy: "8.7" },
    { cx: "73.7", cy: "8.7" },
    { cx: "82.3", cy: "8.7" },
    { cx: "90.9", cy: "8.7" },
    { cx: "9.1", cy: "16.1" },
    { cx: "17.7", cy: "16.1" },
    { cx: "26.3", cy: "16.1" },
    { cx: "34.9", cy: "16.1" },
    { cx: "43.5", cy: "16.1" },
    { cx: "52.2", cy: "16.1" },
    { cx: "60.8", cy: "16.1" },
    { cx: "69.4", cy: "16.1" },
    { cx: "78", cy: "16.1" },
    { cx: "86.6", cy: "16.1" },
    { cx: "95.3", cy: "16.1" },
    { cx: "4.7", cy: "23.8" },
    { cx: "13.4", cy: "23.8" },
    { cx: "22", cy: "23.8" },
    { cx: "30.6", cy: "23.8" },
    { cx: "39.2", cy: "23.8" },
    { cx: "47.8", cy: "23.8" },
    { cx: "56.5", cy: "23.8" },
    { cx: "65.1", cy: "23.8" },
    { cx: "73.7", cy: "23.8" },
    { cx: "82.3", cy: "23.8" },
    { cx: "90.9", cy: "23.8" },
    { cx: "9.1", cy: "31.1" },
    { cx: "17.7", cy: "31.1" },
    { cx: "26.3", cy: "31.1" },
    { cx: "34.9", cy: "31.1" },
    { cx: "43.5", cy: "31.1" },
    { cx: "52.2", cy: "31.1" },
    { cx: "60.8", cy: "31.1" },
    { cx: "69.4", cy: "31.1" },
    { cx: "78", cy: "31.1" },
    { cx: "86.6", cy: "31.1" },
    { cx: "95.3", cy: "31.1" },
    { cx: "4.7", cy: "38.8" },
    { cx: "13.4", cy: "38.8" },
    { cx: "22", cy: "38.8" },
    { cx: "30.6", cy: "38.8" },
    { cx: "39.2", cy: "38.8" },
    { cx: "47.8", cy: "38.8" },
    { cx: "56.5", cy: "38.8" },
    { cx: "65.1", cy: "38.8" },
    { cx: "73.7", cy: "38.8" },
    { cx: "82.3", cy: "38.8" },
    { cx: "90.9", cy: "38.8" },
    { cx: "9.1", cy: "46.2" },
    { cx: "17.7", cy: "46.2" },
    { cx: "26.3", cy: "46.2" },
    { cx: "34.9", cy: "46.2" },
    { cx: "43.5", cy: "46.2" },
    { cx: "52.2", cy: "46.2" },
    { cx: "60.8", cy: "46.2" },
    { cx: "69.4", cy: "46.2" },
    { cx: "78", cy: "46.2" },
    { cx: "86.6", cy: "46.2" },
    { cx: "95.3", cy: "46.2" },
    { cx: "4.7", cy: "53.8" },
    { cx: "13.4", cy: "53.8" },
    { cx: "22", cy: "53.8" },
    { cx: "30.6", cy: "53.8" },
    { cx: "39.2", cy: "53.8" },
    { cx: "47.8", cy: "53.8" },
    { cx: "56.5", cy: "53.8" },
    { cx: "65.1", cy: "53.8" },
    { cx: "73.7", cy: "53.8" },
    { cx: "82.3", cy: "53.8" },
    { cx: "90.9", cy: "53.8" },
    { cx: "9.1", cy: "61.2" },
    { cx: "17.7", cy: "61.2" },
    { cx: "26.3", cy: "61.2" },
    { cx: "34.9", cy: "61.2" },
    { cx: "43.5", cy: "61.2" },
    { cx: "52.2", cy: "61.2" },
    { cx: "60.8", cy: "61.2" },
    { cx: "69.4", cy: "61.2" },
    { cx: "78", cy: "61.2" },
    { cx: "86.6", cy: "61.2" },
    { cx: "95.3", cy: "61.2" },
    { cx: "4.7", cy: "68.9" },
    { cx: "13.4", cy: "68.9" },
    { cx: "22", cy: "68.9" },
    { cx: "30.6", cy: "68.9" },
    { cx: "39.2", cy: "68.9" },
    { cx: "47.8", cy: "68.9" },
    { cx: "56.5", cy: "68.9" },
    { cx: "65.1", cy: "68.9" },
    { cx: "73.7", cy: "68.9" },
    { cx: "82.3", cy: "68.9" },
    { cx: "90.9", cy: "68.9" },
    { cx: "9.1", cy: "76.2" },
    { cx: "17.7", cy: "76.2" },
    { cx: "26.3", cy: "76.2" },
    { cx: "34.9", cy: "76.2" },
    { cx: "43.5", cy: "76.2" },
    { cx: "52.2", cy: "76.2" },
    { cx: "60.8", cy: "76.2" },
    { cx: "69.4", cy: "76.2" },
    { cx: "78", cy: "76.2" },
    { cx: "86.6", cy: "76.2" },
    { cx: "95.3", cy: "76.2" },
    { cx: "4.7", cy: "83.9" },
    { cx: "13.4", cy: "83.9" },
    { cx: "22", cy: "83.9" },
    { cx: "30.6", cy: "83.9" },
    { cx: "39.2", cy: "83.9" },
    { cx: "47.8", cy: "83.9" },
    { cx: "56.5", cy: "83.9" },
    { cx: "65.1", cy: "83.9" },
    { cx: "73.7", cy: "83.9" },
    { cx: "82.3", cy: "83.9" },
    { cx: "90.9", cy: "83.9" },
    { cx: "9.1", cy: "91.3" },
    { cx: "17.7", cy: "91.3" },
    { cx: "26.3", cy: "91.3" },
    { cx: "34.9", cy: "91.3" },
    { cx: "43.5", cy: "91.3" },
    { cx: "52.2", cy: "91.3" },
    { cx: "60.8", cy: "91.3" },
    { cx: "69.4", cy: "91.3" },
    { cx: "78", cy: "91.3" },
    { cx: "86.6", cy: "91.3" },
    { cx: "95.3", cy: "91.3" },
  ];

  return (
    <svg
      className="PennyRound"
      id="a092b8c9-05e3-4b05-b43b-ac1b26260135"
      data-name="a525e934-690d-4aef-a897-9e683fe4aae0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value, index) => {
        const id = `point-${index}`;
        return (
          <circle
            key={nanoid()}
            id={id}
            cx={value.cx}
            cy={value.cy}
            r="3.8"
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
