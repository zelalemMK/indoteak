import React, { useState }  from "react";
import "./main.css"



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


const ChooseDesign = () => {
    return (
        <div>
        <DesignPatterns />

        </div>
    );
}

const DesignPatterns = () => {
    return (
        <div className="design-patterns">
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
            <div className="pattern-box"></div>
        </div>
  );
}

const ChooseColor = () => {
    return (
    <div>
        <DisplayDesignChosen />
        <ColorSection />
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

const ColorSection = () => {
      const colors = ['#FF5733', '#900C3F', '#C70039', '#FFC300', '#DAF7A6', '#581845', '#4A235A', '#5B2C6F', '#7D3C98', '#2E4053', '#1B4F72', '#21618C', '#2874A6', '#2E86C1', '#AED6F1', '#EAF2F8'];

  return (
    <div className="color-section">
      {colors.map((color, index) => (
        <div 
          key={index}
          className="color-box"
          style={{backgroundColor: color}}
        />
      ))}
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