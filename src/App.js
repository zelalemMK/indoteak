import React, { useEffect, useRef, useState } from "react";

import Header from "./components/header/header"
import ChooseDesign from "./components/chooseDesign/chooseDesign";
import ChooseColor from "./components/chooseColor/chooseColor";
import ChooseFinish from "./components/chooseFinish/chooseFinish";

import logo from "./components/header/indoteak.png"

import "./App.css";




function App() {

  const [colorMap, setColorMap] = useState({});
  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [fadeOut, setFadeOut] = useState(false)
  const [displayNone, setDisplayNone] = useState(false)
  const coverRef = useRef(null)
  //next step buttons designs out of time
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFadeClick = () => {
    setFadeOut(true)
  }


  // Handle when the initial animation has happened and set the display to none for the cover. 
  useEffect(() => {
    const node = coverRef.current;
    const handleDisplayNone = () => setDisplayNone(true)

    node.addEventListener("transitionend", handleDisplayNone);
    return () => {
      node.removeEventListener("transitionend", handleDisplayNone);
    };
  })


  return (
    <div className="app">
      <div
        ref={coverRef}
        className={`cover ${fadeOut ? "fade-out" : ""} ${
          displayNone ? "display-none" : ""
        }`}
        onClick={handleFadeClick}
      >
        <img src={logo} alt="logo" className="logo" />
      </div>
      <Header />
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
