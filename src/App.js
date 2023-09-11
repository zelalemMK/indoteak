import React, { useState } from "react";
import "./App.css";
import ChooseDesign from "./components/chooseDesign/chooseDesign";
import ChooseColor from "./components/chooseColor/chooseColor";


function App() {
  

  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(null);

  //next step buttons designs out of time
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {/* {<Header />} */}
      {step === 1 && (
        <ChooseDesign
          selectedDesign={selectedDesign}
          onDesignSelect={setSelectedDesign}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 2 && selectedDesign && (
        <ChooseColor
          DesignComponent={selectedDesign}
          setColorMap={selectedDesign}
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
