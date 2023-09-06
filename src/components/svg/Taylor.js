import { nanoid } from "nanoid";


const Taylor = () => {
  const polygons = [
    { id: "one", points: "0,0 25,0 0,50" },
    { id: "two", points: "0,50 25,50 25,0" },
    { id: "three", points: "25,0 50,0 50,50" },
    { id: "four", points: "25,0 25,50 50,50" },
    { id: "five", points: "50,0 75,0 50,50" },
    { id: "six", points: "75,0 75,50 50,50" },
    { id: "seven", points: "75,0 75,50 100,50" },
    { id: "eight", points: "75,0 100,0 100,50" },
    { id: "nine", points: "0,100 25,100 0,50" },
    { id: "ten", points: "0,50 25,50 25,100" },
    { id: "eleven", points: "25,100 50,100 50,50" },
    { id: "twelve", points: "25,100 25,50 50,50" },
    { id: "thirteen", points: "50,100 75,100 50,50" },
    { id: "fourteen", points: "75,100 75,50 50,50" },
    { id: "fifteen", points: "75,100 75,50 100,50" },
    { id: "sixteen", points: "75,100 100,100 100,50" },
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="first" className="one" stroke="black" strokeWidth=".5">
        {polygons.map((polygon) => {
          return (
            <polygon
              key={nanoid()}
              id={polygon.id}
              points={polygon.points}
              fill={"white"} 
              onClick={() => alert(`printed at taylor.js ${polygon.id}`)}
            />
          );
        })}
      </g>
    </svg>
  );
};
export default Taylor;
