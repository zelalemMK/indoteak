import { useState, useEffect } from "react";

import Header from "./components/header/header";
import ChooseDesign from "./components/chooseDesign/chooseDesign";
import ChooseColor from "./components/chooseColor/chooseColor";
import ChooseFinish from "./components/chooseFinish/chooseFinish";

import "./reset.css";
import "./square.css";
import "./App.css";


// Listen for the load event to determine if the page was reloaded
window.addEventListener("load", function () {
    // Check if the page was reloaded
    if (sessionStorage.getItem("isReloaded")) {
        // Clear the session storage to prevent infinite loop
        sessionStorage.removeItem("isReloaded");

        // Redirect to home page only if the current path is not the home page
        if (window.location.pathname !== "/") {
            window.location.href = '/'; // Change '/' to your home page URL if different
        }
    }
});

// Listen for the beforeunload event to detect when the page is about to be left (refreshed or closed)
window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("isReloaded", "true");
});



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
