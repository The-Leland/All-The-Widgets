


import React, { useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("black");
  const [inputColor, setInputColor] = useState("");

  const handleChange = (e) => {
    setInputColor(e.target.value);
  };

  const handleUpdate = () => {
    setColor(inputColor);
    setInputColor(""); 
  };

  return (
    <div>
      <h1 style={{ color: color }}>{color}</h1>
      <input
        type="text"
        value={inputColor}
        onChange={handleChange}
        placeholder="Enter a color name"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default ColorChange;
