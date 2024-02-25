import { useState, useEffect } from "react";

import Header from "./components/header/header"
import ChooseDesign from "./components/chooseDesign/chooseDesign";
import ChooseColor from "./components/chooseColor/chooseColor";
import ChooseFinish from "./components/chooseFinish/chooseFinish";

import "./reset.css"
import "./square.css";
import "./App.css";



function App() {

  const [colorMap, setColorMap] = useState({});
  const [step, setStep] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState(null);

useEffect(() => {
  // Function to handle back button navigation
  const handleBackButton = (event) => {
    // You can add more sophisticated logic here if needed
    setStep(window.history.state?.step || 1);
  };

  window.addEventListener("popstate", handleBackButton);

  return () => {
    window.removeEventListener("popstate", handleBackButton);
  };
}, []);

const nextStep = () => {
  const newStep = step + 1;
  setStep(newStep);
  // Update browser history
  window.history.pushState(
    { step: newStep },
    `Step ${newStep}`,
    `/step${newStep}`
  );
};

const prevStep = () => {
  // This will trigger 'popstate' event
  window.history.back();
};



  return (
    <div className="app">
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
