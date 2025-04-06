


import React, { useState } from "react";

function TextAlign() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div>
      <h2 style={{ textAlign: alignment }}>This is a line of text.</h2>
      <button onClick={() => setAlignment("left")}>Left</button>
      <button onClick={() => setAlignment("center")}>Center</button>
      <button onClick={() => setAlignment("right")}>Right</button>
    </div>
  );
}

export default TextAlign;
