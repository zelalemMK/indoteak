import { nanoid } from "nanoid";
import React from "react";

export default function Herringbone() {
  const values = [
    { x: "-2.117", y: "13.5114", transform: "translate(-7.3586 14.9275) rotate(-45)", },
    { x: "21.6572", y: "18.0288", transform: "translate(50.3119 62.5672) rotate(-135)", },
    { x: "-2.117", y: "22.4814", transform: "translate(-13.7013 17.5547) rotate(-45)", },
    { x: "21.6572", y: "26.9988", transform: "translate(43.9691 77.88) rotate(-135)", },
    { x: "-2.117", y: "31.4514", transform: "translate(-20.0441 20.182) rotate(-45)", },
    { x: "21.6572", y: "35.9688", transform: "translate(37.6264 93.1927) rotate(-135)", },
    { x: "-2.117", y: "40.4214", transform: "translate(-26.3868 22.8092) rotate(-45)", },
    { x: "21.6572", y: "44.9388", transform: "translate(31.2836 108.5055) rotate(-135)", },
    { x: "-2.117", y: "49.3914", transform: "translate(-32.7296 25.4365) rotate(-45)", },
    { x: "21.6572", y: "53.9088", transform: "translate(24.9409 123.8182) rotate(-135)", },
    { x: "-2.117", y: "58.3614", transform: "translate(-39.0723 28.0637) rotate(-45)", },
    { x: "21.6572", y: "62.8788", transform: "translate(18.5981 139.131) rotate(-135)", },
    { x: "-2.117", y: "67.3314", transform: "translate(-45.4151 30.691) rotate(-45)", },
    { x: "21.6572", y: "71.8488", transform: "translate(12.2554 154.4437) rotate(-135)", },
    { x: "-2.117", y: "76.3014", transform: "translate(-51.7578 33.3182) rotate(-45)", },
    { x: "21.6572", y: "80.8188", transform: "translate(5.9126 169.7565) rotate(-135)", },
    { x: "45.4292", y: "13.5114", transform: "translate(6.5674 48.5477) rotate(-45)", },
    { x: "69.2034", y: "18.0288", transform: "translate(131.4783 96.1875) rotate(-135)", },
    { x: "45.4292", y: "22.4814", transform: "translate(0.2246 51.175) rotate(-45)", },
    { x: "69.2034", y: "26.9988", transform: "translate(125.1356 111.5002) rotate(-135)", },
    { x: "45.4292", y: "31.4514", transform: "translate(-6.1181 53.8022) rotate(-45)", },
    { x: "69.2034", y: "35.9688", transform: "translate(118.7928 126.813) rotate(-135)", },
    { x: "45.4292", y: "40.4214", transform: "translate(-12.4609 56.4295) rotate(-45)", },
    { x: "69.2034", y: "44.9388", transform: "translate(112.4501 142.1257) rotate(-135)", },
    { x: "45.4292", y: "49.3914", transform: "translate(-18.8036 59.0567) rotate(-45)", },
    { x: "69.2034", y: "53.9088", transform: "translate(106.1073 157.4385) rotate(-135)", },
    { x: "45.4292", y: "58.3614", transform: "translate(-25.1463 61.684) rotate(-45)", },
    { x: "69.2034", y: "62.8788", transform: "translate(99.7646 172.7512) rotate(-135)", },
    { x: "45.4292", y: "67.3314", transform: "translate(-31.4891 64.3112) rotate(-45)", },
    { x: "69.2034", y: "71.8488", transform: "translate(93.4218 188.064) rotate(-135)", },
    { x: "45.4292", y: "76.3014", transform: "translate(-37.8318 66.9385) rotate(-45)", },
    { x: "69.2034", y: "80.8188", transform: "translate(87.0791 203.3767) rotate(-135)", },
  ];

  return (
    <svg
      id="bfb63e56-828b-4567-a33b-b8ff132d7a51"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {values.map((value) => {   
        return (
          <rect
            key={nanoid()}
            x={value.x}
            y={value.y}
            width={"32.9136"}
            height={"5.6697"}
            transform={value.transform}
            fill="#fff"
            stroke="#000"
            strokeWidth="0.3863"
          />
        );
      })}
    </svg>
  );
}
