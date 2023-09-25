import React, { useState, useEffect } from "react";

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



  //next step buttons designs out of time
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

      const [hideSplash, setHideSplash] = useState(false);
      const [showContent, setShowContent] = useState(false);

      const handleClick = () => {
        setHideSplash(true);
      };
      

      useEffect(() => {
        if (hideSplash) {
          setTimeout(() => {
            setShowContent(true);
          }, 2000); // 2-second delay to fade out the splash screen
        }
      }, [hideSplash]);

    useEffect(() => {
      if (hideSplash) {
        setTimeout(() => {
          setShowContent(true);
        }, 1000);
      }
    }, [hideSplash]);
  return (
    <div>
      <div
        className={`splash-screen ${hideSplash ? "hide" : ""}`}
        onClick={handleClick}
      >
        <img src={logo} alt="logo" />
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
