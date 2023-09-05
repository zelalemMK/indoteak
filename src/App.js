import React, { useState } from "react";
import "./App.css";
import Header from './components/header/header'
import ChooseDesign from "./components/chooseDesign/choose_design";
import ChooseColor from "./components/chooseColor/choose_color";
import DesignPattern from './components/svg/patterns'
// import ChooseColorWithDesign from './components/svg/patterns'
import ChooseFinish from "./components/chooseFinish/chooseFinish";

function App() {
  const designWrapper = () =>  (DesignPattern)
  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(designWrapper);

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

  function designSelect(designWrapper) {
    // console.log(design);
    setSelectedDesign(designWrapper);
    setStep(2);
  }

  return (

    <div>
      {<Header />}
      {step === 1 && (
        <ChooseDesign
          onDesignSelect={() => designSelect(designWrapper)}
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
