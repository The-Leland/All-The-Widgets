


import React, { useState } from "react";

function RbgSlide() {
  const [rgb, setRgb] = useState({ red: 0, green: 0, blue: 0 });

  const handleChange = (color, value) => {
    setRgb(prevRgb => ({ ...prevRgb, [color]: value }));
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`,
        }}
      ></div>
      <label>
        Red: {rgb.red}
        <input
          type="range"
          min="0"
          max="255"
          value={rgb.red}
          onChange={(e) => handleChange("red", e.target.value)}
        />
      </label>
      <br />
      <label>
        Green: {rgb.green}
        <input
          type="range"
          min="0"
          max="255"
          value={rgb.green}
          onChange={(e) => handleChange("green", e.target.value)}
        />
      </label>
      <br />
      <label>
        Blue: {rgb.blue}
        <input
          type="range"
          min="0"
          max="255"
          value={rgb.blue}
          onChange={(e) => handleChange("blue", e.target.value)}
        />
      </label>
      <br />
    </div>
  );
}

export default RbgSlide;
