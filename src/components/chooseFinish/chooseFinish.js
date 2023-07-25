import React from "react";

const ChooseFinish = ({onFinishSelect}) => {
      const finishes = [
        { name: "Finish 1", color: "#FF0000" }, // Red
        { name: "Finish 2", color: "#00FF00" }, // Green
        { name: "Finish 3", color: "#0000FF" }, // Blue
      ];

      return (
        <div>
            <h2>Select a finish</h2>
            {finishes.map((finish, index) => (
                <button key={index} style={{backgroundColor: finish.color}}
                onClick={() => onFinishSelect(finish)} >
                    {finish.name}
                </button>
            ))}
        </div>
      )
}

export default ChooseFinish;