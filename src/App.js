import React, { useState } from "react";
import "./App.css";
import ChooseDesign from "./components/chooseDesign/chooseDesign";
import ChooseColor from "./components/chooseColor/chooseColor";
import ChooseFinish from "./components/chooseFinish/chooseFinish";
import { Helmet } from "react-helmet";



function App() {
  const [colorMap, setColorMap] = useState({});

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
        />
      )}
      {step === 2 && selectedDesign && (
        <ChooseColor
          DesignComponent={selectedDesign}
          colorMap={colorMap}
          setColorMap={setColorMap}
          // setColorMap={selectedDesign}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 3 && selectedDesign && (
        <ChooseFinish
          DesignComponent={selectedDesign}
          colorMap={colorMap}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
    </div>
  );
}

export default App;
