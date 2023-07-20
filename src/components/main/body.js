import React, { useState }  from "react";
import "./main.css"
import rectangle from "./rectangle.svg"
import ChooseColor from "../svg/patterns";
import ChooseDesign from './choose_design'


const MainBody = () => {
    const [step, setStep] = useState(1);
    const nextStep = () => {
    // Only increment step if it's less than 3
    if (step < 4) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const prevStep = () => {
    // Only decrement step if it's greater than 1
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };
    return (
        <div>
            {step === 1 && <ChooseDesign />}
            {step === 2 && <ChooseColor />}
            {step === 3 && <ChooseFinish />}
            {step === 4 && <LastPage />}
            <div>
        {/* Only show "Back" button if step is greater than 1 */}
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {/* Only show "Next" button if step is less than 3 */}
        {step < 4 && <button onClick={nextStep}>Next</button>}
      </div>
        </div>
    );
}

const DesignPatterns = () => {
    return (
        <div className="design-patterns">
            <img src={rectangle} alt="design-1" />
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
        </div>
  );
}


const DisplayDesignChosen = () => {
    const placeholderImage = "https://via.placeholder.com/500";
    return (
    <div className="display-design-chosen">
      <img src={placeholderImage} alt="Chosen Design" className="design-image" />
    </div>
  );
}


const ChooseFinish = () => {
  return (
    <div>
      <DisplayDesignChosen />
      <FinishingOptions />
    </div>
  );
}

const FinishingOptions = () => {
    const finishes = ['Finish 1', 'Finish 2', 'Finish 3'];

    return (
        <div className="finishing-options">
            {finishes.map((finish, index) => (
            <div 
                key={index}
                className="finish-box"
                >
            {finish}
        </div>
      ))}
    </div>
  );
}


const LastPage = () => {
    return (
        <div>
            <p>Last page</p>
        </div>
    )
}


export default MainBody;