import React, { useState } from "react";
import "./App.css";
import Header from './components/header/header'
import ChooseDesign from "./components/chooseDesign/choose_design";
import ChooseColor from "./components/chooseColor/choose_color";
// import ChooseFinish from "./components/h";
// import Design1 from "./components/sgv_designs/design1";
import DesignPattern from './components/svg/patterns'

function App() {
  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [colorMap, setColorMap] = useState({});

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  function designSelect(design) {
    console.log(design);
    setSelectedDesign(design);
    setStep(2);
  }

  return (
    <div>
      {/* <DesignPattern /> */}
      <ChooseColor />
    </div>
    // <div>
    //   <Header />
    //   {step === 1 && (
    //     <ChooseDesign onDesignSelect={designSelect} nextStep={nextStep} />
    //   )}
    //   {step === 2 && selectedDesign && (
    //     <ChooseColor
    //       // DesignComponent={selectedDesign}
    //       colorMap={colorMap}
    //       setColor={setColorMap}
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //     />
    //   )}
    //   {/* {step === 3 && selectedDesign && (
    //     <ChooseFinish
    //       DesignComponent={selectedDesign}
    //       colorMap={colorMap}
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //     />
    //   )} */}
    // </div>
  );
}

export default App;
