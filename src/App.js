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

  //next step buttons designs out of time
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // function designSelect(design) {
  //   setSelectedDesign(design);
  //   setStep(2);
  // }

  return (
    <div>
      {/* {<Header />} */}
      {step === 1 && (
        <ChooseDesign
          selectedDesign={selectedDesign}
          onDesignSelect={setSelectedDesign}
          onClick={() => setSelectedDesign()}
          nextStep={nextStep}
        />
      )}
      {step === 2 && selectedDesign && (
        <ChooseColor
          DesignComponent={selectedDesign}
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
