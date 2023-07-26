import React, { useState } from "react";
import "./App.css";
import Header from './components/header/header'
import ChooseDesign from "./components/chooseDesign/choose_design";
import ChooseColor from "./components/chooseColor/choose_color";
// import ChooseFinish from "./components/h";
// import Design1 from "./components/sgv_designs/design1";
import DesignPattern from './components/svg/patterns'
// import ChooseFinish from "./components/chooseFinish/chooseFinish";

function App() {
  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(DesignPattern);

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
    // <div>
    //   <Header />
    //   {/* <ChooseDesign /> */}
    // <ChooseColor />
    //   <ChooseFinish />
    // </div>
    <div>
      <Header />
      {step === 1 && (
        <ChooseDesign onDesignSelect={designSelect} colorMap={colorMap} nextStep={nextStep} />
      )}
      {step === 2 && selectedDesign && (
        <ChooseColor
          DesignComponent={selectedDesign}
          defaultColorMap={defaultColorMap}
          colorMap={colorMap}
          setColor={setColorMap}
          nextStep={nextStep}
          prevStep={prevStep}
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
