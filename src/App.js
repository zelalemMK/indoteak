import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/header/header'
import ChooseDesign from "./components/chooseDesign/chooseDesign";
import ChooseColor from "./components/chooseColor/chooseColor";


// import Taylor from './components/svg/patterns';
import Barrel from "./assets/designs/Barrel";
import Chevron from "./assets/designs/Chevron";
import Emma from "./assets/designs/Emma";
import Frank from "./assets/designs/Frank";
import Herringbone from "./assets/designs/Herringbone";
import Hex from "./assets/designs/Hex";
import PennyRound from "./assets/designs/PennyRound";
import Taylor from "./assets/designs/Taylor";
import Tommy from "./assets/designs/Tommy";
import Twister from "./assets/designs/Twister";
import Rectanlge from "./assets/designs/Rectangle";
import Fields from "./assets/designs/Fields";

function App() {

  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const defaultColorMap = [
    { id: "one", fill: "white" },
    { id: "two", fill: "white" },
    { id: "three", fill: "white" },
    { id: "four", fill: "white" },
    { id: "five", fill: "white" },
    { id: "six", fill: "white" },
    { id: "seven", fill: "white" },
    { id: "eight", fill: "white" },
    { id: "nine", fill: "white" },
    { id: "ten", fill: "white" },
    { id: "eleven", fill: "white" },
    { id: "twelve", fill: "white" },
    { id: "thirteen", fill: "white" },
    { id: "fourteen", fill: "white" },
    { id: "fifteen", fill: "white" },
    { id: "sixteen", fill: "white" },
  ];
  const [colorMap, setColorMap] = useState(defaultColorMap);

  

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  function designSelect(design) {
    // console.log(design);
    setSelectedDesign(design);
    setStep(2);
  }

  return (
    <div>
      {/* {<Header />} */}
      {step === 1 && (
        <ChooseDesign
          selectedDesign={selectedDesign}
          onDesignSelect={setSelectedDesign}
          onClick={() => setSelectedDesign()}
          colorMap={colorMap}
          nextStep={nextStep}
        />
      )}
      {step === 2 && selectedDesign && (
        <ChooseColor
          DesignComponent={selectedDesign}
          defaultColorMap={defaultColorMap}
        />
      )}
      {/* {step === 3 && selectedDesign && (
        <ChooseFinish
          DesignComponent={selectedDesign}
          colorMap={colorMap}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )} */}
    </div>
  );
}

export default App;
