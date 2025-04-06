


import React, { useState } from "react";

function RefactorShowHide() {
  const [isVisible, setIsVisible] = useState(true); 

  const toggleVisibility = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  return (
    <div>
      {isVisible && <h2>Hide Me</h2>}
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default RefactorShowHide;
