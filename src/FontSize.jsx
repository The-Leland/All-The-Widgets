


import React, { useState } from "react";

function FontSize() {
  const [fontSize, setFontSize] = useState(20); 

  const grow = () => {
    if (fontSize < 100) {
      setFontSize(prevSize => prevSize + 5);
    }
  };

  const shrink = () => {
    if (fontSize > 0) {
      setFontSize(prevSize => prevSize - 5);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: `${fontSize}px` }}>This is some adjustable text!</h2>
      <button onClick={grow}>Grow</button>
      <button onClick={shrink}>Shrink</button>
    </div>
  );
}

export default FontSize;
