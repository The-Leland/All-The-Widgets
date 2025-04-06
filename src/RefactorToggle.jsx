


import React, { useState } from "react";

function RefactorToggle() {
  const [isHello, setIsHello] = useState(true); 

  const toggleGreeting = () => {
    setIsHello(prevIsHello => !prevIsHello);
  };

  return (
    <div>
      <h2>{isHello ? "Hello" : "Goodbye"}</h2>
      <button onClick={toggleGreeting}>Toggle Me</button>
    </div>
  );
}

export default RefactorToggle;
